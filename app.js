// ============================================
// LZU Freshman Guide — Warm Playful v3.0
// 兰州大学新生入学手册 · 温暖活力风
// ============================================

const verifiedDate = "2026-07-16";

const official = {
  main: "https://www.lzu.edu.cn/",
  service: "https://www.lzu.edu.cn/zjld/fwrk.htm",
  map: "https://www.lzu.edu.cn/zjld/xydt.htm",
  contact: "https://www.lzu.edu.cn/zjld/lxwm.htm",
  my: "https://my.lzu.edu.cn/",
  jwc: "https://jwc.lzu.edu.cn/",
  xgb: "https://xgb.lzu.edu.cn/",
  hq: "https://hq.lzu.edu.cn/",
  lib: "https://lib.lzu.edu.cn/",
  zsb: "https://zsb.lzu.edu.cn/"
};

const guideItems = [
  {
    id: "dorm",
    title: "宿舍方面",
    category: "life",
    tag: "生活",
    summary: "入住前先确认校区、楼栋、床位和报到时间；床品尺寸、门禁、空调/暖气、洗浴和用电规则以当年住宿通知为准。",
    points: ["准备证件、录取通知书和少量现金备用", "贵重物品随身带，行李寄送写清校区与楼栋", "到校后先核对钥匙、床位和宿舍设施"],
    links: [{ label: "后勤服务", href: official.hq }, { label: "服务入口", href: official.service }]
  },
  {
    id: "canteen",
    title: "食堂介绍",
    category: "life",
    tag: "生活",
    summary: "适合按校区整理食堂位置、营业时间、特色窗口、清真餐、夜宵和错峰建议。价格和开放窗口需要按学期更新。",
    points: ["新生初期建议先收藏离宿舍最近的食堂", "高峰期错开下课后的 20 分钟体验会好很多", "过敏、清真或特殊饮食需求建议提前确认窗口"],
    links: [{ label: "后勤服务", href: official.hq }]
  },
  {
    id: "map",
    title: "校园地图",
    category: "campus",
    tag: "校园",
    summary: "地图部分建议分成榆中校区、城关校区，并标出学院楼、宿舍区、食堂、医院、体育场、快递站和公交点。",
    points: ["报到当天优先看迎新点位", "跨校区上课要提前规划通勤时间", "手机端优先使用官方校园地图或可信导航链接"],
    links: [{ label: "官方校园地图", href: official.map }]
  },
  {
    id: "contacts",
    title: "校园通讯录",
    category: "service",
    tag: "服务",
    summary: "通讯录适合放学院办公室、辅导员入口、校园报警、校医院、网络服务、后勤报修等公开电话或官方页面。",
    points: ["个人手机号不要未经许可公开", "电话、办公地点和办公时间要标更新时间", "紧急事项以学校官方渠道和现场老师为准"],
    links: [{ label: "联系我们", href: official.contact }, { label: "服务入口", href: official.service }]
  },
  {
    id: "card",
    title: "校园卡",
    category: "service",
    tag: "服务",
    summary: "校园卡通常关联食堂消费、门禁、图书馆、身份核验等场景。补办、充值、挂失和电子校园卡以学校当年说明为准。",
    points: ["到校后尽快测试食堂、门禁和图书馆使用", "丢失后第一时间挂失", "线上充值、挂失和电子卡入口优先从学校统一服务入口进入"],
    links: [{ label: "个人工作台", href: official.my }, { label: "服务入口", href: official.service }]
  },
  {
    id: "military",
    title: "军训介绍",
    category: "campus",
    tag: "校园",
    summary: "军训时间、地点、服装领取、免训/缓训材料和学院集合安排变化较大，网页中应保留当年通知入口。",
    points: ["提前准备防晒、水杯、舒适鞋垫和常用药", "身体情况需要如实和辅导员沟通", "集合时间地点以学院通知为准"],
    links: [{ label: "学生工作", href: official.xgb }]
  },
  {
    id: "major",
    title: "转专业",
    category: "study",
    tag: "学业",
    summary: "转专业政策需要看教务处和学院当年文件，重点关注报名资格、成绩要求、考核方式、名额和时间节点。",
    points: ["不要只看往年经验帖", "尽早了解目标专业培养方案", "保留报名材料和通知截图"],
    links: [{ label: "教务处", href: official.jwc }]
  },
  {
    id: "calendar",
    title: "校历",
    category: "study",
    tag: "学业",
    summary: "校历适合放开学、注册、补退选、考试周、寒暑假、节假日调课等入口。每学年发布后及时替换。",
    points: ["考试周和假期安排以教务处校历为准", "节假日调课要看学院和任课教师通知", "新生入学教育可能单独安排"],
    links: [{ label: "教务处", href: official.jwc }, { label: "服务入口", href: official.service }]
  },
  {
    id: "wall",
    title: "校园墙链接",
    category: "campus",
    tag: "校园",
    summary: "校园墙、表白墙、互助墙等通常是学生自发运营，适合放入口说明、投稿提醒和隐私边界。",
    points: ["发布前确认运营者和入口是否可靠", "不公开他人隐私、联系方式和证件信息", "失物招领建议同步走官方或学院渠道"],
    links: []
  },
  {
    id: "express",
    title: "快递站指引",
    category: "life",
    tag: "生活",
    summary: "快递站点、营业时间和取件方式会随校区与学期调整。建议按校区整理地址、导航、常见快递和大件行李处理。",
    points: ["寄行李前确认收件地址格式", "到校高峰期取件排队较久", "大件、贵重件和生鲜件单独备注"],
    links: [{ label: "后勤服务", href: official.hq }, { label: "官方校园地图", href: official.map }]  },
  {
    id: "shuttle",
    title: "通勤出行",
    category: "life",
    tag: "生活",
    summary: "兰州大学有榆中校区和城关校区两个校区，之间每天有校车通勤。新生需要提前了解校区位置、通勤时间和校车安排。",
    points: ["榆中校区在榆中县夏官营镇，距市区约 50 公里，是本科生的主要学习生活区", "城关校区在兰州市城关区，紧邻市区，以研究生和部分学院为主", "校车每天往返，约 1 小时车程，刷校园卡乘车", "高峰期（周五下午、周日傍晚）校车座位紧张，建议提前排队", "跨校区上课的同学预留充足通勤时间，注意末班车时刻"],
    links: [{ label: "后勤服务", href: official.hq }, { label: "官方校园地图", href: official.map }]
  },
  {
    id: "overview",
    title: "两大校区概览",
    category: "campus",
    tag: "校园",
    summary: "快速了解榆中校区和城关校区的区别，帮助新生快速定位自己所属学院和入住校区。",
    points: ["榆中校区：本科生主校区。有凌云楼、天山堂等主要教学楼，昆仑堂图书馆、芝兰苑/玉树苑食堂", "城关校区：研究生和部分学院所在地。有观云楼、齐云楼等教学楼，积石堂图书馆、丹桂苑食堂", "各学院具体分布可以查学院官网或报到通知", "榆中校区地址：甘肃省兰州市榆中县夏官营镇；城关校区地址：甘肃省兰州市城关区天水南路 222 号"],
    links: [{ label: "兰州大学官网", href: official.main }, { label: "官方校园地图", href: official.map }]
  }
];

