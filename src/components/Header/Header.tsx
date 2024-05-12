'use client'

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

const Header = () => {
    const { logoUrl } = useTheme()

    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    const [customPath, setCustomPath] = useState<string>("/");
    const pathname = usePathname();

    const openNavBar = () => {
        setIsNavBarOpen(true)
    }

    const handleOnClose = () => {
        document.getElementsByTagName("body")[0].style.removeProperty('overflow')
        setIsNavBarOpen(false)
    }

    const pushToElement = (id: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined = undefined) => {
        if (pathname === '/' && e)
            e.preventDefault()

        if (id === 'home')
            document.getElementsByTagName("body")[0]?.scrollIntoView({ behavior: 'smooth' })
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        if (pathname !== '/')
            setCustomPath('/')

        if (customPath === '#contact-us')
            pushToElement('signUp')
    }, [pathname])

    const menuItems = () => {
        return (
            <>
                <Link onClick={(e) => { pushToElement('home', e); setCustomPath('#home'); handleOnClose() }} href={customPath}>Home</Link>
                <Link onClick={() => handleOnClose()} href='/about'>About</Link>
                <Link onClick={(e) => { pushToElement('signUp', e); setCustomPath('#contact-us'); handleOnClose() }} href={customPath}>Contact us</Link>
            </>
        )
    }

    useEffect(() => {
        document.addEventListener('click', (e) => {
            const targetElement = e.target as HTMLElement;
            if (targetElement.classList.toString() == styles.background)
                handleOnClose()
        })
    }, [])

    return (
        <>
            {
                isNavBarOpen &&
                <div className={styles.background}>
                    <div className={styles.sideBar}>
                        <div className={styles.closeSideBar}>
                            <svg onClick={() => handleOnClose()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>
                        </div>
                        {menuItems()}
                    </div>
                </div>
            }
            <header className={styles.container}>
                <div className={styles.subContainer}>
                    <Link href={'/'} className={styles.logoContainer}>
                        {
                            logoUrl ? <img src={logoUrl} alt={'logo'} />
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C9.35329 14.5 10.6088 14.0871 11.6492 13.3799L6 6.57712V11.25C6 11.6642 5.66421 12 5.25 12C4.83579 12 4.5 11.6642 4.5 11.25V4.5C4.5 4.184 4.69807 3.9019 4.99529 3.79458C5.29251 3.68726 5.62511 3.77775 5.82699 4.02085L13.3008 13.0209C13.5622 13.3357 13.523 13.802 13.2127 14.0687C11.813 15.272 9.99057 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 8.76428 15.8926 9.50473 15.6916 10.2065C15.5936 10.5489 15.4733 10.8818 15.3325 11.2037C15.1665 11.5832 14.7243 11.7562 14.3448 11.5902C13.9653 11.4242 13.7922 10.982 13.9583 10.6025C14.0725 10.3413 14.1701 10.0712 14.2496 9.79351C14.4125 9.2247 14.5 8.6232 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM10.5 3.75C10.9142 3.75 11.25 4.08579 11.25 4.5V7.5C11.25 7.91421 10.9142 8.25 10.5 8.25C10.0858 8.25 9.75 7.91421 9.75 7.5V4.5C9.75 4.08579 10.0858 3.75 10.5 3.75Z" fill="#000000" />
                                </svg>
                        }
                    </Link>
                    <nav className={styles.navbarContainer}>
                        <div className={styles.defaultNav}>
                            {menuItems()}
                        </div>

                        <svg onClick={() => openNavBar()} className={styles.burger} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header