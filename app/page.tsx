// "use client"
import Link from "next/link";
import Navbar from "./components/Navbar";
import Banner from "./components/Home/Banner";
import Service from "./components/Home/Service";
import Testimonial from "./components/Home/Testimonial";
import AllServices from "./components/Services/AllServices";
import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

} from '@fortawesome/free-solid-svg-icons'


const base_url = "https://jsonplaceholder.typicode.com/posts"; //endpoint

interface Dataposts {
  userId: number,
  id: number,
  title: string,
  body: string
}
const Home = async () => {
  const response = await fetch(base_url);
  const posts: Dataposts[] = await response.json();

  // }

  // export default function Home() {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <Banner />
        <Service />
      </div>
      {/* banner 2 */}
      <div
        className="bg-slate-50 banner-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10"
      >
        <div className="banner-2-image flex justify-center">
          <Image className="rounded-full" src="/img/laundry2.png" width={150} height={150} alt="nothing" />
        </div>
        <div className="banner-text" id='banner-about'>
          <h2 className="font-bold text-left text-black text-xl">
            Deterjen Unggulan
          </h2>
          <p className="mt-2">
            Kami menggunakan detergen yang lebih ramah lingkung berbahan dasar Methyl Esther Sulfonate (MES) yang berasal dari bahan nabati namun memiliki daya ampuh yang efektif mengangkat kotoran membandel pada pakaian."
          </p>
          {/* <button
            className="w-80 bg-orange-400 text-white rounded-md py-2 mt-8 hover:bg-orange-600"

          >
            Lorem Ipsum
          </button> */}
          {/* <!-- <p id="mahasiswa" className="text-2xl"></p>
          <p>----------------------------------------</p>
          <p id="services" className="text-xl"></p>
          <p id="greeting" className="text-3xl"></p> --> */}
        </div>
      </div>
      {/* end of banner */}

      {/* banner 3 */}
      <div
        className="banner bg-red-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10"
      >
        <div className="banner-text pl-16 pr-10">
          <h2 className="font-bold text-justify text-black text-xl">
            Jaminan Higienis
          </h2>
          <p className="mt-2">
            Menjamin konsep 1 mesin cuci hanya untuk 1 pengguna jasa tidak dicampur dengan pengguna jasa yang lain. Konsep ini juga dapat meminimalisir pakaian tertukar dengan pengguna jasa lain.
          </p>
          {/* <button
            className="w-80 bg-orange-400 text-white rounded-md py-2 mt-8 hover:bg-orange-600"
          >
            Lorem Ipsum
          </button> */}
        </div>
        <div className="banner-image flex justify-center w-96 pb-32">
          <Image className="rounded-full" src="/img/laundry1.png" width={150} height={150} alt="nothing" />
        </div>
      </div>
      {/* end of banner */}

      {/* banner-4 */}
      <div
        className="bg-slate-50 banner-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-20 px-10"
      >
        <div className="banner-2-image flex justify-center">
          <Image className="rounded-full" src="/img/laundry2.png" width={300} height={300} alt="nothing" />
        </div>
        <div className="banner-text">
          <h2 className="font-bold text-left text-black text-xl">Jaminan Kehilangan</h2>
          <p className="mt-7">
            Penetapan prosedur yang selalu mengalami penyempurnaan untuk peningkatan mutu layanan laundry. Apabila terjadi kehilangan akan kami garansi sesuai syarat dan ketentuan berlaku.


          </p>
          {/* <button
          className="w-80 bg-orange-400 text-white rounded-md py-2 mt-8 hover:bg-orange-600"

          >
          Lorem Ipsum
        </button> */}
          {/* <!-- <p id="mahasiswa" className="text-2xl"></p>
          <p>----------------------------------------</p>
          <p id="services" className="text-xl"></p>
          <p id="greeting" className="text-3xl"></p> --> */}
        </div>
      </div>
      <div
        className="banner bg-red-50 py-20 px-10"
        id="testimonial-section">
        <h1 className="font-bold text-center text-black text-5xl">Testimonial</h1>
        <Testimonial />
      </div>

      {/* end of banner */}

      <div className="banner bg-slate-50 py-20 grid grid-cols-2 px-20" id="location-section">
        <div className="">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.300374434179!2d106.84519397355636!3d-6.35514936216979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec43fb3bc45d%3A0xef1c3d9c88b3e1e8!2sSobat%20Laundry!5e0!3m2!1sen!2sid!4v1709978888420!5m2!1sen!2sid" width="500" height="500" loading="lazy"></iframe>
        </div>
        <div>
          <p>Alamat Lengkap: Jl. Akses UI No.6, Tugu, Cimanggis, Kota Depok, Jawa Barat</p>
          <p>Telepon: 0821-5932-7690</p>
          {/* <FontAwesomeIcon icon={faInstitution} /> */}
          <p>Instagram: @sobat_laundry</p>
          <p>Facebook: Sobat Laundry</p>
        </div>
      </div>
    </div >
  );
}
export default Home