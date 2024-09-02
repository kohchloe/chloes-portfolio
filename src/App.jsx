import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experiences'
import Portfolio from './components/Portfolio'
import ProjectCards from './components/ProjectCards'
import DesignCarousel from './components/Carousel'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-custom-gradient'>
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <ProjectCards />
      <DesignCarousel />
      <Footer />

    </div>
  )
}

export default App
