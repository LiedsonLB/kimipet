import SearchContainer from "@/components/SearchContainer";

export default function Presentation() {
    return (
        <div className="flex justify-center items-center apresention-background">
            <div className="font-montserrat max-w-5xl px-6 text-center text-white-light flex flex-col gap-5" style={{fontSize: '1.5rem', transform: 'translateY(-1rem)'}}>
                <p>Bem vindo a Kimipet</p>
                <h1 style={{fontSize: '3.5rem', fontWeight: '700', letterSpacing: '3px'}}>Amar. Cuidar. Proteger</h1>
                <p>Estamos produzindo uma solução prática e eficaz para você cuidar do seu bichinho com tudo que ele merece</p>
            </div>
            <SearchContainer />
        </div>
    )
}