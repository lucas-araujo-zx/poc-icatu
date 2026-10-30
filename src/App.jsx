import { useEffect, useState } from 'react'
import { catalog, clearToken, login, readToken, writeToken } from './api.js'
import { Login } from './Login.jsx'
import { Picker } from './Picker.jsx'
import { SiteShell } from './SiteShell.jsx'
import { Talk } from './Talk.jsx'

export function App() {
  const [token, setToken] = useState(readToken)
  const [path, setPath] = useState(() => window.location.pathname)
  const [catalogData, setCatalogData] = useState(null)
  const [booting, setBooting] = useState(Boolean(readToken()))
  const [loginError, setLoginError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function go(next) {
    const url = next || '/'
    window.history.pushState({}, '', url)
    setPath(url)
  }

  useEffect(() => {
    if (!token) {
      setCatalogData(null)
      setBooting(false)
      return undefined
    }
    let cancelled = false
    setBooting(true)
    catalog(token)
      .then((data) => {
        if (!cancelled) {
          setCatalogData(data)
        }
      })
      .catch((error) => {
        if (!cancelled) {
          clearToken()
          setToken('')
          setCatalogData(null)
          setLoginError(error.message)
        }
      })
      .finally(() => {
        if (!cancelled) {
          setBooting(false)
        }
      })
    return () => {
      cancelled = true
    }
  }, [token])

  async function handleLogin(next) {
    setLoginLoading(true)
    setLoginError('')
    try {
      await login(next)
      writeToken(next)
      setToken(next)
      const current = window.location.pathname
      if (current !== '/' && !current.startsWith('/central') && current !== '/voz') {
        go('/')
      }
    } catch (error) {
      setLoginError(error.message)
    } finally {
      setLoginLoading(false)
    }
  }

  function signOut() {
    clearToken()
    setToken('')
    setCatalogData(null)
    go('/')
  }

  if (!token || !catalogData) {
    return (
      <Login
        error={loginError}
        loading={loginLoading || booting}
        onSubmit={handleLogin}
      />
    )
  }

  if (path === '/central' || path.startsWith('/central/')) {
    return (
      <SiteShell
        agentId={catalogData.website.id}
        onLeave={() => go('/')}
        onSignOut={signOut}
      />
    )
  }

  if (path === '/voz') {
    return (
      <Talk
        token={token}
        agent={catalogData.voice}
        onBack={() => go('/')}
        onSignOut={signOut}
      />
    )
  }

  return (
    <Picker
      website={catalogData.website}
      voice={catalogData.voice}
      onOpenSite={() => go('/central')}
      onOpenVoice={() => go('/voz')}
      onSignOut={signOut}
    />
  )
}
