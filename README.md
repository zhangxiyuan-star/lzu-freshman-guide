# 兰州大学新生入学手册网页

这是一个纯静态网页项目，可以直接部署到 GitHub Pages、Vercel、Netlify、Cloudflare Pages 或学校服务器。入口文件是 `index.html`。

## 本地预览

直接双击 `index.html` 即可预览。也可以用任意静态服务器打开当前目录。

## 发布到公网

推荐方式：

1. 创建一个 GitHub 仓库，把本目录文件上传。
2. 在仓库的 Settings -> Pages 中选择部署分支。
3. 等待 GitHub Pages 生成公开网址。

如果使用 Vercel 或 Netlify，选择本目录作为静态站点，不需要构建命令。

## 后续维护

- `app.js` 中的 `guideItems` 维护手册卡片内容。
- `app.js` 中的 `resourceLinks` 维护常用链接。
- `app.js` 中的 `verifiedDate` 维护资料入口核验日期。
- `assets/campus-hero.svg` 是首屏视觉资产，可替换为真实授权校园照片。
- 宿舍、军训、校历、转专业、快递站等容易变化的信息，发布前应按当年官方通知核验。

