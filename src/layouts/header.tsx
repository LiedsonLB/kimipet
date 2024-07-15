import Image from "next/image";
import logo from "/public/img/logo-kimipet-text-orange.png"

export default function Header() {
  return (
    <div className="bg-white-light text-orange flex justify-between items-center px-6 md-lg:px-12 py-4">
      <a href="/">
        <Image
          src={logo}
          alt="Picture of the author"
        />
      </a>
      <nav className="font-montserrat text-orange text-lg list-none gap-10 hidden md-lg:flex" style={{ fontWeight: '600' }}>
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

      {/* Button user desktop */}
      <button className="hidden md-lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
      </button>

      {/* Button menu mobile */}
      <button className="block md-lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
    </div>
  );
}