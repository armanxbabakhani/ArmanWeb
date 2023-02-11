import React , { useState } from "react";
import styles from "../styles/Layout.module.css"
import styleshome from "../styles/Home.module.css"
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components';

const Background = styled.div`
position: relative;
top:75px;
background: linear-gradient(135deg , gray, white);
display: flex;
flex-direction: column;
jutify-content: center;
overflow: auto;
z-index: 1;
`;

const Toplay = styled.div`
position: fixed;
left:0;
right:0;
top: 0;
bottom: 0;
background-color: gray;
opacity: 0.7;
width:100%;
height: 100%;
z-index: 10;
overflow: auto;
`;

const Hamburger = styled.div`
z-index: 20;
width: 40px;
height: 5px;
background-color: #BCBCBC;
margin: 0 0;
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

export default function Layout({children}){
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <div>
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
                    <Hamburger className={isOpen ? "open" : ""} />
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
                </div>

            </div>
            <Background>
                {children}
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
            </Background>
        </div>
    )
}

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
    )
}

function DropdownMenu(props){
    return (
        <div className={styles.navdropdown}> 
            {props.children}
        </div>
    )
}

