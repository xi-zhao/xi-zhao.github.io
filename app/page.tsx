import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    index: '01',
    name: 'OpenQuantum',
    role: 'Open-source quantum agent platform',
    problem:
      'Quantum applications, algorithms, and hardware access are usually fragmented across separate tools and interfaces.',
    system:
      'A platform built on DeepSeek Harness that integrates quantum application skills, algorithm skills, hardware MCP servers, and WeChat and Feishu interfaces.',
    evidence:
      'Open source and included in the curated awesome-dsh-plugin and dsh.io collections.',
    architecture: [
      'DeepSeek Harness',
      'Skills',
      'MCP tools',
      'Hardware access',
      'IM interfaces',
    ],
    href: 'https://github.com/xi-zhao/OpenQuantum',
  },
  {
    index: '02',
    name: 'RunThePaper',
    role: 'Scientific paper reproduction agent',
    problem:
      'Reading and summarizing a paper does not establish that its reasoning and results can be reproduced.',
    system:
      'An autonomous workflow for document parsing, theory and equation derivation, code generation, numerical computation, result validation, and failure repair.',
    evidence:
      'More than 100 papers reproduced autonomously, including work from Nature, Science, PRL, and related journals.',
    architecture: [
      'Parsing',
      'Derivation',
      'Code generation',
      'Numerics',
      'Validation',
      'Repair',
    ],
    href: 'https://github.com/xi-zhao/RunThePaper',
  },
  {
    index: '03',
    name: 'Fluxq',
    role: 'LLM harness for quantum code generation',
    problem:
      'A generated quantum program may be syntactically plausible while remaining structurally or semantically incorrect.',
    system:
      'A repair loop that extends ReAct with generation, structural validation, normalization checks, and targeted correction.',
    evidence:
      'Evaluated on 308 public quantum benchmarks, with repository-level evidence for the repair workflow.',
    architecture: [
      'ReAct',
      'Structure checks',
      'Normalization',
      'Targeted repair',
      'Benchmarks',
    ],
    href: 'https://github.com/xi-zhao/fluxq-valid308-evidence',
  },
];

