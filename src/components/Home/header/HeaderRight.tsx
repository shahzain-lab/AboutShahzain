import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import gsap from 'gsap/all';


const HeaderRight = () => {
    useEffect(() => {
        gsap.to('.model', {
            scale: 1,
            x: 20,
            duration: 3,
            yoyo: true,
            repeat: -1,
        })
        gsap.utils.toArray(['.redcube', '.yellowcube']).forEach((el: any) => {
            gsap.to(el, {
                rotation: '360',
                duration: 10,
                yoyo: true,
                repeat: -1,
            })
        })
    }, [])

    return (
        <div className='flex md:absolute md:inset-y-0 md:left-0 md:top-20 md:brightness-50 flex-col justify-center items-center w-1/2 md:w-full'>
            <div className="flex w-full justify-around items-center">
                <StaticImage
                    placeholder='blurred'
                    src='../../../assets/redcube.png'
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/6 md:w-16 redcube'
                />
                <StaticImage
                    placeholder='blurred'
                    src='../../../assets/star.png'
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/4 md:w-24 puzzle'
                />
            </div>
            <div className="flex w-full justify-around items-center">
                <StaticImage
                    placeholder='blurred'
                    src='../../../assets/puzzle.png'
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/5 md:w-16'
                />
                <StaticImage
                    placeholder='blurred'
                    src='../../../assets/myart.png'
                    alt="aboutShahzain-logo"
                    title="aboutShahzain-logo"
                    className='w-3/4 my-4 model'
                />
            </div>
            <div className="flex w-full justify-around items-center">

                <StaticImage
                    placeholder='blurred'
                    src='../../../assets/ring.png'
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/6 md:w-16'
                />
                <StaticImage
                    placeholder='blurred'
                    src='../../../assets/yellowcube.png'
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/6 md:w-16 yellowcube'
                />
            </div>
        </div>
    )
}

export default HeaderRight
