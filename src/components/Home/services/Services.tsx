import React from 'react'
import bracket from '../../../assets/home/brackets.svg';
import react from '../../../assets/home/react-logo.svg';
import modern from '../../../assets/home/modern.svg';

const Services = () => {
    return (
        <div className='mb-8'>
            <div className='w-full text-center'>
                <h4 className='text-xl font-["Open_Sans"] uppercase text-fuchsia-500'>&#9741; What I do</h4>
                <h2 className='text-4xl text-slate-300 font-["Open_Sans"] capitalize '>My Services</h2>
            </div>
            <div className='flex justify-around md:flex-col flex-row items-center'>
                <article className='my-4 mx-6 shadow-2xl border-b-8 p-4 text-slate-300 border-b-pink-600 rounded-md'>
                    <img
                        src={bracket}
                        alt="aboutshahzain-service1"
                        title="aboutshahzain-service1"
                        className='ml-6 bg-opacity-25 rounded-full p-8 bg-pink-600'
                    />
                    <h4 className="text-xl ml-4 py-4">Application Development</h4>
                    <p>Begin with your concept. Then I plan, define, design, and build your viable application product.I use various frameworks to build complex web-applications.</p>
                </article>

                <article className='my-4 mx-6 shadow-2xl border-b-8 p-4 text-slate-300 border-b-indigo-500 rounded-md'>
                    <img
                        src={react}
                        alt="aboutshahzain-service1"
                        title="aboutshahzain-service1"
                        className='ml-6 bg-opacity-25 rounded-full p-8 bg-indigo-600'
                    />
                    <h4 className="text-xl ml-4 py-4">Progressive Web Apps</h4>
                    <p>Give your website a home on a desktop or mobile just like other native apps with PWA modern features.Allow me to develop your site once and runs it everywhere.</p>
                </article>

                <article className='my-4 mx-6 shadow-2xl border-b-8 p-4 text-slate-300 border-b-purple-600 rounded-md'>
                    <img
                        src={modern}
                        alt="aboutshahzain-service1"
                        title="aboutshahzain-service1"
                        className='ml-6 bg-opacity-25 rounded-full p-8 bg-purple-600'
                    />
                    <h4 className="text-xl ml-4 py-4">Web Designing</h4>
                    <p>A custom design web site provides you with a trustworthy digital presence that meets your business needs in terms of quality, branding and usability.</p>
                </article>
            </div>
        </div>
    )
}

export default Services
