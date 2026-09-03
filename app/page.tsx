import { ArrowRight, ArrowUpRight, Code2, Mail } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    index: '01',
    name: 'OpenQuantum',
    role: '开源量子 Agent 操作平台',
    thesis:
      '让量子能力不止存在于实验代码里，而是成为 Agent 可以调用、验证和组合的工作系统。',
    description:
      '基于 DeepSeek Harness 构建，把量子领域方法、确定性工具、科学验证与微信、飞书等入口组合成可运行的科研 Agent 工作空间。',
    tags: ['AGENT RUNTIME', 'QUANTUM', 'OPEN SOURCE'],
    href: 'https://github.com/xi-zhao/OpenQuantum',
    proof: '入选 awesome-dsh-plugin 与 dsh.io 精选集',
  },
  {
    index: '02',
    name: 'RunThePaper',
    role: '科研论文复现 Agent',
    thesis: '把“读懂一篇论文”推进到“可追踪地复现它”。',
    description:
      '覆盖文献解析、公式推导、代码生成、数值计算、结果校验与失败修复，让论文复现从一次性尝试变成一条完整工作流。',
    tags: ['RESEARCH AGENT', 'REPRODUCTION', 'VALIDATION'],
    href: 'https://github.com/xi-zhao/RunThePaper',
    proof: '已稳定自主复现 100+ 篇论文',
  },
  {
    index: '03',
    name: 'Fluxq',
    role: '量子代码生成 LLM Harness',
    thesis: '模型生成不是终点，能够发现错误并继续修正才是。',
    description:
      '把 ReAct loop 扩展为“生成、结构验证、归一判断、修复”的 repair loop，用明确反馈推动模型修正量子代码。',
    tags: ['LLM HARNESS', 'COMPILER', 'BENCHMARK'],
    href: 'https://github.com/xi-zhao/fluxq-valid308-evidence',
    proof: '在 308 个公开量子 benchmark 上验证',
  },
];

const methods = [
  {
    index: '01',
    title: '先找到真正的问题',
    text: '从用户、业务流程和约束出发，不用模型能力替代产品判断。',
  },
  {
    index: '02',
    title: '再设计可工作的系统',
    text: '把模型、工具、状态和人类决策组织成清晰、可恢复的任务链。',
  },
  {
    index: '03',
    title: '最后用证据闭环',
    text: '让执行结果可以验证、错误可以定位、系统可以继续迭代。',
  },
];

