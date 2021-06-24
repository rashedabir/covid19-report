(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{175:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),o=a(50),s=a.n(o),i=(a(58),a(3)),l=(a(59),a(51));var d=function(e){return Object(c.jsx)("div",{className:"graph",children:Object(c.jsx)(l.Line,{data:{labels:e.label.map((function(e){return e.substr(0,10)})),datasets:[{label:"Corona Virus across the country",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.yAxis}]}})})};var j=function(e){return Object(c.jsx)("div",{className:"card",children:e.children})},b=a(15),u=a.p+"static/media/corona.e0d94fcd.png";var h=function(e){var t=e.totalConfiremd,a=e.totalRecoverd,n=e.totalDeaths,r=e.country;return Object(c.jsxs)("div",{className:"all-info",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:u,alt:"covid-19"})}),Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:""===r?"World Wide Corona Tracker":r})}),Object(c.jsxs)("div",{className:"detail-box",children:[Object(c.jsxs)(j,{children:[Object(c.jsx)("span",{className:"heading",children:"Total Confirmed"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:Object(c.jsx)(b.a,{value:t,displayType:"text",thousandSeparator:!0})})]}),Object(c.jsxs)(j,{children:[Object(c.jsx)("span",{className:"heading",children:"Total Recovered"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:Object(c.jsx)(b.a,{value:a,displayType:"text",thousandSeparator:!0})})]}),Object(c.jsxs)(j,{children:[Object(c.jsx)("span",{className:"heading",children:"Total Death"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:Object(c.jsx)(b.a,{value:n,displayType:"text",thousandSeparator:!0})})]})]})]})},O=a(52),p=a.n(O).a.create({baseURL:"https://api.covid19api.com"});var v=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),s=Object(i.a)(o,2),l=s[0],j=s[1],b=Object(n.useState)(0),u=Object(i.a)(b,2),O=u[0],v=u[1],x=Object(n.useState)(!1),f=Object(i.a)(x,2),g=f[0],m=f[1],C=Object(n.useState)({}),y=Object(i.a)(C,2),D=y[0],S=y[1],T=Object(n.useState)(7),R=Object(i.a)(T,2),N=R[0],B=R[1],L=Object(n.useState)(""),k=Object(i.a)(L,2),w=k[0],F=k[1],H=Object(n.useState)([]),A=Object(i.a)(H,2),W=A[0],G=A[1],J=Object(n.useState)([]),E=Object(i.a)(J,2),I=E[0],M=E[1];Object(n.useEffect)((function(){m(!0),p.get("/summary").then((function(e){m(!1),200===e.status&&(r(e.data.Global.TotalConfirmed),j(e.data.Global.TotalRecovered),v(e.data.Global.TotalDeaths),S(e.data))}))}),[]);var P=function(e){var t=new Date(e),a=t.getFullYear(),c="".concat(t.getMonth()+1).slice(-2),n=t.getDate();return"".concat(a,"-").concat(c,"-").concat(n)},Z=function(e,t,a){p.get("https://api.covid19api.com/country/".concat(e,"/status/confirmed?from=").concat(t,"T00:00:00Z&to=").concat(a,"T00:00:00Z")).then((function(t){var a=t.data.map((function(e){return e.Cases})),c=t.data.map((function(e){return e.Date})),n=D.Countries.find((function(t){return t.Slug===e}));G(a),r(n.TotalConfirmed),j(n.TotalRecovered),v(n.TotalDeaths),M(c)}))};return g?Object(c.jsx)("p",{children:"Loading..."}):Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(h,{totalConfiremd:a,totalRecoverd:l,totalDeaths:O,country:w}),Object(c.jsxs)("div",{className:"select-detail",children:[Object(c.jsxs)("select",{value:w,onChange:function(e){F(e.target.value);var t=new Date,a=P(t),c=P(t.setDate(t.getDate()-N));Z(e.target.value,c,a)},children:[Object(c.jsx)("option",{value:"",children:"Select Country"}),D.Countries&&D.Countries.map((function(e){return Object(c.jsx)("option",{value:e.Slug,children:e.Country},e.Slug)}))]}),Object(c.jsxs)("select",{value:N,onChange:function(e){B(e.target.value);var t=new Date,a=P(t),c=P(t.setDate(t.getDate()-e.target.value));Z(w,c,a)},children:[Object(c.jsx)("option",{value:"7",children:"Last 7 Days"}),Object(c.jsx)("option",{value:"30",children:"Last 30 Days"}),Object(c.jsx)("option",{value:"90",children:"Last 90 Days"})]})]}),Object(c.jsx)(d,{yAxis:W,label:I}),Object(c.jsxs)("footer",{children:["Developed by"," ",Object(c.jsx)("a",{style:{color:"#273C96",textDecoration:"none"},href:"https://rashed-abir.web.app/",children:"Rashed Abir"})]})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,176)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),x()},58:function(e,t,a){},59:function(e,t,a){}},[[175,1,2]]]);
//# sourceMappingURL=main.bd948bf2.chunk.js.map