const resourceLinks = [
  ["兰州大学官网", "学校公开信息与权威入口", official.main],
  ["官方校园地图", "AI 地图、城关校区与榆中校区导视图", official.map],
  ["兰大官方电子地图", "可视化校园地图（支持搜索建筑和导航）", "https://ksh.lzu.edu.cn/campus-map-web/index"],
  ["服务入口", "官网集中服务入口，适合核验办事链接", official.service],
  ["联系我们", "学校公开联系信息入口", official.contact],
  ["教务处", "校历、选课、考试、转专业等学业事项", official.jwc],
  ["学生工作", "军训、资助、学生事务等入口", official.xgb],
  ["后勤服务", "宿舍、食堂、维修、生活服务相关入口", official.hq],
  ["个人工作台", "统一身份认证后使用的校内服务入口", official.my],
  ["图书馆", "入馆、借阅、数据库和学习空间", official.lib],
  ["本科招生", "录取、新生相关招生信息入口", official.zsb],
  ["榆中校区地址", "甘肃省兰州市榆中县夏官营镇 兰州大学榆中校区", official.map],
  ["城关校区地址", "甘肃省兰州市城关区天水南路 222 号 兰州大学城关校区", official.map]
];

const cardGrid = document.querySelector("#cardGrid");
const linkGrid = document.querySelector("#linkGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector(".search-box");
const filterCount = document.querySelector("#filterCount");
let activeFilter = "all";

// ============================================
// 目录弹窗导航
// ============================================
(function initTocPanel() {
  const brandBtn = document.getElementById('brandBtn');
  const tocPanel = document.getElementById('tocPanel');
  const tocOverlay = document.getElementById('tocOverlay');
  const tocClose = document.getElementById('tocClose');
  const tocItems = document.querySelectorAll('.toc-item');

  if (!brandBtn || !tocPanel || !tocOverlay) return;

  function openToc() {
    tocPanel.classList.add('is-open');
    tocOverlay.classList.add('is-open');
    tocPanel.setAttribute('aria-hidden', 'false');
    brandBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeToc() {
    tocPanel.classList.remove('is-open');
    tocOverlay.classList.remove('is-open');
    tocPanel.setAttribute('aria-hidden', 'true');
    brandBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  brandBtn.addEventListener('click', () => {
    if (tocPanel.classList.contains('is-open')) {
      closeToc();
    } else {
      openToc();
    }
  });

  if (tocClose) {
    tocClose.addEventListener('click', closeToc);
  }

  tocOverlay.addEventListener('click', closeToc);

  tocItems.forEach(item => {
    item.addEventListener('click', () => {
      closeToc();
    });
  });

  // ESC 关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tocPanel.classList.contains('is-open')) {
      closeToc();
    }
  });
})();

