import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Importando os ícones do react-icons

const Hero = () => {
    return (
        <section className="relative pt-16">
            {/* Vídeo de fundo */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="/video_hero.mp4" // Certifique-se de que o arquivo de vídeo está na pasta "public"
                    type="video/mp4"
                />
            </video>

            {/* Sobreposição de fundo escura */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Conteúdo principal */}
            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen lg:items-start lg:px-8">
                <div className="flex flex-col items-center justify-start w-full text-center">
                    {/* Logo */}
                    <img
                        src="/11.png"  // Certifique-se de que o caminho da imagem esteja correto
                        alt="Logo Bele Fusco"
                        className="mx-auto w-auto h-80 sm:h-96 md:h-[350px] lg:h-[400px]"
                    />

                    {/* Texto abaixo da imagem */}
                    <p className="max-w-lg text-white sm:text-xl">
                        Agende sua aula experimental e descubra a magia da dança na Bele Fusco Escola de Danças:
                    </p>
                    <div className="mt-8 flex gap-6 justify-center text-center">
                        {/* Botão do WhatsApp */}
                        <a
                            href="https://wa.me/1234567890" // Substitua pelo número correto
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center rounded-lg bg-[#128C7E] px-6 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:bg-[#25D366] transition duration-300 ease-in-out sm:px-8 sm:py-4 sm:text-xl"
                        >
                            {/* Ícone do WhatsApp */}
                            <FaWhatsapp size={24} className="mr-2 text-white" />
                            WhatsApp
                        </a>

                        {/* Botão do Instagram */}
                        <a
                            href="https://www.instagram.com/seuperfil" // Substitua pelo link correto do seu perfil
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center rounded-lg bg-[#7B2C86] px-6 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:bg-[#C13584] transition duration-300 ease-in-out sm:px-8 sm:py-4 sm:text-xl"
                        >
                            {/* Ícone do Instagram */}
                            <FaInstagram size={24} className="mr-2 text-white" />
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
