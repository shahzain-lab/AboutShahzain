import React from 'react'
import commun from "../../../assets/commun.jpg"

const Communication = () => {
    return (
        <div className=''>
            <img
                src={commun}
                alt="shahzain-content-img"
                title="shahzain-content-img"
                className='absolute h-full w-full top-0 left-0 opacity-30'
            />
            <div className='mb-72'>
                <h1 className="text-5xl text-white font-semibold capitalize">FLEXIBLE APPROACH TO COOPERATION</h1>
                <p className='mt-10 text-2xl leading-10'>I communicate constantly with my clients to give them updates as I progress and get projects launched by the agreed launch date.Whether you just want a chat, or start a
                    project, feel free contact me </p>
            </div>
        </div>
    )
}

export default Communication
