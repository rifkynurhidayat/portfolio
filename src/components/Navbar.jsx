
import { useState, useEffect } from "react";
export const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="navbar py-8 m flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold p-1 md:bg-transparent md:text-white">Portfolio</h1>
            </div>
            <ul className={`menu flex items-center sm:gap-10 gap-4 fixed md:static left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-zinc-500 backdrop-blur-lg-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-50 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li>
                    <a href="#beranda" className="sm:text-lg text-base font-medium">Beranda</a>
                </li>
                <li>
                    <a href="#project" className="sm:text-lg text-base font-medium">Proyek</a>
                </li>
                <li>
                    <a href="#kontak" className="sm:text-lg text-base font-medium">Kontak</a>
                </li>
            </ul>
        </div>
    )
}


