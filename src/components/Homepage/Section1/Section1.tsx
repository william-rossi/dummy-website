'use client'

import React, { useId } from 'react'
import styles from './styles.module.scss'
import ButtonRegisterLead from '@/components/ButtonRegisterLead/ButtonRegisterLead'
import ParallaxImage from '@/components/ParallaxImage/ParallaxImage'
import Utils from '@/Helpers/utils'
import InputImage from '@/components/InputImage/InputImage'

const Section1 = () => {
    const imgId = useId()
    const inputId = useId()

    return (
        <section className={styles.container}>
            <div className={styles.brandPresentation}>
                <h1 suppressContentEditableWarning contentEditable spellCheck={false}>Your brand{"'"}s amazing tex here!</h1>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Lorem ipsum dolor sit amet. Sit debitis quod et quis sunt et accusantium libero est possimus quaerat et voluptatum atque est vitae enim.</p>
                <ButtonRegisterLead />
            </div>
            <ParallaxImage onClick={() => Utils.openInputFileChooser(inputId)} id={imgId} src={'images/homepage/dashboard.webp'} alt={'product'} classname={styles.productImage} />
            <InputImage imgId={imgId} inputId={inputId} />
        </section>
    )
}

export default Section1