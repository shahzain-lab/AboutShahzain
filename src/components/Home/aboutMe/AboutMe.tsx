import { Link } from 'gatsby'
import React from 'react'
import diary from '../../../assets/home/diary.png';

const AboutMe = () => {
    return (
        <div className='w-full min-h-screen flex lg:flex-col-reverse lg:mb-8 flex-row justify-between items-center'>
            <div className='lg:w-full w-1/2'>
                <h2 className='lg:hidden capitalize text-5xl lg:text-3xl font-["Open_Sans"] font-bold text-gray-100 px-6'>Who am I</h2>
                <div className="lg:hidden h-1 mx-10 w-1/3 lg:w-1/4 bg-fuchsia-600 mb-8"></div>
                <p className='text-slate-300 leading-relaxed text-xl lg:text-md md:text-sm font-normal indent-20 lg:indent-10 sm:indent-0 font-serif px-6'><span className='text-5xl md:text-3xl font-semibold'>I</span> build modern front-end applications with the latest tools and technologies that are highly popular on the internet.I have two-year
                    of experience on building attractive and responsive front-end applications.In my learning journey,I built many cool and real-world projects that made me super confident front-end developer.Making your website blazingly fast, SEO-friendly and access-able by using frameworks like Gatsbyjs, typescript, reactjs and others.
                    I build applications not just writing code and paint on the browser but also make them scaleable,interactive and user-friendly.
                    curious about what I
                    built.please take a few minutes and <Link to="what-i-built" className='font-semibold text-fuchsia-600 hover:text-pink-700'>checkout &rarr;</Link>
                </p>
                <button className="px-4 md:px-2 py-2 m-10 text-white font-semibold cursor-pointer rounded bg-fuchsia-600 hover:bg-fuchsia-700">Download Resume</button>
            </div>
            <div className='lg:w-full w-1/2 px-4'>
                <img
                    src={diary}
                    alt="aboutShahzain-about"
                    title="aboutShahzain-about"
                    className="w-full"
                />

            </div>
            <div className='text-left lg:w-full'>
                <h2 className=' hidden lg:flex capitalize lg:text-3xl font-["Open_Sans"] font-bold text-gray-100 px-6'>Who am I</h2>
                <div className=" hidden lg:flex h-1 mx-10 w-1/3 lg:w-1/4 bg-fuchsia-600 mb-8"></div>
            </div>
        </div>
    )
}

export default AboutMe
