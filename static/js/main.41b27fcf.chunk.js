(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{24:function(e,t,n){e.exports=n(43)},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),u=n(8),o=n(1),m=(n(29),function(){return r.a.createElement("div",{className:"header"},r.a.createElement(u.b,{to:"/",className:"nav-link",exact:!0},"Home page"),r.a.createElement(u.b,{to:"/people",className:"nav-link",exact:!0},"People"))}),i=function(){return r.a.createElement("h1",null,"Home Page")},p=n(22),E=n(15),s=n(55),f=n(14),h=n.n(f),d=n(20);function b(){return(b=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){var t=e.name,n=e.sex,a=e.born,l=e.died,c=e.motherName,u=e.fatherName;return console.log(),r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,u))},x=(n(36),["Name","Sex","Born","Died","Mother","Father"]),N=function(e){var t=e.people;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"People Table!"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,x.map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{className:"Person",key:e.slug},r.a.createElement(v,e))}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,x.map((function(e){return r.a.createElement("th",{key:e},e)}))))))};n(37);var g=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){(function(){return b.apply(this,arguments)})().then((function(e){l(e.map((function(t){return function(e,t){var n=t.find((function(t){return t.name===e.motherName})),a=t.find((function(t){return t.name===e.fatherName}));return Object(E.a)(Object(E.a)({},e),{},{mother:n,father:a})}(t,e)})))}))}),[]),n.length?r.a.createElement(N,{people:n}):r.a.createElement(s.a,null)},j=function(){return r.a.createElement("h2",null,"NotFoundPage")},k=(n(42),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0},r.a.createElement(i,null)),r.a.createElement(o.b,{path:"/people",exact:!0},r.a.createElement(g,null)),r.a.createElement(o.a,{from:"/home",to:"/",exact:!0}),r.a.createElement(j,null)))});c.a.render(r.a.createElement(u.a,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.41b27fcf.chunk.js.map