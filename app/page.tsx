import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    number: '01',
    name: 'OpenQuantum',
    field: 'Quantum computing × AI agents',
    description:
      'An open-source quantum agent platform built on DeepSeek Harness. It brings quantum applications, algorithms, hardware, and messaging interfaces into one working environment.',
    note: 'Open source · Featured by awesome-dsh-plugin and dsh.io',
    href: 'https://github.com/xi-zhao/OpenQuantum',
  },
  {
    number: '02',
    name: 'RunThePaper',
    field: 'Scientific research automation',
    description:
      'An agent that moves beyond reading papers to reproducing them—from equations and code to numerical results and iteration after failure.',
    note: '100+ papers reproduced autonomously',
    href: 'https://github.com/xi-zhao/RunThePaper',
  },
  {
    number: '03',
    name: 'Fluxq',
    field: 'Quantum code generation',
    description:
      'An LLM harness that turns code generation into a repair loop, combining structural checks, normalization, and targeted correction.',
    note: 'Evaluated on 308 public quantum benchmarks',
    href: 'https://github.com/xi-zhao/fluxq-valid308-evidence',
  },
];

const engagements = [
  {
    title: 'Yuanxiaozhi Agent Cloud',
    description:
      'Led the move from an internal chatbot to an agent platform, covering data ingestion, structured extraction, generation, and enterprise applications.',
  },
  {
    title: 'HumagWork',
    description:
      'Designed a local human–agent workspace for organizational information, management summaries, and cross-team alignment.',
  },
  {
    title: 'SAIC Volkswagen FDE',
    description:
      'Worked with the intelligent-driving test team on data cleaning, test-case generation, vehicle-test automation, and AI training.',
  },
  {
    title: 'Quantum Radar',
    description:
      'Built a quantum-industry intelligence agent for information collection, classification, structured knowledge, and trend analysis.',
  },
];

const papers = [
  {
    title:
      'Stable molecular state in a dissipative spin-orbit coupling Fermi gas',
    venue: 'Physical Review A 108, 013311',
  },
  {
    title: 'Borromean state under an imaginary magnetic field',
    venue: 'Chinese Physics B 34(3), 033101 · 2025',
  },
  {
    title: 'ZAP: A Zoned Architecture and Parallelizable Compiler for FPQA',
    venue: 'IEEE Transactions on Quantum Engineering · 2026',
  },
  {
    title:
      'MAS-Flag: An Auditable Role-Structured Controller for Fixed Budget Compiler Flag Search',
    venue: 'Research work',
  },
];

const patents = [
  'Neutral-atom quantum circuit compilation method and system',
  'Full quantum compilation scheme for neutral-atom quantum computing systems',
  'Fast compilation scheme for zoned neutral-atom quantum computing architectures',
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Xi Zhao homepage">
          <span className="monogram">XZ</span>
          <span>Xi Zhao</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
        </nav>
        <a className="header-contact" href="mailto:zx4612@mail.ustc.edu.cn">
          Email
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI Solutions Architect · Physics PhD</p>
          <h1>Xi Zhao</h1>
          <p className="hero-statement">
            I build AI systems for industry and science.
          </p>
          <p className="hero-intro">
            Currently at Inspur Group, working on enterprise agents, research
            automation, and quantum computing.
          </p>
          <div className="hero-links">
            <a href="#work">
              Selected work
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/xi-zhao"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <aside className="hero-portrait">
          <Image
            src="/portrait.png"
            alt="Portrait of Xi Zhao"
            fill
            sizes="(max-width: 760px) 82vw, 390px"
            priority
          />
        </aside>
        <div className="hero-projects" aria-label="Selected projects">
          {projects.map((project) => (
            <a
              href={project.href}
              key={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <span>{project.name}</span>
              <small>{project.field}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-title">
          <p>Selected work</p>
          <h2>Projects I care about.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              className={`project-card${index === 0 ? ' project-card-main' : ''}`}
              href={project.href}
              key={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-top">
                <span>{project.number}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </div>
              <div className="project-copy">
                <p>{project.field}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-note">{project.note}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="experience-lead">
          <p className="eyebrow">Inspur Group · 2024 — Present</p>
          <h2>AI Solutions Architect &amp; Postdoctoral Researcher</h2>
          <p>
            I lead AI projects from the first conversation to the working
            system—product definition, architecture, infrastructure, and
            delivery.
          </p>
        </div>
        <div className="engagements">
          {engagements.map((engagement, index) => (
            <article key={engagement.title}>
              <span>0{index + 1}</span>
              <h3>{engagement.title}</h3>
              <p>{engagement.description}</p>
            </article>
          ))}
        </div>
        <div className="career-line">
          <article>
            <span>2023 — 2025</span>
            <div>
              <h3>Beijing Academy of Quantum Information Sciences</h3>
              <p>Neutral-atom algorithms and quantum compilation</p>
            </div>
          </article>
          <article>
            <span>2022 — 2023</span>
            <div>
              <h3>Yangtze Delta Region Institute of UESTC</h3>
              <p>Quantum algorithms, chip EDA, and scientific computing</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="research-heading">
          <p className="eyebrow">Research</p>
          <h2>Physics first. Then agents.</h2>
          <p>
            PhD in Physics from the University of Science and Technology of
            China, advised by Professor Wei Yi.
          </p>
        </div>
        <div className="research-body">
          <div className="education">
            <p className="column-label">Education</p>
            <article>
              <span>2018 — 2024</span>
              <h3>PhD in Physics</h3>
              <p>University of Science and Technology of China</p>
            </article>
            <article>
              <span>2014 — 2018</span>
              <h3>BSc in Physics</h3>
              <p>Zhoukou Normal University</p>
            </article>
          </div>
          <div className="publications">
            <p className="column-label">Selected publications</p>
            {papers.map((paper, index) => (
              <article key={paper.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{paper.title}</h3>
                  <p>{paper.venue}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="patents">
            <p className="column-label">Selected patents</p>
            {patents.map((patent, index) => (
              <article key={patent}>
                <span>0{index + 1}</span>
                <p>{patent}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <p>Have something interesting in mind?</p>
        <h2>Let&apos;s talk.</h2>
        <div>
          <a href="mailto:zx4612@mail.ustc.edu.cn">
            <Mail size={17} aria-hidden="true" />
            zx4612@mail.ustc.edu.cn
          </a>
          <a href="https://github.com/xi-zhao" target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Xi Zhao</span>
        <span>Beijing, China</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
