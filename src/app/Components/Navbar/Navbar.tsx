'use client'

import { useEffect, useRef, useState } from "react"

import { NavLinks } from "./NavLinks"
import { NavLinksSmall } from "./NavLinksSmall"
import styles from './navStyles.module.scss'
import Link from "next/link"

export type NavLink = {
    name: string;
    href: string;
}


const navLinks1 = [
    {
      name: "HOME",
      href: "/"
    },
    {
      name: "CV",
      href: "/Resume_Ng Jun Wei_Feb 2024.pdf"
    },
]

const widthChangeLimit = 760;

export const Navbar = () => {

    const [smallNav, setSmallNav] = useState(false);
    const navbarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY) {
                navbarRef.current?.classList.add(styles.NavbarScrollRender);
            } else {
                navbarRef.current?.classList.remove(styles.NavbarScrollRender);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    useEffect(() => {
        setSmallNav(window.innerWidth < widthChangeLimit);
        const setNavBar = () => {
            setSmallNav(window.innerWidth < widthChangeLimit);
        }
        window.addEventListener('resize', setNavBar);

        return () => {
            window.removeEventListener('resize', setNavBar);
        }
    }, [])
    
    return (
        <div className={styles.NavbarContainer} ref={navbarRef}>
                <div className={styles.NameBox}>
                    <Link
                    key={"link-name"}
                    href={"/"}>
                        Jayden Ng Jun Wei
                    </Link>
                    
                </div>
                {smallNav ? 
                    <NavLinksSmall navLinks1={navLinks1} navLinks2={[]} /> 
                    : 
                    <NavLinks navLinks1={navLinks1} navLinks2={[]} />}
        </div>
    )
}