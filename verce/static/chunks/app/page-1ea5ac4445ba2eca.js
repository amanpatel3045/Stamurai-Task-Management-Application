(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9954:function(e,t,r){Promise.resolve().then(r.bind(r,328))},328:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n,s=r(9268),o=r(4357),i=r(6006);if(!i.useState)throw Error("mobx-react-lite requires React with Hooks support");if(!o.rC)throw Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var a=r(8431);function l(e){return(0,o.Gf)(e)}var c=function(){function e(e){var t=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(t.sweepTimeout),t.sweepTimeout=void 0;var r=Date.now();t.registrations.forEach(function(n,s){r-n.registeredAt>=e&&(t.finalize(n.value),t.registrations.delete(s))}),t.registrations.size>0&&t.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){t.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r){this.registrations.set(r,{value:t,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),d=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:c)(function(e){var t;null===(t=e.reaction)||void 0===t||t.dispose(),e.reaction=null}),u=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,s,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){s={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(s)throw s.error}}return i};function f(e){return"observer".concat(e)}var p=function(){};function h(){return new p}var m="function"==typeof Symbol&&Symbol.for,b=m?Symbol.for("react.forward_ref"):"function"==typeof i.forwardRef&&(0,i.forwardRef)(function(e){return null}).$$typeof,x=m?Symbol.for("react.memo"):"function"==typeof i.memo&&(0,i.memo)(function(e){return null}).$$typeof,g={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};(n=a.unstable_batchedUpdates)||(n=function(e){e()}),(0,o.jQ)({reactionScheduler:n}),d.finalizeAllImmediately;class w{get(){return this.Tasks}set(e){this.Tasks.push(e),this.persistTasks()}update(e){this.Tasks[e].status=!this.Tasks[e].status,this.Tasks[e].status?this.Tasks[e].completedAt=new Date().toLocaleString():this.Tasks[e].completedAt="",this.persistTasks()}delete(e){this.Tasks=this.Tasks.filter((t,r)=>r!=e),this.persistTasks()}persistTasks(){let e=JSON.stringify(this.Tasks);localStorage.setItem("Tasks",e)}constructor(){try{let e=localStorage.getItem("Tasks")||"[]";this.Tasks=JSON.parse(e)}catch(e){this.Tasks=[]}(0,o.rC)(this,{Tasks:o.LO,set:o.aD,update:o.aD})}}var y=function(e){let{task:t,index:r,update:n,deleteTask:o,handlePopup:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{children:r}),(0,s.jsx)("td",{className:t.status?"line-through":"",children:t.name}),(0,s.jsx)("td",{children:(0,s.jsx)("p",{className:t.status?"line-through":"",children:t.description})}),(0,s.jsx)("td",{children:(0,s.jsx)("p",{className:t.status?"w-20 font-bold m-auto text-green-500":"w-20 font-bold text-red-500 m-auto",children:t.status?"Completed":"Pending"})}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"border-2 rounded p-2 bg-green-500 w-20 border-green-500 text-white",onClick:()=>{i(t);let e=document.getElementById("test");e&&e.classList.toggle("d-block")},children:"View"})}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:t.status?"border-2 rounded p-2 bg-green-500 w-32 border-green-500 text-white":"border-2 rounded p-2 bg-red-400 w-32 border-red-500 text-white",onClick:()=>{n(r)},children:t.status?"Completed":"Pending"})}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"border-2 rounded p-2 bg-red-400 border-red-500 text-white",onClick:()=>{o(r)},children:"Remove"})})]})},j=function(e){let{tasks:t,update:r,deleteTask:n,handlePopup:o}=e;return(0,s.jsx)("div",{className:"overflow-x-scroll p- mt-10 w-11/12 m-auto text-center",style:{border:"2px solid #80808040",borderRadius:"5px"},children:(0,s.jsxs)("table",{className:"min-w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Serial No."}),(0,s.jsx)("th",{children:"Title"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Status"}),(0,s.jsx)("th",{children:"View Task Details"}),(0,s.jsx)("th",{children:"Toggle Status"}),(0,s.jsx)("th",{children:"Delete Task"})]})}),(0,s.jsx)("tbody",{children:t.map((e,t)=>(0,s.jsx)("tr",{children:(0,s.jsx)(y,{task:e,index:t,update:r,deleteTask:n,handlePopup:o})},t))})]})})},v=function(e,t){if(x&&e.$$typeof===x)throw Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r,n=null!==(r=null==t?void 0:t.forwardRef)&&void 0!==r&&r,s=e,a=e.displayName||e.name;if(b&&e.$$typeof===b&&(n=!0,"function"!=typeof(s=e.render)))throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var c=function(e,t){return function(e,t){void 0===t&&(t="observed");var r,n,s=u(i.useState(h),1)[0],a=u(i.useState(),2)[1],c=function(){return a([])},p=i.useRef(null);p.current||(p.current={reaction:null,mounted:!1,changedBeforeMount:!1});var m=p.current;if(m.reaction||(m.reaction=new o.le(f(t),function(){m.mounted?c():m.changedBeforeMount=!0}),d.register(s,m,m)),i.useDebugValue(m.reaction,l),i.useEffect(function(){return d.unregister(m),m.mounted=!0,m.reaction?m.changedBeforeMount&&(m.changedBeforeMount=!1,c()):(m.reaction=new o.le(f(t),function(){c()}),c()),function(){m.reaction.dispose(),m.reaction=null,m.mounted=!1,m.changedBeforeMount=!1}},[]),m.reaction.track(function(){try{r=e()}catch(e){n=e}}),n)throw n;return r}(function(){return s(e,t)},a)};return""!==a&&(c.displayName=a),e.contextTypes&&(c.contextTypes=e.contextTypes),n&&(c=(0,i.forwardRef)(c)),function(e,t){Object.keys(e).forEach(function(r){g[r]||Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}(e,c=(0,i.memo)(c)),c}(function(){let[e,t]=(0,i.useState)({name:"",description:"",status:!1,createdAt:new Date().toLocaleString(),completedAt:""}),[r,n]=(0,i.useState)({name:"",description:"",status:!1,createdAt:"",completedAt:""}),[o,a]=(0,i.useState)([]),l=new w;(0,i.useEffect)(()=>{a(l.get())},[]);let c=e=>{" "!=e.name&&""!=e.description&&l.set(e),a(l.get())},d=r=>{let n=r.target.name,s=r.target.value;t({...e,[n]:s})};return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-4xl font-bold text-center font-sans p-3 mb-5 border-pink-500 bg-pink-600 hover:bg-green-400",children:"Task Management App"}),(0,s.jsxs)("form",{className:"w-11/12 m-auto font-sans border-2 rounded border-black-1000",onSubmit:t=>{var r,n;null===(r=event)||void 0===r||r.preventDefault(),c(e),null===(n=document.querySelector("form"))||void 0===n||n.reset()},children:[(0,s.jsx)("div",{className:"flex justify-between border-b-2 p-5 border-blue-400",children:(0,s.jsx)("label",{htmlFor:"name",className:"text-xl",children:"Task Name"})}),(0,s.jsx)("input",{type:"text",id:"name",className:"w-96 m-2 border-2 rounded p-2 ",placeholder:"Enter Task Name",name:"name",required:!0,onChange:d}),(0,s.jsx)("div",{className:"flex justify-between border-b-2 p-5 border-blue-400",children:(0,s.jsx)("label",{htmlFor:"description",className:"text-xl",children:"Task Description"})}),(0,s.jsx)("textarea",{id:"description",name:"description",cols:40,rows:4,required:!0,className:"border-2 m-2 rounded p-2 w-96",placeholder:"Enter Task Details",onChange:d}),(0,s.jsx)("div",{className:"text-center p-5",children:(0,s.jsx)("button",{className:"border-2 rounded p-2 w-36 border-pink-500 bg-pink-600 hover:bg-pink-400 font-font-semibold text-white tracking-wider",children:"Add Task"})})]}),(0,s.jsx)(j,{tasks:o,update:e=>{l.update(e),a(l.get())},deleteTask:e=>{l.delete(e),a(l.get())},handlePopup:e=>{n(e)}}),(0,s.jsx)("div",{className:"d-hide w-3/4 m-auto fixed top-40 inset-0 flex items-center justify-center",id:"test",children:(0,s.jsxs)("div",{className:"bg-white text-lg  p-8 rounded shadow-lg shadow-green-200",children:[(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("button",{className:"text-center w-8 bg-green-500 font-thin font-sans text-white text-lg border-2 rounded-full border-white",onClick:()=>{var e;return null===(e=document.getElementById("test"))||void 0===e?void 0:e.classList.toggle("d-block")},children:"✘"})}),(0,s.jsxs)("h1",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Title:"})," ",r.name]}),(0,s.jsxs)("h2",{children:[" ",(0,s.jsx)("span",{className:"font-bold",children:"Current Status:"})," ",r.status?"Completed":"Pending"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Task Description:"})," ",r.description]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Task Assigned At:"})," ",r.createdAt]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Task Completed At:"})," ",r.completedAt]})]})})]})})},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},9268:function(e,t,r){"use strict";e.exports=r(3177)}},function(e){e.O(0,[749,253,698,744],function(){return e(e.s=9954)}),_N_E=e.O()}]);