import React , { useState } from "react"
import styles from "../styles/Layout.module.css"
import styleshome from "../styles/Home.module.css"
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Background = styled.div`
position: relative;
top: 80px;
background: var(--color-background);
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
background-color: var(--color-primary);
margin: 0 0;
border-radius: 3px;
transition: all 0.5s ease-in-out;
&::before, &::after {
    content: "";
    width: 40px;
    height: 5px;
    position: absolute;
    background-color: var(--color-primary);
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
                    <Link href="/">Arman Babakhani</Link>
                </div>
                <div className={styles.brandabv}>
                    <Link href="/">AB</Link>
                </div>
                <nav>
                    <div className={styles.navwrap}>
                        <li>
                            <Link href="/"passHref> Home </Link>
                        </li>
                        <li>
                            <Link href="/research" passHref> Research</Link>
                        </li>
                        <li>
                            <Link href="/about" passHref> About</Link>
                        </li>
                        <li>
                            <Link href="/Arman_Resume_web.pdf" passHref> CV </Link>
                        </li>
                    </div>
                </nav>
                <div className={styles.hamwrapper} onClick={() => setIsOpen(!isOpen)}>
                    <Hamburger className={isOpen ? "open" : ""}>
                    {isOpen && <Toplay/>}
                    {isOpen && 
                        <div className={styles.sidenav}>
                            <Link href="/" passHref> Home </Link>
                            <Link href="/research" passHref> Research </Link>
                            <Link href="/about" passHref> About </Link>
                            <Link href="/Arman_Resume_web.pdf" passHref> CV </Link>
                        </div>
                    }
                    </Hamburger>
                </div>
            </div>
            <Background>
                {children}
                <footer className={styleshome.footer}>
                    <p> © 2025 Arman Babakhani </p>
                    <a href="https://scholar.google.com/citations?user=mnq3tfUAAAAJ&hl=en">
                        <Image src="/googsch_logo.png" alt="Google Scholar" width={50} height={50} />
                    </a>
                    <a href="https://www.linkedin.com/in/arman-babakhani/"> 
                        <Image src="/linkedin.png" alt="LinkedIn" width={50} height={50} /> 
                    </a>
                    <a href="https://github.com/armanxbabakhani">
                        <Image src="/github.png" alt="GitHub" width={50} height={50} /> 
                    </a>
                </footer>
            </Background>
        </section>
    );
}
