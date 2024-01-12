import React from 'react'

const stats = [
    {icon: 'vite.svg', count: "1K", type: "Online Courses"},
    {icon: 'vite.svg', count: "20+", type: "Expert Tutors"},
    {icon: 'vite.svg', count: "0K+", type: "Certified Courses"},
    {icon: 'vite.svg', count: "6K+", type: "Online Students"},
]

function Stats() {
  return (
    <div className=' flex gap-4 mx-auto justify-center mt-16'>
        {
            stats.map((item)=> (
                <div key={item.type} className=' flex items-center rounded-xl bg-white p-5 min-w-48 border-gray-400/35 border'>
                    <img src={item.icon} alt="icon" className=' float-left mr-2 border rounded-2xl' width={40} height={40} />
                    <div className=' flex flex-col'>
                        <h3 className='blue-text-small'>{item.count}</h3>
                        <p className=' text-sm'>{item.type}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Stats