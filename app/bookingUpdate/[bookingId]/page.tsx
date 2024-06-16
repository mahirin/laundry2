"use client"
import { useParams } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

//endpoint booking detail
const base_url_detail = 'https://apilaundry.pexiaproperty.com/laundry_service/booking_detail'

//endpoint update booking
const base_url = 'https://apilaundry.pexiaproperty.com/laundry_service/save_edit_booking'

interface Bookingdata {
    id: number
    name: string
    phone: string
    order: string
}

const Bookingupdate = () => {
    //inisialisasi parameter
    const params = useParams()
    //deklarasi variable id (parameter)
    const bookingId = params.bookingId

    const [bookingDetail, setBookingDetail] = useState<Bookingdata | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [submitSuccess, setSubmitSuccess] = useState<Boolean>(false)

    
    const [formData, setFormData] = useState<Bookingdata>({
        id: bookingDetail?.id || 0,
        name: bookingDetail?.name || '',
        phone: bookingDetail?.phone || '',
        order: bookingDetail?.order || '',
    })

    useEffect(() => {
        if (bookingDetail) {
            setFormData({
                id: bookingDetail.id,
                name: bookingDetail.name,
                phone: bookingDetail.phone,
                order: bookingDetail.order,
            })
        }
    }, [bookingDetail])

    //handle change from input form
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${base_url}/${bookingId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
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


    useEffect(() => {
        const fetchBooking = async () => {
            //block try
            try {
                const response = await fetch(`${base_url_detail}/${bookingId}`)
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`)
                }
                const data: Bookingdata = await response.json()
                setBookingDetail(data)
                setLoading(false)
            }
            catch (error) {
                console.error('Gagal Mengambil Data')
            }
        }
        fetchBooking()
    }, [bookingId])

    if (loading) {
        return (
            <>
                {/* <Navbar /> */}
                <h1 className="bg-red-400">Booking Detail</h1>
                <p>Loading...</p>
                {/* <Banner /> */}
            </>
        )
    }

    if (submitSuccess) {
        return (
            <>
                <h1>Data Berhasil</h1>
            </>
        )
    }

    if (!bookingDetail) {
        return (
            <>
                <h1>Data tidak tersedia</h1>
            </>
        )
    }
    return (
        <>
            {/* <Navbar /> */}
            <h1 className="bg-red-400 text-2xl font-bold">Booking Form Edit</h1>
            <div className="">
                <div className="max-w-lg mx-auto p-8 shadow-md rounded-lg">
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="name">Nama</label>
                        <input type="text" name="name" placeholder="Masukkan nama" onChange={handleChange} value={formData.name} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />

                        <label htmlFor="phone">No. Whatsapp</label>
                        <input type="number" name="phone" placeholder="Masukkan nomor whatsapp" onChange={handleChange} value={formData.phone} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" /><br />

                        <label htmlFor="order">Order</label>
                        <input type="text" name="order" placeholder="Masukkan orderan" onChange={handleChange} value={formData.order} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" /><br />

                        <button className="order mt-4 w-20 px-4 py-2 rounded-lg border-2 border-blue-500">
                            Order
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Bookingupdate