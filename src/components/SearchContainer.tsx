export default function SearchContainer() {
    return (
        <div className="absolute flex flex-col gap-3 bg-white px-6 py-8 shadow-container font-montserrat search-container">
            <div className="flex gap-3">
                <button className="text-purple filter-btn">Clinicas</button>
                <button className="text-purple filter-btn">Petshops</button>
                <button className="text-purple filter-btn">Hospedagem</button>
                <button className="text-white-light bg-red border-red filter-btn">Emergência</button>
            </div>
            <div>
                <div className="flex row-auto gap-3">
                    <div className="input-group min">
                        <input
                            type="text"
                            name="text"
                            className="input-search"
                            placeholder=" "
                        />
                        <label htmlFor="text" className="user-label w-100">
                            Buscar estabelecimento
                        </label>
                    </div>
                    <button className="bg-purple rounded-xl py-1 flex items-center justify-center gap-3 px-4 text-white" style={{ width: 'auto', fontWeight: '700'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
}