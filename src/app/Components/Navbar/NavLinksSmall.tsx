'use client';

import Link from "next/link"
import styles from './navStyles.module.scss'
import { useRef, useState } from "react";
import { NavLink } from "./Navbar";

export const NavLinksSmall = ({ navLinks1, navLinks2 }: { navLinks1: NavLink[]; navLinks2: NavLink[]}) => {
    const toplineRef = useRef<HTMLDivElement | null>(null);
    const btmlineRef = useRef<HTMLDivElement | null>(null);

    const handleOpenModal = () => {
        if (openModal) {
            toplineRef.current?.classList.add(styles.lineTopRevert);
            btmlineRef.current?.classList.add(styles.lineBtmRevert);
            toplineRef.current?.classList.remove(styles.lineTopBecomeCross);
            btmlineRef.current?.classList.remove(styles.lineBtmBecomeCross);
        } else {
            toplineRef.current?.classList.add(styles.lineTopBecomeCross);
            btmlineRef.current?.classList.add(styles.lineBtmBecomeCross);
            toplineRef.current?.classList.remove(styles.lineTopRevert);
            btmlineRef.current?.classList.remove(styles.lineBtmRevert);
        }     
        setOpenModal(!openModal)
    }

    const [openModal, setOpenModal] = useState(false);
    return (
    <>
        <div className={styles.NavLinksContainer}>
            <div className={styles.NavLinksBoxSmall1} onClick={handleOpenModal}>
                <div ref={toplineRef} className={styles.lineTop}></div>
                <div ref={btmlineRef} className={styles.lineBottom}></div>
            </div>
        </div>
        {openModal ? <div className={styles.NavLinksSmallOverlay}>
            {navLinks1.map((link) => (
                <Link
                key={link.name}
                href={link.href}
                onClick={handleOpenModal}
                >
                    <p>{link.name}</p>
                </Link>
            ))}
            {navLinks2.map((link) => (
                <Link
                key={link.name}
                href={link.href}
                >
                    <p className={styles.ButtonLink}>{link.name}</p>
                </Link>
            ))}
        </div> : null}
    </>
    )
}