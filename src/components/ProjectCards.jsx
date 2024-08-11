import React from 'react'
import { FaMapMarker } from 'react-icons/fa'

const ProjectCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-lg">

          {/* <!-- Project Card 1 --> */}
          <div class="card bg-base-100 w-98 shadow-xl">
            <figure class="px-8 pt-8">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div className="card-body">
              <div>2023 | App Development</div>
              <h2 className="card-title text-secondary">
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
                  className="h-[36px] bg-secondary hover:bg-accent text-white my-1 py-2 rounded-lg text-center text-sm"
                  style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  View GitHub Repository
              </a>
            </div>
          </div>

          

          {/* <!-- Project Card 2 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-3">
                <div className="text-gray-600 my-2">2023 | Machine Learning</div>
                <h3 className="text-blue-500 text-xl font-bold">Sentiment Tunes</h3>
              </div>

              <div className="mb-3">
                Curating personalised Spotify playlists using a mood-based recommender system.
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-wrap mb-3">
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1">
                    Machine Learning
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Data Mining
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Python
                  </span>
                </div>
                
                <a
                  href="https://github.com/kohchloe/DMBA-SentimentTunes"
                  className="h-[36px] bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Project Card 3 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-3">
                <div className="text-gray-600 my-2">2022 | Geographic Information System</div>
                <h3 className="text-blue-500 text-xl font-bold">MerGIS</h3>
              </div>

              <div className="mb-3">
                Geographical Information Systems project analysing the impact of school mergers in Singapore
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-wrap mb-3">
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1">
                    Geospatial Analytics
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    QGIS
                  </span>
                </div>
                
                <a
                  href="https://mergis.netlify.app/"
                  className="h-[36px] bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Website
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Project Card 4 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-3">
                <div className="text-gray-600 my-2">2023 | Design & Prototyping</div>
                <h3 className="text-blue-500 text-xl font-bold">Singapore Airlines AppChallenge</h3>
              </div>

              <div className="mb-3">
                Integrating a carbon offset program for Singapore Airlines that rewards consumers for choosing eco-friendly flights.
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-wrap mb-3">
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1">
                    User Research
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    User Design
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Figma
                  </span>
                </div>
                
                <a
                  href="https://github.com/kohchloe/DMBA-SentimentTunes"
                  className="h-[36px] bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
          </div>

{/* <!-- Project Card 5 --> */}
<div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-3">
                <div className="text-gray-600 my-2">2023 | Design & Prototyping</div>
                <h3 className="text-blue-500 text-xl font-bold">Product Management Experience</h3>
              </div>

              <div className="mb-3">
                Conducted comprehensive user and product discovery efforts to propose a new feature for Grab comparing ride fares for all pick-up points within a 5-minute radius
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-wrap mb-3">
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1">
                    User Research
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    User Design
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Figma
                  </span>
                </div>
                
                <a
                  href="https://github.com/kohchloe/WAD2-LifeBelowWater"
                  className="h-[36px] bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Project Card 8 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-3">
                <div className="text-gray-600 my-2">2023 | Machine Learning</div>
                <h3 className="text-blue-500 text-xl font-bold">FooDeTech</h3>
              </div>

              <div className="mb-3">
                Researched and pitched ways to promote usage of Electric Vehicles in Singapore, specifically through technology
                and education; emerged as Top 12 out of over 200 teams
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-wrap mb-3">
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1">
                    Market Research
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Design
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Figma
                  </span>
                </div>
                
                <a
                  href="https://github.com/kohchloe/DMBA-SentimentTunes"
                  className="h-[36px] bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Project Card 6 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-3">
                <div className="text-gray-600 my-2">2022 | Design & Prototyping</div>
                <h3 className="text-blue-500 text-xl font-bold">Accenture University Innovation Challenge</h3>
              </div>

              <div className="mb-3">
                Researched and pitched ways to promote usage of Electric Vehicles in Singapore, specifically through technology
                and education; emerged as Top 12 out of over 200 teams
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-wrap mb-3">
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1">
                    Market Research
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Design
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Figma
                  </span>
                </div>
                
                <a
                  href="https://github.com/kohchloe/DMBA-SentimentTunes"
                  className="h-[36px] bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
          </div>

           {/* <!-- Project Card 7 --> */}
           <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-3">
                <div className="text-gray-600 my-2">2022 | Design & Prototyping</div>
                <h3 className="text-blue-500 text-xl font-bold">MunchBunch</h3>
              </div>

              <div className="mb-3">
                Researched and pitched ways to promote usage of Electric Vehicles in Singapore, specifically through technology
                and education; emerged as Top 12 out of over 200 teams
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-wrap mb-3">
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1">
                    Market Research
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Design
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Figma
                  </span>
                </div>
                
                <a
                  href="https://github.com/kohchloe/DMBA-SentimentTunes"
                  className="h-[36px] bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Project Card 8 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-3">
                <div className="text-gray-600 my-2">2022 | Web Scraping</div>
                <h3 className="text-blue-500 text-xl font-bold">CSS</h3>
              </div>

              <div className="mb-3">
                Researched and pitched ways to promote usage of Electric Vehicles in Singapore, specifically through technology
                and education; emerged as Top 12 out of over 200 teams
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-wrap mb-3">
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1">
                    Market Research
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Design
                  </span>
                  <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    Figma
                  </span>
                </div>
                
                <a
                  href="https://github.com/kohchloe/DMBA-SentimentTunes"
                  className="h-[36px] bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Figma Prototype
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
    
  )
}

export default ProjectCards
