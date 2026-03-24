import type { BuildingData, SiteTheme, TechnologyPillar } from "../types";

export const siteThemes: SiteTheme[] = [
  {
    title: "礼制秩序",
    description: "从中轴、朝向、等级与仪式路径理解建筑如何组织权力、祭祀与公共行为。",
    accent: "#d8ba69",
  },
  {
    title: "结构智慧",
    description: "把木构、石木混合、夯土围护等技术逻辑转译为可阅读的结构层次与受力关系。",
    accent: "#86a9c7",
  },
  {
    title: "空间叙事",
    description: "关注人的步行、停驻、登临与回望，解释传统建筑如何通过路线塑造体验。",
    accent: "#8eb68e",
  },
  {
    title: "工艺细部",
    description: "不把斗拱、彩画、窗洞、铺地当装饰碎片，而是放回完整营造系统中理解。",
    accent: "#c7784b",
  },
  {
    title: "活态保护",
    description: "强调今天怎样监测、展示与维护遗产，使历史信息与公众体验保持平衡。",
    accent: "#7bb9b6",
  },
];

export const technologyPillars: TechnologyPillar[] = [
  {
    title: "单一内容源驱动",
    description: "全部首页与详情页内容由统一数据文件驱动，避免旧项目中多份内容源互相打架。",
    detail: "后续新增建筑时只需要补充结构化数据，不必再复制页面和模块模板。",
  },
  {
    title: "模块可视化阅读",
    description: "同一页面内用中轴、层叠、环形、院落等不同图形语法承接不同建筑主题。",
    detail: "视觉不是独立摆设，而是帮助读者抓住秩序、结构和空间重点。",
  },
  {
    title: "进度按个案隔离",
    description: "模块完成状态使用“建筑 ID + 模块 ID”联合键，修复旧项目不同建筑互相串进度的问题。",
    detail: "个案之间不再共享错误的完成记录，专题浏览路径因此可被稳定追踪。",
  },
  {
    title: "可扩展工程骨架",
    description: "保留首页总览 + 详情页深读的双层结构，让后续增加互动模块和案例更加安全。",
    detail: "这一版先解决 P0 与 P1 问题，再为后续高阶动效与内容扩充预留接口。",
  },
];

export const curationPrinciples = [
  "所有科技表达都必须服务于建筑文化本身，先讲清“为什么这样建”，再谈“如何更好地呈现”。",
  "每个案例只保留与其类型真正相关的模块，不再把一套交互模板硬塞给所有建筑。",
  "优先采用官方机构与世界遗产公开资料作为史实依据，避免常识错误与来源漂移。",
  "页面视觉坚持深色底与金石色点题，模拟夜观遗产时的仪式感，同时保证信息对比度。",
];

export const homeSummary = {
  title: "让礼制、结构与工艺重新被看见",
  subtitle:
    "这不是“图片加文字”的建筑陈列页，而是一套围绕空间秩序、结构智慧与当代保护重新组织的数字阅读界面。我们用统一的数据骨架、清晰的视觉系统和轻量可扩展的交互模型，把中国古代建筑的文化深度与技术逻辑真正讲清楚。",
  stats: [
    { label: "代表案例", value: "5 组" },
    { label: "主题模块", value: "25 个" },
    { label: "内容来源", value: "官方资料核验" },
  ],
};

export const footerSourceNote =
  "内容依据故宫博物院、天坛公园、联合国教科文组织与苏州市公开资料整理。";

