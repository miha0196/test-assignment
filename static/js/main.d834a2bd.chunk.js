(this["webpackJsonptest-assignment"]=this["webpackJsonptest-assignment"]||[]).push([[0],{30:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(12),s=n.n(o),a=n(16),i=n(7),r=n(2),u=n(47),l=n(46),d=n(15),j=(n(30),n(1)),b=function(t){var e=t.onAddToDo,n=Object(c.useState)(""),o=Object(i.a)(n,2),s=o[0],a=o[1],r=Object(c.useCallback)((function(t){t.preventDefault(),s&&(e(s.trim()),a(""))}),[s,e]);return Object(j.jsx)("div",{className:"Add-todo",children:Object(j.jsxs)("form",{className:"Add-todo__form",onSubmit:function(t){return r(t)},children:[Object(j.jsx)("textarea",{className:"Add-todo__input",onChange:function(t){return a(t.target.value)},value:s,rows:2}),Object(j.jsx)("button",{type:"submit",className:"Add-todo__btn",children:"Send"})]})})},f=(n(32),function(t){var e=t.todo,n=Object(c.useState)(["Todo-list-item"]),o=Object(i.a)(n,2),s=o[0],a=o[1];return Object(c.useEffect)((function(){a((function(t){return[].concat(Object(d.a)(t),["Todo-list-item_done"])}))}),[]),Object(j.jsx)("li",{className:s.join(" "),children:Object(j.jsx)("pre",{children:e})})}),O=(n(33),function(t){var e=t.todoList;return Object(j.jsxs)("ul",{className:"Todo-list",children:[0===e.length&&Object(j.jsx)("li",{className:"Todo-list__placeholder",children:"\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0435\u0439"}),e.map((function(t){return Object(j.jsx)(f,{todo:t.value},t.id)}))]})}),m=(n(34),function(){var t=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("todos")||"[]")})),e=Object(i.a)(t,2),n=e[0],o=e[1],s=Object(c.useCallback)((function(t){var e=Math.random().toString().substr(2,10);o((function(n){return localStorage.setItem("todos",JSON.stringify([].concat(Object(d.a)(n),[{value:t,id:e}]))),[].concat(Object(d.a)(n),[{value:t,id:e}])}))}),[]),a=Object(c.useCallback)((function(){o((function(){return localStorage.setItem("todos",JSON.stringify([])),[]}))}),[]);return Object(j.jsxs)("div",{className:"Main-page",children:[Object(j.jsx)(b,{onAddToDo:s}),Object(j.jsx)(O,{todoList:n}),Object(j.jsx)("button",{type:"reset",className:"btn btn-primary",onClick:function(){return a()},disabled:0===n.length,children:"Clear all"})]})}),h=(n(35),function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){var t=setInterval((function(){o((new Date).toLocaleTimeString())}),370);return function(){return clearInterval(t)}}),[]),Object(j.jsx)("div",{className:"Clock",children:Object(j.jsx)("div",{className:"Clock__time",children:n})})}),p=(n(36),function(){return Object(j.jsx)("div",{className:"Clock-page",children:Object(j.jsx)(h,{})})}),v=function(t){var e=t.topOffset,n=Object(r.g)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,e)}),[n,e]),null},x=(n(42),function(){var t=Object(r.f)(),e=Object(r.g)(),n=Object(c.useState)("left"),o=Object(i.a)(n,2),s=o[0],a=o[1],d=Object(c.useRef)(0),b=Object(c.useRef)(0),f=Object(c.useCallback)((function(e,n){if(e-n>document.documentElement.scrollWidth/4){if("/clock"===t.location.pathname)return;d.current=window.pageYOffset,a("left"),t.push("/clock")}if(n-e>document.documentElement.scrollWidth/4){if("/"===t.location.pathname)return;a("right"),t.push("/")}}),[t]),O=Object(c.useCallback)((function(t){b.current=t.changedTouches[0].pageX}),[]),h=Object(c.useCallback)((function(t){b.current=t.clientX}),[]),x=Object(c.useCallback)((function(t){f(b.current,t.clientX)}),[f]),w=Object(c.useCallback)((function(t){f(b.current,t.changedTouches[0].pageX)}),[f]);return Object(c.useEffect)((function(){return window.addEventListener("touchstart",O),window.addEventListener("touchend",w),window.addEventListener("mousedown",h),window.addEventListener("mouseup",x),function(){window.removeEventListener("touchstart",O),window.removeEventListener("touchstart",w),window.addEventListener("mousedown",h),window.addEventListener("mouseup",x)}}),[O,w,h,x]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(u.a,{children:Object(j.jsx)(l.a,{classNames:"".concat("left"===s?"swipe-left":"swipe-right"),timeout:300,children:Object(j.jsxs)(r.c,{location:e,children:[Object(j.jsxs)(r.a,{path:"/",exact:!0,children:[Object(j.jsx)(v,{topOffset:d.current}),Object(j.jsx)(m,{})]}),Object(j.jsx)(r.a,{path:"/clock",children:Object(j.jsx)(p,{})})]})},e.key)})})});n(43);s.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d834a2bd.chunk.js.map