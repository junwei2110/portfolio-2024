'use client';

import { useEffect, useRef, useState } from "react";
import { InfoCard, InfoCardProps } from "./InfoCard";
import styles from "./styles.module.scss";
import { ImageCarousell, Images } from "../ImageCarousell/ImageCarousellSmooth";
import { IoCloseSharp } from "react-icons/io5";




export const InfoCardContainer = ({ listObj }: { listObj: InfoCardProps[]; }) => {

    const infoCardContainerRef = useRef<HTMLDivElement | null>(null);
    const [picLinks, setPicLinks] = useState<Images>([]);
    // const [openImgGallery, setOpenImgGallery] = useState(false);

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[], _observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    infoCardContainerRef.current?.classList.add(styles.animatedInfoCardOverallContainer);
                }
            })
        }


        if (infoCardContainerRef.current) {
            const observer = new IntersectionObserver(callback, { threshold: 0.1 });
            observer.observe(infoCardContainerRef.current);
        }

    }, [])


    const handleCloseImgGallery = () => {
        setPicLinks([]);
    }

    return (
        <>
        <div ref={infoCardContainerRef} className={styles.InfoCardOverallContainer}>
            {listObj.map((project) => (
                <InfoCard
                key={project.title} 
                title={project.title}
                timeline={project.timeline}
                description={project.description}
                picture={project.picture}
                picture_alt={project.picture_alt}
                gitLink={project.gitLink}
                website={project.website}
                pictureLinks={project.pictureLinks}
                setPicLinks={setPicLinks}
                />
            ))}
        </div>
        {picLinks?.length ?
        <>
            <div className={styles.ImgGalleryOverlay} />
            <div className={styles.ImgGalleryDivContainer}> 
                <div className={styles.ImgGalleryDiv}>
                    <ImageCarousell
                    images={picLinks}
                    />
                </div>
                <IoCloseSharp size={50} onClick={handleCloseImgGallery} />
            </div>
        </>
        : null}
        </>
    )

}