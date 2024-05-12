import React from 'react'
import styles from './styles.module.scss'
import ParallaxImage from '@/components/ParallaxImage/ParallaxImage'

const Section2 = () => {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Saepe labore</p>
                <h2 suppressContentEditableWarning contentEditable spellCheck={false}>Lorem ipsum dolor</h2>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
            </div>
            <div className={styles.productImage}>
                <ParallaxImage strength={5} src={'images/homepage/concept1.webp'} alt={'product'} />
            </div>
        </section>
    )
}

export default Section2