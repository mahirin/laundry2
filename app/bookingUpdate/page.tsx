"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const base_url = "https://apilaundry.pexiaproperty.com/laundry_service/booking_detail";

interface Dataservices {
    id: number,
    name: string,
    icon: string,
    price: number,
    description: string
}


const DataBooking = () => {
    const [services, setServices] = useState<Dataservices[]>([]);
    useEffect(() => {
        const Service = async () => {
            try {
                // validasi fetch data dari API
                const response = await fetch(base_url);
                // jika fetch data gagal maka show error log
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // jika fetch data berhasil ubah format data dari API jadi json ke variabel services
                const services: Dataservices[] = await response.json();
                setServices(services);
            }

            // jika fetch data gagal jalankan catch
            catch (error) {
                console.error(`Error fetching data:`, error);
            }
        }
        Service();

    }, []);


    return (
        <>
            <div>
                <Navbar />

                {services.map((service) => {
                    if (service.id % 2 === 0) {
                        return (
                            <div key={service.id}
                                className="banner bg-red-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-40"
                            >
                                <div className="banner-text pl-16 pr-10">
                                    <Link href={`/service/${service.id}`}>
                                        <h1 className="font-bold text-left text-black text-5xl">{service.name}</h1>
                                    </Link>
                                    <p className="mt-7">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                        porttitor dolor mauris, at venenatis est malesuada feugiat.
                                        Pellentesque semper consectetur purus, eu ultricies diam accumsan a.
                                        Ut lobortis tristique dictum. Donec faucibus varius vulputate.
                                        Phasellus fringilla tristique viverra. Phasellus non metus nisi.
                                        Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum
                                        primis in faucibus. Nunc viverra vel leo ornare vulputate.
                                    </p>
                                    <Link href={`/service/${service.id}`}>
                                        <button
                                            className="w-80 bg-orange-400 text-white rounded-md py-2 mt-8 hover:bg-orange-600"
                                        >
                                            Detail
                                        </button>
                                    </Link>
                                </div>
                                <div className="banner-image flex justify-center w-96 pb-32">
                                    <img src="img/laundry1.png" alt="nothing" />
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={service.id}>
                                <div
                                    className="bg-slate-50 banner-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-20 px-10"
                                >
                                    <div className="banner-2-image flex justify-center">
                                        <img className="rounded-full w-6/12" src="img/laundry2.png" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <Link href={`/service/${service.id}`}>
                                            <h1 className="font-bold text-left text-black text-5xl">{service.name}</h1>
                                        </Link>
                                        <p className="mt-7">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                            porttitor dolor mauris, at venenatis est malesuada feugiat.
                                            Pellentesque semper consectetur purus, eu ultricies diam accumsan a.
                                            Ut lobortis tristique dictum. Donec faucibus varius vulputate.
                                            Phasellus fringilla tristique viverra. Phasellus non metus nisi.
                                            Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum
                                            primis in faucibus. Nunc viverra vel leo ornare vulputate.
                                        </p>
                                        <Link href={`/service/${service.id}`}>
                                            <button
                                                className="w-80 bg-orange-400 text-white rounded-md py-2 mt-8 hover:bg-orange-600"

                                            >
                                                Detail
                                            </button>
                                        </Link>
                                        {/* <p id="mahasiswa" className="text-2xl"></p>
                                <p>----------------------------------------</p>
                                <p id="services" className="text-xl"></p>
                                <p id="greeting" className="text-3xl"></p> */}
                                    </div>
                                </div>
                            </div>

                        )

                    }
                })}
            </div>

        </>
    )
}
export default DataBooking