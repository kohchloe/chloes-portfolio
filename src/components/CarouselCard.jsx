import React from 'react'

const CarouselCard = ({ mockup, title, description, badge, link, linkInfo }) => {
  return (
    <a href="#" target="__blank" className="inline-block">

            <div class="bg-white bg-opacity-30 border border-gray-200 rounded-xl m-4 shadow-xl">
            <figure class="px-8 pt-6">
                <img
                src={mockup}
                alt="Mockup"
                class="rounded-xl" />
            </figure>
            <div className="card-body text-black">
            <h2 className="card-title text-primary font-bold">
                {title}
            </h2>
            <p>{description}</p>

            <a
                href={link} target='_blank'
                className="h-[36px] bg-primary hover:bg-secondary text-white my-1 py-2 rounded-lg text-center text-sm"
                style-={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                {linkInfo}
            </a>
        </div>
        </div>

    </a>
  )
}

export default CarouselCard
