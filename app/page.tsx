import {
  ArrowDown,
  ArrowUpRight,
  Atom,
  BriefcaseBusiness,
  Building2,
  Code2,
  Cpu,
  Mail,
  MapPin,
  ScanSearch,
} from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    index: '01',
    name: 'OpenQuantum',
    role: '开源量子 Agent 平台',
    description:
      '基于 DeepSeek Harness 构建，把量子应用方法、确定性工具、科学验证与微信、飞书等入口组合成可运行的科研 Agent 工作空间。',
    tags: ['Agent Runtime', 'Quantum', 'Open Source'],
    href: 'https://github.com/xi-zhao/OpenQuantum',
    proof: '入选 awesome-dsh-plugin 与 dsh.io 精选集',
  },
  {
    index: '02',
    name: 'RunThePaper',
    role: '科研论文复现 Agent',
    description:
      '覆盖文献解析、公式推导、代码生成、数值计算、结果校验与失败修复，让论文复现从一次性尝试变成可追踪的工程流程。',
    tags: ['Research Agent', 'Reproduction', 'Validation'],
    href: 'https://github.com/xi-zhao/RunThePaper',
    proof: '已稳定自主复现 100+ 篇论文',
  },
  {
    index: '03',
    name: 'Fluxq',
    role: '量子代码生成 LLM Harness',
    description:
      '把 ReAct loop 扩展为“生成、结构验证、归一判断、修复”的 repair loop，用明确反馈推动模型修正量子代码。',
    tags: ['LLM Harness', 'Compiler', 'Benchmark'],
    href: 'https://github.com/xi-zhao/fluxq-valid308-evidence',
    proof: '在 308 个公开量子 benchmark 上验证',
  },
];

const workstreams = [
  {
    name: '元小智智能体云平台',
    detail:
      '主导内部平台从 Chatbot 升级为 Agent 云平台，建设数据接入、清洗、分类、抽取、生成与后处理能力，并落地知识问答、招投标、市场情报、PPT 生成、智能评审、会议总结等应用。',
  },
  {
    name: 'HumagWork',
    detail:
      '设计企业级 Human-Agent 协同工作台，围绕组织信息流汇总员工进展，为管理者生成结构化摘要，并支持跨部门信息同步与任务对齐。',
  },
  {
    name: '上汽大众 FDE',
    detail:
      '面向智能驾驶测试团队，推进测试数据库清洗、测试用例生成与实车测试自动化，并参与企业智能化转型培训。',
  },
  {
    name: '行业方案与研究',
    detail:
      '为教科研、量子科技和制造业客户完成需求抽象、系统架构、算力与服务器选型及交付；同时探索量子产业情报 Agent 与编译参数自动调优。',
  },
];

