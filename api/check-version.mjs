import semver from 'semver'
import {
  LATEST_DOWNLOAD_URL,
  LATEST_PUBLISHED_AT,
  LATEST_RELEASE_NOTES,
  LATEST_VERSION,
} from './_config.mjs'

/** Compare the installed app version with the latest published Android version. */
export default function handler(req, res) {
  const currentVersion = req.query?.version ?? req.body?.version
  if (!currentVersion) {
    return res.status(400).json({ error: 'Missing version parameter' })
  }

  try {
    const hasUpdate = semver.gt(LATEST_VERSION, currentVersion)
    return res.status(200).json({
      hasUpdate,
      message: hasUpdate ? '发现新版本，请及时更新' : '当前已是最新版本',
      version: LATEST_VERSION,
      publishedAt: LATEST_PUBLISHED_AT,
      downloadUrl: LATEST_DOWNLOAD_URL,
      releaseNotes: LATEST_RELEASE_NOTES,
    })
  } catch {
    return res.status(400).json({ error: 'Invalid version format' })
  }
}
