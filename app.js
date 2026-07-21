// ============================================
// LZU Freshman Guide — Warm Playful v3.0
// 兰州大学新生入学手册 · 温暖活力风
// ============================================

const App = (function() {
  const ENV = (typeof import.meta !== 'undefined' && import.meta.env) || {};

  const getEnv = (key, defaultValue = '') => {
    return ENV[key] !== undefined ? ENV[key] : defaultValue;
  };

  const verifiedDate = getEnv('VITE_VERIFIED_DATE', "2026-07-16");

  const official = {
    main: getEnv('VITE_OFFICIAL_MAIN', "https://www.lzu.edu.cn/"),
    service: getEnv('VITE_OFFICIAL_SERVICE', "https://www.lzu.edu.cn/zjld/fwrk.htm"),
    map: getEnv('VITE_OFFICIAL_MAP', "https://www.lzu.edu.cn/zjld/xydt.htm"),
    contact: getEnv('VITE_OFFICIAL_CONTACT', "https://www.lzu.edu.cn/zjld/lxwm.htm"),
    my: getEnv('VITE_OFFICIAL_MY', "https://my.lzu.edu.cn/"),
    jwc: getEnv('VITE_OFFICIAL_JWC', "https://jwc.lzu.edu.cn/"),
    xgb: getEnv('VITE_OFFICIAL_XGB', "https://xgb.lzu.edu.cn/"),
    hq: getEnv('VITE_OFFICIAL_HQ', "https://hq.lzu.edu.cn/"),
    lib: getEnv('VITE_OFFICIAL_LIB', "https://lib.lzu.edu.cn/"),
    zsb: getEnv('VITE_OFFICIAL_ZSB', "https://zsb.lzu.edu.cn/")
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
      summary: "榆中校区地址统一填写：甘肃省兰州市榆中县夏官营镇兰州大学榆中校区。快递会随机分配到北区邮政、南区邮政、南区快递柜、芝兰快递柜等站点。",
      points: ["地址统一填写成甘肃省兰州市榆中县夏官营镇兰州大学榆中校区", "快递都会随机分配到：北区邮政、南区邮政、南区快递柜、芝兰快递柜", "到校高峰期取件排队较久，建议错峰取件", "大件、贵重件和生鲜件单独备注"],
      links: [{ label: "后勤服务", href: official.hq }, { label: "官方校园地图", href: official.map }]
    },
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

  const DOM = {
    pageLoader: document.getElementById('pageLoader'),
    cardGrid: document.querySelector("#cardGrid"),
    linkGrid: document.querySelector("#linkGrid"),
    emptyState: document.querySelector("#emptyState"),
    searchInput: document.querySelector("#searchInput"),
    searchForm: document.querySelector(".search-box"),
    filterCount: document.querySelector("#filterCount"),
    brandBtn: document.getElementById('brandBtn'),
    tocPanel: document.getElementById('tocPanel'),
    tocOverlay: document.getElementById('tocOverlay'),
    tocClose: document.getElementById('tocClose'),
    disclaimerOverlay: document.getElementById('disclaimerOverlay'),
    disclaimerAccept: document.getElementById('disclaimerAccept'),
    scanline: document.getElementById('scanline'),
    scrollProgress: document.getElementById('scrollProgress'),
    hero: document.querySelector('.hero'),
    heroImg: document.querySelector('.hero-image'),
    heroBg: document.querySelector('.hero-bg'),
    decoNumber: document.querySelector('.deco-number'),
    heroContent: document.querySelector('.hero-content'),
    quickGridSection: document.querySelector('.quick-grid-section'),
    header: document.querySelector('.site-header'),
    backToTop: document.getElementById('backToTop'),
  };

  let activeFilter = "all";
  let scrollRevealObserver = null;

  const Security = {
    escapeHtml(str) {
      if (typeof str !== 'string') return str;
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    },

    sanitizeUrl(url) {
      if (!url || typeof url !== 'string') return '';
      const safePattern = /^(https?:\/\/|mailto:|tel:|#|\/|\.\/|\.\.\/)/i;
      if (!safePattern.test(url) && !url.startsWith('javascript:')) {
        return '';
      }
      return url.replace(/[<>"']/g, '');
    },

    sanitizeWord(text, maxLen = 20) {
      if (typeof text !== 'string') return '';
      return text
        .replace(/[<>"'`&]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .substring(0, maxLen);
    },

    sanitizeMessage(text, maxLen = 100) {
      if (typeof text !== 'string') return '';
      return text
        .replace(/[<>"'`]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, maxLen);
    },

    validateName(name) {
      if (!name) return true;
      return /^[\u4e00-\u9fa5a-zA-Z0-9_\-\s]{2,20}$/.test(name);
    },

    isSensitive(text, extraWords = []) {
      const baseWords = ['傻逼', '操你', '去死', '垃圾', '废物', '脑残', 'sb', 'cnm', 'nmsl', 'fuck', 'shit'];
      const allWords = [...baseWords, ...extraWords];
      const lowerText = text.toLowerCase();
      return allWords.some(word => lowerText.includes(word.toLowerCase()));
    },

    validateStoredData(data, schema) {
      if (!data || typeof data !== 'object') return false;
      return Object.keys(schema).every(key => {
        return data[key] !== undefined && typeof data[key] === schema[key];
      });
    },

    safeSetStorage(key, data) {
      try {
        const serialized = JSON.stringify(data);
        localStorage.setItem(key, serialized);
        return true;
      } catch (e) {
        console.warn('Storage write failed:', e);
        return false;
      }
    },

    safeGetStorage(key, defaultValue = null) {
      try {
        const item = localStorage.getItem(key);
        if (!item) return defaultValue;
        return JSON.parse(item);
      } catch (e) {
        console.warn('Storage read failed:', e);
        return defaultValue;
      }
    },

    addSecurityHeaders() {
      if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        console.warn('For production: serve over HTTPS with CSP, X-Frame-Options, X-Content-Type-Options headers');
      }
    }
  };

  const Utils = {
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    throttle(func, limit) {
      let inThrottle;
      return function executedFunction(...args) {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    },

    isReducedMotion() {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },

    isMobile(breakpoint = 680) {
      return window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
    },

    animateNumber(el, target, duration = 1200) {
      if (Utils.isReducedMotion()) {
        el.textContent = String(target).padStart(2, '0');
        return;
      }

      const startTime = performance.now();
      const startVal = 0;

      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(startVal + (target - startVal) * eased);

        el.textContent = String(current).padStart(2, '0');

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    },

    randomPick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    randomPosition() {
      return {
        x: 6 + Math.random() * 82,
        y: 6 + Math.random() * 80
      };
    }
  };

  const PageLoader = {
    init() {
      if (!DOM.pageLoader) return;

      const hideLoader = () => {
        DOM.pageLoader.classList.add('hidden');
      };

      if (document.readyState === 'complete') {
        setTimeout(hideLoader, 500);
      } else {
        window.addEventListener('load', () => {
          setTimeout(hideLoader, 800);
        });
        setTimeout(hideLoader, 3000);
      }
    }
  };

  const TocPanel = {
    init() {
      if (!DOM.brandBtn || !DOM.tocPanel || !DOM.tocOverlay) return;

      DOM.brandBtn.addEventListener('click', TocPanel.toggle);
      if (DOM.tocClose) DOM.tocClose.addEventListener('click', TocPanel.close);
      DOM.tocOverlay.addEventListener('click', TocPanel.close);

      document.querySelectorAll('.toc-item').forEach(item => {
        item.addEventListener('click', TocPanel.close);
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.tocPanel.classList.contains('is-open')) {
          TocPanel.close();
        }
      });
    },

    open() {
      DOM.tocPanel.classList.add('is-open');
      DOM.tocOverlay.classList.add('is-open');
      DOM.tocPanel.setAttribute('aria-hidden', 'false');
      DOM.brandBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    },

    close() {
      DOM.tocPanel.classList.remove('is-open');
      DOM.tocOverlay.classList.remove('is-open');
      DOM.tocPanel.setAttribute('aria-hidden', 'true');
      DOM.brandBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    },

    toggle() {
      if (DOM.tocPanel.classList.contains('is-open')) {
        TocPanel.close();
      } else {
        TocPanel.open();
      }
    }
  };

  const Disclaimer = {
    init() {
      if (!DOM.disclaimerOverlay || !DOM.disclaimerAccept) return;

      if (localStorage.getItem('lzu_guide_disclaimer_accepted')) {
        DOM.disclaimerOverlay.style.display = 'none';
        return;
      }

      DOM.disclaimerAccept.addEventListener('click', Disclaimer.accept);
    },

    accept() {
      localStorage.setItem('lzu_guide_disclaimer_accepted', '1');
      DOM.disclaimerOverlay.style.animation = 'disclaimerOut 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
      setTimeout(() => { DOM.disclaimerOverlay.style.display = 'none'; }, 300);
    }
  };

  const Scanline = {
    init() {
      if (!DOM.scanline || Utils.isReducedMotion() || Utils.isMobile()) {
        if (DOM.scanline) DOM.scanline.style.display = 'none';
        return;
      }

      window.addEventListener('load', () => {
        DOM.scanline.style.opacity = '0.3';
        setTimeout(() => {
          DOM.scanline.style.transition = 'opacity 500ms ease';
          DOM.scanline.style.opacity = '0';
          setTimeout(() => {
            DOM.scanline.style.display = 'none';
          }, 500);
        }, 2000);
      });
    }
  };

  const ScrollProgress = {
    init() {
      if (!DOM.scrollProgress) return;

      if (Utils.isReducedMotion()) {
        DOM.scrollProgress.style.display = 'none';
        return;
      }

      const updateProgress = Utils.throttle(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        DOM.scrollProgress.style.width = progress + '%';
      }, 100);

      window.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress();
    }
  };

  const HeroImage = {
    init() {
      if (!DOM.hero || !DOM.heroImg) return;

      if (DOM.heroImg.complete) {
        DOM.hero.classList.add('loaded');
      } else {
        DOM.heroImg.addEventListener('load', () => {
          DOM.hero.classList.add('loaded');
        });
      }
    }
  };

  const Parallax = {
    init() {
      if (Utils.isReducedMotion() || Utils.isMobile(980)) return;

      const handleScroll = Utils.throttle(() => {
        const scrollY = window.scrollY;
        const heroHeight = DOM.hero?.offsetHeight || 0;

        if (scrollY < heroHeight) {
          if (DOM.heroBg) {
            DOM.heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
          }
          if (DOM.decoNumber) {
            DOM.decoNumber.style.transform = `translateY(${scrollY * 0.15}px)`;
            DOM.decoNumber.style.opacity = Math.max(0, 0.5 - scrollY * 0.001);
          }
        }
      }, 16);

      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  };

  const ScrollReveal = {
    init() {
      if (Utils.isReducedMotion()) {
        document.querySelectorAll('.guide-card, .resource-link, .route-list article, .section-heading, .stat-num').forEach(el => {
          el.classList.add('is-visible');
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
        return;
      }

      const isMobile = Utils.isMobile();

      scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = isMobile ? 0 : ScrollReveal.calculateStaggerDelay(el);

            setTimeout(() => {
              el.classList.add('is-visible');

              if (el.classList.contains('stat-num') && el.dataset.count) {
                Utils.animateNumber(el, parseInt(el.dataset.count), 1500);
              }
            }, delay);

            scrollRevealObserver.unobserve(el);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      });

      document.querySelectorAll('.section-heading').forEach(el => {
        scrollRevealObserver.observe(el);
      });

      document.querySelectorAll('.stat-num').forEach(el => {
        scrollRevealObserver.observe(el);
      });

      ScrollReveal.observeDynamicElements();
    },

    calculateStaggerDelay(el) {
      const parent = el.parentElement;
      if (!parent) return 0;
      const siblings = Array.from(parent.children);
      const index = siblings.indexOf(el);
      const columnsMatch = getComputedStyle(parent).gridTemplateColumns;
      if (!columnsMatch || columnsMatch === 'none') return index * 80;
      const columns = columnsMatch.split(' ').length;
      const colIndex = index % columns;
      return colIndex * 80 + Math.floor(index / columns) * 50;
    },

    observeDynamicElements() {
      if (!scrollRevealObserver) return;
      document.querySelectorAll('.guide-card:not(.is-visible), .resource-link:not(.is-visible), .route-list article:not(.is-visible)').forEach(el => {
        scrollRevealObserver.observe(el);
      });
    }
  };

  const CardRenderer = {
    init() {
      CardRenderer.render();
      document.querySelectorAll(".filter").forEach((button) => {
        button.addEventListener("click", () => CardRenderer.setFilter(button.dataset.filter));
      });
    },

    matches(item, keyword) {
      const inFilter = activeFilter === "all" || item.category === activeFilter;
      const haystack = [item.title, item.tag, item.summary, ...item.points].join(" ").toLowerCase();
      return inFilter && (!keyword || haystack.includes(keyword));
    },

    render() {
      const keyword = DOM.searchInput?.value.trim().toLowerCase() || '';
      const visibleItems = guideItems.filter((item) => CardRenderer.matches(item, keyword));
      const total = guideItems.length;

      if (!DOM.cardGrid) return;

      DOM.cardGrid.innerHTML = visibleItems.map((item, idx) => `
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

      if (DOM.emptyState) {
        DOM.emptyState.hidden = visibleItems.length > 0;
      }

      if (DOM.filterCount) {
        DOM.filterCount.textContent = `${visibleItems.length} / ${total}`;
      }

      ScrollReveal.observeDynamicElements();
    },

    setFilter(nextFilter) {
      activeFilter = nextFilter;
      document.querySelectorAll(".filter").forEach((item) => {
        item.classList.toggle("is-active", item.dataset.filter === nextFilter);
      });
      CardRenderer.render();
    }
  };

  const LinkRenderer = {
    init() {
      LinkRenderer.render();
    },

    render() {
      if (!DOM.linkGrid) return;

      DOM.linkGrid.innerHTML = resourceLinks.map(([title, description, href]) => `
        <a class="resource-link" href="${Security.sanitizeUrl(href)}" target="_blank" rel="noopener noreferrer">
          <strong>${Security.escapeHtml(title)}</strong>
          <span>${Security.escapeHtml(description)}</span>
        </a>
      `).join("");

      setTimeout(() => ScrollReveal.observeDynamicElements(), 50);
    }
  };

  const DataFocus = {
    init() {
      document.querySelectorAll("[data-focus]").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = link.dataset.focus;
          if (DOM.searchInput) DOM.searchInput.value = "";
          CardRenderer.setFilter("all");

          setTimeout(() => {
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
    }
  };

  const Search = {
    init() {
      if (!DOM.searchInput) return;

      const debouncedRender = Utils.debounce(CardRenderer.render, 200);
      DOM.searchInput.addEventListener("input", debouncedRender);

      if (DOM.searchForm) {
        DOM.searchForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const cardGrid = document.querySelector("#cardGrid");
          if (cardGrid && DOM.searchInput.value.trim()) {
            cardGrid.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
    }
  };

  const EntranceSequence = {
    init() {
      if (Utils.isReducedMotion() || Utils.isMobile()) return;

      window.addEventListener('load', () => {
        if (DOM.heroContent) {
          DOM.heroContent.style.opacity = '0';
          DOM.heroContent.style.transform = 'translateY(24px)';
          setTimeout(() => {
            DOM.heroContent.style.transition = 'opacity 600ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)';
            DOM.heroContent.style.opacity = '1';
            DOM.heroContent.style.transform = 'translateY(0)';
          }, 300);
        }

        if (DOM.quickGridSection) {
          const items = DOM.quickGridSection.querySelectorAll('.quick-item');
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
    }
  };

  const BackToTop = {
    init() {
      if (!DOM.backToTop) return;

      DOM.backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  const HeaderScroll = {
    init() {
      if (!DOM.header) return;

      const handleScroll = Utils.throttle(() => {
        const currentScroll = window.scrollY;
        DOM.header.style.boxShadow = currentScroll > 50 
          ? '0 4px 20px rgba(45, 42, 50, 0.06)' 
          : 'none';
      }, 100);

      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  };

  const Checklist = {
    STORAGE_KEY: 'lzu_freshman_checklist',
    activeCategory: 'all',

    categories: [
      { id: 'all',      name: '全部',   icon: '📋' },
      { id: 'document', name: '证件材料', icon: '📄' },
      { id: 'clothes',  name: '衣物鞋帽', icon: '👕' },
      { id: 'daily',    name: '生活用品', icon: '🧴' },
      { id: 'digital',  name: '数码电子', icon: '💻' },
      { id: 'health',   name: '药品健康', icon: '💊' },
      { id: 'study',    name: '学习用品', icon: '📚' },
      { id: 'app',      name: 'App推荐',  icon: '📱' },
    ],

    items: [
      { id: 'doc-01', text: '录取通知书', category: 'document', important: true, tip: '一定要带原件！' },
      { id: 'doc-02', text: '身份证及复印件', category: 'document', important: true, tip: '建议准备2-3份复印件' },
      { id: 'doc-03', text: '高考准考证', category: 'document', tip: '部分报到环节可能需要' },
      { id: 'doc-04', text: '户口迁移证（可选）', category: 'document', tip: '根据个人意愿决定是否迁移' },
      { id: 'doc-05', text: '一寸/两寸证件照', category: 'document', important: true, tip: '蓝底/白底各备一版，电子版也要存好' },
      { id: 'doc-06', text: '银行卡（校园卡绑定）', category: 'document', tip: '学校随通知书寄的银行卡' },
      { id: 'doc-07', text: '贫困证明/助学金材料', category: 'document', tip: '申请助学金的同学准备' },
      { id: 'doc-08', text: '少量现金', category: 'document', tip: '应急用，500-1000元左右' },

      { id: 'clo-01', text: '夏装衣物', category: 'clothes', tip: '兰州夏天凉爽，短袖+薄外套' },
      { id: 'clo-02', text: '春秋装', category: 'clothes', tip: '九月后降温快，长袖必备' },
      { id: 'clo-03', text: '冬装厚外套', category: 'clothes', important: true, tip: '冬天很冷，羽绒服/棉服一定要有' },
      { id: 'clo-04', text: '内衣袜子', category: 'clothes', tip: '多备几套，方便换洗' },
      { id: 'clo-05', text: '睡衣家居服', category: 'clothes', tip: '宿舍穿舒适为主' },
      { id: 'clo-06', text: '运动鞋/休闲鞋', category: 'clothes', tip: '至少两双换着穿' },
      { id: 'clo-07', text: '拖鞋', category: 'clothes', tip: '宿舍穿，可备一双凉拖一双棉拖' },
      { id: 'clo-08', text: '军训鞋/鞋垫', category: 'clothes', tip: '软鞋垫很重要！' },
      { id: 'clo-09', text: '帽子/墨镜', category: 'clothes', tip: '兰州紫外线强，防晒必备' },
      { id: 'clo-10', text: '围巾手套', category: 'clothes', tip: '冬天用得到' },
      { id: 'clo-11', text: '皮带', category: 'clothes', tip: '军训裤子可能需要' },
      { id: 'clo-12', text: '雨衣/雨伞', category: 'clothes', tip: '兰州下雨少，但有备无患' },

      { id: 'dai-01', text: '洗漱用品套装', category: 'daily', tip: '牙刷牙膏、毛巾、洗面奶等' },
      { id: 'dai-02', text: '洗澡用品', category: 'daily', tip: '沐浴露、洗发水、浴筐等' },
      { id: 'dai-03', text: '洗衣液/洗衣粉', category: 'daily', tip: '小瓶装先过渡，后续再买大的' },
      { id: 'dai-04', text: '衣架', category: 'daily', tip: '10个左右，建议多备几个' },
      { id: 'dai-05', text: '收纳盒/收纳箱', category: 'daily', tip: '整理衣物和杂物' },
      { id: 'dai-06', text: '床品四件套', category: 'daily', tip: '也可以到校后购买' },
      { id: 'dai-07', text: '蚊帐/床帘', category: 'daily', tip: '看宿舍情况，榆中夏天蚊子不多' },
      { id: 'dai-08', text: '水杯/保温杯', category: 'daily', important: true, tip: '兰州干燥，多喝水！' },
      { id: 'dai-09', text: '纸巾/湿巾', category: 'daily', tip: '抽纸、卷纸各备一些' },
      { id: 'dai-10', text: '垃圾袋', category: 'daily', tip: '宿舍用' },
      { id: 'dai-11', text: '剪刀/指甲刀', category: 'daily', tip: '小工具套装' },
      { id: 'dai-12', text: '锁', category: 'daily', tip: '柜子上锁用，2-3把' },
      { id: 'dai-13', text: '小台灯', category: 'daily', tip: '宿舍熄灯后用，建议充电款' },
      { id: 'dai-14', text: '粘钩/小夹子', category: 'daily', tip: '挂东西很方便' },
      { id: 'dai-15', text: '镜子/梳子', category: 'daily', tip: '个人日用' },

      { id: 'dig-01', text: '手机及充电器', category: 'digital', important: true },
      { id: 'dig-02', text: '充电宝', category: 'digital', tip: '10000mAh以内可带上飞机' },
      { id: 'dig-03', text: '笔记本电脑', category: 'digital', tip: '根据专业需求选购' },
      { id: 'dig-04', text: '电脑充电器/鼠标', category: 'digital' },
      { id: 'dig-05', text: 'U盘/移动硬盘', category: 'digital', tip: '拷贝学习资料用' },
      { id: 'dig-06', text: '耳机', category: 'digital', tip: '宿舍必备，不打扰他人' },
      { id: 'dig-07', text: '插线板', category: 'digital', important: true, tip: '插孔多的，宿舍插座可能不够' },
      { id: 'dig-08', text: '数据线', category: 'digital', tip: 'Type-C/苹果数据线备两根' },
      { id: 'dig-09', text: '计算器', category: 'digital', tip: '部分课程考试允许用' },
      { id: 'dig-10', text: '小风扇', category: 'digital', tip: '夏天可用，榆中夏天不算热' },

      { id: 'hea-01', text: '感冒药', category: 'health', tip: '板蓝根、感冒灵等' },
      { id: 'hea-02', text: '肠胃药', category: 'health', tip: '蒙脱石散、健胃消食片等' },
      { id: 'hea-03', text: '创可贴', category: 'health', tip: '小伤口用' },
      { id: 'hea-04', text: '碘伏/棉签', category: 'health', tip: '消毒用' },
      { id: 'hea-05', text: '退烧药', category: 'health', tip: '布洛芬/对乙酰氨基酚' },
      { id: 'hea-06', text: '防晒霜', category: 'health', important: true, tip: '兰州紫外线强！必备！' },
      { id: 'hea-07', text: '润唇膏/护手霜', category: 'health', tip: '气候干燥，保湿很重要' },
      { id: 'hea-08', text: '维生素/保健品', category: 'health', tip: '根据个人需要' },
      { id: 'hea-09', text: '防蚊液/花露水', category: 'health', tip: '夏季备用' },
      { id: 'hea-10', text: '个人常用药', category: 'health', tip: '有慢性病的同学记得带足药量' },

      { id: 'stu-01', text: '书包/双肩包', category: 'study', important: true },
      { id: 'stu-02', text: '笔袋+各种笔', category: 'study', tip: '黑色签字笔、铅笔、荧光笔等' },
      { id: 'stu-03', text: '笔记本', category: 'study', tip: '先备几本，后续根据课程买' },
      { id: 'stu-04', text: '文件夹/资料袋', category: 'study', tip: '整理试卷和讲义' },
      { id: 'stu-05', text: '便利贴', category: 'study', tip: '记笔记、标记重点' },
      { id: 'stu-06', text: '订书机/回形针', category: 'study', tip: '装订资料' },
      { id: 'stu-07', text: '橡皮/尺子', category: 'study', tip: '基础文具' },
      { id: 'stu-08', text: '小词典/工具书', category: 'study', tip: '根据专业需要' },

      { id: 'app-01', text: '兰州大学App', category: 'app', tip: '官方校园App，查课表、成绩、校园卡' },
      { id: 'app-02', text: '校园集市', category: 'app', tip: '二手交易、闲置物品、校园互助' },
      { id: 'app-03', text: '超星学习通', category: 'app', tip: '很多课程的线上学习平台' },
      { id: 'app-04', text: '知到智慧树', category: 'app', tip: '通识课、选修课常用平台' },
      { id: 'app-05', text: '闪动校园Pro', category: 'app', tip: '校园跑使用，体育课外锻炼打卡' },
      { id: 'app-06', text: '志愿汇', category: 'app', tip: '志愿服务时长记录和认证' },
      { id: 'app-07', text: '到梦空间', category: 'app', tip: '第二课堂活动报名和学分' },
      { id: 'app-08', text: '体适能', category: 'app', tip: '体测和体育课能用到' },
      { id: 'app-09', text: '企业微信', category: 'app', tip: '学校通知、考勤、老师联系' },
    ],

    checked: {},

    init() {
      Checklist.loadState();
      Checklist.renderCategories();
      Checklist.renderItems();
      Checklist.updateProgress();
      Checklist.bindEvents();
    },

    loadState() {
      const saved = Security.safeGetStorage(Checklist.STORAGE_KEY, null);
      if (saved && typeof saved === 'object') {
        Checklist.checked = {};
        for (const key in saved) {
          if (saved[key] === true && Checklist.items.some(item => item.id === key)) {
            Checklist.checked[key] = true;
          }
        }
      }
    },

    saveState() {
      return Security.safeSetStorage(Checklist.STORAGE_KEY, Checklist.checked);
    },

    renderCategories() {
      const container = document.getElementById('checklistCategories');
      if (!container) return;

      const fragment = document.createDocumentFragment();

      Checklist.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'category-btn' + (Checklist.activeCategory === cat.id ? ' active' : '');
        btn.dataset.category = cat.id;

        const count = Checklist.getCategoryCount(cat.id);

        btn.innerHTML = `
          <span class="cat-icon">${cat.icon}</span>
          <span>${cat.name}</span>
          <span class="cat-count">${count.checked}/${count.total}</span>
        `;

        fragment.appendChild(btn);
      });

      container.innerHTML = '';
      container.appendChild(fragment);
    },

    getCategoryCount(categoryId) {
      let total = 0;
      let checked = 0;

      if (categoryId === 'all') {
        total = Checklist.items.length;
        checked = Object.keys(Checklist.checked).filter(k => Checklist.checked[k]).length;
      } else {
        Checklist.items.forEach(item => {
          if (item.category === categoryId) {
            total++;
            if (Checklist.checked[item.id]) checked++;
          }
        });
      }

      return { total, checked };
    },

    renderItems() {
      const container = document.getElementById('checklistItems');
      if (!container) return;

      const fragment = document.createDocumentFragment();
      const categories = Checklist.activeCategory === 'all'
        ? Checklist.categories.filter(c => c.id !== 'all')
        : [Checklist.categories.find(c => c.id === Checklist.activeCategory)];

      categories.forEach(cat => {
        if (!cat) return;
        const items = Checklist.items.filter(item => item.category === cat.id);
        if (items.length === 0) return;

        const group = document.createElement('div');
        group.className = 'checklist-group';

        const catCount = Checklist.getCategoryCount(cat.id);
        const catPercent = catCount.total > 0 ? Math.round(catCount.checked / catCount.total * 100) : 0;

        group.innerHTML = `
          <div class="checklist-group-header">
            <h4>${cat.icon} ${cat.name}</h4>
            <span class="group-progress">${catCount.checked}/${catCount.total} · ${catPercent}%</span>
          </div>
          <div class="checklist-group-items"></div>
        `;

        const itemsContainer = group.querySelector('.checklist-group-items');
        const itemsFragment = document.createDocumentFragment();

        items.forEach(item => {
          const div = document.createElement('div');
          div.className = 'check-item' + (Checklist.checked[item.id] ? ' checked' : '') + (item.important ? ' important' : '');
          div.dataset.id = item.id;

          const tipHtml = item.tip ? `<div class="check-tip">${Security.escapeHtml(item.tip)}</div>` : '';

          div.innerHTML = `
            <div class="check-checkbox">
              <svg viewBox="0 0 16 16">
                <path d="M3 8L6.5 11.5L13 4.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="check-text">${Security.escapeHtml(item.text)}</div>
              ${tipHtml}
            </div>
          `;

          itemsFragment.appendChild(div);
        });

        itemsContainer.appendChild(itemsFragment);
        fragment.appendChild(group);
      });

      container.innerHTML = '';
      container.appendChild(fragment);
    },

    updateProgress() {
      const fill = document.getElementById('progressFill');
      const count = document.getElementById('progressCount');
      const percent = document.getElementById('progressPercent');

      const total = Checklist.items.length;
      const checked = Object.keys(Checklist.checked).filter(k => Checklist.checked[k]).length;
      const pct = total > 0 ? Math.round(checked / total * 100) : 0;

      if (fill) fill.style.width = pct + '%';
      if (count) count.textContent = `${checked} / ${total}`;
      if (percent) percent.textContent = pct + '%';
    },

    toggleItem(id) {
      const item = Checklist.items.find(i => i.id === id);
      if (!item) return;

      if (Checklist.checked[id]) {
        delete Checklist.checked[id];
      } else {
        Checklist.checked[id] = true;
      }

      Checklist.saveState();
      Checklist.renderCategories();
      Checklist.renderItems();
      Checklist.updateProgress();
    },

    resetAll() {
      if (!confirm('确定要重置所有打勾项吗？此操作不可恢复。')) return;
      Checklist.checked = {};
      Checklist.saveState();
      Checklist.renderCategories();
      Checklist.renderItems();
      Checklist.updateProgress();
    },

    bindEvents() {
      const container = document.getElementById('checklistItems');
      const cats = document.getElementById('checklistCategories');
      const reset = document.getElementById('checklistReset');

      if (container) {
        container.addEventListener('click', (e) => {
          const item = e.target.closest('.check-item');
          if (item) {
            Checklist.toggleItem(item.dataset.id);
          }
        });
      }

      if (cats) {
        cats.addEventListener('click', (e) => {
          const btn = e.target.closest('.category-btn');
          if (btn) {
            Checklist.activeCategory = btn.dataset.category;
            Checklist.renderCategories();
            Checklist.renderItems();
          }
        });
      }

      if (reset) {
        reset.addEventListener('click', () => Checklist.resetAll());
      }
    },
  };

  return {
    init() {
      Security.addSecurityHeaders();
      PageLoader.init();
      TocPanel.init();
      Disclaimer.init();
      Scanline.init();
      ScrollProgress.init();
      HeroImage.init();
      Parallax.init();
      ScrollReveal.init();
      CardRenderer.init();
      LinkRenderer.init();
      DataFocus.init();
      Search.init();
      EntranceSequence.init();
      BackToTop.init();
      HeaderScroll.init();
      Checklist.init();
    }
  };
})();

document.addEventListener('DOMContentLoaded', App.init);