import React, { useState } from 'react'
import { FaAssistiveListeningSystems } from 'react-icons/fa'
import Availability from './Availability'
import Communication from './Communication'
import Responsbility from './Responsbility'

const Content = () => {
    const [state, setState] = useState(false);
    const [context, setContext] = useState('Availability');

    const activeClass = 'border-l-4 border-l-fuchsia-600';

    return (
        <div className='h-screen md:min-h-screen w-full relative bg-black flex md:flex-col justify-between px-10 items-center text-white'>

            <div className='w-1/2 md:w-full text-center z-10'>
                <div onClick={() => { setState(true); setContext('Responsibility') }} className={`cursor-pointer md:w-full w-1/2 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800 ${context === 'Responsibility' ? activeClass : ''}`}>
                    <FaAssistiveListeningSystems className='text-3xl  text-amber-400' />
                    <h3>Responsibility</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
                <div onClick={() => { setState(true); setContext('Availability') }} className={`cursor-pointer md:w-full w-1/2 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800 ${context === 'Availability' ? activeClass : ''}`}>
                    <FaAssistiveListeningSystems className='text-3xl  text-amber-400' />
                    <h3>Availability</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
                <div onClick={() => { setState(true); setContext('Communication') }} className={`cursor-pointer md:w-full w-1/2 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800 ${context === 'Communication' ? activeClass : ''}`}>
                    <FaAssistiveListeningSystems className='text-3xl  text-amber-400' />
                    <h3>Communication</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
            </div>
            <div className='w-1/2 md:w-full'>
                {state
                    && context === 'Responsibility' ? <Responsbility /> : context === 'Availability' ? <Availability /> : <Communication />}
            </div>
        </div>
    )
}

export default Content
