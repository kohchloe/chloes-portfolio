import React from 'react'
import { useInView } from "react-intersection-observer"
import PortfolioCard from "./PortfolioCard"

// Images
import lbw from '../assets/images/lifeBelowWater.png'
import mergis from '../assets/images/merGIS.png'
import senti from '../assets/images/sentiTunes.png'
import mb from '../assets/images/munchBunch.png'
import css from '../assets/images/CSS.png'
import sia from '../assets/images/SIA.png'
import pme from '../assets/images/PME.png'

const Portfolio = () => {
    const { ref: myRef, inView: myElementIsVisible } = useInView({
      triggerOnce: true,
    });
  
    return (
      <div id="showcase" className="py-12 text-secondary">

        <section
          id="development"
          className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-32"
        >
          <article className="space-y-24 md:space-y-0 md:grid grid-cols-2">
            <div id="header" className="">
              <div
                ref={myRef}
                className={`fade-in md:sticky top-36 space-y-8 bgportfolio-bg bg-contain bg-no-repeat text-center md:text-left ${
                  myElementIsVisible ? "appear" : ""
                }`}
              >
                <h2 className="text-black text-4xl pt-10 font-bold sm:text-5xl md:text-6xl">
                    My Development/ Analytics Projects
                </h2>
                <p className="text-black font-regular text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">
                Over the years, I've dabbled in many projects ranging from web scrapping to web development.
                    <br/><br/> Here are a few that I take great pride in: </p>

                {/* <img
                  src={lbw}
                  alt="profile"
                  className="mx-auto md:mx-0"
                /> */}
                <div className="hidden md:block sm:w-5/6 mx-auto md:mx-0">

                </div>
              </div>
            </div>
  
            <div className="space-y-20 lg:px-4">
              <PortfolioCard
                mockup={lbw}
                year="2022"
                category="App Development"
                title="Life Below Water"
                description="An interactive website to increase awareness and action for marine conservation."
                badge="Vue.js"
                link="https://github.com/kohchloe/WAD2-LifeBelowWater"
                linkInfo="View GitHub Repository"
              />
              <PortfolioCard
                mockup={senti}
                year="2023"
                category="Machine Learning"
                title="Sentiment Tunes"
                description="Curating personalised Spotify playlists using a mood-based recommender system."
                badge="Machine Learning"
                link="https://github.com/kohchloe/DMBA-SentimentTunes"
                linkInfo="View GitHub Repository"
              />
              <PortfolioCard
                mockup={mergis}
                year="2022"
                category="Geospatial Analysis"
                title="Geographic Information Systems"
                description="Analysing the impact of school mergers in Singapore."
                badge="QGIS"
                link="https://mergis.netlify.app/"
                linkInfo="View Website"
              />
              <PortfolioCard
                mockup={lbw}
                year="2023"
                category="Machine Learning"
                title="Digital Business Transformation"
                description="Improving food sustainability by reducing food waste in the F&B industry. Conducted EDA using various Python libraries (matplotlib, seaborn, hvplot) before utilising 3 regression models (Linear Regression, Random Forest, XGBoost) to predict the spoiling rate of food. Used computer vision (YOLOv5 model) to identity the type and cooking method of food."
                badge="Python"
                link="#"
                linkInfo="Work in Progress"
              />
              <PortfolioCard
                mockup={css}
                year="2022"
                category="Web Scraping"
                title="Computational Social Science"
                description="Analysing American sentiments towards legalising recreational marijuana through scraping Tweets and Reddit posts with keywords in them. We first determined the timeframe using Google Trends, before scraping 76,000 tweets and 8,000 Reddit posts via APIs (tweepy, snscrape, praw, pushshiftapi)."
                badge="Sentiment Analysis"
                link="https://www.canva.com/design/DAGOBvn8FfU/9iqPwSU61VTi2HM-Vf2ixA/edit?utm_content=DAGOBvn8FfU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                linkInfo="View Findings"
              />
            </div>
  
          </article>
  
        </section>
      </div>
    );
  };
  
  export default Portfolio