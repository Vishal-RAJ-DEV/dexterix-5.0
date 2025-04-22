import React from "react";

const Footer = () => {
    return (
        <footer className="footer grainy-effect min-w-full bg-[#1a102d] text-white px-4 py-10 relative z-10">
            <div className="footer-overlay  mx-auto grid grid-flow-row justify-between md:grid-flow-col auto-cols-min gap-10 text-center md:text-left">
                <div className="min-w-fit whitespace-nowrap">
                    <img src="/assets/dexterix-logo.png" alt="Dexterix Logo" className="w-25 h-25 mx-auto md:mx-0 mb-4" />
                    <h3 className="text-red-500 text-xl font-extralight">Build. Break. Repeat.</h3>
                    <p className="max-w-fit text-white-900 mt-2 text-sm bg-pink-600">TechnoJam | Dexterix 5.0</p>
                </div>

                <div className="min-w-fit whitespace-nowrap">
                    <h4 className="text-xl mb-4 text-pink-800 font-bold border-t border-b border-red-500 py-0.5">Quick Links</h4>
                    <ul className="space-y-2 text-white">
                        <li><a href="#about" className="hover:text-pink-500 transition">About Us</a></li>
                        <li><a href="#sponsors" className="hover:text-pink-500 transition">Sponsors</a></li>
                        <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
                        <li><a href="#passes" className="hover:text-pink-500 transition">Buy Passes</a></li>
                    </ul>
                </div>

                <div className="min-w-fit whitespace-nowrap">
                    <h4 className="text-xl mb-4 text-pink-800 font-bold border-t border-b border-red-500 py-0.5">Community</h4>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.instagram.com/teamtechnojam/" className="hover:text-pink-500 transition">Instagram</a>
                        <a href="#" className="hover:text-pink-500 transition">LinkedIn</a>
                        <a href="https://github.com/technojam" className="hover:text-pink-500 transition">GitHub</a>
                    </div>
                    <p className="text-gray-400 mt-4 text-sm">Email: technojam@galgotiasuniversity.edu.in</p>
                </div>

                <div className="min-w-fit whitespace-nowrap">
                    <h4 className="text-xl mb-4 text-pink-800 font-bold border-t border-b border-red-500 py-0.5">Resources</h4>
                    <ul className="space-y-2 text-white">
                        <li><a href="#about" className="hover:text-pink-500 transition">Sponsorship Brochure</a></li>
                        <li><a href="#sponsors" className="hover:text-pink-500 transition">Code of Conduct</a></li>
                    </ul>
                </div>

                <div className="min-w-fit whitespace-nowrap">
                    <h4 className="text-xl mb-4 text-pink-800 font-bold border-t border-b border-red-500 py-0.5">Archives</h4>
                    <ul className="space-y-2 text-white">
                        <li><a href="#about" className="hover:text-pink-500 transition">Dexterix 2.0</a></li>
                        <li><a href="#about" className="hover:text-pink-500 transition">Dexterix 3.0</a></li>
                        <li><a href="#about" className="hover:text-pink-500 transition">Dexterix 4.0</a></li>
                        <li><a href="#sponsors" className="hover:text-pink-500 transition">NASA Space App Challenge</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-pink-600/60 mt-10 pt-4 text-center text-sm text-gray-400">
                © 2025 Dexterix 5.0. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;