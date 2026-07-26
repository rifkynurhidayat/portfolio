import { useState } from 'react'
import './App.css'
import foto from './assets/hero/foto.jpg'
import tools from './assets/tools.js'
import project from './assets/project.js'

function App() {
    return (
        <>
            <div className="hero min-h-screen flex items-center animate__animated animate__fadeInLeft" id='beranda'>
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                        {/* Kiri */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center gap-3 mb-6 bg-zinc-700 w-fit mx-auto md:mx-0 p-4 rounded-2xl">
                                <img
                                    src={foto}
                                    alt="Hero"
                                    className="w-10 h-10 rounded-md object-cover"
                                />
                                <q>Fullstack Web Developer</q>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Hi, Saya <span className="text-violet-500">Rifky Nurhidayat</span>
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a
                                    href="#"
                                    className="bg-violet-700 px-6 py-3 rounded-xl hover:bg-violet-500 transition"
                                >
                                    Download CV
                                    <i className="ri-download-line ml-2"></i>
                                </a>

                                <a
                                    href="#project"
                                    className="bg-zinc-700 px-6 py-3 rounded-xl hover:bg-zinc-600 transition"
                                >
                                    Lihat Project
                                    <i className="ri-arrow-down-line ml-2"></i>
                                </a>
                            </div>
                        </div>

                        {/* Kanan */}
                        <div className="flex justify-center md:justify-end">
                            <img
                                src={foto}
                                alt="Hero" className="w-64 sm:w-80 md:w-96 lg:w-112.5 rounded-2xl object-cover"
                            />
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">{project.map((ListProject) =>

                        <div key={ListProject.id} className="bg-violet-500 p-4 rounded-2xl" data-aos="flip-up"  data-aos-duration="1000">
                            <img src={ListProject.logo} className='rounded-4xl' alt="" />
                            <h1 className='text-center mt-4 text-2xl font-bold'>{ListProject.name}</h1>
                            <p className='mt-2 font-bold'>Tech Stack :
                                {ListProject.tech.map((item) =>
                                    <span key={item} className='bg-zinc-600 rounded m-1'>{item}</span>
                                )}
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
