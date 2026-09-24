import assert from 'node:assert/strict'
import test from 'node:test'
import avatar from '../api/avatar.mjs'
import checkVersion from '../api/check-version.mjs'
import {
  LATEST_DOWNLOAD_URL,
  LATEST_PUBLISHED_AT,
  LATEST_RELEASE_NOTES,
  LATEST_VERSION,
} from '../api/_config.mjs'

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

test('version endpoint reports release metadata and rejects missing versions', () => {
  const older = response()
  checkVersion({ query: { version: '0.0.1' } }, older)
  assert.equal(older.code, 200)
  assert.equal(older.body.hasUpdate, Boolean(LATEST_DOWNLOAD_URL))
  assert.equal(older.body.version, LATEST_VERSION)
  assert.equal(older.body.publishedAt, LATEST_PUBLISHED_AT)
  assert.equal(older.body.downloadUrl, LATEST_DOWNLOAD_URL)
  assert.equal(older.body.releaseNotes, LATEST_RELEASE_NOTES)

  const current = response()
  checkVersion({ query: { version: LATEST_VERSION } }, current)
  assert.equal(current.body.hasUpdate, false)
  assert.equal(current.body.version, LATEST_VERSION)

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
