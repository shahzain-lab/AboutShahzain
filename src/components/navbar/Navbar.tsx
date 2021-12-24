import { Link } from 'gatsby';
import React from 'react';
import logo from '../../assets/transLogo.png';

const Navbar = () => {
    const activeStyle = {
        height: '0.25rem',
        backgroundColor: 'rgb(192 38 211)'
    }
    return (
        <nav className="flex justify-between bg-slate-700 items-center w-full h-20">
            <div className="flex items-center center w-2/4">
                <img
                    src={logo}
                    alt="aboutShahzain-logo"
                    title="aboutShahzain-logo"
                    className="w-1/5"
                />
                <span className="text-zinc-400 font-thin text-2xl">.aboutShahzain</span>
            </div>
            <div className="flex w-1/2 cursor-pointer text-zinc-300 font-normal text-lg justify-around items-center">
                <div className="flex flex-col group ">
                    <Link to="/" activeClassName='border-b-4 rounded-lg border-b-fuchsia-600 ' className="decoration-fuchsia-600">Home</Link>
                    <span className="h-1 w-1/1 duration-300 rounded-full group-hover:bg-fuchsia-600"></span>
                </div>
                <div className="flex flex-col group duration-75">
                    <Link to="/what-i-built/" activeClassName='border-b-4 rounded-lg border-b-fuchsia-600 ' className="decoration-fuchsia-600">What I Built</Link>
                    <span className="h-1 w-1/1 rounded-full group-hover:bg-fuchsia-600"></span>
                </div>
                <div className="flex flex-col group">
                    <Link to="/how-i-built/" activeClassName='border-b-4 rounded-lg border-b-fuchsia-600 ' className="decoration-fuchsia-600">How I Built</Link>
                    <span className="h-1 w-1/1 rounded-full group-hover:bg-fuchsia-600"></span>
                </div >
                <button className="px-4 py-2 text-white font-semibold rounded bg-fuchsia-600 hover:bg-fuchsia-700">Visit Projects <span className="">&#8594;</span></button>
            </div >
        </nav >
    )
}

export default Navbar;
