import Image from 'next/image'
import React from 'react'

function Header() {
  return (
<header className="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 bg-black">
  <Image src='/logo.svg' alt='svg'
        width={80} height={100}/>
    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
          <a className="text-white transition hover:text-[#FFD854]" href="#"> About </a>
          </li>

          <li>
          <a className="text-white transition hover:text-[#FFD854]" href="#"> Careers </a>
          </li>

          <li>
          <a className="text-white transition hover:text-[#FFD854]" href="#"> History </a>
          </li>

          <li>
          <a className="text-white transition hover:text-[#FFD854]" href="#"> Services </a>
          </li>

          <li>
          <a className="text-white transition hover:text-[#FFD854]" href="#"> Projects </a>
          </li>

          <li>
          <a className="text-white transition hover:text-[#FFD854]" href="#"> Blog </a>
          </li>
        </ul>
      </nav>
      
      <div className="flex items-center gap-4">
        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
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
  </div>
</header>
  )
}

export default Header


