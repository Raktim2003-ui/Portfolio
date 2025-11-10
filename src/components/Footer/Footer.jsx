import React from 'react'
import { Link } from 'react-router-dom';
import portfolioLogo from "../Header/raktim_portfolio_logo.png"; // Make sure to have a logo image in the specified path

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={portfolioLogo}
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>

                    </div>
                    <div className='justify-center items-center text-center mt-20'>
                                <p>&copy; {new Date().getFullYear()} Raktim Adak portfolio.</p>

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li className='mt-4'>
                                    <Link to="/contact" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Raktim2003-ui"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                   <a
                                        href="https://www.linkedin.com/in/raktim-adak-a828a0238/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel=""
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li className='mt-4'>
                                   <a
                                        href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                                        className="hover:underline"
                                        target="_blank"
                                        rel=""
                                    >
                                        Naukri
                                    </a>
                                </li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            </div>
        </footer>
    );
}