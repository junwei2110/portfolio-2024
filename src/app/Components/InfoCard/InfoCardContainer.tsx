'use client';

import { useEffect, useRef } from "react";
import { InfoCard, InfoCardProps } from "./InfoCard";
import styles from "./styles.module.scss";




export const InfoCardContainer = ({ listObj }: { listObj: InfoCardProps[]; }) => {

    const infoCardContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[], _observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    infoCardContainerRef.current?.classList.add(styles.animated);
                }
            })
        }


        if (infoCardContainerRef.current) {
            const observer = new IntersectionObserver(callback, { threshold: 0.1 });
            observer.observe(infoCardContainerRef.current);
        }

    }, [])

    return (
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
                />
            ))}
        </div>
    )

}