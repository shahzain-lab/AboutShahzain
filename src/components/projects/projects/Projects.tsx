import React from 'react'
import Sort from '../sorts/Sort'
import Project from './Project'

const Projects = () => {
    return (
        <div>
            <div className='w-screen text-center '>
                <h1 className='text-slate-100 text-4xl mt-10 font-normal indent-20 font-serif capitalize' > Build with modern technologies</h1>
                <p className='text-slate-300 mb-10  leading-relaxed text-xl font-normal indent-20 font-serif px-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatum.</p>
                <Sort />
            </div >
            <div>
                <Project />
            </div>
        </div >
    )
}

export default Projects
