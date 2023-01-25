import { useState } from "react";
import styles from "../styles/Layout.module.css"
import styleshome from "../styles/Home.module.css"
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components';


export default function Layout({children}){
    const Hamburger = styled.div`
    width: 40px;
    height: 5px;
    background-color: #BCBCBC;
    margin: 6px 0;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;

    &::before, &::after {
        content: "";
        width: 40px;
        height: 5px;
        position: absolute;
        background-color: #BCBCBC;
        margin: 6px 0;
        border-radius: 3px;
        transition: all 0.5s ease-in-out;
    }

    &::before {
        transform: translateY(10px);
    }

    &::after {
        transform: translateY(-20px);
    }

    &.open {
        background-color: transparent;

        &::before {
        transform: translateY(-5px) rotate(45deg);
        }

        &::after {
        transform: translateY(-5px) rotate(-45deg);
        }
    }
    `;
    const [isOpen, setIsOpen] = useState(false);
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
                    <Hamburger className={isOpen ? "open" : ""} onClick={() => setIsOpen(!isOpen)} />
                    {isOpen && <div className={styles.sidenav}>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Publications</a>
                        <a href=" ">Contact</a>
                        <a href=" ">Educational</a>
                        </div>
                     }
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

