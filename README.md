# 飞飞记账官网

飞飞记账官网与帮助中心，部署目标为 `save.xjjnb.com`。

## 本地开发

```bash
npm install
npm run build
```

用 VS Code 打开整个 `save_website` 文件夹，然后点击状态栏的「Go Live」。项目设置会让 Live Server 以 `site/` 为网站根目录：`/` 是官网首页，`/help/` 是帮助中心。修改帮助文档后重新运行 `npm run build`。

官网静态文件位于 `site/`，帮助文档源码位于 `docs/`。头像生成与版本检查是根目录 `api/` 下的 Vercel Functions。发布新的 Android App 版本时，需要更新 `api/_config.mjs` 中的 `LATEST_VERSION`。

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
