import React from 'react';
import footerMan from '../../assets/footer-man.png';
import markerLine from '../../assets/line.svg';
import logo from '../../assets/transLogo.png';
import { FaFacebookF } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { GrGooglePlus } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { ImLinkedin2 } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    const date = new Date().getFullYear();
    return (//
        <footer className="bg-black w-full sm:mt-36">
            <main className="w-full p-6 flex justify-around items-center">
                <div className="center relative">
                    <h2 className="text-white font-bold leading-normal text-5xl lg:text-3xl md:text-2xl sm:text-xl 2sm:text-lg capitalize ">Helping people making their website interactive and user friendly.</h2>

                    <img
                        src={markerLine}
                        alt="aboutshahzain-bike"
                        title="aboutshahzain-bike"
                        width={800}
                        className="absolute top-10 shadow-2xl lg:top-20 lg:w-96"
                    />
                    <a href='https://www.freepik.com/photos/character' className="cursor-context-menu" target="_blank">
                    </a>
                </div>
                <img
                    src={footerMan}
                    alt="aboutshahzain-bike"
                    title="aboutshahzain-bike"
                    width={400}
                    className='md:w-2/6'
                />
            </main>
            <div className="w-full bg-neutral-900">
                <main className="border-y-2 flex sm:flex-col justify-between items-center border-gray-800 w-full bg-neutral-900">
                    <img
                        src={logo}
                        alt="aboutShahzain-logo"
                        title="aboutShahzain-logo"
                        className="w-1/5 sm:w-full"
                    />
                    <div className="w-1/3 sm:w-full sm:my-2 flex justify-around md:w-1/2 items-center">
                        <a target="_blank" className="rounded-full p-2 border-2 border-sky-600 text-sky-600" href="https://www.facebook.com/syed.zainulabideen.77398"><FaFacebookF /></a>
                        <a target="_blank" className="rounded-full p-2 border-2 border-pink-500 text-pink-500" href="https://"><GrInstagram /></a>
                        <a target="_blank" className="rounded-full p-2 border-2 border-indigo-600 text-indigo-600" href="https://twitter.com/its_shahzain"><ImTwitter /></a>
                        <a target="_blank" className="rounded-full p-2 border-2 border-blue-600 text-blue-600" href="https://www.linkedin.com/in/syed-zainulabideen009900/"><ImLinkedin2 /></a>
                        <a target="_blank" className="rounded-full p-2 border-2 border-cyan-800 text-cyan-800" href="https://github.com/shahzain-lab"><BsGithub /></a>
                        <a target="_blank" className="rounded-full p-2 border-2 border-red-600 text-red-600" href="shahzain30196@gmail.com"><SiGmail /></a>
                        <a target="_blank" className="rounded-full p-2 border-2 border-lime-600 text-lime-600" href="https://myaccount.google.com/profile"><GrGooglePlus /></a>
                    </div>
                </main>
                <section className=" flex justify-around items-center  text-zinc-400 py-4">
                    <div>
                        <span className="text-xlfont-thin text-zinc-200">About Me</span>
                        <li>resume</li>
                        <li>Instagram</li>
                        <li>How I Built</li>
                        <li>What I Built</li>
                        <li>resume</li>
                    </div>
                    <div>
                        <span className="text-xl font-thin text-zinc-200">About Me</span>
                        <li>resume</li>
                        <li>Instagram</li>
                        <li>How I Built</li>
                        <li>What I Built</li>
                        <li>resume</li>
                    </div>
                    <div>
                        <span className="text-xl font-thin text-zinc-200">About Me</span>
                        <li>resume</li>
                        <li>Instagram</li>
                        <li>How I Built</li>
                        <li>What I Built</li>
                        <li>resume</li>
                    </div>
                </section>
            </div>
            <h4 className="bg-black tracking-wide text-stone-400 py-2 w-full flex justify-around items-center capitalize">
                &copy; Copyright {date}.All rights reserved.
            </h4>
        </footer>
    )
}

export default Footer;