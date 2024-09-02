import React from 'react'
// import Lottie from 'lottie-react'
// import girlAnimation from '../assets/images/girl.json'
import profile2 from '../assets/images/profile2.png'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
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

            <div className="text-left ml-20">
                <h1 className="font-extrabold sm:text-3xl md:text-4xl lg:text-6xl">
                    Hello, I'm Chloe!
                </h1>
                <p className="my-4 text-xl">
                    I'm passionate about building design-centric products to improve everyday life.
                </p>

                <div className="flex">
                    <a href="https://linkedin.com/in/chloekohjw" target="_blank" rel="noopener noreferrer" className='pr-2'>
                        <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlns:xlink="http://www.w3.org/1999/xlink" 
                        version="1.1"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path fill="#000000" 
                        d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                        </svg>
                    </a>

                    <a href="https://github.com/kohchloe" target="_blank" rel="noopener noreferrer" className='pr-3'>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="45"
                        height="45"
                        viewBox="0 0 24 24"
                        className="fill-current">
                            <path fill="#000000" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.043-1.415-4.043-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.293-1.552 3.298-1.23 3.298-1.23.653 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.814 1.096.814 2.207v3.277c0 .32.22.694.825.577C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>

                    <a href="mailto:chloekoh.2021@scis.smu.edu.sg">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        className="fill-current">
                            <path fill="#000000" d="M20 4H4C2.89 4 2 4.9 2 6v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* <div style={{ maxWidth: '50%' }} className="mr-10">
                <Lottie animationData={girlAnimation} />
            </div> */}

            <div style={{ maxWidth: '40%' }} className="mr-10">
                <img
                    src={profile2}
                    alt="Profile picture"
                />
            </div>
            
    </section>
  )
}

export default About
