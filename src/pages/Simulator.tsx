import { Link } from 'react-router-dom'
import NotebookFrame from '../components/NotebookFrame'
import './Simulator.css'

export default function Simulator() {
  return (
    <div className="simulator">
      <header className="simulator-header">
        <Link to="/" className="simulator-back" aria-label="Back to landing page">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          bosonic
        </Link>
        <span className="simulator-title">DQC Workshop Notebook</span>
        <div className="simulator-header-right">
          <span className="simulator-status" title="Running client-side in your browser">
            <span className="simulator-status-dot" aria-hidden="true" />
            client-side
          </span>
        </div>
      </header>

      <div className="simulator-body">
        <NotebookFrame src="/notebook/index.html" />
      </div>
    </div>
  )
}
