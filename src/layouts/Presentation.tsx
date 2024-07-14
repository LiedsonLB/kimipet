import SearchContainer from "@/components/SearchContainer";

export default function Presentation() {
    return (
        <div className="flex justify-center items-center apresention-background min-h-[35rem] md-lg:min-h-[400px]">
            <div className="font-montserrat max-w- px-1 md-lg:px-6 text-center text-white-light flex flex-col gap-5" style={{fontSize: '1.5rem', transform: 'translateY(-1rem)'}}>
                <p>Bem vindo a Kimipet</p>
                <h1 className="text-[2.5rem] md-lg:text-[3.5rem] font-[700] tracking-[1px] md-lg:tracking-[3px]">Amar. Cuidar. Proteger</h1>
                <p>Estamos produzindo uma solução prática e eficaz para você cuidar do seu bichinho com tudo que ele merece</p>
            </div>
            <SearchContainer />
        </div>
    )
}