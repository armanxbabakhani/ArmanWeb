import Link from 'next/link'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'

export default function Projects() {
    return(
        <div>
            <main className={styles.main}>
                <div className={styles.title}>
                    <h1>PROJECTS</h1>
                </div>
                <div className={styles.introbox}>
                    <p> My work extends on various topics in quantum information including quantum error correction, 
                    topological quantum computing, and quantum chaos.</p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.roundbox}>
                        <h3>Quantum Monte Carlo</h3>
                        <p> Quantum Monte Carlo (QMC) is a computational method to simulate many-body quantum systems. In this work, we have proposed QMC algorithm using Permutation Matrix Representation (PMR) for arbitrary spin-1/2 Hamiltonians, and have provided a full computational package on GitHub.
                            {' '}
                            <h4> Preprint: <a href="https://arxiv.org/abs/2307.06503" > arXiv </a> </h4>
                        </p>
                    </div>

                    <div className={styles.roundbox}>
                        <h3>Quantum Error Correction</h3>
                        <p> Continuous weak measurement could allow one to detect errors and thereby correct them. 
                            In time-dependent Hamiltonians, we explore the performance of a quantum feedback mechanism using continuous weak measurements.
                            {' '}
                            <h4> Publication: <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.042406" > PhysRevA.103.042406 </a> </h4>
                        </p>
                    </div>

                    <div className={styles.roundbox}>
                        <h2>Topological Quantum Computing</h2>
                        <p> The mathematical framework of non-abelian anyons with topological defects can be explored using a framework known as G-crossed modular tensor categories. In this work, we show
                            an intrinsic connection between topology of higher genus surfaces and fusion categories of topological defects.
                            {' '}
                            <h4> Publication: <a href="https://link.springer.com/article/10.1007/s00220-023-04789-4" > Communications in Mathematical Physics </a> </h4>
                        </p>
                    </div>

                    <div className={styles.roundbox}>
                        <h2>Quantum chaos with non-abelian charges</h2>
                        <p> The Eigenstate Thermalization Hypothesis (ETH) postulates that pure quantum systems that are chaotic and do self-thermalize in the long-time limit. Presence of large number of symmetries, however, in general, prevents a quantum system to 
                            thermalize. In the presence of small number abelian symmetries, ETH postulate is still valid for chaotic quantum systems. In this work, we extend the ETH hypothesis to systems with non-abelian SU(2) symmetry.  
                            {' '}
                            <h4> Publication: <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.140402" > PhysRevLett.130.140402 </a> </h4>
                        </p>
                    </div>
                </div>
                <div className={styles.logo}> 
                    <h3> My Google Scholar page: </h3>
                    <a href="https://scholar.google.com/citations?user=JEa4EDAAAAAJ&hl=en">
                        <Image src="/googsch_logo.png" alt="googsch" width="75px" height="75px" /> 
                    </a>
                </div>
            </main>
        </div>
        
    )
}