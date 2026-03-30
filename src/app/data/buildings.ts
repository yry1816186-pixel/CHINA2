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
    imageUrl: "https://images.unsplash.com/photo-1569230967096-6a97cd9ea60c?w=800",
    poem: "金銮殿阁接层霄，紫禁城中独庄严",
    seal: "太",
    history: "太和殿始建于明永乐十八年（1420年），是紫禁城外朝三大殿中最核心的建筑。作为皇帝举行重大典礼的场所，太和殿见证了明清两代数百年的皇室历史。",
    features: "重檐庑殿顶，等级最高的屋顶形式；木构架系统，斗拱层层叠加；汉白玉台基，三层台阶体现礼制；金色琉璃瓦，皇权象征。",
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
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    poem: "祈年殿里拜苍穹，祈谷躬耕望丰收",
    seal: "祈",
    history: "祈年殿始建于明永乐十八年（1420年），原名大祀殿。明嘉靖二十四年（1545年）改为圆形三重檐建筑，更名祈年殿。清光绪十五年遭雷击焚毁后重建。",
    features: "圆形平面，象征天圆；三重檐攒尖顶，蓝色琉璃瓦；二十八根柱，象征二十八宿；祈谷礼仪建筑，体现农耕文明。",
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
    imageUrl: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=800",
    poem: "红山之巅布达拉，白宫红宫映雪山",
    seal: "佛",
    history: "布达拉宫始建于7世纪松赞干布时期，后成为历代达赖喇嘛的冬宫。17世纪五世达赖时期重建，形成今日规模。",
    features: "宫堡式建筑，依山而建；红宫与白宫分区，分别用于宗教仪式和行政办公；石木结构，厚墙窄窗，适应高原气候；金顶群聚，庄严宏伟。",
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
    imageUrl: "https://images.unsplash.com/photo-1537531383496-f4749b85f923?w=800",
    poem: "江南园林甲天下，留园精巧甲江南",
    seal: "园",
    history: "留园始建于明万历年间（1593年），原为太仆寺少卿徐泰时的私家园林。清嘉庆年间改名寒碧山庄，后改称留园。",
    features: "以太湖石闻名，假山与水池相映；建筑与山水自然融合；长廊曲折，通达各处；框景、借景手法精妙。",
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
      {
        id: "garden",
        title: "园林意境",
        strapline: "移步换景，漏窗取景，曲径通幽。",
        summary:
          "园林之美在于空间层次的精心编排。透过漏窗框景，沿着曲径前行，每一步都是一幅新的画卷。",
        visualization: "courtyard",
        steps: [
          { title: "漏窗取景", detail: "透过漏窗，框景入画，一步一景，移步换景。" },
          { title: "曲径通幽", detail: "蜿蜒小径，曲径通幽，峰回路转，柳暗花明。" },
          { title: "水映倒影", detail: "池水如镜，倒影成画，虚实相生，意境悠远。" },
        ],
        facts: [
          { label: "核心手法", value: "移步换景", description: "园林通过路径设计，让每一步都有新的发现。" },
          { label: "视觉技巧", value: "框景借景", description: "漏窗、门洞是园林的取景框。" },
          { label: "空间哲学", value: "小中见大", description: "有限空间创造无限意境。" },
        ],
        takeaways: ["园林是空间的艺术", "行走即是阅读", "框景创造意境"],
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
    imageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    poem: "客家土楼围成圆，血缘聚居共炊烟",
    seal: "土",
    history: "福建土楼起源于宋元时期，成熟于明清两代。是客家人的聚居建筑形式，融合了防御、宗族与山地农耕生活方式。",
    features: "生土夯筑外墙，厚实坚固；圆形或方形平面；内部木构楼层；中心为公共祠堂；防御性强，可抵御侵袭。",
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
      {
        id: "dwelling",
        title: "四时宜居",
        strapline: "冬暖夏凉，四季安康。",
        summary:
          "土楼建筑深谙自然之道，通过厚墙蓄热、天井通风、围合避风等设计，实现冬暖夏凉的居住体验。",
        visualization: "timeline",
        steps: [
          { title: "春", detail: "春暖花开，天井通风良好。" },
          { title: "夏", detail: "厚墙隔热，天井拔风降温。" },
          { title: "秋", detail: "秋高气爽，庭院晒谷休憩。" },
          { title: "冬", detail: "厚墙蓄热，围合避风聚暖。" },
        ],
        facts: [
          { label: "春季", value: "通风良好", description: "天井形成自然通风。" },
          { label: "夏季", value: "厚墙隔热", description: "生土墙体调节温度。" },
          { label: "冬季", value: "厚墙蓄热", description: "围合布局避风聚暖。" },
        ],
        takeaways: ["民居是智慧的结晶", "顺应自然是根本", "宜居是建筑的终极目标"],
      },
    ],
    sources: [
      { label: "UNESCO｜Fujian Tulou", url: "https://whc.unesco.org/en/list/1113/" },
    ],
  },
  {
    id: "zhuozhengyuan",
    name: "拙政园",
    englishName: "Humble Administrator's Garden",
    tagline: "江南园林之首，文人造园的巅峰典范。",
    dynasty: "明正德年间始建",
    location: "江苏苏州",
    category: "garden",
    illustration: "zhuozhengyuan",
    palette: ["#4a7c59", "#8b9dc3"],
    imageUrl: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800",
    poem: "拙政园中寻拙政，山水之间悟人生",
    seal: "拙",
    history: '拙政园始建于明正德四年（1509年），由御史王献臣始建，取《闲居赋》中"拙者之为政"之意命名。后多次易主，1860年太平天国战争期间部分被毁。',
    features: "以水为中心，山水萦绕；建筑精美，花木繁茂；江南水乡特色；典型的文人园林风格；窗洞借景，步移景异。",
    overview:
      "拙政园是中国四大名园之一，也是苏州园林中面积最大的古典山水园林。园以水为中心，山水萦绕，厅榭精美，花木繁茂，具有浓郁的江南水乡特色，被誉为中国私家园林的经典。",
    significance: [
      "体现了明代文人园林的审美理想，将诗画意境融入空间营造。",
      "以水为主体的布局手法，开创了江南园林的经典范式。",
      "园中亭台楼阁与自然山水相得益彰，展现中国园林「虽由人作，宛自天开」的造园理念。",
    ],
    metrics: [
      { label: "占地面积", value: "5.2公顷", description: "苏州园林中面积最大的古典园林。" },
      { label: "历史地位", value: "四大名园之一", description: "与北京颐和园、承德避暑山庄、苏州留园并称。" },
      { label: "遗产类型", value: "世界文化遗产", description: "1997年列入《世界遗产名录》。" },
    ],
    timeline: [
      {
        era: "明正德四年（1509）",
        title: "始建拙政园",
        description: "明代御史王献臣弃官归隐苏州，始建拙政园，取潘岳《闲居赋》「拙者之为政」之意命名。",
      },
      {
        era: "清代",
        title: "易主与扩建",
        description: "园林多次易主，经历多次修缮与扩建，形成东、中、西三部分格局。",
      },
      {
        era: "1997",
        title: "列入世界遗产",
        description: "苏州古典园林被列入《世界遗产名录》，拙政园是其中最具代表性的园林之一。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "水景为魂",
        strapline: "以水为骨架，构建园林的空间叙事。",
        summary:
          "拙政园以水为中心，三分之二面积为水面，亭台楼阁临水而建，形成「水陆相生」的空间格局。",
        visualization: "ring",
        steps: [
          { title: "远香堂", detail: "园中主厅，四面皆景，夏日荷香满堂。" },
          { title: "小飞虹", detail: "苏州园林中唯一的廊桥，凌空飞渡水面。" },
          { title: "香洲", detail: "仿舟舫建造的石舫，寄托文人隐逸之思。" },
        ],
        facts: [
          { label: "水面比例", value: "约60%", description: "以水为主体的布局特点。" },
          { label: "景观层次", value: "三段式", description: "远、中、近景层层递进。" },
          { label: "借景手法", value: "北寺塔", description: "将园外塔影借入园中，拓展空间感。" },
        ],
        takeaways: ["水是园林的灵魂", "借景拓展空间", "动静相宜的布局"],
      },
      {
        id: "structure",
        title: "厅堂轩榭",
        strapline: "建筑与自然的对话。",
        summary:
          "园中建筑类型丰富，厅、堂、轩、榭、亭、廊各有千秋，与水景、假山、花木共同构成完整的园林画面。",
        visualization: "layers",
        steps: [
          { title: "远香堂", detail: "四面厅建筑，四面设窗，可四面观景。" },
          { title: "倚玉轩", detail: "与远香堂隔水相望，形成对景。" },
          { title: "听雨轩", detail: "小院幽深，植芭蕉听雨声。" },
        ],
        facts: [
          { label: "建筑数量", value: "30余处", description: "类型各异，各有主题。" },
          { label: "命名艺术", value: "诗意命名", description: "建筑名称多取自诗词典故。" },
          { label: "空间关系", value: "疏密有致", description: "聚散开合，变化丰富。" },
        ],
        takeaways: ["建筑是园林的点睛之笔", "命名传达文化内涵", "空间节奏感至关重要"],
      },
      {
        id: "craft",
        title: "叠山理水",
        strapline: "人工与自然的完美融合。",
        summary:
          "园中假山多用太湖石堆叠，形态各异，与水池、植物共同营造出浓缩的自然山水意境。",
        visualization: "grid",
        steps: [
          { title: "假山", detail: "以太湖石堆叠，峰峦洞壑，变化多端。" },
          { title: "水体", detail: "池、溪、涧、瀑，水态各异。" },
          { title: "植物", detail: "荷、竹、梅、枫，四季有景。" },
        ],
        facts: [
          { label: "石材", value: "太湖石", description: "江南园林首选的叠山材料。" },
          { label: "叠山手法", value: "瘦、皱、漏、透", description: "太湖石的四字审美标准。" },
          { label: "植物配置", value: "四季分明", description: "春兰秋菊，夏荷冬梅。" },
        ],
        takeaways: ["叠山是园林的骨架", "理水是园林的灵魂", "植物是园林的衣裳"],
      },
      {
        id: "ornament",
        title: "诗画意境",
        strapline: "文人园林的精神内核。",
        summary:
          "拙政园处处体现文人的审美情趣，无论是建筑命名、匾额楹联，还是景点布局，都渗透着诗画意境。",
        visualization: "timeline",
        steps: [
          { title: "园名由来", detail: "取自潘岳《闲居赋》「拙者之为政」。" },
          { title: "匾额楹联", detail: "文征明等名家题写，增添文化底蕴。" },
          { title: "文脉传承", detail: "王献臣始建，历经多位文人雅士经营。" },
        ],
        facts: [
          { label: "初建者", value: "王献臣", description: "明代御史，弃官归隐苏州。" },
          { label: "文化关联", value: "文征明", description: "曾作《拙政园图咏》传世。" },
          { label: "园名典故", value: "拙者之为政", description: "表达隐逸情怀与政治理想。" },
        ],
        takeaways: ["园林是文人的精神家园", "诗画是园林的灵魂", "命名寄托理想"],
      },
      {
        id: "preservation",
        title: "遗产保护",
        strapline: "古典园林的当代传承。",
        summary:
          "作为世界文化遗产，拙政园的保护工作需要在保持历史风貌与满足游客需求之间寻求平衡。",
        visualization: "timeline",
        steps: [
          { title: "遗产监测", detail: "对建筑、水系、植物进行持续监测。" },
          { title: "游客管理", detail: "限流措施保护园林生态环境。" },
          { title: "文化传承", detail: "传统技艺的记录与传承。" },
        ],
        facts: [
          { label: "年游客量", value: "200万+", description: "需要精细化管理保护遗产。" },
          { label: "保护重点", value: "原真性", description: "保持历史风貌与工艺传统。" },
          { label: "传承方向", value: "活态遗产", description: "让古典园林活在当代。" },
        ],
        takeaways: ["保护与发展需要平衡", "传统技艺需要传承", "园林文化需要传播"],
      },
      {
        id: "garden",
        title: "园林意境",
        strapline: "移步换景，漏窗取景，曲径通幽。",
        summary:
          "园林之美在于空间层次的精心编排。透过漏窗框景，沿着曲径前行，每一步都是一幅新的画卷。",
        visualization: "courtyard",
        steps: [
          { title: "漏窗取景", detail: "透过漏窗，框景入画，一步一景，移步换景。" },
          { title: "曲径通幽", detail: "蜿蜒小径，曲径通幽，峰回路转，柳暗花明。" },
          { title: "水映倒影", detail: "池水如镜，倒影成画，虚实相生，意境悠远。" },
        ],
        facts: [
          { label: "核心手法", value: "移步换景", description: "园林通过路径设计，让每一步都有新的发现。" },
          { label: "视觉技巧", value: "框景借景", description: "漏窗、门洞是园林的取景框。" },
          { label: "空间哲学", value: "小中见大", description: "有限空间创造无限意境。" },
        ],
        takeaways: ["园林是空间的艺术", "行走即是阅读", "框景创造意境"],
      },
    ],
    sources: [
      { label: "UNESCO｜Classical Gardens of Suzhou", url: "https://whc.unesco.org/en/list/813/" },
    ],
  },
  {
    id: "yiheyuan",
    name: "颐和园",
    englishName: "Summer Palace",
    tagline: "中国现存最大的皇家园林。",
    dynasty: "清乾隆年间始建，光绪年间重建",
    location: "北京海淀区",
    category: "garden",
    illustration: "yiheyuan",
    palette: ["#2d5a4a", "#c9a961"],
    imageUrl: "https://images.unsplash.com/photo-1599909533683-6775c6e9c0b0?w=800",
    poem: "昆明湖上泛轻舟，万寿山中隐佛香",
    seal: "颐",
    history: "颐和园始建于清乾隆十五年（1750年），原名清漪园。1860年被英法联军焚毁，光绪十二年（1886年）挪用海军军费重建，改名颐和园。",
    features: "中国现存最大皇家园林；昆明湖与万寿山相依；长廊彩画闻名；佛香阁为全园制高点；借景西山，视野开阔。",
    overview:
      "颐和园是中国现存规模最大、保存最完整的皇家园林，以昆明湖、万寿山为基址，汲取江南园林的设计手法而建成，被誉为「皇家园林博物馆」。",
    significance: [
      "集中国古典园林艺术之大成，是皇家园林的巅峰之作。",
      "融合了北方园林的宏伟与江南园林的精致，体现了「虽由人作，宛自天开」的造园理念。",
      "长廊、石舫、十七孔桥等建筑成为中国园林艺术的标志性符号。",
    ],
    metrics: [
      { label: "占地面积", value: "290公顷", description: "中国现存最大的皇家园林。" },
      { label: "水面面积", value: "约220公顷", description: "昆明湖约占全园四分之三。" },
      { label: "遗产类型", value: "世界文化遗产", description: "1998年列入《世界遗产名录》。" },
    ],
    timeline: [
      {
        era: "清乾隆十五年（1750）",
        title: "始建清漪园",
        description: "乾隆皇帝为母祝寿，始建清漪园，历时十五年完工。",
      },
      {
        era: "清光绪十四年（1888）",
        title: "重建改名颐和园",
        description: "慈禧太后挪用海军经费重建，改名颐和园，成为晚清皇家园林的代表。",
      },
      {
        era: "1998",
        title: "列入世界遗产",
        description: "颐和园被列入《世界遗产名录》，被誉为「皇家园林博物馆」。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "山水格局",
        strapline: "一山一湖，构成园林的宏大骨架。",
        summary:
          "颐和园以万寿山、昆明湖为主体，山环水抱，形成「一池三山」的传统皇家园林格局。",
        visualization: "ring",
        steps: [
          { title: "万寿山", detail: "前山建筑密集，后山幽静自然。" },
          { title: "昆明湖", detail: "仿杭州西湖而建，烟波浩渺。" },
          { title: "西堤", detail: "仿西湖苏堤，六桥相望。" },
        ],
        facts: [
          { label: "造园理念", value: "一池三山", description: "蓬莱、方丈、瀛洲三仙岛意象。" },
          { label: "山水关系", value: "山环水抱", description: "山因水而活，水因山而媚。" },
          { label: "空间层次", value: "远近高低", description: "层次分明，景深深远。" },
        ],
        takeaways: ["山水是园林的骨架", "仿中有创的设计", "皇家气派的尺度"],
      },
      {
        id: "structure",
        title: "皇家建筑",
        strapline: "宫廷与园林的完美结合。",
        summary:
          "园内建筑既有宫廷的庄严肃穆，又有园林的活泼灵动，佛香阁、长廊、石舫等皆为经典之作。",
        visualization: "layers",
        steps: [
          { title: "佛香阁", detail: "全园标志，八角三层四重檐，高41米。" },
          { title: "长廊", detail: "全长728米，共273间，中国园林最长廊。" },
          { title: "石舫", detail: "仿西洋风格的石造船楼，寓意江山永固。" },
        ],
        facts: [
          { label: "长廊彩画", value: "14000余幅", description: "每幅彩画各不相同。" },
          { label: "建筑类型", value: "3000余间", description: "宫殿、寺庙、园林建筑俱全。" },
          { label: "十七孔桥", value: "150米长", description: "17个桥洞，544只石狮。" },
        ],
        takeaways: ["建筑是园林的点睛之笔", "中西合璧的创新", "皇家与民间的融合"],
      },
      {
        id: "craft",
        title: "造园技艺",
        strapline: "南北园林技艺的集大成者。",
        summary:
          "颐和园融合了北方园林的雄伟与江南园林的精致，集中国古典园林造园技艺之大成。",
        visualization: "grid",
        steps: [
          { title: "仿建西湖", detail: "昆明湖、西堤仿杭州西湖而建。" },
          { title: "移建江南", detail: "谐趣园仿无锡寄畅园。" },
          { title: "因地制宜", detail: "结合北方气候特点进行调整。" },
        ],
        facts: [
          { label: "设计理念", value: "集锦式", description: "荟萃南北园林精华。" },
          { label: "技艺特点", value: "移天缩地", description: "在君怀中容纳天下美景。" },
          { label: "文化价值", value: "园林百科", description: "中国古典园林的集大成者。" },
        ],
        takeaways: ["博采众长是创新的基础", "仿中有创的智慧", "园林是文化的载体"],
      },
      {
        id: "ornament",
        title: "文化意蕴",
        strapline: "皇家园林的文化密码。",
        summary:
          "颐和园处处蕴含深厚的文化意蕴，从建筑命名到景点布局，都体现着中国传统文化的精髓。",
        visualization: "timeline",
        steps: [
          { title: "园名寓意", detail: "颐养太和，颐养天年之意。" },
          { title: "长寿主题", detail: "万寿山、昆明湖，祝寿之意明显。" },
          { title: "典故传说", detail: "处处可见历史典故与神话传说。" },
        ],
        facts: [
          { label: "建造背景", value: "祝寿献礼", description: "乾隆为母祝寿而建。" },
          { label: "文化符号", value: "福寿吉祥", description: "处处体现祝寿祈福之意。" },
          { label: "历史事件", value: "戊戌变法", description: "与近代史紧密相连。" },
        ],
        takeaways: ["园林承载文化", "命名寄托寓意", "历史与当下的对话"],
      },
      {
        id: "preservation",
        title: "遗产保护",
        strapline: "皇家园林的当代使命。",
        summary:
          "作为世界文化遗产，颐和园的保护工作涉及古建筑维护、水体治理、植物养护等多个方面。",
        visualization: "timeline",
        steps: [
          { title: "古建修缮", detail: "遵循最小干预原则，保持历史原貌。" },
          { title: "昆明湖治理", detail: "水质改善与生态修复并重。" },
          { title: "文化传承", detail: "传统园林技艺的记录与传承。" },
        ],
        facts: [
          { label: "年游客量", value: "1000万+", description: "北京最受欢迎的景点之一。" },
          { label: "保护重点", value: "整体保护", description: "山水格局与建筑群落的完整性。" },
          { label: "传承方向", value: "活态展示", description: "让皇家园林文化走进大众。" },
        ],
        takeaways: ["遗产保护是长期工程", "传统与现代的平衡", "文化遗产属于全人类"],
      },
    ],
    sources: [
      { label: "UNESCO｜Summer Palace", url: "https://whc.unesco.org/en/list/880/" },
    ],
  },
  {
    id: "baimasi",
    name: "白马寺",
    englishName: "White Horse Temple",
    tagline: "中国第一古刹，佛教传入中国的起点。",
    dynasty: "东汉永平年间始建",
    location: "河南洛阳",
    category: "temple",
    illustration: "baimasi",
    palette: ["#8b4513", "#daa520"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "白马驮经入洛阳，中国佛寺源流长",
    seal: "佛",
    history: "白马寺建于东汉永平十一年（公元68年），是中国第一座官办佛教寺院。传说西域僧人以白马驮经而来，明帝为之建寺。",
    features: "中国第一古刹，佛教传入中国的标志；保存有清凉台、大殿等早期建筑形制；中轴对称布局，影响后世佛寺建筑；白马驮经像，纪念历史。",
    overview:
      "白马寺是中国第一座官办佛教寺院，被尊为「中国第一古刹」。东汉永平年间，汉明帝夜梦金人，遣使西域求法，白马驮经而来，始建此寺，标志着佛教正式传入中国。",
    significance: [
      "中国佛教的发源地，见证了佛教从印度传入中国的历史时刻。",
      "寺名「白马」纪念白马驮经的传说，成为中国佛教史上的重要符号。",
      "对中国佛教建筑形制、佛教文化传播产生了深远影响。",
    ],
    metrics: [
      { label: "建寺年代", value: "公元68年", description: "中国第一座官办寺院。" },
      { label: "历史地位", value: "祖庭", description: "中国佛教的「释源」和「祖庭」。" },
      { label: "遗产类型", value: "全国重点文保", description: "1961年首批国保单位。" },
    ],
    timeline: [
      {
        era: "东汉永平十一年（68）",
        title: "敕建白马寺",
        description: "汉明帝夜梦金人，遣使西域求法，白马驮经而归，敕建白马寺，为中国第一座官办寺院。",
      },
      {
        era: "北魏至清代",
        title: "历代重修",
        description: "历经多次战乱与重建，现存建筑多为明清时期重修，齐云塔为金代遗构。",
      },
      {
        era: "1961",
        title: "列入首批国保",
        description: "白马寺被列入首批全国重点文物保护单位，确立其在中国佛教史上的祖庭地位。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "中轴布局",
        strapline: "中国佛寺的标准范式。",
        summary:
          "白马寺采用传统中轴线布局，天王殿、大佛殿、大雄宝殿、接引殿、清凉台依次排列，形成严谨的空间序列。",
        visualization: "axis",
        steps: [
          { title: "山门", detail: "三孔拱门，象征三解脱门。" },
          { title: "天王殿", detail: "供奉弥勒佛与四大天王。" },
          { title: "大雄宝殿", detail: "主殿，供奉释迦牟尼佛。" },
        ],
        facts: [
          { label: "布局特点", value: "中轴对称", description: "中国佛寺的标准布局模式。" },
          { label: "殿宇数量", value: "五重殿宇", description: "层层递进，空间庄严。" },
          { label: "空间秩序", value: "由俗入圣", description: "从山门到主殿，渐入圣境。" },
        ],
        takeaways: ["中轴布局体现礼制", "空间序列引导信仰", "中国佛寺的标准范式"],
      },
      {
        id: "structure",
        title: "建筑演变",
        strapline: "千年古刹的建筑记忆。",
        summary:
          "白马寺现存建筑多为明清时期重建，但仍保留了传统佛寺的建筑形制与空间格局。",
        visualization: "layers",
        steps: [
          { title: "山门", detail: "明代重建，三孔拱门，古朴庄严。" },
          { title: "大雄宝殿", detail: "清代重建，面阔五间，进深三间。" },
          { title: "清凉台", detail: "传为汉明帝避暑处，后为译经场所。" },
        ],
        facts: [
          { label: "建筑年代", value: "明清为主", description: "历经多次重修与重建。" },
          { label: "建筑风格", value: "北方官式", description: "典型的北方佛寺风格。" },
          { label: "历史遗存", value: "齐云塔", description: "金代砖塔，高35米，13层。" },
        ],
        takeaways: ["建筑承载历史", "重建也是保护", "原址延续的传承"],
      },
      {
        id: "craft",
        title: "译经圣地",
        strapline: "佛教中国化的起点。",
        summary:
          "白马寺是中国最早的译经场所，摄摩腾、竺法兰在此翻译了中国第一部佛经《四十二章经》。",
        visualization: "grid",
        steps: [
          { title: "摄摩腾", detail: "中天竺高僧，白马驮经来华。" },
          { title: "竺法兰", detail: "与摄摩腾共同译经的印度高僧。" },
          { title: "四十二章经", detail: "中国第一部汉译佛经。" },
        ],
        facts: [
          { label: "译经数量", value: "多部经典", description: "开启了佛经汉译的历史。" },
          { label: "历史意义", value: "佛教汉化", description: "佛教中国化的起点。" },
          { label: "文化影响", value: "深远", description: "对中国文化产生巨大影响。" },
        ],
        takeaways: ["白马驮经的传说", "译经是文化传播的关键", "佛教中国化的起点"],
      },
      {
        id: "ornament",
        title: "文化符号",
        strapline: "白马驮经的历史记忆。",
        summary:
          "白马寺处处可见白马驮经的文化符号，山门前的石马、殿内的壁画，都在讲述着佛教传入中国的故事。",
        visualization: "timeline",
        steps: [
          { title: "汉明帝梦金人", detail: "夜梦金人，顶有白光，遂遣使求法。" },
          { title: "白马驮经", detail: "西域使者在月氏遇高僧，白马驮经东归。" },
          { title: "建寺纪念", detail: "为纪念白马驮经之功，故名白马寺。" },
        ],
        facts: [
          { label: "寺名由来", value: "白马驮经", description: "纪念白马驮经的历史功绩。" },
          { label: "石马", value: "宋代石雕", description: "山门前两尊石马为宋代遗物。" },
          { label: "历史价值", value: "文化起点", description: "佛教传入中国的标志。" },
        ],
        takeaways: ["白马是文化符号", "传说与历史的交织", "佛教中国化的见证"],
      },
      {
        id: "preservation",
        title: "遗产传承",
        strapline: "千年古刹的当代使命。",
        summary:
          "作为中国佛教的祖庭，白马寺的保护不仅是文物保护，更是佛教文化的传承与弘扬。",
        visualization: "timeline",
        steps: [
          { title: "文物保护", detail: "古建筑、碑刻、文物的系统保护。" },
          { title: "佛教传承", detail: "延续千年法脉，弘扬佛教文化。" },
          { title: "国际交流", detail: "泰国、缅甸、印度风格佛殿的修建。" },
        ],
        facts: [
          { label: "保护级别", value: "国保单位", description: "1961年首批全国重点文保。" },
          { label: "国际影响", value: "世界佛教圣地", description: "各国佛教徒朝圣之地。" },
          { label: "文化传承", value: "祖庭地位", description: "中国佛教的发源地。" },
        ],
        takeaways: ["祖庭地位不可替代", "文物保护与文化传承并重", "佛教文化的国际交流"],
      },
    ],
    sources: [
      { label: "白马寺官网", url: "http://www.chinabaimasi.org/" },
    ],
  },
  {
    id: "xuankongsi",
    name: "悬空寺",
    englishName: "Hanging Temple",
    tagline: "悬挂于绝壁之上的建筑奇迹。",
    dynasty: "北魏晚期始建",
    location: "山西浑源恒山金龙峡",
    category: "temple",
    illustration: "xuankongsi",
    palette: ["#8b4513", "#a0522d"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "空中楼阁悬半空，恒山峭壁见神工",
    seal: "悬",
    history: "悬空寺始建于北魏晚期（约471-499年），现存建筑多为明清时期重建。是国内唯一的佛、道、儒三教合一的寺庙。",
    features: "悬挂于峭壁之上，下方以木柱支撑；建筑高低错落，与崖壁融为一体；三教合一，融合不同宗教文化；登临其上有腾空之感。",
    overview:
      "悬空寺始建于北魏晚期，是中国仅存的佛、道、儒三教合一的独特寺庙。寺内建筑悬挂于恒山金龙峡西侧翠屏峰的峭壁间，以「奇、悬、巧」著称于世。",
    significance: [
      "中国古代建筑史上的奇迹，展示了卓越的建筑智慧与技艺。",
      "佛、道、儒三教合一的典范，体现了中国宗教文化的包容性。",
      "选址于绝壁之上，巧妙利用地形，是中国山地建筑的杰出代表。",
    ],
    metrics: [
      { label: "建寺年代", value: "公元491年", description: "距今1500多年历史。" },
      { label: "距地面高度", value: "约50米", description: "悬挂于峭壁之上。" },
      { label: "建筑数量", value: "40间", description: "殿宇楼阁共40间。" },
    ],
    timeline: [
      {
        era: "北魏太和十五年（491）",
        title: "始建悬空寺",
        description: "北魏晚期，悬空寺始建于恒山金龙峡峭壁之上，开创了悬崖建筑的先河。",
      },
      {
        era: "明清时期",
        title: "修缮与延续",
        description: "历经多次修缮，现存建筑多为明清时期重建，保持了原有的悬空结构特色。",
      },
      {
        era: "1982",
        title: "列入国保单位",
        description: "悬空寺被列入全国重点文物保护单位，成为研究中国古代山地建筑的重要案例。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "绝壁选址",
        strapline: "在不可能的地方建造可能。",
        summary:
          "悬空寺选址于金龙峡峭壁凹陷处，上方有岩檐遮挡，避免了落石与雨水侵蚀，体现了古代工匠的智慧。",
        visualization: "layers",
        steps: [
          { title: "地形选择", detail: "峭壁凹陷处，上有岩檐遮挡。" },
          { title: "地质条件", detail: "岩石坚固，适合插入横梁。" },
          { title: "气候考量", detail: "峡谷风道，减少积水积雪。" },
        ],
        facts: [
          { label: "选址智慧", value: "因地制宜", description: "利用自然地形优势。" },
          { label: "防护措施", value: "岩檐遮挡", description: "避免落石与雨水侵蚀。" },
          { label: "安全考量", value: "峡谷风口", description: "风干木材，减少腐朽。" },
        ],
        takeaways: ["选址是建筑的第一步", "因地制宜的智慧", "尊重自然的建筑观"],
      },
      {
        id: "structure",
        title: "悬空结构",
        strapline: "力学与美学的完美结合。",
        summary:
          "悬空寺采用「半插飞梁为基，巧借岩石暗托」的结构方式，横梁插入岩石，立柱支撑，形成稳固的悬空体系。",
        visualization: "layers",
        steps: [
          { title: "横梁", detail: "插入岩石深处，是主要承重构件。" },
          { title: "立柱", detail: "支撑横梁，分担重量。" },
          { title: "廊道", detail: "连接各殿，悬空于峭壁之外。" },
        ],
        facts: [
          { label: "结构原理", value: "杠杆原理", description: "横梁深入岩石，形成稳固支撑。" },
          { label: "木材处理", value: "桐油浸泡", description: "防腐防虫，延长寿命。" },
          { label: "弹性设计", value: "柔性结构", description: "适应地震与风力。" },
        ],
        takeaways: ["结构是建筑的根本", "力学原理的巧妙运用", "木材是灵活的建材"],
      },
      {
        id: "craft",
        title: "建筑技艺",
        strapline: "悬崖上的木构建筑杰作。",
        summary:
          "悬空寺的建筑完全采用中国传统木构建筑技艺，榫卯结构、斗拱飞檐，在极端条件下展现了木构建筑的极限可能。",
        visualization: "grid",
        steps: [
          { title: "榫卯结构", detail: "不用一钉，全靠榫卯连接。" },
          { title: "斗拱系统", detail: "分散荷载，增加出檐深度。" },
          { title: "飞檐翘角", detail: "利于排水，增添美感。" },
        ],
        facts: [
          { label: "建筑特点", value: "木构为主", description: "中国传统木构建筑技艺。" },
          { label: "连接方式", value: "榫卯结构", description: "不用钉子，全靠木构件连接。" },
          { label: "抗震性能", value: "柔性结构", description: "木材的弹性有利于抗震。" },
        ],
        takeaways: ["传统技艺的极致应用", "榫卯是木构建筑的灵魂", "建筑是技艺的载体"],
      },
      {
        id: "ornament",
        title: "三教合一",
        strapline: "宗教融合的独特样本。",
        summary:
          "悬空寺是世界上现存唯一的佛、道、儒三教合一的寺庙，体现了中国宗教文化的包容与融合。",
        visualization: "ring",
        steps: [
          { title: "佛教", detail: "释迦牟尼、观音菩萨等佛教造像。" },
          { title: "道教", detail: "老子、关羽等道教神祇。" },
          { title: "儒家", detail: "孔子及其弟子的塑像。" },
        ],
        facts: [
          { label: "宗教融合", value: "三教合一", description: "佛、道、儒同处一寺。" },
          { label: "文化意义", value: "包容精神", description: "体现中国宗教的包容性。" },
          { label: "塑像数量", value: "80余尊", description: "铜、铁、石、泥各种材质。" },
        ],
        takeaways: ["宗教融合是中国特色", "包容是文化的生命力", "悬空寺是文化符号"],
      },
      {
        id: "preservation",
        title: "保护挑战",
        strapline: "极端环境下的遗产保护。",
        summary:
          "悬空寺的保护面临地形险峻、气候变化、游客压力等多重挑战，需要创新的保护策略。",
        visualization: "timeline",
        steps: [
          { title: "结构监测", detail: "持续监测横梁、立柱的状态。" },
          { title: "游客管理", detail: "限流措施保护建筑安全。" },
          { title: "环境保护", detail: "维护周边生态与地质稳定。" },
        ],
        facts: [
          { label: "保护级别", value: "国保单位", description: "全国重点文物保护单位。" },
          { label: "游客限制", value: "严格限流", description: "控制同时登寺人数。" },
          { label: "监测重点", value: "结构安全", description: "横梁、立柱的状态监测。" },
        ],
        takeaways: ["极端环境的保护更难", "限流是必要的保护措施", "持续监测是关键"],
      },
    ],
    sources: [
      { label: "山西文旅｜悬空寺", url: "https://www.sxta.gov.cn/" },
    ],
  },
  {
    id: "shaolinsi",
    name: "少林寺",
    englishName: "Shaolin Temple",
    tagline: "禅宗祖庭，少林武术的发源地。",
    dynasty: "北魏太和年间始建",
    location: "河南登封嵩山",
    category: "temple",
    illustration: "shaolinsi",
    palette: ["#8b4513", "#daa520"],
    imageUrl: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800",
    poem: "嵩山少林禅武韵，达摩面壁悟心灯",
    seal: "禅",
    history: "少林寺始建于北魏太和十九年（495年），孝文帝为安顿印度僧人跋陀而建。达摩祖师曾在此面壁九年，创立禅宗。",
    features: "禅宗祖庭，武术发源地；塔林为中国现存最大塔林；常住院建筑保持明清格局；少林功夫名扬四海。",
    overview: "少林寺是中国佛教禅宗祖庭，始建于北魏太和十九年，因坐落于嵩山少室山茂密丛林之中而得名。少林寺以禅宗文化和少林武术闻名于世，被誉为「天下第一名刹」。",
    significance: [
      "禅宗的发源地，达摩祖师在此面壁九年，开创中国禅宗。",
      "少林武术的发源地，少林功夫成为中国武术的代表符号。",
      "少林寺塔林是中国现存规模最大的塔林，记录了千年的佛教传承。",
    ],
    metrics: [
      { label: "建寺年代", value: "公元495年", description: "北魏孝文帝为印度高僧跋陀而建。" },
      { label: "塔林规模", value: "240余座", description: "中国现存规模最大的塔林。" },
      { label: "遗产类型", value: "世界文化遗产", description: "2010年列入《世界遗产名录》。" },
    ],
    timeline: [
      {
        era: "北魏太和十九年（495）",
        title: "始建少林寺",
        description: "北魏孝文帝为印度高僧跋陀敕建少林寺，因坐落于嵩山少室山茂密丛林之中而得名。",
      },
      {
        era: "北魏孝昌三年（527）",
        title: "达摩开创禅宗",
        description: "菩提达摩祖师来华，在少林寺面壁九年，开创中国禅宗，少林寺成为禅宗祖庭。",
      },
      {
        era: "2010",
        title: "列入世界遗产",
        description: "登封「天地之中」历史建筑群被列入《世界遗产名录》，少林寺是其中的核心组成部分。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "山门中轴",
        strapline: "从山门到大殿的空间序列。",
        summary:
          "少林寺依山而建，从山门到大雄宝殿形成层层递进的空间序列，体现了佛寺的传统布局。",
        visualization: "axis",
        steps: [
          { title: "山门", detail: "康熙御书「少林寺」匾额。" },
          { title: "天王殿", detail: "供奉弥勒佛与四大天王。" },
          { title: "大雄宝殿", detail: "主殿，供奉释迦牟尼佛。" },
        ],
        facts: [
          { label: "布局特点", value: "依山就势", description: "顺应地形，层层抬升。" },
          { label: "空间序列", value: "三进院落", description: "山门、天王殿、大雄宝殿。" },
          { label: "匾额", value: "康熙御书", description: "山门匾额为康熙皇帝亲笔。" },
        ],
        takeaways: ["依山就势的布局", "空间序列引导信仰", "皇权与佛教的互动"],
      },
      {
        id: "structure",
        title: "塔林建筑",
        strapline: "千年高僧的最后归宿。",
        summary:
          "少林寺塔林是中国现存规模最大的古塔群，保存了从唐到清各代墓塔240余座，是研究中国古塔建筑演变的珍贵实物资料。",
        visualization: "layers",
        steps: [
          { title: "唐塔", detail: "法如禅师塔，为塔林中最古老的墓塔。" },
          { title: "宋塔", detail: "多为砖石结构，造型简洁。" },
          { title: "明清塔", detail: "数量最多，风格多样。" },
        ],
        facts: [
          { label: "塔林规模", value: "240余座", description: "中国现存最大的塔林。" },
          { label: "时间跨度", value: "唐至清", description: "跨越千年，记录佛教传承。" },
          { label: "建筑类型", value: "多样", description: "单层、多层、密檐式等。" },
        ],
        takeaways: ["塔林是佛教传承的见证", "建筑风格的演变记录", "高僧的最后归宿"],
      },
      {
        id: "craft",
        title: "禅武合一",
        strapline: "禅宗与武术的融合。",
        summary:
          "少林寺以禅宗和武术闻名于世，「禅武合一」的理念将修行与武术结合，形成了独特的少林文化。",
        visualization: "ring",
        steps: [
          { title: "达摩面壁", detail: "达摩祖师在少林寺面壁九年，开创禅宗。" },
          { title: "少林武术", detail: "僧人习武强身，形成独特的武术体系。" },
          { title: "禅武合一", detail: "以武修禅，以禅养武。" },
        ],
        facts: [
          { label: "禅宗起源", value: "达摩祖师", description: "在少林寺开创中国禅宗。" },
          { label: "少林武术", value: "七十二绝技", description: "少林功夫的核心内容。" },
          { label: "文化价值", value: "非遗项目", description: "少林功夫列入国家非遗。" },
        ],
        takeaways: ["禅与武的统一", "修行的多种形式", "文化的传承与创新"],
      },
      {
        id: "ornament",
        title: "千佛殿壁画",
        strapline: "明代壁画的珍贵遗存。",
        summary:
          "少林寺千佛殿内保存有明代壁画，描绘五百罗汉朝毗卢佛的场景，是研究明代佛教艺术的珍贵资料。",
        visualization: "timeline",
        steps: [
          { title: "壁画内容", detail: "五百罗汉朝毗卢佛。" },
          { title: "绘制年代", detail: "明代，距今约500年。" },
          { title: "艺术价值", detail: "研究明代佛教艺术的珍贵资料。" },
        ],
        facts: [
          { label: "壁画面积", value: "320平方米", description: "规模宏大的明代壁画。" },
          { label: "绘制年代", value: "明代", description: "距今约500年历史。" },
          { label: "艺术特点", value: "线条流畅", description: "人物生动，色彩鲜艳。" },
        ],
        takeaways: ["壁画是历史的见证", "佛教艺术的珍贵遗存", "明代绘画的典型代表"],
      },
      {
        id: "preservation",
        title: "遗产保护",
        strapline: "千年古刹的当代使命。",
        summary:
          "作为世界文化遗产，少林寺的保护涉及古建筑、塔林、壁画等多个方面，同时需要平衡文物保护与旅游开发。",
        visualization: "timeline",
        steps: [
          { title: "建筑修缮", detail: "修复受损的古建筑，保持历史风貌。" },
          { title: "塔林保护", detail: "对墓塔进行加固与监测。" },
          { title: "武术传承", detail: "少林功夫的传承与弘扬。" },
        ],
        facts: [
          { label: "保护级别", value: "世界遗产", description: "登封「天地之中」历史建筑群。" },
          { label: "年游客量", value: "数百万", description: "需要精细化管理。" },
          { label: "传承重点", value: "禅武文化", description: "禅宗与武术的双重传承。" },
        ],
        takeaways: ["文物保护与文化传承并重", "旅游开发需要平衡", "禅武文化是核心价值"],
      },
    ],
    sources: [
      { label: "UNESCO｜Dengfeng", url: "https://whc.unesco.org/en/list/1305/" },
    ],
  },
  {
    id: "famensi",
    name: "法门寺",
    englishName: "Famen Temple",
    tagline: "供奉释迦牟尼佛指骨舍利的皇家寺院。",
    dynasty: "东汉末年始建，唐代鼎盛",
    location: "陕西宝鸡扶风县",
    category: "temple",
    illustration: "famensi",
    palette: ["#daa520", "#ffd700"],
    imageUrl: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800",
    poem: "法门寺中藏佛指，千年舍利耀红尘",
    seal: "佛",
    history: "法门寺始建于东汉年间，因供奉释迦牟尼佛指骨舍利而成为佛教圣地。1987年地宫出土大量唐代珍贵文物，轰动世界。",
    features: "供奉佛指骨舍利；唐代皇家寺院；地宫出土大量珍贵文物；合十舍利塔为标志性建筑。",
    overview: "法门寺因供奉释迦牟尼佛指骨舍利而闻名于世，是中国佛教的圣地之一。唐代时期，法门寺成为皇家寺院，多次迎奉佛舍利入宫供养，留下了大量珍贵的唐代文物。",
    significance: [
      "供奉释迦牟尼佛真身指骨舍利，是佛教徒朝圣的重要目的地。",
      "1987年地宫出土大量唐代珍贵文物，被誉为「世界第九大奇迹」。",
      "唐代皇家寺院的历史地位，体现了佛教与中国政治的密切关系。",
    ],
    metrics: [
      { label: "建寺年代", value: "约公元2世纪", description: "东汉末年始建。" },
      { label: "地宫文物", value: "2000余件", description: "1987年出土的唐代文物。" },
      { label: "舍利等级", value: "佛指舍利", description: "释迦牟尼真身指骨舍利。" },
    ],
    timeline: [
      {
        era: "东汉末年（约2世纪）",
        title: "始建法门寺",
        description: "法门寺始建，因供奉释迦牟尼佛指骨舍利而闻名，成为佛教圣地。",
      },
      {
        era: "唐代",
        title: "皇家寺院鼎盛",
        description: "法门寺成为皇家寺院，唐代皇帝多次迎奉佛舍利入宫供养，留下大量珍贵文物。",
      },
      {
        era: "1987",
        title: "地宫重大发现",
        description: "法门寺地宫意外发现，出土佛指舍利和2000余件唐代珍贵文物，被誉为「世界第九大奇迹」。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "中轴布局",
        strapline: "皇家寺院的庄严空间。",
        summary:
          "法门寺采用传统中轴线布局，山门、天王殿、大雄宝殿、真身宝塔依次排列，形成庄严的空间序列。",
        visualization: "axis",
        steps: [
          { title: "山门", detail: "佛光门，进入寺院的第一道门。" },
          { title: "大雄宝殿", detail: "主殿，供奉释迦牟尼佛。" },
          { title: "真身宝塔", detail: "供奉佛指舍利的核心建筑。" },
        ],
        facts: [
          { label: "布局特点", value: "中轴对称", description: "皇家寺院的庄严格局。" },
          { label: "空间层次", value: "层层递进", description: "从山门到宝塔的空间序列。" },
          { label: "核心建筑", value: "真身宝塔", description: "供奉佛指舍利的核心。" },
        ],
        takeaways: ["中轴布局体现礼制", "空间序列引导信仰", "皇家寺院的气派"],
      },
      {
        id: "structure",
        title: "地宫发现",
        strapline: "沉睡千年的唐代宝藏。",
        summary:
          "1987年，法门寺地宫被意外发现，出土了佛指舍利和大量唐代珍贵文物，包括金银器、瓷器、丝织品等，是研究唐代历史文化的珍贵资料。",
        visualization: "layers",
        steps: [
          { title: "地宫结构", detail: "唐代的石构地宫，保存完好。" },
          { title: "佛指舍利", detail: "释迦牟尼真身指骨舍利。" },
          { title: "唐代文物", detail: "金银器、秘色瓷、丝织品等。" },
        ],
        facts: [
          { label: "发现时间", value: "1987年", description: "因宝塔倒塌修缮而发现。" },
          { label: "文物数量", value: "2000余件", description: "唐代皇家供养的珍贵文物。" },
          { label: "历史价值", value: "世界级", description: "被誉为「世界第九大奇迹」。" },
        ],
        takeaways: ["地宫是时间的胶囊", "文物是历史的见证", "意外发现改变历史认知"],
      },
      {
        id: "craft",
        title: "唐代文物",
        strapline: "皇家供养的艺术珍品。",
        summary:
          "法门寺地宫出土的唐代文物包括金银器、秘色瓷、丝织品等，代表了唐代工艺的最高水平。",
        visualization: "grid",
        steps: [
          { title: "金银器", detail: "皇家供奉的金银法器与器皿。" },
          { title: "秘色瓷", detail: "首次发现的唐代秘色瓷实物。" },
          { title: "丝织品", detail: "唐代皇室供奉的丝织品。" },
        ],
        facts: [
          { label: "金银器", value: "121件", description: "工艺精湛的唐代金银器。" },
          { label: "秘色瓷", value: "首次证实", description: "解开了秘色瓷的千古之谜。" },
          { label: "丝织品", value: "700余件", description: "保存完好的唐代丝织品。" },
        ],
        takeaways: ["文物反映时代工艺水平", "皇家供养体现信仰虔诚", "考古发现填补历史空白"],
      },
      {
        id: "ornament",
        title: "佛指舍利",
        strapline: "佛教徒心中的圣物。",
        summary:
          "法门寺供奉的释迦牟尼佛指骨舍利是世界上唯一现存的佛指舍利，是佛教徒心中的圣物。",
        visualization: "ring",
        steps: [
          { title: "舍利来源", detail: "释迦牟尼涅槃后的真身舍利。" },
          { title: "供奉历史", detail: "唐代多次迎奉入宫供养。" },
          { title: "当代供奉", detail: "新建合十舍利塔永久供奉。" },
        ],
        facts: [
          { label: "舍利等级", value: "佛指舍利", description: "释迦牟尼真身指骨。" },
          { label: "世界唯一", value: "独一无二", description: "世界上唯一现存的佛指舍利。" },
          { label: "信仰价值", value: "圣地", description: "佛教徒朝圣的重要目的地。" },
        ],
        takeaways: ["舍利是佛教的圣物", "信仰的力量跨越时空", "圣地承载精神寄托"],
      },
      {
        id: "preservation",
        title: "当代传承",
        strapline: "古老寺院的现代使命。",
        summary:
          "法门寺的保护不仅涉及古建筑和文物，还包括新建的合十舍利塔，体现了传统与现代的融合。",
        visualization: "timeline",
        steps: [
          { title: "文物保存", detail: "地宫出土文物的保护与展示。" },
          { title: "古建修缮", detail: "明代的真身宝塔得到修复保护。" },
          { title: "新建建筑", detail: "合十舍利塔，现代建筑与传统的对话。" },
        ],
        facts: [
          { label: "保护重点", value: "文物+建筑", description: "出土文物与古建筑的双重保护。" },
          { label: "新建舍利塔", value: "合十造型", description: "2009年建成，现代设计语言。" },
          { label: "传承方向", value: "传统与现代", description: "古老信仰的当代表达。" },
        ],
        takeaways: ["保护与发展可以并行", "传统与现代的对话", "信仰在当代的延续"],
      },
    ],
    sources: [
      { label: "法门寺官网", url: "http://www.famensi.com/" },
    ],
  },
  {
    id: "guanquelou",
    name: "鹳雀楼",
    englishName: "Stork Tower",
    tagline: "白日依山尽，黄河入海流。",
    dynasty: "北周始建，1997年重建",
    location: "山西永济蒲州古城",
    category: "tower",
    illustration: "guanquelou",
    palette: ["#8b4513", "#daa520"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。",
    seal: "楼",
    history: "鹳雀楼始建于北周时期，因常有鹳雀栖息而得名。唐代诗人王之涣登楼作诗，使其闻名天下。原楼毁于元代，1997年重建。",
    features: "仿唐式楼阁建筑；三重檐结构；位于黄河岸边；登楼可观壮丽河山。",
    overview:
      "鹳雀楼是中国四大名楼之一，因王之涣《登鹳雀楼》诗而闻名天下。楼原建于北周，历经隋唐宋金，元代毁于战火，1997年重建。登楼远眺，黄河壮阔，山河壮丽。",
    significance: [
      "因王之涣「欲穷千里目，更上一层楼」诗句而成为千古名楼。",
      "是中国古代四大名楼之一，具有深厚的文化底蕴。",
      "重建后的鹳雀楼是国内唯一采用唐代彩画艺术的仿唐建筑。",
    ],
    metrics: [
      { label: "楼高", value: "73.9米", description: "四檐三层，总高73.9米。" },
      { label: "始建年代", value: "约557-571年", description: "北周时期始建。" },
      { label: "重建年代", value: "1997年", description: "在原址附近重建。" },
    ],
    timeline: [
      {
        era: "北周（557-571）",
        title: "始建鹳雀楼",
        description: "北周时期，鹳雀楼始建于蒲州古城西郊黄河东岸，因常有鹳雀栖息而得名。",
      },
      {
        era: "元初（约13世纪）",
        title: "毁于战火",
        description: "鹳雀楼毁于金元战火，仅存遗址，王之涣《登鹳雀楼》诗使其名垂千古。",
      },
      {
        era: "1997",
        title: "重建鹳雀楼",
        description: "在原址附近重建鹳雀楼，采用仿唐建筑风格，是国内唯一采用唐代彩画艺术的仿古建筑。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "楼阁选址",
        strapline: "依山傍水的绝佳位置。",
        summary:
          "鹳雀楼选址于黄河东岸，西望华山，北瞰龙门，登楼可俯瞰黄河奔腾入海的壮丽景象。",
        visualization: "layers",
        steps: [
          { title: "黄河", detail: "楼前黄河奔腾而过，气势磅礴。" },
          { title: "中条山", detail: "楼后群山连绵，风景秀丽。" },
          { title: "蒲津渡", detail: "古代黄河重要渡口，战略要地。" },
        ],
        facts: [
          { label: "地理位置", value: "黄河东岸", description: "山西永济蒲州古城西郊。" },
          { label: "视野", value: "极佳", description: "西望华山，北瞰龙门。" },
          { label: "战略意义", value: "军事要地", description: "蒲津渡是古代重要渡口。" },
        ],
        takeaways: ["选址决定建筑的灵魂", "山水是楼阁的背景", "地理位置成就文化价值"],
      },
      {
        id: "structure",
        title: "楼阁结构",
        strapline: "唐代风格的仿古建筑。",
        summary:
          "重建的鹳雀楼采用仿唐建筑风格，四檐三层，高73.9米，是国内唯一采用唐代彩画艺术的仿唐建筑。",
        visualization: "layers",
        steps: [
          { title: "台基", detail: "高大的台基，奠定庄重的气势。" },
          { title: "楼身", detail: "四檐三层，层层出檐。" },
          { title: "彩画", detail: "采用唐代彩画艺术，色彩绚丽。" },
        ],
        facts: [
          { label: "建筑风格", value: "仿唐建筑", description: "参照唐代建筑风格重建。" },
          { label: "彩画艺术", value: "唐代彩画", description: "国内唯一采用唐代彩画。" },
          { label: "结构特点", value: "四檐三层", description: "高73.9米，气势恢宏。" },
        ],
        takeaways: ["仿古不是复制", "彩画是建筑的衣裳", "唐代风格恢宏大气"],
      },
      {
        id: "craft",
        title: "诗词文化",
        strapline: "登高望远的文化意象。",
        summary:
          "鹳雀楼因王之涣《登鹳雀楼》诗而名扬天下，「欲穷千里目，更上一层楼」成为千古名句。",
        visualization: "timeline",
        steps: [
          { title: "王之涣", detail: "唐代诗人，作《登鹳雀楼》诗。" },
          { title: "白日依山尽", detail: "描绘夕阳西下的壮丽景象。" },
          { title: "欲穷千里目", detail: "表达登高望远的壮志豪情。" },
        ],
        facts: [
          { label: "诗人", value: "王之涣", description: "唐代著名诗人。" },
          { label: "诗作", value: "《登鹳雀楼》", description: "千古流传的名篇。" },
          { label: "名句", value: "欲穷千里目", description: "激励后人登高望远的座右铭。" },
        ],
        takeaways: ["诗词赋予建筑灵魂", "登高是文化意象", "楼阁承载文化记忆"],
      },
      {
        id: "ornament",
        title: "四大名楼",
        strapline: "中国楼阁文化的代表。",
        summary:
          "鹳雀楼与黄鹤楼、岳阳楼、滕王阁并称中国四大名楼，代表了中国楼阁建筑文化的最高成就。",
        visualization: "ring",
        steps: [
          { title: "黄鹤楼", detail: "武汉，因崔颢诗而闻名。" },
          { title: "岳阳楼", detail: "岳阳，因范仲淹文而传世。" },
          { title: "滕王阁", detail: "南昌，因王勃序而流芳。" },
        ],
        facts: [
          { label: "四大名楼", value: "文化地标", description: "中国楼阁文化的代表。" },
          { label: "共同特点", value: "诗词名篇", description: "每座楼都有传世名篇。" },
          { label: "文化价值", value: "深远", description: "影响中国文化千余年。" },
        ],
        takeaways: ["名楼因诗文而名", "楼阁是文化的载体", "登高望远是中国人的情怀"],
      },
      {
        id: "preservation",
        title: "重建传承",
        strapline: "古老楼阁的当代重生。",
        summary:
          "原楼元代毁于战火，1997年在原址附近重建，重建工作参考了大量历史文献，力求还原唐代风貌。",
        visualization: "timeline",
        steps: [
          { title: "原楼毁坏", detail: "元代毁于战火，仅存遗址。" },
          { title: "重建决策", detail: "1992年决定重建，1997年完工。" },
          { title: "文化传承", detail: "成为永济市的文化地标。" },
        ],
        facts: [
          { label: "重建时间", value: "1997年", description: "在原址附近重建。" },
          { label: "参考依据", value: "历史文献", description: "参照大量史料重建。" },
          { label: "文化价值", value: "地标建筑", description: "永济市的文化名片。" },
        ],
        takeaways: ["重建是文化传承", "历史可以延续", "楼阁承载城市记忆"],
      },
    ],
    sources: [
      { label: "山西文旅｜鹳雀楼", url: "https://www.sxta.gov.cn/" },
    ],
  },
  {
    id: "huanghelou",
    name: "黄鹤楼",
    englishName: "Yellow Crane Tower",
    tagline: "昔人已乘黄鹤去，此地空余黄鹤楼。",
    dynasty: "三国始建，1985年重建",
    location: "湖北武汉蛇山",
    category: "tower",
    illustration: "huanghelou",
    palette: ["#daa520", "#8b4513"],
    imageUrl: "https://images.unsplash.com/photo-1599909533683-6775c6e9c0b0?w=800",
    poem: "昔人已乘黄鹤去，此地空余黄鹤楼。黄鹤一去不复返，白云千载空悠悠。",
    seal: "鹤",
    history: "黄鹤楼始建于三国时期，历代多次毁建。现存建筑为1985年重建，因崔颢、李白等诗人题诗而闻名。",
    features: "三大名楼之首；钢筋混凝土结构仿木外形；五层楼阁式建筑；位于蛇山之巅，俯瞰长江。",
    overview:
      "黄鹤楼是中国四大名楼之首，位于武汉蛇山之巅，俯瞰长江，因崔颢《黄鹤楼》诗而名扬天下。楼历经多次毁建，现楼为1985年重建，是武汉的城市地标。",
    significance: [
      "中国四大名楼之首，享有「天下江山第一楼」的美誉。",
      "因崔颢、李白等诗人的诗作而成为文化名楼。",
      "是武汉的城市地标和精神象征。",
    ],
    metrics: [
      { label: "楼高", value: "51.4米", description: "五层，总高51.4米。" },
      { label: "始建年代", value: "公元223年", description: "三国吴黄武二年。" },
      { label: "重建年代", value: "1985年", description: "距原址约1公里处重建。" },
    ],
    timeline: [
      {
        era: "三国吴黄武二年（223）",
        title: "始建黄鹤楼",
        description: "孙权在蛇山建军事瞭望楼，后因黄鹤传说而得名，成为文人墨客登临胜地。",
      },
      {
        era: "清光绪十年（1884）",
        title: "毁于大火",
        description: "黄鹤楼毁于大火，此后百年未重建，仅存遗址与诗文记忆。",
      },
      {
        era: "1985",
        title: "重建黄鹤楼",
        description: "黄鹤楼在距原址约1公里处重建，成为武汉的城市地标和精神象征。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "蛇山选址",
        strapline: "居高临下的绝佳位置。",
        summary:
          "黄鹤楼位于蛇山之巅，俯瞰长江，远眺汉水，居高临下，气势恢宏。",
        visualization: "layers",
        steps: [
          { title: "蛇山", detail: "武汉三镇的制高点。" },
          { title: "长江", detail: "楼前长江滚滚东流。" },
          { title: "武汉三镇", detail: "俯瞰武昌、汉口、汉阳。" },
        ],
        facts: [
          { label: "地理位置", value: "蛇山之巅", description: "武汉三镇的制高点。" },
          { label: "视野", value: "极佳", description: "俯瞰长江，远眺汉水。" },
          { label: "城市地标", value: "武汉象征", description: "武汉的城市名片。" },
        ],
        takeaways: ["选址成就名楼", "山巅是楼阁的最佳位置", "城市需要精神地标"],
      },
      {
        id: "structure",
        title: "楼阁形制",
        strapline: "五层飞檐的壮观楼阁。",
        summary:
          "现黄鹤楼为1985年重建，五层飞檐，高51.4米，建筑风格融合了历代黄鹤楼的特点。",
        visualization: "layers",
        steps: [
          { title: "台基", detail: "高大的台基，奠定庄重气势。" },
          { title: "楼身", detail: "五层，层层出檐，飞檐翘角。" },
          { title: "顶部", detail: "攒尖顶，金碧辉煌。" },
        ],
        facts: [
          { label: "建筑高度", value: "51.4米", description: "五层，层层递进。" },
          { label: "建筑风格", value: "融合历代", description: "融合各代黄鹤楼特点。" },
          { label: "重建位置", value: "距原址1公里", description: "因长江大桥建设而迁移。" },
        ],
        takeaways: ["重建延续文脉", "风格融合历史", "楼阁是城市的标志"],
      },
      {
        id: "craft",
        title: "诗词传承",
        strapline: "千古诗篇铸就名楼。",
        summary:
          "黄鹤楼因崔颢《黄鹤楼》、李白《黄鹤楼送孟浩然之广陵》等诗作而名扬天下，诗词赋予了楼阁不灭的灵魂。",
        visualization: "timeline",
        steps: [
          { title: "崔颢", detail: "《黄鹤楼》：昔人已乘黄鹤去，此地空余黄鹤楼。" },
          { title: "李白", detail: "《黄鹤楼送孟浩然之广陵》：故人西辞黄鹤楼。" },
          { title: "其他诗人", detail: "白居易、陆游等均有题咏。" },
        ],
        facts: [
          { label: "崔颢诗", value: "千古绝唱", description: "李白见之搁笔，叹「眼前有景道不得」。" },
          { label: "李白诗", value: "送别名篇", description: "送孟浩然的千古名篇。" },
          { label: "诗词数量", value: "400余首", description: "历代诗人题咏无数。" },
        ],
        takeaways: ["诗词赋予楼阁生命", "文人是楼阁的灵魂", "登楼必赋诗是传统"],
      },
      {
        id: "ornament",
        title: "黄鹤传说",
        strapline: "神仙传说与楼阁传说。",
        summary:
          "黄鹤楼得名于黄鹤传说，传说仙人子安乘黄鹤过此，或云费文伟驾鹤登仙，赋予了楼阁神秘色彩。",
        visualization: "ring",
        steps: [
          { title: "子安乘鹤", detail: "传说仙人子安乘黄鹤过此。" },
          { title: "费文伟", detail: "传说费文伟驾鹤登仙。" },
          { title: "吕洞宾", detail: "传说吕洞宾曾在此饮酒。" },
        ],
        facts: [
          { label: "楼名由来", value: "黄鹤传说", description: "因黄鹤传说而得名。" },
          { label: "传说人物", value: "多位仙人", description: "子安、费文伟、吕洞宾等。" },
          { label: "文化意义", value: "神仙文化", description: "赋予楼阁神秘色彩。" },
        ],
        takeaways: ["传说赋予建筑魅力", "神仙文化是中国特色", "楼阁连接人间与仙界"],
      },
      {
        id: "preservation",
        title: "毁建轮回",
        strapline: "千年楼阁的兴衰沉浮。",
        summary:
          "黄鹤楼历经多次毁建，从三国始建到明清重建，再到1985年重建，见证了历史的变迁。",
        visualization: "timeline",
        steps: [
          { title: "三国始建", detail: "公元223年，孙权所建军事瞭望楼。" },
          { title: "唐宋兴盛", detail: "成为文人墨客登临胜地。" },
          { title: "1985年重建", detail: "现代重建，成为武汉地标。" },
        ],
        facts: [
          { label: "毁建次数", value: "十余次", description: "历经多次毁建。" },
          { label: "最后毁坏", value: "1884年", description: "清代毁于大火。" },
          { label: "重建完成", value: "1985年", description: "百年后重建完工。" },
        ],
        takeaways: ["毁建是历史的常态", "重建延续文化记忆", "楼阁是城市的精神"],
      },
    ],
    sources: [
      { label: "黄鹤楼官网", url: "http://www.cnhhl.com/" },
    ],
  },
  {
    id: "liuheta",
    name: "六和塔",
    englishName: "Six Harmonies Pagoda",
    tagline: "镇钱塘江潮，保一方平安。",
    dynasty: "北宋开宝三年始建",
    location: "浙江杭州钱塘江畔月轮山",
    category: "pagoda",
    illustration: "liuheta",
    palette: ["#8b4513", "#a0522d"],
    imageUrl: "https://images.unsplash.com/photo-1599909533683-6775c6e9c0b0?w=800",
    poem: "钱塘江潮涌月轮，六和塔影镇乾坤",
    seal: "塔",
    history: "六和塔始建于北宋开宝三年（970年），由吴越国王钱俶为镇压钱塘江潮而建。现存塔身为南宋绍兴年间重建。",
    features: "八面七级塔身；砖木结构；高59.89米；位于钱塘江畔月轮山；镇潮护民。",
    overview:
      "六和塔位于杭州钱塘江畔月轮山上，始建于北宋开宝三年，用以镇压钱塘江潮。塔身八面七级，高59.89米，是中国古代砖木结构塔的杰出代表。",
    significance: [
      "中国古代砖木结构塔的杰出代表，建筑技艺精湛。",
      "镇钱塘江潮的历史功能，体现了古人与自然抗争的智慧。",
      "杭州的文化地标，与钱塘江、西湖构成杭州山水画卷。",
    ],
    metrics: [
      { label: "塔高", value: "59.89米", description: "八面七级，高59.89米。" },
      { label: "始建年代", value: "公元970年", description: "北宋开宝三年。" },
      { label: "遗产类型", value: "全国重点文保", description: "1961年首批国保单位。" },
    ],
    timeline: [
      {
        era: "北宋开宝三年（970）",
        title: "始建六和塔",
        description: "吴越王钱弘俶为镇压钱塘江潮，在月轮山上始建六和塔，取佛教「六和敬」之意命名。",
      },
      {
        era: "南宋绍兴二十三年（1153）",
        title: "重建六和塔",
        description: "北宋塔毁于战火，南宋重建，形成今日砖身木檐的楼阁式塔结构。",
      },
      {
        era: "1961",
        title: "列入首批国保",
        description: "六和塔被列入首批全国重点文物保护单位，成为杭州重要的文化地标。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "临江选址",
        strapline: "镇潮祈福的绝佳位置。",
        summary:
          "六和塔选址于钱塘江畔月轮山上，居高临下，俯瞰钱塘江潮，既可镇潮又可导航。",
        visualization: "layers",
        steps: [
          { title: "月轮山", detail: "钱塘江畔的小山，居高临下。" },
          { title: "钱塘江", detail: "塔前钱塘江潮起潮落。" },
          { title: "导航功能", detail: "为江上船只提供导航标志。" },
        ],
        facts: [
          { label: "选址目的", value: "镇潮祈福", description: "用以镇压钱塘江潮。" },
          { label: "导航功能", value: "江上灯塔", description: "为船只提供导航。" },
          { label: "视野", value: "极佳", description: "俯瞰钱塘江，远眺杭州城。" },
        ],
        takeaways: ["选址体现功能需求", "塔可以镇水", "临江选址的智慧"],
      },
      {
        id: "structure",
        title: "塔身结构",
        strapline: "砖木混合的建筑杰作。",
        summary:
          "六和塔为八面七级砖木结构楼阁式塔，外观十三层，内部实为七层，是中国古代砖木结构塔的典范。",
        visualization: "layers",
        steps: [
          { title: "塔基", detail: "高大坚实的塔基，稳固基础。" },
          { title: "砖身", detail: "砖砌塔身，坚固耐久。" },
          { title: "木檐", detail: "木质出檐，轻盈灵动。" },
        ],
        facts: [
          { label: "结构类型", value: "砖木混合", description: "砖身木檐的混合结构。" },
          { label: "外观层数", value: "十三层", description: "外观看似十三层。" },
          { label: "实际层数", value: "七层", description: "内部实为七层。" },
        ],
        takeaways: ["砖木混合的优势", "外观与功能的平衡", "塔的结构智慧"],
      },
      {
        id: "craft",
        title: "建筑技艺",
        strapline: "宋代建筑的精湛技艺。",
        summary:
          "六和塔的建筑技艺精湛，砖雕、斗拱、彩画都代表了宋代建筑的高超水平。",
        visualization: "grid",
        steps: [
          { title: "砖雕", detail: "塔身砖雕精美，图案丰富。" },
          { title: "斗拱", detail: "木质斗拱，结构精巧。" },
          { title: "彩画", detail: "檐下彩画，色彩鲜艳。" },
        ],
        facts: [
          { label: "砖雕艺术", value: "精美绝伦", description: "宋代砖雕的代表。" },
          { label: "斗拱数量", value: "众多", description: "每层都有精致的斗拱。" },
          { label: "彩画风格", value: "宋代风格", description: "典型的宋代彩画。" },
        ],
        takeaways: ["砖雕是装饰的重点", "斗拱是结构的核心", "彩画增添美感"],
      },
      {
        id: "ornament",
        title: "六和命名",
        strapline: "天地四方的和谐寓意。",
        summary:
          "六和塔取佛教「六和敬」之意，即身和同住、口和无诤、意和同悦、戒和同修、见和同解、利和同均。",
        visualization: "ring",
        steps: [
          { title: "身和同住", detail: "身体行为的和谐。" },
          { title: "口和无诤", detail: "言语的和谐。" },
          { title: "意和同悦", detail: "心意的一致。" },
        ],
        facts: [
          { label: "命名由来", value: "六和敬", description: "取佛教六和敬之意。" },
          { label: "佛教意义", value: "和谐共处", description: "僧团和谐的准则。" },
          { label: "延伸寓意", value: "天下太平", description: "祈愿天下太平。" },
        ],
        takeaways: ["命名承载文化", "佛教影响建筑", "和谐是中国人的追求"],
      },
      {
        id: "preservation",
        title: "千年传承",
        strapline: "古塔的当代保护。",
        summary:
          "六和塔历经千年风雨，多次修缮，现为全国重点文物保护单位，是杭州的重要文化地标。",
        visualization: "timeline",
        steps: [
          { title: "始建", detail: "北宋开宝三年（970年）始建。" },
          { title: "重建", detail: "南宋绍兴年间重建。" },
          { title: "修缮", detail: "历代多次修缮保护。" },
        ],
        facts: [
          { label: "保护级别", value: "国保单位", description: "1961年首批国保。" },
          { label: "修缮历史", value: "多次", description: "历代多次修缮。" },
          { label: "当代价值", value: "文化地标", description: "杭州的重要地标。" },
        ],
        takeaways: ["修缮是保护的延续", "古塔见证历史", "文化遗产需要守护"],
      },
      {
        id: "pagoda",
        title: "登临宝塔",
        strapline: "层层登临，俯瞰钱塘。",
        summary:
          "佛塔不仅是宗教建筑，更是登高望远的观景台。从塔基到塔刹，每一层都有独特的视野与体验。",
        visualization: "layers",
        steps: [
          { title: "塔基", detail: "稳固根基，承载千年。" },
          { title: "塔身", detail: "层层递进，步步高升。" },
          { title: "塔刹", detail: "直指苍穹，通天达地。" },
        ],
        facts: [
          { label: "登塔体验", value: "俯瞰钱塘", description: "登临塔顶，俯瞰钱塘江潮。" },
          { label: "视野变化", value: "层层不同", description: "每层都有独特的视野。" },
          { label: "精神体验", value: "登高望远", description: "欲穷千里目，更上一层楼。" },
        ],
        takeaways: ["塔是登高的建筑", "视野决定体验", "登临是一种修行"],
      },
    ],
    sources: [
      { label: "杭州西湖风景名胜区", url: "http://westlake.hangzhou.gov.cn/" },
    ],
  },
  {
    id: "zhaozhouqiao",
    name: "赵州桥",
    englishName: "Zhaozhou Bridge",
    tagline: "世界现存最早的敞肩石拱桥。",
    dynasty: "隋代始建",
    location: "河北赵县洨河",
    category: "bridge",
    illustration: "zhaozhouqiao",
    palette: ["#8b8989", "#a0522d"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "赵州桥上望洨河，李春造桥越千年",
    seal: "桥",
    history: "赵州桥建于隋代开皇至大业年间（约595-605年），由著名匠师李春设计建造，是世界上现存最古老的敞肩石拱桥。",
    features: "敞肩石拱桥设计；世界上现存最早；全长50.82米；弧形平坦，造型优美。",
    overview:
      "赵州桥又名安济桥，始建于隋代开皇至大业年间，由著名匠师李春设计建造，是世界上现存最早、保存最完好的古代敞肩石拱桥，被誉为「天下第一桥」。",
    significance: [
      "世界桥梁史上的奇迹，开创了敞肩拱桥的先河。",
      "展示了隋代高超的桥梁建造技艺，影响深远。",
      "历经1400余年风雨，依然屹立，是中国古代建筑的骄傲。",
    ],
    metrics: [
      { label: "桥长", value: "50.82米", description: "全长50.82米。" },
      { label: "跨度", value: "37.02米", description: "主拱跨度37.02米。" },
      { label: "始建年代", value: "公元595-605年", description: "隋代开皇至大业年间。" },
    ],
    timeline: [
      {
        era: "隋开皇至大业年间（595-605）",
        title: "始建赵州桥",
        description: "著名匠师李春设计建造赵州桥，开创敞肩拱桥先河，是世界现存最早的敞肩石拱桥。",
      },
      {
        era: "历代",
        title: "修缮与保护",
        description: "赵州桥历经1400余年风雨，历代多次修缮保护，至今依然屹立不倒。",
      },
      {
        era: "1961",
        title: "列入首批国保",
        description: "赵州桥被列入首批全国重点文物保护单位，被誉为「天下第一桥」。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "洨河选址",
        strapline: "交通要道的战略位置。",
        summary:
          "赵州桥横跨洨河，位于古代交通要道，连接南北，是重要的交通枢纽。",
        visualization: "layers",
        steps: [
          { title: "洨河", detail: "桥下洨河缓缓流淌。" },
          { title: "交通要道", detail: "连接南北的重要通道。" },
          { title: "战略位置", detail: "古代军事、商贸的重要节点。" },
        ],
        facts: [
          { label: "选址原因", value: "交通要道", description: "连接南北的重要通道。" },
          { label: "河流特点", value: "洨河", description: "水流平缓，适合建桥。" },
          { label: "战略意义", value: "重要", description: "古代交通、军事要地。" },
        ],
        takeaways: ["选址决定桥梁的价值", "交通需求驱动建设", "桥梁连接文明"],
      },
      {
        id: "structure",
        title: "敞肩拱结构",
        strapline: "开创性的桥梁设计。",
        summary:
          "赵州桥采用敞肩拱结构，在大拱两肩各建两个小拱，既减轻桥身重量，又增加泄洪能力，是世界桥梁史上的创举。",
        visualization: "layers",
        steps: [
          { title: "主拱", detail: "单孔大拱，跨度37.02米。" },
          { title: "肩拱", detail: "大拱两肩各两个小拱。" },
          { title: "基础", detail: "桥基稳固，历经千年不沉。" },
        ],
        facts: [
          { label: "结构类型", value: "敞肩拱", description: "世界最早的敞肩石拱桥。" },
          { label: "创新点", value: "肩拱设计", description: "减轻重量，增加泄洪。" },
          { label: "技术价值", value: "世界领先", description: "领先西方800年。" },
        ],
        takeaways: ["创新是建筑的灵魂", "敞肩拱的智慧", "技术领先源于实践"],
      },
      {
        id: "craft",
        title: "建造技艺",
        strapline: "隋代工匠的精湛技艺。",
        summary:
          "赵州桥的建造技艺精湛，由著名匠师李春设计，采用28道独立拱并列砌筑，石料加工精确，接缝严密。",
        visualization: "grid",
        steps: [
          { title: "设计者", detail: "李春，隋代著名匠师。" },
          { title: "砌筑方式", detail: "28道独立拱并列砌筑。" },
          { title: "石料加工", detail: "精确加工，接缝严密。" },
        ],
        facts: [
          { label: "设计者", value: "李春", description: "隋代著名匠师。" },
          { label: "砌筑方式", value: "并列拱", description: "28道独立拱并列。" },
          { label: "工艺水平", value: "极高", description: "石料加工精确到毫米。" },
        ],
        takeaways: ["工匠精神值得铭记", "并列拱的创新", "精确是质量的保证"],
      },
      {
        id: "ornament",
        title: "装饰艺术",
        strapline: "石雕艺术的精品。",
        summary:
          "赵州桥的栏杆、栏板上有精美的石雕，包括龙、兽、花、竹等图案，是隋代石雕艺术的代表。",
        visualization: "ring",
        steps: [
          { title: "龙雕", detail: "栏板上的蟠龙雕刻精美。" },
          { title: "兽雕", detail: "各种神兽雕刻栩栩如生。" },
          { title: "花卉", detail: "花竹雕刻，线条流畅。" },
        ],
        facts: [
          { label: "雕刻题材", value: "龙兽花卉", description: "龙、兽、花、竹等。" },
          { label: "艺术风格", value: "隋代风格", description: "典型的隋代石雕。" },
          { label: "保存状况", value: "部分完好", description: "部分雕刻保存完好。" },
        ],
        takeaways: ["装饰是建筑的点睛", "石雕是艺术精品", "审美与实用的统一"],
      },
      {
        id: "preservation",
        title: "千年传承",
        strapline: "世界遗产的当代价值。",
        summary:
          "赵州桥历经1400余年风雨，依然屹立不倒，是世界文化遗产，也是中国古代建筑的骄傲。",
        visualization: "timeline",
        steps: [
          { title: "始建", detail: "隋代开皇至大业年间。" },
          { title: "历代修缮", detail: "多次修缮保护。" },
          { title: "当代保护", detail: "列入世界文化遗产。" },
        ],
        facts: [
          { label: "历史地位", value: "天下第一桥", description: "世界桥梁史上的奇迹。" },
          { label: "保护级别", value: "世界遗产", description: "列入世界文化遗产。" },
          { label: "历史跨度", value: "1400余年", description: "历经千年风雨。" },
        ],
        takeaways: ["千年屹立是奇迹", "遗产是全人类的财富", "保护是永恒的主题"],
      },
      {
        id: "bridge",
        title: "水影桥韵",
        strapline: "晨昏四时，桥影各异。",
        summary:
          "古桥之美不仅在于结构，更在于与水的互动。晨曦、正午、黄昏、月夜，桥影随光影变幻，呈现不同的意境。",
        visualization: "timeline",
        steps: [
          { title: "晨曦", detail: "晨光熹微，桥影朦胧。" },
          { title: "正午", detail: "阳光明媚，桥身清晰。" },
          { title: "黄昏", detail: "夕阳西下，金光洒落。" },
          { title: "月夜", detail: "皓月当空，银辉如水。" },
        ],
        facts: [
          { label: "晨曦", value: "朦胧之美", description: "晨雾中的古桥更显神秘。" },
          { label: "黄昏", value: "金色时光", description: "夕阳下的桥影最富诗意。" },
          { label: "月夜", value: "卢沟晓月", description: "燕京八景之一。" },
        ],
        takeaways: ["光影赋予建筑生命", "四时景致各不同", "古桥是时间的见证"],
      },
    ],
    sources: [
      { label: "UNESCO｜Zhaozhou Bridge", url: "https://whc.unesco.org/en/list/1441/" },
    ],
  },
  {
    id: "qiaojiaDayuan",
    name: "乔家大院",
    englishName: "Qiao Family Courtyard",
    tagline: "晋商大院的经典代表。",
    dynasty: "清乾隆年间始建",
    location: "山西祁县乔家堡村",
    category: "residence",
    illustration: "qiaojiaDayuan",
    palette: ["#8b4513", "#696969"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "晋商辉煌耀中华，乔家大院留遗风",
    seal: "晋",
    history: "乔家大院始建于清乾隆年间，由晋商乔致庸扩建。是晋商大院的典型代表，因电视剧《乔家大院》而广为人知。",
    features: "方形大院，四周封闭；砖雕精美，门楼壮观；建筑布局严谨；展示晋商文化与北方民居特色。",
    overview:
      "乔家大院是晋商大院的典型代表，始建于清乾隆年间，由晋商乔致庸扩建。大院布局严谨，建筑精美，被誉为「北方民居建筑的一颗明珠」。",
    significance: [
      "晋商文化的物质载体，见证了晋商的辉煌历史。",
      "北方民居建筑的杰出代表，建筑艺术精湛。",
      "因电视剧《乔家大院》而广为人知，成为晋商文化的符号。",
    ],
    metrics: [
      { label: "占地面积", value: "4175平方米", description: "建筑面积约4175平方米。" },
      { label: "院落数量", value: "6座大院子", description: "313间房屋。" },
      { label: "始建年代", value: "清乾隆年间", description: "18世纪中叶始建。" },
    ],
    timeline: [
      {
        era: "清乾隆年间（约1750）",
        title: "始建乔家大院",
        description: "乔家创始人乔贵发始建乔家大院，奠定晋商大院的建筑格局。",
      },
      {
        era: "清同治光绪年间",
        title: "扩建鼎盛",
        description: "乔致庸主持扩建，形成今日6座大院、313间房屋的规模，成为晋商大院的经典代表。",
      },
      {
        era: "1986",
        title: "作为博物馆开放",
        description: "乔家大院作为民俗博物馆对外开放，因电视剧《乔家大院》而广为人知。",
      },
    ],
    modules: [
      {
        id: "axis",
        title: "院落布局",
        strapline: "层层递进的空间序列。",
        summary:
          "乔家大院采用传统的四合院布局，6座大院落沿中轴线排列，形成层层递进的空间序列。",
        visualization: "axis",
        steps: [
          { title: "大门", detail: "宏伟的大门，显示主人地位。" },
          { title: "主院", detail: "主人居住的主院。" },
          { title: "偏院", detail: "仆人、仓库等辅助空间。" },
        ],
        facts: [
          { label: "布局特点", value: "中轴对称", description: "沿中轴线层层递进。" },
          { label: "院落数量", value: "6座大院子", description: "313间房屋。" },
          { label: "空间层次", value: "内外分明", description: "等级分明，内外有别。" },
        ],
        takeaways: ["中轴布局体现等级", "空间序列引导秩序", "四合院是中国民居的精髓"],
      },
      {
        id: "structure",
        title: "建筑结构",
        strapline: "砖木结构的北方民居。",
        summary:
          "乔家大院采用砖木结构，青砖灰瓦，木构架承重，是北方民居的典型形式。",
        visualization: "layers",
        steps: [
          { title: "青砖墙", detail: "青砖砌筑的厚实墙体。" },
          { title: "木构架", detail: "木构架承重，灵活开间。" },
          { title: "灰瓦顶", detail: "灰瓦覆盖的屋顶。" },
        ],
        facts: [
          { label: "结构类型", value: "砖木结构", description: "北方民居的典型形式。" },
          { label: "墙体材料", value: "青砖", description: "青砖砌筑，厚实坚固。" },
          { label: "屋顶形式", value: "灰瓦顶", description: "灰瓦覆盖，简洁大方。" },
        ],
        takeaways: ["砖木结构适应北方气候", "青砖灰瓦是北方特色", "实用是民居的第一要义"],
      },
      {
        id: "craft",
        title: "装饰艺术",
        strapline: "精美绝伦的雕刻装饰。",
        summary:
          "乔家大院的木雕、砖雕、石雕精美绝伦，题材丰富，技艺精湛，是晋商大院装饰艺术的代表。",
        visualization: "grid",
        steps: [
          { title: "木雕", detail: "门窗、梁柱上的木雕精美。" },
          { title: "砖雕", detail: "影壁、屋脊上的砖雕精致。" },
          { title: "石雕", detail: "门墩、柱础上的石雕生动。" },
        ],
        facts: [
          { label: "木雕", value: "精美", description: "门窗、梁柱都有精美木雕。" },
          { label: "砖雕", value: "精致", description: "影壁、屋脊砖雕精致。" },
          { label: "石雕", value: "生动", description: "门墩、柱基石雕生动。" },
        ],
        takeaways: ["雕刻是财富的象征", "装饰反映主人品味", "三雕艺术是晋商特色"],
      },
      {
        id: "ornament",
        title: "晋商文化",
        strapline: "商贾大院的财富故事。",
        summary:
          "乔家大院是晋商乔家的宅邸，见证了晋商的辉煌历史，承载着晋商文化的精神内涵。",
        visualization: "timeline",
        steps: [
          { title: "乔贵发", detail: "乔家创始人，白手起家。" },
          { title: "乔致庸", detail: "将乔家事业推向巅峰。" },
          { title: "衰落", detail: "清末民初，晋商衰落。" },
        ],
        facts: [
          { label: "乔家创始人", value: "乔贵发", description: "白手起家的商业传奇。" },
          { label: "最盛时期", value: "乔致庸时代", description: "商业帝国遍布全国。" },
          { label: "文化价值", value: "晋商精神", description: "诚信、勤俭、开拓。" },
        ],
        takeaways: ["大院承载商贾故事", "晋商精神值得传承", "财富与文化相辅相成"],
      },
      {
        id: "preservation",
        title: "遗产保护",
        strapline: "晋商大院的当代传承。",
        summary:
          "乔家大院现为全国重点文物保护单位，是研究晋商文化和北方民居的重要场所。",
        visualization: "timeline",
        steps: [
          { title: "保护", detail: "列入全国重点文保单位。" },
          { title: "开放", detail: "作为博物馆对外开放。" },
          { title: "传播", detail: "电视剧让晋商文化走向世界。" },
        ],
        facts: [
          { label: "保护级别", value: "国保单位", description: "全国重点文物保护单位。" },
          { label: "展示内容", value: "晋商文化", description: "展示晋商历史与文化。" },
          { label: "文化影响", value: "深远", description: "电视剧让乔家大院家喻户晓。" },
        ],
        takeaways: ["保护是传承的基础", "展示让历史活起来", "文化传播是保护的重要方式"],
      },
      {
        id: "dwelling",
        title: "四时宜居",
        strapline: "冬暖夏凉，四季安康。",
        summary:
          "民居建筑深谙自然之道，通过院落布局、采光通风、厚墙蓄热等设计，实现冬暖夏凉的居住体验。",
        visualization: "timeline",
        steps: [
          { title: "春", detail: "春暖花开，庭院生机盎然。" },
          { title: "夏", detail: "深檐遮阳，穿堂风带来凉意。" },
          { title: "秋", detail: "秋高气爽，庭院晒谷休憩。" },
          { title: "冬", detail: "厚墙蓄热，南向采光聚暖。" },
        ],
        facts: [
          { label: "春季", value: "通风良好", description: "东南风穿堂而过。" },
          { label: "夏季", value: "深檐遮阳", description: "天井拔风降温。" },
          { label: "冬季", value: "厚墙蓄热", description: "南向采光聚暖。" },
        ],
        takeaways: ["民居是智慧的结晶", "顺应自然是根本", "宜居是建筑的终极目标"],
      },
    ],
    sources: [
      { label: "山西文旅｜乔家大院", url: "https://www.sxta.gov.cn/" },
    ],
  },
  {
    id: "lugouqiao",
    name: "卢沟桥",
    englishName: "Lugou Bridge",
    tagline: "北京现存最古老的石造联拱桥，七七事变发生地。",
    dynasty: "金大定二十九年（1189年）始建",
    location: "北京丰台区永定河",
    category: "bridge",
    illustration: "lugouqiao",
    palette: ["#8b8989", "#696969"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "卢沟晓月照古桥，石狮无数立栏干",
    seal: "狮",
    history: "卢沟桥又名马可波罗桥，建于金代大定年间（1169-1192）。1937年七七事变在此爆发，标志着抗日战争全面开始。",
    features: '十一孔联拱桥；桥长266.5米；石狮子形态各异；因"卢沟晓月"美景闻名；七七事变发生地。',
    overview:
      "卢沟桥又名马可波罗桥，是北京现存最古老的石造联拱桥。桥身十一孔，全长266.5米，建筑宏伟，雕刻精美。1937年7月7日，在此爆发了震惊中外的七七事变，标志着中国人民抗日战争全面爆发。",
    significance: [
      "北京现存最古老的石造联拱桥，展示了金代桥梁建造的高超技艺。",
      "桥上石狮子形态各异，数量众多，是中国古代石雕艺术的瑰宝。",
      "七七事变发生地，见证了中国人民抗日战争的爆发，具有重要的历史意义。",
    ],
    metrics: [
      { label: "桥长", value: "266.5米", description: "十一孔联拱石桥，全长266.5米。" },
      { label: "石狮数量", value: "501只", description: "桥上石狮子形态各异，栩栩如生。" },
      { label: "始建年代", value: "1189年", description: "金大定二十九年始建，明昌三年完工。" },
    ],
    modules: [
      {
        id: "axis",
        title: "永定河选址",
        strapline: "交通要道与军事要冲。",
        summary:
          "卢沟桥横跨永定河，位于古代进出北京的交通要道，既是商贸通道，也是军事要冲。",
        visualization: "layers",
        steps: [
          { title: "永定河", detail: "桥下永定河奔腾而过，水势湍急。" },
          { title: "交通要道", detail: "连接北京与华北平原的重要通道。" },
          { title: "军事要冲", detail: "进出北京的咽喉要道，战略地位重要。" },
        ],
        facts: [
          { label: "选址原因", value: "交通要道", description: "连接北京与华北的重要通道。" },
          { label: "河流特点", value: "永定河", description: "水流湍急，建桥难度大。" },
          { label: "战略意义", value: "咽喉要道", description: "进出北京的必经之路。" },
        ],
        takeaways: ["选址决定桥梁的价值", "交通与军事双重功能", "桥梁连接城市与腹地"],
      },
      {
        id: "structure",
        title: "联拱结构",
        strapline: "十一孔联拱的建筑智慧。",
        summary:
          "卢沟桥采用十一孔联拱结构，拱券坚固，桥墩厚实，是中国古代石拱桥的杰出代表。",
        visualization: "layers",
        steps: [
          { title: "拱券", detail: "十一孔联拱，拱形优美，结构坚固。" },
          { title: "桥墩", detail: "桥墩厚实，迎水面设分水尖，减少水流冲击。" },
          { title: "桥面", detail: "桥面宽阔，可通行车马行人。" },
        ],
        facts: [
          { label: "结构类型", value: "联拱石桥", description: "十一孔联拱，结构稳固。" },
          { label: "创新设计", value: "分水尖", description: "桥墩迎水面设分水尖，减少水流冲击。" },
          { label: "建筑规模", value: "华北最大", description: "华北地区最大的古代石拱桥之一。" },
        ],
        takeaways: ["联拱结构分散荷载", "分水尖是技术创新", "石拱桥的建造智慧"],
      },
      {
        id: "craft",
        title: "石狮雕刻",
        strapline: "千姿百态的石雕艺术。",
        summary:
          "卢沟桥以石狮子闻名于世，桥上石狮子501只，形态各异，栩栩如生，是中国古代石雕艺术的瑰宝。",
        visualization: "grid",
        steps: [
          { title: "望柱石狮", detail: "每根望柱上都雕刻有石狮子。" },
          { title: "形态各异", detail: "石狮子姿态各异，无一雷同。" },
          { title: "历代增补", detail: "金、元、明、清历代均有增补修缮。" },
        ],
        facts: [
          { label: "石狮数量", value: "501只", description: "桥上石狮子数量众多。" },
          { label: "雕刻风格", value: "历代风格", description: "金、元、明、清各代风格并存。" },
          { label: "艺术价值", value: "石雕瑰宝", description: "中国古代石雕艺术的代表。" },
        ],
        takeaways: ["石狮是桥梁的灵魂", "雕刻艺术代代相传", "细节成就经典"],
      },
      {
        id: "ornament",
        title: "七七事变",
        strapline: "抗日战争的历史见证。",
        summary:
          "1937年7月7日，日军在卢沟桥附近进行军事演习，借口士兵失踪挑起事端，制造了震惊中外的七七事变，标志着中国人民抗日战争全面爆发。",
        visualization: "timeline",
        steps: [
          { title: "七七事变", detail: "1937年7月7日，日军挑起事端。" },
          { title: "全面抗战", detail: "中国人民抗日战争全面爆发。" },
          { title: "历史见证", detail: "卢沟桥成为抗战的历史见证。" },
        ],
        facts: [
          { label: "事变时间", value: "1937年7月7日", description: "抗日战争全面爆发的标志。" },
          { label: "历史意义", value: "民族觉醒", description: "中华民族全面抗战的开始。" },
          { label: "纪念价值", value: "爱国主义教育", description: "重要的爱国主义教育基地。" },
        ],
        takeaways: ["桥梁承载历史记忆", "七七事变永载史册", "历史是最好的教科书"],
      },
      {
        id: "preservation",
        title: "遗产保护",
        strapline: "古桥的当代传承。",
        summary:
          "卢沟桥现为全国重点文物保护单位，经过多次修缮保护，成为重要的爱国主义教育基地和旅游景点。",
        visualization: "timeline",
        steps: [
          { title: "文物保护", detail: "1961年列入首批全国重点文物保护单位。" },
          { title: "修缮保护", detail: "历代多次修缮，保持古桥风貌。" },
          { title: "教育功能", detail: "成为爱国主义教育基地。" },
        ],
        facts: [
          { label: "保护级别", value: "国保单位", description: "1961年首批全国重点文保。" },
          { label: "修缮历史", value: "多次修缮", description: "历代多次修缮保护。" },
          { label: "当代价值", value: "教育基地", description: "爱国主义教育的重要场所。" },
        ],
        takeaways: ["保护是传承的基础", "古桥见证历史", "教育功能延续价值"],
      },
      {
        id: "bridge",
        title: "卢沟晓月",
        strapline: "燕京八景之一，月夜桥影。",
        summary:
          "卢沟晓月是燕京八景之一。每当黎明时分，月色朦胧，桥影倒映水中，景色如诗如画。",
        visualization: "timeline",
        steps: [
          { title: "晓月", detail: "黎明时分，月色朦胧。" },
          { title: "桥影", detail: "桥身倒映水中，如诗如画。" },
          { title: "意境", detail: "古人题咏，传颂千古。" },
        ],
        facts: [
          { label: "景观地位", value: "燕京八景", description: "卢沟晓月是燕京八景之一。" },
          { label: "最佳观赏", value: "黎明时分", description: "月色朦胧，桥影倒映。" },
          { label: "文化价值", value: "诗意传承", description: "历代文人题咏不绝。" },
        ],
        takeaways: ["自然与建筑相融", "诗意是文化的结晶", "景观需要被发现"],
      },
    ],
    sources: [
      { label: "中国人民抗日战争纪念馆", url: "http://www.1937china.com/" },
    ],
    timeline: [
      { era: "1189", title: "金代始建卢沟桥", description: "" },
      { era: "1192", title: "卢沟桥建成", description: "" },
      { era: "1937", title: "七七事变爆发", description: "" },
    ],
  },
  {
    id: "luoyangqiao",
    name: "洛阳桥",
    englishName: "Luoyang Bridge",
    tagline: "中国第一座跨海梁式石桥，「海内第一桥」。",
    dynasty: "北宋嘉祐四年（1059年）始建",
    location: "福建泉州洛阳江",
    category: "bridge",
    illustration: "luoyangqiao",
    palette: ["#a0522d", "#8b8989"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "洛阳桥上望沧海，蔡襄造桥越千年",
    seal: "桥",
    history: "洛阳桥又名万安桥，建于北宋皇祐五年至嘉祐四年（1053-1059），由蔡襄主持建造。是中国第一座跨海梁式石桥。",
    features: "跨海梁式石桥；首创筏型基础；种蛎固基技术；桥长834米；海上丝绸之路见证。",
    overview:
      "洛阳桥又名万安桥，是中国第一座跨海梁式石桥，被誉为「海内第一桥」。桥长834米，宽7米，由宋代名臣蔡襄主持建造，开创了筏型基础、种蛎固基等先进技术，是中国古代桥梁史上的里程碑。",
    significance: [
      "中国第一座跨海梁式石桥，开创了跨海建桥的先河。",
      "首创筏型基础、种蛎固基等技术，展示了宋代桥梁建造的高超智慧。",
      "海上丝绸之路的重要见证，体现了泉州作为东方第一大港的历史地位。",
    ],
    metrics: [
      { label: "桥长", value: "834米", description: "原桥长1200米，现存834米。" },
      { label: "桥墩数量", value: "46座", description: "船型桥墩，减少水流冲击。" },
      { label: "始建年代", value: "1053-1059年", description: "北宋皇祐五年至嘉祐四年。" },
    ],
    modules: [
      {
        id: "axis",
        title: "洛阳江选址",
        strapline: "跨海通道的战略意义。",
        summary:
          "洛阳桥横跨洛阳江入海口，连接泉州南北两岸，是海上丝绸之路的重要通道，也是古代福建交通的咽喉要道。",
        visualization: "layers",
        steps: [
          { title: "洛阳江", detail: "桥横跨洛阳江入海口，水流湍急。" },
          { title: "交通要道", detail: "连接泉州南北的重要通道。" },
          { title: "海上丝路", detail: "海上丝绸之路的重要节点。" },
        ],
        facts: [
          { label: "选址原因", value: "交通要道", description: "连接泉州南北的重要通道。" },
          { label: "河流特点", value: "入海口", description: "江海交汇，水流复杂。" },
          { label: "战略意义", value: "海上丝路", description: "海上丝绸之路的重要节点。" },
        ],
        takeaways: ["跨海建桥的创举", "交通促进贸易繁荣", "桥梁连接海上丝路"],
      },
      {
        id: "structure",
        title: "筏型基础",
        strapline: "跨海建桥的技术突破。",
        summary:
          "洛阳桥首创筏型基础技术，在桥墩底部铺设石块形成筏型基础，增加桥墩稳定性，是跨海建桥的重大技术突破。",
        visualization: "layers",
        steps: [
          { title: "筏型基础", detail: "桥墩底部铺设石块，形成稳固基础。" },
          { title: "船型桥墩", detail: "桥墩呈船型，减少水流冲击。" },
          { title: "种蛎固基", detail: "养殖牡蛎加固桥基，生物工程技术的先驱。" },
        ],
        facts: [
          { label: "技术创新", value: "筏型基础", description: "首创筏型基础技术。" },
          { label: "生物工程", value: "种蛎固基", description: "利用牡蛎加固桥基。" },
          { label: "桥墩设计", value: "船型桥墩", description: "减少水流冲击，保护桥墩。" },
        ],
        takeaways: ["技术创新是建桥的关键", "生物工程的前瞻应用", "跨海建桥的智慧"],
      },
      {
        id: "craft",
        title: "建造技艺",
        strapline: "宋代工匠的精湛技艺。",
        summary:
          "洛阳桥由宋代名臣蔡襄主持建造，历时六年完工。建造过程中克服了潮汐、水流等困难，展示了宋代桥梁建造的高超技艺。",
        visualization: "grid",
        steps: [
          { title: "蔡襄主持", detail: "宋代名臣蔡襄主持建造。" },
          { title: "历时六年", detail: "1053-1059年，历时六年完工。" },
          { title: "克服困难", detail: "克服潮汐、水流等自然困难。" },
        ],
        facts: [
          { label: "主持者", value: "蔡襄", description: "宋代名臣，书法家。" },
          { label: "建造时间", value: "六年", description: "1053-1059年完工。" },
          { label: "技术难度", value: "极高", description: "跨海建桥，技术难度极大。" },
        ],
        takeaways: ["名臣主持彰显重视", "六年磨一桥的匠心", "克服自然困难的智慧"],
      },
      {
        id: "ornament",
        title: "石塔石像",
        strapline: "桥梁装饰的艺术价值。",
        summary:
          "洛阳桥上建有石塔、石像等装饰，既有宗教意义，也有导航功能，是宋代桥梁装饰艺术的代表。",
        visualization: "ring",
        steps: [
          { title: "石塔", detail: "桥上建有石塔，具有导航功能。" },
          { title: "石像", detail: "桥上石像雕刻精美，具有宗教意义。" },
          { title: "碑刻", detail: "桥上碑刻记录建桥历史。" },
        ],
        facts: [
          { label: "石塔", value: "导航标志", description: "为船只提供导航。" },
          { label: "石像", value: "宗教意义", description: "祈求平安的宗教象征。" },
          { label: "碑刻", value: "历史记录", description: "记录建桥历史与功德。" },
        ],
        takeaways: ["装饰兼具实用功能", "石塔是导航标志", "碑刻记录历史"],
      },
      {
        id: "preservation",
        title: "千年传承",
        strapline: "海内第一桥的当代价值。",
        summary:
          "洛阳桥历经千年风雨，多次修缮保护，现为全国重点文物保护单位，是研究中国古代桥梁史的重要实物资料。",
        visualization: "timeline",
        steps: [
          { title: "始建", detail: "北宋嘉祐四年（1059年）完工。" },
          { title: "历代修缮", detail: "历代多次修缮保护。" },
          { title: "当代保护", detail: "列入全国重点文物保护单位。" },
        ],
        facts: [
          { label: "历史地位", value: "海内第一桥", description: "中国第一座跨海梁式石桥。" },
          { label: "保护级别", value: "国保单位", description: "全国重点文物保护单位。" },
          { label: "历史跨度", value: "近千年", description: "历经千年风雨。" },
        ],
        takeaways: ["千年古桥见证历史", "技术创新永载史册", "保护是传承的责任"],
      },
    ],
    sources: [
      { label: "泉州文旅｜洛阳桥", url: "http://www.qztb.gov.cn/" },
    ],
    timeline: [
      { era: "1053", title: "洛阳桥开始建造", description: "" },
      { era: "1059", title: "洛阳桥建成", description: "" },
      { era: "1988", title: "列入全国重点文物保护单位", description: "" },
    ],
  },
  {
    id: "wangjiadayuan",
    name: "王家大院",
    englishName: "Wang Family Courtyard",
    tagline: "晋商大院中规模最大的一座，「民间故宫」。",
    dynasty: "清康熙至嘉庆年间始建",
    location: "山西灵石县静升镇",
    category: "residence",
    illustration: "wangjiadayuan",
    palette: ["#8b4513", "#696969"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "王家归来不看院，民间故宫耀晋中",
    seal: "院",
    history: '王家大院始建于清康熙至嘉庆年间，是晋商王氏家族历时150余年建成的大型民居建筑群。占地45万平方米，有"民间故宫"之称。',
    features: "面积最大的晋商大院；五巷六堡一条街；建筑布局严谨；砖木石雕精美；展示晋商文化。",
    overview:
      '王家大院是晋商大院中规模最大的一座，由静升王氏家族历经康熙、雍正、乾隆、嘉庆四朝修建而成。大院总面积25万平方米，建筑群气势恢宏，被誉为"民间故宫"、"山西紫禁城"。',
    significance: [
      "晋商大院中规模最大的一座，展示了晋商家族的辉煌历史。",
      "建筑群气势恢宏，布局严谨，是北方民居建筑的杰出代表。",
      "雕刻艺术精湛，木雕、砖雕、石雕精美绝伦，是民间艺术的瑰宝。",
    ],
    metrics: [
      { label: "总面积", value: "25万平方米", description: "晋商大院中规模最大。" },
      { label: "院落数量", value: "123座", description: "房屋1118间。" },
      { label: "始建年代", value: "清康熙年间", description: "历经康熙至嘉庆四朝修建。" },
    ],
    modules: [
      {
        id: "axis",
        title: "依山而建",
        strapline: "层层递进的院落布局。",
        summary:
          "王家大院依山而建，层层递进，形成高低错落的院落群。整体布局严谨，中轴对称，体现了传统礼制观念。",
        visualization: "axis",
        steps: [
          { title: "依山就势", detail: "大院依山而建，层层递进。" },
          { title: "中轴对称", detail: "主要院落沿中轴线对称布局。" },
          { title: "高低错落", detail: "院落高低错落，层次分明。" },
        ],
        facts: [
          { label: "布局特点", value: "依山就势", description: "顺应地形，层层递进。" },
          { label: "空间层次", value: "高低错落", description: "院落层次分明。" },
          { label: "礼制观念", value: "中轴对称", description: "体现传统礼制观念。" },
        ],
        takeaways: ["依山而建的智慧", "层次分明的空间", "礼制观念的体现"],
      },
      {
        id: "structure",
        title: "建筑规模",
        strapline: "民间故宫的恢宏气势。",
        summary:
          "王家大院由高家崖、红门堡两大建筑群组成，总面积25万平方米，房屋1118间，规模宏大，气势恢宏。",
        visualization: "layers",
        steps: [
          { title: "高家崖", detail: "主要建筑群之一，建筑精美。" },
          { title: "红门堡", detail: "另一主要建筑群，规模宏大。" },
          { title: "整体规模", detail: "总面积25万平方米，房屋1118间。" },
        ],
        facts: [
          { label: "建筑群", value: "两大建筑群", description: "高家崖、红门堡两大建筑群。" },
          { label: "总面积", value: "25万平方米", description: "晋商大院中规模最大。" },
          { label: "房屋数量", value: "1118间", description: "规模宏大，气势恢宏。" },
        ],
        takeaways: ["规模决定气势", "民间故宫名副其实", "晋商财富的象征"],
      },
      {
        id: "craft",
        title: "三雕艺术",
        strapline: "精美绝伦的雕刻装饰。",
        summary:
          "王家大院的木雕、砖雕、石雕精美绝伦，题材丰富，技艺精湛，是晋商大院装饰艺术的巅峰之作。",
        visualization: "grid",
        steps: [
          { title: "木雕", detail: "门窗、梁柱上的木雕精美绝伦。" },
          { title: "砖雕", detail: "影壁、屋脊上的砖雕精致细腻。" },
          { title: "石雕", detail: "门墩、柱础上的石雕栩栩如生。" },
        ],
        facts: [
          { label: "木雕", value: "精美绝伦", description: "题材丰富，技艺精湛。" },
          { label: "砖雕", value: "精致细腻", description: "图案精美，工艺高超。" },
          { label: "石雕", value: "栩栩如生", description: "造型生动，雕刻精细。" },
        ],
        takeaways: ["三雕艺术是晋商特色", "装饰反映财富与品味", "细节成就经典"],
      },
      {
        id: "ornament",
        title: "晋商文化",
        strapline: "商贾大院的家族传奇。",
        summary:
          "王家大院是静升王氏家族的宅邸，见证了王氏家族从农到商、由商到官的辉煌历程，承载着晋商文化的精神内涵。",
        visualization: "timeline",
        steps: [
          { title: "王氏家族", detail: "静升王氏家族，从农到商、由商到官。" },
          { title: "辉煌历程", detail: "历经康熙至嘉庆四朝，修建大院。" },
          { title: "文化传承", detail: "承载晋商文化的精神内涵。" },
        ],
        facts: [
          { label: "家族历史", value: "从农到商", description: "王氏家族的奋斗历程。" },
          { label: "修建历程", value: "四朝修建", description: "康熙至嘉庆四朝修建。" },
          { label: "文化价值", value: "晋商精神", description: "诚信、勤俭、开拓。" },
        ],
        takeaways: ["大院承载家族传奇", "晋商精神值得传承", "财富与文化相辅相成"],
      },
      {
        id: "preservation",
        title: "遗产保护",
        strapline: "民间故宫的当代传承。",
        summary:
          "王家大院现为全国重点文物保护单位，是研究晋商文化和北方民居的重要场所，也是著名的旅游景点。",
        visualization: "timeline",
        steps: [
          { title: "保护", detail: "列入全国重点文物保护单位。" },
          { title: "开放", detail: "作为博物馆对外开放。" },
          { title: "传播", detail: "成为晋商文化的重要展示窗口。" },
        ],
        facts: [
          { label: "保护级别", value: "国保单位", description: "全国重点文物保护单位。" },
          { label: "展示内容", value: "晋商文化", description: "展示晋商历史与文化。" },
          { label: "旅游价值", value: "著名景点", description: "山西重要的旅游景点。" },
        ],
        takeaways: ["保护是传承的基础", "展示让历史活起来", "旅游促进文化传播"],
      },
    ],
    sources: [
      { label: "山西文旅｜王家大院", url: "https://www.sxta.gov.cn/" },
    ],
    timeline: [
      { era: "1756", title: "王家大院开始建造", description: "" },
      { era: "民国", title: "持续扩建形成规模", description: "" },
      { era: "1997", title: "作为博物馆开放", description: "" },
    ],
  },
  {
    id: "hongcun",
    name: "宏村",
    englishName: "Hongcun Village",
    tagline: "徽派民居的代表，「中国画里的乡村」，世界文化遗产。",
    dynasty: "南宋绍兴年间始建",
    location: "安徽黄山黟县",
    category: "residence",
    illustration: "hongcun",
    palette: ["#4a4a4a", "#8b8989"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "宏村水系绕千家，牛形布局画中游",
    seal: "水",
    history: '宏村始建于南宋绍兴年间，汪姓家族聚居而成。2000年与西递共同列入世界文化遗产名录，被誉为"中国画里的乡村"。',
    features: "牛形村落布局；水系穿村过户；月沼、南湖美景；明清古建筑群；徽派建筑特色（白墙黛瓦、马头墙）。",
    overview:
      '宏村是徽派民居的代表村落，始建于南宋绍兴年间，以牛形村落布局和水系设计闻名于世。村内古建筑保存完好，粉墙黛瓦，马头墙高耸，被誉为"中国画里的乡村"，2000年列入世界文化遗产名录。',
    significance: [
      "徽派民居的代表村落，展示了徽州传统建筑的精髓。",
      "独特的牛形村落布局和水系设计，体现了古人的规划智慧。",
      "世界文化遗产，是中国传统村落的杰出代表。",
    ],
    metrics: [
      { label: "村落面积", value: "28公顷", description: "古村落面积约28公顷。" },
      { label: "古建筑", value: "140余栋", description: "明清古建筑保存完好。" },
      { label: "遗产类型", value: "世界文化遗产", description: "2000年列入世界遗产名录。" },
    ],
    modules: [
      {
        id: "axis",
        title: "牛形布局",
        strapline: "独特的村落规划智慧。",
        summary:
          "宏村以牛形布局闻名，雷岗山为牛首，古树为牛角，水系为牛肠，月沼为牛胃，南湖为牛肚，体现了古人天人合一的规划理念。",
        visualization: "ring",
        steps: [
          { title: "牛首", detail: "雷岗山为牛首，古树为牛角。" },
          { title: "牛肠", detail: "水系蜿蜒穿村，如同牛肠。" },
          { title: "牛胃牛肚", detail: "月沼为牛胃，南湖为牛肚。" },
        ],
        facts: [
          { label: "布局理念", value: "牛形村落", description: "以牛为形，天人合一。" },
          { label: "水系设计", value: "牛肠水系", description: "水系蜿蜒穿村，功能完善。" },
          { label: "规划智慧", value: "天人合一", description: "体现古人的规划智慧。" },
        ],
        takeaways: ["牛形布局独具匠心", "水系是村落的灵魂", "天人合一的规划理念"],
      },
      {
        id: "structure",
        title: "徽派建筑",
        strapline: "粉墙黛瓦的徽州风情。",
        summary:
          "宏村建筑为典型的徽派风格，粉墙黛瓦，马头墙高耸，天井院落，木雕精美，是徽州传统建筑的代表。",
        visualization: "courtyard",
        steps: [
          { title: "粉墙黛瓦", detail: "白墙黑瓦，简洁大方。" },
          { title: "马头墙", detail: "高耸的马头墙，防火防风。" },
          { title: "天井院落", detail: "四水归堂的天井设计。" },
        ],
        facts: [
          { label: "建筑风格", value: "徽派建筑", description: "粉墙黛瓦，马头墙高耸。" },
          { label: "功能设计", value: "天井院落", description: "四水归堂，通风采光。" },
          { label: "装饰艺术", value: "木雕精美", description: "门窗、梁柱木雕精美。" },
        ],
        takeaways: ["徽派建筑独具特色", "马头墙是徽州符号", "天井设计蕴含智慧"],
      },
      {
        id: "craft",
        title: "水系设计",
        strapline: "千年不竭的活水系统。",
        summary:
          "宏村的水系设计精妙，从上游引水入村，蜿蜒穿村而过，最终汇入南湖，形成完整的活水系统，千年不竭。",
        visualization: "timeline",
        steps: [
          { title: "引水入村", detail: "从上游引水入村，源头活水。" },
          { title: "蜿蜒穿村", detail: "水系蜿蜒穿村，如同牛肠。" },
          { title: "汇入南湖", detail: "水流最终汇入南湖，形成完整系统。" },
        ],
        facts: [
          { label: "水系功能", value: "生活用水", description: "饮用、洗涤、消防等功能。" },
          { label: "设计智慧", value: "活水系统", description: "千年不竭的活水系统。" },
          { label: "生态价值", value: "调节气候", description: "调节村落小气候。" },
        ],
        takeaways: ["水系是村落的血脉", "活水系统体现智慧", "生态设计的前瞻性"],
      },
      {
        id: "ornament",
        title: "徽州文化",
        strapline: "耕读传家的文化传承。",
        summary:
          "宏村是徽州文化的载体，耕读传家、贾而好儒的文化传统，在村落的建筑、祠堂、书院中得到充分体现。",
        visualization: "ring",
        steps: [
          { title: "耕读传家", detail: "农耕与读书并重的文化传统。" },
          { title: "贾而好儒", detail: "经商与读书相结合的徽商精神。" },
          { title: "祠堂书院", detail: "祠堂、书院是文化传承的载体。" },
        ],
        facts: [
          { label: "文化传统", value: "耕读传家", description: "农耕与读书并重。" },
          { label: "徽商精神", value: "贾而好儒", description: "经商与读书相结合。" },
          { label: "文化载体", value: "祠堂书院", description: "文化传承的重要场所。" },
        ],
        takeaways: ["文化是村落的灵魂", "耕读传家是徽州传统", "贾而好儒的徽商精神"],
      },
      {
        id: "preservation",
        title: "世界遗产",
        strapline: "传统村落的保护典范。",
        summary:
          "宏村于2000年列入世界文化遗产名录，是中国传统村落保护的典范，也是著名的文化旅游景点。",
        visualization: "timeline",
        steps: [
          { title: "列入世遗", detail: "2000年列入世界文化遗产名录。" },
          { title: "保护修缮", detail: "古建筑得到有效保护修缮。" },
          { title: "文化传承", detail: "成为徽州文化的重要展示窗口。" },
        ],
        facts: [
          { label: "遗产类型", value: "世界文化遗产", description: "2000年列入世界遗产名录。" },
          { label: "保护状况", value: "良好", description: "古建筑保存完好。" },
          { label: "旅游价值", value: "著名景点", description: "安徽重要的旅游景点。" },
        ],
        takeaways: ["世界遗产是荣誉也是责任", "保护是传承的基础", "旅游促进文化传播"],
      },
      {
        id: "dwelling",
        title: "四时宜居",
        strapline: "冬暖夏凉，四季安康。",
        summary:
          "徽派民居深谙自然之道，通过天井通风、厚墙蓄热、南向采光等设计，实现冬暖夏凉的居住体验。",
        visualization: "timeline",
        steps: [
          { title: "春", detail: "春暖花开，天井通风良好。" },
          { title: "夏", detail: "深檐遮阳，穿堂风带来凉意。" },
          { title: "秋", detail: "秋高气爽，庭院晒谷休憩。" },
          { title: "冬", detail: "厚墙蓄热，南向采光聚暖。" },
        ],
        facts: [
          { label: "春季", value: "通风良好", description: "天井形成自然通风。" },
          { label: "夏季", value: "深檐遮阳", description: "马头墙遮挡烈日。" },
          { label: "冬季", value: "厚墙蓄热", description: "南向采光聚暖。" },
        ],
        takeaways: ["民居是智慧的结晶", "顺应自然是根本", "宜居是建筑的终极目标"],
      },
    ],
    sources: [
      { label: "UNESCO｜Ancient Villages in Southern Anhui", url: "https://whc.unesco.org/en/list/1002/" },
    ],
    timeline: [
      { era: "1131", title: "宏村始建", description: "" },
      { era: "1403", title: "水系设计完成", description: "" },
      { era: "2000", title: "列入世界文化遗产", description: "" },
    ],
  },
  {
    id: "zhenglenglou",
    name: "振成楼",
    englishName: "Zhencheng Building",
    tagline: "福建土楼的代表之一，「土楼王子」。",
    dynasty: "民国元年（1912年）始建",
    location: "福建永定县湖坑镇",
    category: "residence",
    illustration: "zhenglenglou",
    palette: ["#b48859", "#7a5235"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "圆楼矗立闽山中，客家智慧耀苍穹",
    seal: "圆",
    history: '振成楼建于民国元年（1912年），由洪坑林氏家族建造，历时五年完工。是福建土楼的代表之一，被誉为"土楼王子"。',
    features: "圆形土楼，直径57.2米；内外两环布局；四层建筑，高19.2米；中西合璧建筑风格；防御与居住完美结合。",
    overview:
      "振成楼是福建土楼的代表之一，建于民国元年，由洪坑林氏家族建造。楼体呈圆形，直径57.2米，高19.2米，内外两环，布局独特，被誉为「土楼王子」、「东方建筑明珠」。",
    significance: [
      "福建土楼的代表之一，展示了土楼建筑的独特魅力。",
      "内外两环的独特布局，体现了土楼建筑的创新发展。",
      "中西合璧的建筑风格，是土楼建筑中的精品。",
    ],
    metrics: [
      { label: "直径", value: "57.2米", description: "圆形土楼，直径57.2米。" },
      { label: "楼高", value: "19.2米", description: "四层，高19.2米。" },
      { label: "始建年代", value: "1912年", description: "民国元年始建，历时五年完工。" },
    ],
    modules: [
      {
        id: "axis",
        title: "圆形布局",
        strapline: "向心凝聚的空间秩序。",
        summary:
          "振成楼采用圆形布局，内外两环，祖堂位于中心，体现了土楼建筑向心凝聚的空间秩序和家族观念。",
        visualization: "ring",
        steps: [
          { title: "外环", detail: "外环四层，居住空间。" },
          { title: "内环", detail: "内环两层，辅助空间。" },
          { title: "祖堂", detail: "祖堂位于中心，精神核心。" },
        ],
        facts: [
          { label: "布局特点", value: "内外两环", description: "外环四层，内环两层。" },
          { label: "空间秩序", value: "向心凝聚", description: "祖堂位于中心，精神核心。" },
          { label: "家族观念", value: "聚族而居", description: "体现家族凝聚观念。" },
        ],
        takeaways: ["圆形布局凝聚人心", "内外两环的创新", "祖堂是精神核心"],
      },
      {
        id: "structure",
        title: "土楼结构",
        strapline: "夯土与木构的结合。",
        summary:
          "振成楼采用夯土外墙与木构楼层相结合的结构方式，外墙厚实坚固，内部木构灵活，是土楼建筑的典型代表。",
        visualization: "layers",
        steps: [
          { title: "夯土外墙", detail: "厚实的夯土外墙，坚固耐用。" },
          { title: "木构楼层", detail: "内部木构楼层，灵活开间。" },
          { title: "结构特点", detail: "外土内木，结构稳固。" },
        ],
        facts: [
          { label: "结构类型", value: "夯土木构", description: "夯土外墙与木构楼层结合。" },
          { label: "外墙厚度", value: "厚实坚固", description: "夯土外墙厚实坚固。" },
          { label: "内部结构", value: "木构灵活", description: "木构楼层，空间灵活。" },
        ],
        takeaways: ["夯土是土楼的核心", "木构提供灵活性", "外土内木的智慧"],
      },
      {
        id: "craft",
        title: "中西合璧",
        strapline: "传统与现代的融合。",
        summary:
          "振成楼在传统土楼建筑基础上，融入了西方建筑元素，如希腊式立柱、铸铁栏杆等，体现了中西合璧的建筑风格。",
        visualization: "grid",
        steps: [
          { title: "希腊立柱", detail: "祖堂前廊采用希腊式立柱。" },
          { title: "铸铁栏杆", detail: "楼层栏杆采用铸铁材质。" },
          { title: "中西融合", detail: "传统土楼与西方元素的融合。" },
        ],
        facts: [
          { label: "西方元素", value: "希腊立柱", description: "祖堂前廊的希腊式立柱。" },
          { label: "现代材料", value: "铸铁栏杆", description: "楼层采用铸铁栏杆。" },
          { label: "建筑风格", value: "中西合璧", description: "传统与现代的融合。" },
        ],
        takeaways: ["中西合璧独具特色", "传统与现代的对话", "创新是建筑的灵魂"],
      },
      {
        id: "ornament",
        title: "土楼文化",
        strapline: "聚族而居的家族观念。",
        summary:
          "振成楼是洪坑林氏家族的聚居地，体现了土楼建筑聚族而居的家族观念和防御功能。",
        visualization: "timeline",
        steps: [
          { title: "林氏家族", detail: "洪坑林氏家族建造的聚居地。" },
          { title: "聚族而居", detail: "家族聚居，共同生活。" },
          { title: "防御功能", detail: "厚墙窄窗，具有防御功能。" },
        ],
        facts: [
          { label: "建造家族", value: "林氏家族", description: "洪坑林氏家族建造。" },
          { label: "居住方式", value: "聚族而居", description: "家族聚居，共同生活。" },
          { label: "功能特点", value: "防御功能", description: "厚墙窄窗，防御性强。" },
        ],
        takeaways: ["土楼是家族的象征", "聚族而居的智慧", "防御功能不可或缺"],
      },
      {
        id: "preservation",
        title: "遗产保护",
        strapline: "土楼王子的当代传承。",
        summary:
          "振成楼作为福建土楼的代表，于2008年随福建土楼整体列入世界文化遗产名录，是研究土楼建筑的重要实物资料。",
        visualization: "timeline",
        steps: [
          { title: "列入世遗", detail: "2008年随福建土楼列入世界遗产。" },
          { title: "保护修缮", detail: "土楼得到有效保护修缮。" },
          { title: "文化传承", detail: "成为土楼文化的重要展示窗口。" },
        ],
        facts: [
          { label: "遗产类型", value: "世界文化遗产", description: "2008年列入世界遗产名录。" },
          { label: "保护状况", value: "良好", description: "土楼保存完好。" },
          { label: "文化价值", value: "土楼代表", description: "福建土楼的代表之一。" },
        ],
        takeaways: ["世界遗产是荣誉也是责任", "保护是传承的基础", "土楼文化需要传承"],
      },
    ],
    sources: [
      { label: "UNESCO｜Fujian Tulou", url: "https://whc.unesco.org/en/list/1113/" },
    ],
    timeline: [
      { era: "1912", title: "振成楼开始建造", description: "" },
      { era: "1917", title: "振成楼建成", description: "" },
      { era: "2008", title: "列入世界文化遗产", description: "" },
    ],
  },
  {
    id: "kongmiaodachengdian",
    name: "孔庙大成殿",
    englishName: "Dacheng Hall of Confucius Temple",
    tagline: "孔庙的核心建筑，中国古代礼制建筑的代表。",
    dynasty: "始建于宋，明清重建",
    location: "山东曲阜",
    category: "palace",
    illustration: "kongmiaodachengdian",
    palette: ["#d8ba69", "#8b4513"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "万仞宫墙仰至圣，大成殿里拜先师",
    seal: "儒",
    history: "孔庙始建于宋，明清重建。大成殿是孔庙核心建筑，供奉孔子。1994年孔庙列入世界文化遗产。",
    features: "重檐歇山顶，高等级建筑形制；28根石柱，前檐10根雕龙柱；雕龙石柱工艺精湛；礼制建筑典范。",
    overview:
      "大成殿是曲阜孔庙的核心建筑，供奉孔子，是中国古代礼制建筑的杰出代表。殿宇宏伟，重檐歇山顶，雕龙石柱精美绝伦，体现了古代对至圣先师的尊崇。",
    significance: [
      "孔庙的核心建筑，供奉孔子，是儒家文化的精神圣地。",
      "雕龙石柱工艺精湛，代表了中国古代石雕艺术的最高水平。",
      "礼制建筑的典范，体现了古代祭祀建筑的等级制度与空间秩序。",
    ],
    metrics: [
      { label: "建筑形制", value: "重檐歇山顶", description: "高等级的宫殿式建筑。" },
      { label: "石柱数量", value: "28根", description: "前檐10根雕龙石柱最为精美。" },
      { label: "遗产类型", value: "世界文化遗产", description: "1994年列入《世界遗产名录》。" },
    ],
    timeline: [
      { era: "北宋天禧二年（1018）", title: "初建大成殿", description: "孔庙大成殿始建，奠定基本格局。" },
      { era: "明弘治十三年（1500）", title: "重建大成殿", description: "因火灾重建，形成今日规模。" },
      { era: "清雍正二年（1724）", title: "再次重修", description: "雍正帝下诏重修，提升建筑等级。" },
    ],
    modules: [
      {
        id: "axis",
        title: "礼制中轴",
        strapline: "从棂星门到大成殿的祭祀路径。",
        summary:
          "孔庙采用传统中轴线布局，从棂星门、圣时门、弘道门到大成殿，形成层层递进的祭祀空间序列。",
        visualization: "axis",
        steps: [
          { title: "棂星门", detail: "孔庙正门，象征尊孔如尊天。" },
          { title: "杏坛", detail: "传为孔子讲学处，位于大成殿前。" },
          { title: "大成殿", detail: "孔庙核心，供奉孔子及配享先贤。" },
        ],
        facts: [
          { label: "布局特点", value: "中轴对称", description: "九进院落，层层递进。" },
          { label: "空间序列", value: "由外入内", description: "从世俗空间进入神圣空间。" },
          { label: "祭祀路径", value: "步步升高", description: "台阶与院落营造庄严氛围。" },
        ],
        takeaways: ["中轴布局体现礼制秩序", "空间序列引导祭祀仪式", "孔庙是儒家文化的空间载体"],
      },
      {
        id: "structure",
        title: "殿宇结构",
        strapline: "重檐歇山顶的宏伟殿堂。",
        summary:
          "大成殿为重檐歇山顶建筑，面阔九间，进深五间，木构架承重，是中国古代高等级建筑的代表。",
        visualization: "layers",
        steps: [
          { title: "台基", detail: "高大的石砌台基，奠定庄重气势。" },
          { title: "柱网", detail: "28根石柱承托殿顶，雕龙精美。" },
          { title: "屋顶", detail: "重檐歇山顶，黄琉璃瓦，等级崇高。" },
        ],
        facts: [
          { label: "建筑形制", value: "重檐歇山顶", description: "仅次于庑殿顶的高等级屋顶。" },
          { label: "面阔进深", value: "九间×五间", description: "面阔九间，进深五间。" },
          { label: "屋顶材料", value: "黄琉璃瓦", description: "皇家规格，体现尊孔如尊君。" },
        ],
        takeaways: ["建筑等级体现尊崇", "重檐歇山顶气势恢宏", "黄琉璃瓦彰显皇家规格"],
      },
      {
        id: "craft",
        title: "雕龙石柱",
        strapline: "中国古代石雕艺术的巅峰之作。",
        summary:
          "大成殿前檐10根雕龙石柱，每柱双龙戏珠，云纹缭绕，工艺精湛，是中国古代石雕艺术的最高成就。",
        visualization: "timeline",
        steps: [
          { title: "选材", detail: "选用优质石料，质地细腻坚硬。" },
          { title: "雕刻", detail: "深浮雕技法，龙纹栩栩如生。" },
          { title: "打磨", detail: "精细打磨，光泽如玉。" },
        ],
        facts: [
          { label: "石柱数量", value: "28根", description: "前檐10根雕龙，后檐及两侧素面。" },
          { label: "雕刻技法", value: "深浮雕", description: "龙纹凸起，立体感强。" },
          { label: "艺术价值", value: "国宝级", description: "中国古代石雕艺术的巅峰之作。" },
        ],
        takeaways: ["雕龙石柱是孔庙的标志", "石雕艺术登峰造极", "工艺体现尊崇之心"],
      },
      {
        id: "ornament",
        title: "祭祀陈设",
        strapline: "儒家文化的精神象征。",
        summary:
          "大成殿内供奉孔子及配享先贤，匾额、楹联、祭器等陈设，共同构成儒家文化的精神象征。",
        visualization: "rings",
        steps: [
          { title: "孔子像", detail: "殿中供奉孔子塑像，庄严慈祥。" },
          { title: "配享先贤", detail: "四配、十二哲分列两侧。" },
          { title: "匾额楹联", detail: "清代皇帝御笔匾额，彰显尊崇。" },
        ],
        facts: [
          { label: "供奉对象", value: "孔子及配享", description: "孔子居中，四配、十二哲分列。" },
          { label: "匾额", value: "御笔匾额", description: "康熙、乾隆等皇帝御笔。" },
          { label: "祭器", value: "青铜祭器", description: "祭祀用的礼器，规格崇高。" },
        ],
        takeaways: ["大成殿是儒家文化的圣地", "陈设体现祭祀礼仪", "皇帝尊孔彰显国家意志"],
      },
      {
        id: "preservation",
        title: "遗产保护",
        strapline: "世界文化遗产的当代传承。",
        summary:
          "孔庙大成殿作为世界文化遗产，保护工作涉及古建筑维护、石雕保护、祭祀文化传承等多个方面。",
        visualization: "timeline",
        steps: [
          { title: "古建修缮", detail: "定期维护木构、石雕、琉璃瓦等。" },
          { title: "祭祀传承", detail: "延续祭孔大典，传承儒家文化。" },
          { title: "公众教育", detail: "作为教育基地，传播儒家文化。" },
        ],
        facts: [
          { label: "保护级别", value: "世界遗产", description: "1994年列入《世界遗产名录》。" },
          { label: "祭祀活动", value: "祭孔大典", description: "每年春秋两季举行祭孔大典。" },
          { label: "文化价值", value: "儒家圣地", description: "儒家文化传播的重要基地。" },
        ],
        takeaways: ["世界遗产需要精心保护", "祭祀文化是活态传承", "孔庙是中华文化的象征"],
      },
    ],
    sources: [
      { label: "曲阜孔庙官网", url: "http://www.qufu.gov.cn/" },
      { label: "UNESCO｜Temple and Cemetery of Confucius", url: "https://whc.unesco.org/en/list/704/" },
    ],
  },
  {
    id: "bishushanzhuang",
    name: "避暑山庄",
    englishName: "Chengde Mountain Resort",
    tagline: "中国现存最大的皇家园林，清朝皇帝避暑和处理政务的场所。",
    dynasty: "清康熙年间始建",
    location: "河北承德",
    category: "palace",
    illustration: "bishushanzhuang",
    palette: ["#4a7c59", "#c9a961"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "离宫别苑避暑地，南北园林聚一园",
    seal: "庄",
    history: "避暑山庄又名承德离宫，始建于清康熙四十二年，历经康熙、乾隆两朝，耗时89年建成。是中国现存最大的皇家园林。",
    features: "占地564万平方米，最大皇家园林；融合南北园林艺术；宫殿、园林、寺庙于一体；康乾盛世的历史见证。",
    overview:
      "避暑山庄又名承德离宫，始建于清康熙四十二年，历经康熙、乾隆两朝，耗时89年建成。山庄占地564万平方米，是中国现存最大的皇家园林，融合了南北园林艺术精华。",
    significance: [
      "中国现存最大的皇家园林，体现了清代皇家园林的最高成就。",
      "融合了南北园林艺术，集宫殿、园林、寺庙于一体。",
      "清朝皇帝避暑和处理政务的场所，见证了清代历史的诸多重要事件。",
    ],
    metrics: [
      { label: "占地面积", value: "564万平方米", description: "中国现存最大的皇家园林。" },
      { label: "建造时间", value: "89年", description: "康熙四十二年至乾隆五十七年。" },
      { label: "遗产类型", value: "世界文化遗产", description: "1994年列入《世界遗产名录》。" },
    ],
    timeline: [
      { era: "清康熙四十二年（1703）", title: "始建山庄", description: "康熙帝下令修建避暑山庄。" },
      { era: "清乾隆五十七年（1792）", title: "建成完工", description: "历经89年，山庄建成。" },
      { era: "1994", title: "列入世界遗产", description: "避暑山庄及周围寺庙被列入《世界遗产名录》。" },
    ],
    modules: [
      {
        id: "axis",
        title: "宫殿区布局",
        strapline: "正宫、松鹤斋、东宫的空间序列。",
        summary:
          "避暑山庄宫殿区采用传统中轴线布局，正宫、松鹤斋、东宫依次排列，形成庄严的皇家宫殿群。",
        visualization: "axis",
        steps: [
          { title: "正宫", detail: "皇帝处理政务和居住的主要宫殿。" },
          { title: "松鹤斋", detail: "皇太后居住的宫殿，环境幽雅。" },
          { title: "东宫", detail: "皇帝读书、娱乐的场所。" },
        ],
        facts: [
          { label: "布局特点", value: "中轴对称", description: "传统宫殿布局，等级分明。" },
          { label: "宫殿数量", value: "多组宫殿", description: "正宫、松鹤斋、东宫等。" },
          { label: "空间功能", value: "政务与生活", description: "既是政务中心，也是生活场所。" },
        ],
        takeaways: ["宫殿区体现皇家威严", "中轴布局彰显等级", "政务与生活功能兼备"],
      },
      {
        id: "structure",
        title: "园林景区",
        strapline: "湖区、平原区、山区的三重景观。",
        summary:
          "避暑山庄分为宫殿区、湖区、平原区、山区四部分，集南北园林艺术之大成，体现了「移天缩地」的造园理念。",
        visualization: "layers",
        steps: [
          { title: "湖区", detail: "仿江南水乡，洲岛错落，亭台楼阁。" },
          { title: "平原区", detail: "仿蒙古草原，绿草如茵，万树园。" },
          { title: "山区", detail: "群山环抱，登高远眺，视野开阔。" },
        ],
        facts: [
          { label: "景区划分", value: "四区", description: "宫殿区、湖区、平原区、山区。" },
          { label: "造园理念", value: "移天缩地", description: "荟萃南北园林精华。" },
          { label: "景观特色", value: "多样统一", description: "湖区秀美，平原开阔，山区雄浑。" },
        ],
        takeaways: ["园林是自然的浓缩", "南北融合的造园智慧", "景观多样而统一"],
      },
      {
        id: "craft",
        title: "建筑技艺",
        strapline: "淡雅朴素的皇家建筑风格。",
        summary:
          "避暑山庄的建筑风格淡雅朴素，不追求金碧辉煌，而是以青砖灰瓦为主，体现了康熙帝「崇尚朴素」的理念。",
        visualization: "grid",
        steps: [
          { title: "材料选择", detail: "青砖灰瓦，木构为主，朴素大方。" },
          { title: "色彩运用", detail: "淡雅为主，不施彩绘，返璞归真。" },
          { title: "装饰风格", detail: "简洁素雅，不事雕琢，自然天成。" },
        ],
        facts: [
          { label: "建筑风格", value: "淡雅朴素", description: "不追求金碧辉煌，崇尚自然。" },
          { label: "材料特点", value: "青砖灰瓦", description: "与故宫的金碧辉煌形成对比。" },
          { label: "设计理念", value: "崇尚朴素", description: "康熙帝「茅茨不剪」的理念。" },
        ],
        takeaways: ["朴素是最高级的审美", "建筑风格体现帝王理念", "避暑山庄返璞归真"],
      },
      {
        id: "ornament",
        title: "周围寺庙",
        strapline: "外八庙的宗教建筑群。",
        summary:
          "避暑山庄周围建有12座寺庙，俗称「外八庙」，融合了汉、藏、蒙等多民族建筑风格，体现了清朝「怀柔远人」的民族政策。",
        visualization: "rings",
        steps: [
          { title: "普宁寺", detail: "仿西藏三摩耶寺，汉藏结合。" },
          { title: "普陀宗乘之庙", detail: "仿布达拉宫，藏式风格。" },
          { title: "须弥福寿之庙", detail: "仿扎什伦布寺，为班禅而建。" },
        ],
        facts: [
          { label: "寺庙数量", value: "12座", description: "俗称「外八庙」。" },
          { label: "建筑风格", value: "多民族融合", description: "汉、藏、蒙等多民族风格。" },
          { label: "政治意义", value: "怀柔远人", description: "体现清朝的民族政策。" },
        ],
        takeaways: ["寺庙是民族政策的体现", "多民族建筑风格融合", "宗教建筑的政治功能"],
      },
      {
        id: "preservation",
        title: "遗产保护",
        strapline: "皇家园林的当代传承。",
        summary:
          "避暑山庄作为世界文化遗产，保护工作涉及古建筑维护、园林景观保护、文物管理等多个方面，同时需要平衡文物保护与旅游开发。",
        visualization: "timeline",
        steps: [
          { title: "古建修缮", detail: "定期维护宫殿、亭台、楼阁等建筑。" },
          { title: "园林养护", detail: "维护湖区、平原区、山区的景观生态。" },
          { title: "文化传承", detail: "展示清代皇家园林文化，传播历史知识。" },
        ],
        facts: [
          { label: "保护级别", value: "世界遗产", description: "1994年列入《世界遗产名录》。" },
          { label: "年游客量", value: "数百万", description: "需要精细化管理保护。" },
          { label: "传承重点", value: "园林文化", description: "清代皇家园林的活态传承。" },
        ],
        takeaways: ["世界遗产需要精心保护", "园林是活态遗产", "保护与开发需要平衡"],
      },
    ],
    sources: [
      { label: "承德避暑山庄官网", url: "http://www.cdbss.com.cn/" },
      { label: "UNESCO｜Mountain Resort and its Outlying Temples", url: "https://whc.unesco.org/en/list/703/" },
    ],
  },
  {
    id: "kaifengtieta",
    name: "开封铁塔",
    englishName: "Iron Pagoda of Kaifeng",
    tagline: "中国现存最高的琉璃砖塔，千年不倒的建筑奇迹。",
    dynasty: "北宋皇祐元年（1049年）",
    location: "河南开封",
    category: "pagoda",
    illustration: "kaifengtieta",
    palette: ["#8b7355", "#5c4033"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "铁塔凌霄立千年，琉璃溢彩耀中原",
    seal: "塔",
    history: "开封铁塔原名开宝寺塔，建于北宋皇祐元年（1049年）。因塔身琉璃砖褐色如铁，远观似铁铸而得名。高55.88米，八角十三层。",
    features: "中国现存最高琉璃砖塔；塔高55.88米；八角十三层；琉璃砖雕精美；千年不倒的建筑奇迹。",
    overview:
      "开封铁塔原名开宝寺塔，因塔身通体以褐色琉璃砖砌筑，远观似铁铸而得名。塔高55.88米，八角十三层，是中国现存最高、历史最悠久的琉璃砖塔，被誉为「天下第一塔」。",
    significance: [
      "中国现存最高的琉璃砖塔，代表了宋代砖塔建筑的最高成就。",
      "塔身琉璃砖雕刻精美，图案丰富，是研究宋代建筑装饰艺术的珍贵实物。",
      "历经千年风雨、地震、水患而屹立不倒，展现了古代建筑的卓越技艺。",
    ],
    metrics: [
      { label: "塔高", value: "55.88米", description: "八角十三层，中国现存最高的琉璃砖塔。" },
      { label: "始建年代", value: "1049年", description: "北宋皇祐元年。" },
      { label: "遗产类型", value: "全国重点文保", description: "1961年首批国保单位。" },
    ],
    timeline: [
      { era: "北宋皇祐元年（1049）", title: "开宝寺塔落成", description: "宋仁宗为供奉佛舍利而下令建造，历时八年完工。" },
      { era: "明代", title: "更名铁塔", description: "因塔身褐色琉璃砖似铁铸，民间称之为铁塔。" },
      { era: "1961年", title: "列入国保", description: "被列入首批全国重点文物保护单位。" },
    ],
    modules: [
      {
        id: "axis",
        title: "寺院选址",
        strapline: "皇家寺院的庄严位置。",
        summary:
          "铁塔原为开宝寺的佛塔，选址于北宋都城汴京（今开封）的皇家寺院内，体现了皇家寺院的尊崇地位。",
        visualization: "layers",
        steps: [
          { title: "皇家寺院", detail: "开宝寺是北宋皇家寺院，地位显赫。" },
          { title: "都城中心", detail: "位于北宋都城汴京，交通便利。" },
          { title: "佛舍利供奉", detail: "塔内供奉佛舍利，是皇家祈福圣地。" },
        ],
        facts: [
          { label: "原属寺院", value: "开宝寺", description: "北宋皇家寺院。" },
          { label: "建造目的", value: "供奉佛舍利", description: "宋仁宗下诏建造。" },
          { label: "历史地位", value: "皇家佛塔", description: "体现了宋代佛教的皇家背景。" },
        ],
        takeaways: ["皇家寺院地位尊崇", "佛塔承载信仰功能", "选址体现政治与宗教的结合"],
      },
      {
        id: "structure",
        title: "琉璃砖塔",
        strapline: "仿木结构的砖塔杰作。",
        summary:
          "铁塔采用仿木结构的砖砌方式，八角十三层，每层用琉璃砖砌出柱、枋、斗拱等构件，外观如木塔，实为砖砌。",
        visualization: "layers",
        steps: [
          { title: "八角形平面", detail: "八角形平面，结构稳定，抗震性能强。" },
          { title: "仿木构件", detail: "琉璃砖砌出柱、枋、斗拱，仿木结构。" },
          { title: "琉璃砖贴面", detail: "褐色琉璃砖贴面，防水耐久。" },
        ],
        facts: [
          { label: "结构类型", value: "仿木砖塔", description: "砖砌仿木结构。" },
          { label: "平面形式", value: "八角形", description: "八角十三层。" },
          { label: "材料特点", value: "琉璃砖", description: "褐色琉璃砖贴面。" },
        ],
        takeaways: ["仿木结构是宋代特色", "八角形平面更稳定", "琉璃砖防水耐久"],
      },
      {
        id: "craft",
        title: "琉璃砖雕",
        strapline: "宋代装饰艺术的巅峰。",
        summary:
          "铁塔的琉璃砖雕刻精美绝伦，包括佛像、菩萨、飞天、花卉、动物等图案，是研究宋代装饰艺术的珍贵实物。",
        visualization: "grid",
        steps: [
          { title: "佛像砖", detail: "雕刻佛像、菩萨、飞天等佛教题材。" },
          { title: "花卉砖", detail: "雕刻莲花、牡丹、宝相花等花卉图案。" },
          { title: "动物砖", detail: "雕刻狮子、麒麟、飞马等瑞兽图案。" },
        ],
        facts: [
          { label: "砖雕题材", value: "丰富多样", description: "佛教、花卉、动物等题材。" },
          { label: "雕刻技法", value: "精湛", description: "浮雕、圆雕等多种技法。" },
          { label: "艺术价值", value: "极高", description: "宋代装饰艺术的代表。" },
        ],
        takeaways: ["琉璃砖雕是艺术精品", "装饰题材反映时代审美", "技艺传承千年"],
      },
      {
        id: "ornament",
        title: "铁色之美",
        strapline: "褐色琉璃的独特魅力。",
        summary:
          "铁塔因褐色琉璃砖远观似铁铸而得名，这种独特的色彩成为铁塔最鲜明的视觉特征。",
        visualization: "ring",
        steps: [
          { title: "铁褐色", detail: "褐色琉璃砖远观似铁，故名铁塔。" },
          { title: "琉璃光泽", detail: "琉璃砖表面光泽，阳光下熠熠生辉。" },
          { title: "色彩持久", detail: "琉璃釉色千年不褪，历久弥新。" },
        ],
        facts: [
          { label: "得名由来", value: "似铁铸", description: "褐色琉璃砖似铁铸。" },
          { label: "色彩特点", value: "铁褐色", description: "独特的褐色釉面。" },
          { label: "视觉效果", value: "庄重典雅", description: "远观庄严，近观精美。" },
        ],
        takeaways: ["色彩是建筑的标识", "琉璃釉色千年不褪", "铁色之美独一无二"],
      },
      {
        id: "preservation",
        title: "千年不倒",
        strapline: "历经风雨的建筑奇迹。",
        summary:
          "铁塔历经千年风雨、地震、水患而屹立不倒，是古代建筑抗震设计的杰出代表。",
        visualization: "timeline",
        steps: [
          { title: "地震考验", detail: "历经多次地震，塔身完好无损。" },
          { title: "水患侵袭", detail: "黄河泛滥多次，塔基稳固。" },
          { title: "当代保护", detail: "列入国保单位，得到系统保护。" },
        ],
        facts: [
          { label: "历史考验", value: "千年不倒", description: "历经地震、水患而屹立。" },
          { label: "抗震设计", value: "卓越", description: "八角形平面，结构稳定。" },
          { label: "保护级别", value: "首批国保", description: "1961年列入国保。" },
        ],
        takeaways: ["千年不倒是奇迹", "抗震设计是智慧", "保护让遗产延续"],
      },
      {
        id: "pagoda",
        title: "登临铁塔",
        strapline: "层层登临，俯瞰开封。",
        summary:
          "佛塔不仅是宗教建筑，更是登高望远的观景台。从塔基到塔刹，每一层都有独特的视野与体验。",
        visualization: "layers",
        steps: [
          { title: "塔基", detail: "稳固根基，承载千年。" },
          { title: "塔身", detail: "层层递进，步步高升。" },
          { title: "塔刹", detail: "直指苍穹，通天达地。" },
        ],
        facts: [
          { label: "登塔体验", value: "俯瞰开封", description: "登临塔顶，俯瞰古城开封。" },
          { label: "视野变化", value: "层层不同", description: "每层都有独特的视野。" },
          { label: "精神体验", value: "登高望远", description: "欲穷千里目，更上一层楼。" },
        ],
        takeaways: ["塔是登高的建筑", "视野决定体验", "登临是一种修行"],
      },
    ],
    sources: [
      { label: "开封市文化广电和旅游局", url: "http://wglj.kaifeng.gov.cn/" },
    ],
  },
  {
    id: "songyuesita",
    name: "嵩岳寺塔",
    englishName: "Songyue Pagoda",
    tagline: "中国现存最古老的砖塔，密檐式塔的鼻祖。",
    dynasty: "北魏正光四年（523年）",
    location: "河南登封嵩山",
    category: "pagoda",
    illustration: "songyuesita",
    palette: ["#c9a961", "#8b7355"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "嵩岳古塔立千年，密檐式塔此为祖",
    seal: "古",
    history: '嵩岳寺塔建于北魏正光四年（523年），是中国现存最古老的砖塔，也是密檐式塔的鼻祖。被誉为"中华第一塔"。',
    features: "中国现存最古老砖塔；密檐式塔鼻祖；十二边形塔身；十五层密檐；建筑形制独特。",
    overview:
      "嵩岳寺塔始建于北魏正光四年，是中国现存最古老的砖塔，也是密檐式塔的鼻祖。塔高37米，十二角十五层，造型独特，是中国古代建筑史上的里程碑。",
    significance: [
      "中国现存最古老的砖塔，距今已有1500年历史。",
      "密檐式塔的开创者，对后世佛塔建筑影响深远。",
      "十二角形平面在中国古塔中极为罕见，造型独特。",
    ],
    metrics: [
      { label: "塔高", value: "37米", description: "十二角十五层，密檐式砖塔。" },
      { label: "始建年代", value: "523年", description: "北魏正光四年。" },
      { label: "遗产类型", value: "世界文化遗产", description: "2010年列入「天地之中」历史建筑群。" },
    ],
    timeline: [
      { era: "北魏正光四年（523）", title: "嵩岳寺塔建成", description: "北魏宣武帝为嵩岳寺建造的佛塔。" },
      { era: "唐代", title: "寺院兴盛", description: "嵩岳寺成为唐代著名寺院。" },
      { era: "2010年", title: "列入世界遗产", description: "作为「天地之中」历史建筑群列入世界遗产名录。" },
    ],
    modules: [
      {
        id: "axis",
        title: "嵩山选址",
        strapline: "中岳嵩山的神圣位置。",
        summary:
          "嵩岳寺塔位于中岳嵩山，是中国五岳之一，自古以来就是宗教圣地，佛塔选址于此体现了佛教与山岳崇拜的结合。",
        visualization: "layers",
        steps: [
          { title: "中岳嵩山", detail: "五岳之一，自古以来就是神圣之地。" },
          { title: "嵩岳寺", detail: "北魏皇家寺院，地位显赫。" },
          { title: "佛道融合", detail: "嵩山是佛道两教的圣地。" },
        ],
        facts: [
          { label: "地理位置", value: "中岳嵩山", description: "五岳之一，神圣之地。" },
          { label: "宗教背景", value: "佛道圣地", description: "佛教与道教并存。" },
          { label: "历史地位", value: "皇家寺院", description: "北魏皇家寺院。" },
        ],
        takeaways: ["山岳是宗教圣地", "佛塔选址体现信仰", "嵩山是文化名山"],
      },
      {
        id: "structure",
        title: "密檐结构",
        strapline: "开创性的佛塔形制。",
        summary:
          "嵩岳寺塔是密檐式塔的开创者，塔身下部为十二角形，上部为八角形，密檐层层叠涩出檐，造型独特。",
        visualization: "layers",
        steps: [
          { title: "十二角形基座", detail: "塔身下部为十二角形，极为罕见。" },
          { title: "密檐叠涩", detail: "密檐层层叠涩出檐，造型优美。" },
          { title: "空心塔身", detail: "塔身空心，可登临远眺。" },
        ],
        facts: [
          { label: "平面形式", value: "十二角形", description: "中国古塔中极为罕见。" },
          { label: "结构类型", value: "密檐式", description: "密檐式塔的开创者。" },
          { label: "塔身结构", value: "空心砖塔", description: "可登临的空心结构。" },
        ],
        takeaways: ["密檐式塔是创新", "十二角形独一无二", "结构决定造型"],
      },
      {
        id: "craft",
        title: "北魏砖艺",
        strapline: "早期砖塔的建筑技艺。",
        summary:
          "嵩岳寺塔代表了北魏时期砖塔建筑的最高水平，砖砌技艺精湛，叠涩出檐技术成熟。",
        visualization: "grid",
        steps: [
          { title: "砖砌技艺", detail: "砖砌精确，灰缝饱满。" },
          { title: "叠涩出檐", detail: "叠涩技术成熟，出檐深远。" },
          { title: "塔身装饰", detail: "塔身有门窗、佛龛等装饰。" },
        ],
        facts: [
          { label: "砖砌技艺", value: "精湛", description: "北魏砖塔的代表。" },
          { label: "叠涩技术", value: "成熟", description: "叠涩出檐技术成熟。" },
          { label: "装饰特点", value: "简洁", description: "早期佛塔装饰简洁。" },
        ],
        takeaways: ["北魏砖艺是基础", "叠涩技术是关键", "简洁是早期特色"],
      },
      {
        id: "ornament",
        title: "塔身装饰",
        strapline: "早期佛塔的装饰语言。",
        summary:
          "嵩岳寺塔的装饰简洁而庄重，塔身有门窗、佛龛等装饰，体现了早期佛塔的装饰风格。",
        visualization: "ring",
        steps: [
          { title: "门窗装饰", detail: "塔身有拱形门、窗装饰。" },
          { title: "佛龛", detail: "塔身有佛龛，曾供奉佛像。" },
          { title: "塔刹", detail: "塔顶有塔刹，是佛塔的标志。" },
        ],
        facts: [
          { label: "装饰风格", value: "简洁庄重", description: "早期佛塔的装饰特点。" },
          { label: "门窗形式", value: "拱形", description: "拱形门窗装饰。" },
          { label: "塔刹形制", value: "宝珠形", description: "宝珠形塔刹。" },
        ],
        takeaways: ["装饰反映时代风格", "简洁是早期特色", "塔刹是佛塔标志"],
      },
      {
        id: "preservation",
        title: "千年传承",
        strapline: "最古老砖塔的当代价值。",
        summary:
          "嵩岳寺塔作为中国现存最古老的砖塔，是研究中国古塔建筑演变的重要实物，已列入世界文化遗产。",
        visualization: "timeline",
        steps: [
          { title: "历史价值", detail: "中国现存最古老的砖塔。" },
          { title: "研究价值", detail: "研究古塔演变的重要实物。" },
          { title: "世界遗产", detail: "2010年列入世界文化遗产。" },
        ],
        facts: [
          { label: "历史地位", value: "最古老砖塔", description: "距今1500年历史。" },
          { label: "研究价值", value: "极高", description: "研究古塔演变的关键案例。" },
          { label: "保护级别", value: "世界遗产", description: "列入「天地之中」历史建筑群。" },
        ],
        takeaways: ["最古老意味着最珍贵", "研究价值不可替代", "世界遗产是最高荣誉"],
      },
      {
        id: "pagoda",
        title: "登临古塔",
        strapline: "层层登临，俯瞰嵩山。",
        summary:
          "佛塔不仅是宗教建筑，更是登高望远的观景台。从塔基到塔刹，每一层都有独特的视野与体验。",
        visualization: "layers",
        steps: [
          { title: "塔基", detail: "稳固根基，承载千年。" },
          { title: "塔身", detail: "层层递进，步步高升。" },
          { title: "塔刹", detail: "直指苍穹，通天达地。" },
        ],
        facts: [
          { label: "登塔体验", value: "俯瞰嵩山", description: "登临塔顶，俯瞰中岳嵩山。" },
          { label: "视野变化", value: "层层不同", description: "每层都有独特的视野。" },
          { label: "精神体验", value: "登高望远", description: "欲穷千里目，更上一层楼。" },
        ],
        takeaways: ["塔是登高的建筑", "视野决定体验", "登临是一种修行"],
      },
    ],
    sources: [
      { label: "UNESCO｜Dengfeng", url: "https://whc.unesco.org/en/list/1305/" },
    ],
  },
  {
    id: "leifengta",
    name: "雷峰塔",
    englishName: "Leifeng Pagoda",
    tagline: "因《白蛇传》传说而闻名，西湖十景之一。",
    dynasty: "北宋太平兴国二年（977年）始建，2002年重建",
    location: "浙江杭州西湖南岸",
    category: "pagoda",
    illustration: "leifengta",
    palette: ["#b8860b", "#8b4513"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "雷峰塔影卧西湖，白蛇传说千古情",
    seal: "蛇",
    history: "雷峰塔始建于北宋太平兴国二年（977年），因《白蛇传》传说而闻名。1924年倒塌，2002年重建。新塔保留了宋代风格。",
    features: "西湖十景之一；因白蛇传传说闻名；2002年重建；五层八面塔身；可登塔远眺西湖。",
    overview:
      "雷峰塔位于杭州西湖南岸夕照山上，始建于北宋太平兴国二年，因《白蛇传》传说而闻名天下。原塔于1924年倒塌，2002年在原址重建，是西湖十景之一「雷峰夕照」的标志。",
    significance: [
      "因《白蛇传》传说而成为中国最具文化影响力的古塔之一。",
      "西湖十景之一「雷峰夕照」，是杭州的文化地标。",
      "重建后的雷峰塔是中国首座采用彩色铜瓦的塔，体现了传统与现代的结合。",
    ],
    metrics: [
      { label: "塔高", value: "71米", description: "五层八面，总高71米。" },
      { label: "始建年代", value: "977年", description: "北宋太平兴国二年。" },
      { label: "重建年代", value: "2002年", description: "原塔1924年倒塌，2002年重建。" },
    ],
    timeline: [
      { era: "北宋太平兴国二年（977）", title: "雷峰塔始建", description: "吴越国王钱俶为庆贺黄妃得子而建，又名黄妃塔。" },
      { era: "1924年", title: "原塔倒塌", description: "年久失修，加之盗挖塔砖，原塔轰然倒塌。" },
      { era: "2002年", title: "重建落成", description: "在原址重建，成为中国首座彩色铜瓦塔。" },
    ],
    modules: [
      {
        id: "axis",
        title: "西湖选址",
        strapline: "夕照山上的绝佳位置。",
        summary:
          "雷峰塔位于西湖南岸夕照山上，居高临下，俯瞰西湖，是观赏「雷峰夕照」的最佳位置。",
        visualization: "layers",
        steps: [
          { title: "夕照山", detail: "西湖南岸的小山，居高临下。" },
          { title: "西湖", detail: "塔前西湖波光粼粼，景色秀丽。" },
          { title: "雷峰夕照", detail: "夕阳西下，塔影倒映湖中，美不胜收。" },
        ],
        facts: [
          { label: "地理位置", value: "西湖南岸", description: "夕照山上，俯瞰西湖。" },
          { label: "景观特点", value: "雷峰夕照", description: "西湖十景之一。" },
          { label: "视野", value: "极佳", description: "俯瞰西湖，远眺群山。" },
        ],
        takeaways: ["选址成就景观", "夕照是西湖美景", "塔与湖相映成趣"],
      },
      {
        id: "structure",
        title: "铜瓦塔身",
        strapline: "传统与现代的结合。",
        summary:
          "重建的雷峰塔采用钢结构骨架，外饰铜瓦，是中国首座彩色铜瓦塔，体现了传统形制与现代技术的结合。",
        visualization: "layers",
        steps: [
          { title: "钢结构骨架", detail: "现代钢结构，稳固耐久。" },
          { title: "铜瓦外饰", detail: "彩色铜瓦，金碧辉煌。" },
          { title: "仿古形制", detail: "五层八面，仿宋代形制。" },
        ],
        facts: [
          { label: "结构类型", value: "钢结构", description: "现代钢结构骨架。" },
          { label: "外饰材料", value: "彩色铜瓦", description: "中国首座彩色铜瓦塔。" },
          { label: "形制特点", value: "仿宋风格", description: "五层八面，仿宋代形制。" },
        ],
        takeaways: ["传统形制现代技术", "铜瓦是创新", "重建延续文脉"],
      },
      {
        id: "craft",
        title: "白蛇传说",
        strapline: "民间传说赋予的文化魅力。",
        summary:
          "雷峰塔因《白蛇传》中白娘子被法海镇压于塔下的传说而闻名，成为中国最具文化影响力的古塔之一。",
        visualization: "timeline",
        steps: [
          { title: "白娘子传说", detail: "白娘子与许仙的爱情故事。" },
          { title: "法海镇妖", detail: "法海将白娘子镇压于雷峰塔下。" },
          { title: "文化影响", detail: "传说让雷峰塔家喻户晓。" },
        ],
        facts: [
          { label: "传说来源", value: "《白蛇传》", description: "中国四大民间传说之一。" },
          { label: "文化影响", value: "深远", description: "让雷峰塔名扬天下。" },
          { label: "文学价值", value: "极高", description: "多次被改编为戏曲、影视。" },
        ],
        takeaways: ["传说赋予建筑灵魂", "文化是建筑的附加值", "民间传说的力量"],
      },
      {
        id: "ornament",
        title: "雷峰夕照",
        strapline: "西湖十景的诗意之美。",
        summary:
          "雷峰夕照是西湖十景之一，夕阳西下时，塔影倒映湖中，金碧辉煌，是杭州最具诗意的景观之一。",
        visualization: "ring",
        steps: [
          { title: "夕阳西下", detail: "夕阳西下，塔身金光闪闪。" },
          { title: "塔影倒映", detail: "塔影倒映湖中，如梦如幻。" },
          { title: "诗意之美", detail: "文人墨客题咏无数。" },
        ],
        facts: [
          { label: "景观地位", value: "西湖十景", description: "杭州最具代表性的景观。" },
          { label: "最佳时间", value: "傍晚", description: "夕阳西下时最美。" },
          { label: "文化价值", value: "极高", description: "文人墨客题咏无数。" },
        ],
        takeaways: ["夕照是自然与人文的结合", "诗意是景观的灵魂", "西湖美景举世闻名"],
      },
      {
        id: "preservation",
        title: "重建传承",
        strapline: "古塔倒塌后的当代重生。",
        summary:
          "原雷峰塔于1924年倒塌，2002年在原址重建。重建工作参考了大量历史文献，力求还原宋代风貌，同时采用现代技术确保安全。",
        visualization: "timeline",
        steps: [
          { title: "原塔倒塌", detail: "1924年，年久失修加之盗挖塔砖，原塔倒塌。" },
          { title: "重建决策", detail: "1999年决定重建，2002年完工。" },
          { title: "遗址保护", detail: "原塔遗址得到保护，可供参观。" },
        ],
        facts: [
          { label: "倒塌原因", value: "年久失修", description: "盗挖塔砖加速倒塌。" },
          { label: "重建时间", value: "2002年", description: "历时三年重建完工。" },
          { label: "遗址保护", value: "原址保护", description: "原塔遗址可供参观。" },
        ],
        takeaways: ["倒塌是历史的遗憾", "重建延续文化记忆", "遗址保护是重要补充"],
      },
      {
        id: "pagoda",
        title: "登临宝塔",
        strapline: "层层登临，俯瞰西湖。",
        summary:
          "佛塔不仅是宗教建筑，更是登高望远的观景台。从塔基到塔刹，每一层都有独特的视野与体验。",
        visualization: "layers",
        steps: [
          { title: "塔基", detail: "稳固根基，承载千年。" },
          { title: "塔身", detail: "层层递进，步步高升。" },
          { title: "塔刹", detail: "直指苍穹，通天达地。" },
        ],
        facts: [
          { label: "登塔体验", value: "俯瞰西湖", description: "登临塔顶，俯瞰西湖全景。" },
          { label: "视野变化", value: "层层不同", description: "每层都有独特的视野。" },
          { label: "精神体验", value: "登高望远", description: "欲穷千里目，更上一层楼。" },
        ],
        takeaways: ["塔是登高的建筑", "视野决定体验", "登临是一种修行"],
      },
    ],
    sources: [
      { label: "杭州西湖风景名胜区", url: "http://westlake.hangzhou.gov.cn/" },
    ],
  },
  {
    id: "xianzhonglou",
    name: "西安钟楼",
    englishName: "Xi'an Bell Tower",
    tagline: "中国现存形制最大、保存最完整的古代钟楼。",
    dynasty: "明洪武十七年（1384年）始建，万历十年（1582年）移建",
    location: "陕西西安市中心",
    category: "tower",
    illustration: "xianzhonglou",
    palette: ["#8b4513", "#d4a574"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "晨钟暮鼓响长安，古城中心立千年",
    seal: "钟",
    history: "西安钟楼始建于明洪武十七年（1384年），万历年间移建现址。是全国现存形制最大、保存最完整的古代钟楼。",
    features: "中国现存最大钟楼；明初建筑；重檐攒尖顶；位于西安市中心；与鼓楼相对。",
    overview:
      "西安钟楼位于西安市中心，明城墙内东西南北四条大街的交汇处，是中国现存形制最大、保存最完整的古代钟楼。钟楼建在方型基座之上，为砖木结构，重檐三滴水四角攒尖顶，是西安市的标志性建筑。",
    significance: [
      "中国现存钟楼中形制最大、保存最完整的一座，是研究明代钟楼建筑的典范。",
      "钟楼位于西安古城中心，是城市中轴线的交汇点，体现了中国传统城市的规划思想。",
      "作为西安地标，钟楼见证了古城六百余年的历史变迁，承载着深厚的文化记忆。",
    ],
    metrics: [
      { label: "建筑高度", value: "36米", description: "基座高8.6米，楼高27.4米。" },
      { label: "平面形制", value: "方形", description: "基座与楼体均为方形，边长35.5米。" },
      { label: "屋顶形式", value: "重檐三滴水攒尖顶", description: "四角攒尖，绿琉璃瓦。" },
    ],
    timeline: [
      { era: "明洪武十七年（1384）", title: "初建", description: "由西安城指挥使司主持建造，原址在广济街口。" },
      { era: "明万历十年（1582）", title: "整体移建", description: "因城市扩建，钟楼整体迁移至现址，工程浩大。" },
      { era: "新中国成立后", title: "多次修缮", description: "历经多次保护性修缮，保存完好，成为西安地标。" },
    ],
    modules: [
      {
        id: "axis",
        title: "城市中心",
        strapline: "四街交汇，古城之心。",
        summary:
          "钟楼位于西安古城东西南北四条大街的交汇处，是城市空间的核心节点，体现了中国传统城市以中心为尊的规划理念。",
        visualization: "axis",
        steps: [
          { title: "四街交汇", detail: "东西南北四条大街在此交汇，形成城市交通枢纽。" },
          { title: "中轴定位", detail: "钟楼位于古城中轴线上，是城市空间的几何中心。" },
          { title: "地标功能", detail: "登楼可俯瞰古城全貌，是认识西安的最佳起点。" },
        ],
        facts: [
          { label: "空间定位", value: "城市中心", description: "四条大街交汇处。" },
          { label: "规划理念", value: "中轴对称", description: "体现传统城市规划思想。" },
          { label: "地标价值", value: "西安象征", description: "古城最具辨识度的建筑。" },
        ],
        takeaways: ["中心是城市的灵魂", "中轴线定义秩序", "地标承载城市记忆"],
      },
      {
        id: "structure",
        title: "木构楼阁",
        strapline: "砖木结合，重檐攒尖。",
        summary:
          "钟楼采用砖木结构，基座为砖砌方形，楼身为木构框架，重檐三滴水四角攒尖顶，结构精巧，比例和谐。",
        visualization: "layers",
        steps: [
          { title: "砖砌基座", detail: "方形基座由青砖砌筑，开有十字形券洞。" },
          { title: "木构楼身", detail: "楼身为木构框架，斗拱承托屋檐，结构稳固。" },
          { title: "攒尖屋顶", detail: "重檐三滴水四角攒尖顶，绿琉璃瓦覆盖。" },
        ],
        facts: [
          { label: "结构类型", value: "砖木结构", description: "基座砖砌，楼身木构。" },
          { label: "屋顶形式", value: "重檐攒尖", description: "三滴水四角攒尖顶。" },
          { label: "斗拱形制", value: "明代风格", description: "斗拱硕大，承托有力。" },
        ],
        takeaways: ["砖木结合是传统智慧", "攒尖顶适合方形平面", "斗拱是结构也是装饰"],
      },
      {
        id: "craft",
        title: "营造技艺",
        strapline: "整体移建，工艺精湛。",
        summary:
          "西安钟楼最令人称道的是明代万历年间整体移建的工程奇迹，展现了古代建筑移建的高超技艺。",
        visualization: "timeline",
        steps: [
          { title: "原址建造", detail: "洪武十七年建于广济街口，工程精良。" },
          { title: "整体移建", detail: "万历十年整体迁移至现址，基座、楼身分别拆装重建。" },
          { title: "保存完好", detail: "历经四百余年，结构稳固，保存完好。" },
        ],
        facts: [
          { label: "移建年代", value: "1582年", description: "明代万历十年。" },
          { label: "工程难度", value: "极高", description: "整体迁移，工程浩大。" },
          { label: "保存状况", value: "完好", description: "历经四百余年仍保存完好。" },
        ],
        takeaways: ["移建是古代工程奇迹", "木构建筑可拆卸重组", "精湛工艺确保长久保存"],
      },
      {
        id: "ornament",
        title: "装饰艺术",
        strapline: "彩画木雕，金碧辉煌。",
        summary:
          "钟楼内部装饰精美，彩画、木雕、金饰交相辉映，展现了明代建筑装饰艺术的高超水平。",
        visualization: "rings",
        steps: [
          { title: "彩画装饰", detail: "梁枋、斗拱绘有精美的明代彩画，色彩绚丽。" },
          { title: "木雕艺术", detail: "门窗、栏杆有精美的木雕装饰，工艺精湛。" },
          { title: "金饰点缀", detail: "重要部位贴金装饰，彰显尊贵。" },
        ],
        facts: [
          { label: "彩画风格", value: "明代官式", description: "色彩绚丽，图案规整。" },
          { label: "木雕题材", value: "吉祥图案", description: "花卉、瑞兽等吉祥纹样。" },
          { label: "整体效果", value: "金碧辉煌", description: "彩画、木雕、金饰相得益彰。" },
        ],
        takeaways: ["装饰彰显等级", "彩画是明代特色", "细节体现工艺水平"],
      },
      {
        id: "preservation",
        title: "保护传承",
        strapline: "古楼新姿，城市记忆。",
        summary:
          "西安钟楼作为国家重点文物保护单位，历经多次修缮保护，成为展示西安历史文化的重要窗口。",
        visualization: "timeline",
        steps: [
          { title: "文保单位", detail: "1956年列为陕西省文物保护单位，1988年升为全国重点文保单位。" },
          { title: "修缮保护", detail: "新中国成立后多次修缮，保持建筑原貌。" },
          { title: "开放展示", detail: "对外开放参观，成为西安旅游必到之地。" },
        ],
        facts: [
          { label: "保护级别", value: "全国重点", description: "1988年列入全国重点文保单位。" },
          { label: "开放情况", value: "对外开放", description: "可登楼参观，俯瞰古城。" },
          { label: "文化价值", value: "城市象征", description: "西安最具代表性的古建筑。" },
        ],
        takeaways: ["保护是传承的基础", "开放让遗产活起来", "古建筑是城市名片"],
      },
    ],
    sources: [
      { label: "西安市钟鼓楼博物馆", url: "http://www.xazglbwg.com/" },
      { label: "陕西省文物局", url: "http://wwj.shaanxi.gov.cn/" },
    ],
  },
  {
    id: "shizilin",
    name: "狮子林",
    englishName: "Lion Grove Garden",
    tagline: "以假山著称的苏州园林，「假山王国」。",
    dynasty: "元代至正二年（1342年）始建，明清多次修缮",
    location: "江苏苏州",
    category: "garden",
    illustration: "shizilin",
    palette: ["#4a7c59", "#8fbc8f"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "狮子林中游假山，曲径通幽悟禅心",
    seal: "石",
    history: '狮子林始建于元代至正二年（1342年），是苏州四大名园之一，以假山闻名于世，被誉为"假山王国"。1997年列入世界文化遗产。',
    features: "以假山著称的苏州园林；假山王国；九条游览路线；洞壑宛转；禅宗意境与文人审美融合。",
    overview:
      '狮子林是苏州四大名园之一，以假山闻名于世，被誉为"假山王国"。园内假山群峰起伏，奇峰怪石林立，洞壑宛转，曲径通幽，是中国古典园林中假山艺术的巅峰之作。',
    significance: [
      "狮子林以假山著称，园内假山群是中国古典园林假山艺术的代表作品。",
      "园林融合禅宗意境与文人审美，体现了元代园林的独特风格。",
      "作为苏州古典园林的重要组成部分，1997年被列入世界文化遗产。",
    ],
    metrics: [
      { label: "园林面积", value: "约1.1公顷", description: "规模适中，布局紧凑。" },
      { label: "假山数量", value: "九条路线", description: "假山群有九条游览路线，二十一处洞壑。" },
      { label: "主要特色", value: "假山艺术", description: "被誉为「假山王国」。" },
    ],
    timeline: [
      { era: "元至正二年（1342）", title: "始建", description: "高僧惟则创建菩提正宗寺，后名狮子林。" },
      { era: "明清时期", title: "多次修缮", description: "历经明清多次修缮扩建，形成今日格局。" },
      { era: "1997年", title: "列入世遗", description: "作为苏州古典园林组成部分列入世界文化遗产。" },
    ],
    modules: [
      {
        id: "axis",
        title: "园林布局",
        strapline: "以水为中心，假山为主景。",
        summary:
          "狮子林以水池为中心，假山群为主景，亭台楼阁环绕其间，形成'园中园'的格局，体现了苏州园林小中见大的造园手法。",
        visualization: "rings",
        steps: [
          { title: "水池中心", detail: "园中以水池为中心，水面开阔，倒影成趣。" },
          { title: "假山主景", detail: "假山群位于园东南，是全园的视觉焦点。" },
          { title: "建筑环绕", detail: "亭台楼阁环绕水池，形成丰富的游览路线。" },
        ],
        facts: [
          { label: "布局特点", value: "以水为中心", description: "水池是全园的构图中心。" },
          { label: "主景定位", value: "假山群", description: "假山是全园的核心景观。" },
          { label: "空间组织", value: "小中见大", description: "有限空间创造无限意境。" },
        ],
        takeaways: ["水是园林的灵魂", "假山是狮子林的特色", "小中见大是造园智慧"],
      },
      {
        id: "structure",
        title: "假山艺术",
        strapline: "九路二十洞，假山王国。",
        summary:
          "狮子林的假山群由太湖石堆叠而成，峰峦起伏，洞壑宛转，有九条游览路线、二十一处洞壑，被誉为'假山王国'。",
        visualization: "layers",
        steps: [
          { title: "太湖石选材", detail: "选用太湖石，玲珑剔透，姿态万千。" },
          { title: "堆叠技艺", detail: "假山堆叠技艺精湛，峰峦起伏，洞壑宛转。" },
          { title: "游览体验", detail: "九条路线穿行其间，移步换景，趣味无穷。" },
        ],
        facts: [
          { label: "石材选择", value: "太湖石", description: "玲珑剔透，姿态万千。" },
          { label: "堆叠技艺", value: "精湛", description: "峰峦起伏，洞壑宛转。" },
          { label: "游览路线", value: "九路二十洞", description: "九条路线，二十一处洞壑。" },
        ],
        takeaways: ["太湖石是假山首选", "堆叠技艺决定成败", "游览体验是设计目标"],
      },
      {
        id: "craft",
        title: "造园技艺",
        strapline: "禅意与文人审美的融合。",
        summary:
          "狮子林由僧人创建，融合禅宗意境与文人审美，园名取自佛经'狮子座'，体现了元代园林独特的文化内涵。",
        visualization: "timeline",
        steps: [
          { title: "禅宗渊源", detail: "由高僧惟则创建，园名取自佛经'狮子座'。" },
          { title: "文人参与", detail: "明清文人参与修缮，融入文人审美。" },
          { title: "艺术成就", detail: "假山艺术达到巅峰，成为苏州园林代表。" },
        ],
        facts: [
          { label: "创建者", value: "高僧惟则", description: "元代高僧，创建菩提正宗寺。" },
          { label: "园名来源", value: "佛经", description: "取自佛经'狮子座'。" },
          { label: "文化特色", value: "禅意园林", description: "融合禅宗与文人审美。" },
        ],
        takeaways: ["园林承载文化", "禅意是狮子林的特色", "文人参与提升艺术品位"],
      },
      {
        id: "ornament",
        title: "建筑点缀",
        strapline: "亭台楼阁，相映成趣。",
        summary:
          "狮子林内亭台楼阁错落有致，与假山、水池相映成趣，主要建筑有燕誉堂、指柏轩、问梅阁等，各具特色。",
        visualization: "rings",
        steps: [
          { title: "燕誉堂", detail: "园内主厅，面阔三间，是接待宾客的场所。" },
          { title: "指柏轩", detail: "二层楼阁，可俯瞰假山群，视野开阔。" },
          { title: "问梅阁", detail: "位于假山之上，可赏梅观景，意境深远。" },
        ],
        facts: [
          { label: "主厅", value: "燕誉堂", description: "园内最重要的建筑。" },
          { label: "观景楼阁", value: "指柏轩", description: "二层楼阁，俯瞰假山。" },
          { label: "园林意境", value: "问梅阁", description: "赏梅观景，意境深远。" },
        ],
        takeaways: ["建筑是园林的点睛之笔", "亭台楼阁各有功能", "建筑与山水相映成趣"],
      },
      {
        id: "preservation",
        title: "世遗保护",
        strapline: "古典园林的当代价值。",
        summary:
          "狮子林作为苏州古典园林的重要组成部分，1997年被列入世界文化遗产，得到了系统的保护与修缮，成为展示中国园林艺术的重要窗口。",
        visualization: "timeline",
        steps: [
          { title: "文物保护", detail: "列为全国重点文物保护单位，得到系统保护。" },
          { title: "世遗名录", detail: "1997年列入世界文化遗产，国际认可。" },
          { title: "开放展示", detail: "对外开放参观，展示中国园林艺术。" },
        ],
        facts: [
          { label: "保护级别", value: "世界遗产", description: "1997年列入世界文化遗产。" },
          { label: "保护状况", value: "完好", description: "得到系统保护与修缮。" },
          { label: "展示价值", value: "园林艺术典范", description: "展示中国古典园林艺术。" },
        ],
        takeaways: ["世界遗产是最高荣誉", "保护是传承的基础", "开放展示让遗产活起来"],
      },
      {
        id: "garden",
        title: "园林意境",
        strapline: "移步换景，漏窗取景，曲径通幽。",
        summary:
          "园林之美在于空间层次的精心编排。透过漏窗框景，沿着曲径前行，每一步都是一幅新的画卷。",
        visualization: "courtyard",
        steps: [
          { title: "漏窗取景", detail: "透过漏窗，框景入画，一步一景，移步换景。" },
          { title: "曲径通幽", detail: "蜿蜒小径，曲径通幽，峰回路转，柳暗花明。" },
          { title: "水映倒影", detail: "池水如镜，倒影成画，虚实相生，意境悠远。" },
        ],
        facts: [
          { label: "核心手法", value: "移步换景", description: "园林通过路径设计，让每一步都有新的发现。" },
          { label: "视觉技巧", value: "框景借景", description: "漏窗、门洞是园林的取景框。" },
          { label: "空间哲学", value: "小中见大", description: "有限空间创造无限意境。" },
        ],
        takeaways: ["园林是空间的艺术", "行走即是阅读", "框景创造意境"],
      },
    ],
    sources: [
      { label: "苏州园林博物馆", url: "http://www.szgarden.com.cn/" },
      { label: "UNESCO｜Classical Gardens of Suzhou", url: "https://whc.unesco.org/en/list/813/" },
    ],
  },
  {
    id: "wangshiyuan",
    name: "网师园",
    englishName: "Master of the Nets Garden",
    tagline: "苏州园林中以小巧精致著称，「小园极则」。",
    dynasty: "南宋始建，清代重建",
    location: "江苏苏州",
    category: "garden",
    illustration: "wangshiyuan",
    palette: ["#6b8e23", "#556b2f"],
    imageUrl: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
    poem: "网师园中精巧致，小园极则韵味深",
    seal: "小",
    history: '网师园始建于南宋，清代重建。是苏州园林中面积最小的一座，却以布局精巧著称，被誉为"小园极则"。',
    features: "苏州园林小中见大的典范；以水池为中心；亭台楼阁精巧；小园极则；意境深远。",
    overview:
      "网师园是苏州园林中面积最小的一座，却以布局精巧、意境深远著称，被誉为「小园极则」。园内以水池为中心，亭台楼阁环绕，虽小而全，是研究苏州园林「小中见大」造园手法的最佳案例。",
    significance: [
      "网师园是苏州园林中面积最小却布局最精巧的一座，被誉为「小园极则」。",
      "园林完美诠释了「小中见大」的造园手法，是研究苏州园林的典范案例。",
      "作为苏州古典园林的重要组成部分，1997年被列入世界文化遗产。",
    ],
    metrics: [
      { label: "园林面积", value: "约0.5公顷", description: "苏州园林中面积最小的一座。" },
      { label: "布局特点", value: "以水为中心", description: "水池是全园的构图中心。" },
      { label: "艺术评价", value: "小园极则", description: "小而全，精而巧。" },
    ],
    timeline: [
      { era: "南宋时期", title: "始建", description: "史正志建万卷堂，后荒废。" },
      { era: "清乾隆年间", title: "重建", description: "宋宗元重建，取名网师园。" },
      { era: "1997年", title: "列入世遗", description: "作为苏州古典园林组成部分列入世界文化遗产。" },
    ],
    modules: [
      {
        id: "axis",
        title: "精巧布局",
        strapline: "小中见大，以少胜多。",
        summary:
          "网师园面积虽小，却通过精巧的布局实现了「小中见大」的效果。园内以水池为中心，亭台楼阁环绕，空间层次丰富，意境深远。",
        visualization: "rings",
        steps: [
          { title: "水池中心", detail: "园中以水池为中心，水面开阔，倒影成趣。" },
          { title: "建筑环绕", detail: "亭台楼阁环绕水池，形成丰富的空间层次。" },
          { title: "借景扩境", detail: "通过借景手法，将园外景色纳入园中，扩大空间感。" },
        ],
        facts: [
          { label: "布局特点", value: "以水为中心", description: "水池是全园的构图中心。" },
          { label: "空间手法", value: "小中见大", description: "有限空间创造无限意境。" },
          { label: "造园智慧", value: "以少胜多", description: "精简元素，突出意境。" },
        ],
        takeaways: ["小不是限制而是特色", "水池是园林的灵魂", "借景是扩大空间的妙法"],
      },
      {
        id: "structure",
        title: "建筑布局",
        strapline: "亭台楼阁，错落有致。",
        summary:
          "网师园内建筑布局精巧，亭台楼阁错落有致，主要建筑有万卷堂、撷秀楼、月到风来亭等，各具特色，与水池、假山相映成趣。",
        visualization: "layers",
        steps: [
          { title: "万卷堂", detail: "园内主厅，面阔三间，是接待宾客的场所。" },
          { title: "撷秀楼", detail: "二层楼阁，可俯瞰全园，视野开阔。" },
          { title: "月到风来亭", detail: "位于水池边，可赏月观景，意境深远。" },
        ],
        facts: [
          { label: "主厅", value: "万卷堂", description: "园内最重要的建筑。" },
          { label: "观景楼阁", value: "撷秀楼", description: "二层楼阁，俯瞰全园。" },
          { label: "园林意境", value: "月到风来亭", description: "赏月观景，意境深远。" },
        ],
        takeaways: ["建筑是园林的点睛之笔", "亭台楼阁各有功能", "建筑与山水相映成趣"],
      },
      {
        id: "craft",
        title: "造园技艺",
        strapline: "精雕细琢，意境深远。",
        summary:
          "网师园的造园技艺精湛，从假山堆叠、水岸处理到植物配置，都体现了「精雕细琢」的匠心，是研究苏州园林造园手法的最佳案例。",
        visualization: "timeline",
        steps: [
          { title: "假山堆叠", detail: "假山虽小，却峰峦起伏，洞壑宛转。" },
          { title: "水岸处理", detail: "水岸曲折有致，与建筑、假山相呼应。" },
          { title: "植物配置", detail: "植物配置精巧，四季有景，意境深远。" },
        ],
        facts: [
          { label: "假山技艺", value: "精巧", description: "虽小却峰峦起伏。" },
          { label: "水岸处理", value: "曲折有致", description: "与建筑、假山相呼应。" },
          { label: "植物配置", value: "四季有景", description: "精巧配置，意境深远。" },
        ],
        takeaways: ["精雕细琢是造园之本", "细节决定园林品质", "意境是园林的灵魂"],
      },
      {
        id: "ornament",
        title: "装饰艺术",
        strapline: "窗棂门楣，细节之美。",
        summary:
          "网师园的装饰艺术精美，窗棂、门楣、栏杆等细部都有精美的雕刻装饰，体现了苏州园林「精雕细琢」的艺术特色。",
        visualization: "rings",
        steps: [
          { title: "窗棂雕刻", detail: "窗棂有精美的木雕装饰，图案丰富。" },
          { title: "门楣装饰", detail: "门楣有砖雕装饰，工艺精湛。" },
          { title: "栏杆设计", detail: "栏杆设计精美，与建筑风格协调。" },
        ],
        facts: [
          { label: "窗棂装饰", value: "木雕精美", description: "图案丰富，工艺精湛。" },
          { label: "门楣装饰", value: "砖雕", description: "工艺精湛，细节考究。" },
          { label: "整体风格", value: "精致典雅", description: "与园林意境相协调。" },
        ],
        takeaways: ["细节体现品质", "装饰服务中心性", "精致是苏州园林的特色"],
      },
      {
        id: "preservation",
        title: "世遗保护",
        strapline: "小园典范的当代价值。",
        summary:
          "网师园作为苏州古典园林的重要组成部分，1997年被列入世界文化遗产，得到了系统的保护与修缮，成为展示中国园林「小中见大」造园手法的最佳窗口。",
        visualization: "timeline",
        steps: [
          { title: "文物保护", detail: "列为全国重点文物保护单位，得到系统保护。" },
          { title: "世遗名录", detail: "1997年列入世界文化遗产，国际认可。" },
          { title: "开放展示", detail: "对外开放参观，展示中国园林艺术。" },
        ],
        facts: [
          { label: "保护级别", value: "世界遗产", description: "1997年列入世界文化遗产。" },
          { label: "保护状况", value: "完好", description: "得到系统保护与修缮。" },
          { label: "展示价值", value: "小园典范", description: "展示「小中见大」造园手法。" },
        ],
        takeaways: ["世界遗产是最高荣誉", "保护是传承的基础", "小园也有大智慧"],
      },
      {
        id: "garden",
        title: "园林意境",
        strapline: "移步换景，漏窗取景，曲径通幽。",
        summary:
          "园林之美在于空间层次的精心编排。透过漏窗框景，沿着曲径前行，每一步都是一幅新的画卷。",
        visualization: "courtyard",
        steps: [
          { title: "漏窗取景", detail: "透过漏窗，框景入画，一步一景，移步换景。" },
          { title: "曲径通幽", detail: "蜿蜒小径，曲径通幽，峰回路转，柳暗花明。" },
          { title: "水映倒影", detail: "池水如镜，倒影成画，虚实相生，意境悠远。" },
        ],
        facts: [
          { label: "核心手法", value: "移步换景", description: "园林通过路径设计，让每一步都有新的发现。" },
          { label: "视觉技巧", value: "框景借景", description: "漏窗、门洞是园林的取景框。" },
          { label: "空间哲学", value: "小中见大", description: "有限空间创造无限意境。" },
        ],
        takeaways: ["园林是空间的艺术", "行走即是阅读", "框景创造意境"],
      },
    ],
    sources: [
      { label: "苏州园林博物馆", url: "http://www.szgarden.com.cn/" },
      { label: "UNESCO｜Classical Gardens of Suzhou", url: "https://whc.unesco.org/en/list/813/" },
    ],
  },
];

export const buildingsById = Object.fromEntries(
  buildingsData.map((building) => [building.id, building]),
) as Record<string, BuildingData>;
