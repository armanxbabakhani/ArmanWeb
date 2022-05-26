import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Me() {
    return(
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    ABOUT ME
                </h1>
                <div className={styles.me}>
                    <p>
                    I am a researcher and a PhD student, studying quantum information theory. 
                    I have always had an immense enthusiasm for mathematics and physics. 
                    My academic journey, however, has been full of explorations along various paths in engineering and chemistry. I have received a Bachelor &apos; s degree in Engineering physics
                    from UC Berkeley and a Masters of Science in Chemistry from University of California, Santa Barbara. Check out my <a href="/Arman_Resume_web.pdf" > CV </a>.
                    </p>
                    <p>
                    Learning through teaching has been a very fruitful enterprise for me as an intellectually curious researcher. Tutoring has been an opportunity to not only support myself during my undergraduate studies, but be able to expand my knowledge and understanding of the topics I&apos;ve taught. 
                    Learning a new topic and mastering one&apos;s understanding of it is an intricate process that I have spent a lot of time thinking about. 
                    Just like any other enterprise, it can be done poorly or efficiently, or somewhere in between. Having repeated this process tens of thousands of times has not only made me optimize
                    my approach to learning but has taught me a lot about myself. Learning one&apos;s own intellectual boundaries is always challenging and not a very uplifting process, however, the alternative is passive and cowardly. 
                    </p>
                </div>
            </main>
        </div>
        
    )
}