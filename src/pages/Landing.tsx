import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <nav className="landing-nav">
          <span className="landing-nav-logo">bosonic</span>
          <Link to="/simulator" className="nav-link-button">Open Simulator</Link>
        </nav>
      </header>

      <main className="landing-main">
        <div className="hero">
          <div className="hero-badge">Client-side · No server required</div>
          <h1 className="hero-title">
            Distributed Quantum<br />Circuit Simulator
          </h1>
          <p className="hero-subtitle">
            Build and simulate distributed quantum circuits directly in your browser.
            Powered by the Bosonic SDK and running entirely on your machine via WebAssembly.
          </p>
          <div className="hero-actions">
            <Link to="/simulator" className="btn-primary">
              Launch Simulator
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a
              href="https://github.com/dqc-community/dqcomp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Client-Side Execution</h3>
            <p>All simulation runs in your browser via Pyodide — no Python server, no data leaves your machine.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 6.5h4M17.5 10v4M6.5 10v4M10 17.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Distributed Circuits</h3>
            <p>Compile quantum circuits across multiple QPU modules using the Bosonic distribution algorithms.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 19V6l12-3v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="6" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3>Interactive Notebook</h3>
            <p>Explore the full workshop notebook with reactive cells — edit parameters and see results update live.</p>
          </div>
        </div>

        <div className="architecture">
          <h2 className="section-title">How it works</h2>
          <div className="arch-steps">
            <div className="arch-step">
              <div className="arch-step-number">1</div>
              <div className="arch-step-content">
                <h4>Circuit Definition</h4>
                <p>Define quantum circuits using the Qiskit-compatible Bosonic SDK in the notebook interface.</p>
              </div>
            </div>
            <div className="arch-connector" aria-hidden="true" />
            <div className="arch-step">
              <div className="arch-step-number">2</div>
              <div className="arch-step-content">
                <h4>Distribution</h4>
                <p>The Bosonic compiler partitions your circuit across modules and inserts remote-link gates for cross-module entanglement.</p>
              </div>
            </div>
            <div className="arch-connector" aria-hidden="true" />
            <div className="arch-step">
              <div className="arch-step-number">3</div>
              <div className="arch-step-content">
                <h4>Simulation</h4>
                <p>The distributed circuit runs through the statevector simulator — your CPU, your browser, no cloud required.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta">
          <h2>Ready to explore distributed quantum computing?</h2>
          <Link to="/simulator" className="btn-primary btn-large">
            Open the Simulator
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </main>

      <footer className="landing-footer">
        <p>
          Built with{' '}
          <a href="https://github.com/dqc-community/dqcomp" target="_blank" rel="noopener noreferrer">Bosonic SDK</a>
          {' '}·{' '}
          <a href="https://marimo.io" target="_blank" rel="noopener noreferrer">Marimo</a>
          {' '}·{' '}
          <a href="https://pyodide.org" target="_blank" rel="noopener noreferrer">Pyodide</a>
        </p>
      </footer>
    </div>
  )
}
