import Link from 'next/link'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'

export default function Projects() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>PROJECTS</h1>
            </div>
            <div className={styles.introbox}>
                <p> My work extends on various topics in quantum information including quantum error correction, 
                topological quantum computing, and quantum chaos.</p>
            </div>
            <div className={styles.grid}>
                {/* Quantum Monte Carlo */}
                <div>
                    <div className={styles.projectcontainer}>
                        <h3>Quantum Monte Carlo</h3>
                        <div className={styles.projectbox}>
                            <div className={styles.image}>
                                <Image src="/qmc_image.png" alt="Quantum Monte Carlo" width={300} height={300} />
                            </div>
                            <div className={styles.description}>
                                <p> Quantum Monte Carlo (QMC) is a computational method to simulate many-body quantum systems. In this work, we have proposed a QMC algorithm using Permutation Matrix Representation (PMR) for arbitrary spin-1/2 Hamiltonians, and have provided a full computational package on GitHub. </p>
                            </div>
                        </div>
                        <h4>
                            Publication: <Link href="https://arxiv.org/abs/2307.06503" passHref>PhysRevR</Link>
                        </h4>
                    </div>
                </div>

                {/* Quantum Error Correction */}
                <div>
                    <div className={styles.projectcontainer}>
                        <h3>Quantum Error Correction</h3>
                        <div className={styles.projectbox}>
                            <div className={styles.description}>
                                <p>Continuous weak measurement could allow one to detect errors and thereby correct them. In time-dependent Hamiltonians, we explore the performance of a quantum feedback mechanism using continuous weak measurements. </p>
                            </div>
                            <div className={styles.image}>
                                <Image src="/qec_image.png" alt="Quantum Error Correction" width={300} height={300} />
                            </div>
                        </div>
                        <h4>
                            Publication: <Link href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.042406" passHref>PhysRevA.103.042406</Link>
                        </h4>
                    </div>
                </div>

                {/* Topological Quantum Computing */}
                <div>
                    <div className={styles.projectcontainer}>
                        <h3>Topological Quantum Computing</h3>
                        <div className={styles.projectbox}>
                            <div className={styles.image}>
                                <Image src="/tqc_image.png" alt="Topological Quantum Computing" width={300} height={300} />
                            </div>
                            <div className={styles.description}>
                                <p>
                                    The mathematical framework of non-abelian anyons with topological defects can be explored using a framework known as G-crossed modular tensor categories. In this work, we show an intrinsic connection between topology of higher genus surfaces and fusion categories of topological defects.
                                </p>
                            </div>
                        </div>
                        <h4>
                            Publication: <Link href="https://link.springer.com/article/10.1007/s00220-023-04789-4" passHref>Communications in Mathematical Physics</Link>
                        </h4>
                    </div>
                </div>

                {/* Quantum Chaos */}
                <div>
                    <div className={styles.projectcontainer}>
                        <h3>Quantum chaos with non-abelian charges</h3>
                        <div className={styles.projectbox}>
                            <div className={styles.description}>
                                <p>
                                    The Eigenstate Thermalization Hypothesis (ETH) postulates that pure quantum systems that are chaotic do self-thermalize in the long-time limit. The presence of a large number of symmetries generally prevents a quantum system from thermalizing. We extend the ETH hypothesis to systems with non-abelian SU(2) symmetry.
                                </p>
                            </div>
                            <div className={styles.image}>
                                <Image src="/qc_image.png" alt="Quantum Chaos" width={300} height={300} />
                            </div>
                        </div>
                        <h4>
                            Publication: <Link href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.140402" passHref>PhysRevLett.130.140402</Link>
                        </h4>
                    </div>
                </div>
            </div>

            <div className={styles.logo}>
                <h3>My Google Scholar page:</h3>
                <Link href="https://scholar.google.com/citations?user=mnq3tfUAAAAJ&hl=en" passHref>
                    <Image src="/googsch_logo.png" alt="Google Scholar" width={75} height={75} />
                </Link>
            </div>
        </main>
    );
}
