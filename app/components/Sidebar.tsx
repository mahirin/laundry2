"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

const base_url = "https://apilaundry.pexiaproperty.com/api/sidebar";


interface Datamenu {
    id: number,
    name: string,
    url: string
}

const Sidebar = () => {
    const [menu, setMenu] = useState<Datamenu[]>([]);

    useEffect(() => {
        const Allmenu = async () => {
            try {
                const response = await fetch(base_url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const menu: Datamenu[] = await response.json();
                setMenu(menu);
            }
            catch (error) {
                console.error(`Error fetching data:`, error);
            }
        }
        Allmenu()
    }, []);

    return (
        <>
        
            <div className="flex w-64 bg-white rounded-lg">
                <ul className="flex flex-col p-5 pl-10 gap-5 text-lg font-semibold">
                  
                    {menu.map((left_menu) => {
                        return (
                            <Link key={left_menu.id} className="hover:bg-slate-50 py-3 px-4 w-96 rounded-2xl" href={left_menu.url}>{left_menu.name}</Link>
                        )

                    })}
                </ul>
            </div>


        </>
    )

}
export default Sidebar