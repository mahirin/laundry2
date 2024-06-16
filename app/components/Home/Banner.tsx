const Banner = () => {
    return (
        <>
            <div
                className="banner py-20 bg-red-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-40"
            >
                <div className="banner-text pl-16 pr-10">
                    <h1 className="font-bold text-left text-black text-5xl">Sobat Laundry</h1>
                    <p className="mt-7">
                        SOBAT LAUNDRY merupakan Bisnis Jasa laundry beralamat di Jl. Akses UI No. 6 Depan Mako Brimob Kelapa Dua Depok yang menangani pakaian kiloan dan satuan meliputi seragam, jas, long dress, kebaya, karpet, boneka, dan tas, dengan mengedepankan mutu dan waktu pekerjaan cepat dan harga ekonomis. Keistimewaan Sobat Laundry dibanding laundry - laundry lain adalah waktu pengerjaan yang sangat cepat, yakni laundry reguler selesai dalam 1 hari dengan harga sangat ekonomis. Di samping itu menggunakan Parfum Kualitas Grade Super yang tahan dalam packingan selama 1 bulan. Fasilitas lain dari Sobat Laundry adalah Gratis antar jemput laundryan konsumen. Kepuasan dan kepercayaan pelanggan merupakan syarat utama bagi kami dalam memberikan layanan laundry."
                    </p>
                    <button
                        className="w-80 bg-orange-400 text-white rounded-md py-2 mt-8 hover:bg-orange-600"
                    >
                        Sign Up for Free Pickup & Delivery
                    </button>
                </div>
                <div className="banner-image flex justify-center w-96 pb-32">
                    <img src="img/laundry1.png" alt="nothing" />
                </div>
            </div>

        </>
    )
}
export default Banner