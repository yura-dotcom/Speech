(this.webpackJsonpfinished=this.webpackJsonpfinished||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),u=a(4),i=a(1),o=a(7),m=a(8);a(16);function s(){var e=Object(n.useState)([{time:2,text:"hello"},{time:4,text:"this is my massage"},{time:8,text:"what's up"}]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),s=Object(i.a)(l,2),b=s[0],f=s[1],h=Object(n.useState)(1),v=Object(i.a)(h,2),E=v[0],d=v[1],g=Object(n.useState)(null),j=Object(i.a)(g,2),O=j[0],x=j[1],y=Object(m.useStopwatch)({}),k=y.seconds,S=y.isRunning,C=y.start,N=y.reset,w=Object(o.useSpeechSynthesis)(),T=w.speak,B=(w.speaking,w.supported),F=w.voices,J=F[O]||null,A=Object(n.useCallback)((function(){return N(0,!1)}),[]);function D(e,t,n){var c=Object(u.a)(a);c[e].time=t,c[e].text=n,r(c)}return Object(n.useEffect)((function(){var e=a.find((function(e){return e.time===k}));e&&T({text:e.text,voice:J,rate:b,pitch:E}),k>a[a.length-1].time&&A()}),[k]),B?c.a.createElement("div",{className:"app"},c.a.createElement("h2",null,"Talk the Talk"),c.a.createElement("form",null,c.a.createElement("label",{htmlFor:"voice"},"Voice"),c.a.createElement("select",{id:"voice",name:"voice",value:O||"",onChange:function(e){return x(e.target.value)}},c.a.createElement("option",{value:""},"Default"),F.map((function(e,t){return c.a.createElement("option",{key:t,value:t},"".concat(e.lang," - ").concat(e.name))})))),c.a.createElement("div",{className:"timers"},a.map((function(e,t){return c.a.createElement(p,{key:t,index:t,timer:e,updateTimers:D})})),c.a.createElement("button",{className:"add-button",onClick:function(){var e=[].concat(Object(u.a)(a),[{time:100,text:"yo"}]);r(e)}},"Add")),c.a.createElement("h2",null,k),c.a.createElement("div",{className:"buttons"},!S&&c.a.createElement("button",{className:"start-button",onClick:C},"Start"),S&&c.a.createElement("button",{className:"stop-button",onClick:A},"Stop")),c.a.createElement("form",{style:" display: flex; align-items: center; justify-content: space-around; "},c.a.createElement("label",{htmlFor:"rate"},"rate"),c.a.createElement("input",{type:"range",name:"rate",min:"0.1",max:"2",value:b,step:"0.1",onChange:function(e){return f(e.target.value)}}),c.a.createElement("label",{htmlFor:"pitch"},"pitch"),c.a.createElement("input",{type:"range",name:"pitch",min:"0.1",max:"2",value:E,step:"0.1",onChange:function(e){return d(e.target.value)}}))):c.a.createElement("div",null,"Your browser not supported speech yet")}function p(e){var t=e.index,a=e.timer,r=e.updateTimers,l=Object(n.useState)(a.time),u=Object(i.a)(l,2),o=u[0],m=u[1],s=Object(n.useState)(a.text),p=Object(i.a)(s,2),b=p[0],f=p[1];function h(){r(t,o,b)}return c.a.createElement("form",{className:"timer",key:t},c.a.createElement("input",{type:"number",value:o,onChange:function(e){return m(e.target.value)},onBlur:h}),c.a.createElement("input",{type:"text",value:b,onChange:function(e){return f(e.target.value)},onBlur:h}))}l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4fc0ffc5.chunk.js.map