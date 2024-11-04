import React from 'react';
import { FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-16">
            <div className="flex justify-between">

                {/* Left Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">TIGULENI</h2>
                    <p className="mb-2">Subscribe</p>
                    <div className="flex items-center border border-white rounded-md overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-black text-white p-2 outline-none"
                        />
                        <button className="bg-white text-black px-4 py-2">→</button>
                    </div>
                </div>

                {/* Center Section */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Support</h3>
                    <p>Malawi, Zomba</p>
                    <p>Unima</p>
                    <p>tiguleni@marketpl.com</p>
                    <p>+265-9994-73426</p>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Link</h3>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 text-2xl">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FiInstagram className="hover:text-gray-400 cursor-pointer" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FiTwitter className="hover:text-gray-400 cursor-pointer" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="hover:text-gray-400 cursor-pointer" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
