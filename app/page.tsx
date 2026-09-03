import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    index: '01',
    name: 'OpenQuantum',
    role: 'Quantum agent operating platform',
    summary:
      'An open-source platform that turns quantum capabilities into tools agents can invoke, validate, and compose.',
    description:
      'Built on DeepSeek Harness with domain workflows, deterministic tools, scientific validation, and a workspace designed for real research operations.',
    tags: ['Agent Systems', 'Quantum Computing', 'Open Source'],
    href: 'https://github.com/xi-zhao/OpenQuantum',
    proof: 'Featured by awesome-dsh-plugin and dsh.io',
  },
  {
    index: '02',
    name: 'RunThePaper',
    role: 'Research reproduction agent',
    summary:
      'A traceable workflow that moves from reading a paper to reproducing its results.',
    description:
      'Coordinates literature parsing, equation derivation, code generation, numerical computation, validation, and recovery from failure.',
    tags: ['Research Agent', 'Reproduction', 'Validation'],
    href: 'https://github.com/xi-zhao/RunThePaper',
    proof: '100+ papers reproduced autonomously',
  },
  {
    index: '03',
    name: 'Fluxq',
    role: 'Quantum code repair harness',
    summary:
      'A generation-and-repair loop for producing more dependable quantum programs.',
    description:
      'Extends ReAct with structural validation, normalization checks, targeted correction, and evidence from public benchmarks.',
    tags: ['LLM Harness', 'Compiler', 'Benchmarking'],
    href: 'https://github.com/xi-zhao/fluxq-valid308-evidence',
    proof: 'Validated on 308 public benchmarks',
  },
];

const principles = [
  {
    index: '01',
    title: 'Frame the real problem',
    text: 'Begin with the decision, workflow, and operating constraint—not the model.',
  },
  {
    index: '02',
    title: 'Design the system',
    text: 'Give models, tools, state, and human judgment explicit roles and boundaries.',
  },
  {
    index: '03',
    title: 'Prove the outcome',
    text: 'Make results inspectable, failures diagnosable, and improvement measurable.',
  },
];

