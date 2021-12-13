import React from 'react';
import myart from '../../../assets/myart.png';
import puzzle from '../../../assets/Puzzle.png';
import redcube from '../../../assets/redcube.png';
import yellowcube from '../../../assets/yellowcube.png';
import ring from '../../../assets/ring.png';
import star from '../../../assets/star.png';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

const Header = () => {
    return (
        <header className='w-full h-screen flex justify-between items-center'>
            <HeaderRight />
            <HeaderLeft />
        </header>
    )
}

export default Header
