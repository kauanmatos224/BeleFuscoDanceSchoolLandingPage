import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <header className="bg-white w-full border-t-[1px] border-b-[1px] border-[#FFD854] h-12 sm:h-16">
      <div className="flex items-center justify-between h-full w-full px-4 sm:px-6 lg:px-8 bg-black">

        {/* Logo com alinhamento à esquerda e redimensionamento responsivo */}


        {/* Menu de navegação centralizado */}
        <nav aria-label="Global" className="hidden md:block w-full flex justify-center">
          <ul
            className="flex items-center gap-8 font-bold text-[16px] text-white justify-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <li>
              <a>
                <div className="flex justify-center items-center w-auto rounded-md sm:rounded-none">
                  <Image
                    src='/png_holos.png'
                    alt='Logo'
                    width={50}  // Tamanho do logo no default
                    height={60}  // Tamanho do logo no default
                    className="rounded-md sm:rounded-none" // Logo com bordas arredondadas
                    sizes="(max-width: 640px) 40px, 50px" // Ajuste de tamanho dependendo da largura da tela
                  />
                </div>
              </a>
            </li>
            
            <li>
              <a
                className="transition text-white hover:text-[#FFD854] p-1 hover:border-[0.5px] hover:border-[#FFD854] hover:rounded-none"
                href="#"
              >
                Quem somos
              </a>
            </li>

      

            <li>
              <a
                className="transition text-white hover:text-[#FFD854] p-1 hover:border-[0.5px] hover:border-[#FFD854] hover:rounded-none"
                href="#"
              >
                Professores
              </a>
            </li>

            <li>
              <a
                className="transition text-white hover:text-[#FFD854] p-1 hover:border-[0.5px] hover:border-[#FFD854] hover:rounded-none"
                href="#"
              >
                Matrícula e planos
              </a>
            </li>

            <li>
              <a
                className="transition text-white hover:text-[#FFD854] p-1 hover:border-[0.5px] hover:border-[#FFD854] hover:rounded-none"
                href="#"
              >
                Horários e Modalidades
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão de menu para dispositivos móveis */}
        <div className="block md:hidden">
          <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
