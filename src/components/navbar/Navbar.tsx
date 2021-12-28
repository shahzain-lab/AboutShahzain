import { Link } from 'gatsby';
import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
    const [state, setState] = useState('open');


    return (
        <nav className="flex z-20 lg:flex-col justify-between bg-slate-700 items-center w-full h-20">
            <div className='lg:w-full flex justify-between items-center h-20'>
                <div className="flex items-center center w-2/4">
                    <StaticImage
                        placeholder='blurred'
                        src={'../../assets/transLogo.png'}
                        alt="aboutShahzain-logo"
                        title="aboutShahzain-logo"
                        className="w-1/3"
                    />
                    <span className="text-zinc-400 font-thin text-2xl sm:text-xl 2sm:text-lg">.aboutShahzain</span>
                </div>
                <button className='hidden lg:flex rounded-lg mr-6 focus:outline-none focus:shadow-outline'>
                    {
                        state === 'open' ? (
                            <svg fill="currentColor" onClick={() => setState('!open')} viewBox="0 0 20 20" className="w-10 h-10">
                                <path x-show="!open" fill="#fff" fillRule={"evenodd"} d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule={"evenodd"}></path>
                            </svg>

                        )
                            : (
                                <svg fill="currentColor" viewBox="0 0 20 20" onClick={() => setState('open')} className="w-10 h-10">
                                    <path x-show="open" fill="#fff" fillRule={"evenodd"} d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule={"evenodd"}></path>
                                </svg>
                            )
                    }
                </button>
            </div>
            <div className="flex justify-around transition-all items-center z-10 w-1/2 lg:hidden cursor-pointer text-zinc-300 font-normal text-lg">
                <div className="lg:border-2 lg:w-full lg:my-2 lg:hover:bg-gray-500 lg:border-gray-700 lg:rounded-3xl lg:mx-4 flex flex-col group  ">
                    <Link to="/" activeClassName='border-b-4 rounded-lg border-b-fuchsia-600 ' className="decoration-fuchsia-600">Home</Link>
                    <span className="h-1 w-1/1 duration-300 rounded-full group-hover:bg-fuchsia-600"></span>
                </div>
                <div className="lg:border-2 lg:w-full lg:my-2 lg:hover:bg-gray-500 lg:border-gray-700 lg:rounded-3xl lg:mx-4 flex flex-col group  duration-75">
                    <Link to="/what-i-built/" activeClassName='border-b-4 rounded-lg border-b-fuchsia-600 ' className="decoration-fuchsia-600">What I Built</Link>
                    <span className="h-1 w-1/1 rounded-full group-hover:bg-fuchsia-600"></span>
                </div>
                <Link to="what-i-built"> <button className=" px-4 py-2 text-white font-semibold rounded bg-fuchsia-600 hover:bg-fuchsia-700">Visit Projects <span className="">&#8594;</span></button></Link>
            </div >
            {
                state === '!open' ? (
                    <div className="hidden lg:flex justify-between transition-all items-center z-10 w-1/2 lg:rounded-xl lg:mx-4 cursor-pointer text-zinc-300 font-normal text-lg lg:text-center lg:h-40 lg:flex-col lg:w-full lg:mt-6 lg:bg-gray-700">
                        <div className="lg:border-2 lg:w-full lg:my-2 lg:hover:bg-gray-500 lg:border-gray-400 lg:rounded-3xl lg:mx-4 flex flex-col group  ">
                            <Link to="/" activeClassName='border-b-4 rounded-lg border-b-fuchsia-600 ' className="decoration-fuchsia-600">Home</Link>
                            <span className="h-1 w-1/1 duration-300 rounded-full group-hover:bg-fuchsia-600"></span>
                        </div>
                        <div className="lg:border-2 lg:w-full lg:my-2 lg:hover:bg-gray-500 lg:border-gray-400 lg:rounded-3xl lg:mx-4 flex flex-col group  duration-75">
                            <Link to="/what-i-built/" activeClassName='border-b-4 rounded-lg border-b-fuchsia-600 ' className="decoration-fuchsia-600">What I Built</Link>
                            <span className="h-1 w-1/1 rounded-full group-hover:bg-fuchsia-600"></span>
                        </div>
                        <Link to="what-i-built"> <button className=" lg:border-2 lg:w-full lg:my-2 lg:hover:bg-gray-500 lg:border-gray-700 lg:rounded-3xl lg:mx-4  px-4 py-2 text-white font-semibold rounded bg-fuchsia-600 hover:bg-fuchsia-700">Visit Projects <span className="">&#8594;</span></button></Link>
                    </div >
                )
                    : (
                        ''
                    )
            }

        </nav >
    )
}

export default Navbar;
