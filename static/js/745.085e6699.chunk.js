/*! For license information please see 745.085e6699.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[745],{9745:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return F},default:function(){return E}});var t,i,a=r(2791),s=r(9434),c=r(6338),o=r(1413),d=r(168),u=r(5867),l=u.ZP.input(t||(t=(0,d.Z)(["\n  display: block;\n  width: 300px;\n  margin-bottom: 8px;\n"]))),h=u.ZP.button(i||(i=(0,d.Z)(["\n  background-color: transparent;\n  border-radius: 3px;\n  padding: 4px 8px;\n  margin-right: 16px;\n  border: 1px solid black;\n  &:hover {\n    color: green;\n    border: 1px solid green;\n  }\n"]))),f=r(6916),x=function(n){return n.phonebook},m=(0,f.P1)(x,(function(n){return n.contacts})),p=(0,f.P1)(x,(function(n){return n.isLoading})),j=((0,f.P1)(x,(function(n){return n.error})),(0,f.P1)(x,(function(n){return n.filterTerm})),function(n){return n.filter}),b=r(887),v=r(1686),g=r(3329),y=function(){var n=(0,b.cI)(),e=n.register,r=n.handleSubmit,t=n.reset,i=n.formState.errors,d=(0,s.I0)(),u=(0,s.v9)(m);(0,a.useEffect)((function(){d((0,c.yF)())}),[d]);return(0,g.jsx)("div",{children:(0,g.jsxs)("form",{onSubmit:r((function(n){var e={name:n.name,number:n.number};if(u.find((function(n){return n.name===e.name})))return v.Notify.failure("".concat(e.name," is already in contacts"));d((0,c.uK)(e)),t()})),children:[(0,g.jsxs)("label",{children:[(0,g.jsx)("span",{children:"Name:"}),(0,g.jsx)(l,(0,o.Z)((0,o.Z)({},e("name",{required:!0})),{},{type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name"})),i.name&&(0,g.jsx)("span",{children:"This field is required"})]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("span",{children:"Number:"}),(0,g.jsx)(l,(0,o.Z)((0,o.Z)({},e("number",{required:!0})),{},{type:"tel",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter number (123-45-67)"})),i.number&&(0,g.jsx)("span",{children:"This field is required"})]}),(0,g.jsx)(h,{type:"submit",children:"Add contact"})]})})},w=r(3430),C=function(){return(0,g.jsx)("div",{children:(0,g.jsx)(w.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0})})},k=r(9135),P=function(){var n=(0,s.I0)(),e=(0,s.v9)(m),r=(0,s.v9)(p),t=function(n,e){return null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}(e,(0,s.v9)(j));(0,a.useEffect)((function(){n((0,c.yF)())}),[n]);return(0,g.jsxs)("div",{children:[r&&(0,g.jsx)(C,{}),(0,g.jsx)("ul",{children:Array.isArray(e)&&(null===t||void 0===t?void 0:t.map((function(e){return(0,g.jsxs)("li",{children:[(0,g.jsx)("h4",{children:e.name}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:e.number}),(0,g.jsx)("button",{onClick:function(){return r=e.id,void n((0,c.GK)(r));var r},children:(0,g.jsx)(k.aHS,{})})]})]},e.id)})))})]})},Z=r(7045),A=function(){var n=(0,s.I0)(),e=(0,s.v9)(j);return(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:"Find by name:"}),(0,g.jsx)("input",{type:"text",name:"filter",id:"filter",value:e,onChange:function(e){return n((0,Z.T)(e.target.value))}})]})},F=function(){var n=(0,s.I0)();return(0,a.useEffect)((function(){n((0,c.yF)())}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:"Add new contact"}),(0,g.jsx)(y,{})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:"Contacts list"}),(0,g.jsx)(A,{}),(0,g.jsx)(P,{})]})]})},E=F}}]);
//# sourceMappingURL=745.085e6699.chunk.js.map