export const buildingsData: BuildingData[] = [
  {
    id: "taihedian",
    name: "太和殿",
    englishName: "Hall of Supreme Harmony",
    tagline: "紫禁城礼制中轴上的最高等级殿堂。",
    dynasty: "明永乐始建，清代重建与沿用",
    location: "北京故宫",
    category: "palace",
    illustration: "taihedian",
    palette: ["#d8ba69", "#7a2f1e"],
    overview:
      "太和殿俗称金銮殿，位于紫禁城外朝中心，是故宫现存体量最大、等级最高的木构大殿。它的尺度、台基、屋顶形式与礼仪流程共同塑造出皇权秩序的空间高潮，也因此成为理解宫殿建筑等级制度的最佳切口。",
    significance: [
      "它把礼制秩序转化成连续的空间抬升，让人在步行中感受到权力中心的建立过程。",
      "重檐庑殿顶、斗拱、彩画与台基共同构成最高等级宫殿的完整范式。",
      "作为故宫核心建筑，太和殿也是研究古建筑开放展示与文物保护平衡的重要样本。",
    ],
    metrics: [
      {
        label: "屋顶等级",
        value: "重檐庑殿顶",
        description: "传统宫殿建筑中最显赫的屋顶形制之一。",
      },
      {
        label: "空间位置",
        value: "外朝中轴核心",
        description: "与太和门、中和殿、保和殿共同构成礼仪中心。",
      },
      {
        label: "观看关系",
        value: "高台 + 广庭",
        description: "通过台基抬升与留白广场强化朝会尺度。",
      },
    ],
    timeline: [
      {
        era: "明永乐十八年（1420）",
        title: "初建完成",
        description: "太和殿随北京宫城营建完成，奠定紫禁城外朝的礼制核心。",
      },
      {
        era: "清代",
        title: "重建与修葺",
        description: "现存殿体格局经清代重建与持续修缮后稳定延续至今。",
      },
      {
        era: "1987",
        title: "列入世界遗产",
        description: "明清皇宫作为整体被列入《世界遗产名录》，太和殿是其中最具代表性的核心建筑之一。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "礼制中轴",
        strapline: "从前庭到高台，仪式感在步行中递增。",
        summary:
          "太和殿最重要的不只是单体之大，而是它与中轴线、前庭、台基和殿门视线共同构成的仪式系统。",
        visualization: "axis",
        steps: [
          {
            title: "进入外朝前庭",
            detail: "先经过太和门前的大尺度庭院，人的身体被置入一个远大于日常生活的秩序场。",
            emphasis: "礼制建筑的第一层控制，不在殿内，而在进入之前的距离与留白。",
          },
          {
            title: "三层台基抬升",
            detail: "汉白玉台基把殿体从地面抽离出来，迫使视线、步伐与心理预期同步向上。",
          },
          {
            title: "中心焦点形成",
            detail: "御路、殿门与宝座所在方向形成单向聚焦，空间由此转化为秩序叙事。",
          },
        ],
        facts: [
          {
            label: "阅读关键词",
            value: "先广后高",
            description: "先用巨大庭院拉开距离，再用台基与殿门完成焦点压缩。",
          },
          {
            label: "秩序方式",
            value: "中轴递进",
            description: "中轴不是单纯几何线，而是礼仪路径的连续组织方式。",
          },
          {
            label: "体验结果",
            value: "仰视权威",
            description: "建筑通过高度与尺度改变人的观看姿态与身体姿态。",
          },
        ],
        takeaways: ["中轴不只是对称", "台基决定观看方式", "礼制通过动线被感知"],
      },
      {
        id: "structure",
        title: "木构等级",
        strapline: "柱网、斗拱与深远出檐共同抬起殿宇气势。",
        summary:
          "太和殿的宏伟感来自结构系统的共同工作，而不是单一立面的装饰。柱网承担体量，斗拱负责过渡，屋顶释放等级。",
        visualization: "layers",
        steps: [
          { title: "柱网建立骨架", detail: "大殿首先通过规整柱网确定空间跨度与室内仪式场的基本尺度。" },
          { title: "斗拱完成过渡", detail: "斗拱把柱头与大屋顶连接起来，既承托出檐，也强化了等级感。" },
          { title: "屋顶压出气势", detail: "重檐庑殿顶在水平与垂直两个方向同时放大建筑的仪式分量。" },
        ],
        facts: [
          {
            label: "结构特征",
            value: "木构大殿",
            description: "体量巨大却依赖木构体系完成空间组织，是宫殿建筑技术成熟度的体现。",
          },
          {
            label: "过渡节点",
            value: "斗拱层",
            description: "斗拱既是结构节点，也承担最重要的视觉节奏。",
          },
          {
            label: "整体印象",
            value: "上重下稳",
            description: "台基、柱网与大屋顶形成稳定而庄严的比例关系。",
          },
        ],
        takeaways: ["宏伟感来自结构", "斗拱兼具受力与表达", "屋顶是等级的放大器"],
      },
      {
        id: "craft",
        title: "营造细部",
        strapline: "从彩画到铺地，工艺把尊崇感做到了可见层。",
        summary:
          "太和殿不是单靠体量取胜，构件加工、彩画系统、铺地与台基雕饰共同维持了建筑的尊贵气场。",
        visualization: "timeline",
        steps: [
          { title: "木作装配", detail: "榫卯与构件编号让大体量木构仍然可以被准确加工、运输与安装。" },
          { title: "彩画与贴金", detail: "金龙和玺彩画在重要节点集中出现，使结构与装饰不会彼此脱节。" },
          { title: "台基与铺地", detail: "石作、台阶与室内铺地把礼仪活动从脚下开始规范化。" },
        ],
        facts: [
          { label: "工艺逻辑", value: "先结构后饰面", description: "装饰并非独立贴附，而是依附于构架与礼制序列展开。" },
          { label: "观感来源", value: "金、赤、白", description: "金色、深红与石白在宫殿建筑中形成高度稳定的等级识别。" },
          { label: "维护难点", value: "细部易损", description: "彩画、木作表面与石作边角在开放展示中都需要精细维护。" },
        ],
        takeaways: ["工艺不是附加层", "彩画与结构需要同步理解", "细部决定尊贵感"],
      },
      {
        id: "ornament",
        title: "象征语汇",
        strapline: "龙纹、色彩与陈设共同表达宫殿的政治象征。",
        summary:
          "太和殿的装饰系统不是零散符号，而是围绕皇权、礼仪与空间中心展开的完整视觉语言。",
        visualization: "rings",
        steps: [
          { title: "龙纹聚焦中心", detail: "龙纹主要围绕最重要的界面与陈设展开，强化中心权力意象。" },
          { title: "色彩划分等级", detail: "黄、赤、金等高饱和度组合在宫殿体系中长期承担等级表达功能。" },
          { title: "陈设配合礼仪", detail: "建筑内部陈设、宝座位置与礼仪行为共同完成空间象征。" },
        ],
        facts: [
          { label: "主要角色", value: "建筑 + 陈设", description: "象征意义来自建筑与礼仪道具共同作用，而非单一纹样。" },
          { label: "表达方式", value: "集中而克制", description: "真正高等级建筑并不处处堆满图案，而是在关键处精确强调。" },
          { label: "阅读方法", value: "看节点", description: "檐下、门内、宝座区和台基转折处最值得重点观察。" },
        ],
        takeaways: ["装饰服务中心性", "色彩即等级", "礼仪与纹样不可分开看"],
      },
      {
        id: "preservation",
        title: "保护与展示",
        strapline: "如何让最高等级木构在高流量环境中持续被看见。",
        summary:
          "今天的太和殿必须同时面对文物保护、公众认知与游览组织三类任务，因此保护工作也成为理解建筑的新入口。",
        visualization: "timeline",
        steps: [
          { title: "基础监测", detail: "通过测绘、病害记录与环境观察，持续跟踪木构、彩画与台基状况。" },
          { title: "开放组织", detail: "游线管理与可观看区域控制帮助减轻高流量对文物本体的压力。" },
          { title: "知识转译", detail: "把“为什么不能近距离触碰”讲明白，保护才会被公众真正理解。" },
        ],
        facts: [
          { label: "保护关键词", value: "最小干预", description: "修缮目标不是做成全新，而是尽量保留真实历史信息。" },
          { label: "展示难点", value: "高客流", description: "核心建筑既是观众焦点，也是保护压力最高的地点之一。" },
          { label: "公众价值", value: "看见保护逻辑", description: "展示不是附属工作，它直接影响公众如何理解遗产。" },
        ],
        takeaways: ["保护是叙事的一部分", "开放需要边界", "文保与体验必须同时设计"],
      },
    ],
    sources: [
      { label: "故宫博物院｜太和殿", url: "https://www.dpm.org.cn/explore/building/236465.html" },
      {
        label: "UNESCO｜Imperial Palaces of the Ming and Qing Dynasties",
        url: "https://whc.unesco.org/en/list/439/",
      },
    ],
  },
  {
    id: "qiniandian",
    name: "祈年殿",
    englishName: "Hall of Prayer for Good Harvests",
    tagline: "以圆形祭殿表达天时、节律与农耕国家的宇宙观。",
    dynasty: "明永乐始建，清代沿用与重建",
    location: "北京天坛",
    category: "altar",
    illustration: "qiniandian",
    palette: ["#4b78a8", "#16324f"],
    overview:
      "祈年殿是天坛最具辨识度的建筑，也是皇帝举行祈谷礼的重要场所。圆形体量、三重檐攒尖顶与蓝色琉璃瓦，共同把“敬天、顺时、祈谷”的观念转化成可见的建筑语言。",
    significance: [
      "它把祭天观念与农耕节律具象化为圆形体量、数字象征和礼仪路线。",
      "殿内二十八根柱的空间系统，使结构、象征与仪式功能合而为一。",
      "祈年殿证明坛庙建筑并非单纯纪念性空间，而是国家时间秩序的一部分。",
    ],
    metrics: [
      { label: "平面形制", value: "圆形殿体", description: "以圆形强化“天”的象征，并与坛庙礼制相匹配。" },
      { label: "屋顶形式", value: "三重檐攒尖顶", description: "多层叠起的屋顶让仪式性在轮廓上直接可见。" },
      { label: "结构线索", value: "二十八柱", description: "柱列系统承担空间组织，也承载时序象征。" },
    ],
    timeline: [
      { era: "明永乐十八年（1420）", title: "初建大祀殿", description: "祈年殿所在建筑最早随天坛整体营建完成。" },
      { era: "明嘉靖二十四年（1545）", title: "改为三重檐圆殿", description: "建筑形制调整后，更鲜明地强化了祭天礼仪的象征表达。" },
      { era: "清光绪十五年（1889）后", title: "火后重建", description: "祈年殿遭雷击焚毁后重建，今日所见殿体为重建结果。" },
    ],
    modules: [
      {
        id: "axis",
        title: "祭天路径",
        strapline: "从坛门、丹陛桥到祈谷坛，礼仪路线决定理解方式。",
        summary: "祈年殿不应被当作孤立圆殿观看，它必须放回天坛完整礼仪路线中才能真正成立。",
        visualization: "axis",
        steps: [
          { title: "进入坛区", detail: "祭祀活动从进入坛庙空间开始，外部路径先建立敬天的心理准备。" },
          { title: "抬升至祈谷坛", detail: "建筑被置于更高的平台上，象征层级与仪式庄重感随之加强。" },
          { title: "殿体成为终点", detail: "圆形殿体在路线上承担收束作用，礼仪意图因此被准确聚焦。" },
        ],
        facts: [
          { label: "观看方式", value: "沿路理解", description: "祈年殿的意义在于整套祭祀路径，而非单一外观照片。" },
          { label: "空间语法", value: "抬升 + 聚焦", description: "坛庙建筑通过平台、门与终点建筑逐层加重庄严气氛。" },
          { label: "核心体验", value: "由远及近", description: "礼仪建筑通过距离控制而不是功能混杂来建立秩序。" },
        ],
        takeaways: ["祈年殿属于整条礼仪路线", "路径先于立面", "终点建筑承担意义收束"],
      },
      {
        id: "structure",
        title: "圆殿结构",
        strapline: "柱列、屋顶和环向空间共同建立向心性。",
        summary:
          "祈年殿最值得看的不是“圆”，而是圆形空间如何被柱列和屋顶层层收束，形成对中心的强烈感知。",
        visualization: "layers",
        steps: [
          { title: "柱列分层", detail: "不同圈层的柱列把空间组织成由内向外的秩序，并承担清晰的支撑关系。" },
          { title: "屋顶逐层叠起", detail: "三重檐不是重复堆叠，而是将向上感和庄严感同时强化。" },
          { title: "中央成为焦点", detail: "圆形体量让人的感知自然向中心回收，适合承接祭祀场景。" },
        ],
        facts: [
          { label: "结构印象", value: "环向组织", description: "不同于宫殿的纵深柱网，祈年殿更强调围绕中心的组织方式。" },
          { label: "建筑策略", value: "向心空间", description: "空间越接近中心，象征与仪式意义越集中。" },
          { label: "阅读重点", value: "柱与屋顶关系", description: "看明白柱列如何承托三重檐，就能理解这座建筑的技术魅力。" },
        ],
        takeaways: ["圆形不是装饰选择", "柱列就是秩序", "屋顶强化向心体验"],
      },
      {
        id: "craft",
        title: "色与材",
        strapline: "蓝瓦、木柱与金属构件把天象观念压缩进细部。",
        summary:
          "祈年殿的工艺价值在于：色彩、材质与构件处理都服从于“祭天”这一核心主题，不多做与主题无关的修饰。",
        visualization: "timeline",
        steps: [
          { title: "蓝色琉璃瓦", detail: "屋顶色彩直接呼应天的意象，是坛庙建筑中非常鲜明的识别特征。" },
          { title: "木柱与金色细部", detail: "主结构的厚重感与金属、彩饰的亮点形成庄重而克制的对比。" },
          { title: "工艺服从礼仪", detail: "细部的存在目的不是炫耀繁复，而是让祭祀主题更明确。" },
        ],
        facts: [
          { label: "颜色角色", value: "以蓝为主", description: "色彩承担象征意义，并与宫殿建筑的黄瓦系统形成明显区分。" },
          { label: "细部节奏", value: "庄重克制", description: "工艺亮点集中在关键节点，避免破坏祭祀空间的纯度。" },
          { label: "辨识方式", value: "先看屋顶", description: "祈年殿最强的视觉记忆首先来自屋顶轮廓与色彩体系。" },
        ],
        takeaways: ["色彩本身就是观念", "工艺服从主题", "蓝瓦是坛庙识别符号"],
      },
      {
        id: "ornament",
        title: "时间象征",
        strapline: "数字、圆形与祭祀语汇共同把“天时”变成建筑语言。",
        summary:
          "祈年殿的装饰系统包含大量数字与秩序观念，它们不是附会解释，而是祭祀建筑本体的一部分。",
        visualization: "rings",
        steps: [
          { title: "圆形象征天", detail: "从平面到屋顶轮廓，圆形都在持续强调与天相关的秩序。" },
          { title: "数字组织时序", detail: "柱列与层次被赋予时间与节令的含义，建筑因此承担了国家时间观的表达。" },
          { title: "礼仪完成意义", detail: "象征只有与具体祭祀行为结合，才会从图像变成真正的文化系统。" },
        ],
        facts: [
          { label: "象征核心", value: "天时农事", description: "祈谷礼的国家意义决定了建筑必须能表达时间与节令。" },
          { label: "关键方法", value: "以数入制", description: "数字系统帮助建筑与礼制产生稳定对应关系。" },
          { label: "阅读提醒", value: "别只看外轮廓", description: "真正有价值的是象征、结构与礼仪之间的联动。" },
        ],
        takeaways: ["圆形是宇宙观表达", "数字承担秩序功能", "象征必须回到礼制中解读"],
      },
      {
        id: "preservation",
        title: "灾后重建与当代保护",
        strapline: "理解它今天为什么还能以如此完整的面貌被看见。",
        summary:
          "祈年殿经历火灾与重建，今天的保护工作既要面对木构文物本体，也要回应公众对这座标志性建筑的高关注度。",
        visualization: "timeline",
        steps: [
          { title: "灾害记忆", detail: "雷击与火灾让祈年殿的保护议题始终与风险管理紧密相关。" },
          { title: "环境控制", detail: "木构、屋面与装饰表层都需要长期巡查和细致维护。" },
          { title: "展示转译", detail: "越是标志性遗产，越需要把复杂保护逻辑讲给更多公众理解。" },
        ],
        facts: [
          { label: "保护特征", value: "高辨识度高客流", description: "视觉符号越强，开放展示压力往往越高。" },
          { label: "风险类型", value: "火灾与老化", description: "木构坛庙需要持续关注环境、气候与使用压力。" },
          { label: "今日价值", value: "可见的保护教育", description: "展示保护逻辑，本身就是遗产传播的重要部分。" },
        ],
        takeaways: ["火后重建也是历史", "保护工作需要公众理解", "标志性建筑更需要精细管理"],
      },
    ],
    sources: [
      { label: "天坛公园｜祈年殿", url: "https://www.tiantanpark.com/tiantanmobile/contents/29/5039.html" },
      { label: "UNESCO｜Temple of Heaven", url: "https://whc.unesco.org/en/list/881/" },
    ],
  },
  {
    id: "potala",
    name: "布达拉宫",
    englishName: "Potala Palace",
    tagline: "依山垒叠的宫堡式建筑群，把地形、政教与朝圣路线合为一体。",
    dynasty: "7 世纪肇建，17 世纪形成现貌",
    location: "西藏拉萨",
    category: "religious",
    illustration: "potala",
    palette: ["#d5b264", "#8b4031"],
    overview:
      "布达拉宫依附红山而建，红宫与白宫的层层叠起使它既像城堡、又像宗教中心和政治中心的复合体。它最打动人的地方，不只在宏伟外观，而在于地形、路径、墙体和高原光线如何共同塑造出登临体验。",
    significance: [
      "它展示了高原地形条件下宫堡式建筑如何与山体深度耦合。",
      "红宫与白宫的分区关系，使政教功能与精神象征被清晰嵌入整体形象。",
      "布达拉宫是理解西藏传统建筑、宗教空间和世界遗产保护关系的重要案例。",
    ],
    metrics: [
      { label: "总体构成", value: "白宫 + 红宫", description: "不同色块与体量共同塑造出高度鲜明的整体识别。" },
      { label: "地形关系", value: "依红山而起", description: "建筑并非放在山上，而是与山体坡势共同生成外形。" },
      { label: "空间印象", value: "层层登临", description: "折线上升的路径让朝圣与观看成为同一体验。" },
    ],
    timeline: [
      { era: "7 世纪", title: "早期肇建", description: "布达拉宫的源头可追溯至松赞干布时期的营建活动。" },
      { era: "17 世纪", title: "形成今日主体", description: "五世达赖时期的大规模扩建奠定了今天布达拉宫的核心格局。" },
      { era: "1994", title: "列入世界遗产", description: "布达拉宫历史建筑群被列入《世界遗产名录》。" },
    ],
    modules: [
      {
        id: "axis",
        title: "登临路径",
        strapline: "布达拉宫没有宫殿式平轴线，而是以山体路径组织秩序。",
        summary:
          "这座建筑最重要的“轴线”不是平地上的中轴，而是顺着坡地不断折返、抬升、收束的登临路线。",
        visualization: "axis",
        steps: [
          { title: "山脚接近", detail: "远观时首先感受到的是体量压迫，接近时才逐步辨认出入口与路径。" },
          { title: "折线登高", detail: "路径顺应地形不断转折，人在步行中被持续地向上牵引。" },
          { title: "红白宫聚焦", detail: "随着高度变化，功能核心和视觉核心不断被重新定义，形成强烈层层递进感。" },
        ],
        facts: [
          { label: "秩序来源", value: "地形路径", description: "山体坡势本身就是空间组织的一部分。" },
          { label: "体验方式", value: "折返上升", description: "登临不是障碍，而是建筑叙事的核心手段。" },
          { label: "阅读提醒", value: "远观与近行并重", description: "只有同时经历远望与步行，才能理解它的整体魅力。" },
        ],
        takeaways: ["山体就是轴线的一部分", "路径塑造敬畏感", "空间在登高中展开"],
      },
      {
        id: "structure",
        title: "高原建造",
        strapline: "厚墙、台地与石木混合体系共同回应高原环境。",
        summary:
          "布达拉宫的稳定感来自厚重围护、石木混合构造与顺应山体的多层台地处理，这是一种环境驱动的建筑智慧。",
        visualization: "layers",
        steps: [
          { title: "厚墙稳定体量", detail: "厚重墙体帮助建筑获得围护、保温与视觉上的坚实感。" },
          { title: "台地顺应坡势", detail: "不同高度的平台与建筑体块一起适应山体，不追求完全平整的人工地基。" },
          { title: "石木共同工作", detail: "材料组合与层层退进的外形共同应对高原环境与大体量需求。" },
        ],
        facts: [
          { label: "结构印象", value: "厚重上升", description: "建筑在视觉上既沉稳又不断向上推进。" },
          { label: "建造策略", value: "顺势而为", description: "不是压平山体，而是让建筑跟随山势层层叠起。" },
          { label: "理解重点", value: "形体即结构", description: "外轮廓本身就直接暴露了结构与地形关系。" },
        ],
        takeaways: ["环境塑造结构", "厚墙是技术也是形象", "地形不可被忽略"],
      },
      {
        id: "craft",
        title: "色块与质感",
        strapline: "红、白、金在高原强光下形成极具辨识度的建筑表情。",
        summary:
          "布达拉宫的工艺表达不靠繁复局部取胜，而是依靠大色块、墙体质感和关键节点的装饰来塑造整体气势。",
        visualization: "timeline",
        steps: [
          { title: "白墙打底", detail: "大面积白色墙面在强光环境下形成稳定而鲜明的整体底色。" },
          { title: "红宫聚焦", detail: "红色核心体量强化精神中心，形成远观时最突出的视觉重点。" },
          { title: "金顶点睛", detail: "关键顶部元素以更高亮度和更高象征性收束整体形象。" },
        ],
        facts: [
          { label: "色彩逻辑", value: "大块面优先", description: "先建立整体色块关系，再让重点节点被看见。" },
          { label: "光线关系", value: "高原强对比", description: "高原光照使墙体与顶部装饰的明暗层次格外鲜明。" },
          { label: "工艺重点", value: "整体气势", description: "布达拉宫的工艺感来自整体形象控制，不只是局部纹样。" },
        ],
        takeaways: ["大色块决定第一印象", "红白分区承载功能差异", "高原光线放大材料表情"],
      },
      {
        id: "ornament",
        title: "精神中心",
        strapline: "宗教象征并不散落，而是被压缩进最关键的空间节点。",
        summary:
          "布达拉宫的象征体系建立在分区、朝圣与精神中心的叠加之上，红宫、金顶和内部核心空间共同构成意义高潮。",
        visualization: "rings",
        steps: [
          { title: "红宫成为象征核", detail: "红色核心体块在整体中最具辨识度，也最直接地承担精神中心角色。" },
          { title: "顶部强化神圣性", detail: "金色顶部与高处位置一起抬升了神圣感。" },
          { title: "朝圣路径赋义", detail: "象征意义并不孤立存在，而是在行动与抵达中被不断强化。" },
        ],
        facts: [
          { label: "象征方式", value: "空间先于符号", description: "最重要的意义来自分区、路径和位置，而不只是装饰纹样。" },
          { label: "视觉重点", value: "高处核心", description: "越接近高处与中心，象征强度越高。" },
          { label: "阅读方法", value: "看分区关系", description: "理解白宫与红宫的关系，比只盯细部图案更关键。" },
        ],
        takeaways: ["意义被压缩在核心节点", "颜色承担精神指向", "路径让象征真正成立"],
      },
      {
        id: "preservation",
        title: "高原遗产保护",
        strapline: "在高海拔气候与高关注度之间维持稳定。",
        summary:
          "布达拉宫的保护必须同时面对高原环境、材料老化、文物管理与大量公众关注，这让它成为复杂遗产治理的典型案例。",
        visualization: "timeline",
        steps: [
          { title: "气候与材料监测", detail: "环境变化会直接影响墙体、木作和表层材料的长期状态。" },
          { title: "分区开放管理", detail: "通过限定参观区域和流线，尽量降低高客流对核心空间的压力。" },
          { title: "遗产信息传达", detail: "让公众理解“为什么有些地方不能进入”，是保护工作的关键组成部分。" },
        ],
        facts: [
          { label: "保护难点", value: "环境与客流双重压力", description: "自然条件与公众使用同时作用于遗产本体。" },
          { label: "治理方式", value: "分区分级", description: "不同空间应依据脆弱程度采用不同开放与维护策略。" },
          { label: "长期目标", value: "稳定而可持续", description: "保护不是一次性工程，而是持续管理与知识更新。" },
        ],
        takeaways: ["高原环境决定保护方法", "开放与保护要同步设计", "解释成本也是文保成本"],
      },
    ],
    sources: [
      {
        label: "UNESCO｜Historic Ensemble of the Potala Palace, Lhasa",
        url: "https://whc.unesco.org/en/list/707/",
      },
    ],
  },
  {
    id: "liuyuan",
    name: "留园",
    englishName: "Lingering Garden",
    tagline: "以曲折游线和借景策略，把江南园林的空间叙事推到极致。",
    dynasty: "明万历始建，清代成园",
    location: "江苏苏州",
    category: "garden",
    illustration: "liuyuan",
    palette: ["#7fa683", "#506b49"],
    overview:
      "留园是苏州古典园林的代表之一。它真正精彩的地方，在于如何通过厅堂、长廊、水石和窗洞把有限园地组织成层次丰富的游观体验，让“走”本身成为阅读园林的方式。",
    significance: [
      "留园证明园林不是自然风景的复制，而是被精心编排的空间叙事。",
      "宅园合一的格局让生活、观赏与社交彼此交织，形成独特的江南文人空间。",
      "它把框景、借景、对景与移步换景等经典方法组织成高度成熟的范本。",
    ],
    metrics: [
      { label: "园林类型", value: "宅园合一", description: "住宅与园景紧密交织，是理解苏州园林的重要线索。" },
      { label: "空间方法", value: "移步换景", description: "景不是一次看完，而是沿着步行被逐段展开。" },
      { label: "园中名胜", value: "冠云峰", description: "太湖石峰是留园最具辨识度的景观节点之一。" },
    ],
    timeline: [
      { era: "明万历年间", title: "始建园基", description: "留园前身在明代形成基本园居格局。" },
      { era: "清代", title: "重修成园", description: "经清代整理扩建后，留园逐渐形成今日广为人知的园林格局。" },
      { era: "1997 / 2000", title: "列入世界遗产", description: "苏州古典园林分批列入《世界遗产名录》，留园是其中代表个案。" },
    ],
    modules: [
      {
        id: "axis",
        title: "游线组织",
        strapline: "园林没有单一主轴，而以连续转折组织感知节奏。",
        summary:
          "留园的阅读方式是一步一步被设计出来的。真正的“轴线”不是笔直中轴，而是被廊、门洞和转角不断串起来的游观路径。",
        visualization: "axis",
        steps: [
          { title: "先收后放", detail: "入口与过渡空间往往先收紧尺度，再把主要景区突然打开。" },
          { title: "廊道串景", detail: "长廊和回廊不是交通附属，而是组织观看顺序的核心装置。" },
          { title: "转角制造惊喜", detail: "每次转折都可能带来新的框景、对景或景深变化。" },
        ],
        facts: [
          { label: "核心方法", value: "曲折游观", description: "园林通过转折而不是直给，延长观看与想象时间。" },
          { label: "体验节奏", value: "收放相间", description: "尺度变化是留园最核心的叙事手段之一。" },
          { label: "阅读提示", value: "边走边看", description: "停在单一点位拍照，无法真正理解园林价值。" },
        ],
        takeaways: ["游线就是叙事", "廊道是观看工具", "园林价值在行走中展开"],
      },
      {
        id: "structure",
        title: "厅廊水石",
        strapline: "建筑、山石与水面共同定义园林空间骨架。",
        summary:
          "留园的结构逻辑不是梁架受力图式，而是厅堂、廊架、水体与假山如何共同形成可停、可望、可转折的复合空间。",
        visualization: "courtyard",
        steps: [
          { title: "厅堂定节点", detail: "主要厅堂负责收纳活动，也是每段游线的重要停驻点。" },
          { title: "廊架连空间", detail: "廊架把离散景点编织成连续体验，同时控制视线方向。" },
          { title: "水石成景核", detail: "山石与水面并不是背景，它们是园林空间层次的真正组织者。" },
        ],
        facts: [
          { label: "结构关键词", value: "建筑与景互为骨架", description: "江南园林的空间结构不能把房屋和景观拆开理解。" },
          { label: "停驻方式", value: "边行边驻", description: "每个厅、亭、廊转角都是感知被重新组织的节点。" },
          { label: "观看逻辑", value: "层层借景", description: "近景、中景、远景在园林中被有意识地叠置。" },
        ],
        takeaways: ["厅廊水石缺一不可", "节点决定节奏", "景不是装点而是骨架"],
      },
      {
        id: "craft",
        title: "窗洞与铺地",
        strapline: "细部工艺决定园林的文气与节奏转换。",
        summary:
          "在留园，漏窗、门洞、栏杆、铺地和题额等细部不是装点边角，而是控制视线、节奏和氛围的精密装置。",
        visualization: "timeline",
        steps: [
          { title: "窗洞框景", detail: "不同洞口形态选择性地截取景物，帮助观者重新组织视野。" },
          { title: "铺地暗示步伐", detail: "脚下材料与图案变化让人自然放慢或转换行走状态。" },
          { title: "匾额点明意境", detail: "文字与景观相互提示，使园林体验从视觉延伸到文化语义。" },
        ],
        facts: [
          { label: "细部作用", value: "引导观看", description: "工艺首先服务于视线与步伐，而不是单纯装饰。" },
          { label: "氛围来源", value: "文气与尺度", description: "园林高级感来自克制、含蓄和尺度经营。" },
          { label: "观察建议", value: "别只拍大景", description: "很多最精妙的园林设计藏在窗洞和脚下材料里。" },
        ],
        takeaways: ["细部控制节奏", "工艺也是叙事工具", "园林精妙常在边角"],
      },
      {
        id: "ornament",
        title: "文人语汇",
        strapline: "题额、峰石与景名共同构成江南园林的文化修辞。",
        summary:
          "留园的装饰性并不等于堆砌华丽，而是通过题名、石峰和空间命名，把文人趣味转译为空间体验。",
        visualization: "rings",
        steps: [
          { title: "景名定义观看", detail: "空间被命名之后，观者会带着特定想象进入现场。" },
          { title: "峰石成为精神焦点", detail: "名石不仅是视觉中心，也承载文人对于山水缩影的理解。" },
          { title: "园林修辞成形", detail: "文字、石景与空间组合让园林不只可看，也可被联想和被吟咏。" },
        ],
        facts: [
          { label: "装饰特征", value: "文气大于华丽", description: "留园的高级感来自含蓄的文化修辞，而非强烈视觉刺激。" },
          { label: "代表节点", value: "冠云峰", description: "名石在园林中往往承担集中记忆与组织空间的双重作用。" },
          { label: "阅读方法", value: "看名字如何工作", description: "题额和景名能帮助理解空间为什么被这样安排。" },
        ],
        takeaways: ["命名塑造意境", "名石是空间核心", "文人语汇需要结合场景理解"],
      },
      {
        id: "preservation",
        title: "活态园林",
        strapline: "园林保护既要守住格局，也要维护季相与游观方式。",
        summary:
          "留园不是静止展柜中的遗产，它的价值还包含植物生长、季相变化、游线维护与高密度参观中的体验管理。",
        visualization: "timeline",
        steps: [
          { title: "格局维护", detail: "厅堂、廊道、水石和借景关系需要被整体维护，而不是分散修修补补。" },
          { title: "植物季相管理", detail: "园林体验与四时变化密切相关，植物本身也是遗产景观的一部分。" },
          { title: "参观节奏控制", detail: "高人流下如何仍然让人感受到收放与曲折，是展示管理的难点。" },
        ],
        facts: [
          { label: "保护对象", value: "空间关系", description: "园林保护不只修单体，更要保护景与景之间的关系。" },
          { label: "难点类型", value: "动态变化", description: "植物、季相和人流都让园林成为典型的活态遗产。" },
          { label: "今日价值", value: "持续可游可读", description: "好的保护应让园林仍然可以被有质量地体验。" },
        ],
        takeaways: ["园林是活的遗产", "保护的是关系而不是孤立对象", "展示管理决定体验质量"],
      },
    ],
    sources: [
      {
        label: "Suzhou Official｜Lingering Garden",
        url: "https://english.suzhou.gov.cn/szsenglish/szyllm/201611/6a6c8bf51df742b4b3a1a56307437b21.shtml",
      },
      { label: "UNESCO｜Classical Gardens of Suzhou", url: "https://whc.unesco.org/en/list/813/" },
    ],
  },
  {
    id: "tulou",
    name: "福建土楼",
    englishName: "Fujian Tulou",
    tagline: "以环形或方形聚居单元回应防御、血缘与山地生活。",
    dynasty: "宋元发展，明清成熟",
    location: "福建龙岩、漳州一带",
    category: "residence",
    illustration: "tulou",
    palette: ["#b48859", "#7a5235"],
    overview:
      "福建土楼是以生土夯筑外墙、内部木构楼层和中心公共空间共同组织起来的聚居建筑类型。它不是孤立单体住宅，而是一种围绕家族、防御、协作与山地生活方式形成的整体居住系统。",
    significance: [
      "土楼把防御、居住与家族组织压缩进一个高度紧凑的建筑单元。",
      "厚重外墙与内向型公共核心，体现了山地聚居社会的环境适应与协作逻辑。",
      "它是研究乡土建筑、社区生活与世界遗产活态保护关系的重要案例。",
    ],
    metrics: [
      { label: "基本材料", value: "生土夯筑", description: "外围厚墙通过夯土技术形成强大的围护与稳定效果。" },
      { label: "组织方式", value: "内向聚居", description: "生活、祭祀和协作围绕内部公共核心展开。" },
      { label: "常见形制", value: "圆楼 / 方楼", description: "不同形制共同回应地形、防御与家族规模需求。" },
    ],
    timeline: [
      { era: "宋元时期", title: "聚居模式发展", description: "适应山地环境与宗族生活的聚居建筑逐渐形成稳定模式。" },
      { era: "明清时期", title: "大型土楼成熟", description: "现今最具代表性的福建土楼多在明清时期形成成熟形态。" },
      { era: "2008", title: "列入世界遗产", description: "福建土楼被列入《世界遗产名录》，其社区与建筑价值获得国际认可。" },
    ],
    modules: [
      {
        id: "axis",
        title: "由外向内",
        strapline: "土楼的空间秩序不是向前展开，而是向内收拢。",
        summary:
          "土楼的阅读路径从厚重外墙开始，经过门楼与环形内廊，最终抵达祖堂或共享核心，体现出强烈的内向型秩序。",
        visualization: "axis",
        steps: [
          { title: "先见外墙", detail: "面对土楼时最先感受到的不是细部，而是围护体量的整体压迫感与稳定感。" },
          { title: "门楼控制进入", detail: "有限出入口让进出行为具有明确边界，也强化了安全感和社区感。" },
          { title: "中心成为公共核", detail: "进入内部后，真正的秩序焦点转移到共享空间与祖堂区域。" },
        ],
        facts: [
          { label: "空间特征", value: "外闭内开", description: "对外强调防护，对内强调共同生活与协作。" },
          { label: "路径方式", value: "由边界入核心", description: "土楼的秩序建立在由外到内的连续转换中。" },
          { label: "阅读提醒", value: "先看边界", description: "看懂外围厚墙，才能理解后续内部空间为何这样组织。" },
        ],
        takeaways: ["土楼是向内组织的建筑", "边界塑造安全感", "中心空间承担共同体意义"],
      },
      {
        id: "structure",
        title: "厚墙与木楼",
        strapline: "外圈夯土围护，内圈木构楼层，共同形成稳定复合体。",
        summary:
          "土楼的结构逻辑非常清楚：外围厚墙负责围护与整体稳定，内圈木构楼层承担日常居住和交通组织，两者协同完成大体量聚居。",
        visualization: "layers",
        steps: [
          { title: "夯土形成壳体", detail: "厚墙不仅承担防御作用，也提供隔热与整体稳定性能。" },
          { title: "木构形成生活层", detail: "楼层、走道和门窗系统让内部居住具有可分配、可通行的秩序。" },
          { title: "中心留出共享面", detail: "中部空场与公共建筑让家族活动有了稳定的共同舞台。" },
        ],
        facts: [
          { label: "结构策略", value: "壳体 + 内架", description: "外圈与内圈分工清晰，是土楼最值得理解的技术智慧。" },
          { label: "环境适应", value: "厚墙缓冲", description: "厚墙在山地气候条件下兼具围护与调节作用。" },
          { label: "空间结果", value: "层层围合", description: "围合带来的稳定感是土楼最鲜明的空间气质。" },
        ],
        takeaways: ["外围和内部功能分工明确", "厚墙是核心技术", "结构直接服务聚居组织"],
      },
      {
        id: "craft",
        title: "乡土营造",
        strapline: "材料朴素，但施工逻辑与生活经验高度成熟。",
        summary:
          "土楼不是“原始”的建筑，而是长期实践形成的成熟乡土营造体系，包含夯筑、木作、排水与维护经验的持续积累。",
        visualization: "timeline",
        steps: [
          { title: "因地取材", detail: "建筑材料直接来自周边环境，形成强烈的地方性特征。" },
          { title: "夯筑成墙", detail: "生土夯筑需要经验与协作，墙体质量决定整个建筑的稳定性。" },
          { title: "木作配合生活", detail: "楼层、栏杆、门窗和楼梯系统共同支撑日常居住秩序。" },
        ],
        facts: [
          { label: "工艺特征", value: "地方经验累积", description: "乡土建筑的成熟度，往往体现在看似朴素的做法背后。" },
          { label: "建造方式", value: "协作完成", description: "大型土楼离不开集体劳作和持续维护。" },
          { label: "观察重点", value: "墙体与楼层接口", description: "很多技术智慧都体现在土墙和木构的交接位置上。" },
        ],
        takeaways: ["朴素不等于简单", "工艺植根地方经验", "建造与社区协作密不可分"],
      },
      {
        id: "ornament",
        title: "共同体象征",
        strapline: "土楼的象征性更多来自共享秩序，而不是华丽装饰。",
        summary:
          "相较宫殿或园林，土楼的象征重心不在繁复纹样，而在门楼、祖堂、楹联和空间中心所表达的共同体意识。",
        visualization: "rings",
        steps: [
          { title: "门楼界定身份", detail: "进入方式被明确控制，门楼因此成为最强的边界符号。" },
          { title: "祖堂稳定中心", detail: "祭祀与聚会空间让内部秩序拥有清晰的精神焦点。" },
          { title: "楹联与名称赋义", detail: "文字、家族记忆和空间使用共同为建筑增添文化厚度。" },
        ],
        facts: [
          { label: "象征核心", value: "共同体先于个体", description: "土楼最重要的意义在于集体生活秩序，而不是单人审美表达。" },
          { label: "重点位置", value: "门楼与祖堂", description: "这两个节点最能体现土楼的边界与中心关系。" },
          { label: "阅读方法", value: "看共享规则", description: "理解谁共享什么，往往比看装饰图案更重要。" },
        ],
        takeaways: ["土楼象征来自组织方式", "祖堂是精神核心", "边界与中心共同塑造身份认同"],
      },
      {
        id: "preservation",
        title: "活态聚居保护",
        strapline: "遗产保护必须面对“仍在居住”这一现实条件。",
        summary:
          "福建土楼的难点在于很多案例仍然与社区生活相连。保护不仅要维护建筑本体，也要处理居住更新、旅游开发与社区利益之间的关系。",
        visualization: "timeline",
        steps: [
          { title: "建筑本体维护", detail: "夯土外墙、木构楼层与排水系统都需要持续巡检与修护。" },
          { title: "社区生活协同", detail: "活态遗产不能只按静态展品管理，居民需求必须被认真纳入。" },
          { title: "旅游与遗产平衡", detail: "展示价值越高，越需要避免把社区真实生活挤压成表演化景观。" },
        ],
        facts: [
          { label: "保护类型", value: "活态社区遗产", description: "它不是空置遗址，而是仍与日常生活连接的建筑类型。" },
          { label: "治理难点", value: "多方利益协调", description: "保护、居住、经营和展示常常同时出现并彼此拉扯。" },
          { label: "长期目标", value: "建筑与社区共存", description: "让建筑活下来，也让生活方式有尊严地延续。" },
        ],
        takeaways: ["活态保护比静态修复更复杂", "社区不是附属品", "遗产治理必须兼顾生活现实"],
      },
    ],
    sources: [
      { label: "UNESCO｜Fujian Tulou", url: "https://whc.unesco.org/en/list/1113/" },
    ],
  },
];

export const buildingsById = Object.fromEntries(
  buildingsData.map((building) => [building.id, building]),
) as Record<string, BuildingData>;
