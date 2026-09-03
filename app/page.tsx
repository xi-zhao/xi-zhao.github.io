import { ArrowUpRight, Code2, Mail } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    index: '01',
    name: 'OpenQuantum',
    role: 'Open-source quantum agent operating platform',
    thesis:
      'Turns quantum capabilities from isolated research code into tools that agents can invoke, validate, and compose.',
    description:
      'Built on DeepSeek Harness, OpenQuantum combines domain workflows, deterministic tools, scientific validation, and multiple user interfaces into an operational workspace for research agents.',
    tags: ['Agent Runtime', 'Quantum Computing', 'Open Source'],
    href: 'https://github.com/xi-zhao/OpenQuantum',
    proof: 'Featured by awesome-dsh-plugin and dsh.io',
  },
  {
    index: '02',
    name: 'RunThePaper',
    role: 'Research paper reproduction agent',
    thesis:
      'Moves beyond understanding a paper toward reproducing it through a traceable workflow.',
    description:
      'Covers literature parsing, equation derivation, code generation, numerical computation, result validation, and failure recovery—turning paper reproduction into a systematic engineering process.',
    tags: ['Research Agent', 'Reproduction', 'Validation'],
    href: 'https://github.com/xi-zhao/RunThePaper',
    proof: 'More than 100 papers reproduced autonomously',
  },
  {
    index: '03',
    name: 'Fluxq',
    role: 'LLM harness for quantum code generation',
    thesis:
      'Code generation is only the beginning; reliable systems must identify errors and continue repairing them.',
    description:
      'Extends the ReAct loop into a repair loop spanning generation, structural validation, normalization checks, and targeted correction for quantum programs.',
    tags: ['LLM Harness', 'Compiler', 'Benchmarking'],
    href: 'https://github.com/xi-zhao/fluxq-valid308-evidence',
    proof: 'Validated across 308 public quantum benchmarks',
  },
];

const methods = [
  {
    index: '01',
    title: 'Frame the real problem',
    text: 'Start with users, operating constraints, and business processes—not with model capabilities.',
  },
  {
    index: '02',
    title: 'Design an operational system',
    text: 'Organize models, tools, state, and human decisions into an explicit and recoverable workflow.',
  },
  {
    index: '03',
    title: 'Close the loop with evidence',
    text: 'Make outcomes verifiable, failures diagnosable, and the system ready for disciplined iteration.',
  },
];

