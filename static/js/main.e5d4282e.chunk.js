(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{24:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),u=n(8),m=n(1),o=(n(29),function(){return r.a.createElement("div",{className:"header"},r.a.createElement(u.b,{to:"/",className:"nav-link",exact:!0},"Home page"),r.a.createElement(u.b,{to:"/people",className:"nav-link",exact:!0},"People"))}),p=function(){return r.a.createElement("h1",null,"Home Page")},i=n(22),E=n(15),f=n(54),s=n(14),h=n.n(s),d=n(20);function b(){return(b=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){var t=e.name,n=e.sex,a=e.born,l=e.died,c=e.motherName,u=e.fatherName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,u))},N=(n(36),["Name","Sex","Born","Died","Mother","Father"]),x=function(e){var t=e.people;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"People Table!"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,N.map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{className:"Person",key:e.slug},r.a.createElement(v,e))}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,N.map((function(e){return r.a.createElement("th",{key:e},e)}))))))};var g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){(function(){return b.apply(this,arguments)})().then((function(e){l(e.map((function(t){return function(e,t){var n=t.find((function(t){return t.name===e.motherName})),a=t.find((function(t){return t.name===e.fatherName}));return Object(E.a)(Object(E.a)({},e),{},{mother:n,father:a})}(t,e)})))}))}),[]),n.length?r.a.createElement(x,{people:n}):r.a.createElement(f.a,null)},j=function(){return r.a.createElement("h2",null,"NotFoundPage")},k=(n(41),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0},r.a.createElement(p,null)),r.a.createElement(m.b,{path:"/people",exact:!0},r.a.createElement(g,null)),r.a.createElement(m.a,{from:"/home",to:"/",exact:!0}),r.a.createElement(j,null)))});c.a.render(r.a.createElement(u.a,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e5d4282e.chunk.js.map