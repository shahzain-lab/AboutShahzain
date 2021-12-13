import { Link } from 'gatsby'
import React from 'react'
import diary from '../../../assets/home/diary.png'
import Container from '../../container'

const AboutMe = () => {
    return (
        <Container>
            <div className='w-1/2'>
                <h2 className='capitalize text-5xl font-bold text-gray-100 py-8 px-6'>Whats about me</h2>
                <p className='text-slate-300 leading-relaxed text-xl font-normal indent-20 font-serif px-6'><span className='text-5xl font-semibold'>I</span> am modern front-end developer.
                    I used to build front-end applications with the
                    latest tools and technologies that are highly popular
                    on the internet.Two-year of experience in exploring new technolgy
                    stack.Through my learning journey,I built many cool and real-world
                    project that made me super confident front-end developer.
                    I build applications not just writing code and paint on the browser but
                    also make them scaleable,interactive and user-friendly.curious about what I
                    built.please take a few minutes and <Link to="what-i-built" className='font-semibold text-fuchsia-600 hover:text-pink-700'>checkout &rarr;</Link>
                </p>
            </div>
            <div className='w-1/2 px-4'>
                <img
                    src={diary}
                    alt="aboutShahzain-about"
                    title="aboutShahzain-about"
                    className="w-full"
                />
            </div>
        </Container>
    )
}

export default AboutMe