const workstreams = [
  {
    name: 'Yuanxiaozhi Agent Cloud Platform',
    detail:
      'Led the evolution of an internal chatbot into an agent cloud platform, covering data ingestion, cleaning, classification, extraction, generation, and post-processing.',
  },
  {
    name: 'HumagWork',
    detail:
      'Designed an enterprise human–agent collaboration workspace that consolidates organizational information, produces structured management summaries, and supports cross-team alignment.',
  },
  {
    name: 'SAIC Volkswagen FDE',
    detail:
      'Advanced test-database cleaning, test-case generation, and vehicle-test automation, while contributing to enterprise AI transformation training.',
  },
  {
    name: 'Industry Solutions and Research',
    detail:
      'Delivered requirements analysis, system architecture, compute planning, and implementation support for research, quantum technology, and manufacturing organizations.',
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
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Xi Zhao homepage">
          <strong>Xi Zhao</strong>
          <span>AI · QUANTUM · RESEARCH</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#focus">Focus</a>
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
        </nav>
        <a className="header-contact" href="mailto:zx4612@mail.ustc.edu.cn">
          Contact
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">AI SOLUTIONS ARCHITECT · PHYSICS PHD</div>
          <h1>Xi Zhao</h1>
          <p className="hero-role">
            AI Solutions Architect &amp; Quantum Computing Researcher
          </p>
          <p className="hero-lede">
            I design rigorous agent systems for enterprise and scientific work,
            translating complex business and research problems into solutions
            that are operational, verifiable, and maintainable.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected projects
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/xi-zhao"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              Inspur Group · AI Solutions Architect / Postdoctoral Researcher
            </span>
            <span>Beijing, China</span>
          </div>
        </div>

        <div className="portrait-stage">
          <div className="portrait-frame">
            <Image
              src="/portrait.png"
              alt="Portrait of Xi Zhao"
              fill
              sizes="(max-width: 900px) 74vw, 32vw"
              priority
            />
          </div>
          <div className="portrait-caption">
            <strong>Xi Zhao</strong>
            <span>
              PhD in Physics · University of Science and Technology of China
            </span>
          </div>
        </div>

        <div className="proof-strip" aria-label="Selected evidence">
          <div>
            <strong>100+</strong>
            <span>papers reproduced</span>
          </div>
          <div>
            <strong>308</strong>
            <span>quantum benchmarks validated</span>
          </div>
          <div>
            <strong>AI × Q</strong>
            <span>agent systems and quantum computing</span>
          </div>
        </div>
      </section>

      <section className="approach-section" id="focus">
        <div className="section-label">
          <span>01</span>
          <span>Professional Focus</span>
        </div>
        <div className="approach-intro">
          <h2>
            From problem framing to
            <br />
            <em>verifiable delivery</em>
          </h2>
          <div className="approach-note">
            <span>OPERATING PRINCIPLE</span>
            <p>
              Useful agents do more than produce plausible answers. They must
              advance work under real constraints, use dependable tools, and
              leave evidence that people can inspect.
            </p>
          </div>
        </div>
        <div className="method-list">
          {methods.map((method) => (
            <article key={method.index}>
              <span>{method.index}</span>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="work">
        <div className="projects-head">
          <div className="section-label">
            <span>02</span>
            <span>Selected Projects</span>
          </div>
          <h2>Selected Projects</h2>
          <p>
            Work across agent infrastructure, scientific reproduction, and
            quantum program validation.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.href}
              key={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-heading">
                <span>{project.index}</span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.role}</p>
                </div>
              </div>
              <div className="project-story">
                <strong>{project.thesis}</strong>
                <p>{project.description}</p>
                <div className="project-proof">{project.proof}</div>
              </div>
              <div className="project-foot">
                <div>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ArrowUpRight size={30} strokeWidth={1.5} aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-label">
          <span>03</span>
          <span>Professional Experience</span>
        </div>
        <div className="experience-hero">
          <div>
            <span className="date">OCT 2024 — PRESENT</span>
            <h2>Inspur Group</h2>
            <p>AI Solutions Architect / Postdoctoral Researcher</p>
          </div>
          <strong>
            Enterprise agent platforms, industry solutions, and intelligent
            systems for scientific work.
          </strong>
        </div>
        <div className="workstream-grid">
          {workstreams.map((item, index) => (
            <article key={item.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="experience-history">
          <article>
            <span>JUL 2023 — OCT 2025</span>
            <h3>Beijing Academy of Quantum Information Sciences</h3>
            <p>Quantum Computing Division · KuaFu Cloud Compiler Team</p>
          </article>
          <article>
            <span>NOV 2022 — 2023</span>
            <h3>
              Yangtze Delta Region Institute for Quantum Science and Technology
              Innovation
            </h3>
            <p>Quantum algorithms, chip EDA, and HFSS simulation</p>
          </article>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="research-title">
          <div className="section-label inverse">
            <span>04</span>
            <span>Education &amp; Research</span>
          </div>
          <h2>Education &amp; Research</h2>
          <div className="degree-block">
            <span>2018 — 2024</span>
            <strong>University of Science and Technology of China</strong>
            <p>PhD in Physics</p>
          </div>
          <div className="degree-block secondary-degree">
            <span>2014 — 2018</span>
            <strong>Zhoukou Normal University</strong>
            <p>BSc in Physics</p>
          </div>
        </div>
        <div className="publication-list">
          <div className="publication-head">
            <span>SELECTED PUBLICATIONS</span>
            <span>4 ITEMS</span>
          </div>
          {papers.map((paper, index) => (
            <article key={paper.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{paper.title}</h3>
                <p>{paper.venue}</p>
              </div>
            </article>
          ))}
          <div className="patent-note">
            <span>RELATED PATENTS</span>
            <p>
              Patent work covering neutral-atom quantum circuit compilation,
              full-stack quantum compilation, and fast compilation for zoned
              neutral-atom quantum computing architectures.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-copy">
          <span>05 / CONTACT</span>
          <h2>Collaboration &amp; Enquiries</h2>
          <p>
            I welcome conversations about enterprise agent systems, AI for
            scientific work, and quantum computing.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:zx4612@mail.ustc.edu.cn">
            <Mail size={22} aria-hidden="true" />
            <span>
              <small>Email</small>zx4612@mail.ustc.edu.cn
            </span>
            <ArrowUpRight size={26} aria-hidden="true" />
          </a>
          <a href="https://github.com/xi-zhao" target="_blank" rel="noreferrer">
            <Code2 size={22} aria-hidden="true" />
            <span>
              <small>GitHub</small>github.com/xi-zhao
            </span>
            <ArrowUpRight size={26} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <strong>Xi Zhao</strong>
        <span>AI Solutions Architect · Quantum Computing Researcher</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
