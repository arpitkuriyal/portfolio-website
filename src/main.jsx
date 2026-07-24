import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './styles.css'

const github = 'https://github.com/arpitkuriyal'
const mediumPost = 'https://medium.com/@arpitkuriyal2002/the-two-files-every-go-developer-ignores-until-production-go-mod-and-go-sum-01c595dfdecd'

const projects = [
  {
    name: 'Load Balancer',
    href: `${github}/load-balancer`,
    stack: 'Go · HTTP · Prometheus',
    details: 'routing · health checks · rate limits',
    description:
      'An HTTP load balancer exploring routing strategies, health checks, rate limiting, and observability.',
  },
  {
    name: 'Chess Game',
    href: `${github}/chessGame`,
    stack: 'TypeScript · WebSockets',
    details: 'real-time state · client/server sync',
    description:
      'A real-time chess application built around game state and client–server synchronisation.',
  },
  {
    name: 'Chat Server',
    href: `${github}/chat-server`,
    stack: 'Go · TCP',
    details: 'terminal interface · messaging over TCP',
    description: 'A terminal-based chat server written in Go.',
  },
]

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  )
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top">arpit kuriyal</a>
        <nav aria-label="Main navigation">
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#writing">writing</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">backend engineer / systems curious</p>
        <h1>I make software that does the work.</h1>
        <p className="intro">
          I’m Arpit. I like Go, TypeScript, distributed systems, and understanding the parts behind the interface.
        </p>
        <div className="links">
          <ExternalLink href={github}>GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/arpit-kuriyal-8b6190265/">LinkedIn</ExternalLink>
          <ExternalLink href="https://x.com/ArpitKuriyal12">X</ExternalLink>
          <a href="mailto:arpitkuriyal2002@gmail.com">Email</a>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <p className="eyebrow">experience</p>
          <h2 id="experience-title">Google Summer of Code</h2>
        </div>
        <article className="experience-entry">
          <div className="experience-meta">
            <p>Jun — Aug 2025</p>
            <p>JSON Schema</p>
          </div>
          <div className="experience-copy">
            <h3>Contributor · better-json-schema-errors</h3>
            <p>
              Built developer-friendly JSON Schema validation errors: a library that turns machine-oriented
              validator output into clear messages for APIs and developer tools.
            </p>
            <ul>
              <li>Designed a normalization pipeline for BASIC, DETAILED, and VERBOSE validation outputs.</li>
              <li>Implemented modular keyword and error handlers, including complex <code>anyOf</code>, <code>allOf</code>, and <code>if/then/else</code> cases.</li>
              <li>Added localization infrastructure, test-driven coverage, documentation, and contributed 19 merged pull requests.</li>
            </ul>
            <p className="experience-links">
              <ExternalLink href="https://github.com/hyperjump-io/json-schema-errors">project</ExternalLink>
              <ExternalLink href="https://gist.github.com/arpitkuriyal/81d1388b5077ac238abb978adaf3c8b0">final report</ExternalLink>
            </p>
          </div>
        </article>
      </section>

      <section id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="eyebrow">selected work</p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project" key={project.name}>
              <span className="project-number">0{index + 1}</span>
              <div>
                <ExternalLink className="project-title" href={project.href}>{project.name}</ExternalLink>
                <p className="stack">{project.stack}</p>
                <p>{project.description}</p>
                <p className="project-details">{project.details}</p>
              </div>
              <ExternalLink className="source" href={project.href}>source</ExternalLink>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" aria-labelledby="writing-title">
        <div className="section-heading">
          <p className="eyebrow">writing</p>
          <h2 id="writing-title">Blog</h2>
        </div>
        <article className="blog-post">
          <div className="blog-meta">
            <p>Medium</p>
            <p>Go</p>
          </div>
          <div className="blog-copy">
            <ExternalLink className="blog-title" href={mediumPost}>
              The Two Files Every Go Developer Ignores Until Production: go.mod and go.sum
            </ExternalLink>
            <p>
              A practical look at the Go module files that quietly define how your dependencies behave in production.
            </p>
            <ExternalLink className="read-post" href={mediumPost}>Read on Medium</ExternalLink>
          </div>
        </article>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">notes</p>
          <h2 id="about-title">About</h2>
        </div>
        <div className="about-copy">
          <p>I’m currently most interested in backend engineering: concurrency, networking, infrastructure, and the small decisions that make systems dependable.</p>
          <p>Outside of larger projects, I keep public notes and small experiments on Go fundamentals, concurrency patterns, Kubernetes, and interview preparation.</p>
          <ExternalLink href={`${github}?tab=repositories`}>See all repositories</ExternalLink>
        </div>
      </section>

      <section className="elsewhere" aria-labelledby="elsewhere-title">
        <div className="section-heading">
          <p className="eyebrow">in progress</p>
          <h2 id="elsewhere-title">Notes &amp; experiments</h2>
        </div>
        <div className="note-list">
          <ExternalLink href={`${github}/Go-practice`}>
            <strong>Go practice</strong><span>Fundamentals, challenges, and interview-focused revision notes.</span>
          </ExternalLink>
          <ExternalLink href={`${github}/kubernetes-practice`}>
            <strong>Kubernetes practice</strong><span>Hands-on manifests and notes.</span>
          </ExternalLink>
        </div>
      </section>

      <footer id="contact">
        <p>Want to build something useful?</p>
        <ExternalLink href="https://www.linkedin.com/in/arpit-kuriyal-8b6190265/">Get in touch on LinkedIn</ExternalLink>
        <span className="footer-mark">© {new Date().getFullYear()} Arpit Kuriyal</span>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  <Analytics />
  </StrictMode>
)
