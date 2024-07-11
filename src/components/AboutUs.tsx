import ExperenceComents from "@/services/ExperenceComents";

export default function AboutUs() {
    return (
        <div className="flex gap-10" style={{maxWidth: '90%', margin: '0 auto'}}>
            <div>
                <h1>Conectando pets, donos e cuidados de forma inovadora</h1>
                <p>Acreditamos que cada pet merece cuidados da mais alta qualidade, e cada proprietário
                    de pet merece acesso transparente e fácil às informações essenciais sobre seus
                    companheiros peludos.</p>
                <br />
                <p>Somos uma plataforma revolucionária que busca empoderar os donos de pets,
                    oferecendo um local seguro e conveniente para armazenar e acessar dados importantes
                    de seus animais de estimação</p>
            </div>
            <div>
                <h1>Experiências de deixar o rabo abanando!</h1>
                <ExperenceComents />
            </div>
        </div>
    )
}