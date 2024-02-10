"use client";
import styles from "./styles.module.scss";
import { AiFillGithub, AiOutlineGlobal, AiFillLinkedin, AiFillRedditCircle, AiFillMail } from "react-icons/ai";


export type IconWithDescProps = {
    iconName: IconName;
    link: string;
    text: string;
}

export type IconName = "gitLink" | "website";

export const IconWithDesc = ({ iconName, link, text }: IconWithDescProps) => {

    const renderIcon = () => {
        switch (iconName) {
            case "gitLink":
                return <AiFillGithub size={20}  />
            case "website":
                return <AiOutlineGlobal size={20} />
            default:
                return null;
        }
    }
    
    return (
        <div className={styles.IconContainer} onClick={() => window.open(link)}>
            {renderIcon()}
            <span>{text}</span>
        </div>
    )
}