import { useState } from 'react';
import { motion } from 'framer-motion';

import './App.css'
import foto from './assets/hero/foto.jpg'
import tools from './assets/tools.js'
import project from './assets/project.js'

const text = "Hi, Saya Rifky Nurhidayat."

function App() {
    return (
        <>
            <div
                className="hero min-h-screen flex items-center animate__animated animate__fadeInLeft"
                id="beranda" >
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                        {/* Hero Content */}
                        <div className="text-center md:text-left">

                            {/* Badge */}
                            <div className="flex items-center justify-center md:justify-start mb-6 md:mb-8">
                                <div className="flex items-center gap-3 bg-zinc-700 w-fit px-4 py-3 rounded-2xl text-sm sm:text-base">
                                    <q>Fullstack Web Developer</q>
                                </div>
                            </div>

                            {/* Heading */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                                {/* Hi, Saya */}
                                <span className="block md:inline">
                                    {"Hi, Saya".split("").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.05,
                                            }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </span>

                                {/* Rifky */}
                                <span className="block md:inline md:ml-3 text-violet-500">
                                    {"Rifky".split("").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: (index + 8) * 0.05,
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>

                                <span className="block md:inline md:ml-3 text-violet-500">
                                    {"Nurhidayat".split("").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: (index + 13) * 0.05,
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>

                            </h1>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                                <a
                                    href="#"
                                    className="bg-violet-700 px-5 sm:px-6 py-3 rounded-xl hover:bg-violet-500 transition text-center"
                                >
                                    Download CV
                                    <i className="ri-download-line ml-2"></i>
                                </a>

                                <a
                                    href="#project"
                                    className="bg-zinc-700 px-5 sm:px-6 py-3 rounded-xl hover:bg-zinc-600 transition text-center"
                                >
                                    Lihat Project
                                    <i className="ri-arrow-down-line ml-2"></i>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <section className='tools mt-32 flex items-center'>
                <div className='container mx-auto px-6 lg:px-12'>
                    <h1 className='text-2xl font-bold'>Tools Yang Dipakai</h1>
                    <p className='text-zinc-500 mt-6'>Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 ">
                        {tools.map((List) =>
                            <div key={List.id} className="
                                    flex items-center gap-4
                                    bg-zinc-900
                                    border border-zinc-700
                                    rounded-xl
                                    p-4
                                    hover:border-violet-500
                                    hover:-translate-y-1
                                    transition-all duration-300">

                                <div className="bg-zinc-800 p-3 rounded-lg" data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000"
                                >
                                    <img
                                        src={List.logo}
                                        alt={List.name}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                <div>
                                    <h2 className="font-semibold"> {List.name}</h2>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            <section className='project mt-32 flex items-center' id='project'>
                <div className='container mx-auto px-4 lg:px-12'>
                    <h1 className='text-2xl text-center font-bold '>Project</h1>
                    <p className='text-zinc-500 text-center mt-6'>Berikut beberapa project yang telah diselesaikan:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                        {project.map((ListProject) =>
                            <div key={ListProject.id} className="bg-violet-500 p-4 rounded-2xl" data-aos="flip-up" data-aos-duration="1000">
                                <img src={ListProject.logo} className='rounded-4xl' alt="" />
                                <h1 className='text-center mt-4 text-2xl font-bold'>{ListProject.name}</h1>
                                <p className='mt-2 font-bold'>Tech Stack :     </p>

                                <div className="flex flex-wrap gap-2">
                                    {ListProject.tech.map((item) =>
                                        <span key={item} className='bg-zinc-800 rounded m-1'>{item}</span>
                                    )}
                                </div>
                                <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-sm sm:text-base leading-7 sm:leading-8 font-light text-zinc-300 tracking-wide text-justify">
                                    {ListProject.description}
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            <section className="contact mt-20 py-12" id='kontak'>
                <div className="container mx-auto max-w-2xl px-4">
                    <h1 className="mb-8 text-center text-2xl font-bold md:text-3xl">
                        Kontak Saya
                    </h1>

                    <div className="flex flex-col items-center gap-6">

                        {/* Email */}
                        <a
                            href="mailto:rifkynurhidayat623@gmail.com"
                            className="flex items-center gap-3 rounded-lg bg-zinc-800 px-5 py-3 text-white transition hover:bg-zinc-700"
                        >
                            <i className="ri-mail-line text-2xl"></i>
                            <span className="text-sm md:text-base break-all">
                                rifkynurhidayat623@gmail.com
                            </span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/rifky-nurhidayat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-lg bg-zinc-800 px-5 py-3 text-white transition hover:bg-zinc-700"
                        >
                            <i className="ri-linkedin-box-fill text-2xl text-blue-500"></i>
                            <span className="text-sm md:text-base">
                                Rifky Nurhidayat
                            </span>
                        </a>

                    </div>
                </div>
            </section>

        </>
    );
}

export default App;
