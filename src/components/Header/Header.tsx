import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.subContainer}>
                <Link href={'/'} className={styles.logoContainer}>
                    <img className={styles.logo} src={'images/logo/logo.svg'} alt={'logo'} />
                </Link>
                <nav className={styles.navbarContainer}>
                    <Link href='#'>Home</Link>
                    <Link href='#'>About</Link>
                    <Link href='#'>Contact us</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header