import React from 'react'
import styles from './styles.module.scss'

const Section4 = () => {
    return (
        <section className={styles.container}>
            <div className={styles.image}>
                <img src={'images/homepage/concept3.webp'} alt={'image1'} />
            </div>
            <div className={styles.content}>
                <h2 suppressContentEditableWarning contentEditable spellCheck={false}>Praesentium voluptatum deleniti</h2>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
            </div>
        </section>
    )
}

export default Section4