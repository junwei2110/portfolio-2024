'use client';

import { IconContainer } from "../IconContainer/IconContainer";
import { ImageContainer as Image } from "../ImageContainer/ImageContainer";
import styles from "./styles.module.scss";
import parse from 'html-react-parser';

type InfoCardProps = {
    title: string;
    timeline: string;
    description: string;
    picture: string;
    picture_alt: string;
    gitLink?: string;
    website?: string;
}


export const InfoCard = ({ title, timeline, description, picture, picture_alt, gitLink, website }: InfoCardProps) => {

    return (
        <div className={styles.InfoCardContainer}>
            <div className={styles.ImageContainer}>
                <Image
                url={picture}
                alt={picture_alt}
                />
            </div>
            <div className={styles.DescriptionContainer}>
                <h3><strong>{title}</strong></h3>
                <div><strong>{timeline}</strong></div>
                <div>{parse(description)}</div>
                <IconContainer gitLink={gitLink} website={website} />
            </div>
        </div>
    )

}