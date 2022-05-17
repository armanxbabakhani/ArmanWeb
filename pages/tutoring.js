import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Tutoring() {
    return(
        <div className={styles.container}>
            <p className={styles.main}>
                <p className={styles.container}>
                    <Image src="/main_logo.png" alt="Future logo" width={200} height={200} />
                </p>
                <h3 className={styles.title}>
                    Educational Services
                </h3>
                <h2>
                    Arman Babakhani | Future Tutoring
                </h2>
                <p className={styles.plaintext}>
                    Private tutoring for subjects of mathematics, physics, and chemistry is offered. Here is a detailed list:
                    <li> High School: AP Physics, Calculus and Chemistry</li>
                    <li> Physics: Quantum and Classical mechanics both undergraduate and graduate level, Electromagnetism, quantum computing and more</li>
                    <li> Calculus and higher mathematics: multivariable/vector calculus, complex analysis, linear algebra and more</li>
                    <li> Chemistry: Organic, Inorganic, physical, and quantum chemistry undergraduate and some graduate level </li>
                </p>
            </p>
            <p className={styles.main}>
                <h2> My Experience in Teaching </h2>
            </p>
            
            <footer className={styles.footer}>
                <Link href="/" passHref><a> Return to the Main Page </a></Link>
            </footer>
        </div>
        
    )
}