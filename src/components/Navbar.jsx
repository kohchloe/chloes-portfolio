import React, { useState } from 'react';
import tabIcon from '../assets/images/tabIcon.png';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import XMarkIcon for closing the menu

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <nav className="navbar sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-150">
                <div className="flex items-center justify-between w-full px-4 lg:px-0">
                    {/* Logo */}
                    <a href='#about'>
                        <img
                            className="h-10 w-auto"
                            src={tabIcon}
                            alt="tabIcon"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-8">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href='#about'>About</a></li>
                            <li><a href='#experiences'>Experiences</a></li>
                            <li><a href='#development'>Development</a></li>
                            <li><a href='#projects'>Design</a></li>
                            <li><a href='#footer'>Contact</a></li>
                        </ul>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setToggleMenu(!toggleMenu)}>
                            {toggleMenu ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {toggleMenu && (
                    <div className="lg:hidden bg-white bg-opacity-10 absolute top-16 left-0 right-0 p-4 shadow-md">
                        <ul className="flex flex-col gap-4">
                            <li><a href='#about'>About</a></li>
                            <li><a href='#experiences'>Experiences</a></li>
                            <li><a href='#development'>Development</a></li>
                            <li><a href='#projects'>Design</a></li>
                            <li><a href='#footer'>Contact</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
