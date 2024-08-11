import React from 'react'
import profile from '../assets/images/profile.jpg'
import panda from '../assets/images/panda.png'

const Navbar = () => {
    return (
    <>
        <div className="navbar bg-neutral-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    {/* <!-- Logo --> */}
                    <img
                        className="h-10 w-auto"
                        src={panda}
                        alt="React Jobs"
                    />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About</a></li>
                    <li><a>Experiences</a></li>
                    <li><a>Projects</a></li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Navbar
