import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { AiFillLike } from 'react-icons/ai'
import spacex from '../../../assets/spaceX.png';

const Project = () => {
    const projects = [
        {
            id: 1,
            name: 'The Contructor builder',
            desctiption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatum.',
            url: 'www.abc$example.com',
            star: 'get',
            starCount: 231,
            github: 'www.abc$example.com',
            img: spacex
        },
        {
            id: 2,
            name: 'The Contructor builder',
            desctiption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatum.',
            url: 'www.abc$example.com',
            star: 'get',
            starCount: 231,
            github: 'www.abc$example.com',
            img: spacex
        },
        {
            id: 3,
            name: 'The Contructor builder',
            desctiption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatum.',
            url: 'www.abc$example.com',
            star: 'get',
            starCount: 231,
            github: 'www.abc$example.com',
            img: spacex
        },
        {
            id: 4,
            name: 'The Contructor builder',
            desctiption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatum.',
            url: 'www.abc$example.com',
            star: 'get',
            starCount: 231,
            github: 'www.abc$example.com',
            img: spacex
        },
    ]

    return (
        <div className='flex flex-wrap justify-around items-center w-full'>
            {
                projects.map(project => (
                    <div className='w-[45%] shadow-2xl text-center rounded-2xl m-6 text-white bg-zinc-900'>
                        <p className='py-2 rounded-full mx-6 my-2 text-gray-400 shadow-inner bg-gray-800'>
                            <a href={project.url} target={"_blank"}>{project.url}</a>
                        </p>
                        <div className='flex w-full justify-between'>
                            <div className='w-2/5 ml-6 p-4 mb-4  text-left shadow-inner rounded-xl bg-gray-800'>
                                <h2 className='text-xl text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-violet-500 font-bold'>{project.name}</h2>
                                <h4 className='mt-4'>{project.desctiption}</h4>
                            </div>
                            <div className='w-3/5'>
                                <div className='bg-gradient-to-r from-teal-400 to-violet-500 mb-4 mt-2 mx-2 rounded-xl'>
                                    <img
                                        alt={project.name}
                                        src={project.img}
                                        width={300}
                                        className='mx-auto opacity-20 w-full'
                                    />
                                </div>
                                <div className='flex justify-evenly h-14 text-xl items-center shadow-inner rounded-xl bg-gray-800 mb-4 mt-2 mx-2'>
                                    <span className='flex  rounded-full bg-gray-900 p-2'>
                                        <span className='text-2xl cursor-pointer'><AiFillLike /></span>
                                        <span className='text-sm pl-4 pt-2'>{project.starCount}</span>
                                    </span>
                                    <a href={project.github} className='rounded-full bg-gray-900 p-4'><BsGithub /></a>
                                    <a href={project.url} className='rounded-full bg-gray-900 p-4'><FiExternalLink /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Project
