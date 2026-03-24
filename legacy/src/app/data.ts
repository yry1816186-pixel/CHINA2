export interface BuildingData {
  id: string;
  name: string;
  dynasty: string;
  location: string;
  history: string;
  features: string;
  imageUrl: string;
  poem: string;
  seal: string;
}

export const buildingsData: BuildingData[] = [
  {
    id: "gugong",
    name: "太和殿",
    dynasty: "明 · 清",
    location: "北京紫禁城",
    history: "俗称金銮殿，为中国古代宫殿建筑之精华。明永乐十八年建成，称奉天殿。嘉靖四十一年改称皇极殿。清顺治二年改名太和殿。",
    features: "中国现存最大的木结构大殿，重檐庑殿顶，面阔十一间，进深五间，象征皇权的九五之尊，鎏金铜瓦，气势恢宏。",
    imageUrl: "https://images.unsplash.com/photo-1768109027951-06d0296ba9aa?auto=format&fit=crop&q=80&w=1080",
    poem: "建极绥猷巍巍太和",
    seal: "皇极"
  },
  {
    id: "qiniandian",
    name: "祈年殿",
    dynasty: "明 · 清",
    location: "北京天坛",
    history: "建于明永乐十八年，初名大祀殿，为矩形大殿。嘉靖二十四年改建为三重顶圆殿，名为大享殿。清乾隆十六年改名祈年殿。",
    features: "圆形三重檐攒尖顶，上覆镏金宝顶，蓝琉璃瓦。殿内由二十八根金丝楠木大柱支撑，分别代表四季、十二个月和十二时辰，结构奇巧。",
    imageUrl: "https://images.unsplash.com/photo-1744249932190-a04ced8acf3d?auto=format&fit=crop&q=80&w=1080",
    poem: "敬天法祖祈谷丰年",
    seal: "祈年"
  },
  {
    id: "huanghelou",
    name: "黄鹤楼",
    dynasty: "三国 · 唐",
    location: "湖北武汉",
    history: "始建于三国时代吴黄武二年，历代屡毁屡建。唐代崔颢的《黄鹤楼》和李白的《黄鹤楼送孟浩然之广陵》使之名扬天下。",
    features: "江南三大名楼之一，现存建筑为1985年重建，以清代同治楼为原型设计，五层飞檐，金碧辉煌，四望如一。",
    imageUrl: "https://images.unsplash.com/photo-1662307414500-32c554fbfd09?auto=format&fit=crop&q=80&w=1080",
    poem: "昔人已乘黄鹤去此地空余黄鹤楼",
    seal: "黄鹤"
  },
  {
    id: "yueyanglou",
    name: "岳阳楼",
    dynasty: "东汉 · 宋",
    location: "湖南岳阳",
    history: "前身为三国东吴将领鲁肃的阅军楼，西晋南北朝时称巴陵城楼。北宋滕子京重修，范仲淹作《岳阳楼记》，使其名传千古。",
    features: "中国唯一存世的纯木结构盔顶古建筑。楼顶采用四坡盔顶，黄色琉璃瓦，造型奇特，如同古代将军的头盔。全楼未用一根铁钉，榫卯结构精巧。",
    imageUrl: "https://images.unsplash.com/photo-1662307414500-32c554fbfd09?auto=format&fit=crop&q=80&w=1080",
    poem: "先天下之忧而忧后天下之乐而乐",
    seal: "巴陵"
  },
  {
    id: "tengwangge",
    name: "滕王阁",
    dynasty: "唐 · 宋",
    location: "江西南昌",
    history: "唐永徽四年由唐太宗之弟滕王李元婴任洪州都督时修建。因王勃的《滕王阁序》而闻名于世，历经多次重建。",
    features: "楼阁主体建筑高大宏伟，飞檐翘角，斗拱交错，彩绘华丽，呈现出明三暗七的结构特征，再现大唐盛世之风。",
    imageUrl: "https://images.unsplash.com/photo-1758971180756-18d212394b77?auto=format&fit=crop&q=80&w=1080",
    poem: "落霞与孤鹜齐飞秋水共长天一色",
    seal: "滕王"
  },
  {
    id: "greatwall",
    name: "万里长城",
    dynasty: "春秋 · 明",
    location: "中国北方",
    history: "始建于春秋战国时期，历代均有修筑。现存长城遗迹主要为明长城，西起嘉峪关，东至鸭绿江畔的虎山。",
    features: "因地形而起伏，由城墙、敌台、关隘、烽火台等构成的庞大防御体系，是中国古代军事工程的奇迹。",
    imageUrl: "https://images.unsplash.com/photo-1733582077701-7d9ad30b4265?auto=format&fit=crop&q=80&w=1080",
    poem: "不到长城非好汉屈指行程二万",
    seal: "雄关"
  },
  {
    id: "potala",
    name: "布达拉宫",
    dynasty: "吐蕃 · 清",
    location: "西藏拉萨",
    history: "始建于公元7世纪吐蕃王朝松赞干布时期。17世纪五世达赖喇嘛时期重建后，成为历代达赖喇嘛的冬宫居所。",
    features: "世界上海拔最高、最宏伟的宫堡式建筑群。红宫与白宫交相辉映，依山垒砌，群楼重叠，体现了藏族古建筑艺术的精髓。",
    imageUrl: "https://images.unsplash.com/photo-1701913997567-746dd137eff6?auto=format&fit=crop&q=80&w=1080",
    poem: "雪域高原圣地梵音萦绕佛光",
    seal: "雪域"
  },
  {
    id: "dayanta",
    name: "大雁塔",
    dynasty: "唐",
    location: "陕西西安",
    history: "始建于唐永徽三年（652年），玄奘法师为保存由天竺经丝绸之路带回长安的经卷佛像主持修建。历代屡有修葺。",
    features: "现存最早、规模最大的唐代四方楼阁式砖塔。塔身七层，底层呈正方形，越往上越收分，体现了中印建筑艺术的融合。",
    imageUrl: "https://images.unsplash.com/photo-1598538982410-c86b30005fb4?auto=format&fit=crop&q=80&w=1080",
    poem: "塔势如涌出孤高耸天宫",
    seal: "雁塔"
  },
  {
    id: "yingxianmuta",
    name: "应县木塔",
    dynasty: "辽",
    location: "山西朔州",
    history: "全称佛宫寺释迦塔，建于辽清宁二年（1056年）。是世界上现存最古老、最高大的全木结构高层塔式建筑。",
    features: "纯木结构，无一根铁钉，全靠斗拱、柱梁镶嵌穿插吻合。塔高67.31米，外观五层，内实九层，历经千年地震而不倒。",
    imageUrl: "https://images.unsplash.com/photo-1758762894430-7b2fa2de1755?auto=format&fit=crop&q=80&w=1080",
    poem: "浮图最高峙万古镇山河",
    seal: "释迦"
  },
  {
    id: "leshanbuddha",
    name: "乐山大佛",
    dynasty: "唐",
    location: "四川乐山",
    history: "开凿于唐代开元元年（713年），历时90年才完工。位于岷江、青衣江、大渡河三江汇流处，旨在减杀水势，普渡众生。",
    features: "中国最大的一尊摩崖石刻造像。大佛为弥勒佛坐像，通高71米，头与山齐，足踏大江，双手抚膝，神态慈祥，气魄雄伟。",
    imageUrl: "https://images.unsplash.com/photo-1768501447773-d5c41a67c146?auto=format&fit=crop&q=80&w=1080",
    poem: "山是一尊佛佛是一座山",
    seal: "凌云"
  }
];