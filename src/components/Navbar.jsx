import React from 'react'
import tabIcon from '../assets/images/tabIcon.png'

const Navbar = () => {
    return (
    <>
        <nav className="navbar sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-150">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    {/* <!-- Logo --> */}
                    <img
                        className="h-10 w-auto"
                        src={tabIcon}
                        alt="tabIcon"
                    />
                </a>
            </div>
            <div className="flex-none align-left">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Experiences</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar
