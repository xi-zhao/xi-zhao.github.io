import { ArrowUpRight, Code2, Mail } from 'lucide-react';
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
          <strong>赵茜</strong>
          <span>ZHAO XI</span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          <a href="#approach">方法</a>
          <a href="#work">项目</a>
          <a href="#experience">经历</a>
          <a href="#research">研究</a>
        </nav>
        <a className="header-contact" href="mailto:zx4612@mail.ustc.edu.cn">
          联系方式
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">AI SOLUTIONS ARCHITECT · PHYSICS PHD</div>
          <h1>
            AI 解决方案架构师
            <span>量子计算研究者</span>
          </h1>
          <p className="hero-lede">
            专注于企业级 Agent
            系统、科研智能体与量子计算。将复杂业务和研究问题转化为结构清晰、可执行、可验证的智能系统。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              查看代表项目
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
            <span>浪潮集团 · AI 解决方案架构师 / 集团博士后</span>
            <span>北京</span>
          </div>
        </div>

        <div className="portrait-stage">
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
            <strong>赵茜</strong>
            <span>中国科学技术大学 · 物理学博士</span>
          </div>
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
            <span>人工智能与量子计算</span>
          </div>
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="section-label">
          <span>01</span>
          <span>专业方法</span>
        </div>
        <div className="approach-intro">
          <h2>
            从问题定义到
            <br />
            <em>可验证交付</em>
          </h2>
          <div className="approach-note">
            <span>方法原则</span>
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
          <div className="section-label">
            <span>02</span>
            <span>代表项目</span>
          </div>
          <h2>代表项目</h2>
          <p>围绕 Agent 系统、科研复现与量子代码验证开展的实践。</p>
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
          <span>工作经历</span>
        </div>
        <div className="experience-hero">
          <div>
            <span className="date">2024.10 — NOW</span>
            <h2>浪潮集团</h2>
            <p>AI 解决方案架构师 / 集团博士后</p>
          </div>
          <strong>负责企业级 Agent 平台、行业解决方案与科研智能化方向。</strong>
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
            <span>教育与研究</span>
          </div>
          <h2>教育与研究</h2>
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
            <span>代表论文</span>
            <span>共 4 项</span>
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
            <span>相关专利</span>
            <p>
              中性原子量子电路编译、全量子编译方案，以及分区架构中性原子量子计算体系的快速编译方案。
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-copy">
          <span>05 / 联系方式</span>
          <h2>合作与交流</h2>
          <p>欢迎就企业级 Agent 系统、科研智能化与量子计算相关方向联系交流。</p>
        </div>
        <div className="contact-links">
          <a href="mailto:zx4612@mail.ustc.edu.cn">
            <Mail size={22} aria-hidden="true" />
            <span>
              <small>电子邮箱</small>zx4612@mail.ustc.edu.cn
            </span>
            <ArrowUpRight size={28} aria-hidden="true" />
          </a>
          <a href="https://github.com/xi-zhao" target="_blank" rel="noreferrer">
            <Code2 size={22} aria-hidden="true" />
            <span>
              <small>GitHub</small>github.com/xi-zhao
            </span>
            <ArrowUpRight size={28} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <strong>赵茜 / ZHAO XI</strong>
        <span>AI 解决方案架构师 · 量子计算研究者</span>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </main>
  );
}
