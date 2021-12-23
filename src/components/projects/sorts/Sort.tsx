import React from 'react'

const Sort = () => {
    // const techs = ['HTML', 'CSS', 'javascript', 'reactjs', 'css', 'HTML', 'javascript', 'Reactjs', 'graphql']
    // const filterTechs = Array.from(new Set(techs));
    const techs = ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Reactjs', 'Typescript', 'Reduxjs', 'Graphql', 'Gatsbyjs', 'WAAPI', 'PWA']

    return (
        <div className='w-full flex flex-wrap'>
            {techs.map((ele, i) => (
                <span key={i} className='m-2 border-2 border-gray-600 text-lg rounded-full py-2 px-6 cursor-pointer text-gray-200 hover:bg-gray-600 transition-all hover:border-white'>
                    {ele}
                </span>
            ))}
        </div>
    )
}

export default Sort
