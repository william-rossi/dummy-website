import React, { useId } from 'react'
import styles from './styles.module.scss'
import ParallaxImage from '@/components/ParallaxImage/ParallaxImage'
import InputImage from '@/components/InputImage/InputImage'
import Utils from '@/Helpers/utils'

const Section2 = () => {
    const imgId = useId()
    const inputId = useId()

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Saepe labore</p>
                <h2 suppressContentEditableWarning contentEditable spellCheck={false}>Lorem ipsum dolor</h2>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
            </div>
            <div className={styles.productImage}>
                <ParallaxImage onClick={() => Utils.openInputFileChooser(inputId)} id={imgId} strength={5} src={'images/homepage/concept1.webp'} alt={'product'} />
                <InputImage imgId={imgId} inputId={inputId} />
            </div>
        </section>
    )
}

export default Section2