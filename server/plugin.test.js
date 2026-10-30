import assert from 'node:assert/strict'
import test from 'node:test'
import { tokensMatch } from './agents.js'
import { dispatchApi } from './plugin.js'

const env = {
  loginToken: 'token-da-bancada',
  apiKey: 'chave',
  siteAgentId: '',
  voiceAgentId: '',
}

test('tokensMatch aceita o mesmo segredo e rejeita outro', () => {
  assert.equal(tokensMatch('token-da-bancada', 'token-da-bancada'), true)
  assert.equal(tokensMatch('outro', 'token-da-bancada'), false)
  assert.equal(tokensMatch('token-da-bancada', ''), false)
})

test('login recusa token errado e aceita o configurado', async () => {
  const denied = await dispatchApi(
    { method: 'POST', pathname: '/api/login', searchParams: new URLSearchParams(), token: '', body: { token: 'errado' } },
    env,
  )
  assert.equal(denied.status, 401)

  const ok = await dispatchApi(
    { method: 'POST', pathname: '/api/login', searchParams: new URLSearchParams(), token: '', body: { token: env.loginToken } },
    env,
  )
  assert.equal(ok.status, 200)
  assert.equal(ok.payload.ok, true)
})

test('catalog devolve o site e a voz, e a sessão assinada só vale para a voz', async () => {
  const original = globalThis.fetch
  globalThis.fetch = async (url) => {
    const href = String(url)
    if (href.includes('/agents/')) {
      const id = href.split('/agents/')[1]
      return new Response(JSON.stringify({ name: id.startsWith('agent_3601') ? 'Site Icatu' : 'Voz Icatu' }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      })
    }
    if (href.includes('get-signed-url')) {
      return new Response(JSON.stringify({ signed_url: 'wss://exemplo' }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      })
    }
    return new Response('{}', { status: 404 })
  }

  try {
    const catalog = await dispatchApi(
      { method: 'GET', pathname: '/api/catalog', searchParams: new URLSearchParams(), token: env.loginToken, body: undefined },
      env,
    )
    assert.equal(catalog.status, 200)
    assert.equal(catalog.payload.website.path, '/central')
    assert.equal(catalog.payload.voice.path, '/voz')
    assert.equal(catalog.payload.website.name, 'Site Icatu')

    const foreign = await dispatchApi(
      {
        method: 'GET',
        pathname: '/api/signed-url',
        searchParams: new URLSearchParams({ agent_id: catalog.payload.website.id }),
        token: env.loginToken,
        body: undefined,
      },
      env,
    )
    assert.equal(foreign.status, 404)

    const signed = await dispatchApi(
      {
        method: 'GET',
        pathname: '/api/signed-url',
        searchParams: new URLSearchParams({ agent_id: catalog.payload.voice.id }),
        token: env.loginToken,
        body: undefined,
      },
      env,
    )
    assert.equal(signed.status, 200)
    assert.equal(signed.payload.signedUrl, 'wss://exemplo')

    const missing = await dispatchApi(
      {
        method: 'GET',
        pathname: '/api/conversation',
        searchParams: new URLSearchParams({ conversation_id: 'nao-e-id' }),
        token: env.loginToken,
        body: undefined,
      },
      env,
    )
    assert.equal(missing.status, 400)

    globalThis.fetch = async (url) => {
      const href = String(url)
      if (href.includes('/conversations/conv_4801m64ptqcke33aq74hz968qm1m')) {
        return new Response(
          JSON.stringify({
            conversation_id: 'conv_4801m64ptqcke33aq74hz968qm1m',
            agent_id: catalog.payload.voice.id,
            status: 'done',
            analysis: { transcript_summary: 'Consulta feita.' },
          }),
          { status: 200, headers: { 'content-type': 'application/json' } },
        )
      }
      if (href.includes('/conversations/')) {
        return new Response(
          JSON.stringify({
            conversation_id: 'conv_9991m64ptqcke33aq74hz968qm1m',
            agent_id: 'agent_de_outro_lugar_xxxx',
            status: 'done',
          }),
          { status: 200, headers: { 'content-type': 'application/json' } },
        )
      }
      return new Response('{}', { status: 404 })
    }

    const result = await dispatchApi(
      {
        method: 'GET',
        pathname: '/api/conversation',
        searchParams: new URLSearchParams({ conversation_id: 'conv_4801m64ptqcke33aq74hz968qm1m' }),
        token: env.loginToken,
        body: undefined,
      },
      env,
    )
    assert.equal(result.status, 200)
    assert.equal(result.payload.conversationId, 'conv_4801m64ptqcke33aq74hz968qm1m')
    assert.equal(result.payload.summary, 'Consulta feita.')

    const foreignConversation = await dispatchApi(
      {
        method: 'GET',
        pathname: '/api/conversation',
        searchParams: new URLSearchParams({ conversation_id: 'conv_9991m64ptqcke33aq74hz968qm1m' }),
        token: env.loginToken,
        body: undefined,
      },
      env,
    )
    assert.equal(foreignConversation.status, 404)
  } finally {
    globalThis.fetch = original
  }
})
