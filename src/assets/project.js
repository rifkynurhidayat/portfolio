import React from "react";
 
import manage from './project/manage.png';
import tabulasi from './project/tabulasi.jpeg';
import marketplace from './project/marketplace.jpg';
import tokoOnline from './project/tokoOnline.jpg';
import arsip from './project/arsip.png';

const project = [
    {
        id: 1,
        name: 'Manage Office',
        logo: manage,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel','AJAX', 'Mysql'],
        description: 'Aplikasi ini digunakan untuk mengelola sistem manajemen persuratan di lingkungan internal Ditjen Intram.',
        link:'https://github.com/rifkynurhidayat/Manage-Office.git',
    },
    {
        id: 2,
        name: 'TabulasiHub',
        logo: tabulasi,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'AJAX', 'Mysql'],
        description: 'TabulasiHub merupakan aplikasi untuk mengelola data kedatangan dan keberangkatan penumpang dari berbagai simpul transportasi, seperti Pelabuhan Merak, Tanjung Priok, Ketapang, dan Bandara Soekarno-Hatta, serta menyajikan perkembangan data dalam bentuk chart secara informatif.',
        link:'https://github.com/rifkynurhidayat/TabulasiHub.git'
    },
    {
        id: 3,
        name: 'Marketplace',
        logo: marketplace,
        tech: ['HTML', 'CSS', 'Bootstrap','Vue.Js','PHP', 'Laravel', 'AJAX','Midtrans', 'Mysql'],
        description: 'Dengan adanya Marketplace aplikasi berbasis web ini yang memungkinkan pengguna membuka dan mengelola toko secara online, menampilkan produk, serta mengelola transaksi melalui satu platform terintegrasi.',
        link:'https://github.com/rifkynurhidayat/Marketplace.git'
    },
    {
        id: 4,
        name: 'Toko Online',
        logo: tokoOnline,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'Mysql','API Midtrans','API RajaOngkir'],
        description: 'aplikasi Toko Online dengan berbasis web untuk mengelola katalog produk dan penjualan secara online, mulai dari pengelolaan produk hingga proses pemesanan oleh pelanggan',
        link:'https://github.com/rifkynurhidayat/Ecommerce-terintegrasi-API-RajaOngkir-dan-Midtrans.git'
    },
    {
        id: 5,
        name: 'E-Arsip',
        logo: arsip,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'Mysql'],
        description: 'Aplikasi E-Arsip digunakan untuk mengelola dokumen elektronik secara digital, memudahkan penyimpanan, pencarian, dan pengambilan dokumen.',
        link:'https://github.com/rifkynurhidayat/E-Arsip.git'
    }

    
]

export default project;