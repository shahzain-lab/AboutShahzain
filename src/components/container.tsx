import React, { FC } from 'react'

const Container: FC = ({ children }) => {
    return (
        <div className='w-full h-screen flex justify-between items-center'>
            {children}
        </div>
    )
}

export default Container
