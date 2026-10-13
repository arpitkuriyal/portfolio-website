import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './styles.css'

const github = 'https://github.com/arpitkuriyal'
const mediumPost = 'https://medium.com/@arpitkuriyal2002/the-two-files-every-go-developer-ignores-until-production-go-mod-and-go-sum-01c595dfdecd'

const projects = [
  {
    name: 'Business Drift',
    href: `${github}/business-drift`,
    stack: 'Go · React',
    details: 'Stripe · HubSpot status mismatch detection',
    description:
      'A customer risk dashboard that detects status mismatches between Stripe and HubSpot.',
  },
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

function ContactIcon({ href, label, children }) {
  return (
    <a className="contact-icon" href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
      {children}
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

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">contact</p>
          <h2 id="contact-title">Let’s build something useful.</h2>
        </div>
        <div className="contact-copy">
          <p>Have a project in mind?</p>
          <div className="contact-links">
            <ContactIcon href="mailto:arpitkuriyal2002@gmail.com" label="Email Arpit">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            </ContactIcon>
            <ContactIcon href="https://x.com/ArpitKuriyal12" label="Arpit on X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16M20 4 4 20" /></svg>
            </ContactIcon>
            <ContactIcon href="https://www.linkedin.com/in/arpit-kuriyal-8b6190265/" label="Arpit on LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 9.5V18M6.5 6.5v.01M10.5 18v-8.5M10.5 13.2c0-2.4 1.4-3.7 3.4-3.7 2.3 0 3.6 1.5 3.6 4.4V18" /></svg>
            </ContactIcon>
            <ContactIcon href={github} label="Arpit on GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.5 1.4-4.5-2.5-6.3-3M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.3 2.3 5.3 2.6 5.3 2.6a4.3 4.3 0 0 0-.1 3.3 4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6A3 3 0 0 0 8.6 17.5V21" /></svg>
            </ContactIcon>
          </div>
        </div>
      </section>

      <footer>
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
