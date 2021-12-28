import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {GrGooglePlus} from 'react-icons/gr';
import {BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import {ImTwitter} from 'react-icons/im';
import ContactMedia from './ContactMedia';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
    return (
        <div>
            <div className='w-full text-center my-8 md:mt-10'>
                <h4 className='text-xl font-["Open_Sans"] uppercase text-fuchsia-500'>&#9741; Contact me</h4>
                <h2 className='text-4xl text-slate-300 font-["Open_Sans"] capitalize '>Reach to me</h2>
               <div className='flex justify-around sm:flex-col items-center'>
                   
                   <div className='flex-col text-white'>
                   <a target={'_blank'} href='https://www.facebook.com/syed.zainulabideen.77398' className=' bg-opacity-25 z-20 flex items-center justify-center rounded-full p-6 bg-blue-600 mt-4'>
                       <span className='text-3xl pr-2 text-blue-500'><FaFacebookF /></span>
                       <h2>/syed.zainulabideen.77398</h2>
                   </a>
                   <a target={'_blank'} href= 'https://www.linkedin.com/in/syed-zainulabideen009900/' className='bg-opacity-25 flex items-center justify-center rounded-full p-6 bg-fuchsia-600 mt-4'>
                       <span className='text-3xl z-20 pr-2 text-fuchsia-500'><BsLinkedin /></span>
                       <h2>/syed-zainulabideen009900</h2>
                   </a>
                   <a target={'_blank'} href='https://github.com/shahzain-lab' className='bg-opacity-25 z-20 flex items-center justify-center rounded-full p-6 bg-teal-600 mt-4'>
                       <span className='text-3xl pr-2 text-teal-500'> <BsGithub /></span>
                       <h2>/shahzain-lab</h2>
                   </a>
                   </div>
                   
                   <div className='flex-col text-white'>
                   <a target={'_blank'} href='https://twitter.com/its_shahzain' className=' bg-opacity-25 z-20 flex items-center justify-center rounded-full p-6 bg-blue-600 mt-4'>
                       <span className='text-3xl pr-2 text-blue-500'><ImTwitter /></span>
                       <h2>/its_shahzain</h2>
                   </a>
                   <div className='bg-opacity-25 flex items-center justify-center rounded-full p-6 bg-fuchsia-600 mt-4'>
                       <span className='text-3xl z-20 pr-2 text-fuchsia-500'><BsWhatsapp /></span>
                       <h2>0305-8527319</h2>
                   </div>
                   </div>
                   <div className='flex-col text-white'>
                   <a href='mailto:shahzain30196@gmail.com' className=' bg-opacity-25 z-20 flex items-center justify-center rounded-full p-6 bg-blue-600 mt-4'>
                       <span className='text-3xl pr-2 text-blue-500'><SiGmail /></span>
                       <h2>shahzain30196@gmail.com</h2>
                   </a>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Contact
