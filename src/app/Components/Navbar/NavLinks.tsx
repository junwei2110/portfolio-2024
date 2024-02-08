import Link from "next/link"
import styles from './navStyles.module.scss'
import { NavLink } from "./Navbar"


export const NavLinks = ({ navLinks1, navLinks2 }: { navLinks1: NavLink[]; navLinks2: NavLink[]}) => {
    return (
    <>
        <div className={styles.NavLinksContainer}>
            <div className={styles.NavLinksBox1}>
                {navLinks1.map((link) => (
                    <Link
                    key={link.name}
                    href={link.href}
                    >
                        <p>{link.name}</p>
                    </Link>
                ))}
            </div>
            <div className={styles.NavLinksBox2}>
                {navLinks2.map((link) => (
                    <Link
                    key={link.name}
                    href={link.href}
                    >
                        <p className={styles.ButtonLink}>{link.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    </>
    )
}