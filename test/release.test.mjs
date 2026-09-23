import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import test from 'node:test'

const script = readFileSync(new URL('../site/js/release.js', import.meta.url), 'utf8')

async function renderRelease(fetch) {
  const elements = {
    'release-version': { textContent: '1.0.0' },
    'release-date': { textContent: '2026-01-01', dateTime: '2026-01-01' },
    'release-download': { hidden: true, href: '' },
  }

  await runInNewContext(script, {
    document: { getElementById: (id) => elements[id] },
    fetch,
    URL,
  })
  return elements
}

test('homepage displays release metadata and APK link from API', async () => {
  const elements = await renderRelease(async (url) => {
    assert.equal(url, '/api/check-version?version=1.0.0')
    return {
      ok: true,
      json: async () => ({
        version: '1.1.3',
        publishedAt: '2026-09-21T12:55:10Z',
        downloadUrl: 'https://github.com/JamieYee/save_website/releases/download/v1.1.3/save-1.1.3-release.apk',
      }),
    }
  })

  assert.equal(elements['release-version'].textContent, '1.1.3')
  assert.equal(elements['release-date'].textContent, '2026-09-21')
  assert.equal(elements['release-date'].dateTime, '2026-09-21T12:55:10Z')
  assert.equal(elements['release-download'].hidden, false)
  assert.match(elements['release-download'].href, /save-1\.1\.3-release\.apk$/)
})

test('homepage keeps fallback version and date when API is unavailable', async () => {
  const elements = await renderRelease(async () => { throw new Error('offline') })

  assert.equal(elements['release-version'].textContent, '1.0.0')
  assert.equal(elements['release-date'].textContent, '2026-01-01')
  assert.equal(elements['release-download'].hidden, true)
})
