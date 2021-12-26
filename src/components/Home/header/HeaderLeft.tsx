import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { IAbout } from '../../../interfaces/Header.interface'

const HeaderLeft = ({ data }: IAbout) => {

  return (

    <main className='flex flex-col justify-center items-center w-1/2 mb-40'>
      <div className='pl-4'>
        <span className='text-gray-400 font-semibold capitalize pl-2 text-lg'>meet with shahzain,</span>

        {data && data.contentfulMaintitle && (
          <>
            <h2 className=' text-4xl capitalize text-gray-100 '>{data.contentfulMaintitle.title}.</h2>
            <p className='text-lg font-semibold text-gray-400 py-6'>{renderRichText(data.contentfulMaintitle.description)}</p>
          </>
        )}
      </div>
      <div className='flex justify-items-start items-center w-full'>
        <button className="px-4 py-2 ml-6 text-white font-semibold rounded bg-fuchsia-600 hover:bg-fuchsia-700">Visit Projects <span className="">&#8594;</span></button>
        <button className="px-6 py-2 ml-6 font-semibold rounded text-fuchsia-600 border-2 border-fuchsia-600 hover:border-fuchsia-700 hover:text-fuchsia-700">Hire Me</button>

      </div>
    </main>


  )
}

export default HeaderLeft

