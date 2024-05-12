import React from 'react'
import styles from './styles.module.scss'

const EmailAddress = () => {
    return (
        <div id={'signUp'} className={styles.container}>
            <div className={styles.title}>
                <h3 suppressContentEditableWarning contentEditable spellCheck={false}>Get updates from your brand</h3>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>tenetur a sapiente delectus, alias aut perferendis doloribus asperiores repellat.</p>
            </div>
            <div className={styles.inputDiv}>
                <input placeholder={'Enter your e-mail'} />
                <span>Sign up</span>
            </div>
        </div>
    )
}

export default EmailAddress