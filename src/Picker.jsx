const LOGO = 'https://portal.icatuseguros.com.br/assets/icons/logo_icatuseguros_horizontal.svg'

function SitePreview() {
  return (
    <div className="site-stage" aria-hidden="true">
      <span className="site-bar" />
      <span className="site-hero" />
      <span className="site-tiles">
        <i />
        <i />
        <i />
      </span>
    </div>
  )
}

export function Picker({ website, voice, onOpenSite, onOpenVoice, onSignOut }) {
  return (
    <div className="lab-app">
      <header className="lab-header">
        <img src={LOGO} alt="Icatu Seguros" />
        <p>Bancada de agentes</p>
        <button type="button" className="text-button" onClick={onSignOut}>
          Sair
        </button>
      </header>
      <main className="picker">
        <header className="picker-head">
          <p className="kicker">Central de Sinistro</p>
          <h1>Qual agente você quer testar?</h1>
          <p>
            O assistente do site abre a Central de Sinistro. A Iara do telefone
            abre a conversa por voz, com o microfone ligado desde o início.
          </p>
        </header>
        <div className="agent-grid">
          <article className="agent-card" style={{ '--i': 0 }}>
            <SitePreview />
            <p className="card-kicker">Site</p>
            <h2>{website?.name || 'Assistente de sinistros'}</h2>
            <p>{website?.description}</p>
            <button type="button" className="cta" onClick={onOpenSite}>
              Abrir o site
            </button>
          </article>
          <article className="agent-card" style={{ '--i': 1 }}>
            <p className="card-kicker">Voz</p>
            <h2>{voice?.name || 'Iara — Central de Sinistro'}</h2>
            <p>{voice?.error || voice?.description}</p>
            <button type="button" className="cta" onClick={onOpenVoice}>
              Conversar
            </button>
          </article>
        </div>
      </main>
    </div>
  )
}
