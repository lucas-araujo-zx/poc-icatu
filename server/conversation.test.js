import assert from 'node:assert/strict'
import test from 'node:test'
import { isConversationId, presentConversation } from './conversation.js'

test('isConversationId aceita o formato da ElevenLabs', () => {
  assert.equal(isConversationId('conv_4801m64ptqcke33aq74hz968qm1m'), true)
  assert.equal(isConversationId('conv_curto'), false)
  assert.equal(isConversationId('../etc'), false)
})

test('presentConversation coloca o ID e os grupos da análise', () => {
  const view = presentConversation({
    conversation_id: 'conv_4801m64ptqcke33aq74hz968qm1m',
    status: 'done',
    metadata: { call_duration_secs: 75 },
    analysis: {
      transcript_summary: 'A pessoa quis acompanhar o seguro.',
      call_successful: 'success',
      evaluation_criteria_results: {
        seguro_identificado: { result: 'success', rationale: 'Ela disse Icatu.' },
      },
      data_collection_results: {
        cpf: { value: '12345678900' },
      },
    },
    conversation_initiation_client_data: {
      dynamic_variables: { system__time: 'agora', canal: 'lab' },
    },
  })

  assert.equal(view.conversationId, 'conv_4801m64ptqcke33aq74hz968qm1m')
  assert.equal(view.ready, true)
  assert.equal(view.summary, 'A pessoa quis acompanhar o seguro.')
  assert.equal(view.durationSecs, 75)
  assert.equal(view.criteria[0].id, 'seguro_identificado')
  assert.equal(view.criteria[0].result, 'success')
  assert.deepEqual(view.dataCollection, [{ id: 'cpf', value: '12345678900' }])
  assert.deepEqual(view.variables, [{ id: 'canal', value: 'lab' }])
})

test('presentConversation espera a análise enquanto o status não termina', () => {
  const view = presentConversation({ status: 'processing' }, 'conv_4801m64ptqcke33aq74hz968qm1m')
  assert.equal(view.ready, false)
  assert.equal(view.conversationId, 'conv_4801m64ptqcke33aq74hz968qm1m')
})
