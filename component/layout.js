import { useState } from "react";
import styles from "../styles/Layout.module.css"
import styleshome from "../styles/Home.module.css"
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({children}){
    const [active , setActive] = useState(false);
    return <> 
        <body>
            <head className={styles.navigation}>
                <div className={styles.brand}>
                    <a>Arman Babakhani</a>
                </div>
                <div className={styles.brandabv}>
                    <a>AB</a>
                </div>
                <nav>
                    <ul>
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
                                    <a href="https://arxiv.org/abs/2210.14943"> Topological Defects</a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/abs/2206.05310"> Non-abelian Quantum Chaos </a>
                                </li>
                                <li>
                                    <a href="https://opg.optica.org/optica/fulltext.cfm?uri=optica-6-6-794&id=413486"> Deep Learning: Microscopy </a>
                                </li>
                            </DropdownMenu>
                        </ItemDrop>
                        <li>
                            <a href="/Arman_Resume_web.pdf">CV</a>
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
                <div className={styles.hamwrapper}>
                    <div onClick={() => setActive(!active)}> 
                        <div className={active ? styles.hamchange : styles.hamreg}/>
                    </div>
                </div>
            </head>
            <main className={styles.main}>
                {children}
            </main>
            <footer>
                <div className={styleshome.footer}>
                    <p> Connect with me: </p>
                    <a href="https://www.linkedin.com/in/arman-babakhani/"> 
                        <Image src="/linkedin.png" alt="linkedin" width="50px" height="50px" /> 
                    </a>
                    <a href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA"> 
                        <Image src="/youtubetrans.png" alt="youtube" width="70px" height="70px" /> 
                    </a>
                    <a href="https://github.com/armanxbabakhani">
                        <Image src="/github.png" alt="github" width="50px" height="50px" /> 
                    </a>
                </div>
            </footer>
        </body>
            
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

