import { access, cp } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const lab = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = path.resolve(lab, '../web/src')
const dest = path.join(lab, 'central')

async function exists(file) {
  try {
    await access(file)
    return true
  } catch {
    return false
  }
}

if (await exists(path.join(source, 'App.jsx'))) {
  await cp(source, dest, { recursive: true })
} else if (!(await exists(path.join(dest, 'App.jsx')))) {
  throw new Error('A Central de Sinistro não está neste deploy.')
}
