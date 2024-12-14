import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.pframe}>
          <Image src="/Arman_headshot.jpg" alt="Arman" width={335} height={420} className={styles.portrait}/>
        </div>
        <div className={styles.introbox}>
          <h3> Welcome! I am </h3>
          <h1> Arman Babakhani </h1>
          <h4> Researcher and a PhD student in quantum information theory and quantum algorithms.</h4>
        </div>
        <div className={styles.grid}>
          <div  className={styles.card}>
            <Link href="/me"passHref>
              <h2>About Me &rarr;</h2>
              <p> My educational background and interests.</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/projects"passHref>
              <h2>Research &rarr;</h2>
              <p>Completed projects and collaborations</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="https://www.axbhub.org" passHref>
              <h2>Tutoring &rarr;</h2>
              <p>Tutoring and educational consultation for STEM students.</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/projects" passHref>
              <h2>Notes and Ongoing Projects &rarr;</h2>
              <p>Some of my ongoing projects and some notes on miscellaneous topics.</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
