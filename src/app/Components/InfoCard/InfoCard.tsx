'use client';

import { useRef } from "react";
import { ImageContainer as Image } from "../ImageContainer/ImageContainer";
import styles from "./styles.module.scss";
import parse from 'html-react-parser';
import { Images } from "../ImageCarousell/ImageCarousellSmooth";
import { IconWithDesc } from "../IconContainer/IconWithDesc";


export type InfoCardProps = {
    title: string;
    timeline: string;
    description: string;
    picture: string;
    picture_alt: string;
    gitLink?: string;
    website?: string;
    pictureLinks?: Images;

    
}

type InfoCardSpecificProps = {
    setPicLinks: (images: Images) => void;
    isMobile: boolean
}


export const InfoCard = ({ title, timeline, description, picture, picture_alt, gitLink, website, pictureLinks, setPicLinks, isMobile }: InfoCardProps & InfoCardSpecificProps) => {

    const imageContainerRef = useRef<HTMLDivElement | null>(null);
    const imageTextBoxRef = useRef<HTMLDivElement | null>(null);


    const imageHoverOverAnimation = () => {
        imageContainerRef.current?.classList.add(styles.animatedInfoCardPicture);
        imageTextBoxRef.current?.classList.add(styles.animatedInfoCardTextBox);
        
    }

    const imageHoverLeaveAnimation = () => {
        imageContainerRef.current?.classList.remove(styles.animatedInfoCardPicture);
        imageTextBoxRef.current?.classList.remove(styles.animatedInfoCardTextBox);
    }

    const callbackFn = (func: () => void) => {
        if (!isMobile && pictureLinks?.length) {
            return func;
        }

        return undefined;
    }

    const handleOpenImgGallery = () => {
        setPicLinks(pictureLinks || []);

    }

    return (
        <div className={styles.InfoCardContainer}>
            <div 
                className={styles.ImageContainer} 
                ref={imageContainerRef} 
                onMouseOver={callbackFn(imageHoverOverAnimation)} 
                onMouseLeave={callbackFn(imageHoverLeaveAnimation)}
                onClick={handleOpenImgGallery}>
                <Image
                url={picture}
                alt={picture_alt}
                />
                <div ref={imageTextBoxRef}>
                    Click for more photos    
                </div>
            </div>
            <div className={styles.DescriptionContainer}>
                <h3><strong>{title}</strong></h3>
                <div><strong>{timeline}</strong></div>
                <div>{parse(description)}</div>
                {gitLink ? <IconWithDesc iconName={"gitLink"} link={gitLink} text={`Github`} /> : null}
                {website ? <IconWithDesc iconName={"website"} link={website} text={`Website`} /> : null}
            </div>
        </div>     
    )

}