const workstreams = [
  {
    name: 'Yuanxiaozhi Agent Cloud',
    detail:
      'Led the evolution of an internal chatbot into an agent platform spanning data ingestion, extraction, generation, and post-processing.',
  },
  {
    name: 'HumagWork',
    detail:
      'Designed a human–agent workspace for organizational intelligence, structured management summaries, and cross-team alignment.',
  },
  {
    name: 'SAIC Volkswagen FDE',
    detail:
      'Advanced test-data cleaning, test-case generation, and vehicle-test automation while supporting enterprise AI transformation.',
  },
  {
    name: 'Industry Solutions',
    detail:
      'Delivered requirements analysis, system architecture, compute planning, and implementation support across research and manufacturing.',
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

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Xi Zhao homepage">
          <span className="monogram">XZ</span>
          <span className="wordmark-name">Xi Zhao</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#practice">Practice</a>
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
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            AI systems for enterprise and science
          </p>
          <h1>I build AI agents for work that has to be correct.</h1>
          <p className="hero-lede">
            I&apos;m Xi Zhao, an AI Solutions Architect and Physics PhD. My work
            connects agent architecture, scientific validation, and quantum
            computing to turn complex problems into dependable systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/xi-zhao"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <span>Current role</span>
              <strong>AI Solutions Architect · Inspur Group</strong>
            </div>
            <div>
              <span>Research base</span>
              <strong>Postdoctoral Researcher · Beijing</strong>
            </div>
          </div>
        </div>

        <aside className="profile-card" aria-label="Profile">
          <div className="portrait-frame">
            <Image
              src="/portrait.png"
              alt="Portrait of Xi Zhao"
              fill
              sizes="(max-width: 900px) 82vw, 310px"
              priority
            />
          </div>
          <div className="profile-caption">
            <div>
              <strong>Xi Zhao</strong>
              <span>AI Solutions Architect</span>
            </div>
            <span className="profile-mark">PhD</span>
          </div>
        </aside>

        <div className="proof-strip" aria-label="Selected evidence">
          <div>
            <strong>100+</strong>
            <span>Papers reproduced by an autonomous research workflow</span>
          </div>
          <div>
            <strong>308</strong>
            <span>Public quantum benchmarks used for validation</span>
          </div>
          <div>
            <strong>AI × Q</strong>
            <span>Agent engineering grounded in physics research</span>
          </div>
        </div>
      </section>

      <section className="section practice-section" id="practice">
        <div className="section-kicker">
          <span>01</span>
          <span>Practice</span>
        </div>
        <div className="section-intro practice-intro">
          <h2>From difficult problem to dependable system.</h2>
          <p>
            My work sits between strategy and implementation: understanding what
            needs to change, designing the operating model, and building enough
            evidence to know the system works.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article key={principle.index}>
              <span className="card-index">{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-kicker">
          <span>02</span>
          <span>Selected work</span>
        </div>
        <div className="section-intro">
          <h2>Systems that move from plausible to provable.</h2>
          <p>
            Three projects, one recurring idea: an agent becomes useful when it
            can act through reliable tools and leave evidence behind.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, projectIndex) => (
            <a
              className={`project-card${projectIndex === 0 ? ' project-featured' : ''}`}
              href={project.href}
              key={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-topline">
                <span>{project.index}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </div>
              <div className="project-title">
                <p>{project.role}</p>
                <h3>{project.name}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-bottom">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <strong>{project.proof}</strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-kicker">
          <span>03</span>
          <span>Experience</span>
        </div>
        <div className="experience-layout">
          <div className="experience-lead">
            <p className="overline">Inspur Group · Oct 2024 — Present</p>
            <h2>AI Solutions Architect &amp; Postdoctoral Researcher</h2>
            <p>
              I lead the path from ambiguous organizational need to deployed AI
              workflow—aligning product logic, system architecture, delivery,
              and adoption.
            </p>
          </div>
          <div className="workstream-grid">
            {workstreams.map((workstream, index) => (
              <article key={workstream.name}>
                <span className="card-index">0{index + 1}</span>
                <h3>{workstream.name}</h3>
                <p>{workstream.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="previous-roles">
          <div>
            <span>2023 — 2025</span>
            <strong>Beijing Academy of Quantum Information Sciences</strong>
            <p>Research Assistant · Quantum information and computation</p>
          </div>
          <div>
            <span>2022 — 2023</span>
            <strong>Yangtze Delta Region Institute of UESTC</strong>
            <p>Research Assistant · Scientific computing and algorithms</p>
          </div>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-kicker">
          <span>04</span>
          <span>Research</span>
        </div>
        <div className="research-layout">
          <div className="education-panel">
            <p className="overline">Education</p>
            <div>
              <span>2018 — 2024</span>
              <h2>PhD in Physics</h2>
              <p>University of Science and Technology of China</p>
            </div>
            <div>
              <span>2014 — 2018</span>
              <h3>BSc in Physics</h3>
              <p>Zhoukou Normal University</p>
            </div>
          </div>
          <div className="publication-panel">
            <p className="overline">Selected publications</p>
            <div className="publication-list">
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
          </div>
        </div>
      </section>

      <section className="contact-section">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Open to ambitious, technically serious work
        </p>
        <h2>Let&apos;s build something that earns trust.</h2>
        <div className="contact-actions">
          <a
            className="button button-light"
            href="mailto:zx4612@mail.ustc.edu.cn"
          >
            <Mail size={16} aria-hidden="true" />
            zx4612@mail.ustc.edu.cn
          </a>
          <a
            className="text-link"
            href="https://github.com/xi-zhao"
            target="_blank"
            rel="noreferrer"
          >
            github.com/xi-zhao
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Xi Zhao</span>
        <span>AI systems · Scientific agents · Quantum computing</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
