(window.webpackJsonpinstructor_411_wk5_day1_mapstatetoprops=window.webpackJsonpinstructor_411_wk5_day1_mapstatetoprops||[]).push([[0],{119:function(e,t,a){e.exports=a(139)},127:function(e,t,a){},135:function(e,t,a){},137:function(e){e.exports=JSON.parse("{}")},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(98),c=(a(127),a(194)),o=a(196),s=a(197),i=a(148),m=a(102),u=a.n(m),d=a(41),p=function(){return r.a.createElement(c.a,{position:"relative"},r.a.createElement(o.a,null,r.a.createElement(s.a,{color:"inherit"},r.a.createElement(u.a,null)),r.a.createElement(i.a,{variant:"h6",style:{flexGrow:"1"}},"FakeCars.com"),r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(d.b,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(d.b,{to:"/about"},"About")),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(d.b,{to:"/dashboard"},"Dashboard")))))},h=(a(135),a(26)),E=a(23),g=a(198),w=a(199),b=a(200),y=a(201),f=(a(137),function(e){return r.a.createElement("div",{className:"card-container"},e.cars.map(function(e,t){return r.a.createElement(g.a,{key:t,className:"card"},r.a.createElement(w.a,{className:"text-gray"},r.a.createElement("span",null,e.name.toUpperCase()),r.a.createElement("ul",null,r.a.createElement("li",null,"Miles per Gallon: ",e.mpg),r.a.createElement("li",null,"Cylinders: ",e.cylinders),r.a.createElement("li",null,"Horsepower: ",e.horsepower))),r.a.createElement(b.a,null),r.a.createElement(y.a,{style:{color:"mediumblue"}},r.a.createElement(d.b,{to:"/car/".concat(e.id)},"See More Details")))}))}),v=Object(E.b)(function(e){return{cars:e.cars}})(f),k=a(50),O=a(51),C=a(74),j=a(68),x=a(75),A=a(189),S=a(190),D=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(C.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={checked:!0,heading:"About FakeCars.com"},a.toggleSwitch=function(){var e=!a.state.checked;return e?a.setState({heading:"About FakeCars.com",checked:e}):a.setState({heading:"About Cars.com",checked:e})},a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-gray"},r.a.createElement(A.a,{maxWidth:"sm"},r.a.createElement("h1",{style:{textAlign:"center"}},this.state.heading),r.a.createElement("p",null,'FakeCars.com was created to solve a specific problem. That problem is quick and reliable access to details about many different models, all in one place. We had to use the word "Fake" in our name so that we don\'t get sued by the real\xa0',r.a.createElement("a",{style:{color:"mediumblue"},href:"https://www.cars.com",target:"_blank"},"Cars.com"),"\xa0but we won't worry too much about that. We've provided a link to the actual cars.com above and we did not receive any money from them to do so. Although, there's an argument that maybe we should since we are a top-notch coding bootcamp and anyone would want to be associated with us :)"),r.a.createElement(b.a,null),r.a.createElement("p",null,'If you\'d like you can toggle the word "Fake" because why not? We have the potential to be the real cars.com if we wanted to be.'),r.a.createElement(S.a,{checked:this.state.checked,color:"primary",onChange:this.toggleSwitch})))}}]),t}(n.Component),N=a(195),_=a(192),T=function(e){console.log(e);var t=e.match.params.id,a=e.cars.find(function(e){return e.id==t});return r.a.createElement(A.a,{maxWidth:"sm",className:"car-container"},r.a.createElement(N.a,{className:"car-paper"},r.a.createElement("h2",null,a.name),Object.keys(a).map(function(e,t){return r.a.createElement(_.a,{label:"".concat(e,": ").concat(a[e])})})))},P=Object(E.b)(function(e){return{cars:e.cars}})(T),W=a(205),M=a(206),R=a(207),F=a(208),H=a(209),q=a(107),U=a.n(q),G=a(105),I=a.n(G);function J(){return r.a.createElement("h6",null,"Horsepower: \xa0",r.a.createElement("span",{style:{background:"#C13C37"}},"\xa0 \xa0 \xa0"),"\xa0",r.a.createElement("span",null,"Over 200"),"\xa0",r.a.createElement("span",{style:{background:"#E38627"}},"\xa0 \xa0 \xa0"),"\xa0",r.a.createElement("span",null,"Under 200"))}var B=function(e){var t=e.cars.filter(function(e){return e.horsepower>=200}),a=e.cars.filter(function(e){return e.horsepower<=200});return r.a.createElement("div",null,r.a.createElement(I.a,{style:{width:"200px"},data:[{title:"Over",value:t.length,color:"#C13C37"},{title:"Under",value:a.length,color:"#E38627"}],label:!0,labelStyle:{fill:"white",fontSize:"small"}}),r.a.createElement(J,null))},V=Object(E.b)(function(e){return{cars:e.cars}})(B),z=function(e){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Total:"),r.a.createElement("h1",null,e.cars.length))},$=Object(E.b)(function(e){return{cars:e.cars}})(z),K=a(3),L=a(193),Q=a(202),X=a(184),Y=a(204),Z=a(186);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach(function(t){Object(K.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ae=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(C.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,name:"",mpg:"",cylinders:"",horsepower:""},a.toggleDialog=function(){return a.setState({open:!a.state.open})},a.handleTextChange=function(e){var t=te({},a.state);t[e.target.id]=e.target.value,a.setState(t)},a.handleSubmit=function(e){e.preventDefault();var t=te({},a.state);t.id=a.props.carTotal+1,delete t.open,console.log("THE CAR",t),a.props.addCar(t),a.setState({open:!1})},a.componentDidUpdate=function(e,t){t.open!==a.state.open&&a.setState({name:"",mpg:"",cylinders:"",horsepower:""})},a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Add Car:"),r.a.createElement(L.a,{variant:"contained",className:"add-car",onClick:this.toggleDialog},"Add Car")),r.a.createElement("div",null,r.a.createElement(Q.a,{open:this.state.open,onClose:this.toggleDialog},r.a.createElement(X.a,null,"Add New Car"),r.a.createElement(Y.a,null,r.a.createElement("form",{onSubmit:this.handleSubmit,style:{display:"flex",flexDirection:"column",width:"350px"}},r.a.createElement(Z.a,{id:"name",placeholder:"Name",value:this.state.name,onChange:this.handleTextChange,required:!0}),r.a.createElement(Z.a,{id:"mpg",placeholder:"Miles per gallon",value:this.state.mpg,onChange:this.handleTextChange,required:!0}),r.a.createElement(Z.a,{id:"cylinders",placeholder:"Cylinders",value:this.state.cylinders,onChange:this.handleTextChange,required:!0}),r.a.createElement(Z.a,{id:"horsepower",placeholder:"Horsepower",value:this.state.horsepower,onChange:this.handleTextChange,required:!0}),r.a.createElement("br",null),r.a.createElement(L.a,{variant:"contained",color:"primary",type:"submit"},"Submit"))))))}}]),t}(n.Component),ne=Object(E.b)(null,function(e){return{addCar:function(t){e(function(e){return{type:"ADD_CAR",value:e}}(t))}}})(ae),re=function(e){return r.a.createElement(A.a,{maxWidth:"lg",className:"car-container"},r.a.createElement("h4",null,"Welcome, ",e.user.username),r.a.createElement("div",{className:"flex-container"},r.a.createElement(V,null),r.a.createElement($,null),r.a.createElement(ne,{carTotal:e.cars.length})),r.a.createElement(W.a,null,r.a.createElement(M.a,null,r.a.createElement(R.a,null,r.a.createElement(F.a,null,"Id"),r.a.createElement(F.a,null,"Make/Model"),r.a.createElement(F.a,null,"MPG"),r.a.createElement(F.a,null,"Cylinders"),r.a.createElement(F.a,null,"Horsepower"),r.a.createElement(F.a,null,"Delete"))),r.a.createElement(H.a,null,e.cars.map(function(t,a){return r.a.createElement(R.a,{key:t.id},r.a.createElement(F.a,{component:"th",scope:"row"},t.id),r.a.createElement(F.a,null,t.name),r.a.createElement(F.a,null,t.mpg),r.a.createElement(F.a,null,t.cylinders),r.a.createElement(F.a,null,t.horsepower),r.a.createElement(F.a,null,r.a.createElement(U.a,{onClick:function(){return e.removeCar(a)},className:"icon text-red"})))}))))},le=Object(E.b)(function(e){return{user:e.user,cars:e.cars}},function(e){return{removeCar:function(t){return e(function(e){return{type:"REMOVE_CAR",value:e}}(t))}}})(re),ce=function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:v}),r.a.createElement(h.a,{path:"/about",component:D}),r.a.createElement(h.a,{path:"/car/:id",component:P}),r.a.createElement(h.a,{path:"/dashboard",component:le}))},oe=a(49),se=a(17),ie=Object(oe.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e},cars:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CAR":return[].concat(Object(se.a)(e),[t.value]);case"REMOVE_CAR":var a=Object(se.a)(e);return a.splice(t.value,1),a;default:return e}}}),me=Object(oe.c)(ie,{user:{username:"test-user-1",email:"test-user@example.com"},cars:[{id:1,name:"chevrolet chevelle malibu",mpg:18,cylinders:8,horsepower:130},{id:2,name:"buick skylark 320",mpg:15,cylinders:8,horsepower:165},{id:3,name:"plymouth satellite",mpg:18,cylinders:8,horsepower:150},{id:4,name:"amc rebel sst",mpg:16,cylinders:8,horsepower:150},{id:5,name:"ford torino",mpg:17,cylinders:8,horsepower:140},{id:6,name:"ford galaxie 500",mpg:15,cylinders:8,horsepower:198},{id:7,name:"chevrolet impala",mpg:14,cylinders:8,horsepower:220},{id:8,name:"plymouth fury iii",mpg:14,cylinders:8,horsepower:215},{id:9,name:"pontiac catalina",mpg:14,cylinders:8,horsepower:225},{id:10,name:"amc ambassador dpl",mpg:15,cylinders:8,horsepower:190},{id:11,name:"citroen ds-21 pallas",mpg:"unknown",cylinders:4,horsepower:115},{id:12,name:"chevrolet chevelle concours (sw)",mpg:"unknown",cylinders:8,horsepower:165},{id:13,name:"ford torino (sw)",mpg:"unknown",cylinders:8,horsepower:153},{id:14,name:"plymouth satellite (sw)",mpg:"unknown",cylinders:8,horsepower:175},{id:15,name:"amc rebel sst (sw)",mpg:"unknown",cylinders:8,horsepower:175},{id:16,name:"dodge challenger se",mpg:15,cylinders:8,horsepower:170},{id:17,name:"plymouth 'cuda 340",mpg:14,cylinders:8,horsepower:160},{id:18,name:"ford mustang boss 302",mpg:"unknown",cylinders:8,horsepower:140},{id:19,name:"chevrolet monte carlo",mpg:15,cylinders:8,horsepower:150},{id:20,name:"buick estate wagon (sw)",mpg:14,cylinders:8,horsepower:225}]});var ue=function(){return r.a.createElement(E.a,{store:me},r.a.createElement(d.a,null,r.a.createElement(p,null),r.a.createElement(ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(l.createRoot)(document.getElementById("root")).render(r.a.createElement(ue,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[119,1,2]]]);
//# sourceMappingURL=main.ec7fb2a5.chunk.js.map