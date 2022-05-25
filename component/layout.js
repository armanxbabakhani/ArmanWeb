import { useState } from "react";
import styles from "../styles/Layout.module.css"
import styleshome from "../styles/Home.module.css"
import Link from 'next/link'
import Image from 'next/image'

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
                                    <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.042406">Quantum Error Correction</a>
                                </li>
                                <li>
                                    <a href="https://inspirehep.net/authors/2031259"> Topological Defects</a>
                                </li>
                                <li>
                                    <a href="#!"> Non-abelian Quantum Chaos </a>
                                </li>
                            </DropdownMenu>
                        </ItemDrop>
                        <li>
                            <a href="/Arman_Resume.pdf">CV</a>
                        </li>
                        <ItemDrop name = 'Educational'>
                            <DropdownMenu>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA">YouTube Videos</a>
                                </li>
                                <li>
                                    <Link href="/tutoring" passHref> 
                                        <a>Tutoring Experience</a> 
                                    </Link> 
                                </li>
                            </DropdownMenu>
                        </ItemDrop>
                    </ul>
                </nav>
            </div>
        </section>
        {children}
        <footer>
            <div className={styleshome.footer}>
                <a href="www.linkedin.com/in/arman-babakhani"> 
                    <Image src="/linkedin.png" alt="linkedin" width="50px" height="50px" /> 
                </a>
                <a href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA"> 
                    <Image src="/youtube.png" alt="youtube" width="120px" height="40px" /> 
                </a>
            </div>
        </footer>
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