// ============================================
// DISCLAIMER OVERLAY
// ============================================
(function initDisclaimer() {
  const overlay = document.getElementById('disclaimerOverlay');
  const acceptBtn = document.getElementById('disclaimerAccept');
  if (!overlay || !acceptBtn) return;
  if (localStorage.getItem('lzu_guide_disclaimer_accepted')) {
    overlay.style.display = 'none';
    return;
  }
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('lzu_guide_disclaimer_accepted', '1');
    overlay.style.animation = 'disclaimerOut 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    setTimeout(() => { overlay.style.display = 'none'; }, 300);
  });
})();

// ============================================
// SCANLINE EFFECT
// ============================================
(function initScanline() {
  const scanline = document.getElementById('scanline');
  if (!scanline) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    scanline.style.display = 'none';
    return;
  }
  if (window.matchMedia('(max-width: 680px)').matches) {
    scanline.style.display = 'none';
    return;
  }

  // 扫描线默认有 CSS 动画（8秒循环），页面加载后显示一段时间再隐藏
  window.addEventListener('load', () => {
    scanline.style.opacity = '0.3';
    setTimeout(() => {
      scanline.style.transition = 'opacity 500ms ease';
      scanline.style.opacity = '0';
      setTimeout(() => {
        scanline.style.display = 'none';
      }, 500);
    }, 2000);
  });
})();

// ============================================
// SCROLL PROGRESS BAR
// ============================================
(function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    progressBar.style.display = 'none';
    return;
  }

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();

// ============================================
// 数字跳变动画
// ============================================
function animateNumber(el, target, duration = 1200) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = String(target).padStart(2, '0');
    return;
  }

  const startTime = performance.now();
  const startVal = 0;

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(startVal + (target - startVal) * eased);

    el.textContent = String(current).padStart(2, '0');

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// ============================================
// Hero 图片加载动画
// ============================================
(function initHeroImage() {
  const hero = document.querySelector('.hero');
  const heroImg = document.querySelector('.hero-image');
  if (!hero || !heroImg) return;

  if (heroImg.complete) {
    hero.classList.add('loaded');
  } else {
    heroImg.addEventListener('load', () => {
      hero.classList.add('loaded');
    });
  }
})();

