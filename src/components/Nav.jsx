import React from 'react'

const navOptions = [
    {
        name: "Home",
        route: '/',
    }, 
    {
        name: "About Us",
        route: '/about-us',
    }, 
    {
        name: "Instructors",
        dropdown: [{}]
    }, 
    {
        name: "Students",
        dropdown: [{}]
    }, 
    {
        name: "Pages",
        dropdown: [{}]
    }, 
    {
        name: "Blog",
        dropdown: [{}]
    }, 
    {
        name: "Contact Us",
        route: '/contact-us',
    }, 
]

function Nav() {
  return (
    <div className='w-full py-4 px-32 bg-transparent'>
        <nav className='flex justify-between'>
            <div>
                <span><img src="vite.svg" alt="logo" /></span>
            </div>

            <ul className='flex ml-12 gap-8'>
                {navOptions.map((item)=> (
                    item.route? 
                    // {NavLink of react-router-dom could be used for styling upon isActive}
                    <li key={item.name} href={item.route} className={`${item.name==="Home" ? 'pink-text' : 'text-gray-600'} font-semibold text-lg` }>
                        {item.name}
                    </li> :
                    <li key={item.name} className='font-semibold text-lg text-gray-600'>
                        {item.name}
                    </li>
                ))}
            </ul>

            <div>
                <span>
                    <img src="vite.svg" alt="profile-img" />
                </span>
            </div>
        </nav>
    </div>
  )
}

export default Nav