import React from 'react'
import lifeBelowWater from '../assets/images/lifeBelowWater.png'
import merGIS from '../assets/images/merGIS.png'
import sentiTunes from '../assets/images/sentiTunes.png'
import munchBunch from '../assets/images/munchBunch.png'
import CSS from '../assets/images/CSS.png'
import SIA from '../assets/images/SIA.png'
import PME from '../assets/images/PME.png'

const ProjectCards = () => {
  return (

    <section id='projects'>
      <div className="container-xl lg:container m-auto py-10">
        <div className="text-center">
          <h2 className="text-4xl pt-10 pb-4 font-bold sm:text-2xl md:text-5xl">
              My Design Portfolio
          </h2>
          <p className="text-black font-regular text-base lg:text-lg mx-8">I believe good design is the cornerstone of every project, check out some of my design works here ◡̈</p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-lg">
        
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
                  href="#"
                  className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                  style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  View Figma Prototype
              </a>
            </div>
          </div>

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
                  View Figma Prototype
              </a>
            </div>
          </div>

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
                  View Figma Prototype
              </a>
            </div>
          </div>

        
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
                  View Figma Prototype
              </a>

            </div>
          </div>

        </div> */}
      </div>
    </section>
    
  )
}

export default ProjectCards
