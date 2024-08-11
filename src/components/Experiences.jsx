import React from 'react'

const Experiences = () => {
  return (
    <>
        <div role="tablist" className="tabs tabs-bordered">
        <span class="tab w-[calc((100vw-200px)/2)]">&nbsp;</span>

            <input
                type="radio"
                name="experience_tabs"
                role="tab"
                className="tab"
                aria-label="Work"
                defaultChecked />
            <div role="tabpanel" className="tab-content p-10">
                
                {/* Leadership Experience */}
                <ul className="timeline timeline-compact timeline-snap-icon timeline-vertical mx-24">

                    {/* Experience 1 */}
                    <li>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">Dec 2023 - Jan 2024</time>
                        <div className="text-lg text-primary">Data Product Manager Intern</div>
                        <div className="text-lg text-secondary">Urban Redevelopment Authority</div>
                            I improved data extraction efficiency and reliability for a data hub by establishing data governance frameworks,  leading user journey mapping efforts, and developing entity-relation diagrams for various datasets.
                        </div>
                        <hr />
                    </li>

                    {/* Experience 2 */}
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">Aug 2023 - Oct 2023</time>
                        <div className="text-lg text-primary">Product Management Experience</div>
                        <div className="text-lg text-secondary">SMU Product Club</div>
                            I conducted comprehensive user and product discovery efforts to propose GrabCompare.
                        </div>
                        <hr />
                    </li>

                    {/* Experience 3 */}
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">May 2023 - Aug 2023</time>
                        <div className="text-lg text-primary">Business Analyst & UX/UI Intern</div>
                        <div className="text-lg text-secondary">Accenture Singapore</div>
                            I optimised dashboards, designed solution architecture and process flow diagrams. 
                            <br/>I also conducted detailed user research and user interviews with stakeholders.
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>

            <input type="radio" name="experience_tabs" role="tab" className="tab" aria-label="Leadership" />
            <div role="tabpanel" className="tab-content p-10">
                {/* Leadership Experience */}
                <ul className="timeline timeline-compact timeline-snap-icon timeline-vertical mx-24">
                    {/* Experience 1 */}
                    <li>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">Jan 2023 - Dec 2023</time>
                        <div className="text-lg text-primary">Vice-President</div>
                        <div className="text-lg text-secondary">SMU Ellipsis, School of Computing and Information Systems</div>
                            I led a team.
                        </div>
                        <hr />
                    </li>
                    {/* Experience 2 */}
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">Jan 2022 - Dec 2022</time>
                        <div className="text-lg text-primary">Welfare Executive</div>
                        <div className="text-lg text-secondary">SMU Ellipsis, School of Computing and Information Systems</div>
                            I organised welfare drives.
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
            
            <span class="tab"></span>
            
        </div>
        <div className="divider"></div>
    </>
  )
}

export default Experiences
