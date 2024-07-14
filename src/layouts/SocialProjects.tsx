import Carousel from "@/components/Carousel";

export default function SocialProjects() {
    return (
        <div className="flex flex-col gap-12 p-8 md-lg:p-20 bg-purple-light rounded-xl relative mx-auto overflow-hidden" style={{maxHeight: 'auto', maxWidth: '90%'}}>
            <h1 className="text-4xl text-purple-dark mb-1 font-bold">Projetos Sociais</h1>
            <div className="max-w-lg">
                <div className="text-black font-medium mb-8">
                    <p className="mb-2">Acreditamos que cada pet merece cuidados da mais alta qualidade, e cada proprietário de pet merece acesso transparente e fácil às informações essenciais sobre seus companheiros peludos.</p>
                    <p>Somos uma plataforma revolucionária que busca empoderar os donos de pets, oferecendo um local seguro e conveniente para armazenar e acessar dados importantes de seus animais de estimação</p>
                </div>
                <button className="bg-purple rounded-full py-3 px-8 flex items-center justify-center gap-3 text-white text-xl font-semibold border-2 border-purple-dark hover:bg-opacity-80 transition">
                    vem ajudar!
                </button>
            </div>
            <div className="relative md-lg:absolute h-auto w-full pointer-events-none transform rotate-[330deg] md-lg:-translate-x-[-40%] md-lg:-translate-y-[-7rem]">
                <Carousel />
            </div>
        </div>
    );
}
