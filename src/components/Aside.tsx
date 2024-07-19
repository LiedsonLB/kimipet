import Image from "next/image";
import logo from "/public/img/logo-kimipet-text-orange.png"
import ModalLogin from "./ModalLogin";
import { useState } from "react";

interface AsideProps {
    onClose: () => void;
}

export default function Aside({ onClose }: AsideProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUserButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-[100vw] h-[100vh] flex fixed z-10 md-lg:hidden">
            {isModalOpen && <ModalLogin onClose={handleCloseModal} />}
            <div className="w-[100%] aside-background"
                onClick={onClose}
            ></div>
            <div className=" flex flex-col justify-between w-[40rem] bg-white-light py-4">
                <div className='flex flex-col'>
                    <Image
                        className="p-4 mb-4"
                        src={logo}
                        alt="Picture of the author"
                    />
                    <nav className="font-montserrat text-orange text-lg list-none flex flex-col gap-4 px-4" style={{ fontWeight: '600' }}>
                        <li className="hover:text-purple border-transparent cursor-pointer py-1">
                            <a>Home</a>
                        </li>
                        <li className="hover:text-purple  border-transparent cursor-pointer py-1">
                            <a>Busca</a>
                        </li>
                        <li className="hover:text-purple  border-transparent cursor-pointer py-1">
                            <a>Loja</a>
                        </li>
                        <li className="hover:text-purple  border-transparent cursor-pointer py-1">
                            <a>Blog</a>
                        </li>
                        <li className="hover:text-purple  border-transparent cursor-pointer py-1">
                            <a>Ações Sociais</a>
                        </li>
                    </nav>
                </div>
                <div className="flex justify-start px-8">
                    <button onClick={handleUserButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='#ff8133' width="35" height="35" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}