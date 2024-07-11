import ExperenceComents from "@/services/ExperenceComents";
import { useEffect, useState } from "react";

export default function AboutUs() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/comments');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div className="flex flex-col items-center md-lg:flex-row gap-12 py-10 md-lg:justify-around" style={{ maxWidth: '90%', margin: '0 auto' }}>
            <div style={{ maxWidth: '700px' }}>
                <h1 className="text-orange font-poppins" style={{ fontWeight: '800', letterSpacing: '1px', fontSize: '2rem' }}>Conectando pets, donos e cuidados de forma inovadora</h1>
                <br />
                <br />
                <div className="text-brown font-montserrat font-medium">
                    <p className="mb-2">Acreditamos que cada pet merece cuidados da mais alta qualidade, e cada proprietário
                        de pet merece acesso transparente e fácil às informações essenciais sobre seus
                        companheiros peludos.</p>
                    <p>Somos uma plataforma revolucionária que busca empoderar os donos de pets,
                        oferecendo um local seguro e conveniente para armazenar e acessar dados importantes
                        de seus animais de estimação</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 bg-purple-light p-6 rounded-2xl" style={{ height: '400px', maxWidth: '400px', minWidth: '40%' }}>
                <h1 className="text-purple-dark text-2xl font-bold text-center" style={{ maxWidth: '80%', margin: '0 auto' }}>Experiências de deixar o rabo abanando!</h1>
                <ExperenceComents data={data} />
            </div>
        </div>
    )
}