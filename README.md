# 飞飞记账官网

飞飞记账官网与帮助中心，部署目标为 `save.xjjnb.com`。

## 本地开发

```bash
npm install
npm run build
```

用 VS Code 打开整个 `save_website` 文件夹，然后点击状态栏的「Go Live」。项目设置会让 Live Server 以 `site/` 为网站根目录：`/` 是官网首页，`/help/` 是帮助中心。修改帮助文档后重新运行 `npm run build`。

官网静态文件位于 `site/`，帮助文档源码位于 `docs/`。头像生成与版本检查是根目录 `api/` 下的 Vercel Functions。`api/_config.mjs` 由 GitHub Action 根据本仓库已发布的稳定版 Release 自动生成：选取最新的含 APK 的 Release，把标签版本号、发布时间、GitHub 官方 APK 直链分别写入 `version`、`publishedAt`、`downloadUrl`。`releaseNotes` 只提取 Release 正文开头连续的更新要点，去掉每行的 Markdown 列表符号，以 `\n` 连接；后面的下载说明和 HTML 不会进入接口。不要手动维护生成文件。

Action 监听 Release 的发布、编辑、取消发布和删除；每天也会核对一次，支持在 Actions 页面手动运行。删除最新 Release 后会回退到上一个符合条件的 Release；全部删除后 API 不再报告新版本，APK 下载链接会消失。工作流需要仓库允许 `GITHUB_TOKEN` 写入内容，且 `main` 分支保护允许此自动提交。

`downloadUrl` 始终保存 GitHub 官方地址，不拼接第三方代理。中国大陆下载可另配自有对象存储/CDN 镜像，再作为独立备用链接提供；上线镜像前应校验 APK 的 SHA-256，避免代理失效或文件被替换时影响官方地址。

首页从 `/api/check-version?version=1.0.0` 读取 Android 版本、发布日期和 APK 下载地址；API 不可用时显示 `1.0.0` 和 `2026-01-01`，且不显示 APK 下载链接。Google Play 和 App Store 按钮始终指向各自商店。

```bash
npm run dev
```

上面这条命令仅启动帮助文档的 VitePress 开发服务器。

本地测试头像和版本检查 API：

```bash
npm run api:dev
```

- `http://127.0.0.1:3000/api/avatar?seed=test&style=micah`
- `http://127.0.0.1:3000/api/check-version?version=1.1.1`

## 构建

```bash
npm run build
```

构建后可部署文件位于 `dist/`，Vercel 只发布这个目录。

## Google 搜索收录

构建会在 `dist/` 生成包含官网、协议和帮助文档页面的 `sitemap.xml`，并复制 `robots.txt`。部署后先确认 `https://save.xjjnb.com/robots.txt` 和 `https://save.xjjnb.com/sitemap.xml` 返回 200。

在 Google Search Console 验证 `save.xjjnb.com`（或验证覆盖子域名的 `xjjnb.com` 域名资源），提交 `https://save.xjjnb.com/sitemap.xml`，再用「网址检查」检查官网首页并请求编入索引。提交站点地图或请求抓取都不保证立即收录；以 Search Console 中的实际状态和排除原因为准。
