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
    },
    {
        id: 2,
        name: 'TabulasiHub',
        logo: tabulasi,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'AJAX', 'Mysql'],
    },
    {
        id: 3,
        name: 'Marketplace',
        logo: marketplace,
        tech: ['HTML', 'CSS', 'Bootstrap','Vue.Js','PHP', 'Laravel', 'AJAX', 'Mysql'],
    },
    {
        id: 4,
        name: 'Toko Online',
        logo: tokoOnline,
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'Mysql'],
    },

    
]

export default project;