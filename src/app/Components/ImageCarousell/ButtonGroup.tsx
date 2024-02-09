'use client'

import styles from './styles.module.scss'

export const ButtonGroup = ({ noButton, picNo, setPicNo }: { noButton: number, picNo: number, setPicNo: (val: number) => void}) => {
    return (
        <div className={styles.ButtonGroup}>
            {Array(noButton).fill(1).map((_v, idx) => (<RadioButton key={idx} checked={idx === picNo} onClick={() => setPicNo(idx)} />))}
        </div>
    )
}


const RadioButton = ({ checked, onClick } : { checked: boolean, onClick: () => void }) => {

    return (
    <label className="container" >
        <input className={styles.RadioBtn} type="radio" name={"image-gallery"} onChange={onClick} checked={checked} />
    </label>
  )
}