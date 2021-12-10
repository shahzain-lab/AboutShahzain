import React, { FC } from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'

const Layout: FC = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
