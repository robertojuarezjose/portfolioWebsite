import React from 'react';
import { FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-center py-4 dark:bg-gray-900">
            <div className="flex justify-center space-x-4 mb-2">
                <a
                    href="https://github.com/robertojuarezjose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="https://www.hackerrank.com/profile/robertojuarezjo1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
                >
                    <FaHackerrank size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/roberto-juárez-b0b76a225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
                >
                    <FaLinkedin size={24} />
                </a>
            </div>
            <p className="text-black dark:text-white text-sm">
                © 2025 My Portfolio. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
