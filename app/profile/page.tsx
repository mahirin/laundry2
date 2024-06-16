'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const base_url = "https://apilaundry.pexiaproperty.com/api/api/membership"; //endpoint

interface Datamembership {
    id: number,
    name: string
}

const Profile = () => {
    const [membership, setMembership] = useState<Datamembership | null>(null);
    const [memberID, setmemberID] = useState("")
    const membershipID = localStorage.getItem('ID')

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

    return (
        <div>
            <div className="">
                <Navbar />

                <div className="bg-slate-50 px-10 py-20 flex">
                    <Sidebar />

                    <div className="profile bg-white ml-10 p-4 h-30 w-2/4 rounded-lg">
                        <h1 className="font-bold text-black text-xl">Profile</h1>
                        <div className="grid grid-cols-4 ">
                            <div className="profilepicture m-3 place-content-center">
                                <button className="rounded-full bg-red-50 w-28 h-28"></button>
                            </div>
                            <div className="editprofilepicture place-content-center">
                                <button className="rounded-lg bg-white w-28 h-8 outline outline-offset-0 outline-black text-sm font-bold text-black">Change</button><br />
                                <button className="rounded-lg bg-white w-28 h-8 outline outline-offset-0 outline-black text-sm font-bold text-black mt-2">Remove</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="left ml-4">
                                <h1 className="text-sm font-bold text-black mb-1.5">First Name</h1>
                                <h6 className="text-xs text-black mb-3">Maggie</h6>
                                <h1 className="text-sm font-bold text-black mb-1.5">Last Name</h1>
                                <h6 className="text-xs text-black mb-3">Zeta</h6>
                                <h1 className="text-sm font-bold text-black mb-1.5">Current Order</h1>
                                <h6 className="text-xs text-black">Express</h6>
                            </div>
                            <div className="right">
                                <h1 className="text-sm font-bold text-black mb-1.5">Location</h1>
                                <h6 className="text-xs text-black mb-3">Depok</h6>
                                <h1 className="text-sm font-bold text-black mb-1.5">Lorem Ipsum</h1>
                                <h6 className="text-xs text-black mb-3">Lorem Ipsum</h6>
                                <h1 className="text-sm font-bold text-black mb-1.5">Lorem Ipsum</h1>
                                <h6 className="text-xs text-black">Lorem Ipsum</h6>
                            </div>
                        </div>
                        <div className="editprofile text-center mt-5">
                            <Link href={"editprofile"}><button className="rounded-lg bg-white w-64 h-8 outline outline-offset-0 outline-black text-sm font-bold text-black">Edit Profile</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}
export default Profile