# 兰大新生网页 · 工作手册

> **项目**：兰州大学新生入学手册（lzu-freshman-guide）
> **最后更新**：2026-07-21
> **目的**：记录所有经验教训，避免重复踩坑

---

## 一、项目概述

### 1.1 项目定位
这是一个由兰大学生自发制作的**纯静态新生入学手册网页**，旨在帮助新生快速了解校园生活的方方面面。

**核心原则：简单可靠比花哨功能重要。** 这是给新生看的实用工具，不是技术炫技项目。

### 1.2 技术栈
| 层级 | 技术 | 说明 |
|------|------|------|
| 结构 | HTML5 | 语义化结构 + SEO 结构化数据 |
| 样式 | CSS3 | CSS 变量驱动、Grid/Flex 布局、动画优化 |
| 交互 | 原生 JavaScript | 零框架依赖，IIFE 模块化架构 |
| 构建 | Vite（可选） | 纯静态也可直接打开，Vite 用于构建优化 |
| 部署 | GitHub Pages / Vercel | 纯静态部署，无需后端 |
| 字体 | Google Fonts | Noto Sans SC / Noto Serif SC / JetBrains Mono |

### 1.3 当前功能模块
| 模块 | 说明 | 状态 |
|------|------|------|
| 入学事项卡片 | 12 张分类卡片，搜索+筛选 | ✅ |
| 两校区展示 | 榆中+城关校区介绍+校车信息 | ✅ |
| 入学准备清单 | 7 大分类 72 项，勾选+进度+本地存储 | ✅ |
| 资源链接集 | 14 个官方入口 | ✅ |
| 目录导航 | 侧滑面板，快速跳转 | ✅ |
| 搜索功能 | 全文实时搜索（防抖 200ms） | ✅ |
| 滚动进度条 | 顶部阅读进度 | ✅ |
| 数字动画 | 关键数据递增动画 | ✅ |
| 免责声明弹窗 | 首次访问展示，localStorage 记忆 | ✅ |
| 回到顶部 | 平滑滚动回顶 | ✅ |

---

## 二、硬约束（必须遵守）

### 2.1 安全约束
1. **XSS 防护**：所有用户生成内容渲染前必须经过 `Security.escapeHtml()` 转义
2. **URL 安全**：所有链接必须经过 `Security.sanitizeUrl()` 校验，禁止 `javascript:` 协议
3. **localStorage 安全**：必须使用 `Security.safeSetStorage()` 和 `Security.safeGetStorage()`，自带 try-catch 和 JSON 解析容错
4. **安全头**：HTML meta 标签和 vercel.json 必须包含 CSP、X-Content-Type-Options、X-Frame-Options、Referrer-Policy、Permissions-Policy
5. **敏感词过滤**：用户输入内容必须经过敏感词检查（前端基础过滤 + 后端校验）

### 2.2 工程约束
1. **模块化 IIFE 结构**：JavaScript 代码必须组织成模块化 IIFE 组件（Utils、Security、TocPanel、Checklist 等）
2. **DOM 引用集中**：所有 DOM 元素引用必须集中在 `DOM` 对象中，禁止散落在各处
3. **滚动事件优化**：滚动事件必须使用 `passive: true` 和节流（100ms）
4. **搜索防抖**：搜索输入必须使用防抖（200ms），避免频繁重渲染
5. **动效降级**：所有动画必须尊重 `prefers-reduced-motion` 设置

### 2.3 内容约束
1. **非官方声明**：必须在以下位置强调「非官方学生自制」：
   - 首次进入弹窗
   - 首页 meta description
   - 页脚免责声明（带官网链接）
   - README.md
2. **不写死日期**：不要在正文里写具体年份/日期（如"2026年军训时间是X月X日"），正确做法：写通用说明 + 放当年官方通知链接
3. **不放未经证实的信息**：
   - 校园墙、互助群等学生自发运营的入口，要确认还在维护再放
   - 个人手机号、辅导员电话**绝对不要**未经允许公开
   - 所有信息标注"以官方通知为准"
4. **不公开隐私**：不公开他人隐私、联系方式和证件信息

---

## 三、代码规范

### 3.1 JavaScript 模块结构
所有功能模块采用 IIFE（立即执行函数表达式）模式，统一在 `App` 命名空间下：

```javascript
const App = (function() {
  // 1. 环境变量读取
  const ENV = ...;
  
  // 2. 数据定义
  const guideItems = [...];
  const resourceLinks = [...];
  
  // 3. DOM 引用集中管理
  const DOM = {
    cardGrid: document.querySelector("#cardGrid"),
    ...
  };
  
  // 4. 安全模块（必须第一个初始化）
  const Security = { ... };
  
  // 5. 工具函数
  const Utils = { ... };
  
  // 6. 各功能模块
  const PageLoader = { init() {...} };
  const TocPanel = { init() {...} };
  const CardRenderer = { init() {...} };
  const Checklist = { init() {...} };
  ...
  
  // 7. 统一初始化入口
  return {
    init() {
      Security.addSecurityHeaders();
      PageLoader.init();
      TocPanel.init();
      ...
      Checklist.init();
    }
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
```

