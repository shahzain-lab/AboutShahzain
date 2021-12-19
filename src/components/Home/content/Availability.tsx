import React from 'react';
import cup_coffee from "../../../assets/cup_coffee.jpg"

const Availability = () => {
    return (
        <div className=''>
            <img
                src={cup_coffee}
                alt="shahzain-content-img"
                title="shahzain-content-img"
                className='absolute h-full w-full opacity-30 top-0 left-0'
            />
            <div className='mb-72'>
                <h1 className="text-5xl text-white font-semibold capitalize">24/7 help you shape and build your brand.</h1>
                <p className='mt-10 text-2xl leading-10'>I am available to take on take on feedback and tweaks or changes as required.I devote my undivided attention to writing every line of code, which is a proof of a well-defined methodology and impeccable reasoning.</p>
            </div>
        </div>
    )
}

export default Availability
