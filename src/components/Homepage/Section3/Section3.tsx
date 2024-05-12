import React from 'react'
import styles from './styles.module.scss'

const Section3 = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 suppressContentEditableWarning contentEditable spellCheck={false}>At vero eos et accusamus</h2>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut.</p>
            </div>
            <div className={styles.image}>
                <img src={'images/homepage/concept2.webp'} alt={'image2'} />
            </div>
        </section>
    )
}

export default Section3