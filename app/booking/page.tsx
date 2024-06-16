"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../components/Navbar";

const base_url = "https://apilaundry.pexiaproperty.com/laundry_service/save_data"; //endpoint


const Booking = () => {
    const [dataBooking, setDataBooking] = useState({
        name: '',
        phone: '',
        order: ''
    })

    const [submitSuccess, setSubmitSuccess] = useState(false);

    // handle change from input form
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataBooking({
            ...dataBooking,
            [name]: value
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(base_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataBooking)
            });
            if (response.ok) {
                //handle success
                console.log("Data Berhasil Disimpan");
                setSubmitSuccess(true)
            }
            else {
                //handle error
                console.error('Data gagal disimpan');
            }
        }
        catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    }

    if(submitSuccess){
        return(
            <>
            <h1>Data Berhasil</h1>
            </>
        )
    }

    return (
        <>
            <div>
                <Navbar />
                <div className="max-w-lg mx-auto p-8 shadow-md rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nama</label>
                        <input type="text" name="name" placeholder="Masukkan nama" onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />

                        <label htmlFor="phone">No. Whatsapp</label>
                        <input type="number" name="phone" placeholder="Masukkan nomor whatsapp" onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" /><br />

                        <label htmlFor="order">Order</label>
                        <input type="text" name="order" placeholder="Masukkan orderan" onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" /><br />

                        <button className="order mt-4 w-20 px-4 py-2 rounded-lg border-2 border-blue-500">
                            Order
                        </button>
                    </form>
                </div>

            </div >
        </>
    );
}
export default Booking