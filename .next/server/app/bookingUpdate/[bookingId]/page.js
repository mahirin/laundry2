(()=>{var e={};e.id=656,e.ids=[656],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2802:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>p,routeModule:()=>m,tree:()=>l});var a=r(482),o=r(9108),n=r(2563),s=r.n(n),i=r(8300),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let l=["",{children:["bookingUpdate",{children:["[bookingId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4060)),"D:\\ALTER\\PRIVATE PROJECT\\projectreact\\app\\bookingUpdate\\[bookingId]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2917)),"D:\\ALTER\\PRIVATE PROJECT\\projectreact\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\ALTER\\PRIVATE PROJECT\\projectreact\\app\\bookingUpdate\\[bookingId]\\page.tsx"],c="/bookingUpdate/[bookingId]/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/bookingUpdate/[bookingId]/page",pathname:"/bookingUpdate/[bookingId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},2743:(e,t,r)=>{Promise.resolve().then(r.bind(r,4345))},9937:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},2094:()=>{},4345:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(5344),o=r(8428),n=r(3729);let s=()=>{let e=(0,o.useParams)().bookingId,[t,r]=(0,n.useState)(null),[s,i]=(0,n.useState)(!0),[d,l]=(0,n.useState)(!1),[p,c]=(0,n.useState)({id:t?.id||0,name:t?.name||"",phone:t?.phone||"",order:t?.order||""});(0,n.useEffect)(()=>{t&&c({id:t.id,name:t.name,phone:t.phone,order:t.order})},[t]);let u=e=>{let{name:t,value:r}=e.target;c({...p,[t]:r})},m=async t=>{t.preventDefault();try{(await fetch(`https://apilaundry.pexiaproperty.com/laundry_service/save_edit_booking/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).ok?(console.log("Data Berhasil Disimpan"),l(!0)):console.error("Data gagal disimpan")}catch(e){console.error("Terjadi kesalahan:",e)}};return((0,n.useEffect)(()=>{(async()=>{try{let t=await fetch(`https://apilaundry.pexiaproperty.com/laundry_service/booking_detail/${e}`);if(!t.ok)throw Error(`HTTP Error! Status: ${t.status}`);let a=await t.json();r(a),i(!1)}catch(e){console.error("Gagal Mengambil Data")}})()},[e]),s)?(0,a.jsxs)(a.Fragment,{children:[a.jsx("h1",{className:"bg-red-400",children:"Booking Detail"}),a.jsx("p",{children:"Loading..."})]}):d?a.jsx(a.Fragment,{children:a.jsx("h1",{children:"Data Berhasil"})}):t?(0,a.jsxs)(a.Fragment,{children:[a.jsx("h1",{className:"bg-red-400 text-2xl font-bold",children:"Booking Form Edit"}),a.jsx("div",{className:"",children:a.jsx("div",{className:"max-w-lg mx-auto p-8 shadow-md rounded-lg",children:(0,a.jsxs)("form",{onSubmit:m,children:[a.jsx("label",{htmlFor:"name",children:"Nama"}),a.jsx("input",{type:"text",name:"name",placeholder:"Masukkan nama",onChange:u,value:p.name,className:"w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"}),a.jsx("label",{htmlFor:"phone",children:"No. Whatsapp"}),a.jsx("input",{type:"number",name:"phone",placeholder:"Masukkan nomor whatsapp",onChange:u,value:p.phone,className:"w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"}),a.jsx("br",{}),a.jsx("label",{htmlFor:"order",children:"Order"}),a.jsx("input",{type:"text",name:"order",placeholder:"Masukkan orderan",onChange:u,value:p.order,className:"w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"}),a.jsx("br",{}),a.jsx("button",{className:"order mt-4 w-20 px-4 py-2 rounded-lg border-2 border-blue-500",children:"Order"})]})})})]}):a.jsx(a.Fragment,{children:a.jsx("h1",{children:"Data tidak tersedia"})})}},8428:(e,t,r)=>{"use strict";var a=r(4767);r.o(a,"useParams")&&r.d(t,{useParams:function(){return a.useParams}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},4060:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>s});let a=(0,r(6843).createProxy)(String.raw`D:\ALTER\PRIVATE PROJECT\projectreact\app\bookingUpdate\[bookingId]\page.tsx`),{__esModule:o,$$typeof:n}=a,s=a.default},2917:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>i});var a=r(5036),o=r(265),n=r.n(o);r(7272),r(9175);var s=r(5355);r(2996),s.vc.autoAddCss=!1;let i={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:n().className,children:e})})}},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(337);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,548,337],()=>r(2802));module.exports=a})();