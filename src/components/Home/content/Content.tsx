import React, { useState } from 'react'
import { FaAssistiveListeningSystems } from 'react-icons/fa'
import { AiOutlineFieldTime } from 'react-icons/ai'
import Availability from './Availability'
import Communication from './Communication'
import Responsbility from './Responsbility'
import availableIcon from '../../../assets/blocks/available.png';
import communIcon from '../../../assets/blocks/commun.png';
import responseIcon from '../../../assets/blocks/response.png';

const Content = () => {
    const [state, setState] = useState(false);
    const [context, setContext] = useState('Availability');

    const activeClass = 'border-l-4 border-l-fuchsia-600';

    return (
        <div className='h-screen lg:min-h-screen md:pb-4 w-full relative bg-black flex lg:flex-col justify-between px-10 items-center text-white'>

            <div className='w-1/2 lg:w-full text-center z-10'>
                <div onClick={() => { setState(true); setContext('Responsibility') }} className={`cursor-pointer lg:w-full w-1/2 border-2 bg-neutral-900 p-2 rounded-lg mb-8 md:mb-4 sm:mb-2 border-slate-800 ${context === 'Responsibility' ? activeClass : ''}`}>
                    <img src={responseIcon} className='w-1/3 lg:w-1/5 sm:1/6 mx-auto' />
                    <h3 className='text-xl lg:text-md sm:text-[12px]'>Responsibility</h3>
                    <p className='lg:text-sm sm:text-[8px]'>Delivering your production ready ideas on time</p>
                </div>
                <div onClick={() => { setState(true); setContext('Availability') }} className={`cursor-pointer lg:w-full w-1/2 border-2 bg-neutral-900 p-2 rounded-lg mb-8 md:mb-4 sm:mb-2 border-slate-800 ${context === 'Availability' ? activeClass : ''}`}>
                    <img src={availableIcon} className='w-1/3 lg:w-1/5 sm:1/6 mx-auto' />
                    <h3 className='text-xl lg:text-md sm:text-[12px]'>Availability</h3>
                    <p className='lg:text-sm sm:text-[8px]'>24/7 help you shape and build your brand</p>
                </div>
                <div onClick={() => { setState(true); setContext('Communication') }} className={`cursor-pointer lg:w-full w-1/2 border-2 bg-neutral-900 p-2 rounded-lg mb-8 md:mb-4 sm:mb-2 border-slate-800 ${context === 'Communication' ? activeClass : ''}`}>
                    <img src={communIcon} className='w-1/3 lg:w-1/5 sm:1/6 mx-auto' />
                    <h3 className='text-xl lg:text-md sm:text-[12px]'>Communication</h3>
                    <p className='lg:text-sm sm:text-[8px]'>Flexible approach to cooperation</p>
                </div>
            </div>
            <div className='w-1/2 lg:w-full'>
                {state
                    && context === 'Responsibility' ? <Responsbility /> : context === 'Availability' ? <Availability /> : <Communication />}
            </div>
        </div>
    )
}

export default Content
