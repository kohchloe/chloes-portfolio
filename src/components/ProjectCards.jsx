import React from 'react'
import { FaMapMarker } from 'react-icons/fa'
import lifeBelowWater from '../assets/images/lifeBelowWater.png'
import merGIS from '../assets/images/merGIS.png'
import sentiTunes from '../assets/images/sentiTunes.png'
import munchBunch from '../assets/images/munchBunch.png'
import CSS from '../assets/images/CSS.png'
import SIA from '../assets/images/SIA.png'
import PME from '../assets/images/PME.png'

const ProjectCards = () => {
  return (
    <section className="py-4">

      <div className="text-center ml-20">
        <h2 className="text-4xl pt-10 font-bold sm:text-5xl md:text-6xl">
            My Projects
        </h2>
      </div>

      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-lg">

          {/* <!-- Project Card 1 --> */}
          <div class="card bg-base-100 w-98 shadow-xl">
            <figure class="px-8 pt-8">
              <img
                src={lifeBelowWater}
                alt="lifeBelowWater"
                class="rounded-xl" />
            </figure>
            <div className="card-body">
              <div>2023 | App Development</div>
              <h2 className="card-title text-primary">
                Life Below Water
              </h2>
              <p>An interactive website to increase awareness and action for marine conservation. </p>

              <div className="border border-gray-100 mb-2"></div>

              <div className="card-actions justify-left">
                <div className="badge badge-outline">Vue.js</div>
                <div className="badge badge-outline">CSS</div>
                <div className="badge badge-outline">Bootstrap</div>
                <div className="badge badge-outline">HTML</div>
                <div className="badge badge-outline">Figma</div>
              </div>

              <a
                  href="https://github.com/kohchloe/WAD2-LifeBelowWater"
                  className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                  style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  View GitHub Repository
              </a>
            </div>
          </div>

          {/* <!-- Project Card 2 --> */}
          <div class="card bg-base-100 w-98 shadow-xl">
            <figure class="px-8 pt-8">
              <img
                src={sentiTunes}
                alt="sentiTunes"
                class="rounded-xl" />
            </figure>
            <div className="card-body">
              <div>2023 | Machine Learning</div>
              <h2 className="card-title text-primary">Sentiment Tunes</h2>
              <p>Curating personalised Spotify playlists using a mood-based recommender system.</p>

              <div className="border border-gray-100 mb-2"></div>

              <div className="card-actions justify-left">
                <div className="badge badge-outline">Machine Learning</div>
                <div className="badge badge-outline">Data Mining</div>
              </div>

              <a
                  href="https://github.com/kohchloe/DMBA-SentimentTunes"
                  className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                  style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  View GitHub Repository
              </a>
            </div>
          </div>


          {/* <!-- Project Card 3 --> */}
          <div class="card bg-base-100 w-98 shadow-xl">
            <figure class="px-8 pt-8">
              <img
                src={merGIS}
                alt="merGIS"
                class="rounded-xl" />
            </figure>
            <div className="card-body">
              <div>2022 | Geospatial Analysis</div>
              <h2 className="card-title text-primary">Geographic Information Systems</h2>
              <p>Analysing the impact of school mergers in Singapore.</p>

              <div className="border border-gray-100 mb-2"></div>

              <div className="card-actions justify-left">
                <div className="badge badge-outline">QGIS</div>
              </div>

              <a
                  href="https://mergis.netlify.app/"
                  className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                  style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  View Website
              </a>
            </div>
          </div>


          {/* <!-- Project Card 4: SIA App Challenge --> */}
          <div class="card bg-base-100 w-98 shadow-xl">
            <figure class="px-8 pt-8">
              <img
                src={SIA}
                alt="SIA"
                class="rounded-xl" />
            </figure>
            <div className="card-body">
              <div>2023 | Design & Prototyping</div>
              <h2 className="card-title text-primary">Singapore Airlines AppChallenge</h2>
              <p>Integrating a carbon offset program for Singapore Airlines that rewards consumers for choosing eco-friendly flights.</p>

              <div className="border border-gray-100 mb-2"></div>

              <div className="card-actions justify-left">
                <div className="badge badge-outline">User Research</div>
                <div className="badge badge-outline">User Design</div>
                <div className="badge badge-outline">Figma</div>
              </div>

              <a
                  href=""
                  className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                  style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  View Figma Mockup
              </a>
            </div>
          </div>



          {/* <!-- Project Card 5: PME --> */}
          <div class="card bg-base-100 w-98 shadow-xl">
            <figure class="px-8 pt-8">
              <img
                src={PME}
                alt="PME"
                class="rounded-xl" />
            </figure>
            <div className="card-body">
              <div>2023 | Design & Prototyping</div>
              <h2 className="card-title text-primary">Product Management Experience</h2>
              <p>Conducted comprehensive user and product discovery efforts to propose a new feature for Grab comparing ride fares for all pick-up points within a 5-minute radius.</p>

              <div className="border border-gray-100 mb-2"></div>

              <div className="card-actions justify-left">
                <div className="badge badge-outline">User Research</div>
                <div className="badge badge-outline">User Design</div>
                <div className="badge badge-outline">Figma</div>
              </div>

              <a
                  href=""
                  className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                  style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  View Figma Mockup
              </a>
            </div>
          </div>


          {/* <!-- Project Card 6: DBTT --> */}
          <div class="card bg-base-100 w-98 shadow-xl">
            <figure class="px-8 pt-8">
              <img
                src={PME}
                alt="PME"
                class="rounded-xl" />
            </figure>
            <div className="card-body">
              <div>2023 | Machine Learning</div>
              <h2 className="card-title text-primary">Digital Business Transformation</h2>
              <p>Improving food sustainability by reducing food waste in the F&B industry. Conducted EDA using various Python libraries (matplotlib, seaborn, hvplot) before utilising 3 regression models (Linear Regression, Random Forest, XGBoost) to predict the spoiling rate of food. Used computer vision (YOLOv5 model) to identity the type and cooking method of food.</p>

              <div className="border border-gray-100 mb-2"></div>

              <div className="card-actions justify-left">
                <div className="badge badge-outline">EDA using Python</div>
                <div className="badge badge-outline">Machine Learning</div>
                <div className="badge badge-outline">Computer Vision</div>
              </div>

            </div>
          </div>


          {/* <!-- Project Card 7: IDP --> */}
          <div class="card bg-base-100 w-98 shadow-xl">
            <figure class="px-8 pt-8">
              <img
                src={munchBunch}
                alt="munchBunch"
                class="rounded-xl" />
            </figure>
            <div className="card-body">
              <div>2022 | Design & Prototyping</div>
              <h2 className="card-title text-primary">MunchBunch</h2>
              <p></p>

              <div className="border border-gray-100 mb-2"></div>

              <div className="card-actions justify-left">
                <div className="badge badge-outline">User Research</div>
                <div className="badge badge-outline">Design Principles</div>
                <div className="badge badge-outline">Prototyping</div>
                <div className="badge badge-outline">Figma</div>
              </div>

              <a
                  href="https://www.figma.com/proto/XZbQ38nK39F1npz93thiMu/MunchBunch-Screens?node-id=520-1778&starting-point-node-id=520%3A1778&t=ONyxlC21DRNzBFmj-1"
                  className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                  style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  View Figma Mockup
              </a>

            </div>
          </div>


          {/* <!-- Project Card 8: CSS --> */}
          <div class="card bg-base-100 w-98 shadow-xl">
            <figure class="px-8 pt-8">
              <img
                src={CSS}
                alt="CSS"
                class="rounded-xl" />
            </figure>
            <div className="card-body">
              <div>2022 | Web Scraping</div>
              <h2 className="card-title text-primary">Computational Social Science</h2>
              <p>Analysing American sentiments towards legalising recreational marijuana through scraping Tweets and Reddit posts with keywords in them. We first determined the timeframe using Google Trends, before scraping 76,000 tweets and 8,000 Reddit posts via APIs (tweepy, snscrape, praw, pushshiftapi). </p>

              <div className="border border-gray-100 mb-2"></div>

              <div className="card-actions justify-left">
                <div className="badge badge-outline">Google Trends</div>
                <div className="badge badge-outline">Web Scraping</div>
                <div className="badge badge-outline">Data Cleaning</div>
                <div className="badge badge-outline">Sentiment Analysis</div>
              </div>

              <a
                  href="https://www.canva.com/design/DAGOBvn8FfU/9iqPwSU61VTi2HM-Vf2ixA/edit?utm_content=DAGOBvn8FfU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                  style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  View Slide Deck
              </a>

            </div>
          </div>


        </div>
      </div>
    </section>
    
  )
}

export default ProjectCards
