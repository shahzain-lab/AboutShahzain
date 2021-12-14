import React, { FC } from 'react'

const Container: FC = ({ children }) => {
    return (
        <div className='w-full min-h-screen flex flex-col md:flex-row justify-between items-center'>
            {children}
        </div>
    )
}

export default Container
