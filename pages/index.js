import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arman Babakhani</title>
        <meta name="personal website" content="porjects and services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.container}>
          <Image src="/arman_portrait.png" alt="Arman" width="170px" height="200px"/>
        </p>
        <h1 className={styles.title}>
          Arman Babakhani 
        </h1>
        <p className={styles.introbox}>
          <body>I am a researcher and a PhD student interested in quantum information theory and quantum algorithms.</body>
        </p>
        <div className={styles.grid}>
          {' '}
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>About Me &rarr;</h2>
            <p>My educational background and interests.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
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

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Arts &rarr;</h2>
            <p>
              Some of my paintings and drawings as a part-time arts enthusiast.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
