'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/navigation";


const base_url = "https://apilaundry.pexiaproperty.com/api/membership"; //endpoint

interface Datamembership {
    id: number,
    name: string
}

const Account = () => {
    const [membership, setMembership] = useState<Datamembership | null>(null);
    const [memberID, setmemberID] = useState("")
    const membershipID = localStorage.getItem('ID')

		const Router = useRouter()

		useEffect(() => {
        const isLoggedIn = localStorage.getItem('ID');
        if (!isLoggedIn) {
            Router.push('/login')
        }
    })

    useEffect(() => {
        const fetchMembership = async () => {
            try {
                const response = await fetch(base_url);
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                const membership: Datamembership = await response.json();
                setMembership(membership);
            }
            catch (error) {
                console.error(`Error fetching data:`, error);
            }
        }
        fetchMembership()
    }, [membershipID]);

    // }

    // export default function Home() {
    return (
        // bikin komponen
        <div>
            <div className="">
                <Navbar />


                <div className="bg-slate-50 px-10 py-20 flex">
                    <Sidebar />
                    <div className="category absolute bottom-10 bg-white rounded-xl">

                    </div>

                    <h1 className="font-bold text-center text-black text-xl mt-8"></h1>

                    {membership && (
                        <div className="membership bg-slate-200 h-30 w-2/4 rounded-lg text-center text-5xl place-content-center">
                            {membership.name} <br />
                            <Link href={"/account"}><button className="w-24 h-9 bg-blue-200 text-lg rounded-2xl">Upgrade</button></Link>

                        </div>
                    )}


                    <div
                        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 px-10 py-10 text-center"
                    >





                    </div>


                </div>
            </div>
        </div>


    );
}
export default Account