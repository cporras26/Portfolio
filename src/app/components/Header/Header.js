'use client';

import {useEffect, useState} from "react";
import HeaderComponent from "./components/HeaderComponent"

export default function Header() {
    const [selectedIndex1, setSelectedIndex1] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect( () => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        }
        window.addEventListener("scroll", handleScroll);
        
        return () => {window.removeEventListener("scroll", handleScroll)};

    }, []);
    
    return <>
        <HeaderComponent isScrolled={isScrolled}>
            <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto">
                <ul className="flex font-recoletaBlack flex-row items-center h-24">
                    <li className="group text-2xl relative font-bold mr-20">
                        {selectedIndex1 === 0 ? (
                            <span className="menu-effect transform opacity-100 -rotate-12
                            group-hover:-rotate-12 group-hover:opacity-100"></span>
                        ) : (
                            <span className="menu-effect transform opacity-100 rotate-12
                            group-hover:rotate-12 group-hover:opacity-100"></span>
                        )}
                        <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : "" }
                        text-[#666d47] group-hover:text-black`} 
                           href="/#home" 
                           onClick={() => setSelectedIndex1(0)}>Home</a>
                    </li>
                </ul>
            </nav>
        </HeaderComponent>
    </>;
}