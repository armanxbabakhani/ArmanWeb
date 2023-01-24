import Link from 'next/link'
import styles from '../styles/Tutoring.module.css'
import Image from 'next/image'

export default function Tutoring() {
    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.logotitle}>
                    <div className={styles.logo}>
                        <Image src="/main_logo.png" alt="Future logo" width={100} height={100} />
                    </div>
                    <h1> Tutoring and Educational Consultation </h1>
                </div>
                <div className={styles.description}>
                    <h2> Private tutoring for subjects of mathematics, physics, and chemistry is offered. Here is a detailed list of my courses I tutor </h2>
                    <li> High School: AP Physics, Calculus and Chemistry</li>
                    <li> Physics: Quantum and Classical mechanics both undergraduate and graduate level, Electromagnetism, quantum computing and more</li>
                    <li> Calculus and higher mathematics: multivariable/vector calculus, complex analysis, linear algebra and more</li>
                    <li> Chemistry: Organic, Inorganic, physical, and quantum chemistry undergraduate and some graduate level </li>
                    <h2> Contact me via Email: armanxbabakhani@gmail.com, or connect with me on LinkedIn via the link at the bottom of the page.</h2>
                    <a> </a>
                    <li> More than eight years of experience in teaching Calculus, College physics and Chemistry.</li>
                    <li> Experience in teaching undergraduate courses as a Graduate Teaching assistant in UC Santa Barbara.</li>
                    <li> For a detailed review of my previous tutoring experiences and student reviews, check out my tutor profile on <a href="https://www.wyzant.com/Tutors/ArmanB"> Wyzant.com </a></li>
                </div>
            </div>
        </div>
        
    )
}