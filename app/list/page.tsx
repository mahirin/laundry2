"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const base_url = "https://apilaundry.pexiaproperty.com/laundry_service/booking_list";

interface Databooking {
    id: number,
    name: string,
    phone: string,
    order: string
}


const Allbooking = () => {
    const [booking, setBooking] = useState<Databooking[]>([]);
    useEffect(() => {
        const Booking = async () => {
            try {
                // validasi fetch data dari API
                const response = await fetch(base_url);
                // jika fetch data gagal maka show error log
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // jika fetch data berhasil ubah format data dari API jadi json ke variabel services
                const booking: Databooking[] = await response.json();
                setBooking(booking);
            }

            // jika fetch data gagal jalankan catch
            catch (error) {
                console.error(`Error fetching data:`, error);
            }
        }
        Booking();

    }, []);


    return (
        <>
            <table className="border-collapse border border-slate-400 ...">
                <thead>
                    <tr>
                        <th className="border border-slate-300 ...">Name</th>
                        <th className="border border-slate-300 ...">Phone</th>
                        <th className="border border-slate-300 ...">Order</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.map((book => {
                        return (
                            <tr key={book.id}>
                                <td className="border border-slate-300 ...">{book.name}</td>
                                <td className="border border-slate-300 ...">{book.phone}</td>
                                <td className="border border-slate-300 ...">{book.order}</td>
                            </tr>
                        )
                    }))}
                </tbody>
            </table>
        </>
    )
}
export default Allbooking