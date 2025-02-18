'use client'

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-cover bg-center h-28 absolute z-10 w-full bottom-0 top-0" style={{ backgroundImage: 'url(https://g-ladalle.com/wp-content/uploads/2023/09/header-2x-1.png)' }}>
            <div className="hidden sm:visible md:flex justify-between items-center py-4 px-10">
                <div className="flex space-x-4 text-textRed pb-14 gap-6 text-xl ">
                  
                    <a href="#la-carte" className=" hover:cursor-pointer hover:text-textYellow ">La Carte</a>
                    <a href="#concept" className="hover:cursor-pointer hover:text-textYellow ">Concept</a>
                    <a href="#devenir-franchise" className="hover:cursor-pointer hover:text-textYellow ">Devenir Franchise</a>
                </div>
                <div className="flex justify-center flex-grow">
                    <img src="https://g-ladalle.com/wp-content/uploads/2023/09/logo-gladalle.svg" alt="Logo" className="pt-4 mr-14 " />
                </div>
                <div className="flex space-x-4 pb-14 gap-6 text-textRed text-xl">
                    <a href="#une-question" className="hover:cursor-pointer hover:text-textYellow flex items-center">
                        Une Question <Icon icon="mdi:help-circle" className="ml-1" />
                    </a>
                    <a href="#trouve-nous" className="hover:cursor-pointer hover:text-textYellow flex items-center">
                        Trouve Nous <Icon icon="mdi:map-marker" className="ml-1" />
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <Icon icon="mdi:menu" className="h-8 w-8" />
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="visible md:hidden flex flex-col items-center bg-white text-black p-4">
                    <a href="#accueil" className="py-2">Accueil</a>
                    <a href="#la-carte" className="py-2">La Carte</a>
                    <a href="#concept" className="py-2">Concept</a>
                    <a href="#devenir-franchise" className="py-2">Devenir Franchise</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;