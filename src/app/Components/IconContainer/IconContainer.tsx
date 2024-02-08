"use client";
import styles from "./styles.module.scss";
import { AiFillGithub, AiOutlineGlobal, AiFillLinkedin, AiFillRedditCircle, AiFillMail } from "react-icons/ai";


type IconContainerProps = {
    gitLink?: string;
    website?: string;
    linkedIn?: string;
    reddit?: string;
    email?: string;
}

export const IconContainer = ({ gitLink, website, linkedIn, reddit, email }: IconContainerProps) => {
    
    return (
        <div className={styles.IconContainer}>
            {email && <AiFillMail size={20} onClick={() => window.open(`mailto:${email}`)} className={styles.Icon} /> }
            {gitLink && <AiFillGithub size={20} onClick={() => window.open(gitLink)} className={styles.Icon} /> }
            {website && <AiOutlineGlobal size={20} onClick={() => window.open(website)} className={styles.Icon} /> }
            {linkedIn && <AiFillLinkedin size={20} onClick={() => window.open(linkedIn)} className={styles.Icon} /> }
            {reddit && <AiFillRedditCircle size={20} onClick={() => window.open(reddit)} className={styles.Icon} /> }
        </div>
    )
}