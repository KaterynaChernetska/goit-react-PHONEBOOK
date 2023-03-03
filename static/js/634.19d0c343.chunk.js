"use strict";(self.webpackChunkgoit_react_PHONEBOOK=self.webpackChunkgoit_react_PHONEBOOK||[]).push([[634],{8634:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a=n(4942),r=n(1413),s=n(9439),c={container:"ContactForm_container__qpJ1N",form:"ContactForm_form__dhl+T",input:"ContactForm_input__Bl93P",title:"ContactForm_title__jZguf",submitBtn:"ContactForm_submitBtn__lg06P"},i=n(1686),o=n.n(i),l=n(2791),u=n(9434),m=n(6052),d=n(6916),h=function(e){return e.contactsData.contacts.items},f=function(e){return e.contactsData.contacts.isLoading},p=function(e){return e.contactsData.contacts.error},_=function(e){return e.contactsData.filter},x=(0,d.P1)([h,_],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),v=n(184),j=function(){var e=(0,u.I0)(),t=(0,u.v9)(h),n=(0,l.useState)({name:"",number:""}),i=(0,s.Z)(n,2),d=i[0],f=i[1],p=function(e){var t=e.target.name,n=e.target.value;f((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,n))}))};return(0,v.jsx)("div",{className:c.container,children:(0,v.jsxs)("form",{className:c.form,onSubmit:function(n){n.preventDefault();var a={name:d.name,number:d.number};if(t.some((function(e){return e.name===a.name})))return o().Notify.failure("".concat(a.name," is already in the contacts")),void f({name:"",number:""});e((0,m.uK)(a)),f({name:"",number:""})},children:[(0,v.jsx)("h2",{className:c.title,children:"Add contact"}),(0,v.jsx)("p",{className:c.inputTitle,children:"Name"}),(0,v.jsx)("input",{className:c.input,type:"text",name:"name",value:d.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:p,required:!0,placeholder:"Enter your contact's name"}),(0,v.jsx)("p",{className:c.inputTitle,children:"Number"}),(0,v.jsx)("input",{className:c.input,type:"tel",name:"number",value:d.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:p,placeholder:"Enter your contact's phone",required:!0}),(0,v.jsx)("button",{className:c.submitBtn,type:"submit",children:"Add contact"})]})})},C={deleteBtn:"ContactsList_deleteBtn__GO946",container:"ContactsList_container__r+Txe",listItem:"ContactsList_listItem__KzRCz",name:"ContactsList_name__cbzy1",number:"ContactsList_number__9xIVj",icon:"ContactsList_icon__CcQur"},N=n(2639);var b=function(e){return(0,v.jsxs)("svg",(0,r.Z)((0,r.Z)({fill:"none",viewBox:"0 0 24 24",height:"1em",width:"1em"},e),{},{children:[(0,v.jsx)("path",{fill:"currentColor",d:"M22 12A10.002 10.002 0 0012 2v2a8.003 8.003 0 017.391 4.938A8 8 0 0120 12h2zM2 10V5a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H6a8 8 0 008 8v-2a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-5C7.373 22 2 16.627 2 10z"}),(0,v.jsx)("path",{fill:"currentColor",d:"M17.543 9.704c.302.728.457 1.508.457 2.296h-1.8A4.199 4.199 0 0012 7.8V6a6 6 0 015.543 3.704z"})]}))},g=function(){var e=(0,u.I0)(),t=(0,u.v9)(f),n=(0,u.v9)(p),a=(0,u.v9)(x);return(0,l.useEffect)((function(){e((0,m.yF)())}),[e]),(0,v.jsx)("div",{className:C.container,children:(0,v.jsxs)("ul",{className:C.list,children:[n&&(0,v.jsxs)("p",{children:["Oops, some error occured... Message: ",n]}),t?(0,v.jsx)(N.a,{}):(null===a||void 0===a?void 0:a.length)>0&&a.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,v.jsxs)("li",{className:C.listItem,children:[(0,v.jsx)(b,{className:C.icon}),(0,v.jsxs)("span",{className:C.name,children:[a,":"]}),(0,v.jsx)("span",{className:C.number,children:r}),(0,v.jsx)("button",{className:C.deleteBtn,onClick:function(){return e((0,m.GK)(n))},children:"Delete"})]},n)}))]})})},y="Filter_container__L5eml",z="Filter_input__N7T3z",A="Filter_title__pSkfx",Z=n(1538),F=function(){var e=(0,u.I0)(),t=(0,u.v9)(_),n=(0,u.v9)(h);return(0,v.jsxs)("div",{className:y,children:[(0,v.jsx)("h2",{className:A,children:" Find contacts by name"}),(0,v.jsx)("input",{className:z,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter your contact's name",onChange:function(t){var a=t.target.value.toLowerCase();n.some((function(e){return e.name.toLowerCase().includes(a)}))?e((0,Z.T)(a)):o().Notify.failure("".concat(a," is not in the contacts"))}})]})},B=n(7689),L=n(4217);var w={},O=function(e,t){return function(n){return(0,u.v9)(L.Qb)?(0,v.jsx)(e,(0,r.Z)({},n)):(0,v.jsx)(B.Fg,{to:t})}}((function(){return(0,v.jsxs)("div",{className:w.hero,children:[(0,v.jsx)(j,{}),(0,v.jsx)(F,{}),(0,v.jsx)(g,{})]})}),"/register")}}]);
//# sourceMappingURL=634.19d0c343.chunk.js.map