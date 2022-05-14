import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Me() {
    return(
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    ABOUT ME
                </h1>
                <h2 className={styles.container}>
                    Arman Babakhani
                </h2>
                <p className={styles.me}>
                    I am a researcher and a PhD student, studying quantum information theory. 
                    I have always had an immense enthusiasm for mathematics and physics. 
                    My academic journey, however, has been full of explorations along various paths in engineering and chemistry. I have received a Bachelor's degree in Engineering physics
                    from UC Berkeley and a Masters of Science in Chemistry from University of California, Santa Barbara. Check out my <a href=" " > Resume </a>.
                    Tutoring has been an opportunity to not only support myself during my undergraduate studies, but be able to expand my knowledge and understanding of the topics I've taught. 

                    Learning a new topic and mastering one's understanding of it is an intricate process that I have spent a lot of time thinking about. 
                    Just like any other enterprise, it can be done poorly or efficiently, or somewhere in between. 
                    I hope to provide an optimal learning opportunity for new learners and passionate students who would like to expand their understanding of mathematics, physics, and chemistry. 
                    With more than seven years of experience in teaching, I am able to guide students through a joyful learning experience, with the hope of fueling their excitement to learn about the understanding of the world they live in.
                </p>
            </main>
            <footer className={styles.footer}>
                <Link href="/" passHref><a> Return to the Main Page </a></Link>
            </footer>
        </div>
        
    )
}