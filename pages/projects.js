import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Me() {
    return(
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    PROJECTS
                </h1>
                <p className={styles.introbox}>
                    I have worked on various topics in quantum information including quantum error correction, 
                    topological quantum computing, and quantum chaos.
                </p>
                <div className={styles.grid}>
                    <a className={styles.roundbox}>
                        <h2>Quantum Error Correction</h2>
                        <p> Continuous weak measurement could allow one to detect errors and thereby correct them. 
                            In time-dependent Hamiltonians, we explore the performance of a quantum feedback mechanism using continuous weak measurements.
                            {' '}
                            <h4> Publication: <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.042406" > PhysRevA.103.042406 </a> </h4>
                        </p>
                    </a>

                    <a className={styles.roundbox}>
                        <h2>Topological Quantum Computing</h2>
                        <p> The mathematical framework of non-abelian anyons with topological defects can be explored using a framework known as G-crossed modular tensor categories. In this work, in collaboration with Dr. Parsa Bonderson from Microsoft, I show
                            an intrinsic connection between topology of higher genus surfaces and fusion categories of topological defects.
                            {' '}
                            <h4> Publication: <a href="https://inspirehep.net/authors/2031259" > InspireHEP </a> </h4>
                        </p>
                    </a>

                    <a className={styles.roundbox}>
                        <h2>Quantum chaos with non-abelian charges</h2>
                        <p> The Eigenstate Thermalization Hypothesis (ETH) postulates that pure quantum systems that are chaotic and do self-thermalize in the long-time limit. Presence of large number of symmetries, however, in general, prevents a quantum system to 
                            thermalize. In the presence of small number abelian symmetries, ETH postulate is still valid for chaotic quantum systems. In this work, we extend the ETH hypothesis to systems with non-abelian SU(2) symmetry.  
                            {' '}
                            <h4> Publication: <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.042406" > arXiV </a> </h4>
                        </p>
                    </a>
                </div>
            </main>
        </div>
        
    )
}