import React, { useId } from 'react'
import styles from './styles.module.scss'
import Utils from '@/Helpers/utils'
import InputImage from '@/components/InputImage/InputImage'

const Section4 = () => {
    const imgId = useId()
    const inputId = useId()

    return (
        <section className={styles.container}>
            <div className={styles.image}>
                <img onClick={() => Utils.openInputFileChooser(inputId)} id={imgId} src={'images/homepage/concept3.webp'} alt={'image3'} />
                <InputImage imgId={imgId} inputId={inputId} />
            </div>
            <div className={styles.content}>
                <h2 suppressContentEditableWarning contentEditable spellCheck={false}>Praesentium voluptatum deleniti</h2>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
            </div>
        </section>
    )
}

export default Section4