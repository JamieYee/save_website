# 飞飞记账官网

飞飞记账官网与帮助中心，部署目标为 `save.xjjnb.com`。

## 本地开发

```bash
npm install
npm run dev
```

官网静态资源位于 `public/`，帮助文档位于 `docs/`。VitePress 构建后会将帮助中心输出到 `public/help/`。

## 构建

```bash
npm run build
```

Vercel 的输出目录为 `public/`。