const papers = [
  {
    title: 'Stable molecular state in a dissipative spin-orbit coupling Fermi gas',
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
    title: 'MAS-Flag: An Auditable Role-Structured Controller for Fixed Budget Compiler Flag Search',
    venue: 'Research work',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="赵茜个人主页">
          ZX<span className="wordmark-dot">.</span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          <a href="#approach">方法</a>
          <a href="#work">项目</a>
          <a href="#experience">经历</a>
          <a href="#research">研究</a>
        </nav>
        <a className="header-contact" href="mailto:zx4612@mail.ustc.edu.cn">
          联系我
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            AI Agent 架构师 · 量子计算博士
          </div>
          <h1>
            把科研级严谨，
            <span>带进企业级 Agent 系统。</span>
          </h1>
          <p className="hero-lede">
            我是赵茜，现任浪潮集团 AI 解决方案架构师与集团博士后。
            我把复杂研究问题拆成可执行、可验证、可交付的智能系统。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              查看代表项目
              <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/xi-zhao"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} aria-hidden="true" />
              GitHub
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={15} aria-hidden="true" />
              北京
            </span>
            <a href="mailto:zx4612@mail.ustc.edu.cn">
              <Mail size={15} aria-hidden="true" />
              zx4612@mail.ustc.edu.cn
            </a>
          </div>
        </div>

        <div className="portrait-stage">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <Image
              src="/portrait.png"
              alt="赵茜"
              fill
              sizes="(max-width: 900px) 52vw, 26vw"
              priority
            />
          </div>
          <span className="portrait-label label-top">PHYSICS → SYSTEMS</span>
          <span className="portrait-label label-bottom">BEIJING · 2026</span>
        </div>

        <div className="proof-strip" aria-label="关键经历">
          <div>
            <strong>100+</strong>
            <span>科研论文自主复现</span>
          </div>
          <div>
            <strong>308</strong>
            <span>公开量子 benchmark 验证</span>
          </div>
          <div>
            <strong>3</strong>
            <span>AI · 科研 · 量子交叉领域</span>
          </div>
        </div>
      </section>

      <section className="section approach-section" id="approach">
        <div className="section-kicker">01 / APPROACH</div>
        <div className="approach-layout">
          <h2>
            科学训练给我的，
            <br />
            是一套做系统的方法。
          </h2>
          <div className="approach-copy">
            <p>
              企业开始需要能长期工作的 Agent：它要理解真实业务，调用可靠工具，留下可审计证据，并在失败后继续修正。
              我的工作，是把这条链路设计完整。
            </p>
            <p className="muted-copy">
              我关注的不是一次回答有多漂亮，而是系统能否在复杂约束下稳定推进任务。
            </p>
          </div>
        </div>

        <div className="principle-grid">
          <article className="principle-card">
            <span className="icon-box">
              <Building2 size={22} aria-hidden="true" />
            </span>
            <span className="card-index">01</span>
            <h3>从业务问题出发</h3>
            <p>先厘清用户、流程、状态与边界，再选择模型、工具和算力。</p>
          </article>
          <article className="principle-card">
            <span className="icon-box">
              <ScanSearch size={22} aria-hidden="true" />
            </span>
            <span className="card-index">02</span>
            <h3>用证据关闭循环</h3>
            <p>把生成、执行、校验与修复放进同一条可追踪工作流。</p>
          </article>
          <article className="principle-card">
            <span className="icon-box">
              <Atom size={22} aria-hidden="true" />
            </span>
            <span className="card-index">03</span>
            <h3>跨越研究与交付</h3>
            <p>把物理与量子计算的专业深度，翻译成企业可以采用的系统。</p>
          </article>
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 / SELECTED WORK</div>
            <h2>代表项目</h2>
          </div>
          <p>三条工作线，共用同一个原则：让 Agent 的能力可以执行、验证和复用。</p>
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
              <div className="project-number">{project.index}</div>
              <div className="project-main">
                <div className="project-title-row">
                  <div>
                    <h3>{project.name}</h3>
                    <span>{project.role}</span>
                  </div>
                  <ArrowUpRight size={24} aria-hidden="true" />
                </div>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <strong>{project.proof}</strong>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-kicker inverse">03 / EXPERIENCE</div>
        <div className="experience-lead">
          <div>
            <span className="experience-date">2024.10 — NOW</span>
            <h2>浪潮集团有限公司</h2>
            <p>AI 解决方案架构师 / 集团博士后</p>
          </div>
          <BriefcaseBusiness size={44} strokeWidth={1.3} aria-hidden="true" />
        </div>
        <div className="workstream-list">
          {workstreams.map((item, index) => (
            <article key={item.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="past-experience">
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

      <section className="section research-section" id="research">
        <div className="research-layout">
          <div className="research-side">
            <div className="section-kicker">04 / RESEARCH</div>
            <h2>研究背景</h2>
            <div className="education-card">
              <Cpu size={24} aria-hidden="true" />
              <span>2018 — 2024</span>
              <strong>中国科学技术大学</strong>
              <p>物理学 · 理学博士</p>
            </div>
            <div className="education-card secondary-education">
              <span>2014 — 2018</span>
              <strong>周口师范学院</strong>
              <p>物理学 · 理学学士</p>
            </div>
          </div>

          <div className="publication-list">
            <div className="publication-header">
              <span>SELECTED PAPERS</span>
              <span>04 ITEMS</span>
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
              <strong>相关专利</strong>
              <p>
                中性原子量子电路编译、全量子编译方案，以及分区架构中性原子量子计算体系的快速编译方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-grid" aria-hidden="true" />
        <div>
          <div className="section-kicker inverse">05 / CONTACT</div>
          <h2>
            讨论一个值得
            <br />
            做成系统的问题。
          </h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:zx4612@mail.ustc.edu.cn">
            <Mail size={20} aria-hidden="true" />
            zx4612@mail.ustc.edu.cn
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a href="https://github.com/xi-zhao" target="_blank" rel="noreferrer">
            <Code2 size={20} aria-hidden="true" />
            github.com/xi-zhao
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <span>赵茜 · Zhao Xi</span>
        <span>AI Agent Architecture × Quantum Computing</span>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </main>
  );
}
