"use client";

import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
    };

    const navLinks = [
        { href: "#about", text: "About" },
        { href: "#events", text: "Events" },
        { href: "#schedule", text: "Schedule" },
        { href: "#sponsors", text: "Sponsors" },
        { href: "#prize", text: "Prize" },
        { href: "#contact", text: "Contact us" }
    ];

    return (
        <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? ' backdrop-blur-md' : ''}`}>
            <header className={`flex justify-between items-center px-3  transition-all duration-300 `}>
                {/* Mobile Menu Button with animation */}
                <button
                    className="md:hidden text-white p-2 relative z-50 transition-transform duration-300 ease-in-out"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-6 relative">
                        <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'}`}></span>
                        <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'}`}></span>
                    </div>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex w-full max-w-7xl mx-auto justify-between items-center px-4 py-2">
                    <img
                        alt="Logo"
                        className="h-10 lg:h-16 w-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
                        src="/assets/dexterix-logo.png"
                        width="60"
                        height="50"
                    />
                    <div className="flex gap-3 md:gap-6 lg:gap-10 border-2 border-radius py-2 group border-pink-500 transition-colors duration-300">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative nav-hover-btn nav-link text-base md:text-lg lg:text-xl font-medium"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Mobile Logo */}
                <div className="md:hidden mx-auto">
                    <img
                        alt="Logo"
                        className="h-10 transition-transform duration-300 hover:scale-110"
                        src="/assets/dexterix-logo.png"
                        width="40"
                        height="40"
                    />
                </div>
            </header>

            {/* Mobile Menu with animation */}
            <div 
                className={`fixed inset-y-0 right-0 w-[250px] backdrop-blur-lg transform transition-transform duration-500 ease-in-out md:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ zIndex: 40 }}
            >
                
                <div className="flex flex-col items-center justify-center h-full">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`mobile-nav-link text-2xl text-white py-4 ${isMenuOpen ? 'show' : ''}`}
                            onClick={toggleMenu}
                            style={{ 
                                animationDelay: `${index * 100}ms`,
                                opacity: 0,
                                transform: 'translateY(20px)'
                            }}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar