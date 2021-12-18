import React from 'react'
// import { FaAssistiveListeningSystems, FaCode, FaLocationArrow } from 'react-icons/fa'
// import { HiOutlineAcademicCap } from 'react-icons/hi'
import wave__page from '../../../assets/home/wave_page.svg'

const Workflow = () => {
    return (
        <div className='bg-black py-6 text-white relative'>
            <img src={wave__page} alt='d' className='absolute w-full mt-10' />
            <div className='w-full text-center'>
                <h4 className=' text-xl font-["Open_Sans"] uppercase text-fuchsia-500'>&#9741; How I DO</h4>
                <h2 className='text-4xl   text-slate-300 font-["Open_Sans"] capitalize '>My Workflow process</h2>
            </div>
            <div className='bg-cover pr-20 w-full mx-14 my-16 flex justify-around items-center'>
                <div className='w-1/5 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    {/* <FaAssistiveListeningSystems className='text-3xl text-amber-400' /> */}
                    <h3>User stories</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
                <div className='w-1/5 border-2  bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    {/* <FaLocationArrow className='text-3xl text-cyan-400' /> */}
                    <h3>User stories</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
                <div className='w-1/5 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    {/* <FaCode className='text-4xl text-pink-600' /> */}
                    <h3>User stories</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
                <div className=' w-1/5 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    {/* <HiOutlineAcademicCap className='text-4xl text-violet-600' /> */}
                    <h3>User stories</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
            </div>

        </div>
    )
}

export default Workflow
