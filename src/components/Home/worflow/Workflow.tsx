import React from 'react'
import { FaAssistiveListeningSystems, FaCode, FaLocationArrow } from 'react-icons/fa'
import { HiOutlineAcademicCap } from 'react-icons/hi'

const Workflow = () => {
    return (
        <div>
            <div className='w-full text-center'>
                <h4 className='text-xl font-["Open_Sans"] uppercase text-fuchsia-500'>&#9741; How I DO</h4>
                <h2 className='text-4xl text-slate-300 font-["Open_Sans"] capitalize '>My Workflow process</h2>
            </div>
            <div className='bg-cover mx-14 my-16 bg-[url("https://www.camo.ee/wp-content/themes/camo/img/serv-animation/serv-line.svg")]'>
                <div>
                    <FaAssistiveListeningSystems className='text-3xl text-amber-400' />
                    <h3>User stories</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
                <div>
                    <FaLocationArrow className='text-3xl text-cyan-400' />
                </div>
                <div>
                    <FaCode className='text-4xl text-pink-600' />
                </div>
                <div>
                    <HiOutlineAcademicCap className='text-4xl text-violet-600' />
                </div>
            </div>

        </div>
    )
}

export default Workflow
