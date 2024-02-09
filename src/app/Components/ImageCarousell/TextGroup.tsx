'use client'
import styles from './styles.module.scss'

export const TextGroup = ({ text, subtext, btnText} : {
    text: string,
    subtext?: string,
    btnText?: string
}) => {


    return (
        <div className={styles.TextContainer}>
            <h1 className={styles.MainText}>
                {text}
            </h1>
            <h2 className={styles.SubText}>
                {subtext}
            </h2>
        </div>
    )
}

export const CaptionGroup = ({ caption } : { caption: string }) => {

    return (
        <div className={styles.Caption}>
           Caption: {caption} 
        </div>
    )


}