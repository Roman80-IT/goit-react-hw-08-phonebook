/*! For license information please see 276.7fbb2d5a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[276],{7276:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return D},default:function(){return O}});var t,i,a,o,s,c,d,l,u,p,x=r(1413),f=r(9434),h=r(6338),m=r(6916),b=function(n){return n.phonebook},g=(0,m.P1)(b,(function(n){return n.contacts})),j=(0,m.P1)(b,(function(n){return n.isLoading})),Z=((0,m.P1)(b,(function(n){return n.error})),(0,m.P1)(b,(function(n){return n.filterTerm})),function(n){return n.filter}),y=r(887),v=r(1686),w=r(168),k=r(5867),P=k.ZP.div(t||(t=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),C=k.ZP.form(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  max-width: 540px;\n\n  gap: 12px;\n"]))),z=r(2172),A=r(3329),N=function(){var n=(0,y.cI)(),e=n.register,r=n.handleSubmit,t=n.reset,i=n.formState.errors,a=(0,f.I0)(),o=(0,f.v9)(g);return(0,A.jsx)(P,{children:(0,A.jsxs)(C,{onSubmit:r((function(n){var e={name:n.name,number:n.number};if(o.find((function(n){return n.name===e.name})))return v.Notify.failure("".concat(e.name," is already in contacts"));a((0,h.uK)(e)),t()})),children:[(0,A.jsxs)(z.lX,{children:[(0,A.jsx)(z.nw,{children:"Name"}),(0,A.jsx)(z.yt,(0,x.Z)((0,x.Z)({},e("name",{required:!0})),{},{type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name"})),i.name&&(0,A.jsx)("span",{children:"This field is required"})]}),(0,A.jsxs)(z.lX,{children:[(0,A.jsx)(z.nw,{children:"Number"}),(0,A.jsx)(z.yt,(0,x.Z)((0,x.Z)({},e("number",{required:!0})),{},{type:"tel",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter number (123-45-67)"})),i.number&&(0,A.jsx)("span",{children:"This field is required"})]}),(0,A.jsx)(z.Mg,{type:"submit",children:"Add contact"})]})})},S=r(2791),q=r(3430),F=function(){return(0,A.jsx)("div",{children:(0,A.jsx)(q.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0})})},I=r(9135),L=k.ZP.div(a||(a=(0,w.Z)(["\n  margin: 0 40px;\n"]))),T=k.ZP.li(o||(o=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 80%;\n  height: 35px;\n  padding: 6px;\n\n  border: 1px solid black;\n  border-radius: 6px;\n  margin-bottom: 10px;\n"]))),_=k.ZP.div(s||(s=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 12px;\n"]))),E=k.ZP.p(c||(c=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n"]))),M=k.ZP.button(d||(d=(0,w.Z)(["\n  display: block;\n\n  cursor: pointer;\n\n  background-color: transparent;\n  color: black;\n  border: none;\n  transition: all 350ms ease-out;\n\n  &:hover,\n  &:focus {\n    color: #cb4335;\n  }\n"]))),X=function(){var n=(0,f.I0)(),e=(0,f.v9)(g),r=(0,f.v9)(j),t=function(n,e){return null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}(e,(0,f.v9)(Z));(0,S.useEffect)((function(){n((0,h.yF)())}),[n]);return(0,A.jsxs)(L,{children:[r&&(0,A.jsx)(F,{}),(0,A.jsx)("ul",{children:Array.isArray(e)&&(null===t||void 0===t?void 0:t.map((function(e){return(0,A.jsxs)(T,{children:[(0,A.jsx)("h4",{children:e.name}),(0,A.jsxs)(_,{children:[(0,A.jsx)(E,{children:e.number}),(0,A.jsx)(M,{onClick:function(){return r=e.id,void n((0,h.GK)(r));var r},children:(0,A.jsx)(I.aHS,{size:"24"})})]})]},e.id)})))})]})},K=r(7045),B=k.ZP.div(l||(l=(0,w.Z)(["\n  display: grid;\n  gap: 40px;\n\n  max-width: 620px;\n  margin: 50px 80px;\n"]))),G=k.ZP.div(u||(u=(0,w.Z)(["\n  padding: 15px;\n  border-radius: 10px;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px, rgba(0, 0, 0, 0.2) 0px 6px 12px;\n"]))),H=k.ZP.h2(p||(p=(0,w.Z)(["\n  margin: 0 auto 22px;\n  font-size: 1.2em;\n\n  text-align: center;\n"]))),J=function(){var n=(0,f.I0)(),e=(0,f.v9)(Z);return(0,A.jsxs)(C,{children:[(0,A.jsx)(H,{children:"Find contact by name:"}),(0,A.jsx)(z.yt,{type:"text",name:"filter",id:"filter",value:e,placeholder:"Filter contacts",onChange:function(e){return n((0,K.T)(e.target.value))}})]})},D=function(){return(0,A.jsxs)(B,{children:[(0,A.jsxs)(G,{children:[(0,A.jsx)(H,{children:"Add contact"}),(0,A.jsx)(N,{})]}),(0,A.jsx)(G,{children:(0,A.jsx)(J,{})}),(0,A.jsxs)(G,{children:[(0,A.jsx)(H,{children:"Contacts"}),(0,A.jsx)(X,{})]})]})},O=D},2172:function(n,e,r){r.d(e,{Mg:function(){return f},l0:function(){return l},lX:function(){return u},nw:function(){return p},yt:function(){return x}});var t,i,a,o,s,c=r(168),d=r(5867),l=d.ZP.form(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  max-width: 540px;\n  height: 100%;\n  margin: 0 auto;\n  margin-top: 70px;\n\n  gap: 10px;\n\n  padding: 25px 15px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px, rgba(0, 0, 0, 0.2) 0px 6px 12px;\n"]))),u=d.ZP.label(i||(i=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 380px;\n  gap: 16px;\n"]))),p=d.ZP.span(a||(a=(0,c.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),x=d.ZP.input(o||(o=(0,c.Z)(["\n  width: 280px;\n  height: 32px;\n\n  font-size: 16px;\n  background: transparent;\n\n  box-sizing: border-box;\n  border: 1px solid black;\n  transition: border 0.3s ease;\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    border: 2px solid black;\n    outline: none;\n    background: transparent;\n  }\n"]))),f=d.ZP.button(s||(s=(0,c.Z)(["\n  width: 120px;\n  height: 32px;\n  margin-top: 20px;\n\n  font-size: 16px;\n\n  background-color: transparent;\n  border: 1px solid black;\n  border-radius: 7px;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    border: 1px solid black;\n    background-color: black;\n    color: white;\n  }\n"])))}}]);
//# sourceMappingURL=276.7fbb2d5a.chunk.js.map