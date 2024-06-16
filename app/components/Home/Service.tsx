"use client"
import { config } from '@fortawesome/fontawesome-svg-core'
import Image from 'next/image';
import Link from 'next/link';

import '@fortawesome/fontawesome-svg-core/styles.css'
import React, { useEffect, useState } from 'react';
config.autoAddCss = false

const base_url = "https://apilaundry.pexiaproperty.com/laundry_service";

interface Dataservices {
    id: number,
    name: string,
    icon: string,
    price: number,
    description: string
}

const Services = () => {
    // deklarasi usestate services (semua data service)
    const [services, setServices] = useState<Dataservices[]>([]);

    // deklarasi usestate selectedServices (detail service)
    const [selectedService, setSelectedService] = useState<Dataservices | null>(null)

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

    // fungsi ketika klik service
    const handleServiceClick = (service: Dataservices) => {
        setSelectedService(service);
    }

    return (
        <>
            <div className="bg-slate-50 px-10 py-20 flex justify-center">

                <div className="category absolute bottom-10 bg-white rounded-xl">

                    {/* Menampilkan data detail service */}
                    {selectedService ? (

                        <div>
                            <h1>Detail</h1>
                            <h3>
                                {selectedService.name}
                            </h3>

                        </div>
                    ) : (
                        // menampilkan semua service
                        <>
                            <h1 className="font-bold text-center text-black text-xl mt-8">Layanan</h1>
                            <div
                                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 px-10 py-10 gap-y-8 gap-x-20 text-center"
                            >

                                {services.map((service) => {

                                    return (
                                        <div className="category-child" key={service.id} onClick={() => handleServiceClick(service)}>
                                            <Link href="" className="hover:text-orange-400">
                                                <button
                                                    className="bg-orange-100 w-10 rounded-3xl p-2 hover:bg-orange-400"
                                                >
                                                    <Image
                                                        src={"/icons/" + service.icon}
                                                        width={30}
                                                        height={30}
                                                        alt="nothing" />

                                                </button>
                                                <h6 className="font-medium hover:text-black">{service.name}</h6>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )}

                </div>
            </div>
        </>
    )
}


export default Services