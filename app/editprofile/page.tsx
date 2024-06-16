'use client'
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const base_url = "https://apilaundry.pexiaproperty.com/api/profile"; //endpoint

interface Datamembership {
    id: number,
    name: string,
    phone_number: string,
    email: string
}

const Editprofile = () => {
    const [membership, setMembership] = useState<Datamembership | null>(null)
    const membershipID = localStorage.getItem('ID')
    const [submitSuccess, setSubmitSuccess] = useState<Boolean>(false)


    const [profileData, setProfileData] = useState<Datamembership>({
        id: membership?.id || 0,
        name: membership?.name || '',
        phone_number: membership?.phone_number || '',
        email: membership?.email || ''
    })
    // const userId = localStorage.getItem('ID')

    // lempar data ke profileData
    useEffect(() => {
        if (membership) {
            setProfileData({
                id: membership.id,
                name: membership.name,
                phone_number: membership.phone_number,
                email: membership.email,
            })
        }
    }, [membership])

    useEffect(() => {
        const fetchMembership = async () => {
            try {
                const response = await fetch(`${base_url}/${membershipID}`);
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${base_url}/${membershipID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData)
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



    return (
        <div>
            <div className="">
                <Navbar />

                <div className="bg-slate-50 px-10 py-20 flex">
                    <Sidebar />

                    <div className="profile bg-white ml-10 p-4 h-30 w-2/4 rounded-lg">
                        {submitSuccess && (
                            <h1 className="text-green-500 text-xl">Data Berhasil Diubah</h1>
                        )}

                        <h1 className="font-bold text-black text-xl">Edit Profile</h1>
                        {/* <div className="grid grid-cols-4 "> */}
                        <div className="profilepicture m-3 place-content-center">
                            <button className="rounded-full bg-red-50 w-28 h-28"></button>
                        </div>
                        {/* <div className="editprofilepicture place-content-center">
                                <button className="rounded-lg bg-white w-28 h-8 outline outline-offset-0 outline-black text-sm font-bold text-black">Change</button><br />
                                <button className="rounded-lg bg-white w-28 h-8 outline outline-offset-0 outline-black text-sm font-bold text-black mt-2">Remove</button>
                            </div> */}
                        {/* </div> */}
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2">
                                <div className="left ml-4">
                                    <h1 className="text-sm font-bold text-black mb-1.5">First Name</h1>
                                    {/* <h6 className="text-xs text-black mb-3">Maggie</h6> */}
                                    <input type="text" className="border border-black px-2 py-1 rounded-lg mt-1 mb-2" name="name" onChange={handleChange} value={profileData.name} />
                                    <h1 className="text-sm font-bold text-black mb-1.5">Email</h1>
                                    {/* <h6 className="text-xs text-black mb-3">Zeta</h6> */}
                                    <input type="text" className="border border-black px-2 py-1 rounded-lg mt-1 mb-2" name="email" onChange={handleChange} value={profileData.email} />
                                    <h1 className="text-sm font-bold text-black mb-1.5">Phone Number</h1>
                                    {/* <h6 className="text-xs text-black">Express</h6> */}
                                    <input type="text" className="border border-black px-2 py-1 rounded-lg mt-1 mb-2" name="phone_number" onChange={handleChange} value={profileData.phone_number} />
                                </div>
                                <div className="right">
                                    <h1 className="text-sm font-bold text-black mb-1.5">Location</h1>
                                    {/* <h6 className="text-xs text-black mb-3">Depok</h6> */}
                                    <input type="text" className="border border-black px-2 py-1 rounded-lg mt-1 mb-2" />
                                    <h1 className="text-sm font-bold text-black mb-1.5">Lorem Ipsum</h1>
                                    {/* <h6 className="text-xs text-black mb-3">Lorem Ipsum</h6> */}
                                    <input type="text" className="border border-black px-2 py-1 rounded-lg mt-1 mb-2" />
                                    <h1 className="text-sm font-bold text-black mb-1.5">Lorem Ipsum</h1>
                                    {/* <h6 className="text-xs text-black">Lorem Ipsum</h6> */}
                                    <input type="text" className="border border-black px-2 py-1 rounded-lg mt-1 mb-2" />
                                </div>
                            </div>
                            <div className="editprofile place-content-center float-right mt-5 inline-grid gap-4 grid-cols-2">
                                <button className="rounded-lg bg-white w-28 h-8 outline outline-offset-0 outline-black text-sm font-bold text-black">Cancel</button>
                                <button className="rounded-lg bg-white w-28 h-8 outline outline-offset-0 outline-black text-sm font-bold text-black">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Editprofile