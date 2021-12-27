import React from 'react';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import { IAbout } from '../../../interfaces/Header.interface';

const Header = ({ data }: IAbout) => {
    return (
        <header className='w-full md:mb-10 h-screen flex md:flex-col justify-between items-center'>
            <HeaderLeft data={data} />
            <HeaderRight />
        </header>
    )
}

export default Header
