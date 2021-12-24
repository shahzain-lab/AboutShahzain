import React, { FC } from 'react'

interface Props {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Sort: FC<Props> = ({ state, setState }) => {
    const techs = ['All', 'HTML', 'Sass', 'Bootstrap', 'Javascript', 'Reactjs', 'Typescript', 'Reduxjs', 'Graphql', 'Gatsbyjs', 'WAAPI', 'PWA']

    return (
        <div className='w-full flex flex-wrap'>
            {techs.map((ele, i) => (
                <span key={i} onClick={() => setState(ele)} className={`m-2 border-2 border-gray-600 text-lg sm:text-md 2sm:text-sm rounded-full py-2 px-6 sm:px-4 cursor-pointer text-gray-200 hover:bg-gray-600 transition-all ${state === ele ? 'border-gray-100 bg-gray-600 ' : ''} hover:border-white`}>
                    {ele}
                </span>
            ))}
        </div>
    )
}

export default Sort
