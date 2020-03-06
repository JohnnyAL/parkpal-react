(this["webpackJsonpproject-3-parkpal"]=this["webpackJsonpproject-3-parkpal"]||[]).push([[0],{47:function(e,t,a){e.exports=a(74)},52:function(e,t,a){},53:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(42),c=a.n(r),o=(a(52),a(4)),i=a(21),s=(a(53),a(1)),m=a(16),u=a(11),d=a.n(u),p=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(null),p=Object(o.a)(u,2),E=p[0],b=p[1],g=Object(n.useState)({location:"",start_date:"",start_time:"",end_date:"",end_time:""}),h=Object(o.a)(g,2),v=h[0],y=h[1],f=Object(n.useState)(""),_=Object(o.a)(f,2),k=_[0],j=_[1],O=Object(n.useState)(!1),N=Object(o.a)(O,2),S=N[0],w=N[1],x=function(e){y(Object(m.a)({},v,Object(s.a)({},e.target.name,e.target.value)))};return S?l.a.createElement(i.a,{to:{pathname:"/listings",state:{spots:r,geolocation:E}}}):l.a.createElement("div",{className:"home-page"},l.a.createElement("div",{className:"search-box"},e.user?l.a.createElement("h3",null,"Hi, ",e.user.username,"! Find parking for work, leisure and more!"):l.a.createElement("h3",null,"Find parking for work, leisure and more!"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d.a.get("/parking-spots/filtered-query?location=".concat(v.location,"&start_date=").concat(v.start_date,"&start_time=").concat(v.start_time,"&end_date=").concat(v.end_date,"&end_time=").concat(v.end_time)).then((function(e){c(e.data.spots),b(e.data.geolocation),w(!0)})).catch((function(e){j(e.response.data.message)}))},className:"search-form"},k&&l.a.createElement("p",{className:"message"},k),l.a.createElement("div",{className:"search-location"},l.a.createElement("label",{htmlFor:"where"},"Where are you going?"),l.a.createElement("input",{type:"text",placeholder:"Enter city, state, or zip",id:"where",name:"location",value:v.location,onChange:x})),l.a.createElement("div",{className:"search-date"},l.a.createElement("div",{className:"search-date-from"},l.a.createElement("label",{htmlFor:"from-date"},"From:"),l.a.createElement("input",{type:"date",id:"from-date",name:"start_date",value:v.start_date,onChange:x}),l.a.createElement("label",{htmlFor:"from-time"},"at:"),l.a.createElement("input",{type:"time",id:"from-time",name:"start_time",value:v.start_time,onChange:x})),l.a.createElement("div",{className:"search-date-to"},l.a.createElement("label",{htmlFor:"to-date"},"To:"),l.a.createElement("input",{type:"date",id:"to-date",name:"end_date",value:v.end_date,onChange:x}),l.a.createElement("label",{htmlFor:"to-time"},"at:"),l.a.createElement("input",{type:"time",id:"to-time",name:"end_time",value:v.end_time,onChange:x}))),l.a.createElement("button",{type:"submit"},"Search for Parking"))))},E=a(8),b=function(e){var t,a,n=function(){d.a.delete("/auth/logout").then((function(){e.setUser(null)}))};return"basic"==(null===(t=e.user)||void 0===t?void 0:t.role)?l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"brand-box"},l.a.createElement("img",{className:"car-logo",height:"50px",src:"/car-logo.png",alt:""}),l.a.createElement("h1",null,l.a.createElement(E.b,{to:"/"},"ParkPal"))),l.a.createElement("div",{className:"nav-links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.b,{to:"/add"},"Become a host")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/my-bookings"},"My Bookings")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"#"},"Help")),l.a.createElement("li",null,l.a.createElement(E.b,{onClick:n,to:"/"},"Log out"))))):"host"==(null===(a=e.user)||void 0===a?void 0:a.role)?l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"brand-box"},l.a.createElement("img",{className:"car-logo",height:"50px",src:"/car-logo.png",alt:""}),l.a.createElement("h1",null,l.a.createElement(E.b,{to:"/"},"ParkPal"))),l.a.createElement("div",{className:"nav-links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.b,{to:"/add"},"List a parking spot")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/my-bookings"},"My Bookings")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/my-listings"},"My Listings")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"#"},"Help")),l.a.createElement("li",null,l.a.createElement(E.b,{onClick:n,to:"/"},"Log out"))))):l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"brand-box"},l.a.createElement("img",{className:"car-logo",height:"50px",src:"/car-logo.png",alt:""}),l.a.createElement("h1",null,l.a.createElement(E.b,{to:"/"},"ParkPal"))),l.a.createElement("div",{className:"nav-links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.b,{to:"/signup-host"},"Become a host")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/signup"},"Sign up")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/login"},"Log in")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"#"},"Help")))))},g=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),p=u[0],b=u[1],g=r.username,h=r.password,v=function(e){c(Object(m.a)({},r,Object(s.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"auth"},l.a.createElement("div",{className:"auth-form"},l.a.createElement("h1",null,"Sign up"),p&&l.a.createElement("p",{className:"message"},p),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),d.a.post("/auth/signup",{username:g,password:h,role:e.role}).then((function(t){e.history.push("/"),e.setUser(t.data)})).catch((function(e){b(e.response.data.message)}))}},l.a.createElement("div",{className:"auth-inputs"},l.a.createElement("label",{htmlFor:"username"},"Username: "),l.a.createElement("input",{type:"text",id:"username",name:"username",value:g,onChange:v}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"password"},"Password: "),l.a.createElement("input",{type:"password",name:"password",id:"password",value:h,onChange:v}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Sign up"))),l.a.createElement("p",{class:"account-message"},"Already have an account? ",l.a.createElement(E.b,{to:"/login"},"Log in"))))},h=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),p=u[0],b=u[1],g=r.username,h=r.password,v=function(e){c(Object(m.a)({},r,Object(s.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"auth"},l.a.createElement("div",{className:"auth-form"},l.a.createElement("h1",null,"Log in"),p&&l.a.createElement("p",{className:"message"},p),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),d.a.post("/auth/login",{username:g,password:h}).then((function(t){e.history.push("/"),e.setUser(t.data)})).catch((function(e){b(e.response.data.message)}))}},l.a.createElement("div",{className:"auth-inputs"},l.a.createElement("label",{htmlFor:"username"},"Username: "),l.a.createElement("input",{type:"text",id:"username",name:"username",value:g,onChange:v}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"password"},"Password: "),l.a.createElement("input",{type:"password",name:"password",id:"password",value:h,onChange:v}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Log in"))),l.a.createElement("p",{class:"account-message"},"Don't have an account? ",l.a.createElement(E.b,{to:"/signup"},"Sign up"))))},v=function(e){var t=Object(n.useState)({name:"",description:"",street_address:"",city:"",state:"",zip_code:"",country:"",type:"Driveway",size:"Compact",start_date:"",end_date:"",start_time:"",end_time:"",price:""}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),p=u[0],E=u[1],b=function(e){c(Object(m.a)({},r,Object(s.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"add-edit"},l.a.createElement("h1",null,"Add a Parking Spot"),l.a.createElement("br",null),p&&l.a.createElement("p",{className:"message"},p),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),d.a.post("/parking-spots/add",r).then((function(t){var a=t.data.createdSpot._id;e.history.push("/listing-detail/".concat(a)),e.setUser(t.data.user)})).catch((function(e){E(e.response.data.message)}))}},l.a.createElement("div",{className:"add-edit-form"},l.a.createElement("label",{htmlFor:"name"},"Name: "),l.a.createElement("input",{type:"text",name:"name",id:"name",value:r.name,onChange:b}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"description"},"Description: "),l.a.createElement("input",{type:"textarea",name:"description",id:"description",value:r.description,onChange:b}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Address:"),l.a.createElement("label",{htmlFor:"street"},"Street address: "),l.a.createElement("input",{type:"text",name:"street_address",id:"street",value:r.street_address,onChange:b}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"city"},"City: "),l.a.createElement("input",{type:"text",name:"city",id:"city",value:r.city,onChange:b}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"state"},"State: "),l.a.createElement("input",{type:"text",name:"state",id:"state",value:r.state,onChange:b}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"zip"},"Zip Code: "),l.a.createElement("input",{type:"text",name:"zip_code",id:"zip",value:r.zip_code,onChange:b}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"country"},"Country: "),l.a.createElement("input",{type:"text",name:"country",id:"country",value:r.country,onChange:b}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"type"},"Type: "),l.a.createElement("select",{name:"type",id:"type",value:r.type,onChange:b},l.a.createElement("option",{value:"Driveway"},"Driveway"),l.a.createElement("option",{value:"Street"},"Street"),l.a.createElement("option",{value:"Parking lot"},"Parking lot"),l.a.createElement("option",{value:"Garage"},"Garage")),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"size"},"Size: "),l.a.createElement("select",{name:"size",id:"size",value:r.size,onChange:b},l.a.createElement("option",{value:"Compact"},"Compact"),l.a.createElement("option",{value:"Midsized"},"Midsized"),l.a.createElement("option",{value:"Large"},"Large")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"start-date"},"Available from: "),l.a.createElement("input",{type:"date",id:"start-date",name:"start_date",value:r.start_date,onChange:b}),l.a.createElement("label",{htmlFor:"start-time"},"at: "),l.a.createElement("input",{type:"time",id:"start-time",name:"start_time",value:r.start_time,onChange:b}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"end-date"},"Available to: "),l.a.createElement("input",{type:"date",id:"end-date",name:"end_date",value:r.end_date,onChange:b}),l.a.createElement("label",{htmlFor:"end-time"},"at: "),l.a.createElement("input",{type:"time",id:"end-time",name:"end_time",value:r.end_time,onChange:b}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"price"},"Price per hour (in USD): "),l.a.createElement("input",{type:"number",name:"price",id:"price",value:r.price,onChange:b}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Submit"))))},y=function(e){var t=e.match.params.spotId,a=Object(n.useState)(null),r=Object(o.a)(a,2),c=r[0],i=r[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),E=p[0],b=p[1];Object(n.useEffect)((function(){d.a.get("/parking-spots/edit/".concat(t)).then((function(e){var t=e.data;i({name:t.name,description:t.description,street_address:t.address.street_address,city:t.address.city,state:t.address.state,zip_code:t.address.zip_code,country:t.address.country,type:t.type,size:t.size,start_date:t.start_date.slice(0,10),end_date:t.end_date.slice(0,10),start_time:new Date(t.start_time).toTimeString().slice(0,5),end_time:new Date(t.end_time).toTimeString().slice(0,5),price:t.price})})).catch((function(t){if(t)return e.history.push("/*")}))}),[]);var g=function(e){i(Object(m.a)({},c,Object(s.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"add-edit"},c?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Edit Your Post"),l.a.createElement("br",null),E&&l.a.createElement("p",{className:"message"},E),l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),d.a.post("/parking-spots/edit/".concat(t),c).then((function(a){e.history.push("/listing-detail/".concat(t))})).catch((function(e){b(e.response.data.message)}))}},l.a.createElement("div",{className:"add-edit-form"},l.a.createElement("label",{htmlFor:"name"},"Name: "),l.a.createElement("input",{type:"text",name:"name",id:"name",value:c.name,onChange:g}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"description"},"Description: "),l.a.createElement("input",{type:"textarea",name:"description",id:"description",value:c.description,onChange:g}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Address:"),l.a.createElement("label",{htmlFor:"street"},"Street address: "),l.a.createElement("input",{type:"text",name:"street_address",id:"street",value:c.street_address,onChange:g}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"city"},"City: "),l.a.createElement("input",{type:"text",name:"city",id:"city",value:c.city,onChange:g}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"state"},"State: "),l.a.createElement("input",{type:"text",name:"state",id:"state",value:c.state,onChange:g}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"zip"},"Zip Code: "),l.a.createElement("input",{type:"text",name:"zip_code",id:"zip",value:c.zip_code,onChange:g}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"country"},"Country: "),l.a.createElement("input",{type:"text",name:"country",id:"country",value:c.country,onChange:g}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"type"},"Type: "),l.a.createElement("select",{name:"type",id:"type",value:c.type,onChange:g},l.a.createElement("option",{value:"Driveway"},"Driveway"),l.a.createElement("option",{value:"Street"},"Street"),l.a.createElement("option",{value:"Parking lot"},"Parking lot"),l.a.createElement("option",{value:"Garage"},"Garage")),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"size"},"Size: "),l.a.createElement("select",{name:"size",id:"size",value:c.size,onChange:g},l.a.createElement("option",{value:"Compact"},"Compact"),l.a.createElement("option",{value:"Midsized"},"Midsized"),l.a.createElement("option",{value:"Large"},"Large")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"start-date"},"Available from: "),l.a.createElement("input",{type:"date",id:"start-date",name:"start_date",value:c.start_date,onChange:g}),l.a.createElement("label",{htmlFor:"start-time"},"at: "),l.a.createElement("input",{type:"time",id:"start-time",name:"start_time",value:c.start_time,onChange:g}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"end-date"},"Available to: "),l.a.createElement("input",{type:"date",id:"end-date",name:"end_date",value:c.end_date,onChange:g}),l.a.createElement("label",{htmlFor:"end-time"},"at: "),l.a.createElement("input",{type:"time",id:"end-time",name:"end_time",value:c.end_time,onChange:g}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"price"},"Price per hour (in USD): "),l.a.createElement("input",{type:"number",name:"price",id:"price",value:c.price,onChange:g}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Submit")))):null)},f=function(e){return e.spots?e.spots.map((function(e){return l.a.createElement("div",{className:"listing-box",key:e._id},l.a.createElement("ul",null,l.a.createElement("div",{className:"listing-box-left"},l.a.createElement("li",null,l.a.createElement("img",{height:"100px",src:e.image,alt:"image not available"})),l.a.createElement("li",null,l.a.createElement("h4",null,l.a.createElement(E.b,{to:"/listing-detail/".concat(e._id)}," ",e.name))),l.a.createElement("li",null,e.address.street_address,l.a.createElement("br",null),e.address.city,", ",e.address.state," ",e.address.zip_code),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("h4",null,"Price: $",e.price,"/hour"))),l.a.createElement("div",{className:"listing-box-right"},l.a.createElement("div",{className:"detail-button"},l.a.createElement(E.b,{to:"/listing-detail/".concat(e._id)},"Spot Details")),l.a.createElement("li",null,l.a.createElement("h4",null,"Type:"),e.type),l.a.createElement("li",null,l.a.createElement("h4",null,"Size:"),e.size),l.a.createElement(E.b,{to:"/booking/".concat(e._id),className:"book-button"},"Book Now"))))})):null},_=a(6),k=a(5),j=a(9),O=a(7),N=a(10),S=a(17),w={position:"absolute",top:0,left:0,padding:"10px"},x={position:"absolute",top:36,left:0,padding:"10px"},C={position:"absolute",bottom:36,left:0,padding:"10px"},F=function(e){function t(){var e,a,n,r;Object(_.a)(this,t);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(r=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(o)))).state={viewport:{width:600,height:500,latitude:null===(a=r.props.geolocation)||void 0===a?void 0:a.latitude,longitude:null===(n=r.props.geolocation)||void 0===n?void 0:n.longitude,zoom:10.5}},r.loadMarkers=function(){return r.props.spots.map((function(e){return l.a.createElement(S.b,{key:e._id,latitude:parseFloat(e.geolocation.coordinates[1]),longitude:parseFloat(e.geolocation.coordinates[0])},l.a.createElement("img",{style:{cursor:"pointer",fill:"#d00",stroke:"none",transform:"translate(".concat(-15,"px,").concat(-30,"px)")},height:"".concat(30,"px"),src:"/map-pin.png",alt:""}))}))},r}return Object(N.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"map"},l.a.createElement(S.e,Object.assign({mapStyle:"mapbox://styles/mapbox/streets-v11"},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})},mapboxApiAccessToken:"pk.eyJ1Ijoiam9obm55YWwiLCJhIjoiY2s2ZmQyM29pMHBsNzNlbnZxamNxNTRoYSJ9.27j6sVOZDtK2BXTcKqnEcw"}),this.loadMarkers(),l.a.createElement("div",{style:w},l.a.createElement(S.a,null)),l.a.createElement("div",{style:x},l.a.createElement(S.c,null)),l.a.createElement("div",{style:C},l.a.createElement(S.d,null))))}}]),t}(n.Component),z=function(e){var t,a=Object(n.useState)([]),r=Object(o.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(null===(t=e.location.state)||void 0===t?void 0:t.geolocation),m=Object(o.a)(s,1)[0];return Object(n.useEffect)((function(){var t;i(null===(t=e.location.state)||void 0===t?void 0:t.spots)}),[]),c.length>0?l.a.createElement("div",{className:"available-spots"},l.a.createElement("div",{className:"spot-listing"},l.a.createElement(f,{spots:c})),l.a.createElement(F,{spots:c,geolocation:m})):l.a.createElement("h2",null,"No parking spots available. Please check back later.")},D={position:"absolute",top:0,left:0,padding:"10px"},P={position:"absolute",top:36,left:0,padding:"10px"},T={position:"absolute",bottom:36,left:0,padding:"10px"},A=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={viewport:{width:600,height:500,latitude:a.props.spot.geolocation.coordinates[1],longitude:a.props.spot.geolocation.coordinates[0],zoom:10.5}},a.loadMarkers=function(){return l.a.createElement(S.b,{key:a.props.spot._id,latitude:parseFloat(a.props.spot.geolocation.coordinates[1]),longitude:parseFloat(a.props.spot.geolocation.coordinates[0])},l.a.createElement("img",{style:{cursor:"pointer",fill:"#d00",stroke:"none",transform:"translate(".concat(-15,"px,").concat(-30,"px)")},height:"".concat(30,"px"),src:"/map-pin.png",alt:""}))},a}return Object(N.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"map"},l.a.createElement(S.e,Object.assign({mapStyle:"mapbox://styles/mapbox/streets-v11"},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})},mapboxApiAccessToken:"pk.eyJ1Ijoiam9obm55YWwiLCJhIjoiY2s2ZmQyM29pMHBsNzNlbnZxamNxNTRoYSJ9.27j6sVOZDtK2BXTcKqnEcw"}),this.loadMarkers(),l.a.createElement("div",{style:D},l.a.createElement(S.a,null)),l.a.createElement("div",{style:P},l.a.createElement(S.c,null)),l.a.createElement("div",{style:T},l.a.createElement(S.d,null))))}}]),t}(n.Component),M=function(e){var t=e.match.params.spotId,a=Object(n.useState)(null),r=Object(o.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(!1),m=Object(o.a)(s,2),u=m[0],p=m[1],b=Object(n.useState)(!1),g=Object(o.a)(b,2),h=(g[0],g[1]);Object(n.useEffect)((function(){d.a.get("/parking-spots/detail/".concat(t)).then((function(e){i(e.data.spot),p(e.data.showEdit),h(e.data.showDelete)})).catch((function(t){if(t)return e.history.push("/*")}))}),[]);return l.a.createElement("div",{className:"detail"},c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"spot-details"},l.a.createElement("div",{className:"detail-top"},l.a.createElement("div",null,l.a.createElement("h1",null,c.name),l.a.createElement("p",null,"Price: $",c.price,"/hour")),l.a.createElement("p",{className:"book-button"},l.a.createElement(E.b,{to:"/booking/".concat(c._id)},"Book Now"))),l.a.createElement("br",null),l.a.createElement("div",{className:"detail-bottom"},l.a.createElement("p",null,l.a.createElement("img",{height:"300px",src:c.image,alt:"image not available"})),l.a.createElement("br",null),l.a.createElement("p",null,c.description),l.a.createElement("br",null),l.a.createElement("h4",null,"Address"),l.a.createElement("p",null,c.address.street_address,l.a.createElement("br",null),c.address.city,", ",c.address.state," ",c.address.zip_code),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("span",null,"Type: "),c.type),l.a.createElement("p",null,l.a.createElement("span",null,"Size: "),c.size),l.a.createElement("br",null),l.a.createElement("h4",null,"Availability"),l.a.createElement("p",null,"From: ",new Date(c.start_date).toDateString()),l.a.createElement("p",null,"To: ",new Date(c.end_date).toDateString()),l.a.createElement("br",null),l.a.createElement("p",null,"Posted by: ",c.owner.username),l.a.createElement("br",null),u?l.a.createElement(E.b,{to:"/edit/".concat(c._id)},"Edit your listing"):null)),l.a.createElement("div",null,l.a.createElement(A,{spot:c}))):null)},B=function(e){var t=e.match.params.spotId,a=Object(n.useState)({start_date:"",start_time:"",end_date:"",end_time:""}),r=Object(o.a)(a,2),c=r[0],i=r[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),E=p[0],b=p[1],g=function(e){i(Object(m.a)({},c,Object(s.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"book-spot"},l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),d.a.post("/booking/add/".concat(t),c).then((function(t){e.history.push("/my-bookings")})).catch((function(e){b(e.response.data.message)}))}},l.a.createElement("div",{className:"book-spot-form"},l.a.createElement("h1",null,"When would you like to book?"),l.a.createElement("br",null),E&&l.a.createElement("p",{className:"message"},E),l.a.createElement("div",{className:"book-spot-inputs"},l.a.createElement("label",{htmlFor:"from-date"}),l.a.createElement("input",{type:"date",id:"from-date",name:"start_date",value:c.start_date,onChange:g})," ",l.a.createElement("label",{htmlFor:"from-time"},"at: "),l.a.createElement("input",{type:"time",id:"from-time",name:"start_time",value:c.start_time,onChange:g})),l.a.createElement("div",{className:"book-spot-inputs"},l.a.createElement("label",{htmlFor:"to-date"}),l.a.createElement("input",{type:"date",id:"to-date",name:"end_date",value:c.end_date,onChange:g})," ",l.a.createElement("label",{htmlFor:"to-time"},"at: "),l.a.createElement("input",{type:"time",id:"to-time",name:"end_time",value:c.end_time,onChange:g})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Book this spot!"))))},L=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){d.a.get("/booking/my-bookings").then((function(e){r(e.data)}))}),[]),0==(null===a||void 0===a?void 0:a.length)?l.a.createElement("h2",{className:"no-bookings-listings"},"You haven't booked any parking spots. Click ",l.a.createElement(E.b,{to:"/"},"here")," to search for available spots."):(null===a||void 0===a?void 0:a.length)>0?l.a.createElement("div",{className:"bookings"},l.a.createElement("h1",null,"My Bookings"),a.map((function(e){return l.a.createElement("div",{key:e._id},l.a.createElement("div",{className:"bookings-info"},l.a.createElement("img",{height:"200px",src:e.spot.image,alt:"image not available"}),l.a.createElement("br",null),l.a.createElement("h2",null,e.spot.name),l.a.createElement("p",null,e.spot.address.street_address,l.a.createElement("br",null),e.spot.address.city,", ",e.spot.address.state," ",e.spot.address.zip_code),l.a.createElement("br",null),l.a.createElement("p",null,"Type: ",e.spot.type),l.a.createElement("p",null,"Size: ",e.spot.size),l.a.createElement("br",null),l.a.createElement("h4",null,"Booking Details"),l.a.createElement("p",null,"Arrival: ",new Date(e.start_date).toDateString()," @"," ",new Date(e.start_time).toTimeString().slice(0,5)),l.a.createElement("p",null,"Departure: ",new Date(e.end_date).toDateString()," @"," ",new Date(e.end_time).toTimeString().slice(0,5)),l.a.createElement("br",null),l.a.createElement(E.b,{to:"listing-detail/".concat(e.spot._id)},"View parking spot details")))}))):null},U=a(46),I=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){d.a.get("/parking-spots/my-listings").then((function(e){c(e.data)}))}),[]);return 0==(null===r||void 0===r?void 0:r.length)?l.a.createElement("h2",{className:"no-bookings-listings"},"You haven't posted any parking spots. Click ",l.a.createElement(E.b,{to:"/add"},"here")," ","to list a spot."):(null===r||void 0===r?void 0:r.length)>0?l.a.createElement("div",{className:"listings"},l.a.createElement("h1",null,"My Listings"),r.map((function(e,t){return l.a.createElement("div",{key:e._id},l.a.createElement("div",{className:"listings-info"},l.a.createElement("img",{height:"200px",src:e.image,alt:"image not available"}),l.a.createElement("h2",null,e.name),l.a.createElement("p",null,"Price: $",e.price,"/hour"),l.a.createElement("br",null),l.a.createElement("p",null,e.description),l.a.createElement("br",null),l.a.createElement("h4",null,"Address"),l.a.createElement("p",null,e.address.street_address,l.a.createElement("br",null),e.address.city,", ",e.address.state," ",e.address.zip_code),l.a.createElement("br",null),l.a.createElement("p",null,"Type: ",e.type),l.a.createElement("p",null,"Size: ",e.size),l.a.createElement("br",null),l.a.createElement("h4",null,"Availability"),l.a.createElement("p",null,"From: ",new Date(e.start_date).toDateString()," @"," ",new Date(e.start_time).toTimeString().slice(0,5)),l.a.createElement("p",null,"To: ",new Date(e.end_date).toDateString()," @"," ",new Date(e.end_time).toTimeString().slice(0,5)),l.a.createElement("br",null),l.a.createElement(E.b,{to:"listing-detail/".concat(e._id)},"View your listing"),l.a.createElement(E.b,{to:"/edit/".concat(e._id)},"Edit your listing"),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){!function(e,t){console.log("Clicked Delete"),d.a.delete("/parking-spots/delete/".concat(e)).then((function(e){var a=Object(U.a)(r);a.splice(t,1),c(a)}))}(e._id,t)}},"Delete")))}))):null},Y=function(){return l.a.createElement("div",{className:"route-not-found"},l.a.createElement("h2",null,"Route not found. Click ",l.a.createElement(E.b,{to:"/"},"here")," to return to the home page"))},J=function(e){var t=Object(n.useState)(e.user),a=Object(o.a)(t,2),r=a[0],c=a[1],s=function(e){c(e)};return l.a.createElement("div",{className:"App"},l.a.createElement(b,{setUser:s,user:r}),l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/",render:function(e){return l.a.createElement(p,Object.assign({},e,{user:r}))}}),l.a.createElement(i.b,{exact:!0,path:"/signup",render:function(e){return l.a.createElement(g,Object.assign({},e,{role:"basic",setUser:s}))}}),l.a.createElement(i.b,{exact:!0,path:"/signup-host",render:function(e){return l.a.createElement(g,Object.assign({},e,{role:"host",setUser:s}))}}),l.a.createElement(i.b,{exact:!0,path:"/login",render:function(e){return l.a.createElement(h,Object.assign({},e,{setUser:s}))}}),l.a.createElement(i.b,{exact:!0,path:"/add",render:function(e){return l.a.createElement(v,Object.assign({},e,{setUser:s}))}}),l.a.createElement(i.b,{exact:!0,path:"/edit/:spotId",render:function(e){return l.a.createElement(y,e)}}),l.a.createElement(i.b,{exact:!0,path:"/listings",component:z}),l.a.createElement(i.b,{exact:!0,path:"/listing-detail/:spotId",render:function(e){return l.a.createElement(M,e)}}),l.a.createElement(i.b,{exact:!0,path:"/booking/:spotId",render:function(e){return l.a.createElement(B,e)}}),l.a.createElement(i.b,{exact:!0,path:"/my-bookings",component:L}),l.a.createElement(i.b,{exact:!0,path:"/my-listings",render:function(e){return l.a.createElement(I,e)}}),l.a.createElement(i.b,{path:"*",component:Y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.get("/auth/loggedin").then((function(e){console.log(e),c.a.render(l.a.createElement(E.a,null,l.a.createElement(J,{user:e.data})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.f99f1bb4.chunk.js.map