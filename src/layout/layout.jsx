import React from 'react'
import { Header } from './Header/header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const MainLayout = () => {
    return (
        <>
            <header className='sticky top-0 bg-white'>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
