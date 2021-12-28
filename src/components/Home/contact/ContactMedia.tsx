import React, { FC } from 'react'

interface Icon{
    icon: JSX.Element
    address: string
    fullAdr: string
}

interface Props{
    link1?: Icon
    link2?: Icon
    link3?: Icon
}

const ContactMedia: FC<Props> = ({link1, link2, link3}) => {
    return ( <div className='flex-col text-white'>
    <a target={'_blank'} href={link1?.fullAdr} className=' bg-opacity-25 z-20 flex items-center justify-center rounded-full p-6 bg-blue-600 mt-4'>
        <span className='text-3xl pr-2 text-blue-500'>{link1?.icon }</span>
        <h2>{link1?.address}</h2>
    </a>
    <a target={'_blank'} href={link2?.address} className='bg-opacity-25 flex items-center justify-center rounded-full p-6 bg-fuchsia-600 mt-4'>
        <span className='text-3xl z-20 pr-2 text-fuchsia-500'>{link2?.icon }</span>
        <h2>{link2?.address}</h2>
    </a>
    <a target={'_blank'} href={link3?.address} className='bg-opacity-25 z-20 flex items-center justify-center rounded-full p-6 bg-teal-600 mt-4'>
        <span className='text-3xl pr-2 text-teal-500'>{link3?.icon }</span>
        <h2>{link3?.address}</h2>
    </a>
    </div>
    )
}

export default ContactMedia
