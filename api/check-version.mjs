// 1. 改为 import 语法
// 注意：导入本地文件最好加上 .js 后缀（取决于 _config 是怎么写的）
import semver from 'semver';
import { LATEST_VERSION } from './_config.mjs';

// 2. 改为 export default
export default (req, res) => {

  const currentVersion = req.query.version || (req.body && req.body.version);
  if (!currentVersion) {
    return res.status(400).json({ 
      error: "Missing version parameter" 
    });
  }

  try {
    const hasUpdate = semver.gt(LATEST_VERSION, currentVersion);

    res.status(200).json({
      hasUpdate: hasUpdate,
      message: hasUpdate ? "发现新版本，请及时更新" : "当前已是最新版本"
    });
  } catch (error) { 
    res.status(500).json({ error: "Invalid version format" });
  }
};