(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{2069:function(e,t,l){Promise.resolve().then(l.bind(l,2425))},3141:function(e,t,l){"use strict";l.r(t);var s=l(3827),a=l(8792),n=l(703),i=l(7907);t.default=()=>{let e=()=>{let e=document.getElementById("location-section");e&&e.scrollIntoView({behavior:"smooth"})},t=()=>{let e=document.getElementById("banner-about");e&&e.scrollIntoView({behavior:"smooth"})},l=localStorage.getItem("ID"),r=(0,i.useRouter)(),c=()=>{let e=document.getElementById("testimonial-section");e&&e.scrollIntoView({behavior:"smooth"})};return l?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("nav",{className:"fixed z-50 w-full bg-red-50 flex justify-between px-6 pt-4 top-0",children:[(0,s.jsx)("div",{className:"logo",children:(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)(n.default,{className:"w-10",src:"/img/logo.png",width:50,height:50,alt:""}),(0,s.jsx)("h3",{className:"font-medium pt-2 pl-1",children:"Sobat Laundry"})]})}),(0,s.jsx)("div",{className:"menu p-3",children:(0,s.jsxs)("ul",{className:"flex justify-between gap-7 font-medium",children:[(0,s.jsx)(a.default,{href:"/",children:(0,s.jsx)("li",{children:"Home"})}),(0,s.jsx)("button",{onClick:t,children:(0,s.jsx)("li",{children:"Tentang Kami"})}),(0,s.jsx)(a.default,{href:"service",children:(0,s.jsx)("li",{children:"Layanan"})}),(0,s.jsx)("button",{onClick:e,children:(0,s.jsx)("li",{children:"Lokasi"})}),(0,s.jsx)("button",{onClick:c,children:(0,s.jsx)("li",{children:"Testimonial"})}),(0,s.jsx)("button",{onClick:()=>{localStorage.removeItem("ID"),r.refresh()},children:(0,s.jsx)("li",{children:"Log Out"})})]})}),(0,s.jsx)("div",{className:"whatsapp",children:(0,s.jsx)(a.default,{href:"https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale",children:(0,s.jsxs)("button",{className:"bg-emerald-500 p-3 rounded-full text-white inline-flex",children:[(0,s.jsx)(n.default,{src:"/img/whatsapp.png",width:24,height:24,alt:"nothing"}),(0,s.jsx)("span",{className:"pl-2",children:" 0812-8888-8888 "})]})})})]})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("nav",{className:"fixed z-50 w-full bg-red-50 flex justify-between px-6 pt-4 top-0",children:[(0,s.jsx)("div",{className:"logo",children:(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)(n.default,{className:"w-10",src:"/img/logo.png",width:50,height:50,alt:""}),(0,s.jsx)("h3",{className:"font-medium pt-2 pl-1",children:"Sobat Laundry"})]})}),(0,s.jsx)("div",{className:"menu p-3",children:(0,s.jsxs)("ul",{className:"flex justify-between gap-7 font-medium",children:[(0,s.jsx)(a.default,{href:"/",children:(0,s.jsx)("li",{children:"Home"})}),(0,s.jsx)("button",{onClick:t,children:(0,s.jsx)("li",{children:"Tentang Kami"})}),(0,s.jsx)(a.default,{href:"service",children:(0,s.jsx)("li",{children:"Layanan"})}),(0,s.jsx)("button",{onClick:e,children:(0,s.jsx)("li",{children:"Lokasi"})}),(0,s.jsx)("button",{onClick:c,children:(0,s.jsx)("li",{children:"Testimonial"})}),(0,s.jsx)(a.default,{href:"registrasi",children:(0,s.jsx)("li",{children:"Registrasi"})}),(0,s.jsx)(a.default,{href:"login",children:(0,s.jsx)("li",{children:"Login"})})]})}),(0,s.jsx)("div",{className:"whatsapp",children:(0,s.jsx)(a.default,{href:"https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale",children:(0,s.jsxs)("button",{className:"bg-emerald-500 p-3 rounded-full text-white inline-flex",children:[(0,s.jsx)(n.default,{src:"/img/whatsapp.png",width:24,height:24,alt:"nothing"}),(0,s.jsx)("span",{className:"pl-2",children:" 0812-8888-8888 "})]})})})]})})}},7937:function(e,t,l){"use strict";var s=l(3827),a=l(8792),n=l(4090);t.Z=()=>{let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{(async()=>{try{let e=await fetch("https://apilaundry.pexiaproperty.com/api/sidebar");if(!e.ok)throw Error("HTTP error! Status: ".concat(e.status));let l=await e.json();t(l)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex w-64 bg-white rounded-lg",children:(0,s.jsx)("ul",{className:"flex flex-col p-5 pl-10 gap-5 text-lg font-semibold",children:e.map(e=>(0,s.jsx)(a.default,{className:"hover:bg-slate-50 py-3 px-4 w-96 rounded-2xl",href:e.url,children:e.name},e.id))})})})}},2425:function(e,t,l){"use strict";l.r(t);var s=l(3827),a=l(4090),n=l(3141),i=l(7937);let r="https://apilaundry.pexiaproperty.com/api/profile";t.default=()=>{let[e,t]=(0,a.useState)(null),l=localStorage.getItem("ID"),[c,o]=(0,a.useState)(!1),[d,h]=(0,a.useState)({id:(null==e?void 0:e.id)||0,name:(null==e?void 0:e.name)||"",phone_number:(null==e?void 0:e.phone_number)||"",email:(null==e?void 0:e.email)||""});(0,a.useEffect)(()=>{e&&h({id:e.id,name:e.name,phone_number:e.phone_number,email:e.email})},[e]),(0,a.useEffect)(()=>{(async()=>{try{let e=await fetch("".concat(r,"/").concat(l));if(!e.ok)throw Error("HTTP Error! Status: ".concat(e.status));let s=await e.json();t(s)}catch(e){console.error("Error fetching data:",e)}})()},[l]);let m=e=>{let{name:t,value:l}=e.target;h({...d,[t]:l})},x=async e=>{e.preventDefault();try{(await fetch("".concat(r,"/").concat(l),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).ok?(console.log("Data Berhasil Disimpan"),o(!0)):console.error("Data gagal disimpan")}catch(e){console.error("Terjadi kesalahan:",e)}};return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)(n.default,{}),(0,s.jsxs)("div",{className:"bg-slate-50 px-10 py-20 flex",children:[(0,s.jsx)(i.Z,{}),(0,s.jsxs)("div",{className:"profile bg-white ml-10 p-4 h-30 w-2/4 rounded-lg",children:[c&&(0,s.jsx)("h1",{className:"text-green-500 text-xl",children:"Data Berhasil Diubah"}),(0,s.jsx)("h1",{className:"font-bold text-black text-xl",children:"Edit Profile"}),(0,s.jsx)("div",{className:"profilepicture m-3 place-content-center",children:(0,s.jsx)("button",{className:"rounded-full bg-red-50 w-28 h-28"})}),(0,s.jsxs)("form",{onSubmit:x,children:[(0,s.jsxs)("div",{className:"grid grid-cols-2",children:[(0,s.jsxs)("div",{className:"left ml-4",children:[(0,s.jsx)("h1",{className:"text-sm font-bold text-black mb-1.5",children:"First Name"}),(0,s.jsx)("input",{type:"text",className:"border border-black px-2 py-1 rounded-lg mt-1 mb-2",name:"name",onChange:m,value:d.name}),(0,s.jsx)("h1",{className:"text-sm font-bold text-black mb-1.5",children:"Email"}),(0,s.jsx)("input",{type:"text",className:"border border-black px-2 py-1 rounded-lg mt-1 mb-2",name:"email",onChange:m,value:d.email}),(0,s.jsx)("h1",{className:"text-sm font-bold text-black mb-1.5",children:"Phone Number"}),(0,s.jsx)("input",{type:"text",className:"border border-black px-2 py-1 rounded-lg mt-1 mb-2",name:"phone_number",onChange:m,value:d.phone_number})]}),(0,s.jsxs)("div",{className:"right",children:[(0,s.jsx)("h1",{className:"text-sm font-bold text-black mb-1.5",children:"Location"}),(0,s.jsx)("input",{type:"text",className:"border border-black px-2 py-1 rounded-lg mt-1 mb-2"}),(0,s.jsx)("h1",{className:"text-sm font-bold text-black mb-1.5",children:"Lorem Ipsum"}),(0,s.jsx)("input",{type:"text",className:"border border-black px-2 py-1 rounded-lg mt-1 mb-2"}),(0,s.jsx)("h1",{className:"text-sm font-bold text-black mb-1.5",children:"Lorem Ipsum"}),(0,s.jsx)("input",{type:"text",className:"border border-black px-2 py-1 rounded-lg mt-1 mb-2"})]})]}),(0,s.jsxs)("div",{className:"editprofile place-content-center float-right mt-5 inline-grid gap-4 grid-cols-2",children:[(0,s.jsx)("button",{className:"rounded-lg bg-white w-28 h-8 outline outline-offset-0 outline-black text-sm font-bold text-black",children:"Cancel"}),(0,s.jsx)("button",{className:"rounded-lg bg-white w-28 h-8 outline outline-offset-0 outline-black text-sm font-bold text-black",children:"Save Changes"})]})]})]})]})]})})}}},function(e){e.O(0,[134,971,69,744],function(){return e(e.s=2069)}),_N_E=e.O()}]);