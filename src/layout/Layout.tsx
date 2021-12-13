import React, { FC } from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const Layout: FC = ({ children }) => {
    return (
        <main className='bg-neutral-800'>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
