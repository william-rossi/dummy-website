'use client'

import React, { useId } from 'react'
import styles from './styles.module.scss'
import Utils from '@/Helpers/utils';
import InputImage from '@/components/InputImage/InputImage';

const About = () => {
    let articles = [
        {
            title: "At vero eos et accusamus",
            article: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam.",
            imgPath: "images/about/image1.jpg",
            imageId: useId(),
            inputId: useId()
        },
        {
            title: "Maxime placeat facere possimus",
            article: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            imgPath: "images/about/image2.jpg",
            imageId: useId(),
            inputId: useId()
        },
        {
            title: "Excepteur sint occaecat cupidatat",
            article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imgPath: "images/about/image3.jpg",
            imageId: useId(),
            inputId: useId()
        }
    ]

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h1 suppressContentEditableWarning contentEditable spellCheck={false}>We are blank</h1>
                <p suppressContentEditableWarning contentEditable spellCheck={false}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <h2 suppressContentEditableWarning contentEditable spellCheck={false}>Our values</h2>
            {
                articles.map((item, index) => (
                    <article key={index} className={styles.articleContainer}>
                        <h3 suppressContentEditableWarning contentEditable spellCheck={false}>{item.title}</h3>
                        <p suppressContentEditableWarning contentEditable spellCheck={false}>{item.article}</p>
                        <div className={styles.imageContainer}>
                            <img
                                id={item.imageId}
                                onClick={() => Utils.openInputFileChooser(item.inputId)}
                                className={styles.logo}
                                src={item.imgPath}
                                alt={`image${index}`}
                            />
                            <InputImage imgId={item.imageId} inputId={item.inputId} />
                        </div>
                    </article>
                ))
            }
        </section>
    )
}

export default About