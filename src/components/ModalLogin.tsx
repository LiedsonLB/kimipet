import Image from "next/image";
import Link from "next/link";

interface ModalLoginProps {
    onClose: () => void;
}

export default function ModalLogin({ onClose } : ModalLoginProps) {
    return (
        <div onClick={onClose} className="absolute top-[5rem] right-8 bg-white-light p-8 rounded-2xl z-10 font-poppins text-gray font-[500] text-center flex flex-col" style={{ boxShadow: '1px 1px 8px rgb(92, 90, 90)' }}>
            <Image
                style={{ margin: '0 auto' }}
                src="/img/logo-kimipet.png"
                alt="Logo Kimipet"
                height={90}
                width={90}
            />
            <div className="flex flex-col gap-4">
                <p>Já tem uma conta?</p>
                <Link href="/auth/login">
                    <button className="bg-orange rounded-full py-1 px-8 flex items-center justify-center gap-3 text-white text-[1rem] font-[500] border-2 border-[#fead17] hover:bg-opacity-80 transition w-full">Entrar</button>
                </Link>

                <p>Ainda não é cadastrado?</p>
                <Link href="/auth/cadaster">
                    <button className="bg-purple rounded-full py-1 px-8 flex items-center justify-center gap-3 text-white text-[1rem] font-[500] border-2 border-[#a133a1] hover:bg-opacity-80 transition w-full">Cadastrar</button>
                </Link>

                <p>Empresa parceira? <span className="text-cyan-500 hover:underline"><Link href="/auth/login">Clique aqui.</Link></span></p>
            </div>
        </div>
    )
}