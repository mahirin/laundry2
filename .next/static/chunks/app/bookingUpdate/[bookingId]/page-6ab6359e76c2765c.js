(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{1192:function(e,r,a){Promise.resolve().then(a.bind(a,7354))},7354:function(e,r,a){"use strict";a.r(r);var n=a(3827),o=a(7907),t=a(4090);r.default=()=>{let e=(0,o.useParams)().bookingId,[r,a]=(0,t.useState)(null),[s,l]=(0,t.useState)(!0),[d,u]=(0,t.useState)(!1),[i,c]=(0,t.useState)({id:(null==r?void 0:r.id)||0,name:(null==r?void 0:r.name)||"",phone:(null==r?void 0:r.phone)||"",order:(null==r?void 0:r.order)||""});(0,t.useEffect)(()=>{r&&c({id:r.id,name:r.name,phone:r.phone,order:r.order})},[r]);let h=e=>{let{name:r,value:a}=e.target;c({...i,[r]:a})},m=async r=>{r.preventDefault();try{(await fetch("".concat("https://apilaundry.pexiaproperty.com/laundry_service/save_edit_booking","/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok?(console.log("Data Berhasil Disimpan"),u(!0)):console.error("Data gagal disimpan")}catch(e){console.error("Terjadi kesalahan:",e)}};return((0,t.useEffect)(()=>{(async()=>{try{let r=await fetch("".concat("https://apilaundry.pexiaproperty.com/laundry_service/booking_detail","/").concat(e));if(!r.ok)throw Error("HTTP Error! Status: ".concat(r.status));let n=await r.json();a(n),l(!1)}catch(e){console.error("Gagal Mengambil Data")}})()},[e]),s)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"bg-red-400",children:"Booking Detail"}),(0,n.jsx)("p",{children:"Loading..."})]}):d?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{children:"Data Berhasil"})}):r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"bg-red-400 text-2xl font-bold",children:"Booking Form Edit"}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)("div",{className:"max-w-lg mx-auto p-8 shadow-md rounded-lg",children:(0,n.jsxs)("form",{onSubmit:m,children:[(0,n.jsx)("label",{htmlFor:"name",children:"Nama"}),(0,n.jsx)("input",{type:"text",name:"name",placeholder:"Masukkan nama",onChange:h,value:i.name,className:"w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"}),(0,n.jsx)("label",{htmlFor:"phone",children:"No. Whatsapp"}),(0,n.jsx)("input",{type:"number",name:"phone",placeholder:"Masukkan nomor whatsapp",onChange:h,value:i.phone,className:"w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"}),(0,n.jsx)("br",{}),(0,n.jsx)("label",{htmlFor:"order",children:"Order"}),(0,n.jsx)("input",{type:"text",name:"order",placeholder:"Masukkan orderan",onChange:h,value:i.order,className:"w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{className:"order mt-4 w-20 px-4 py-2 rounded-lg border-2 border-blue-500",children:"Order"})]})})})]}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{children:"Data tidak tersedia"})})}},7907:function(e,r,a){"use strict";var n=a(5313);a.o(n,"useParams")&&a.d(r,{useParams:function(){return n.useParams}}),a.o(n,"useRouter")&&a.d(r,{useRouter:function(){return n.useRouter}})}},function(e){e.O(0,[971,69,744],function(){return e(e.s=1192)}),_N_E=e.O()}]);