const workstreams = [
  {
    index: '01',
    title: 'Yuanxiaozhi Agent Cloud',
    type: 'Platform architecture',
    detail:
      'Led the transition from an internal chatbot to an agent platform. Built data ingestion, cleaning, classification, structured extraction, generation, and post-processing capabilities.',
    output:
      'Knowledge QA · intelligent tendering · market radar · PPT generation · AI review · meeting summaries · TCO calculator',
  },
  {
    index: '02',
    title: 'HumagWork',
    type: 'Human–agent collaboration',
    detail:
      'Designed and developed a local agent workspace that collects employee progress, generates structured management summaries, and synchronizes information and tasks across teams.',
    output:
      'Local agent tooling · organizational information flow · management summaries · task alignment',
  },
  {
    index: '03',
    title: 'SAIC Volkswagen FDE',
    type: 'Automotive AI delivery',
    detail:
      'Worked with the intelligent-driving test team on test-database cleaning, test-case generation, real-vehicle test automation, and AI transformation training.',
    output:
      'Data cleaning · test generation · vehicle-test automation · enterprise training',
  },
  {
    index: '04',
    title: 'Industry Solutions',
    type: 'Architecture and delivery',
    detail:
      'Supported research and quantum-technology customers from requirements analysis and scenario abstraction through technical design, compute selection, and project delivery.',
    output:
      'Requirements · solution architecture · compute planning · server selection · delivery',
  },
  {
    index: '05',
    title: 'Quantum Radar',
    type: 'Market intelligence agent',
    detail:
      'Led product design and implementation for a quantum-industry intelligence agent connecting collection, understanding, classification, structured storage, and trend analysis.',
    output:
      'Information collection · classification · structured knowledge · trend analysis',
  },
  {
    index: '06',
    title: 'AI + Compiler Optimization',
    type: 'Autonomous optimization research',
    detail:
      'Built and evaluated an automated compiler-parameter tuning workflow based on an iterative generate, execute, feedback, and optimize loop.',
    output:
      'Generation · execution · feedback · iterative optimization · method validation',
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
  'Neutral-atom quantum circuit compilation method and system, electronic device, and storage medium',
  'Full quantum compilation scheme for neutral-atom quantum computing systems',
  'Fast compilation scheme for zoned neutral-atom quantum computing architectures',
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
          <a href="#systems">Systems</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
        </nav>
        <a className="header-contact" href="mailto:zx4612@mail.ustc.edu.cn">
          Email
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </header>

      <section className="evidence-hero">
        <div className="identity-panel">
          <div className="identity-heading">
            <div className="identity-portrait">
              <Image
                src="/portrait.png"
                alt="Portrait of Xi Zhao"
                fill
                sizes="132px"
                priority
              />
            </div>
            <div>
              <p className="identity-role">
                AI Solutions Architect · Postdoctoral Researcher
              </p>
              <h1>Xi Zhao</h1>
              <p className="identity-line">Physics PhD · Beijing, China</p>
            </div>
          </div>
          <p className="identity-summary">
            I design and deliver AI agent systems for enterprise operations,
            scientific research, and quantum computing.
          </p>
          <p className="identity-detail">
            At Inspur Group, I work across requirements analysis, system
            architecture, compute and server planning, and project delivery. My
            independent projects focus on research automation and verifiable
            quantum software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#systems">
              Review project evidence
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/xi-zhao"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile
            </a>
          </div>
        </div>

        <aside className="scope-panel" aria-label="Current professional scope">
          <div className="scope-heading">
            <span>Current scope</span>
            <span>2024 — Present</span>
          </div>
          <div className="scope-list">
            <div>
              <span>01</span>
              <p>
                <strong>Enterprise AI platforms</strong>
                Knowledge QA, tendering, market intelligence, presentation
                generation, AI review, meeting summaries, and TCO analysis.
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>Human–agent workflows</strong>
                Local agent tooling, organizational information capture,
                management summaries, and cross-team task alignment.
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>Scientific and quantum agents</strong>
                Paper reproduction, quantum task orchestration, compiler repair,
                and validation workflows.
              </p>
            </div>
          </div>
        </aside>

        <div className="evidence-bar" aria-label="Selected evidence">
          <div>
            <strong>100+</strong>
            <span>papers autonomously reproduced</span>
          </div>
          <div>
            <strong>308</strong>
            <span>public quantum benchmarks</span>
          </div>
          <div>
            <strong>3</strong>
            <span>neutral-atom compiler patents</span>
          </div>
          <div>
            <strong>6</strong>
            <span>current enterprise and research workstreams</span>
          </div>
        </div>
      </section>

      <section className="section systems-section" id="systems">
        <div className="section-heading">
          <div className="section-label">
            <span>01</span>
            <span>Selected systems</span>
          </div>
          <h2>Public work with inspectable evidence.</h2>
          <p>
            Each project is organized around a concrete failure mode, an
            explicit system, and a result that can be checked.
          </p>
        </div>
        <div className="case-list">
          {projects.map((project) => (
            <article className="case-study" key={project.name}>
              <div className="case-title">
                <span>{project.index}</span>
                <div>
                  <p>{project.role}</p>
                  <h3>{project.name}</h3>
                </div>
                <a href={project.href} target="_blank" rel="noreferrer">
                  Repository
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <div className="case-facts">
                <div>
                  <span>Problem</span>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <span>System</span>
                  <p>{project.system}</p>
                </div>
                <div>
                  <span>Evidence</span>
                  <p>{project.evidence}</p>
                </div>
              </div>
              <div className="architecture-line">
                <span>Architecture</span>
                <div>
                  {project.architecture.map((item, index) => (
                    <span key={item}>
                      {item}
                      {index < project.architecture.length - 1 && (
                        <b aria-hidden="true">→</b>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section enterprise-section" id="enterprise">
        <div className="section-heading enterprise-heading">
          <div className="section-label">
            <span>02</span>
            <span>Enterprise delivery</span>
          </div>
          <h2>Current work at Inspur Group.</h2>
          <p>
            Scope: requirements analysis, scenario abstraction, system
            architecture, compute planning, server selection, implementation,
            and delivery.
          </p>
        </div>
        <div className="workstream-list">
          {workstreams.map((workstream) => (
            <article key={workstream.title}>
              <div className="workstream-title">
                <span>{workstream.index}</span>
                <div>
                  <p>{workstream.type}</p>
                  <h3>{workstream.title}</h3>
                </div>
              </div>
              <p className="workstream-detail">{workstream.detail}</p>
              <p className="workstream-output">{workstream.output}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-label">
          <span>03</span>
          <span>Experience</span>
        </div>
        <div className="experience-layout">
          <div className="experience-intro">
            <h2>AI architecture backed by physics research.</h2>
            <p>
              My professional path connects enterprise system delivery with
              hands-on work in quantum algorithms, compilation, chip EDA, and
              scientific computing.
            </p>
          </div>
          <div className="timeline">
            <article>
              <span>2024.10 — Present</span>
              <div>
                <p>Inspur Group</p>
                <h3>AI Solutions Architect / Group Postdoctoral Researcher</h3>
                <p>
                  Enterprise AI applications, agent platforms, compute
                  infrastructure, and delivery.
                </p>
              </div>
            </article>
            <article>
              <span>2023.07 — 2025.10</span>
              <div>
                <p>Beijing Academy of Quantum Information Sciences</p>
                <h3>Quantum Computing Department · Compiler Group</h3>
                <p>
                  Neutral-atom industry research, Rydberg-platform algorithm
                  compilation, and patent work.
                </p>
              </div>
            </article>
            <article>
              <span>2022.11 — 2023.04</span>
              <div>
                <p>Yangtze Delta Region Institute of UESTC</p>
                <h3>Benchmarking Department · Research Intern</h3>
                <p>
                  Quantum algorithms, superconducting qubits, chip EDA,
                  architecture-specific algorithm design, layout, and HFSS
                  resonator simulation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-label">
          <span>04</span>
          <span>Research record</span>
        </div>
        <div className="research-grid">
          <div className="education-column">
            <p className="column-title">Education</p>
            <article>
              <span>2018 — 2024</span>
              <h3>PhD in Physics</h3>
              <p>University of Science and Technology of China</p>
              <p>Advisor: Professor Wei Yi</p>
            </article>
            <article>
              <span>2014 — 2018</span>
              <h3>BSc in Physics</h3>
              <p>Zhoukou Normal University</p>
            </article>
          </div>
          <div className="publication-column">
            <p className="column-title">Selected publications</p>
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
          <div className="patent-column">
            <p className="column-title">Neutral-atom compilation patents</p>
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
        <div>
          <p>Contact</p>
          <h2>Discuss an AI agent, scientific workflow, or quantum system.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:zx4612@mail.ustc.edu.cn">
            <Mail size={16} aria-hidden="true" />
            zx4612@mail.ustc.edu.cn
          </a>
          <a href="https://github.com/xi-zhao" target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
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
