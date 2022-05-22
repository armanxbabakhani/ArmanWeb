import { useState } from "react";
import styles from "../styles/Layout.module.css"
import Link from 'next/link'

export default function Layout({children}){
    return <> 
        <section className={styles.navigation}>
            <div className={styles.navcontainer}>
                <div className={styles.brand}>
                    <a href="#!">Arman Babakhani</a>
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
                            <a href="#!">Publications</a>
                            <ul className={styles.navbardropdown}>
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
                            <a href="#!">Educational Services</a>
                            <ul className={styles.navbardropdown}>
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