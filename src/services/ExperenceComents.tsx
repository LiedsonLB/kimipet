import Image from "next/image";

// Interface para os coments
interface Comment {
    picture: string;
    name: string;
    comment: string;
    local: string;
}

interface ExperienceCommentsProps {
    data: Comment[];
}

export default function ExperienceComments({ data }: ExperienceCommentsProps) {
    return (
        <div className="flex flex-col gap-3" style={{ maxHeight: '16rem', overflow: 'auto' }}>
            {data.map((item, index) => (
                <section className="flex flex-col p-6 gap-4 bg-white rounded-2xl" key={index}>
                    <div className="flex flex-row font-montserrat font-medium text-purple" style={{fontSize: '1.25rem'}}>
                        <div style={{ position: 'relative', width: '60px', height: '60px', marginRight: '12px'}}>
                            <Image
                                style={{ borderRadius: '100px', border: '3px solid #660d8c'}}
                                src={item.picture}
                                layout="fill"
                                objectFit="cover"
                                alt={item.name}
                            />
                        </div>
                        <p style={{maxWidth: 'calc(100% - 100px)', minHeight: '50px', display: 'flex', alignItems: 'center', overflowX: 'auto'}}>{item.comment}</p>
                    </div>
                    <div className="flex flex-row justify-between font-montserrat" style={{width: '100%', maxWidth: '100%', marginTop: '1rem', color: '#303030'}}>
                        <p className="font-medium bold" style={{fontWeight: '500'}}>{item.name}</p>
                        <p>{item.local}</p>
                    </div>
                </section>
            ))}
        </div>
    )
}