#!/bin/bash

# 提示用户输入新版本号
read -p "请输入新的版本号: " NEW_VERSION

# 要修改的文件（和脚本在同一目录）
FILE="_config.js"

# 检查文件是否存在
if [ ! -f "$FILE" ]; then
  echo "❌ 文件 $FILE 不存在！"
  exit 1
fi

# 使用 sed 替换 LATEST_VERSION 的值
sed -i '' "s/export const LATEST_VERSION = \".*\";/export const LATEST_VERSION = \"$NEW_VERSION\";/" "$FILE"

# 添加到 git 并提交
git add "$FILE"
git commit -m "chore: update LATEST_VERSION to $NEW_VERSION"

echo "✅ 已更新 $FILE，LATEST_VERSION = $NEW_VERSION 并提交 Git"