const workstreams = [
  {
    name: '元小智智能体云平台',
    detail:
      '主导内部平台从 Chatbot 升级为 Agent 云平台，建设数据接入、清洗、分类、抽取、生成与后处理能力。',
  },
  {
    name: 'HumagWork',
    detail:
      '设计企业级 Human-Agent 协同工作台，汇总组织信息流，为管理者生成结构化摘要并支持跨部门任务对齐。',
  },
  {
    name: '上汽大众 FDE',
    detail:
      '推进测试数据库清洗、测试用例生成与实车测试自动化，并参与企业智能化转型培训。',
  },
  {
    name: '行业方案与研究',
    detail:
      '面向教科研、量子科技与制造业完成需求抽象、系统架构、算力选型及交付。',
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
        <a className="wordmark" href="#top" aria-label="赵茜个人主页">
          <span>XI</span>
          <span>赵茜</span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          <a href="#approach">方法</a>
          <a href="#work">项目</a>
          <a href="#experience">经历</a>
          <a href="#research">研究</a>
        </nav>
        <a className="header-contact" href="mailto:zx4612@mail.ustc.edu.cn">
          LET&apos;S TALK
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span>AI AGENT ARCHITECT</span>
            <span>PHYSICS PHD</span>
          </div>
          <h1>
            把复杂问题，
            <span>做成可靠系统。</span>
          </h1>
          <p className="hero-lede">
            我是赵茜。我从物理学走向 AI 系统设计，连接科研方法、Agent
            架构与企业落地——让智能不止会回答，更能够工作、验证与迭代。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              查看我的工作
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/xi-zhao"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-meta">
            <span>BASED IN BEIJING</span>
            <span>NOW AT INSPUR</span>
          </div>
        </div>

        <div className="portrait-stage">
          <div className="portrait-number" aria-hidden="true">
            01
          </div>
          <div className="portrait-block" aria-hidden="true" />
          <div className="portrait-frame">
            <Image
              src="/portrait.png"
              alt="赵茜"
              fill
              sizes="(max-width: 900px) 76vw, 40vw"
              priority
            />
          </div>
          <div className="portrait-caption">
            <strong>赵茜 / ZHAO XI</strong>
            <span>科学思维，系统表达</span>
          </div>
          <span className="portrait-label">RESEARCH → SYSTEMS → IMPACT</span>
        </div>

        <div className="proof-strip" aria-label="关键成果">
          <div>
            <strong>100+</strong>
            <span>论文自主复现</span>
          </div>
          <div>
            <strong>308</strong>
            <span>量子基准验证</span>
          </div>
          <div>
            <strong>AI × Q</strong>
            <span>智能与量子交叉</span>
          </div>
        </div>
      </section>

      <div className="running-line" aria-hidden="true">
        <span>PHYSICS</span>
        <i>→</i>
        <span>AGENT SYSTEMS</span>
        <i>→</i>
        <span>VERIFIABLE OUTCOMES</span>
        <i>→</i>
        <span>REAL IMPACT</span>
      </div>

      <section className="approach-section" id="approach">
        <div className="section-label">
          <span>01</span>
          <span>HOW I THINK</span>
        </div>
        <div className="approach-intro">
          <h2>
            科学训练给我的，
            <br />
            不是答案。<em>是方法。</em>
          </h2>
          <div className="approach-note">
            <span>MY THESIS</span>
            <p>
              企业真正需要的
              Agent，不是一次回答得漂亮，而是能在真实约束中持续推进任务，并为每一步留下可信证据。
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
          <div className="section-label inverse">
            <span>02</span>
            <span>SELECTED WORK</span>
          </div>
          <h2>
            三个系统，
            <br />
            同一个主张。
          </h2>
          <p>真正的智能，需要能执行、能验证、能修正。</p>
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
                <ArrowUpRight size={34} strokeWidth={1.6} aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-label">
          <span>03</span>
          <span>EXPERIENCE</span>
        </div>
        <div className="experience-hero">
          <div>
            <span className="date">2024.10 — NOW</span>
            <h2>浪潮集团</h2>
            <p>AI 解决方案架构师 / 集团博士后</p>
          </div>
          <strong>从技术可行，走到组织可用。</strong>
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
            <span>2023.07 — 2025.10</span>
            <h3>北京量子信息科学研究院</h3>
            <p>量子计算部门 · 夸父云平台编译组实习</p>
          </article>
          <article>
            <span>2022.11 — 2023</span>
            <h3>量子科技长三角产业创新中心</h3>
            <p>基准部实习 · 量子算法、芯片 EDA 与 HFSS 仿真</p>
          </article>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="research-title">
          <div className="section-label inverse">
            <span>04</span>
            <span>RESEARCH</span>
          </div>
          <h2>
            研究是我的
            <br />
            底层语言。
          </h2>
          <div className="degree-block">
            <span>2018 — 2024</span>
            <strong>中国科学技术大学</strong>
            <p>物理学 · 理学博士</p>
          </div>
          <div className="degree-block secondary-degree">
            <span>2014 — 2018</span>
            <strong>周口师范学院</strong>
            <p>物理学 · 理学学士</p>
          </div>
        </div>
        <div className="publication-list">
          <div className="publication-head">
            <span>SELECTED PAPERS</span>
            <span>04 / 04</span>
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
            <span>PATENTS</span>
            <p>
              中性原子量子电路编译、全量子编译方案，以及分区架构中性原子量子计算体系的快速编译方案。
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-copy">
          <span>05 / CONTACT</span>
          <h2>
            有复杂问题？
            <br />
            <em>一起把它做成系统。</em>
          </h2>
        </div>
        <div className="contact-links">
          <a href="mailto:zx4612@mail.ustc.edu.cn">
            <Mail size={22} aria-hidden="true" />
            <span>
              <small>EMAIL</small>zx4612@mail.ustc.edu.cn
            </span>
            <ArrowUpRight size={28} aria-hidden="true" />
          </a>
          <a href="https://github.com/xi-zhao" target="_blank" rel="noreferrer">
            <Code2 size={22} aria-hidden="true" />
            <span>
              <small>GITHUB</small>github.com/xi-zhao
            </span>
            <ArrowUpRight size={28} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <strong>赵茜 / ZHAO XI</strong>
        <span>AI AGENT ARCHITECT × PHYSICS PHD</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
