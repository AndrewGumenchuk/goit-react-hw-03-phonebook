(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),r=n(7),s=n.n(r),o=(n(15),n(9)),l=n(2),u=n(3),m=n(5),h=n(4),b=(n(16),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,i=t.number;return Object(a.jsxs)("li",{className:"item_contact",children:[Object(a.jsx)("p",{className:"item_text",children:c}),Object(a.jsx)("p",{className:"item_text",children:i}),Object(a.jsx)("button",{className:"item_buttom",onClick:function(){return n(e)},children:"delete"})]},e)}))})}),d=n(22),j=n(8),f=(n(17),function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:"item_form",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["\u0406\u043c\u2019\u044f",Object(a.jsx)("input",{className:"item_input",type:"text",name:"name",placeholder:"Annie Copeland",value:e,onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["Phone",Object(a.jsx)("input",{className:"item_input",type:"text",name:"number",placeholder:"111-11-11",value:n,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",disabled:""===e||""===n,children:"Save contact"})]})}}]),n}(c.Component)),p=(n(18),function(t){var e=t.value,n=t.onChangle;return Object(a.jsxs)("label",{className:"item_filter",children:[Object(a.jsx)("p",{className:"item_text-filter",children:"Contacts search"}),Object(a.jsx)("input",{className:"item_element",type:"text",value:e,onChange:n})]})}),O=(n(19),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),v=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:O,filter:""},t.addContact=function(e,n){var a=t.state.contacts,c={id:Object(d.a)(),name:e,number:n};a.find((function(t){return t.name===c.name}))?alert("".concat(c.name," is already in contacts.")):t.setState((function(t){return{contacts:[c].concat(Object(o.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(a.jsxs)("div",{className:"Container",children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(p,{value:t,onChangle:this.changeFilter}),Object(a.jsx)(b,{contacts:n,onDeleteContact:this.deleteContact})]})}}]),n}(i.a.Component);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.286d551e.chunk.js.map