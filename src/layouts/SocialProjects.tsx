import Carousel from "@/components/Carousel";

export default function SocialProjects() {
    return (
        <div className="flex flex-col gap-12 p-8 md-lg:p-20 bg-purple-light rounded-xl relative mx-auto overflow-hidden" style={{ maxHeight: 'auto', maxWidth: '90%' }}>
            <h1 className="text-4xl text-purple-dark mb-1 font-bold">Projetos Sociais</h1>
            <div className="max-w-[51rem]">
                <div className="text-black font-medium mb-8">
                    <p className="text-gray font-[500] font-montserrat">Junte-se a nós para cuidar do bem-estar dos pets! Conheça os projetos sociais que apoiamos e ajude-nos a fazer a diferença na vida dos nossos queridos animais de estimação. Sua participação é fundamental para garantir um futuro saudável e feliz para eles!</p>
                </div>
                <button className="bg-purple rounded-full py-4 px-6 flex items-center justify-center gap-3 text-white text-[1rem] font-[700] border-2 border-[#a133a1] hover:bg-opacity-80 transition font-montserrat">
                    Vem ajudar!
                </button>
            </div>
            <div className="relative md-lg:absolute h-auto w-full pointer-events-none transform rotate-[330deg] md-lg:-translate-x-[-40%] md-lg:-translate-y-[-7rem]">
                <Carousel />
            </div>
        </div>
    );
}
