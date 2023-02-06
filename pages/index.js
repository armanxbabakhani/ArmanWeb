import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <html>
      <Head>
        <title>Arman Babakhani</title>
        <meta name="personal website" content="porjects and services, initial-scale=1.0" />
        <link rel="icon" href="/Armanlogo.png" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.pframe}>
            <Image src="/Arman_portrait_1.jpg" alt="Arman" width="340px" height="290px" className={styles.portrait}/>
          </div>
          <div className={styles.introbox}>
            <h3>Welcome! I am</h3>
            <h1>
              Arman Babakhani 
            </h1>
            <h4>I am a researcher and a PhD student in quantum information theory and quantum algorithms.</h4>
          </div>
          <div className={styles.grid}>
            {' '}
            <div  className={styles.card}>
              <Link href="/me"passHref>
                <a>
                  <h2>About Me &rarr;</h2>
                  <p> My educational background and interests.</p>
                </a>
              </Link>
            </div>

            <div className={styles.card}>
              <Link href="/projects"passHref>
                <a>
                  <h2>Research &rarr;</h2>
                  <p>Completed projects and collaborations</p>
                </a>
              </Link>
            </div>

            <div className={styles.card}>
              <Link href="/tutoring" passHref>
                <a>
                  <h2>Tutoring &rarr;</h2>
                  <p>Tutoring and educational consultation for STEM students.</p>
                </a>
              </Link>
            </div>

            <a
              href="#!"
              className={styles.card}
            >
              <h2>Notes and Ongoing Projects &rarr;</h2>
              <p>
                Some of my ongoing projects and some notes on miscellaneous topics.
              </p>
            </a>
          </div>
        </main>
      </div>
    </html>
    
  )
}
