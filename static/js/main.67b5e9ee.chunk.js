(this.webpackJsonptempreact=this.webpackJsonptempreact||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),s=n.n(i),d=(n(13),n(8)),l=n(6),r=n(3),j=n.p+"static/media/Todo.bd9a490f.jpg",o=n(0),b=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(r.a)(i,2),b=s[0],u=s[1],m=Object(c.useState)(!0),f=Object(r.a)(m,2),O=f[0],h=f[1],x=Object(c.useState)(null),v=Object(r.a)(x,2),p=v[0],g=v[1],I=function(){if(n)if(n&&!O)u(b.map((function(e){return e.id===p?Object(l.a)(Object(l.a)({},e),{},{name:n}):e}))),h(!0),a(""),g(null);else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(d.a)(b),[e])),a("")}else alert("please fill the Data")};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main-div",children:Object(o.jsxs)("div",{className:"child-div",children:[Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{src:j,alt:"todologo"}),Object(o.jsx)("figcaption",{children:" Add Your List Here.\ud83e\udd11  "})]}),Object(o.jsxs)("div",{className:"addItems",children:[Object(o.jsx)("input",{type:"text",name:"",placeholder:"\u270d\ufe0f Add Items..",value:n,onChange:function(e){return a(e.target.value)}}),O?Object(o.jsx)("i",{className:"fa fa-plus add-btn",title:"Add Items",onClick:I}):Object(o.jsx)("i",{className:"far fa-edit add-btn",title:"Edit Items",onClick:I})]}),Object(o.jsx)("div",{className:"showItems",children:b.map((function(e){return Object(o.jsxs)("div",{className:"eachItem",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("div",{className:"todo-btn",children:[Object(o.jsx)("i",{className:"far fa-edit add-btn",title:"Edit Items",onClick:function(){return function(e){var t=b.find((function(t){return t.id===e}));h(!1),a(t.name),g(e)}(e.id)}}),Object(o.jsx)("i",{className:"far fa-trash-alt add-btn",title:"Delete Items",onClick:function(){return function(e){var t=b.filter((function(t){return e!=t.id}));u(t)}(e.id)}})]})]},e.id)}))}),Object(o.jsx)("div",{className:"showItems",children:Object(o.jsxs)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){u([])},children:[" ",Object(o.jsx)("span",{children:" CHECK LIST"})]})})]})})})},u=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:Object(o.jsx)(b,{})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.67b5e9ee.chunk.js.map