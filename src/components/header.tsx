import Image from "next/image";
import logo from "/public/img/logo-kimipet-text-orange.png"

export default function Header() {
  return (
    <div className="bg-white-light text-orange flex justify-between items-center px-12 py-4">
      <Image
        src={logo}
        alt="Picture of the author"
      />
      <nav className="font-montserrat text-orange text-lg flex list-none gap-10" style={{fontWeight: '600'}}>
        <li className="hover:border-b-4 hover:border-purple border-b-4 border-transparent cursor-pointer py-1">
          <a>Home</a>
        </li>
        <li className="hover:border-b-4 hover:border-purple border-b-4 border-transparent cursor-pointer py-1">
          <a>Busca</a>
        </li>
        <li className="hover:border-b-4 hover:border-purple border-b-4 border-transparent cursor-pointer py-1">
          <a>Loja</a>
        </li>
        <li className="hover:border-b-4 hover:border-purple border-b-4 border-transparent cursor-pointer py-1">
          <a>Blog</a>
        </li>
        <li className="hover:border-b-4 hover:border-purple border-b-4 border-transparent cursor-pointer py-1">
          <a>Ações Sociais</a>
        </li>
      </nav>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
      </button>
    </div>
  );
}