### 3.2 CSS 变量规范
所有颜色、间距、字体等设计令牌统一在 `:root` 中定义：

```css
:root {
  /* 主色调 */
  --color-primary: #1E40AF;
  --color-primary-light: #3B82F6;
  --color-accent: #F59E0B;
  
  /* 文本色 */
  --text-primary: #1F2937;
  --text-secondary: #4B5563;
  --text-tertiary: #9CA3AF;
  
  /* 间距 */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  ...
}
```

**注意**：使用 CSS 变量前必须确认已在 `:root` 中定义，否则会回退到浏览器默认值。

### 3.3 文件结构速查
| 要改什么 | 去哪个文件 | 具体位置 |
|----------|-----------|----------|
| 指南卡片内容 | `app.js` | `guideItems` 数组 |
| 资源链接 | `app.js` | `resourceLinks` 数组 |
| 入学清单数据 | `app.js` | `Checklist.items` 数组 |
| 官方链接前缀 | `app.js` | `official` 对象 |
| 目录导航项 | `index.html` | `.toc-panel` 内的 `.toc-nav` |
| 数字动画目标值 | `index.html` | `.stat-num` 的 `data-count` 属性 |
| 颜色主题 | `styles.css` | `:root` 里的 CSS 变量 |
| 响应式断点 | `styles.css` | 媒体查询区块 |
| 安全响应头 | `vercel.json` | `headers` 配置 |
| 环境变量 | `.env.example` | `VITE_` 前缀变量 |

---

## 四、踩过的坑（绝对不要踩）

### 4.1 代码质量坑

#### ❌ 坑1：重复定义函数
**现象**：曾在 `app.js` 里把同一个函数写了两次，浏览器不报错（后者覆盖前者），但维护时改一处忘另一处会出 bug。
**规避**：加新功能前先扫一遍文件，确认没有重复代码块。使用模块化结构减少命名冲突。

#### ❌ 坑2：CSS 类名与 JS 渲染不匹配
**现象**：JS 渲染模板里的类名（如 `.badge`）和 CSS 中定义的类名（如 `.card-badge`）不一致，导致样式不生效。
**规避**：改完 JS 渲染模板后一定要对照 CSS 检查类名。

#### ❌ 坑3：使用未定义的 CSS 变量
**现象**：CSS 中用了 `--text-muted` 但 `:root` 里没定义，回退到浏览器默认值（通常是黑色或透明）。
**规避**：优先复用已有的变量。新增变量必须在 `:root` 中明确定义。

#### ❌ 坑4：字体未在 HTML 中加载
**现象**：CSS 用了 `Noto Sans SC` 但 HTML 只加载了 `Noto Serif SC`，导致字体回退到系统默认。
**规避**：CSS 中 `font-family` 用了什么字体，HTML 的 `<head>` 里就要加载对应字体的 Google Fonts 链接。

#### ❌ 坑5：压缩状态下硬改代码
**现象**：`styles.css` 曾经全部压在两行里，还带 BOM 头，直接修改极难维护。
**规避**：接手项目时先检查 CSS/JS 是否为压缩状态，如果是先格式化再改。

### 4.2 资源与图片坑

#### ❌ 坑6：仅凭文件名判断图片内容
**现象**：`campus-hero-photo.jpg` 听着像校园照片，实际是带大字宣传语的招生海报，当背景图非常丑。
**规避**：**用图片前必须查看内容！** 不能仅凭文件名判断。

#### ❌ 坑7：图片太大影响加载速度
**现象**：首屏图片超过 1MB，手机端加载慢。
**规避**：
- 首屏图片控制在 500KB 以内
- 实拍图用 JPG，插画用 SVG 或 WebP
- 无用图片及时清理，不要堆在 assets 里

#### ❌ 坑8：Hero 背景图移动端裁切问题
**现象**：实拍照片在桌面端效果好，但在移动端主体可能被裁切。
**规避**：测试不同屏幕尺寸下的显示效果，必要时用 `object-position` 调整或准备移动端专用图。

#### ❌ 坑9：用绝对路径导致部署路径问题
**现象**：用 `/assets/xxx.jpg` 这种绝对路径，部署到 GitHub Pages 子路径（`/lzu-freshman-guide/`）时 404。
**规避**：用 `assets/xxx.jpg` 这种相对路径，根路径和子路径部署都能用。Vite 配置中 `base: './'` 也要注意。

