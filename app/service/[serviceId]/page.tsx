"use client"
import Navbar from "../../components/Navbar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const base_url = "https://apilaundry.pexiaproperty.com/laundry_service/detail"; //endpoint

interface Dataservices {
  id: number,
  name: string,
  icon: string,
  price: number,
  description: string
}
const ServiceDetail = () => {
  const params = useParams();
  const id = params.serviceId;
  const [selectedServices, setSelectedService] = useState<Dataservices | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`${base_url}/${id}`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status : ${response.status}`);
        }
        const data: Dataservices = await response.json();
        setSelectedService(data);
        setLoading(false)
      }
      catch (error) {
        console.error('Error fetching data :', error);
      }
    }
    fetchService();
  }, [id])

  if (loading) {
    return (
      <div>
        <div className="relative">
          <Navbar />
          <p>Loading...</p>
        </div>
      </div>
    )

  }

  if (!selectedServices) {
    return (
      <div>
        <div className="relative">
          <Navbar />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative">
        <Navbar />
        <p>{selectedServices.name}</p>
      </div>
    </div>
  );
}
export default ServiceDetail