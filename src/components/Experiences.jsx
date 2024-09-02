import React from 'react'

const Experiences = () => {
  return (
    <section id='experiences'>
        <div className="container mx-auto py-10">

            <h2 className="text-center text-4xl py-10 font-bold sm:text-2xl md:text-5xl">
                My Experiences
            </h2>
            
            {/* Tabs */}
            <div role="tablist" className="tabs tabs-bordered">
            <span class="tab w-[calc((100vw-25vw)/2)]">&nbsp;</span>

                <input
                    type="radio"
                    name="experience_tabs"
                    role="tab"
                    className="tab"
                    aria-label="Work"
                    defaultChecked />
                <div role="tabpanel" className="tab-content p-10">
                    
                    {/* Timeline for Tab 1 */}
                    <ol class="relative border-s border-gray-600">                  
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-600">Dec 2023 - Jan 2024</time>
                            <h3 class="text-base md:text-lg font-semibold text-gray-900">Data Manager Intern @ Urban Redevelopment Authority</h3>
                            <p class="mb-4 text-sm md:text-base text-gray-600">I improved data extraction efficiency and reliability for a data hub by establishing data governance frameworks,  leading user journey mapping efforts, and developing entity-relation diagrams for various datasets.</p>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-600">Aug 2023 - Oct 2023</time>
                            <h3 class="text-base md:text-lg font-semibold text-gray-900">Product Manager @ SMU Product Club</h3>
                            <p class="text-sm md:text-base text-gray-600">I conducted comprehensive user and product discovery efforts for a new feature within Grab — GrabCompare; eventually winning 1st Place in the Internal Product Challenge!</p>

                            <a href="https://drive.google.com/file/d/1BoZMb1oteQ5xW1lpN6gvNI2b9RYCQX_X/view?usp=sharing" target="_blank" class="inline-flex items-center px-4 py-2 mt-2 button-rounded text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
                                View Winning Pitch Deck<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg></a>        
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-600">May 2023 - Aug 2023</time>
                            <h3 class="text-base md:text-lg font-semibold text-gray-900">Business Analyst Intern @ Accenture</h3>
                            <p class="text-sm md:text-base text-gray-600">I optimised dashboards, created solution architecture diagrams, and designed process flow diagrams for my client.</p>
                            <a href="https://www.accenture.com/content/dam/accenture/final/a-com-migration/r3-3/pdf/pdf-177/accenture-changi-airport-client-story.pdf" target="_blank" class="inline-flex items-center px-4 py-2 mt-2 button-rounded text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
                                Learn More<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg></a>    
                        </li>
                        <li class="ms-4">
                            <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-600">May 2023 - Aug 2023</time>
                            <h3 class="text-base md:text-lg font-semibold text-gray-900">(Double-hatted as an) UX/UI Intern @ Accenture</h3>
                            <p class="text-sm md:text-base text-gray-600">I conducted in-depth user research and user interviews with various stakeholders to improve air-side safety in the aviation industry.</p>
                        </li>
                    </ol>
                </div>

                <input type="radio" name="experience_tabs" role="tab" className="tab" aria-label="Leadership" />
                <div role="tabpanel" className="tab-content p-10">
                    
                    {/* Timeline for Tab 2 */}
                    <ol class="relative border-s border-gray-600">              

                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-600">Jan 2023 - Dec 2023</time>
                            <h3 class="text-base md:text-lg font-semibold text-gray-900">Vice-President @ SMU School of Computing and Information Systems Society</h3>
                            <p class="mb-4 text-sm md:text-base text-gray-600">I set the overall strategic direction for my committee to ensure the execution of 35 events while focusing on students’ feedback and managing stakeholder relations.</p>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-600">Jan 2022 - Dec 2022</time>
                            <h3 class="text-base md:text-lg font-semibold text-gray-900">Welfare Executive @ Ellipsis</h3>
                            <p class="text-sm md:text-base text-gray-600">I planned and executed welfare initiatives for over 2,200 students, from sourcing to sponsors to distributing of collaterals.</p>
                        </li>
                    </ol>
                </div>
                
                {/* Extending Tab */}
                <span class="tab"></span>
            
            </div>
        </div>

    </section>
)
}

export default Experiences
