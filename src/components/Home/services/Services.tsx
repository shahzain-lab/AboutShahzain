import React from 'react'
import bracket from '../../../assets/home/brackets.svg';

const Services = () => {
    return (
        <div className='w-full text-center'>
            <h4 className='text-xl font-["Open_Sans"] uppercase text-fuchsia-500'>&#9741; What I do</h4>
            <h2 className='text-4xl text-slate-300 font-["Open_Sans"] capitalize '>My Services</h2>

            <div className='flex justify-around items-center'>
                <article className='border-b-8 p-4  border-b-purple-600 rounded-md'>
                    <img
                        src={bracket}
                        alt="aboutshahzain-service1"
                        title="aboutshahzain-service1"
                        className='ml-10 rounded-full p-6 bg-pink-600'
                    />
                    <h4>Application development</h4>
                    <p>I use various frameworks to build complex web-applications.Making front-end responsive and attractive is my first priyorty.  </p>
                </article>

                <article className='border-b-8 p-4 border-b-pink-600 rounded-md'>
                    <img
                        src=""
                        alt="aboutshahzain-service1"
                        title="aboutshahzain-service1"
                    />
                    <h4>Progressive Web Apps</h4>
                    <p>Give your website a home on a desktop or mobile just like other native apps with PWA modern features.Allow me to develop your site once and it everywhere.</p>
                </article>

                <article className='border-b-8 p-4 border-b-green-600 rounded-md'>
                    <img
                        src=""
                        alt="aboutshahzain-service1"
                        title="aboutshahzain-service1"
                    />
                    <h4>Progressive Web Apps</h4>
                    <p>Give your website a home on a desktop or mobile just like other native apps with PWA modern features.Allow me to develop your site once and it everywhere.</p>
                </article>
            </div>
        </div>
    )
}

export default Services
