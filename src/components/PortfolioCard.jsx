import React from 'react'
import { useInView } from "react-intersection-observer";

const PortfolioCard = ({ href, mockup, year, category, title, description, badge, link, linkInfo }) => {
    const { ref: myRef, inView: myElementIsVisible } = useInView({
        triggerOnce: true,
    });

    return (
    <a href={href} target="__blank" className="inline-block">
        <div
            ref={myRef}
            className={`fade-in text-secondary rounded-2xl sm:w-4/6 md:w-full lg:w-6/6 mx-auto hover:scale-105 transition duration-200 ${
            myElementIsVisible ? "appear" : ""
            }`}
        >
            <div class="bg-white bg-opacity-30 border border-gray-200 rounded-xl p-4 shadow-xl">
            <figure class="px-8 pt-8">
                <img
                src={mockup}
                alt="Mockup"
                class="rounded-xl" />
            </figure>
            <div className="card-body text-black">
            <p>{year} | {category}</p>
            <h2 className="card-title text-primary font-bold">
                {title}
            </h2>
            <p>{description}</p>

            {/* <div className="border border-gray-100 mb-2"></div> */}

            <div className="card-actions justify-left mt-2">
                <div className="badge badge-outline p-3">{badge}</div>
            </div>

            <a
                href={link} target='_blank'
                className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                {linkInfo}
            </a>
        </div>
        </div>

        </div>
    </a>
    );
};

export default PortfolioCard