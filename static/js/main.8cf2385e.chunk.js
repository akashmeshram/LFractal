(this.webpackJsonplfractal=this.webpackJsonplfractal||[]).push([[0],{34:function(t,e,r){},41:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r(0),i=r.n(n),o=r(15),c=r.n(o),l=r(12),s=(r(33),r(34),r(3)),u=r(4),h=r(5),d=r(10),p=r(9),b=r(6),g=r(21),m=r.n(g),f=r(27),v=function(){function t(e){Object(u.a)(this,t),this.startx=e.startx,this.starty=e.starty,this.angle=e.angle,this.axiom=e.axiom,this.sentence=this.axiom,this.len=e.len,this.factor=e.factor,this.weight=e.thickness,this.iterations=e.iterations,this.branchValue=1,this.check=!1,this.alphabet=["F","f","X","x","Y","y","[","]","+","-"],this.rules=[this.getRule(e.rule1),this.getRule(e.rule2)]}return Object(h.a)(t,[{key:"getRule",value:function(t){var e=t.split("="),r=Object(f.a)(e,2);return{letter:r[0],becomes:r[1]}}},{key:"generate",value:function(){this.len*=this.factor,this.branchValue+=1;for(var t="",e=0;e<this.sentence.length;e++){var r=this.sentence.charAt(e);r===r.toLowerCase()&&(r=r.toUpperCase());var a=!1;r===this.rules[0].letter?(a=!0,t+=this.rules[0].becomes):r===this.rules[1].letter&&(a=!0,t+=this.rules[1].becomes),a||(t+=r)}this.sentence=t}},{key:"draw",value:function(t){t.background(255),t.resetMatrix(),t.translate(this.startx,this.starty),this.sentence=this.axiom,this.generate();for(var e=1;e<this.iterations;++e)this.generate();for(var r=t.color("#ED5B5B"),a=t.color("#5E04A7"),n=0;n<this.sentence.length;n++){var i=this.sentence.charAt(n);"F"===i||"f"===i?(t.strokeWeight(this.weight),t.stroke(t.lerpColor(r,a,n/this.sentence.length)),t.line(0,0,0,-this.len),t.translate(0,-this.len)):"+"===i?t.rotate(this.angle):"-"===i?t.rotate(-this.angle):"["===i?(this.branchValue-=1,t.push()):"]"===i&&(this.branchValue+=1,t.pop())}}}]),t}(),j=r(14),x=r(22),y=r(8),O=r(2),w="CHANGE_CONTROL",k="CHANGE_CONTROL_FAILED",C="CHANGE_ALL_CONTROLS",R={factor:{type:"number",value:.5,min:.1,max:2,step:.1},axiom:{type:"text",value:"FF"},rule1:{type:"text",value:"F=F"},rule2:{type:"text",value:"X=FX"},startx:{type:"number",step:25,value:400},starty:{type:"number",step:25,value:800},iterations:{type:"number",min:1,max:10,step:1,value:1},len:{type:"number",min:100,max:6e4,step:50,value:300},angle:{type:"number",min:5,max:150,step:1,value:60},thickness:{type:"number",min:1,max:5,step:1,value:2},error:null},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return Object(O.a)(Object(O.a)({},t),{},Object(y.a)({},e.payload.tag,Object(O.a)(Object(O.a)({},t[e.payload.tag]),{},{value:e.payload.value})));case k:return Object(O.a)(Object(O.a)({},t),{},{error:e.payload.error});case C:return Object(O.a)(Object(O.a)({},t),{},{factor:Object(O.a)(Object(O.a)({},t.factor),{},{value:e.payload.factor}),axiom:Object(O.a)(Object(O.a)({},t.axiom),{},{value:e.payload.axiom}),rule1:Object(O.a)(Object(O.a)({},t.rule1),{},{value:e.payload.rule1}),rule2:Object(O.a)(Object(O.a)({},t.rule2),{},{value:e.payload.rule2}),startx:Object(O.a)(Object(O.a)({},t.startx),{},{value:e.payload.startx}),starty:Object(O.a)(Object(O.a)({},t.starty),{},{value:e.payload.starty}),iterations:Object(O.a)(Object(O.a)({},t.iterations),{},{value:e.payload.iterations}),len:Object(O.a)(Object(O.a)({},t.len),{},{value:e.payload.len}),angle:Object(O.a)(Object(O.a)({},t.angle),{},{value:e.payload.angle}),thickness:Object(O.a)(Object(O.a)({},t.thickness),{},{value:e.payload.thickness})});default:return t}},L=Object(j.c)(S,Object(j.a)(x.a)),E=function(t,e){return function(r){r.preload=function(){r.angleMode(r.DEGREES),r.createCanvas(t,e)},r.setup=function(){r.createCanvas(t,e),r.noLoop()},r.draw=function(){var t=L.getState(),e={factor:t.factor.value,axiom:t.axiom.value,rule1:t.rule1.value,rule2:t.rule2.value,startx:t.startx.value,starty:t.starty.value,iterations:t.iterations.value,len:t.len.value,angle:t.angle.value,thickness:t.thickness.value};new v(e).draw(r)}}},I=s.a.div({width:"100%",marginLeft:"auto",marginRight:"auto"}),H=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(){var t;return Object(u.a)(this,r),(t=e.call(this)).myRef=i.a.createRef(),t}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.myP5=new m.a(E(this.myRef.current.clientWidth,this.myRef.current.clientHeight),this.myRef.current)}},{key:"componentDidUpdate",value:function(){this.myP5.draw()}},{key:"render",value:function(){return Object(a.jsx)(I,{ref:this.myRef})}}]),r}(n.Component),A=Object(b.b)((function(t){return t}))(H),W=r(13);function B(){var t=Object(l.a)(["\n  ",";\n  ::placeholder {\n    ","\n  }\n"]);return B=function(){return t},t}function T(){var t=Object(l.a)(["\n  ","\n  svg {\n    ","\n  }\n"]);return T=function(){return t},t}var P=s.a.div({width:"100%",height:"100%",maxWidth:"24rem",display:"flex",flexDirection:"column",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"2.5rem",paddingBottom:"2.5rem",justifyContent:"space-between","--tw-shadow":"0 20px 50px rgba(0,0,0, 0.075)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-bg-opacity":"1",backgroundColor:"rgba(94, 4, 167, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(243, 244, 246, var(--tw-text-opacity))",position:"relative",overflowY:"auto",opacity:"0.75","@media (min-width: 640px)":{paddingLeft:"2.5rem",paddingRight:"2.5rem"},"@media (min-width: 1024px)":{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}),z=s.a.h2({fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","@media (min-width: 640px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}}),D=s.a.div({display:"flex",flexDirection:"column"}),F=s.a.h3({fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700","@media (min-width: 640px)":{fontSize:"1.5rem",lineHeight:"2rem"}}),M=s.a.div({display:"flex",justifyContent:"space-between"}),N=s.a.div({marginLeft:"auto",marginRight:"auto",display:"flex",paddingTop:"1.25rem",paddingBottom:"1.25rem",marginTop:"1.5rem"}),_=s.a.button(T(),{marginLeft:"0.75rem",marginRight:"0.75rem",padding:"1rem",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgba(229, 231, 235, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(209, 213, 219, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(187, 5, 2, var(--tw-text-opacity))"},"--tw-text-opacity":"1",color:"rgba(94, 4, 167, var(--tw-text-opacity))",":focus":{outline:"2px solid transparent",outlineOffset:"2px","--tw-shadow":"0 0 0 3px rgba(66, 153, 225, 0.5)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}},{width:"1rem",height:"1rem",strokeWidth:"3"}),G=s.a.h4({marginLeft:"0.75rem",marginRight:"0.75rem",marginTop:"0.25rem",marginBottom:"0.25rem",height:"1rem",fontSize:"1.875rem",lineHeight:"2.25rem"}),V=s.a.div({width:"100%",position:"relative",marginLeft:"0.5rem",marginRight:"0.5rem",paddingTop:"1.25rem",paddingBottom:"1.25rem",marginTop:"1.5rem"}),X=s.a.label({position:"absolute",top:"0px",left:"0px",letterSpacing:"0.025em",fontWeight:"600",fontSize:"0.875rem",lineHeight:"1.25rem"}),Y=s.a.input(B(),{width:"100%",backgroundColor:"transparent","--tw-text-opacity":"1",color:"rgba(243, 244, 246, var(--tw-text-opacity))",fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"500",letterSpacing:"0.025em",borderBottomWidth:"2px",paddingTop:"0.5rem",paddingBottom:"0.5rem",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(187, 5, 2, var(--tw-border-opacity))"},":focus":{outline:"2px solid transparent",outlineOffset:"2px"}},{"--tw-text-opacity":"1",color:"rgba(107, 114, 128, var(--tw-text-opacity))"}),J=function(t){var e=t.name,r=t.label;return Object(a.jsxs)(V,{children:[Object(a.jsx)(X,{children:r}),Object(a.jsx)(Y,Object(O.a)(Object(O.a)({name:e},t.data),{},{onChange:function(e){return t.changeHandler(e.target.name,e.target.value)}}))]})};function U(){return(U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}function q(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var K=n.createElement("path",{d:"M10 19l-7-7m0 0l7-7m-7 7h18"});function Q(t,e){var r=t.title,a=t.titleId,i=q(t,["title","titleId"]);return n.createElement("svg",U({fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",ref:e,"aria-labelledby":a},i),r?n.createElement("title",{id:a},r):null,K)}var Z=n.forwardRef(Q);r.p;function $(){return($=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}function tt(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var et=n.createElement("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3"});function rt(t,e){var r=t.title,a=t.titleId,i=tt(t,["title","titleId"]);return n.createElement("svg",$({fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",ref:e,"aria-labelledby":a},i),r?n.createElement("title",{id:a},r):null,et)}var at=n.forwardRef(rt),nt=(r.p,function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(){var t;return Object(u.a)(this,r),(t=e.call(this)).state={labels:["Factor","Axiom","Rule 1","Rule 2","Start X","Start Y","Len","Angle","Thickness","Iterations"]},t.decreaseIter=t.decreaseIter.bind(Object(W.a)(t)),t.increaseIter=t.increaseIter.bind(Object(W.a)(t)),t}return Object(h.a)(r,[{key:"decreaseIter",value:function(){this.props.iterations.value>this.props.iterations.min&&this.props.changeControl("iterations",this.props.iterations.value-1)}},{key:"increaseIter",value:function(){this.props.iterations.value<this.props.iterations.max&&this.props.changeControl("iterations",this.props.iterations.value+1)}},{key:"render",value:function(){var t=this,e=this.state.labels.reduce((function(e,r){var n=r.replaceAll(" ","").toLowerCase();return Object(O.a)(Object(O.a)({},e),{},Object(y.a)({},n,Object(a.jsx)(J,{name:n,label:r,data:t.props[n],changeHandler:t.props.changeControl},n)))}),{}),r=Object(a.jsxs)(D,{children:[Object(a.jsx)(F,{children:" L - System Rules "}),Object(a.jsxs)(M,{children:[e.factor,e.axiom]}),Object(a.jsxs)(M,{children:[e.rule1,e.rule2]})]}),n=Object(a.jsxs)(D,{children:[Object(a.jsx)(F,{children:" Start Positions "}),Object(a.jsxs)(M,{children:[e.startx,e.starty]})]}),i=Object(a.jsxs)(D,{children:[Object(a.jsx)(F,{children:" Parameters "}),Object(a.jsxs)(M,{children:[e.len,e.angle,e.thickness]})]}),o=Object(a.jsxs)(D,{children:[Object(a.jsx)(F,{children:"Iteration"}),Object(a.jsxs)(N,{children:[Object(a.jsx)(_,{onClick:this.decreaseIter,children:Object(a.jsx)(Z,{})}),Object(a.jsxs)(G,{children:[" ",this.props.iterations.value," "]}),Object(a.jsx)(_,{onClick:this.increaseIter,children:Object(a.jsx)(at,{})})]})]});return Object(a.jsxs)(P,{children:[Object(a.jsx)(z,{children:"Controls"}),r,n,i,o]})}}]),r}(n.Component)),it=Object(b.b)((function(t){return{factor:t.factor,axiom:t.axiom,rule1:t.rule1,rule2:t.rule2,startx:t.startx,starty:t.starty,iterations:t.iterations,len:t.len,angle:t.angle,thickness:t.thickness,error:t.error}}),{changeControl:function(t,e){return function(r){r(function(t){return{type:w,payload:t}}({tag:t,value:e}))}},controlError:function(t){return function(e){e({type:k,payload:t})}}})(nt),ot=r(26),ct=r.p+"static/media/data.6189de08.yml",lt=s.a.div({width:"100%",height:"100%",maxWidth:"24rem",display:"flex",flexDirection:"column",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"2.5rem",paddingBottom:"2.5rem",justifyContent:"space-between","--tw-shadow":"0 20px 50px rgba(0,0,0, 0.075)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-bg-opacity":"1",backgroundColor:"rgba(187, 5, 2, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(243, 244, 246, var(--tw-text-opacity))",position:"relative",overflowY:"auto",opacity:"0.75","@media (min-width: 640px)":{paddingLeft:"2.5rem",paddingRight:"2.5rem"},"@media (min-width: 1024px)":{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}),st=s.a.h2({marginRight:"auto",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","@media (min-width: 640px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}}),ut=s.a.h3({marginRight:"auto",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.75rem",paddingBottom:"0.75rem","--tw-text-opacity":"1",color:"rgba(243, 244, 246, var(--tw-text-opacity))",borderRadius:"9999px",fontWeight:"700",borderColor:"transparent",letterSpacing:"0.025em",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(243, 244, 246, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(94, 4, 167, var(--tw-text-opacity))",cursor:"pointer"}}),ht=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={data:[]},t}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var t=this;fetch(ct).then((function(t){return t.text()})).then((function(e){var r=ot.a.load(e);t.setState({data:r})})).catch((function(t){return console.error(t)}))}},{key:"render",value:function(){var t=this,e=this.state.data.map((function(e,r){return Object(a.jsx)(ut,{onClick:function(){return t.props.addAllControls(e)},children:e.name},r)}));return Object(a.jsxs)(lt,{children:[Object(a.jsx)(st,{children:"Patterns "}),e]})}}]),r}(n.Component),dt=Object(b.b)(null,{addAllControls:function(t){return function(e){e(function(t){return{type:C,payload:t}}(t))}}})(ht);function pt(){var t=Object(l.a)(["\n  ",'\n  background-image: url("./background.jpg");\n']);return pt=function(){return t},t}var bt=s.a.div(pt(),{position:"relative",backgroundPosition:"center",backgroundSize:"cover",height:"100vh",display:"flex"});var gt=function(){return Object(a.jsxs)(bt,{children:[Object(a.jsx)(it,{}),Object(a.jsx)(A,{}),Object(a.jsx)(dt,{})]})};c.a.render(Object(a.jsx)(b.a,{store:L,children:Object(a.jsx)(gt,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8cf2385e.chunk.js.map