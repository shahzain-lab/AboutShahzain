import React, { FC } from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Scrollbar from 'react-smooth-scrollbar';

import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
SmoothScrollbar.use(OverscrollPlugin)

const Layout: FC = ({ children }) => {
    return (
        <Scrollbar
            damping={0.1}
            thumbMinSize={20}
            renderByPixels={true}
            alwaysShowTracks={false}
            continuousScrolling={true}
            plugins={{
                overscroll: {
                    effect: 'glow',
                    glowColor: '#122841',
                    damping: 0.08
                }
            }}
        >
            <main className=' h-screen'>
                <div className="bg-neutral-800">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </main>
        </Scrollbar>
    )
}

export default Layout
