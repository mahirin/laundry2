"use client"
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const base_url = "https://apilaundry.pexiaproperty.com/api/login"; //endpoint

interface DataLogin {
    email: string,
    password: string
}

interface DataResponse {
    id: string,
    email: string,
    name: string,
    status: string
}

const Login = () => {
    const [dataLogin, setDataLogin] = useState<DataLogin>({
        // name: '',
        email: '',
        password: ''
    })

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginFailed, setLoginFailed] = useState<boolean>(false);

    // handle change from input form
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataLogin({
            ...dataLogin,
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
                body: JSON.stringify(dataLogin)
            });
            const data: DataResponse = await response.json()

            if (data.status === "success" && data.id && data.name) {
                //handle success
                console.log("Login Berhasil");
                localStorage.setItem('ID', data.id)
                localStorage.setItem("userName", data.name)
                setLoginSuccess(true)
            }
            else if (data.status === "error") {
                //handle error
                console.error('Login Gagal');
                setLoginFailed(true)
            }
        }
        catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    }

    const Router = useRouter()

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('ID');
        if (isLoggedIn) {
            Router.push('/account')
        }
    })

    // if (loginSuccess) {
    //     return (
    //         <>
    //             <div className="max-w-lg mx-auto p-8 shadow-md rounded-lg">
    //                 <h1>Login Berhasil</h1>
    //                 {/* <Link href="">
    //                     <button className="order mt-4 w-20 px-4 py-2 rounded-lg border-2 border-blue-500">Login</button>
    //                 </Link> */}
    //             </div>
    //         </>
    //     )
    // }

    if (loginFailed) {
        return (
            <>
                <div className="max-w-lg mx-auto p-8 shadow-md rounded-lg">
                    <h1>Login Gagal</h1>
                    {/* <Link href="">
                        <button className="order mt-4 w-20 px-4 py-2 rounded-lg border-2 border-blue-500">Login</button>
                    </Link> */}
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                <Navbar />
                <div className="py-20 max-w-lg mx-auto p-8 shadow-md rounded-lg">
                    <form onSubmit={handleSubmit}>
                        {/* <label htmlFor="name">Nama</label>
                        <input type="text" name="name" placeholder="Masukkan nama" onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" /> */}

                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Masukkan email anda"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <br />

                        <label htmlFor="password">
                            Password
                        </label>
                        <input className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            type="password"
                            name="password"
                            placeholder="Masukkan password"
                            onChange={handleChange}
                        />
                        <br />

                        <button className="order mt-4 w-20 px-4 py-2 rounded-lg border-2 border-blue-500">
                            Login
                        </button>
                    </form>
                </div>

            </div >
        </>
    );
}
export default Login