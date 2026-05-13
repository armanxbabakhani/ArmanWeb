import Link from 'next/link'
import styles from '../styles/me.module.css'

export default function About() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>ABOUT</h1>
            </div>
            <div className={styles.me}>
                <p>
                    I am a researcher at JP Morgan Chase&apos;s Global Research division, working on quantum algorithms and their applications to computational finance. His research spans quantum Monte Carlo methods, quantum error correction, topological quantum computing, and quantum thermalization.
                </p>
                <p>
                    I received my PhD in Physics from the University of Southern California, where my work focused on quantum information theory. Prior to that, he earned a Master&apos;s degree in Chemistry from the University of California, Santa Barbara, and a Bachelor&apos;s degree in Engineering Physics from the University of California, Berkeley.
                </p>
                <p>
                    My work has been published in Physical Review Letters, Physical Review A, Communications in Mathematical Physics, and Optica, and has been cited over 340 times. See his full <a href="/Arman_Resume_web.pdf">CV</a>, or explore his <a href="https://scholar.google.com/citations?user=mnq3tfUAAAAJ&hl=en">Google Scholar profile</a>.
                </p>
            </div>
        </main>
    )
}
