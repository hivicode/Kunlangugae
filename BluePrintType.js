"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.BluePrintType = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  Info_1 = require("../../../Core/Common/Info"),
  Log_1 = require("../../../Core/Common/Log"),
  ModManager_1 = require("../ModManager"),
  LanguageSystem_1 = require("../../../Core/Common/LanguageSystem");
const { ModLanguage } = require("./ModLanguage");

class BluePrintType extends ModLanguage {

  static translate = [
        {
      BluePrint: "Treasure001",
      en: "Basic Supply Chest",
      chs: "简易物资箱",
      ja: "Basic Supply Chest",
      id: "Basic Supply Chest"
    },
    {
      BluePrint: "Treasure002",
      en: "Treasure002",
      chs: "简易物资箱",
      ja: "Treasure002",
      id: "Harta Karun002"
    },
    {
      BluePrint: "Treasure003",
      en: "Treasure003",
      chs: "简易物资箱",
      ja: "Treasure003",
      id: "Harta Karun003"
    },
    {
      BluePrint: "Treasure004",
      en: "Standard Supply Chest",
      chs: "标准物资箱",
      ja: "Standard Supply Chest",
      id: "Standard Supply Chest"
    },
    {
      BluePrint: "Treasure005",
      en: "Blue Tidal Heritage",
      chs: "标准物资箱_黑石增生",
      ja: "Blue Tidal Heritage",
      id: "Blue Tidal Heritage"
    },
    {
      BluePrint: "Treasure006",
      en: "Treasure006",
      chs: "标准物资箱",
      ja: "Treasure006",
      id: "Harta Karun006"
    },
    {
      BluePrint: "Treasure007",
      en: "Treasure007",
      chs: "Blue Tidal Heritage",
      ja: "Treasure007",
      id: "Harta Karun007"
    },
    {
      BluePrint: "Treasure008",
      en: "Purple Tidal Heritage",
      chs: "豪华物资箱_黑石增生",
      ja: "Purple Tidal Heritage",
      id: "Purple Tidal Heritage"
    },
    {
      BluePrint: "Treasure009",
      en: "Treasure009",
      chs: "豪华物资箱_黑石增生",
      ja: "Treasure009",
      id: "Harta Karun009"
    },
    {
      BluePrint: "Treasure010",
      en: "Suspicious Chest",
      chs: "丰厚物资箱",
      ja: "Suspicious Chest",
      id: "Suspicious Chest"
    },
    {
      BluePrint: "Treasure011",
      en: "Treasure011",
      chs: "幻象宝箱_金",
      ja: "Treasure011",
      id: "Harta Karun011"
    },
    {
      BluePrint: "Treasure012",
      en: "Treasure012",
      chs: "丰厚物资箱",
      ja: "Treasure012",
      id: "Harta Karun012"
    },
    {
      BluePrint: "Treasure013",
      en: "Treasure013",
      chs: "丰厚物资箱",
      ja: "Treasure013",
      id: "Harta Karun013"
    },
    {
      BluePrint: "Treasure014",
      en: "Standard Supply Chest",
      chs: "标准物资箱",
      ja: "Standard Supply Chest",
      id: "Standard Supply Chest"
    },
    {
      BluePrint: "Collect001",
      en: "Collect001",
      chs: "睡莲",
      ja: "Collect001",
      id: "mengumpulkan001"
    },
    {
      BluePrint: "Collect002",
      en: "Collect002",
      chs: "薜荔",
      ja: "Collect002",
      id: "mengumpulkan002"
    },
    {
      BluePrint: "Collect003",
      en: "Collect003",
      chs: "鸢尾花",
      ja: "Collect003",
      id: "mengumpulkan003"
    },
    {
      BluePrint: "Collect004",
      en: "Collect004",
      chs: "秽炎菇",
      ja: "Collect004",
      id: "mengumpulkan004"
    },
    {
      BluePrint: "Collect005",
      en: "Collect005",
      chs: "灯笼果",
      ja: "Collect005",
      id: "mengumpulkan005"
    },
    {
      BluePrint: "Collect006",
      en: "Collect006",
      chs: "洋金凤",
      ja: "Collect006",
      id: "mengumpulkan006"
    },
    {
      BluePrint: "Collect007",
      en: "Collect007",
      chs: "虞美人",
      ja: "Collect007",
      id: "mengumpulkan007"
    },
    {
      BluePrint: "Collect008",
      en: "Collect008",
      chs: "云芝",
      ja: "Collect008",
      id: "mengumpulkan008"
    },
    {
      BluePrint: "Collect009",
      en: "Collect009",
      chs: "傲寒钟",
      ja: "Collect009",
      id: "mengumpulkan009"
    },
    {
      BluePrint: "Collect010",
      en: "Collect010",
      chs: "紫珊瑚树",
      ja: "Collect010",
      id: "mengumpulkan010"
    },
    {
      BluePrint: "Collect011",
      en: "Collect011",
      chs: "金铃子",
      ja: "Collect011",
      id: "mengumpulkan011"
    },
    {
        BluePrint: "Collect101",
        en: "Collect101",
        chs: "珍珠草",
        ja: "Collect101",
        id: "mengumpulkan101"
      },
      {
        BluePrint: "Collect102",
        en: "Collect102",
        chs: "云露",
        ja: "Collect102",
        id: "mengumpulkan102"
      },
      {
        BluePrint: "Collect103",
        en: "Collect103",
        chs: "夜息香",
        ja: "Collect103",
        id: "mengumpulkan103"
      },
      {
        BluePrint: "Collect104",
        en: "Collect104",
        chs: "凌冬花",
        ja: "Collect104",
        id: "mengumpulkan104"
      },
      {
        BluePrint: "Collect106",
        en: "Collect106",
        chs: "清芬草",
        ja: "Collect106",
        id: "mengumpulkan106"
      },
      {
        BluePrint: "Collect107",
        en: "Collect107",
        chs: "香柠草",
        ja: "Collect107",
        id: "mengumpulkan107"
      },
      {
        BluePrint: "Collect108",
        en: "Collect108",
        chs: "腐骨幽兰",
        ja: "Collect108",
        id: "mengumpulkan108"
      },
      {
        BluePrint: "Collect109",
        en: "Collect109",
        chs: "水灯花",
        ja: "Collect109",
        id: "mengumpulkan109"
      },
      {
        BluePrint: "Collect110",
        en: "Collect110",
        chs: "月藻",
        ja: "Collect110",
        id: "mengumpulkan110"
      },
      {
        BluePrint: "Collect111",
        en: "Collect111",
        chs: "白花菱",
        ja: "Collect111",
        id: "mengumpulkan111"
      },
      {
        BluePrint: "Collect112",
        en: "Collect112",
        chs: "锦色贝",
        ja: "Collect112",
        id: "mengumpulkan112"
      },
      {
        BluePrint: "Collect113",
        en: "Collect113",
        chs: "雨声蜗",
        ja: "Collect113",
        id: "mengumpulkan113"
      },
      {
        BluePrint: "Collect114",
        en: "Collect114",
        chs: "靛色堇",
        ja: "Collect114",
        id: "mengumpulkan114"
      },
      {
        BluePrint: "Collect115",
        en: "Collect115",
        chs: "崖仙子",
        ja: "Collect115",
        id: "mengumpulkan115"
      },
      {
        BluePrint: "Collect116",
        en: "Collect116",
        chs: "伞下客",
        ja: "Collect116",
        id: "mengumpulkan116"
      },
      {
        BluePrint: "Collect117",
        en: "Collect117",
        chs: "龙衔珠",
        ja: "Collect117",
        id: "mengumpulkan117"
      },
      {
        BluePrint: "Collect001",
        en: "Collect001",
        chs: "睡莲",
        ja: "Collect001",
        id: "mengumpulkan001"
      },
      {
        BluePrint: "Collect601",
        en: "Collect601",
        chs: "鸟蛋",
        ja: "Collect601",
        id: "mengumpulkan601"
      },
      {
        BluePrint: "Collect118",
        en: "Collect118",
        chs: "花蕈",
        ja: "Collect118",
        id: "mengumpulkan118"
      },
      {
        BluePrint: "Collect119",
        en: "Collect119",
        chs: "隐火蜕",
        ja: "Collect119",
        id: "mengumpulkan119"
      },
      {
        BluePrint: "Animal001",
        en: "Animal001",
        chs: "紫喙鸽",
        ja: "Animal001",
        id: "Hewan001"
      },
      {
        BluePrint: "Animal002",
        en: "Animal002",
        chs: "青翎鸽",
        ja: "Animal002",
        id: "Hewan002"
      },
      {
        BluePrint: "Animal003",
        en: "Animal003",
        chs: "蓝冠鸽",
        ja: "Animal003",
        id: "Hewan003"
      },
      {
        BluePrint: "Animal004",
        en: "Animal004",
        chs: "灰冠鸥",
        ja: "Animal004",
        id: "Hewan004"
      },
      {
        BluePrint: "Animal005",
        en: "Animal005",
        chs: "赤脚雁",
        ja: "Animal005",
        id: "Hewan005"
      },
      {
        BluePrint: "Animal006",
        en: "Animal006",
        chs: "雪云鹤",
        ja: "Animal006",
        id: "Hewan006"
      },
      {
        BluePrint: "Animal012",
        en: "Animal012",
        chs: "青杂兔",
        ja: "Animal012",
        id: "Hewan012"
      },
      {
        BluePrint: "Animal013",
        en: "Animal013",
        chs: "岩角羊",
        ja: "Animal013",
        id: "Hewan013"
      },
      {
        BluePrint: "Animal014",
        en: "Animal014",
        chs: "灰脊牛",
        ja: "Animal014",
        id: "Hewan014"
      },
      {
        BluePrint: "Animal015",
        en: "Animal015",
        chs: "森栖牛",
        ja: "Animal015",
        id: "Hewan015"
      },
      {
        BluePrint: "Animal016",
        en: "Animal016",
        chs: "霄凤蝶",
        ja: "Animal016",
        id: "Hewan016"
      },
      {
        BluePrint: "Animal017",
        en: "Animal017",
        chs: "赤羽蝶",
        ja: "Animal017",
        id: "Hewan017"
      },
      {
        BluePrint: "Animal018",
        en: "Animal018",
        chs: "蓝羽蝶",
        ja: "Animal018",
        id: "Hewan018"
      },
      {
        BluePrint: "Animal019",
        en: "Animal019",
        chs: "叶翅蛉",
        ja: "Animal019",
        id: "Hewan019"
      },
      {
        BluePrint: "Animal020",
        en: "Animal020",
        chs: "金环蜓",
        ja: "Animal020",
        id: "Hewan020"
      },
      {
        BluePrint: "Animal021",
        en: "Animal021",
        chs: "群彩1",
        ja: "Animal021",
        id: "Hewan021"
      },
      {
        BluePrint: "Animal022",
        en: "Animal022",
        chs: "群彩2",
        ja: "Animal022",
        id: "Hewan022"
      },
      {
        BluePrint: "Animal023",
        en: "Animal023",
        chs: "银月",
        ja: "Animal023",
        id: "Hewan023"
      },
      {
        BluePrint: "Animal024",
        en: "Animal024",
        chs: "焰鲤",
        ja: "Animal024",
        id: "Hewan024"
      },
      {
        BluePrint: "Animal025",
        en: "Animal025",
        chs: "黑棘鲼",
        ja: "Animal025",
        id: "Hewan025"
      },
      {
        BluePrint: "Animal026",
        en: "Animal026",
        chs: "银环蜥",
        ja: "Animal026",
        id: "Hewan026"
      },
      {
        BluePrint: "Animal027",
        en: "Animal027",
        chs: "蓝棘蜥",
        ja: "Animal027",
        id: "Hewan027"
      },
      {
        BluePrint: "Animal028",
        en: "Animal028",
        chs: "青竹蜥",
        ja: "Animal028",
        id: "Hewan028"
      },
      {
        BluePrint: "Animal029",
        en: "Animal029",
        chs: "黑纹蛙",
        ja: "Animal029",
        id: "Hewan029"
      },
      {
        BluePrint: "Animal030",
        en: "Animal030",
        chs: "金背蛙",
        ja: "Animal030",
        id: "Hewan030"
      },
      {
        BluePrint: "Animal031",
        en: "Animal031",
        chs: "乌鸦",
        ja: "Animal031",
        id: "Hewan031"
      },
      {
        BluePrint: "Animal032",
        en: "Animal032",
        chs: "鸣素体",
        ja: "Animal032",
        id: "Hewan032"
      },
  ];

  static ModTr = (string) => {
    const Find = BluePrintType.translate.find(t => t.BluePrint == string);
    if (Find) {
      return Find[this.GetCurrLang()] || Find.BluePrint;
    } else {
      return string; // return original string if no translation found
    }
  };
}

exports.BluePrintType = BluePrintType;
