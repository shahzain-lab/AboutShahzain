import React from 'react';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

const Header = ({ data }: any) => {
    return (
        <header className='w-full md:mb-10 h-screen  flex md:flex-col justify-between items-center'>
            <HeaderLeft data={data} />
            <HeaderRight />
        </header>
    )
}

export default Header
