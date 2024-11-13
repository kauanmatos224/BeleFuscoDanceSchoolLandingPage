// app/_components/Hero.js
"use client"; // Indica que este é um componente do lado do cliente

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importando os estilos do Swiper
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const slides = [
  { src: '/img1.jpeg', alt: 'Ballet Clássico' },
  { src: '/img2.jpeg', alt: 'Street Dance' },
  { src: '/img3.jpeg', alt: 'Dança do Ventre' },
];

const Hero = () => {
  return (
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 bg-gray-100">
          <div className="max-w-md mb-6 lg:mb-0">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Descubra o Melhor do Nosso Serviço
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                  Transforme sua experiência com nossa solução inovadora.
              </p>
              <a href="#contato" className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                  Saiba Mais
              </a>
          </div>
          <div className="w-full lg:w-1/2">
              <Image
                  src="/sua-imagem.jpg" // substitua pelo caminho da sua imagem
                  alt="Imagem do serviço"
                  layout="responsive"
                  width={500} // largura original da imagem
                  height={400} // altura original da imagem
                  className="rounded-lg shadow-lg"
              />
          </div>
      </section>
  );
};

export default Hero;