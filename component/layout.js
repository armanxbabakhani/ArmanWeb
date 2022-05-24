import { useState } from "react";
import styles from "../styles/Layout.module.css"
import Link from 'next/link'

export default function Layout({children}){
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = ()=> setIsOpen(!isOpen);
    return <> 
        <section className={styles.navigation}>
            <div className={styles.navcontainer}>
                <div className={styles.brand}>
                    <a>Arman Babakhani</a>
                </div>
                <nav>
                    <div className={styles.navmobile}><a id="navbar-toggle" href="#!"><span></span></a></div>
                    <ul className={styles.navlist}>
                        <li>
                            <Link href="/"passHref> 
                                <a> Home</a> 
                            </Link>
                        </li>
                        <li>
                            <Link href="/me" passHref> 
                                <a> About me </a> 
                            </Link>
                        </li>
                        <li>
                            <a href="#!">
                                Publications
                            </a>
                            <ul className={isOpen === false ? styles.navbardropdown : 'nav ul li a:visited' }
                                onClick={openMenu}>
                                <li>
                                    <a href="#!">Sass</a>
                                </li>
                                <li>
                                    <a href="#!">Less</a>
                                </li>
                                <li>
                                    <a href="#!">Stylus</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!">CV</a>
                        </li>
                        <li>
                            <a href="#!">Educational</a>
                            <ul className={isOpen === false ? styles.navbardropdown : styles.navbardropdown + ' ' + styles.active}>
                                <li>
                                    <a href="#!">Tutoring</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA">Videos</a>
                                </li>
                                <li>
                                    <a href="#!">Notes</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    
    {children}
    {/* <></> */}
    </>
}