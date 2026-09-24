import assert from 'node:assert/strict'
import test from 'node:test'
import { renderConfig, selectAndroidRelease } from '../scripts/sync-release.mjs'

const apk = (name, version) => ({
  name,
  state: 'uploaded',
  browser_download_url: `https://github.com/JamieYee/save_website/releases/download/v${version}/${name}`,
})

test('sync selects the newest published stable release with an APK', () => {
  const releases = [
    { tag_name: 'v1.1.4', published_at: '2026-09-24T00:00:00Z', draft: false, prerelease: true, assets: [apk('preview.apk', '1.1.4')] },
    { tag_name: 'v1.1.3', published_at: '2026-09-21T12:55:10Z', draft: false, prerelease: false, body: '- 新增功能\r\n- 修复问题', assets: [apk('save-1.1.3-release.apk', '1.1.3')] },
    { tag_name: 'v1.1.2', published_at: '2026-09-20T00:00:00Z', draft: false, prerelease: false, assets: [apk('save-1.1.2-release.apk', '1.1.2')] },
  ]
  assert.deepEqual(selectAndroidRelease(releases), {
    version: '1.1.3',
    publishedAt: '2026-09-21T12:55:10Z',
    downloadUrl: apk('save-1.1.3-release.apk', '1.1.3').browser_download_url,
    releaseNotes: '- 新增功能\n- 修复问题',
  })
  assert.equal(selectAndroidRelease(releases.slice(0, 1)), null)
})

test('sync falls back after a release is deleted and clears download when none remain', () => {
  const previous = { tag_name: 'v1.1.2', published_at: '2026-09-20T00:00:00Z', draft: false, prerelease: false, assets: [apk('save-1.1.2-release.apk', '1.1.2')] }
  assert.match(renderConfig(selectAndroidRelease([previous])), /LATEST_VERSION = "1\.1\.2"/)
  assert.match(renderConfig(selectAndroidRelease([])), /LATEST_DOWNLOAD_URL = ""/)
})
