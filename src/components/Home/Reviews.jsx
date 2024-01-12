import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react"

export default function Reviews() {
  return (
    <div className='w-[70%] -mt-[15%]'>
        <Carousel 
            className=' h-[60vh] border-[12px] border-gray-100 rounded-3xl bg-review'
            prevArrow={({loop, handlePrev, firstIndex }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  disabled={!loop && firstIndex}
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-8 -translate-y-2/4 bg-white rounded-none size-8 text-purple-700 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ loop, handleNext, lastIndex }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  disabled={!loop && lastIndex}
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-8 -translate-y-2/4 bg-white rounded-none size-8 text-purple-700 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}>
            <ReviewCard reviewerName='Daziy Millar' reviewerType='Managing Director'/>
            <ReviewCard reviewerName='Dork Franklin' reviewerType='Student'/>
            <ReviewCard reviewerName='Kevin Stark' reviewerType='Student'/>
        </Carousel>
    </div>
  )
}

const ReviewCard = ({review="", reviewerImg="", reviewerName="", reviewerType=""})=> {
    return (
        <div className=' pt-16 px-12 text-center '>
            <p className=' text-white font-medium '>{review || '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, tempore placeat adipisci repellendus velit quibusdam. Recusandae, fuga dolorum illum itaque ab consectetur aperiam corrupti quos autem quia ex sit reiciendis nesciunt architecto consequuntur expedita nihil libero quis fugiat eos. Consequuntur, sit. Harum fugiat dolores sit assumenda ea debitis sunt placeat."'}</p>
            <div className=' flex flex-col gap-3 items-center mt-12'>
                <img src={reviewerImg || "vite.svg"} alt="" width={80} height={80} className=' rounded-full bg-blue-gray-400'/>
                <h3 className='blue-text-small'>{reviewerName}</h3>
                <p>{reviewerType}</p>
            </div>
        </div>
    )
}