"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

const base_url = "https://apilaundry.pexiaproperty.com/api/auth"; //endpoint


const Registrasi = () => {
    const [dataRegistrasi, setDataRegistrasi] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // handle change from input form
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataRegistrasi({
            ...dataRegistrasi,
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
                body: JSON.stringify(dataRegistrasi)
            });

            if (response.ok) {
                //handle success
                console.log("Data Berhasil Disimpan");
                setSubmitSuccess(true)
            }
            else {
                //handle error
                const errorData = await response.json()
                setErrorMessage(errorData.message)
                console.error('Data gagal disimpan');
            }
        }
        catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    }

    if (submitSuccess) {
        return (
            <>
                <div className="max-w-lg mx-auto p-8 shadow-md rounded-lg">
                    <h1>Sign Up Berhasil</h1>
                    <Link href="login">
                        <button className="order mt-4 w-20 px-4 py-2 rounded-lg border-2 border-blue-500">Login</button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                <Navbar />
                <div className="flex justify-center item-center h-screen shadow-md rounded-lg mt-28">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        {errorMessage &&
                            (
                                <h1>{errorMessage}</h1>
                            )
                        }
                        <label htmlFor="name">Nama</label>
                        <input type="text" name="name" placeholder="Masukkan nama" onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Masukkan email anda" onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" /><br />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Masukkan password" onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" /><br />

                        <button type="submit" className="order mt-4 w-30 px-4 py-2 rounded-lg border-2 border-blue-500">
                            Sign Up
                        </button>
                    </form>
                </div>

            </div >
        </>
    );
}
export default Registrasi