import React from 'react'
import profile from '../assets/images/profile.jpg'

const About = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
            {/* Top section for profile picture */}
            <div className="flex-shrink-0">
                <img
                    className="h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 rounded-full"
                    src={profile}
                    alt="Profile picture"
                />
            </div>

            {/* Middle section for text */}
            <div className="text-center">
                <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                    Hello, I'm Chloe!
                </h1>
                <p className="my-4 text-xl">
                    I'm passionate about building design-centric products to improve everyday life.
                </p>
            </div>

            {/* Bottom section for sections*/}
            <div className="text-center">
                <p className="my-2 text-xl">
                    Check out my...
                </p>

                <button class="btn btn-primary btn-wide rounded-full mx-1">experiences</button>
                <button class="btn btn-secondary btn-wide rounded-full mx-1">projects</button>

                <p className="my-2 text-xl">below!</p>
            </div>

        </div>
    </section>
  )
}

export default About