### 4.3 内容维护坑

#### ❌ 坑10：写死具体年份/日期
**现象**：正文写"2026年军训时间是X月X日"，下一年就过时了。
**规避**：写通用说明 + 放当年官方通知链接。

#### ❌ 坑11：放未经证实的信息
**现象**：校园墙入口已失效、辅导员电话变更等，导致误导新生。
**规避**：
- 学生自发运营的入口，要确认还在维护再放
- 个人手机号、辅导员电话绝对不要未经允许公开
- 所有信息标注"以官方通知为准"

#### ❌ 坑12：UGC 内容无审核机制
**现象**：留言墙允许用户提交文字，若无审核可能出现不当内容。
**规避**：
- 前端加基础敏感词过滤
- 若接入后端，必须有内容审核机制
- 当前纯前端本地存储风险较低，但仍需有过滤

### 4.4 性能与体验坑

#### ❌ 坑13：滚动事件不节流
**现象**：滚动事件触发太频繁，页面卡顿。
**规避**：滚动事件必须用 `Utils.throttle()` 节流（100ms），且设置 `passive: true`。

#### ❌ 坑14：搜索输入不防抖
**现象**：每输入一个字就重新渲染，性能差。
**规避**：搜索输入必须用 `Utils.debounce()` 防抖（200ms）。

#### ❌ 坑15：动画忽略无障碍设置
**现象**：不管用户是否开启"减少动效"，都播放大量动画，引起不适。
**规避**：所有动画必须先检查 `Utils.isReducedMotion()`，动效降级。

#### ❌ 坑16：localStorage 操作无容错
**现象**：隐私模式下 localStorage 写入抛异常，页面白屏。
**规避**：必须使用 `Security.safeSetStorage()` 和 `Security.safeGetStorage()`，自带 try-catch。

### 4.5 部署坑

#### ❌ 坑17：引入构建工具导致复杂度飙升
**现象**：引入 React/Vite/Webpack，部署和维护成本飙升，违背了"简单"的初衷。
**规避**：纯静态足够了。当前项目已引入 Vite 作为可选构建工具，但仍保留直接打开 HTML 的能力。

#### ❌ 坑18：部署前不本地测试
**现象**：改完代码直接 push，线上出 bug。
**规避**：
- 改完代码一定要在浏览器里打开试试
- 搜索能用吗？筛选能用吗？弹窗正常吗？
- 所有外链点一遍，确认不是 404
- 浏览器可能缓存旧文件，用 `?v=2` 强制刷新

#### ❌ 坑19：Vercel Framework Preset 选错
**现象**：选了 Next.js 之类的预设，导致纯静态项目构建失败。
**规避**：Framework Preset 选 **Vite**（因为已配置 vite.config.js）或 **Other**（纯静态无构建）。

---

## 五、工作流程规范

### 5.1 新增功能流程
1. **需求评估**：这个功能真的需要吗？会不会增加维护成本？
2. **代码检查**：先扫一遍现有代码，确认没有重复功能
3. **模块设计**：按 IIFE 模式设计新模块，集中 DOM 引用
4. **安全审查**：用户输入是否过滤？XSS 风险？localStorage 容错？
5. **动效降级**：是否尊重 `prefers-reduced-motion`？
6. **本地测试**：桌面端+移动端都测一遍
7. **部署验证**：push 后等部署完成，在线上再测一遍

### 5.2 内容更新流程
1. **信息核验**：确认信息来源可靠（官网/官方公众号/学院通知）
2. **格式规范**：不写死日期，用通用说明 + 官方链接
3. **隐私检查**：不泄露个人信息
4. **链接验证**：所有外链逐个点击确认可用
5. **更新记录**：在 README.md 的更新日志中记录

### 5.3 部署后检查清单
- [ ] 搜索功能正常
- [ ] 筛选功能正常
- [ ] 目录导航弹窗正常
- [ ] 入学准备清单勾选和进度正常
- [ ] 回到顶部按钮正常
- [ ] 所有外链可点击跳转正常
- [ ] 图片全部加载成功
- [ ] 移动端显示正常
- [ ] 页脚 GitHub 链接正常
- [ ] 免责声明弹窗首次访问正常显示

---

## 六、安全模块 API 速查

### Security.escapeHtml(str)
转义 HTML 特殊字符，防止 XSS。
```javascript
const safe = Security.escapeHtml(userInput);
```

### Security.sanitizeUrl(url)
校验 URL 协议，只允许 http/https/mailto/tel/#/相对路径。
```javascript
const safeUrl = Security.sanitizeUrl(href);
```

### Security.sanitizeWord(text, maxLen)
净化短文本（词云标签等），移除危险字符和事件属性。
```javascript
const cleanWord = Security.sanitizeWord(word, 20);
```

