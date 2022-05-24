import { useState } from "react";
import styles from "../styles/Layout.module.css"
import Link from 'next/link'

export default function Layout({children}){
    const openMenu = ()=> setIsOpen(!isOpen);
    return <> 
        <section className={styles.navigation}>
            <div className={styles.navcontainer}>
                <div className={styles.brand}>
                    <a>Arman Babakhani</a>
                </div>
                <nav>
                    {/* <div className={styles.navmobile}><a id="navbar-toggle" href="#!"><span></span></a></div> */}
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
                                    <a href="#!">Sass</a>
                                </li>
                                <li>
                                    <a href="#!">Less</a>
                                </li>
                                <li>
                                    <a href="#!">Stylus</a>
                                </li>
                            </DropdownMenu>
                        </ItemDrop>
                        <li>
                            <a href="#!">CV</a>
                        </li>
                        <ItemDrop name = 'Educational'>
                            <DropdownMenu>
                                <li>
                                    <a href="#!">Sass</a>
                                </li>
                                <li>
                                    <a href="#!">Less</a>
                                </li>
                                <li>
                                    <a href="#!">Stylus</a>
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
    {/* <></> */}
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