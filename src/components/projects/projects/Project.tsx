import React, { FC } from 'react'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { AiFillLike } from 'react-icons/ai'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from 'gatsby-plugin-image';
import { IProject } from '../../../interfaces/Projects.interface';


const Project: FC<IProject> = ({ node }) => {
    const Image = node?.image?.gatsbyImageData

    return (
        <div className='w-[45%] shadow-2xl text-center rounded-2xl m-6 md:mx-0 text-white bg-zinc-900 xl:w-[80%] md:w-[90%] sm:mr-2 sm-[100%]'>
            <p className='py-2 rounded-full mx-6 md:mx-4 my-2 text-gray-400 shadow-inner bg-gray-800'>
                <a href={node.url} target={"_blank"}>{node.url}</a>
            </p>
            <div className='flex 2sm:flex-col-reverse w-full justify-between'>
                <div className='w-2/5 2sm:w-full ml-6 p-4 mb-4 md:ml-0 text-left shadow-inner rounded-xl bg-gray-800'>
                    <h2 className='text-xl md:text-lg sm:text-sm text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-violet-500 font-bold'>{node.title}</h2>
                    <h4 className='mt-4 '>{renderRichText(node.description)}</h4>
                </div>
                <div className='w-3/5 2sm:w-full'>
                    <div className=' mb-4 mt-2 mx-2 rounded-xl odd:bg-gradient-to-b odd:from-fuchsia-500 odd:to-purple-500'>

                        <GatsbyImage
                            alt={node.title}
                            image={Image}
                            className='mx-auto opacity-30 h-[20rem] w-full'
                        />
                    </div>
                    <div className='flex justify-evenly h-14 text-xl items-center shadow-inner rounded-xl bg-gray-800 mb-4 mt-2 mx-2'>
                        {/* <span className='flex  rounded-full bg-gray-900 p-2'>
                            <span className='text-2xl cursor-pointer'><AiFillLike /></span>
                            <span className='text-sm pl-4 pt-2'>{232}</span>
                        </span> */}
                        <a href={node.githubUrl} target={'_blank'} className='rounded-full bg-gray-900 p-4'><BsGithub /></a>
                        <a href={node.url} target={'_blank'} className='rounded-full bg-gray-900 p-4'><FiExternalLink /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
