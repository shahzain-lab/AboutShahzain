import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaAssistiveListeningSystems, FaCode, FaLocationArrow } from 'react-icons/fa'
import { HiOutlineAcademicCap } from 'react-icons/hi';

const Workflow = () => {
    return (
        <div className='bg-black py-6 text-white relative'>
            <StaticImage placeholder='blurred' src={'../../../assets/home/wave_page.svg'} alt='bg-lines' className='absolute w-full my-auto lg:top-64 lg:rotate-90' />

            <div className='w-full text-center'>
                <h4 className=' text-xl font-["Open_Sans"] uppercase text-fuchsia-500'>&#9741; How I DO</h4>
                <h2 className='text-4xl   text-slate-300 font-["Open_Sans"] capitalize '>My Workflow process</h2>
            </div>
            <div className='bg-cover pr-20 w-full mx-14 my-16 flex justify-around md:flex-col items-center'>
                <div className='lg:w-full w-1/5 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    <FaAssistiveListeningSystems className='text-3xl text-amber-400' />
                    <h3>Kick off</h3>
                    <p>During my initial consultation, I determine customers target, and demands.Doing so ensures we are on the right track.</p>
                </div>
                <div className='lg:w-full w-1/5 border-2  bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    <FaLocationArrow className='text-3xl text-cyan-400' />
                    <h3>Strategy</h3>
                    <p> The goal is to come up with a comprehensive action plan for the development stage,Then I move forward with special purpose in mind.</p>
                </div>
                <div className='lg:w-full w-1/5 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    <FaCode className='text-4xl text-pink-600' />
                    <h3>Development</h3>
                    <p>In this phase, I code along followed by the well-structured architecture. I delivers a consistent experience across different screen resolutions. </p>
                </div>
                <div className='lg:w-full w-1/5 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    <HiOutlineAcademicCap className='text-4xl text-violet-600' />
                    <h3>Reviews</h3>
                    <p>After development,when your app is ready to be deploy I again test and reviews all the features that I built and then deliver on time.</p>
                </div>
            </div>

        </div>
    )
}

export default Workflow
