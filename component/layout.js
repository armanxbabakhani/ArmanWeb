import { useState } from "react";
import styles from "../styles/Layout.module.css"
import Link from 'next/link'

export default function Layout({children}){
    return <> 
        <section className={styles.navigation}>
            <div className={styles.navcontainer}>
                <div className={styles.brand}>
                    <a>Arman Babakhani</a>
                </div>
                <nav>
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
                        <ItemDrop name = 'Publication'>
                            <DropdownMenu>
                                <li>
                                    <a href="#!">Quantum Error Correction</a>
                                </li>
                                <li>
                                    <a href="#!"> Topological Defects</a>
                                </li>
                                <li>
                                    <a href="#!"> Non-abelian Quantum Chaos </a>
                                </li>
                            </DropdownMenu>
                        </ItemDrop>
                        <li>
                            <a href="#!">CV</a>
                        </li>
                        <ItemDrop name = 'Educational'>
                            <DropdownMenu>
                                <li>
                                    <a href="#!">YouTube Videos</a>
                                </li>
                                <li>
                                    <a href="#!">Tutoring Experience</a>
                                </li>
                            </DropdownMenu>
                        </ItemDrop>
                        <li>
                            <a href="#!">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    {children}
    </>
}

function ItemDrop(props){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li>
            <ul className={styles.droplist}>
                <li>
                    <a href='#' onClick={() => setIsOpen(!isOpen)}>
                        {props.name}
                    </a>
                </li>
            </ul>
            {isOpen && props.children}
            {isOpen && <div className={styles.overlay} onClick = {() => setIsOpen(false)}></div>}
        </li>
    )
}

function DropdownMenu(props){
    return (
        <div className={styles.navdropdown}> 
            {props.children}
        </div>
    )
}