import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Me() {
    return(
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    PROJECTS
                </h1>
                <p className={styles.introbox}>
                    I have worked on various topics in quantum information including quantum error correction, 
                    topological quantum computing, and quantum chaos.
                </p>
                <div className={styles.grid}>
                    <a href="/me" className={styles.roundbox}>
                        <h2>Quantum Error Correction</h2>
                        <p> Continuous weak measurement could allow one to detect errors and thereby correct them. 
                            In time-dependent Hamiltonians, we explore the performance of a quantum feedback mechanism using continuous weak measurements.
                            {' '}
                            <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.042406" > <h3>See the publication</h3> </a>
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.roundbox}>
                        <h2>Projects &rarr;</h2>
                        <p>Completed projects and collaborations</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Tutoring &rarr;</h2>
                        <p>Tutoring and educational consultation for STEM students.</p>
                    </a>
                </div>
            </main>
            <footer className={styles.footer}>
                <Link href="/" passHref><a> Return to the Main Page </a></Link>
            </footer>
        </div>
        
    )
}