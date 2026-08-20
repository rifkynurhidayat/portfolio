import React from "react";
 
import manage from './project/manage.png';
import tabulasi from './project/tabulasi.jpeg';
import marketplace from './project/marketplace.jpg';
import tokoOnline from './project/tokoOnline.jpg';

const project = [
    {
        id: 1,
        name: 'Manage Office',
        logo: manage,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel','AJAX', 'Mysql'],
        description: 'Aplikasi ini digunakan untuk mengelola data karyawan, data jabatan, data divisi, dan data cuti karyawan. Aplikasi ini juga memiliki fitur untuk mengelola data cuti karyawan, termasuk pengajuan cuti, persetujuan cuti, dan riwayat cuti karyawan.',
    },
    {
        id: 2,
        name: 'TabulasiHub',
        logo: tabulasi,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'AJAX', 'Mysql'],
        description: 'Aplikasi ini digunakan untuk mengelola data tabulasi, termasuk pengajuan tabulasi, persetujuan tabulasi, dan riwayat tabulasi. Aplikasi ini juga memiliki fitur untuk mengelola data tabulasi, termasuk pengajuan tabulasi, persetujuan tabulasi, dan riwayat tabulasi.',
    },
    {
        id: 3,
        name: 'Marketplace',
        logo: marketplace,
        tech: ['HTML', 'CSS', 'Bootstrap','Vue.Js','PHP', 'Laravel', 'AJAX', 'Mysql'],
        description: 'Aplikasi ini digunakan untuk mengelola data produk, termasuk pengajuan produk, persetujuan produk, dan riwayat produk. Aplikasi ini juga memiliki fitur untuk mengelola data produk, termasuk pengajuan produk, persetujuan produk, dan riwayat produk.',
    },
    {
        id: 4,
        name: 'Toko Online',
        logo: tokoOnline,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'Mysql'],
        description: 'Aplikasi ini digunakan untuk mengelola data produk, termasuk pengajuan produk, persetujuan produk, dan riwayat produk. Aplikasi ini juga memiliki fitur untuk mengelola data produk, termasuk pengajuan produk, persetujuan produk, dan riwayat produk.',
    },

    
]

export default project;