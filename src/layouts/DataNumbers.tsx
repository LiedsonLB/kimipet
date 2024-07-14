import AnimatedNumber from "@/components/AnimatedNumber";
import { useEffect, useState } from "react";

interface DataNumber {
    total: number;
    description: string;
}

export default function DataNumbers() {
    const [data, setData] = useState<DataNumber[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/datanumbers');
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
    }, []);

    return (
        <div className="flex flex-row justify-center items-center py-20 gap-40 text-center m-auto w-[70%] font-montserrat">
            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="bg-orange relative h-[20px] w-2/5 flex justify-center mb-4 rounded-lg">
                        <div style={{ textShadow: '1px 3px 3px rgba(0, 0, 0, 0.6)', top: '-100%' }} className="text-3xl font-medium text-black absolute">
                            <AnimatedNumber value={item.total} />
                        </div>
                    </div>
                    <p className="text-blue font-semibold">{item.description}</p>
                </div>
            ))}
        </div>
    );
}