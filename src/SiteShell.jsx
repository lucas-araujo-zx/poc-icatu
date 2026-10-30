import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import WebApp from '../../web/src/App.jsx'
import '../../web/src/styles.css'

export function SiteShell({ agentId, onLeave, onSignOut }) {
  useEffect(() => {
    const widget = document.createElement('elevenlabs-convai')
    widget.setAttribute('agent-id', agentId)
    document.body.appendChild(widget)
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
    script.async = true
    document.body.appendChild(script)
    return () => {
      widget.remove()
      script.remove()
    }
  }, [agentId])

  return (
    <div className="site-shell">
      <div className="site-lab-bar">
        <button type="button" onClick={onLeave}>
          Agentes
        </button>
        <button type="button" onClick={onSignOut}>
          Sair
        </button>
      </div>
      <BrowserRouter basename="/central">
        <WebApp />
      </BrowserRouter>
    </div>
  )
}
