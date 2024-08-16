import React from 'react'
import Lottie from 'lottie-react'
import girlAnimation from '../assets/images/girl.json'

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4"> */}
            {/* Top section for profile picture
            <div className="flex-shrink-0">
                <img
                    className="h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 rounded-full"
                    src={profile}
                    alt="Profile picture"
                />
            </div> */}

            
            {/* <div className="text-center"> */}


            <div className="text-center ml-20">
                <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                    Hello, I'm Chloe!
                </h1>
                <p className="my-4 text-xl">
                    I'm passionate about building design-centric products to improve everyday life.
                </p>
            </div>

            <div style={{ maxWidth: '50%' }} className="mr-10">
                <Lottie animationData={girlAnimation} />
            </div>
            {/* </div> */}

        {/* </div> */}
    </section>
  )
}

export default About
