import React from 'react'
import styles from './styles.module.scss'

const PoweredBy = () => {
    return (
        <div className={styles.container}>
            <h3 suppressContentEditableWarning contentEditable spellCheck={false}>Powered by</h3>
            <div className={styles.powered}>
                <img className={styles.logo} src={'images/homepage/nextjs.svg'} alt={'next'} />
                <img className={styles.logo} src={'images/homepage/typescript.svg'} alt={'typescript'} />
            </div>
        </div>
    )
}

export default PoweredBy