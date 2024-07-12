import RecomendationsOptions from "@/services/RecomendationsOptions";
import { useEffect, useState } from "react";

export default function Recomendations() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/recomendations');
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

    return(
        <div className="flex flex-col gap-12 py-10" style={{ maxWidth: '90%', margin: '0 auto' }}>
            <h1 className="text-4xl text-purple" style={{fontWeight: '700'}}>Recomendações da Kimitpet</h1>
            <RecomendationsOptions data={data}/>
        </div>
    )
}