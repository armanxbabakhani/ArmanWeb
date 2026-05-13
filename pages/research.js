import Link from 'next/link'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'

const publications = [
  {
    title: "Deep learning for single-shot autofocus microscopy",
    authors: "H. Pinkard, Z. Phillips, A. Babakhani, D.A. Fletcher, L. Waller",
    venue: "Optica, 2019",
    citations: 186,
    links: { doi: "https://opg.optica.org/optica/fulltext.cfm?uri=optica-6-6-794&id=413486" },
    theme: "Applied ML"
  },
  {
    title: "Non-abelian eigenstate thermalization hypothesis",
    authors: "A. Babakhani, C. Murthy, N. Yunger Halpern",
    venue: "Physical Review Letters, 2023",
    citations: 90,
    links: { doi: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.140402", arxiv: "https://arxiv.org/abs/2206.05310" },
    theme: "Quantum Chaos"
  },
  {
    title: "Continuous quantum error correction for evolution under time-dependent Hamiltonians",
    authors: "J. Atalaya A. Babakhani , J. M. Epstein, B. Whaley",
    venue: "Physical Review A, 2021",
    citations: 27,
    links: { doi: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.042406" },
    theme: "Quantum Error Correction"
  },
  {
    title: "Threshold for fault-tolerant quantum advantage with the quantum approximate optimization algorithm",
    authors: "Multiple authors",
    venue: "Preprint",
    citations: 21,
    links: { arxiv: "https://arxiv.org/abs/2504.01897" },
    theme: "Quantum Optimization"
  },
  {
    title: "Quantum Monte Carlo algorithm for arbitrary spin-1/2 Hamiltonians",
    authors: "A. Babakhani, L. Barash, I. Hen",
    venue: "Physical Review Research",
    citations: 8,
    links: { arxiv: "https://arxiv.org/abs/2307.06503" },
    theme: "Quantum Monte Carlo"
  },
  {
    title: "A quantum Monte Carlo algorithm for arbitrary high-spin Hamiltonians",
    authors: "A. Babakhani, L. Barash, I. Hen",
    venue: "Preprint",
    citations: 5,
    links: { arxiv: "https://arxiv.org/abs/2503.08039" },
    theme: "Quantum Monte Carlo"
  },
  {
    title: "Inequalities, identities, and bounds for divided differences of the exponential function",
    authors: "A. Babakhani et al.",
    venue: "Journal",
    citations: 2,
    links: { arxiv: "https://arxiv.org/abs/2510.10724v1" },
    theme: "Mathematical Physics"
  },
  {
    title: "G-Crossed Modularity of Symmetry Enriched Topological Phases",
    authors: "A. Babakhani, P. Bonderson",
    venue: "Communications in Mathematical Physics",
    citations: 2,
    links: { doi: "https://link.springer.com/article/10.1007/s00220-023-04789-4", arxiv: "https://arxiv.org/abs/2210.14943" },
    theme: "Topological Phases"
  },
  {
    title: "Regularized Warm-Started Quantum Approximate Optimization and Conditions for Surpassing Classical Solvers on the Max-Cut Problem",
    authors: "Multiple authors, JP Morgan Chase",
    venue: "Preprint",
    citations: 1,
    links: { arxiv: "https://arxiv.org/abs/2603.10191" },
    theme: "Quantum Optimization"
  },
  {
    title: "Stoquasticity is not enough: towards a sharper diagnostic for Quantum Monte Carlo simulability",
    authors: "A. Babakhani et al.",
    venue: "Preprint",
    citations: null,
    links: {},
    theme: "Quantum Monte Carlo"
  },
  {
    title: "SNS junctions along the BCS-BEC crossover",
    authors: "A. Babakhani et al.",
    venue: "Preprint",
    citations: null,
    links: { arxiv: "https://arxiv.org/abs/2508.14382" },
    theme: "Condensed Matter"
  },
];

export default function Research() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>RESEARCH</h1>
      </div>
      <div className={styles.introbox}>
        <p>My research extends across quantum algorithms, quantum Monte Carlo methods, quantum error correction, topological quantum computing, and quantum thermalization. Below is a full list of publications.</p>
      </div>

      <div className={styles.grid}>
        {publications.map((pub, idx) => (
          <article key={idx} className={styles.projectcontainer}>
            <div className={styles.metaRow}>
              <span className={styles.theme}>{pub.theme}</span>
              {pub.citations && (
                <span className={styles.citations}>{pub.citations} citations</span>
              )}
            </div>
            <h3>{pub.title}</h3>
            <p className={styles.authors}>{pub.authors}</p>
            <p className={styles.venue}>{pub.venue}</p>
            {(pub.links.doi || pub.links.arxiv) && (
              <div className={styles.linkRow}>
                {pub.links.doi && (
                  <a href={pub.links.doi} target="_blank" rel="noopener noreferrer" className={styles.pillLink}>
                    Paper <span className={styles.arrow}>↗</span>
                  </a>
                )}
                {pub.links.arxiv && (
                  <a href={pub.links.arxiv} target="_blank" rel="noopener noreferrer" className={styles.pillLink}>
                    arXiv <span className={styles.arrow}>↗</span>
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className={styles.logo}>
        <h3>Full profile on Google Scholar</h3>
        <Link href="https://scholar.google.com/citations?user=mnq3tfUAAAAJ&hl=en" passHref>
          <Image
            src="/googsch_logo.png"
            alt="Google Scholar"
            className={styles.logoImage}
            width={56}
            height={56}
          />
        </Link>
      </div>
    </main>
  );
}
