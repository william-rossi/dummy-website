'use client'

import React from 'react'
import styles from './styles.module.scss'
import ButtonRegisterLead from '@/components/ButtonRegisterLead/ButtonRegisterLead'
import ParallaxImage from '@/components/ParallaxImage/ParallaxImage'

const Section1 = () => {
    return (
        <section className={styles.container}>
            <div className={styles.brandPresentation}>
                <h1>Your awesome brand text here!</h1>
                <p>Lorem ipsum dolor sit amet. Sit debitis quod et quis sunt et accusantium libero est possimus quaerat et voluptatum atque est vitae enim.</p>
                <ButtonRegisterLead />
            </div>
            <ParallaxImage src={'images/homepage/dashboard.webp'} alt={'product'} classname={styles.productImage} />
        </section>
    )
}

export default Section1