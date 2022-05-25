import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Tutoring() {
    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.container}>
                    <Image src="/main_logo.png" alt="Future logo" width={200} height={200} />
                </div>
                <h3 className={styles.title}>
                    Tutoring and Educational Consultation
                </h3>
                <h1>
                    Arman Babakhani
                </h1>
                <div className={styles.plaintext}>
                    <h3> Private tutoring for subjects of mathematics, physics, and chemistry is offered. Here is a detailed list of my courses I tutor: </h3>
                    <li> High School: AP Physics, Calculus and Chemistry</li>
                    <li> Physics: Quantum and Classical mechanics both undergraduate and graduate level, Electromagnetism, quantum computing and more</li>
                    <li> Calculus and higher mathematics: multivariable/vector calculus, complex analysis, linear algebra and more</li>
                    <li> Chemistry: Organic, Inorganic, physical, and quantum chemistry undergraduate and some graduate level </li>
                </div>
            </div>
            <div className={styles.main}>
                <h4 className={styles.title}> My Tutoring Experience </h4>
                <ul className={styles.description}>
                    <li> More than eight years of experience in teaching Calculus, College physics and Chemistry.</li>
                    <li> Experience in teaching undergraduate courses as a Graduate Teaching assistant in UC Santa Barbara.</li>
                    <li> For a detailed review of my previous tutoring experiences and student reviews, check out my tutor profile on <a href="https://www.wyzant.com/Tutors/ArmanB"> Wyzant.com </a></li>
                </ul>
            </div>
        </div>
        
    )
}