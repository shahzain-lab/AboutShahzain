import React, { useState } from 'react'
// import { FaAssistiveListeningSystems } from 'react-icons/fa'
import Availability from './Availability'
import Communication from './Communication'
import Responsbility from './Responsbility'
// import data from './data';
// const data = [
//     {
//         id: 1,
//         title: "Responsibility",
//         description: "Defining software requirement from the perspective of an end-user"
//     },
//     {
//         id: 1,
//         title: "Responsibility",
//         description: "Defining software requirement from the perspective of an end-user"
//     },
//     {
//         id: 1,
//         title: "Responsibility",
//         description: "Defining software requirement from the perspective of an end-user"
//     }
// ];
const Content = () => {
    const [state, setState] = useState(false);
    const [context, setContext] = useState('');


    return (
        <div className='h-screen w-full relative bg-black flex justify-between px-10 items-center text-white'>

            <div className='w-1/2 text-center'>
                <div onClick={() => { setState(true); setContext('Responsibility') }} className='w-1/2 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    {/* <FaAssistiveListeningSystems className='text-3xl text-amber-400' /> */}
                    <h3>Responsibility</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
                <div onClick={() => { setState(true); setContext('Availability') }} className='w-1/2 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    {/* // <FaAssistiveListeningSystems className='text-3xl text-amber-400' /> */}
                    <h3>Availability</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
                <div onClick={() => { setState(true); setContext('Communication') }} className='w-1/2 border-2 bg-neutral-900 p-2 rounded-lg mb-8 border-slate-800'>
                    {/* // <FaAssistiveListeningSystems className='text-3xl text-amber-400' /> */}
                    <h3>Communication</h3>
                    <p>Defining software requirement from the perspective of an end-user</p>
                </div>
            </div>
            <div>
                {context === 'Responsibility' ? <Responsbility /> : context === 'Availability' ? <Availability /> : <Communication />}
            </div>
        </div>
    )
}

export default Content
