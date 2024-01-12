import React from 'react'

const footerItems = [
    {head: "For Instructor", list: ["Profile", "Login", "Register", "Instructor", "Dashboard"]},
    {head: "For Student", list: ["Profile", "Login", "Register", "Student", "Dashboard"]},
]

function Footer() {
  return (
    <footer className='w-screen px-32 pt-16 bg-[var(--pink)] text-white'>
        <main className='grid grid-cols-4'>
            <div>
                <h3 className=' text-white text-xl font-semibold'>News Letter</h3>
                <ul>
                    <li>3556 Beech Street, San Francisco, Calfornia, CA 94108</li>
                    <li>+19 123-456-7890</li>
                    <li>dreamslms@example.com</li>
                </ul>
            </div>
            {
                footerItems.map((item)=> (
                <div key={item.head}>
                    <h3 className=' text-white text-xl font-semibold'>{item.head}</h3>
                    <ul>
                        {item.list.map((listItem)=> (
                            <li key={listItem}><a href="">{listItem}</a></li>
                        ))}
                    </ul>
                </div>
                ))
            }
            <div>
                <h3 className=' text-white text-xl font-semibold'>Get More Updates</h3>
                <div className='w-full h-12 bg-white flex my-5 rounded p-1 justify-between'>
                    <input type="email" placeholder='Enter your email address' className=' w-4/5 p-3 outline-none text-black'/>
                    <button className='bg-[var(--pink)] p-2 h-[98%] rounded'>Submit</button>
                </div>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laboriosam quo molestias blanditiis ratione odit tempore?</p>
            </div>
        </main>
        <hr className=' border-t border-t-white mt-6'/>
        <div className='flex justify-between py-6'>
            <span><a href="">Categories</a> | <a href="">Policy</a></span>
            <span>&copy; Dreams LMS. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer