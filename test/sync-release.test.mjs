import assert from 'node:assert/strict'
import test from 'node:test'
import { extractReleaseNotes, renderConfig, selectAndroidRelease } from '../scripts/sync-release.mjs'

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
    releaseNotes: '新增功能\n修复问题',
  })
  assert.equal(selectAndroidRelease(releases.slice(0, 1)), null)
})

test('release notes include only the opening updates without Markdown bullets', () => {
  const body = `- 新增账户逐笔结余
- 优化 AI 智能记账与多笔账单识别
- 优化提醒、账单编辑和界面体验
- 修复生物识别等已知问题

<div align=center>
</div>

**Download based on your OS:**

<table><tr><td>Android</td></tr></table>`
  assert.equal(extractReleaseNotes(body),
    '新增账户逐笔结余\n优化 AI 智能记账与多笔账单识别\n优化提醒、账单编辑和界面体验\n修复生物识别等已知问题')
  assert.equal(extractReleaseNotes('## 更新内容\n\n* 新增功能\n* 修复问题\n\n## 下载'), '新增功能\n修复问题')
  assert.equal(extractReleaseNotes('<div>Only downloads</div>'), '')
})

test('sync falls back after a release is deleted and clears download when none remain', () => {
  const previous = { tag_name: 'v1.1.2', published_at: '2026-09-20T00:00:00Z', draft: false, prerelease: false, assets: [apk('save-1.1.2-release.apk', '1.1.2')] }
  assert.match(renderConfig(selectAndroidRelease([previous])), /LATEST_VERSION = "1\.1\.2"/)
  assert.match(renderConfig(selectAndroidRelease([])), /LATEST_DOWNLOAD_URL = ""/)
})
