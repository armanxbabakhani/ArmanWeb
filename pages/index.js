import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.pframe}>
          <Image src="/Arman_headshot.jpg" alt="Arman Babakhani" width={300} height={380} className={styles.portrait}/>
        </div>
        <div className={styles.introbox}>
          <h3>Quantum Algorithms · JP Morgan Chase</h3>
          <h1>Arman Babakhani</h1>
          <h4>Researcher at JP Morgan Chase, Global Research. Exploring quantum algorithms, quantum simulation, and condensed matter theory for computational applications.</h4>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/research" passHref>
              <h2>Research &rarr;</h2>
              <p>Publications across quantum algorithms, quantum Monte Carlo, error correction, and topological phases.</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/about" passHref>
              <h2>About &rarr;</h2>
              <p>Background, education, and research interests.</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="https://scholar.google.com/citations?user=mnq3tfUAAAAJ&hl=en" passHref>
              <h2>Google Scholar &rarr;</h2>
              <p>342+ citations across 16 publications in quantum physics and applied machine learning.</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
