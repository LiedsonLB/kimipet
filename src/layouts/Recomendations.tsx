import RecomendationsOptions from "@/services/RecomendationsOptions";

export default function Recomendations() {
    return(
        <div className="flex flex-col gap-12 py-10" style={{ maxWidth: '90%', margin: '0 auto' }}>
            <h1 className="text-6xl">Recomendações da Kimitpet</h1>
            <RecomendationsOptions />
        </div>
    )
}