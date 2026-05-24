import { useState } from 'react'
import './NotebookFrame.css'

interface NotebookFrameProps {
  src: string
}

export default function NotebookFrame({ src }: NotebookFrameProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="notebook-frame-wrapper">
      {!loaded && !error && (
        <div className="notebook-loading">
          <div className="notebook-loading-spinner" aria-hidden="true" />
          <p className="notebook-loading-title">Starting notebook</p>
          <p className="notebook-loading-sub">
            Initialising Pyodide and loading packages — this takes 30–60 seconds on first load.
          </p>
          <div className="notebook-loading-steps">
            <span>Loading Marimo</span>
            <span aria-hidden="true">→</span>
            <span>Fetching Pyodide</span>
            <span aria-hidden="true">→</span>
            <span>Installing packages</span>
            <span aria-hidden="true">→</span>
            <span>Running cells</span>
          </div>
        </div>
      )}

      {error && (
        <div className="notebook-error">
          <p className="notebook-error-title">Failed to load notebook</p>
          <p className="notebook-error-sub">
            Make sure the notebook has been exported. Run:
          </p>
          <code className="notebook-error-cmd">npm run build:notebook</code>
        </div>
      )}

      <iframe
        src={src}
        title="DQC Workshop Notebook"
        className={`notebook-iframe ${loaded ? 'notebook-iframe--visible' : ''}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        // allow SharedArrayBuffer inside the iframe (same-origin, COEP/COOP set on parent)
        sandbox="allow-scripts allow-same-origin allow-forms allow-downloads"
      />
    </div>
  )
}
