'use client'

import React from 'react'
import styles from './styles.module.scss'

const WhatsApp = () => {
    return (
        <>
            <div onClick={() => window.open('https://wa.me//55XXXXXXXXXXX?text=dummy%20text')} className={styles.container}>
                <img className={styles.logo} src={'images/components/whatsapp.svg'} alt={'logo'} />
            </div>
        </>
    )
}

export default WhatsApp