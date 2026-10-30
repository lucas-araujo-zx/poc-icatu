import { timingSafeEqual } from 'node:crypto'

const AGENT_ID = /^[a-zA-Z0-9_-]{8,128}$/

export const SITE_AGENT = {
  id: 'agent_3601m5des550ey68ta8hv7sgb3zm',
  name: 'Assistente de sinistros',
  description:
    'Abre a Central de Sinistro para acompanhar a Iara no aviso, na cobertura e nos documentos.',
  path: '/central',
}

export const VOICE_AGENT = {
  id: 'agent_0001m5d7zxk8eqh8hgjpn9khk4mj',
  name: 'Iara — Central de Sinistro',
  description:
    'Conversa por voz, como no telefone. O microfone entra ligado quando a chamada começa.',
  path: '/voz',
}

export function isAgentId(value) {
  return AGENT_ID.test(String(value ?? '').trim())
}

export function tokensMatch(given, expected) {
  const left = Buffer.from(String(given ?? ''))
  const right = Buffer.from(String(expected ?? ''))
  if (!right.length || left.length !== right.length) {
    return false
  }
  return timingSafeEqual(left, right)
}

export function agentDisplayName(agent) {
  const value = agent?.name
  if (typeof value === 'string' && value.trim()) {
    return value.trim()
  }
  return ''
}

export function resolveAgent(env, kind) {
  const fallback = kind === 'site' ? SITE_AGENT : VOICE_AGENT
  const raw = kind === 'site' ? env.siteAgentId : env.voiceAgentId
  const id = String(raw ?? '').trim()
  return {
    ...fallback,
    id: isAgentId(id) ? id : fallback.id,
  }
}
