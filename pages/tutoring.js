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
            </p>
            
            <footer className={styles.footer}>
                <Link href="/" passHref><a> Return to the Main Page </a></Link>
            </footer>
        </div>
        
    )
}