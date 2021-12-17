import React from 'react';
import myart from '../../../assets/myart.png';
import puzzle from '../../../assets/puzzle.png';
import redcube from '../../../assets/redcube.png';
import yellowcube from '../../../assets/yellowcube.png';
import ring from '../../../assets/ring.png';
import star from '../../../assets/star.png';


const HeaderRight = () => {


    return (
        <div className='flex flex-col justify-center items-center w-1/2'>
            <div className="flex w-full justify-around items-center">
                <img
                    src={redcube}
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/6'
                />
                <img
                    src={star}
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/4'
                />
            </div>
            <div className="flex w-full justify-around items-center">
                <img
                    src={puzzle}
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/5'
                />
                <img
                    src={myart}
                    alt="aboutShahzain-logo"
                    title="aboutShahzain-logo"
                    className='w-3/4 my-4'
                />
            </div>
            <div className="flex w-full justify-around items-center">

                <img
                    src={ring}
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/6'
                />
                <img
                    src={yellowcube}
                    alt="aboutShahzain-puzzle"
                    title="aboutShahzain-puzzle"
                    className='w-1/6'
                />
            </div>
        </div>
    )
}

export default HeaderRight
