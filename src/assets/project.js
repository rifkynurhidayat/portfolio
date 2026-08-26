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
        description: 'Aplikasi ini digunakan untuk mengelola sistem manajemen persuratan di lingkungan internal Ditjen Intram.',
    },
    {
        id: 2,
        name: 'TabulasiHub',
        logo: tabulasi,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'AJAX', 'Mysql'],
        description: 'TabulasiHub adalah aplikasi untuk mengelola data kedatangan dan keberangkatan penumpang dari berbagai simpul transportasi, seperti Pelabuhan Merak, Tanjung Priok, Ketapang, dan Bandara Soekarno-Hatta, serta menyajikan perkembangan data dalam bentuk chart secara informatif.',
    },
    {
        id: 3,
        name: 'Marketplace',
        logo: marketplace,
        tech: ['HTML', 'CSS', 'Bootstrap','Vue.Js','PHP', 'Laravel', 'AJAX','Midtrans', 'Mysql'],
        description: 'Marketplace adalah aplikasi berbasis web yang memungkinkan pengguna membuka dan mengelola toko secara online, menampilkan produk, serta mengelola transaksi melalui satu platform terintegrasi.',
    },
    {
        id: 4,
        name: 'Toko Online',
        logo: tokoOnline,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'Mysql','API Midtrans','API RajaOngkir'],
        description: 'Toko Online adalah aplikasi berbasis web untuk mengelola katalog produk dan penjualan secara online, mulai dari pengelolaan produk hingga proses pemesanan oleh pelanggan',
    },

    
]

export default project;