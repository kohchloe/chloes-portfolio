import React from 'react'
import Navbar from './components/Navbar'
import HiAnimation from './components/HiAnimation'
import About from './components/About'
import Experience from './components/Experiences'
import ProjectCards from './components/ProjectCards'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='bg-custom-gradient'>
      <Navbar />
      <About />
      <Experience />
      <ProjectCards />
      <Footer />
    

    </div>
  )
}

export default App
