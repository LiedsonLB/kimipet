import Image from "next/image";

interface Recomendation {
    picture: string;
    title: string;
    description: string;
    phone: string;
    address: string;
    status: string;
    url: string;
}

interface RecomendationsOptionsProps {
    data: Recomendation[];
}

export default function RecomendationsOptions({ data }: RecomendationsOptionsProps) {
    return (
        <div className="flex flex-row" style={{ gap: '1.5rem', width: '100%', height: 'auto', overflowX: 'auto', paddingBottom: '1.5rem' }}>
            {data.map((item, index) => (
                <a href={item.url}>
                    <div className="flex flex-col card" style={{ position: 'relative', width: '330px', height: '330px', minWidth: '330px', minHeight: '330px', boxShadow: '1px 1px 8px rgb(92, 90, 90)', borderRadius: '1rem', overflow: 'hidden' }}>
                        <div key={index} className="text-purple-dark filter-btn justify-center flex gap-3 font-montserrat font-bold pointer-events-none" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: '2', border: '2px solid', backgroundColor: 'rgba(255, 255, 255, 0.5)', width: 'auto', borderRadius: '.7rem' }}><p>{item.status}</p></div>
                        <div className="container-img" style={{ height: '80%' }}>
                            <Image
                                src={item.picture}
                                style={{ minHeight: '100%' }}
                                layout="fill"
                                objectFit="cover"
                                alt="img"
                            />
                        </div>
                        <div className="font-montserrat overlay bg-white" style={{ overflow: 'hidden', padding: '15px 15px', zIndex: 2 }}>
                            <div className="flex flex-col gap-3" style={{ paddingBlock: '.5rem' }}>
                                <h2 className=" text-purple-dark font-bold">{item.title}</h2>
                                <label className="text-purple font-medium" style={{ marginBottom: '0rem', maxWidth: '270px', overflow: 'hidden', display: 'inline-block', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.description}</label>
                            </div>

                            <div style={{ fontSize: '.8rem', fontWeight: '600' }}>
                                <p>{item.phone}</p>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}