// ============================================
// 视差滚动效果
// ============================================
(function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(max-width: 980px)').matches) return;

  const heroBg = document.querySelector('.hero-bg');
  const decoNumber = document.querySelector('.deco-number');

  function handleScroll() {
    const scrollY = window.scrollY;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;

    if (scrollY < heroHeight) {
      if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      if (decoNumber) {
        decoNumber.style.transform = `translateY(${scrollY * 0.15}px)`;
        decoNumber.style.opacity = Math.max(0, 0.5 - scrollY * 0.001);
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
})();

// ============================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================
(function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.guide-card, .resource-link, .route-list article, .section-heading, .stat-num').forEach(el => {
      el.classList.add('is-visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const isMobile = window.matchMedia('(max-width: 680px)').matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = isMobile ? 0 : calculateStaggerDelay(el);

        setTimeout(() => {
          el.classList.add('is-visible');

          // 数字跳变
          if (el.classList.contains('stat-num') && el.dataset.count) {
            animateNumber(el, parseInt(el.dataset.count), 1500);
          }
        }, delay);

        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  function calculateStaggerDelay(el) {
    const parent = el.parentElement;
    if (!parent) return 0;
    const siblings = Array.from(parent.children);
    const index = siblings.indexOf(el);
    const columnsMatch = getComputedStyle(parent).gridTemplateColumns;
    if (!columnsMatch || columnsMatch === 'none') return index * 80;
    const columns = columnsMatch.split(' ').length;
    const colIndex = index % columns;
    return colIndex * 80 + Math.floor(index / columns) * 50;
  }

  // 观察 section headings
  document.querySelectorAll('.section-heading').forEach(el => {
    observer.observe(el);
  });

  // 观察数字
  document.querySelectorAll('.stat-num').forEach(el => {
    observer.observe(el);
  });

  function observeDynamicElements() {
    document.querySelectorAll('.guide-card:not(.is-visible), .resource-link:not(.is-visible), .route-list article:not(.is-visible)').forEach(el => {
      observer.observe(el);
    });
  }

  observeDynamicElements();
  window.__refreshScrollReveal = observeDynamicElements;
})();

// ============================================
// CARD RENDERING
// ============================================
function cardMatches(item, keyword) {
  const inFilter = activeFilter === "all" || item.category === activeFilter;
  const haystack = [item.title, item.tag, item.summary, ...item.points].join(" ").toLowerCase();
  return inFilter && (!keyword || haystack.includes(keyword));
}

function renderCards() {
  const keyword = searchInput.value.trim().toLowerCase();
  const visibleItems = guideItems.filter((item) => cardMatches(item, keyword));
  const total = guideItems.length;

  cardGrid.innerHTML = visibleItems.map((item, idx) => `
    <article class="guide-card" data-id="${item.id}" style="animation-delay: ${idx * 30}ms">
      <div class="card-header">
        <h3>${item.title}</h3>
        <span class="card-badge">${item.tag}</span>
      </div>
      <p>${item.summary}</p>
      <ul>
        ${item.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
      <div class="card-footer">
        ${item.links.length ? item.links.map((link) => `<a class="card-link" href="${link.href}" target="_blank" rel="noopener noreferrer"><span>${link.label}</span><svg class="link-external-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V10M10 2H14M14 2V6M14 2L7 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`).join("") : "<span class=\"card-link card-link-empty\">等待补充入口</span>"}
      </div>
    </article>
  `).join("");

  emptyState.hidden = visibleItems.length > 0;

  // 更新筛选计数
  if (filterCount) {
    filterCount.textContent = `${visibleItems.length} / ${total}`;
  }

  if (window.__refreshScrollReveal) {
    window.__refreshScrollReveal();
  }
}

// ============================================
// LINK RENDERING
// ============================================
function renderLinks() {
  linkGrid.innerHTML = resourceLinks.map(([title, description, href]) => `
    <a class="resource-link" href="${href}" target="_blank" rel="noopener noreferrer">
      <strong>${title}</strong>
      <span>${description}</span>
    </a>
  `).join("");

  if (window.__refreshScrollReveal) {
    setTimeout(window.__refreshScrollReveal, 50);
  }
}

// ============================================
// FILTER HANDLING
// ============================================
function setFilter(nextFilter) {
  activeFilter = nextFilter;
  document.querySelectorAll(".filter").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.filter === nextFilter);
  });
  renderCards();
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

// ============================================
// DATA-FOCUS JUMP
// ============================================
document.querySelectorAll("[data-focus]").forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.dataset.focus;
    searchInput.value = "";
    setFilter("all");

    window.setTimeout(() => {
      const card = document.querySelector(`[data-id="${target}"]`);
      if (!card) return;
      card.scrollIntoView({ block: "center", behavior: "smooth" });
      card.animate(
        [
          { boxShadow: "0 2px 8px rgba(45, 42, 50, 0.06)", borderColor: "#F0E6D8" },
          { boxShadow: "0 0 0 4px rgba(255, 107, 53, 0.2), 0 8px 32px rgba(255, 107, 53, 0.15)", borderColor: "#FF6B35" },
          { boxShadow: "0 2px 8px rgba(45, 42, 50, 0.06)", borderColor: "#F0E6D8" }
        ],
        { duration: 1200, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }
      );
    }, 120);
  });
});

// ============================================
// SEARCH INTERACTION
// ============================================
searchInput.addEventListener("input", renderCards);
if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // 聚焦到结果区域
    const cardGrid = document.querySelector("#cardGrid");
    if (cardGrid && searchInput.value.trim()) {
      cardGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// ============================================
// INITIAL RENDER
// ============================================
renderCards();
renderLinks();

// ============================================
// ENTRANCE ANIMATION SEQUENCE
// ============================================
(function initEntranceSequence() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(max-width: 680px)').matches) return;

  const header = document.querySelector('.site-header');
  const heroContent = document.querySelector('.hero-content');
  const quickGridSection = document.querySelector('.quick-grid-section');

  window.addEventListener('load', () => {
    // Hero content
    if (heroContent) {
      heroContent.style.opacity = '0';
      heroContent.style.transform = 'translateY(24px)';
      setTimeout(() => {
        heroContent.style.transition = 'opacity 600ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 300);
    }

    // Quick grid items stagger
    if (quickGridSection) {
      const items = quickGridSection.querySelectorAll('.quick-item');
      items.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(12px)';
        setTimeout(() => {
          item.style.transition = 'opacity 400ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1)';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 600 + i * 80);
      });
    }
  });
})();

// ============================================
// 回到顶部按钮
// ============================================
(function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ============================================
// 导航栏滚动状态
// ============================================
(function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.style.boxShadow = '0 4px 20px rgba(45, 42, 50, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  }, { passive: true });
})();

// ============================================
// LZU 词云 / 留言墙
// ============================================
(function initWordCloud() {
  const wordCloud = document.getElementById('wordCloud');
  const wordCloudCount = document.getElementById('wordCloudCount');
  const wordCloudReset = document.getElementById('wordCloudReset');
  const messageForm = document.getElementById('messageForm');
  if (!wordCloud) return;

  const STORAGE_KEY = 'lzu_freshman_guide_wordcloud';
  const MAX_WORDS = 30;
  const MAX_USER_WORDS = 18; // 用户最多提交的数量

  // 敏感词简单过滤（仅前端基础过滤，上线后如有后端需加强）
  const SENSITIVE_WORDS = ['傻逼', '操你', '去死', '垃圾', '废物', '脑残'];

  function containsSensitive(text) {
    return SENSITIVE_WORDS.some(word => text.includes(word));
  }

  // 颜色池 - 深蓝学院风
  const COLORS = [
    'color-blue-dark',
    'color-blue',
    'color-blue-light',
    'color-gold',
    'color-gold-light',
    'color-secondary',
    'color-tertiary',
  ];

  // 旋转角度池
  const ROTATIONS = ['rot-l2', 'rot-l1', 'rot-0', 'rot-0', 'rot-0', 'rot-r1', 'rot-r2'];

  // 浮动动画池
  const FLOATS = ['float-1', 'float-2', 'float-3'];

  // 初始留言词库 - 更精准的LZU形状排列
  const initialWords = [
    // L 字母区域（左侧竖线 + 底部横线）
    { text: '自强不息', size: 'md', x: 6, y: 12, color: 'color-blue-dark', rot: 'rot-l1' },
    { text: '独树一帜', size: 'md', x: 6, y: 35, color: 'color-gold', rot: 'rot-l1' },
    { text: '积石堂', size: 'sm', x: 10, y: 58, color: 'color-blue', rot: 'rot-l2' },
    { text: '天山堂', size: 'sm', x: 8, y: 72, color: 'color-blue-light', rot: 'rot-l1' },
    { text: '青春', size: 'xs', x: 14, y: 4, color: 'color-gold-light', rot: 'rot-0' },
    { text: '梦想', size: 'xs', x: 2, y: 25, color: 'color-secondary', rot: 'rot-l2' },
    { text: '陪伴', size: 'xs', x: 18, y: 48, color: 'color-tertiary', rot: 'rot-l1' },
    { text: '遇见', size: 'xs', x: 20, y: 66, color: 'color-blue', rot: 'rot-0' },

    // Z 字母区域（中间顶部斜线 + 横线 + 底部斜线）
    { text: '兰州大学', size: 'lg', x: 34, y: 8, color: 'color-blue-dark', rot: 'rot-0' },
    { text: 'LZU', size: 'lg', x: 38, y: 42, color: 'color-gold', rot: 'rot-0' },
    { text: '昆仑堂', size: 'md', x: 32, y: 68, color: 'color-blue', rot: 'rot-r1' },
    { text: '新生加油', size: 'sm', x: 26, y: 28, color: 'color-gold-light', rot: 'rot-l1' },
    { text: '未来可期', size: 'sm', x: 48, y: 62, color: 'color-blue-dark', rot: 'rot-r1' },
    { text: '成长', size: 'xs', x: 52, y: 26, color: 'color-secondary', rot: 'rot-r2' },
    { text: '启程', size: 'xs', x: 30, y: 80, color: 'color-gold', rot: 'rot-l2' },

    // U 字母区域（右侧两条竖线 + 底部弧线）
    { text: '榆中校区', size: 'md', x: 68, y: 14, color: 'color-blue', rot: 'rot-r1' },
    { text: '城关校区', size: 'md', x: 72, y: 40, color: 'color-blue-dark', rot: 'rot-r1' },
    { text: '夏官营', size: 'sm', x: 76, y: 62, color: 'color-blue-light', rot: 'rot-r2' },
    { text: '丹桂苑', size: 'sm', x: 64, y: 75, color: 'color-gold', rot: 'rot-r1' },
    { text: '芝兰苑', size: 'xs', x: 82, y: 30, color: 'color-secondary', rot: 'rot-r2' },
    { text: '玉树苑', size: 'xs', x: 60, y: 50, color: 'color-tertiary', rot: 'rot-0' },
    { text: '凌云楼', size: 'xs', x: 80, y: 78, color: 'color-blue', rot: 'rot-r1' },
  ];

  // 从 localStorage 加载用户提交的词
  function loadUserWords() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load word cloud data:', e);
    }
    return [];
  }

  // 保存用户提交的词到 localStorage
  function saveUserWords(userWords) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userWords));
    } catch (e) {
      console.warn('Failed to save word cloud data:', e);
    }
  }

  // 随机选择数组元素
  function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // 生成随机位置（在词云区域内，避开边缘）
  function randomPosition() {
    return {
      x: 6 + Math.random() * 82,
      y: 6 + Math.random() * 80
    };
  }

  // 合并初始词和用户词
  const userWords = loadUserWords();
  let words = [...userWords, ...initialWords].slice(0, MAX_WORDS);

  function renderWordCloud(isNewSubmission = false) {
    wordCloud.innerHTML = '';

    // 检测是否开启减少动画
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    words.forEach((word, index) => {
      const span = document.createElement('span');

      // 基础类
      const classes = ['cloud-word', `size-${word.size}`];

      // 颜色
      classes.push(word.color || randomPick(COLORS));

      // 旋转角度
      const rot = word.rot || randomPick(ROTATIONS);
      classes.push(rot);

      // 浮动动画（仅初始加载时，新提交的用飞入动画）
      if (!reduceMotion && !isNewSubmission) {
        classes.push(randomPick(FLOATS));
      }

      // 新提交的词用飞入动画
      if (isNewSubmission && index === 0) {
        classes.push('is-new');
      }

      span.className = classes.join(' ');
      span.textContent = word.text;
      span.style.left = word.x + '%';
      span.style.top = word.y + '%';
      span.style.setProperty('--delay', (index * 60) + 'ms');

      // 完整留言 tooltip
      if (word.fullText) {
        span.setAttribute('data-full', word.fullText);
      } else {
        span.setAttribute('data-full', word.text);
      }

      wordCloud.appendChild(span);
    });

    if (wordCloudCount) {
      wordCloudCount.textContent = words.length + ' 条祝福';
    }
  }

  renderWordCloud();

  // 重置按钮 - 清空我的留言
  if (wordCloudReset) {
    wordCloudReset.addEventListener('click', () => {
      if (userWords.length === 0) {
        // 已经没有用户留言了，给个提示
        wordCloudReset.style.color = 'var(--gold)';
        setTimeout(() => {
          wordCloudReset.style.color = '';
        }, 1000);
        return;
      }

      if (confirm('确定要清空你提交的所有留言吗？此操作不可撤销。')) {
        userWords.length = 0;
        saveUserWords([]);
        words = [...initialWords].slice(0, MAX_WORDS);
        renderWordCloud();
      }
    });
  }

  // 留言提交
  if (messageForm) {
    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('messageName');
      const contentInput = document.getElementById('messageContent');
      const content = contentInput.value.trim();
      const name = nameInput.value.trim();

      if (!content) return;

      // 内容长度校验
      if (content.length > 100) {
        alert('留言不能超过 100 个字哦~');
        return;
      }

      // 敏感词过滤
      if (containsSensitive(content) || (name && containsSensitive(name))) {
        alert('留言包含不适当的内容，请修改后再提交~');
        return;
      }

      // 检查用户留言数量上限
      if (userWords.length >= MAX_USER_WORDS) {
        alert('你已经提交了 ' + MAX_USER_WORDS + ' 条祝福啦，先让其他同学也留一些吧~');
        return;
      }

      // 提取显示关键词
      let displayText = content.length > 8 ? content.substring(0, 6) + '...' : content;
      if (name) {
        displayText = name + '：' + (content.length > 4 ? content.substring(0, 4) + '...' : content);
      }

      // 完整留言（用于 tooltip）
      const fullText = name ? `${name}：${content}` : content;

      // 随机属性
      const sizes = ['sm', 'sm', 'sm', 'xs', 'xs', 'md'];
      const size = randomPick(sizes);
      const pos = randomPosition();
      const color = randomPick(COLORS);
      const rot = randomPick(ROTATIONS);

      const newWord = {
        text: displayText,
        fullText: fullText,
        size,
        x: pos.x,
        y: pos.y,
        color,
        rot,
        isUser: true
      };

      // 添加到用户词列表并保存
      const newUserWords = [newWord, ...userWords].slice(0, MAX_USER_WORDS);
      saveUserWords(newUserWords);

      // 同步 userWords 数组
      userWords.length = 0;
      userWords.push(...newUserWords);

      // 更新显示（新提交的词放在最前面）
      words = [newWord, ...words.filter(w => !w.isUser), ...words.filter(w => w.isUser && w !== newWord)].slice(0, MAX_WORDS);

      renderWordCloud(true);

      // 清空输入
      contentInput.value = '';

      // 提交成功反馈
      const btn = messageForm.querySelector('.message-submit');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>已送达 ✓</span>';
      btn.style.background = 'linear-gradient(135deg, #059669, #10B981)';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
      }, 1500);
    });
  }
})();
