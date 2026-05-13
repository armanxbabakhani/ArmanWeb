import React , { useState } from "react"
import styles from "../styles/Layout.module.css"
import styleshome from "../styles/Home.module.css"
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

function ItemDrop(props){
    const [isOpen1, setIsOpen1] = useState(false);
    return (
        <div>
            <div className={styles.droplist}>
                <a href='#' onClick={() => setIsOpen1(!isOpen1)}>
                    {props.name}
                </a>
            </div>
            {isOpen1 && props.children}
            {isOpen1 && <div className={styles.overlay} onClick = {() => setIsOpen1(false)}></div>}
        </div>
    );
}

function DropdownMenu(props){
    return (
        <div className={styles.navdropdown}> 
            {props.children}
        </div>
    );
}

const Background = styled.div`
position: relative;
top: 80px;
background: #f7f9fb;
display: flex;
flex-direction: column;
justify-content: center;
overflow: auto;
z-index: 1;
min-height: calc(100vh - 80px);
`;
const Toplay = styled.div`
position: fixed;
inset: 0;
background: rgba(25, 28, 30, 0.45);
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
z-index: 9;
overflow: auto;
`;

const Hamburger = styled.div`
z-index: 20;
width: 40px;
height: 5px;
background-color: #000000;
margin: 0 0;
border-radius: 3px;
transition: all 0.5s ease-in-out;
&::before, &::after {
    content: "";
    width: 40px;
    height: 5px;
    position: absolute;
    background-color: #000000;
    margin: 6px 0;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;
    z-index: 20;
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

export default function Layout({children}){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className={styles.container}>
            <div className={styles.navigation}>
                <div className={styles.brand}>
                    <a>Arman Babakhani</a>
                </div>
                <div className={styles.brandabv}>
                    <a href="./">AB</a>
                </div>
                <nav>
                    <div className={styles.navwrap}>
                        <li>
                            <Link href="/"passHref> Home </Link>
                        </li>
                        <li>
                            <Link href="/me" passHref> About</Link>
                        </li>
                        <ItemDrop name = 'Publications'>
                            <DropdownMenu>
                                <li>
                                    <Link href="https://arxiv.org/abs/2307.06503" passHref> Quantum Monte Carlo </Link>
                                </li>
                                <li>
                                    <Link href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.042406" passHref> Quantum Error Correction </Link>
                                </li>
                                <li>
                                    <Link href="https://arxiv.org/abs/2210.14943" passHref> Topological Defects </Link>
                                </li>
                                <li>
                                    <Link href="https://arxiv.org/abs/2206.05310" passHref> Non-abelian Quantum Chaos </Link>
                                </li>
                                <li>
                                    <Link href="https://opg.optica.org/optica/fulltext.cfm?uri=optica-6-6-794&id=413486" passHref> Deep Learning: Microscopy</Link>
                                </li>
                            </DropdownMenu>
                        </ItemDrop>
                        <li>
                            <Link href="/Arman_Resume_web.pdf" passHref> CV </Link>
                        </li>
                        <ItemDrop name = 'Educational'>
                            <DropdownMenu>
                                <li>
                                    <Link href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA" passHref> Videos </Link>
                                </li>
                                <li>
                                    <Link href="/tutoring" passHref> Tutoring </Link>
                                </li>
                            </DropdownMenu>
                        </ItemDrop>
                    </div>
                </nav>
                <div className={styles.hamwrapper} onClick={() => setIsOpen(!isOpen)}>
                    <Hamburger className={isOpen ? "open" : ""}>
                    {isOpen && <Toplay/>}
                    {isOpen && 
                        <div className={styles.sidenav}>
                            <Link href="/" passHref> Home </Link>
                            <Link href="/me" passHref> About </Link>
                            <Link href="/projects" passHref> Publications </Link>
                            <Link href="/Arman_Resume_web.pdf" passHref> CV </Link>
                            <Link href="/tutoring" passHref> Tutoring </Link>
                            <Link href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA" passHref> Videos </Link>
                        </div>
                    }
                    </Hamburger>
                </div>
            </div>
            <Background>
                {children}
                <div className={styleshome.footer}>
                    <p> Connect with me </p>
                    <a href="https://www.linkedin.com/in/arman-babakhani/"> 
                        <Image src="/linkedin.png" alt="linkedin" width={60} height={60} /> 
                    </a>
                    <a href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA"> 
                        <Image src="/youtubetrans.png" alt="youtube" width={75} height={75} /> 
                    </a>
                    <a href="https://github.com/armanxbabakhani">
                        <Image src="/github.png" alt="github" width={60} height={60} /> 
                    </a>
                </div>
            </Background>
        </section>
    );
}

