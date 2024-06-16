"use client"
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { useRouter } from 'next/navigation';


const Navbar = () => {
    const handleLocation = () => {
        const element = document.getElementById('location-section')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleAbout = () => {
        const element = document.getElementById('banner-about')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const isLoggedIn = localStorage.getItem('ID');

    const Router = useRouter()
    const handleLogout = () => {
        localStorage.removeItem('ID')
        Router.refresh()
    }

    const handleTestimonial = () => {
        const element = document.getElementById('testimonial-section')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    if (isLoggedIn) {
        return (
            <>
                <nav className="fixed z-50 w-full bg-red-50 flex justify-between px-6 pt-4 top-0">
                    <div className="logo">
                        <div className="flex justify-between"
                        ><Image className="w-10" src="/img/logo.png" width={50} height={50} alt="" />
                            <h3 className="font-medium pt-2 pl-1">Sobat Laundry</h3>
                        </div>
                    </div>
                    <div className="menu p-3">
                        <ul className="flex justify-between gap-7 font-medium">
                            <Link href="/">
                                <li>Home</li>
                            </Link>
                            <button onClick={handleAbout}>
                                <li>Tentang Kami</li>
                            </button>
                            <Link href="service">
                                <li>Layanan</li>
                            </Link>
                            <button onClick={handleLocation}>
                                <li>Lokasi</li>
                            </button>
                            <button onClick={handleTestimonial}>
                                <li>Testimonial</li>
                            </button>
                            <button onClick={handleLogout}>
                                <li>Log Out</li>
                            </button>
                        </ul>
                    </div>
                    <div className="whatsapp">
                        <Link href="https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale">
                            <button className="bg-emerald-500 p-3 rounded-full text-white inline-flex">
                                <Image src="/img/whatsapp.png" width={24} height={24} alt="nothing" />
                                {/* <i className="fa-brands fa-whatsapp text-2xl"></i> */}
                                <span className="pl-2"> 0812-8888-8888 </span>
                            </button>
                        </Link>
                    </div>
                </nav>

            </>
        )
    } else {
        return (
            <>
                <nav className="fixed z-50 w-full bg-red-50 flex justify-between px-6 pt-4 top-0">
                    <div className="logo">
                        <div className="flex justify-between"
                        ><Image className="w-10" src="/img/logo.png" width={50} height={50} alt="" />
                            <h3 className="font-medium pt-2 pl-1">Sobat Laundry</h3>
                        </div>
                    </div>
                    <div className="menu p-3">
                        <ul className="flex justify-between gap-7 font-medium">
                            <Link href="/">
                                <li>Home</li>
                            </Link>
                            <button onClick={handleAbout}>
                                <li>Tentang Kami</li>
                            </button>
                            <Link href="service">
                                <li>Layanan</li>
                            </Link>
                            <button onClick={handleLocation}>
                                <li>Lokasi</li>
                            </button>
                            <button onClick={handleTestimonial}>
                                <li>Testimonial</li>
                            </button>
                            <Link href="registrasi">
                                <li>Registrasi</li>
                            </Link>
                            <Link href="login">
                                <li>Login</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="whatsapp">
                        <Link href="https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale">
                            <button className="bg-emerald-500 p-3 rounded-full text-white inline-flex">
                                <Image src="/img/whatsapp.png" width={24} height={24} alt="nothing" />
                                {/* <i className="fa-brands fa-whatsapp text-2xl"></i> */}
                                <span className="pl-2"> 0812-8888-8888 </span>
                            </button>
                        </Link>
                    </div>
                </nav>

            </>
        )
    }

    // return (
    //     <>
    //         <nav className="fixed z-50 w-full bg-red-50 flex justify-between px-6 pt-4 top-0">
    //             <div className="logo">
    //                 <Link className="flex justify-between" href=""
    //                 ><Image className="w-10" src="/img/logo.png" width={50} height={50} alt="" />
    //                     <h3 className="font-medium pt-2 pl-1">Sobat Laundry</h3>
    //                 </Link>
    //             </div>
    //             <div className="menu p-3">
    //                 <ul className="flex justify-between gap-7 font-medium">
    //                     <Link href="/">
    //                         <li>Home</li>
    //                     </Link>
    //                     <button onClick={handleAbout}>
    //                         <li>Tentang Kami</li>
    //                     </button>
    //                     <Link href="service">
    //                         <li>Layanan</li>
    //                     </Link>
    //                     <button onClick={handleLocation}>
    //                         <li>Lokasi</li>
    //                     </button>
    //                     <Link href="">
    //                         <li>Testimonial</li>
    //                     </Link>
    //                     <Link href="registrasi">
    //                         <li>Registrasi</li>
    //                     </Link>
    //                     <Link href="login">
    //                         <li>Login</li>
    //                     </Link>
    //                 </ul>
    //             </div>
    //             <div className="whatsapp">
    //                 <Link href="https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale">
    //                     <button className="bg-emerald-500 p-3 rounded-full text-white inline-flex">
    //                         <Image src="/img/whatsapp.png" width={24} height={24} alt="nothing" />
    //                         {/* <i className="fa-brands fa-whatsapp text-2xl"></i> */}
    //                         <span className="pl-2"> 0812-8888-8888 </span>
    //                     </button>
    //                 </Link>
    //             </div>
    //         </nav>

    //     </>
    // )

}
export default Navbar