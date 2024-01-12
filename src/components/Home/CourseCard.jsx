import React from 'react'

export default function CourseCard({
    courseImg="",
    instructorImg="",
    instructorName="",
    markedFav=false,
    courseTitle="",
    courseLength="",
    lessonNumber=0,
    ratings=0,
}) {
  return (
    <div className=' p-4 bg-white rounded-lg'>
        <div className=' bg-teal-600 w-full h-56 rounded-lg mb-4'><img src={courseImg} alt="" /></div>
        <div className=' flex justify-between items-center'>
            <div className='w-full'>
                <span className=' border border-gray-600 bg-green-500 float-left rounded-full w-9 h-9 mr-2 mt-1'><img src={instructorImg} alt="" /></span>
                <div><h4 className='blue-text font-semibold'>{instructorName}</h4><p className='text-xs'>Instructor</p></div>
            </div>
            <span className='pink-text font-bold'>H</span>
        </div>
        <h3 className=' blue-text-small my-5 w-[80%]'>{courseTitle}</h3>
        <div className=' flex justify-between mb-4'>
            <p>Lesson</p>
            <p>{courseLength}</p>
        </div>
        <hr className=' border-t border-t-gray-400/50' />
        <div className=' flex justify-between items-center mt-4 '>
            <div>* * * * *</div>
            <button className=' py-2 px-4 rounded-full border-2 border-purple-700/50 text-deep-purple-900 '>Buy Now</button>
        </div>
    </div>
  )
}
