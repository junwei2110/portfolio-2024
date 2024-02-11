'use client'

import Image from 'next/image'
import styles from './styles.module.scss'
import { ButtonGroup } from './ButtonGroup'
import { useState, useEffect, useRef } from 'react'
import { CaptionGroup, TextGroup } from './TextGroup'

export type Images = {
    src: string;
    alt: string;
    text: string;
    subtext: string;
    caption?: string;
}[]

export const ImageCarousell = ({ images, useTimer } : {images: Images; useTimer: boolean}) => {

    const [imgUrl, setImgUrl] = useState(0);
    const prevImgRef = useRef(0);

    const handleSelectPic = (val: number) => {
        prevImgRef.current = imgUrl;
        setImgUrl(val);
    }

    useEffect(() => {
        if (useTimer) {
            const intervalTiming = parseInt(styles.animationDuration) * 1000;
            const galleryInterval = setTimeout(() => {
                prevImgRef.current = imgUrl;
                setImgUrl((imgUrl + 1) % images.length)
            }, intervalTiming);
    
            return () => {
                clearTimeout(galleryInterval);
            }

        }

    }, [imgUrl, images.length, useTimer]);

    return (
      <>
        {images.map((image, idx) => (
            <Image
            key={image.src} 
            src={image.src}
            alt={`img-${idx}`}
            fill={true}
            className={imgUrl === idx ? styles.ImageContainer : (prevImgRef.current === idx ? "" : styles.ImageContainerEmpty)}
            style={{ objectFit: "contain" }}
            />
        ))}
        {(images[imgUrl].text || images[imgUrl].subtext) ? <div className={styles.OverlayContainer} /> : null}
        <TextGroup key={`${imgUrl}-imgText`} text={images[imgUrl].text} subtext={images[imgUrl].subtext} />
        <ButtonGroup noButton={images.length} picNo={imgUrl} setPicNo={handleSelectPic} />
        {images[imgUrl].caption ? <CaptionGroup caption={images[imgUrl].caption!}/> : null}
      </>
    )



}