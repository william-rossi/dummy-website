import React, { useId } from 'react'
import styles from './styles.module.scss'
import InputImage from '@/components/InputImage/InputImage'
import Utils from '@/Helpers/utils'

const Section3 = () => {
    const imgId = useId()
    const inputId = useId()

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 suppressContentEditableWarning contentEditable spellCheck={false}>At vero eos et accusamus</h2>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut.</p>
            </div>
            <div className={styles.image}>
                <img onClick={() => Utils.openInputFileChooser(inputId)} id={imgId} src={'images/homepage/concept2.webp'} alt={'image2'} />
                <InputImage imgId={imgId} inputId={inputId} />
            </div>
        </section>
    )
}

export default Section3