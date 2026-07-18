// --- DISCLAIMER OVERLAY ---
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
    overlay.style.animation = 'disclaimerOut .2s ease-in forwards';
    setTimeout(() => { overlay.style.display = 'none'; }, 200);
  });
})();
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
const clearSearch = document.querySelector("#clearSearch");
const verifiedDateNode = document.querySelector("#verifiedDate");
let activeFilter = "all";

function cardMatches(item, keyword) {
  const inFilter = activeFilter === "all" || item.category === activeFilter;
  const haystack = [item.title, item.tag, item.summary, ...item.points].join(" ").toLowerCase();
  return inFilter && (!keyword || haystack.includes(keyword));
}

function renderCards() {
  const keyword = searchInput.value.trim().toLowerCase();
  const visibleItems = guideItems.filter((item) => cardMatches(item, keyword));

  cardGrid.innerHTML = visibleItems.map((item) => `
    <article class="guide-card" data-id="${item.id}">
      <header>
        <h3>${item.title}</h3>
        <span class="badge">${item.tag}</span>
      </header>
      <p>${item.summary}</p>
      <ul>
        ${item.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
      <div class="card-actions">
        ${item.links.length ? item.links.map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("") : "<a href=\"#update\">等待补充入口</a>"}
      </div>
    </article>
  `).join("");

  emptyState.hidden = visibleItems.length > 0;
}

function renderLinks() {
  linkGrid.innerHTML = resourceLinks.map(([title, description, href]) => `
    <a class="resource-link" href="${href}" target="_blank" rel="noopener noreferrer">
      <strong>${title}</strong>
      <span>${description}</span>
    </a>
  `).join("");
}

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
          { transform: "translateY(0)", boxShadow: "0 10px 28px rgba(23, 32, 51, .06)" },
          { transform: "translateY(-6px)", boxShadow: "0 18px 46px rgba(23, 74, 124, .22)" },
          { transform: "translateY(0)", boxShadow: "0 10px 28px rgba(23, 32, 51, .06)" }
        ],
        { duration: 900, easing: "ease-out" }
      );
    }, 120);
  });
});

searchInput.addEventListener("input", renderCards);
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  renderCards();
});

if (verifiedDateNode) {
  verifiedDateNode.textContent = verifiedDate;
}

renderCards();
renderLinks();

// --- Add disclaimer out animation ---
(function addStyle() {
  const style = document.createElement('style');
  style.textContent = '@keyframes disclaimerOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}';
  document.head.appendChild(style);
})();