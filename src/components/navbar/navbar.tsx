'use client'

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-cover bg-center" style={{ backgroundImage: 'url(https://g-ladalle.com/wp-content/uploads/2023/09/header-2x-1.png)' }}>
            <div className="flex justify-between items-center p-4">
                <div className="flex space-x-4">
                  
                    <a href="#la-carte" className="text-black">La Carte</a>
                    <a href="#concept" className="text-black">Concept</a>
                    <a href="#devenir-franchise" className="text-black">Devenir Franchise</a>
                </div>
                <div className="flex justify-center flex-grow">
                    <img src="https://g-ladalle.com/wp-content/uploads/2023/09/logo-gladalle.svg" alt="Logo" className="h-12" />
                </div>
                <div className="flex space-x-4">
                    <a href="#une-question" className="text-black flex items-center">
                        Une Question <Icon icon="mdi:help-circle" className="ml-1" />
                    </a>
                    <a href="#trouve-nous" className="text-black flex items-center">
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
                <div className="md:hidden flex flex-col items-center bg-white text-black p-4">
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