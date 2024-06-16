'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const base_url = "https://apilaundry.pexiaproperty.com/api/order"; //endpoint

interface Dataorder {
    id: number,
    tanggal: string,
    no_transaksi: number,
    total_bayar: number,
    status_bayar: string,
    status_order: string
}

const Order = () => {
    const [orderData, setOrderData] = useState<Dataorder[]>([]);
    // const [memberID, setmemberID] = useState("")
    const membershipID = localStorage.getItem('ID')

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await fetch(base_url);
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                const data: Dataorder[] = await response.json();
                setOrderData(data);
            }
            catch (error) {
                console.error(`Error fetching data:`, error);
            }
        }
        fetchOrderData()
    }, []);

    return (
        <div>
            <div className="">
                <Navbar />

                <div className="bg-slate-50 px-10 py-20 flex">
                    <Sidebar />

                    <div className=" bg-white ml-10 p-4 h-30 w-3/4 rounded-lg">
                        <h1 className="font-bold text-black text-xl">Order History</h1>
                        <table className="table-auto border-collapse border border-slate-400">
                            <thead>
                                <tr>
                                    <th className="border border-slate-300 p-4">Nomor Transaksi</th>
                                    <th className="border border-slate-300 p-4">Tanggal Transaksi</th>
                                    <th className="border border-slate-300 p-4">Total Pembayaran</th>
                                    <th className="border border-slate-300 p-4">Status Pembayaran</th>
                                    <th className="border border-slate-300 p-4">Status Pesanan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderData.map((order) => {
                                    return (
                                        <tr key={order.id} className="border border-slate-300">
                                            <td className="border border-slate-300 p-2">{order.no_transaksi}</td>
                                            <td className="border border-slate-300 p-2">{order.tanggal}</td>
                                            <td className="border border-slate-300 p-2">
                                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: "IDR" }).format(order.total_bayar)}
                                            </td>
                                            <td className="border border-slate-300 p-2">{order.status_bayar}</td>
                                            <td className="border border-slate-300 p-2 text-center">
                                                {order.status_order == "selesai" &&
                                                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{order.status_order}</span>
                                                }
                                                {order.status_order == "proses" &&
                                                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">{order.status_order}</span>
                                                }

                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Order