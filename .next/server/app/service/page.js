(()=>{var e={};e.id=121,e.ids=[121],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4949:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>o});var r=s(482),i=s(9108),a=s(2563),n=s.n(a),l=s(8300),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);s.d(t,c);let o=["",{children:["service",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7494)),"D:\\ALTER\\PRIVATE PROJECT\\projectreact\\app\\service\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,2917)),"D:\\ALTER\\PRIVATE PROJECT\\projectreact\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\ALTER\\PRIVATE PROJECT\\projectreact\\app\\service\\page.tsx"],u="/service/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/service/page",pathname:"/service",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},8492:(e,t,s)=>{Promise.resolve().then(s.bind(s,6153)),Promise.resolve().then(s.bind(s,7393))},9937:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},2094:()=>{},6153:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(5344),i=s(6506),a=s(9410),n=s(8428);let l=()=>{let e=()=>{let e=document.getElementById("location-section");e&&e.scrollIntoView({behavior:"smooth"})},t=()=>{let e=document.getElementById("banner-about");e&&e.scrollIntoView({behavior:"smooth"})},s=localStorage.getItem("ID"),l=(0,n.useRouter)(),c=()=>{let e=document.getElementById("testimonial-section");e&&e.scrollIntoView({behavior:"smooth"})};return s?r.jsx(r.Fragment,{children:(0,r.jsxs)("nav",{className:"fixed z-50 w-full bg-red-50 flex justify-between px-6 pt-4 top-0",children:[r.jsx("div",{className:"logo",children:(0,r.jsxs)("div",{className:"flex justify-between",children:[r.jsx(a.default,{className:"w-10",src:"/img/logo.png",width:50,height:50,alt:""}),r.jsx("h3",{className:"font-medium pt-2 pl-1",children:"Sobat Laundry"})]})}),r.jsx("div",{className:"menu p-3",children:(0,r.jsxs)("ul",{className:"flex justify-between gap-7 font-medium",children:[r.jsx(i.default,{href:"/",children:r.jsx("li",{children:"Home"})}),r.jsx("button",{onClick:t,children:r.jsx("li",{children:"Tentang Kami"})}),r.jsx(i.default,{href:"service",children:r.jsx("li",{children:"Layanan"})}),r.jsx("button",{onClick:e,children:r.jsx("li",{children:"Lokasi"})}),r.jsx("button",{onClick:c,children:r.jsx("li",{children:"Testimonial"})}),r.jsx("button",{onClick:()=>{localStorage.removeItem("ID"),l.refresh()},children:r.jsx("li",{children:"Log Out"})})]})}),r.jsx("div",{className:"whatsapp",children:r.jsx(i.default,{href:"https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale",children:(0,r.jsxs)("button",{className:"bg-emerald-500 p-3 rounded-full text-white inline-flex",children:[r.jsx(a.default,{src:"/img/whatsapp.png",width:24,height:24,alt:"nothing"}),r.jsx("span",{className:"pl-2",children:" 0812-8888-8888 "})]})})})]})}):r.jsx(r.Fragment,{children:(0,r.jsxs)("nav",{className:"fixed z-50 w-full bg-red-50 flex justify-between px-6 pt-4 top-0",children:[r.jsx("div",{className:"logo",children:(0,r.jsxs)("div",{className:"flex justify-between",children:[r.jsx(a.default,{className:"w-10",src:"/img/logo.png",width:50,height:50,alt:""}),r.jsx("h3",{className:"font-medium pt-2 pl-1",children:"Sobat Laundry"})]})}),r.jsx("div",{className:"menu p-3",children:(0,r.jsxs)("ul",{className:"flex justify-between gap-7 font-medium",children:[r.jsx(i.default,{href:"/",children:r.jsx("li",{children:"Home"})}),r.jsx("button",{onClick:t,children:r.jsx("li",{children:"Tentang Kami"})}),r.jsx(i.default,{href:"service",children:r.jsx("li",{children:"Layanan"})}),r.jsx("button",{onClick:e,children:r.jsx("li",{children:"Lokasi"})}),r.jsx("button",{onClick:c,children:r.jsx("li",{children:"Testimonial"})}),r.jsx(i.default,{href:"registrasi",children:r.jsx("li",{children:"Registrasi"})}),r.jsx(i.default,{href:"login",children:r.jsx("li",{children:"Login"})})]})}),r.jsx("div",{className:"whatsapp",children:r.jsx(i.default,{href:"https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale",children:(0,r.jsxs)("button",{className:"bg-emerald-500 p-3 rounded-full text-white inline-flex",children:[r.jsx(a.default,{src:"/img/whatsapp.png",width:24,height:24,alt:"nothing"}),r.jsx("span",{className:"pl-2",children:" 0812-8888-8888 "})]})})})]})})}},7393:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(5344),i=s(6506),a=s(3729);let n=()=>{let[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(!1),l=async e=>{try{let t=await fetch(`https://alterindonesia.com/laundry_service/delete_service/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}),s=await t.json();"success"===s.status&&n(!0)}catch(e){console.error("Error deleting service: ",e)}};return((0,a.useEffect)(()=>{(async()=>{try{let e=await fetch("https://alterindonesia.com/laundry_service");if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);let s=await e.json();t(s)}catch(e){console.error("Error fetching data:",e)}})()},[]),s)?r.jsx(r.Fragment,{children:r.jsx("h1",{children:"Data Berhasil"})}):r.jsx(r.Fragment,{children:e.map(e=>e.id%2==0?(0,r.jsxs)("div",{className:"banner bg-red-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-40",children:[(0,r.jsxs)("div",{className:"banner-text pl-16 pr-10",children:[r.jsx(i.default,{href:`/service/${e.id}`,children:r.jsx("h1",{className:"font-bold text-left text-black text-5xl",children:e.name})}),r.jsx("p",{className:"mt-7",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor dolor mauris, at venenatis est malesuada feugiat. Pellentesque semper consectetur purus, eu ultricies diam accumsan a. Ut lobortis tristique dictum. Donec faucibus varius vulputate. Phasellus fringilla tristique viverra. Phasellus non metus nisi. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc viverra vel leo ornare vulputate."}),r.jsx(i.default,{href:`/service/${e.id}`,children:r.jsx("button",{className:"w-80 bg-orange-400 text-white rounded-md py-2 mt-8 hover:bg-orange-600",children:"Detail"})}),r.jsx("button",{onClick:()=>l(e.id),className:"w-80 bg-red-400 text-white rounded-md py-2 mt-8 hover:bg-red-600",children:"Delete"})]}),r.jsx("div",{className:"banner-image flex justify-center w-96 pb-32",children:r.jsx("img",{src:"img/laundry1.png",alt:"nothing"})})]},e.id):r.jsx("div",{children:(0,r.jsxs)("div",{className:"bg-slate-50 banner-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-20 px-10",children:[r.jsx("div",{className:"banner-2-image flex justify-center",children:r.jsx("img",{className:"rounded-full w-6/12",src:"img/laundry2.png",alt:""})}),(0,r.jsxs)("div",{className:"banner-text",children:[r.jsx(i.default,{href:`/service/${e.id}`,children:r.jsx("h1",{className:"font-bold text-left text-black text-5xl",children:e.name})}),r.jsx("p",{className:"mt-7",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor dolor mauris, at venenatis est malesuada feugiat. Pellentesque semper consectetur purus, eu ultricies diam accumsan a. Ut lobortis tristique dictum. Donec faucibus varius vulputate. Phasellus fringilla tristique viverra. Phasellus non metus nisi. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc viverra vel leo ornare vulputate."}),r.jsx(i.default,{href:`/service/${e.id}`,children:r.jsx("button",{className:"w-80 bg-orange-400 text-white rounded-md py-2 mt-8 hover:bg-orange-600",children:"Detail"})}),r.jsx("button",{onClick:()=>l(e.id),className:"w-80 bg-red-400 text-white rounded-md py-2 mt-8 hover:bg-red-600",children:"Delete"})]})]})},e.id))})}},3829:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>n});let r=(0,s(6843).createProxy)(String.raw`D:\ALTER\PRIVATE PROJECT\projectreact\app\components\Navbar.tsx`),{__esModule:i,$$typeof:a}=r,n=r.default},2917:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>l});var r=s(5036),i=s(265),a=s.n(i);s(7272),s(9175);var n=s(5355);s(2996),n.vc.autoAddCss=!1;let l={title:"Create Next App",description:"Generated by create next app"};function c({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:a().className,children:e})})}},7494:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(5036),i=s(3829);let a=(0,s(6843).createProxy)(String.raw`D:\ALTER\PRIVATE PROJECT\projectreact\app\components\Services\AllServices.tsx`),{__esModule:n,$$typeof:l}=a,c=a.default,o=async()=>{let e=await fetch("https://jsonplaceholder.typicode.com/posts");return await e.json(),r.jsx("div",{children:(0,r.jsxs)("div",{className:"relative",children:[r.jsx(i.ZP,{}),r.jsx(c,{})]})})}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,548,337,822],()=>s(4949));module.exports=r})();