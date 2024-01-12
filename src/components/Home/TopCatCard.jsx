import React from 'react'
import { Carousel } from '@material-tailwind/react'

const categories = [
    [
        {icon: "vite.svg", name: "Angular", number: 4},
        {icon: "vite.svg", name: "Bootstrap", number: 3},
        {icon: "vite.svg", name: "CSS3", number: 3},
        {icon: "vite.svg", name: "Docker Development", number: 2},
    ],
    [
        {icon: "vite.svg", name: "React", number: 4},
        {icon: "vite.svg", name: "TailwindCSS", number: 1},
        {icon: "vite.svg", name: "NodeJs", number: 3},
        {icon: "vite.svg", name: "MongoDB", number: 2},
    ] 
]

function TopCatCard() {
  return (
    <div className='w-full h-64'>
        <Carousel 
            className=''
            loop
            autoplay
            autoplayDelay={5000}
            transition={{
                type: "spring",
                duration: 0.5
            }}
            prevArrow={()=> {}} 
            nextArrow={()=> {}}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-4 cursor-pointer rounded-full transition-all duration-300 content-[''] ${
                        activeIndex === i ? "w-12 bg-[var(--pink)] " : "w-4 bg-[var(--pink-light)]"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
            {
                categories.map((halfs, index)=> (
                    <div key={index} className='w-full flex gap-4 '>
                        {
                            halfs.map((item)=> (
                                <div key={item.name} className=' h-52 flex flex-1 flex-col gap-4 justify-around items-center border rounded-md border-gray-400/45'>
                                    <img src={item.icon} alt={item.name} width={80} height={80} />
                                    <div className=' text-center'>
                                        <h3 className='blue-text-small'>{item.name}</h3>
                                        <p>{item.number} Courses</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </Carousel>
    </div>
  )
}

export default TopCatCard