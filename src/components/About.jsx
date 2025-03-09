import React, { useEffect, useRef } from 'react';
import tabIcon from '../assets/images/tabIcon2.png';
import { Mail } from 'lucide-react';

const About = () => {
    const textRef = useRef(null);
    const headingRef = useRef(null);
    const imageRef = useRef(null);
    const socialRef = useRef(null);

    useEffect(() => {
      // Fade in animations on load
        const text = textRef.current;
        const heading = headingRef.current;
        const image = imageRef.current;
        const social = socialRef.current;
        
        if (text && heading && image && social) {
            // Animate elements with slight delay between each
            setTimeout(() => {
            image.style.opacity = '1';
            image.style.transform = 'translateY(0)';
            }, 300);

            setTimeout(() => {
                heading.style.opacity = '1';
                heading.style.transform = 'translateY(0)';
            }, 600);
        
            setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
            }, 600);
            
            setTimeout(() => {
            social.style.opacity = '1';
            }, 900);
        }
    
        // Optional: Add scroll listener for parallax effect
        const handleScroll = () => {
            if (image) {
            const scrollPosition = window.scrollY;
            image.style.transform = `translateY(${scrollPosition * 0.05}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute w-64 h-64 rounded-full bg-pink-100 opacity-20 -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 rounded-full bg-blue-100 opacity-20 -bottom-40 -right-40"></div>
            
            <div className="text-center lg:text-left lg:ml-16 xl:ml-32 px-6 lg:px-0 max-w-xl">
                <h1 
                ref={headingRef}
                className="font-extrabold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text transition-all duration-700 ease-out opacity-0 transform translate-y-8"
                >
                Hello, I'm Chloe!
                </h1>
                
                <div
                ref={textRef}
                className="transition-all duration-700 ease-out opacity-0 transform translate-y-8"
                >
                <p className="my-6 sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    I'm driven by a passion for design-centric products and leveraging technology to create meaningful solutions.
                </p>
                
                <p className="my-6 sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed relative group">
                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                    Scroll down to find out more about my experiences and projects ◡̈
                    </span>
                </p>
                </div>
        
                <div 
                ref={socialRef} 
                className="flex justify-center lg:justify-start space-x-5 mt-8 transition-opacity duration-700 ease-out opacity-0"
                >
                <a 
                    href="https://linkedin.com/in/chloekohjw" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    aria-label="LinkedIn"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
        
                <a 
                    href="https://github.com/kohchloe" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    aria-label="GitHub"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
        
                <a 
                    href="mailto:chloekoh.2021@scis.smu.edu.sg"
                    className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    aria-label="Email"
                >
                    <Mail size={24} className="text-indigo-600" />
                </a>
                </div>
            </div>

            <div 
                ref={imageRef}
                style={{ maxWidth: '40%' }}
                className="lg:mx-4 p-8 md:my-4 sm:my-8"
            >
                <img
                    src={tabIcon}
                    alt="Profile picture"
                    className="relative z-10 w-full h-full object-cover"
                    style={{ transform: 'scaleX(-1)' }}
                />
            </div>

            
        </section>
        );
    };

export default About;

// import React from 'react'
// import profile2 from '../assets/images/profile2.png'

// const About = () => {
//   return (
//     <section id="about" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center">

//             <div className="text-center lg:text-left lg:ml-56">
//                 <h1 className="font-extrabold text-4xl sm:text-3xl md:text-5xl">
//                     Hello, I'm Chloe!
//                 </h1>
//                 <p className="my-4 sm:text-sm md:text-lg lg:text-xl">
//                 I'm driven by a passion for design-centric products and leveraging technology to create meaningful solutions. 
//                 <br/><br/>Scroll down to find out more about my experiences and projects ◡̈
//                 </p>

//                 <div className="flex justify-center lg:justify-start">
//                     <a href="https://linkedin.com/in/chloekohjw" target="_blank" rel="noopener noreferrer" className='pr-2'>
//                         <svg
//                         xmlns="http://www.w3.org/2000/svg" 
//                         xmlns:xlink="http://www.w3.org/1999/xlink" 
//                         version="1.1"
//                         width="50"
//                         height="50"
//                         viewBox="0 0 24 24"
//                         className="fill-current">
//                         <path fill="#000000" 
//                         d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
//                         </svg>
//                     </a>

//                     <a href="https://github.com/kohchloe" target="_blank" rel="noopener noreferrer" className='pr-3'>
//                         <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlns:xlink="http://www.w3.org/1999/xlink"
//                         version="1.1"
//                         width="45"
//                         height="45"
//                         viewBox="0 0 24 24"
//                         className="fill-current">
//                             <path fill="#000000" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.043-1.415-4.043-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.293-1.552 3.298-1.23 3.298-1.23.653 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.814 1.096.814 2.207v3.277c0 .32.22.694.825.577C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
//                         </svg>
//                     </a>

//                     <a href="mailto:chloekoh.2021@scis.smu.edu.sg">
//                         <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlns:xlink="http://www.w3.org/1999/xlink"
//                         version="1.1"
//                         width="50"
//                         height="50"
//                         viewBox="0 0 24 24"
//                         className="fill-current">
//                             <path fill="#000000" d="M20 4H4C2.89 4 2 4.9 2 6v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//                         </svg>
//                     </a>
//                 </div>
//             </div>

//             <div style={{ maxWidth: '30%' }} className="lg:mr-32">
//                 <img
//                     src={profile2}
//                     alt="Profile picture"
//                 />
//             </div>
            
//     </section>
//   )
// }

// export default About
