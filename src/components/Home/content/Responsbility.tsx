import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Responsbility = () => {
    return (
        <div className='w-full'>
            <StaticImage
                src="../../../assets/time.jpg"
                placeholder='blurred'
                alt="shahzain-content-img"
                title="shahzain-content-img"
                className='absolute h-full w-full top-0 left-0 opacity-30'
            />
            <div className='mb-72'>
                <h1 className="text-5xl md:text-3xl sm:text-2xl text-white font-semibold capitalize">delivering your production ready ideas on time</h1>
                <p className='mt-10 text-2xl md:text-xl sm:sm leading-10'>I know that time is money in business.I accelerate the development process by completing tasks ahead of schedule.with my productive workflow,I build and deliver projects on time.I take your project requirement seriously that satisfy the end users need. </p>
            </div>
        </div>
    )
}

export default Responsbility
