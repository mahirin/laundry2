
import Navbar from "../components/Navbar";
import AllServices from "../components/Services/AllServices";

const base_url = "https://jsonplaceholder.typicode.com/posts"; //endpoint

interface Dataposts {
    id: number,
    name: string,
    icon: string,
    price: number,
    description: string
}
const Home = async () => {
  const response = await fetch(base_url);
  const posts: Dataposts[] = await response.json();

  // }

  // export default function Home() {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <AllServices />
      </div>
    
      

    </div>
  );
}
export default Home