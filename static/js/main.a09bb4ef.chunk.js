(this.webpackJsonphw16=this.webpackJsonphw16||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(3),i=a.n(r),o=(a(14),a(7)),l=a(4),m=a(5),h=a(8),d=a(6),u=a.p+"static/media/female.562e16d3.png",f=a.p+"static/media/male.7eef6dd7.png",j=a.p+"static/media/question-mark.30557afa.png",p=(a(15),{female:u,male:f,unknown:j}),N=function(e){var t=e.firstName,a=e.lastName,c=e.phone,s=e.gender;return Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("img",{src:p[s],alt:"gender icon"}),Object(n.jsxs)("div",{className:"contact-info",children:[Object(n.jsxs)("div",{className:"contact-name",children:[Object(n.jsx)("span",{className:"first-name",children:t}),Object(n.jsx)("span",{children:a})]}),Object(n.jsx)("span",{className:"phone-number",children:c})]})]})},b=(a(16),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666",gender:"unknown"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],search:""},e.handleSearchChange=function(t){var a=t.target.value;e.setState({search:a})},e.filterContacts=function(t){return e.state.contacts.filter((function(e){var a=e.firstName,n=e.lastName,c=e.phone;return a.toLowerCase().includes(t.toLowerCase())||n.toLowerCase().includes(t.toLowerCase())||c.includes(t)}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.filterContacts(this.state.search);return Object(n.jsxs)("div",{className:"contacts-wrapper",children:[Object(n.jsx)("div",{className:"input-text",children:Object(n.jsx)("input",{type:"text",className:"contact-name",onChange:this.handleSearchChange,value:this.state.search,placeholder:"Search"})}),Object(n.jsx)("div",{className:"contacts",children:e.map((function(e,t){return Object(n.jsx)(N,Object(o.a)({},e),t)}))})]})}}]),a}(c.Component)),g=(a(17),function(){return Object(n.jsx)(b,{})}),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.a09bb4ef.chunk.js.map