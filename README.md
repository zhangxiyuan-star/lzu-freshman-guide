# 兰州大学新生入学手册

面向兰州大学新生的公开网页手册，整理宿舍、地图、食堂、通讯录、校园卡、军训、转专业、校历、通勤出行、快递站指引。

## 项目概述

本网站为纯静态网页项目，可直接部署到 GitHub Pages、Vercel、Netlify、Cloudflare Pages 或学校服务器。入口文件是 `index.html`。

## 本地预览

直接双击 `index.html` 即可预览。也可以用任意静态服务器打开当前目录：

```bash
# Python
python -m http.server 8080
# Node.js
npx serve .
```

## 部署到公网

### GitHub Pages（当前已部署）
1. 创建 GitHub 仓库，上传文件。
2. Settings → Pages 中选择部署分支（master）。
3. 等待 GitHub Pages 生成公开网址。
4. 当前网址：[zhangxiyuan-star.github.io/lzu-freshman-guide](https://zhangxiyuan-star.github.io/lzu-freshman-guide/)

### Vercel（推荐，国内访问更快）
1. 登录 [vercel.com](https://vercel.com)（可用 GitHub 账号）。
2. Import 项目 → 选择 `lzu-freshman-guide` 仓库。
3. 框架选 Other（纯静态），直接 Deploy。
4. Vercel 会自动检测每次 Git 推送并重新部署。

### Netlify / Cloudflare Pages
同样支持直接导入 Git 仓库，不需要构建命令。

## 项目结构

```
新生网页/
├── index.html              # 主页面
├── styles.css              # 样式（含响应式适配）
├── app.js                  # 数据与交互逻辑
├── README.md               # 本文档
├── .gitignore
└── assets/
    ├── campus-hero-photo.jpg   # 首屏校园实拍背景
    ├── campus-hero.svg         # 首屏 SVG 备用图
    ├── campus-map.svg          # 两校区导览图
    ├── campus-banner.jpg       # 校园风光横幅
    └── campus-scene.jpg        # 校园场景照片
```

## 数据维护

- `app.js` 中的 `guideItems` 维护手册卡片内容（宿舍、食堂、校园卡、军训、转专业、校历、通勤出行、校区概览等）。
- `app.js` 中的 `resourceLinks` 维护常用链接。
- `app.js` 中的 `verifiedDate` 维护资料入口核验日期。
- `assets/campus-hero-photo.jpg` 是首屏实拍背景图片，可替换为更新的授权校园照片。
- 宿舍分配、军训安排、快递站点、校历和转专业政策等容易变化的信息，发布前应按当年官方通知核验。

## 免责声明

**本网站为非官方学生自制项目，所有信息仅供参考，最终以兰州大学官方通知为准。**

> - 兰州大学官网：[www.lzu.edu.cn](https://www.lzu.edu.cn/)
> - 本科招生网：[zsb.lzu.edu.cn](https://zsb.lzu.edu.cn/)
> - 教务处：[jwc.lzu.edu.cn](https://jwc.lzu.edu.cn/)
> - 学生工作部：[xgb.lzu.edu.cn](https://xgb.lzu.edu.cn/)
> - 后勤保障部：[hq.lzu.edu.cn](https://hq.lzu.edu.cn/)

## 后续维护清单

- [ ] 每学期开学前全面检查内容（军训时间、校车时刻、住宿安排等）
- [ ] 图片使用获得授权的校园实拍照片替换
- [ ] 建议购买独立域名（如 lzufreshman.com）增强信任感
- [ ] 添加用户反馈入口（GitHub Issues）
- [ ] 根据新生反馈补充高频问题

## 技术栈

HTML5 + CSS3 + 原生 JavaScript，无框架依赖。