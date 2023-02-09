import React , { useState } from "react";
import styles from "../styles/Layout.module.css"
import styleshome from "../styles/Home.module.css"
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components';

const Toplay = styled.div`
position: fixed;
left:0;
right:0;
top: 0;
bottom: 0;
background-color: gray;
opacity: 0.7;
width:100%;
height:100%;
z-index: 10;
overflow: auto;
`

const Background = styled.div`
position: relative;
top:75px;
background: linear-gradient(135deg , gray, white);
display: flex;
flex-direction: column;
jutify-content: center;
overflow: auto;
z-index: 1;

`
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
const Backarrow = styled.div`
    /* styles for the button */
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    background-color: black;
    border-radius: 4px;
    border: none;
    
    /* styles for the arrow */
    position: relative;
    width: 0;
    height: 0;
    margin-right: 8px;
    }
    
    &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
    }`;

export default function Layout({children}){
    const [isOpen, setIsOpen] = useState(false);
    return <> 
        <head className={styles.navigation}>
            <div className={styles.brand}>
                <a>Arman Babakhani</a>
            </div>
            <div className={styles.brandabv}>
                <a href="./">AB</a>
            </div>
            <nav>
                <div className={styles.navwrap}>
                    <li>
                        <Link href="/"passHref> 
                            <a> Home</a> 
                        </Link>
                    </li>
                    <li>
                        <Link href="/me" passHref> 
                            <a> About </a> 
                        </Link>
                    </li>
                    <ItemDrop name = 'Publications'>
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
                                <a href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA">Videos</a>
                            </li>
                            <li>
                                <Link href="/tutoring" passHref> 
                                    <a>Tutoring</a> 
                                </Link> 
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
                        <a href="/">Home</a>
                        <a href="/me">About</a>
                        <a href="/projects">Publications</a>
                        <a href="/Arman_Resume_web.pdf">CV</a>
                        <a href="/tutoring">Tutoring</a>
                        <a href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA">Videos</a>
                    </div>
                    }
            </div>
        </head>
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
            
    </>
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

