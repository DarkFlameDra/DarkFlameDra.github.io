(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{5899:function(e,n,t){Promise.resolve().then(t.bind(t,5625))},5625:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var i=t(7437),o=t(2265),a=t(1169);t(8538),t(7393);let s=["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];function l(){(0,a.useRouter)();let[e,n]=(0,o.useState)(null),[t,l]=(0,o.useState)(null),[c,r]=(0,o.useState)(!1),[d,u]=(0,o.useState)(!1),[f,h]=(0,o.useState)({});(0,o.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("trainer");e&&n(e)},[]),(0,o.useEffect)(()=>{(async()=>{let e=await fetch("/Fitness/api/bookings");if(e.ok){let n=await e.json(),t={};n.forEach(e=>{t[e.time]=!0}),h(t)}})()},[]);let m=e=>{f[e]?(l(e),u(!0)):(l(e),r(!0))},k=async()=>{if(!e||!t){alert("Trainer or time slot is missing.");return}let n=await fetch("/Fitness/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trainer:e,time:t})});if(n.ok)h(e=>({...e,[t]:!0})),alert("Booking confirmed for ".concat(t," today with ").concat(e,"!")),r(!1),l(null);else{let e=await n.json();alert("Booking failed: ".concat(e.message))}},j=async()=>{if(!e||!t){alert("Trainer or time slot is missing.");return}let n=await fetch("/Fitness/api/bookings",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({trainer:e,time:t})});if(n.ok)h(e=>({...e,[t]:!1})),alert("Booking canceled for ".concat(t," today with ").concat(e,".")),u(!1),l(null);else{let e=await n.json();alert("Cancellation failed: ".concat(e.message))}},g=()=>{r(!1),u(!1),l(null)};return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{children:["Booking for Today with ",e||"Loading..."]}),(0,i.jsx)("h2",{children:"Available Time Slots for Today:"}),(0,i.jsx)("div",{className:"time-slots",children:s.map(e=>(0,i.jsx)("button",{className:"time-slot ".concat(f[e]?"booked":t===e?"selected":""),style:{backgroundColor:f[e]?"green":"blue",color:"white"},onClick:()=>m(e),children:e},e))}),c&&(0,i.jsx)("div",{className:"modal-background",children:(0,i.jsxs)("div",{className:"confirmation-modal",children:[(0,i.jsxs)("p",{children:["Confirm your booking for ",t," today with ",e,"?"]}),(0,i.jsx)("button",{onClick:k,children:"Confirm"}),(0,i.jsx)("button",{className:"cancel",onClick:g,children:"Cancel"})]})}),d&&(0,i.jsx)("div",{className:"modal-background",children:(0,i.jsxs)("div",{className:"confirmation-modal",children:[(0,i.jsxs)("p",{children:["Cancel your booking for ",t," today with ",e,"?"]}),(0,i.jsx)("button",{onClick:j,children:"Confirm Cancel"}),(0,i.jsx)("button",{className:"cancel",onClick:g,children:"Cancel"})]})})]})}function c(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Appointment Page"}),(0,i.jsx)(l,{})," "]})}},7393:function(){},8538:function(){}},function(e){e.O(0,[955,724,971,23,744],function(){return e(e.s=5899)}),_N_E=e.O()}]);