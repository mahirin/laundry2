"use client"
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// import fontawesome icon config
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
// end of import fontawesome icon config


interface Review {
    author_name: string
    profile_photo_url: string
    text: string
    rating: number
}

const Testimonial: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        // Mengambil data review saat komponen dimount
        const fetchReviews = async () => {
            const response = await fetch('/data/reviews.json')
            const data = await response.json()
            setReviews(data)
        }

        fetchReviews()

        // Memulai autoplay saat komponen dimount
        startAutoPlay()

        // Membersihkan interval saat komponen unmount
        return () => {
            stopAutoPlay()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // Mereset autoplay saat currentIndex berubah
        resetAutoPlay()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex])

    // Mengelompokkan review menjadi beberapa grup
    const groupedReviews = []
    for (let i = 0; i < reviews.length; i += 4) {
        groupedReviews.push(reviews.slice(i, i + 4))
    }

    // Fungsi untuk navigasi ke slide sebelumnya
    const prevSlide = () => {
        const newIndex =
            currentIndex === 0 ? groupedReviews.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    // Fungsi untuk navigasi ke slide selanjutnya
    const nextSlide = () => {
        const newIndex =
            currentIndex === groupedReviews.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // Fungsi untuk memulai autoplay slider
    const startAutoPlay = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                const newIndex =
                    currentIndex === groupedReviews.length - 1 ? 0 : currentIndex + 1
                setCurrentIndex(newIndex)
            }, 5000) // Setiap 6 detik
        }
    }

    // Fungsi untuk menghentikan autoplay slider
    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    // Fungsi untuk mereset autoplay slider
    const resetAutoPlay = () => {
        stopAutoPlay()
        startAutoPlay()
    }

    // Menampilkan pesan loading jika data belum dimuat
    if (reviews.length === 0) {
        return <div>Loading...</div>
    }

    // Menampilkan slider dengan review
    return (
        <div
            className="relative w-full overflow-hidden"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
        >
            <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {groupedReviews.map((group, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 flex justify-around p-4"
                    >
                        {group.map((review, subIndex) => (
                            <div
                                key={subIndex}
                                className="bg-white p-6 rounded-lg shadow-lg w-1/4 mx-2"
                            >
                                <div className="flex items-center mb-4">
                                    <Image
                                        src={review.profile_photo_url}
                                        alt={review.author_name}
                                        width={48}
                                        height={48}
                                        className="rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold">{review.author_name}</h3>
                                        <p className="text-sm">{review.rating} stars</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">{review.text}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/* Tombol navigasi ke slide sebelumnya */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 p-2"
            >
                <FontAwesomeIcon icon={faChevronLeft} size="2x" className="hover:text-black hover:size-9" />
            </button>
            {/* Tombol navigasi ke slide selanjutnya */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 p-2"
            >
                <FontAwesomeIcon icon={faChevronRight} size="2x" className="hover:text-black hover:size-9" />
            </button>
        </div>
    )
}

export default Testimonial