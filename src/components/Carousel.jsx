import React from 'react'
import Carousel from 'react-multi-carousel';
import CarouselCard from "./CarouselCard";
import 'react-multi-carousel/lib/styles.css';

// Images
import lifeBelowWater from '../assets/images/lifeBelowWater.png'
import munchBunch from '../assets/images/munchBunch.png'
import SIA from '../assets/images/SIA.png'
import PME from '../assets/images/PME.png'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const DesignCarousel = () => {
    return (
        <Carousel responsive={responsive} className="mx-10">
            <div>
                <CarouselCard
                mockup={lifeBelowWater}
                title="Life Below Water"
                description="An interactive website to increase awareness and action for marine conservation."
                link="https://github.com/kohchloe/WAD2-LifeBelowWater"
                linkInfo="View Figma Prototype"
                />
            </div>

            <div>
                <CarouselCard
                mockup={SIA}
                title="Singapore Airlines AppChallenge"
                description="Integrating a carbon offset program for Singapore Airlines that rewards consumers for choosing eco-friendly flights."
                link="#"
                linkInfo="View Figma Prototype"
                />
            </div>

            <div>
                <CarouselCard
                mockup={PME}
                title="Product Management Experience"
                description="Conducted comprehensive user and product discovery efforts to propose a new feature for Grab comparing ride fares for all pick-up points within a 5-minute radius."
                link="#"
                linkInfo="View Figma Prototype"
                />
            </div>

            <div>
                <CarouselCard
                mockup={munchBunch}
                title="MunchBunch"
                description="High-fidelity prototype for a social food app that helps users decide on a restaurant to dine at."
                link="#"
                linkInfo="View Figma Prototype"
                />
            </div>
            
        </Carousel>
        
    );
};

export default DesignCarousel;