### Security.sanitizeMessage(text, maxLen)
净化长文本（留言等）。

### Security.isSensitive(text, extraWords)
检查是否包含敏感词。
```javascript
if (Security.isSensitive(text)) {
  // 拒绝提交
}
```

### Security.safeSetStorage(key, data)
安全写入 localStorage，自带 try-catch。
```javascript
Security.safeSetStorage('myKey', { foo: 'bar' });
```

### Security.safeGetStorage(key, defaultValue)
安全读取 localStorage，自带 JSON 解析容错。
```javascript
const data = Security.safeGetStorage('myKey', {});
```

---

## 七、工具函数 API 速查

### Utils.debounce(func, wait)
防抖：多次触发只执行最后一次。用于搜索输入。
```javascript
const debouncedFn = Utils.debounce(fn, 200);
```

### Utils.throttle(func, limit)
节流：一段时间内只执行一次。用于滚动事件。
```javascript
const throttledFn = Utils.throttle(fn, 100);
```

### Utils.isReducedMotion()
检查用户是否开启"减少动效"。
```javascript
if (Utils.isReducedMotion()) {
  // 跳过动画
}
```

### Utils.isMobile(breakpoint)
检查是否为移动端（默认 680px 断点）。

### Utils.animateNumber(el, target, duration)
数字递增动画，自动 respects reduced-motion。

---

## 八、常见问题与解决方案

### Q1：样式不生效？
1. 检查类名是否拼写正确（JS 渲染模板 ↔ CSS 定义）
2. 检查 CSS 变量是否已定义
3. 检查是否有更高优先级的选择器覆盖
4. 清除浏览器缓存（Ctrl+F5 或加 `?v=2`）

### Q2：JS 报错？
1. 打开控制台看报错信息
2. 检查 DOM 元素引用是否正确（id/class 是否匹配）
3. 检查函数是否已定义
4. 检查 localStorage 操作是否有 try-catch

### Q3：移动端显示有问题？
1. 用 Chrome DevTools 的设备模拟功能测试
2. 检查响应式断点（1024px / 768px / 480px）
3. 检查 viewport meta 标签是否正确
4. 确认没有使用固定宽度导致横向滚动

### Q4：部署后 404？
1. 检查文件路径是相对路径还是绝对路径
2. 检查 Vite 的 `base` 配置是否正确
3. 检查 GitHub Pages 的分支设置
4. 检查 Vercel 的 Framework Preset 是否选对

---

## 九、经验与教训总结

### 已验证的正确做法
✅ **模块化 IIFE 结构** — 代码组织清晰，易维护  
✅ **集中 DOM 引用** — 改 DOM 只改一处  
✅ **安全模块先行** — XSS/存储安全有保障  
✅ **防抖节流** — 性能体验好  
✅ **动效降级** — 无障碍友好  
✅ **相对路径** — 各种部署路径都能用  
✅ **纯静态 + 可选构建** — 简单又不失扩展性  

### 需要警惕的倾向
⚠️ 不要为了炫技加复杂功能  
⚠️ 不要引入重框架增加维护成本  
⚠️ 不要忽视移动端体验  
⚠️ 不要放松安全审查  
⚠️ 不要忘记本地测试就部署  

### 核心理念
> **简单可靠比花哨功能重要。**
> 这是给新生看的实用工具，不是技术炫技项目。
> 互动功能是体验增强，核心内容的准确性永远是第一位的。

---

## 十、相关文件索引

| 文件 | 说明 |
|------|------|
| [index.html](file:///f:/新生网页/index.html) | 主页面结构 |
| [styles.css](file:///f:/新生网页/styles.css) | 样式文件（CSS 变量驱动） |
| [app.js](file:///f:/新生网页/app.js) | 数据与交互逻辑（模块化 IIFE） |
| [vercel.json](file:///f:/新生网页/vercel.json) | Vercel 部署配置（含安全头） |
| [vite.config.js](file:///f:/新生网页/vite.config.js) | Vite 构建配置 |
| [package.json](file:///f:/新生网页/package.json) | 项目依赖 |
| [.env.example](file:///f:/新生网页/.env.example) | 环境变量示例 |
| [README.md](file:///f:/新生网页/README.md) | 项目说明文档 |
| [HANDOFF.md](file:///f:/新生网页/HANDOFF.md) | 项目交接文档 |
| [WORKBOOK.md](file:///f:/新生网页/WORKBOOK.md) | 本文件 · 工作手册 |

---

> **遇到问题时的排查顺序**：
> 1. 先看本手册（WORKBOOK.md）是否有对应坑点
> 2. 再看 README.md 了解项目整体
> 3. 再看 HANDOFF.md 了解历史迭代
> 4. 再看代码具体实现
> 5. 最后看 git log 了解变更历史
