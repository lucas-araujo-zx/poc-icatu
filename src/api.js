const TOKEN_KEY = 'icatu.lab.token'

export function readToken() {
  return sessionStorage.getItem(TOKEN_KEY) ?? ''
}

export function writeToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY)
}

async function request(path, { method = 'GET', token = '', body } = {}) {
  const headers = { 'x-icatu-path': path }
  if (token) {
    headers['x-icatu-token'] = token
  }
  if (body) {
    headers['Content-Type'] = 'application/json'
  }
  const response = await fetch(path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  const type = response.headers.get('content-type') ?? ''
  if (!type.includes('application/json')) {
    throw new Error('A API não respondeu JSON. Publique a bancada de novo.')
  }
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(payload.error || 'Não foi possível concluir o pedido.')
  }
  return payload
}

export function login(token) {
  return request('/api/login', { method: 'POST', body: { token } })
}

export function catalog(token) {
  return request('/api/catalog', { token })
}

export function signedUrl(token, agentId) {
  return request(`/api/signed-url?agent_id=${encodeURIComponent(agentId)}`, { token })
}

export function conversationResult(token, conversationId) {
  return request(`/api/conversation?conversation_id=${encodeURIComponent(conversationId)}`, { token })
}
