import React from 'react'
import Nav from '../components/Nav'
import Stats from '../components/Home/Stats'
import TopCatCard from '../components/Home/TopCatCard'
import AllOptionsBtn from '../components/AllOptionsBtn'
import CourseCard from '../components/Home/CourseCard'
import Reviews from '../components/Home/Reviews'
import Footer from '../components/Footer'

const featuredCourses = [
    {id: 0, courseImg: "", instructorImg: "", instructorName: "David Powell", markedFav: false, courseTitle: "Complete HTML, CSS and Javascript Course", lessonNumber: 0, courseLength: "30 minutes", ratings: 0},
    {id: 1, courseImg: "", instructorImg: "", instructorName: "David Powell", markedFav: false, courseTitle: "Complete HTML, CSS and Javascript Course", lessonNumber: 0, courseLength: "30 minutes", ratings: 0},
    {id: 2, courseImg: "", instructorImg: "", instructorName: "David Powell", markedFav: false, courseTitle: "Complete HTML, CSS and Javascript Course", lessonNumber: 0, courseLength: "30 minutes", ratings: 0},
    {id: 3, courseImg: "", instructorImg: "", instructorName: "David Powell", markedFav: false, courseTitle: "Complete HTML, CSS and Javascript Course", lessonNumber: 0, courseLength: "30 minutes", ratings: 0},
    {id: 4, courseImg: "", instructorImg: "", instructorName: "David Powell", markedFav: false, courseTitle: "Complete HTML, CSS and Javascript Course", lessonNumber: 0, courseLength: "30 minutes", ratings: 0},
    {id: 5, courseImg: "", instructorImg: "", instructorName: "David Powell", markedFav: false, courseTitle: "Complete HTML, CSS and Javascript Course", lessonNumber: 0, courseLength: "30 minutes", ratings: 0},
]

const info = [
    {icon: "vite.svg", text: "ContentStay motivated with engaging instructors"},
    {icon: "vite.svg", text: "Keep up with in the latest in cloud"},
    {icon: "vite.svg", text: "Get certified with 100+ certification courses"},
    {icon: "vite.svg", text: "Buid skills you way, from labs to courses"},
]

function Home() {
  return (
    <div className='w-screen h-screen'>
        <section className='color-gradient w-full h-4/5 relative'>
            <Nav/>
            <div className='flex pl-32 pr-16 mt-14 items-center'>
                <div className=' w-3/4 flex flex-col gap-6'>
                    <p>The Leader in Online Learning</p>
                    <h1 className='blue-text-large max-w-[30%]'>Engaging & Accessible Online Courses For All</h1>
                    <input type="search" name="" id="" className=' w-3/5 rounded-full p-4 outline-none'
                     placeholder='Search School, Online educational centres, etc.' />
                    <p className=' w-1/4 '>Trusted by over 15K Users worlwide since 2022</p>
                    <div className='flex gap-4'><h3 className='blue-text-large'>290+</h3><h3 className='blue-text-large'>4.5 <span>*****</span></h3></div>
                </div>
                <div><img src="vite.svg" alt="home-img" width={250} height={250} /></div>
            </div>
            <Stats />
        </section>
        <section className='p-32 pb-16'>
            <SectionHeader headings={{para: "Favourite Courses", head: "Top Category"}} optionName='Categories'/>
            <TopCatCard/>
        </section>
        <section className='px-32 py-16 color-gradient'>
            <SectionHeader headings={{para: "What's New", head: "Featured Courses"}} optionName='Courses'/>
            <main className=' grid grid-cols-3 gap-4 '>
                {
                    featuredCourses.map((item)=> (
                        <div key={item.id}>
                            <CourseCard {...item} />
                        </div>
                    ))
                }
            </main>
        </section>
        <section className='px-32 py-16'>
            <SectionHeader headings={{para: "What's New", head: "Master the skills to drive your career"}} showAllBtn={false}/>
            <main className=' w-[55%] grid grid-cols-2 gap-5'>
                {
                    info.map((item)=> (
                        <div key={item.text} className='border border-gray-400/45 h-24 px-6 rounded-xl flex items-center gap-5'>
                            <img src={item.icon} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </main>
        </section>
        <section>
            <div className=' h-[50vh] bg-black/70 text-center pt-16 '>
                <p className='text-white'>Check out these real reviews</p>
                <h1 className='text-white font-semibold text-3xl mt-6'>Users-love-us Don't take it from us.</h1>
            </div>
            <main className=' w-full flex flex-col items-center px-32 pb-16'>
                <Reviews />
                <div className=' flex w-full gap-4 mt-16'>
                    <div className='w-1/2 h-48 rounded-xl p-6 bg-pink-400/80'>
                        <h3 className=' blue-text-small mb-4'>Become An Instructor</h3>
                        <p className=' w-[48%]'>Top instructors from around the world teach millions of students on Mentoring.</p>
                    </div>
                    <div className='w-1/2 h-48 rounded-xl p-6 bg-yellow-600/80'>
                        <h3 className=' blue-text-small mb-4'>Transform Access To Education</h3>
                        <p className='w-[48%]'>Create an account to receive our newsletter, course recommendations and promotions.</p>
                    </div>
                </div>
            </main>
        </section>
        <Footer />
    </div>
  )
}

const SectionHeader = ({
    headings={para: "", head: "", desc:""},
    showAllBtn=true,
    optionName="",
    className="",
    handleExpand=()=> {}
})=> {
    return (
        <div className=' flex justify-between mb-8'>
            <div className=' flex flex-col gap-4'>
                <p className='pink-text font-bold'>{headings.para}</p>
                <h3 className='blue-text-large'>{headings.head}</h3>
                <p className=' w-2/3'>{headings.desc || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque beatae praesentium dolorum dicta velit incidunt quam hic at reiciendis minima!"}</p>
            </div>
            { showAllBtn && <span className='mt-2'><AllOptionsBtn className={className} handleExpand={handleExpand} optionName={optionName}/></span> }
        </div>
    )
}

export default Home