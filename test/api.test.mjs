import assert from 'node:assert/strict'
import test from 'node:test'
import avatar from '../api/avatar.mjs'
import checkVersion from '../api/check-version.mjs'

function response() {
  return {
    code: 200,
    headers: {},
    status(code) {
      this.code = code
      return this
    },
    setHeader(name, value) {
      this.headers[name] = value
    },
    json(body) {
      this.body = body
      return this
    },
    send(body) {
      this.body = body
      return this
    },
  }
}

test('version endpoint reports updates and rejects missing versions', () => {
  const older = response()
  checkVersion({ query: { version: '1.1.2' } }, older)
  assert.equal(older.code, 200)
  assert.equal(older.body.hasUpdate, true)
  assert.equal(older.body.version, '1.1.3')
  assert.equal(older.body.publishedAt, '2026-09-21T12:55:10Z')
  assert.equal(
    older.body.downloadUrl,
    'https://github.com/JamieYee/save_website/releases/download/v1.1.3/save-1.1.3-release.apk',
  )
  assert.equal(
    older.body.releaseNotes,
    '新增账户逐笔结余\n优化 AI 智能记账与多笔账单识别\n优化提醒、账单编辑和界面体验\n修复生物识别等已知问题',
  )

  const current = response()
  checkVersion({ query: { version: '1.1.3' } }, current)
  assert.equal(current.body.hasUpdate, false)
  assert.equal(current.body.version, '1.1.3')

  const missing = response()
  checkVersion({ query: {} }, missing)
  assert.equal(missing.code, 400)
})

test('avatar endpoint returns a PNG for a chosen seed and style', async () => {
  const result = response()
  await avatar({ query: { seed: 'test-user', style: 'micah' } }, result)
  assert.equal(result.code, 200)
  assert.equal(result.headers['Content-Type'], 'image/png')
  assert.ok(Buffer.isBuffer(result.body))
  assert.equal(result.body.subarray(0, 8).toString('hex'), '89504e470d0a1a0a')
})
