import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Communication = () => {
    return (
        <div className=''>
            <StaticImage
                placeholder='blurred'
                src="../../../assets/commun.jpg"
                alt="shahzain-content-img"
                title="shahzain-content-img"
                className='absolute h-full w-full top-0 left-0 opacity-30'
            />
            <div className='mb-72'>
                <h1 className="text-5xl lg:text-3xl md:text-2xl sm:text-xl 2sm:text-md text-white font-semibold capitalize">Flexible approach to cooperation</h1>
                <p className='mt-10 text-2xl lg:text-xl md:text-md sm:text-sm 2sm:text-[1rem] leading-10'>I communicate constantly with my clients to give them updates as I progress and get projects launched by the agreed launch date.Whether you just want a chat, or start a
                    project, feel free contact me. </p>
            </div>
        </div>
    )
}

export default Communication
