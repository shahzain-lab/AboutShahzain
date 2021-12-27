import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { IAbout } from '../../../interfaces/Header.interface'
import { Link } from 'gatsby'

const HeaderLeft = ({ data }: IAbout) => {

  return (

    <main className='flex md:z-10 flex-col justify-center items-center w-1/2 md:w-full mb-40 md:mt-40 md:mb-2'>
      <div className='pl-4'>
        <span className='text-gray-400 font-semibold capitalize pl-2 text-lg md:text-md md:mb-4'>meet with shahzain,</span>

        {data && data.contentfulMaintitle && (
          <div>
            <h2 className=' text-4xl md:text-2xl md:mb-2 capitalize text-gray-100 '>{data.contentfulMaintitle.title}.</h2>
            <p className='text-lg md:text-md font-semibold leading-8 text-gray-400 py-6'>{renderRichText(data.contentfulMaintitle.description)}</p>
          </div>
        )}
      </div>
      <div className='flex md:mt-4 justify-items-start md:justify-center items-center w-full'>
        <Link to="what-i-built"> <button className="px-4 md:px-2 py-2 ml-6 text-white font-semibold rounded bg-fuchsia-600 hover:bg-fuchsia-700">Visit Projects <span className="">&#8594;</span></button></Link>
        <button className="px-6 md:px-4 py-2 ml-6 font-semibold rounded text-fuchsia-600 border-2 border-fuchsia-600 hover:border-fuchsia-700 hover:text-fuchsia-700">Hire Me</button>

      </div>
    </main>


  )
}

export default HeaderLeft

