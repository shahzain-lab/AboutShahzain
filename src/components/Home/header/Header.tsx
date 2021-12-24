import React from 'react';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

const Header = ({ data }: any) => {
    return (
        <header className='w-full h-screen flex justify-between items-center'>
            <HeaderLeft data={data} />
            <HeaderRight />
        </header>
    )
}

export default Header
