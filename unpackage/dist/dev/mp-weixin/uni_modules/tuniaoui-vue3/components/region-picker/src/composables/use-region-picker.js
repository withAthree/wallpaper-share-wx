"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_cloneDeep = require("../../../../utils/clone-deep.js");
const regionJsonData = [
  new UTSJSONObject({
    code: "11",
    name: "北京市",
    children: [
      new UTSJSONObject({
        code: "1101",
        name: "市辖区",
        children: [
          new UTSJSONObject({
            code: "110101",
            name: "东城区"
          }),
          new UTSJSONObject({
            code: "110102",
            name: "西城区"
          }),
          new UTSJSONObject({
            code: "110105",
            name: "朝阳区"
          }),
          new UTSJSONObject({
            code: "110106",
            name: "丰台区"
          }),
          new UTSJSONObject({
            code: "110107",
            name: "石景山区"
          }),
          new UTSJSONObject({
            code: "110108",
            name: "海淀区"
          }),
          new UTSJSONObject({
            code: "110109",
            name: "门头沟区"
          }),
          new UTSJSONObject({
            code: "110111",
            name: "房山区"
          }),
          new UTSJSONObject({
            code: "110112",
            name: "通州区"
          }),
          new UTSJSONObject({
            code: "110113",
            name: "顺义区"
          }),
          new UTSJSONObject({
            code: "110114",
            name: "昌平区"
          }),
          new UTSJSONObject({
            code: "110115",
            name: "大兴区"
          }),
          new UTSJSONObject({
            code: "110116",
            name: "怀柔区"
          }),
          new UTSJSONObject({
            code: "110117",
            name: "平谷区"
          }),
          new UTSJSONObject({
            code: "110118",
            name: "密云区"
          }),
          new UTSJSONObject({
            code: "110119",
            name: "延庆区"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "12",
    name: "天津市",
    children: [
      new UTSJSONObject({
        code: "1201",
        name: "市辖区",
        children: [
          new UTSJSONObject({
            code: "120101",
            name: "和平区"
          }),
          new UTSJSONObject({
            code: "120102",
            name: "河东区"
          }),
          new UTSJSONObject({
            code: "120103",
            name: "河西区"
          }),
          new UTSJSONObject({
            code: "120104",
            name: "南开区"
          }),
          new UTSJSONObject({
            code: "120105",
            name: "河北区"
          }),
          new UTSJSONObject({
            code: "120106",
            name: "红桥区"
          }),
          new UTSJSONObject({
            code: "120110",
            name: "东丽区"
          }),
          new UTSJSONObject({
            code: "120111",
            name: "西青区"
          }),
          new UTSJSONObject({
            code: "120112",
            name: "津南区"
          }),
          new UTSJSONObject({
            code: "120113",
            name: "北辰区"
          }),
          new UTSJSONObject({
            code: "120114",
            name: "武清区"
          }),
          new UTSJSONObject({
            code: "120115",
            name: "宝坻区"
          }),
          new UTSJSONObject({
            code: "120116",
            name: "滨海新区"
          }),
          new UTSJSONObject({
            code: "120117",
            name: "宁河区"
          }),
          new UTSJSONObject({
            code: "120118",
            name: "静海区"
          }),
          new UTSJSONObject({
            code: "120119",
            name: "蓟州区"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "13",
    name: "河北省",
    children: [
      new UTSJSONObject({
        code: "1301",
        name: "石家庄市",
        children: [
          new UTSJSONObject({
            code: "130102",
            name: "长安区"
          }),
          new UTSJSONObject({
            code: "130104",
            name: "桥西区"
          }),
          new UTSJSONObject({
            code: "130105",
            name: "新华区"
          }),
          new UTSJSONObject({
            code: "130107",
            name: "井陉矿区"
          }),
          new UTSJSONObject({
            code: "130108",
            name: "裕华区"
          }),
          new UTSJSONObject({
            code: "130109",
            name: "藁城区"
          }),
          new UTSJSONObject({
            code: "130110",
            name: "鹿泉区"
          }),
          new UTSJSONObject({
            code: "130111",
            name: "栾城区"
          }),
          new UTSJSONObject({
            code: "130121",
            name: "井陉县"
          }),
          new UTSJSONObject({
            code: "130123",
            name: "正定县"
          }),
          new UTSJSONObject({
            code: "130125",
            name: "行唐县"
          }),
          new UTSJSONObject({
            code: "130126",
            name: "灵寿县"
          }),
          new UTSJSONObject({
            code: "130127",
            name: "高邑县"
          }),
          new UTSJSONObject({
            code: "130128",
            name: "深泽县"
          }),
          new UTSJSONObject({
            code: "130129",
            name: "赞皇县"
          }),
          new UTSJSONObject({
            code: "130130",
            name: "无极县"
          }),
          new UTSJSONObject({
            code: "130131",
            name: "平山县"
          }),
          new UTSJSONObject({
            code: "130132",
            name: "元氏县"
          }),
          new UTSJSONObject({
            code: "130133",
            name: "赵县"
          }),
          new UTSJSONObject({
            code: "130171",
            name: "石家庄高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "130172",
            name: "石家庄循环化工园区"
          }),
          new UTSJSONObject({
            code: "130181",
            name: "辛集市"
          }),
          new UTSJSONObject({
            code: "130183",
            name: "晋州市"
          }),
          new UTSJSONObject({
            code: "130184",
            name: "新乐市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1302",
        name: "唐山市",
        children: [
          new UTSJSONObject({
            code: "130202",
            name: "路南区"
          }),
          new UTSJSONObject({
            code: "130203",
            name: "路北区"
          }),
          new UTSJSONObject({
            code: "130204",
            name: "古冶区"
          }),
          new UTSJSONObject({
            code: "130205",
            name: "开平区"
          }),
          new UTSJSONObject({
            code: "130207",
            name: "丰南区"
          }),
          new UTSJSONObject({
            code: "130208",
            name: "丰润区"
          }),
          new UTSJSONObject({
            code: "130209",
            name: "曹妃甸区"
          }),
          new UTSJSONObject({
            code: "130224",
            name: "滦南县"
          }),
          new UTSJSONObject({
            code: "130225",
            name: "乐亭县"
          }),
          new UTSJSONObject({
            code: "130227",
            name: "迁西县"
          }),
          new UTSJSONObject({
            code: "130229",
            name: "玉田县"
          }),
          new UTSJSONObject({
            code: "130271",
            name: "河北唐山芦台经济开发区"
          }),
          new UTSJSONObject({
            code: "130272",
            name: "唐山市汉沽管理区"
          }),
          new UTSJSONObject({
            code: "130273",
            name: "唐山高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "130274",
            name: "河北唐山海港经济开发区"
          }),
          new UTSJSONObject({
            code: "130281",
            name: "遵化市"
          }),
          new UTSJSONObject({
            code: "130283",
            name: "迁安市"
          }),
          new UTSJSONObject({
            code: "130284",
            name: "滦州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1303",
        name: "秦皇岛市",
        children: [
          new UTSJSONObject({
            code: "130302",
            name: "海港区"
          }),
          new UTSJSONObject({
            code: "130303",
            name: "山海关区"
          }),
          new UTSJSONObject({
            code: "130304",
            name: "北戴河区"
          }),
          new UTSJSONObject({
            code: "130306",
            name: "抚宁区"
          }),
          new UTSJSONObject({
            code: "130321",
            name: "青龙满族自治县"
          }),
          new UTSJSONObject({
            code: "130322",
            name: "昌黎县"
          }),
          new UTSJSONObject({
            code: "130324",
            name: "卢龙县"
          }),
          new UTSJSONObject({
            code: "130371",
            name: "秦皇岛市经济技术开发区"
          }),
          new UTSJSONObject({
            code: "130372",
            name: "北戴河新区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1304",
        name: "邯郸市",
        children: [
          new UTSJSONObject({
            code: "130402",
            name: "邯山区"
          }),
          new UTSJSONObject({
            code: "130403",
            name: "丛台区"
          }),
          new UTSJSONObject({
            code: "130404",
            name: "复兴区"
          }),
          new UTSJSONObject({
            code: "130406",
            name: "峰峰矿区"
          }),
          new UTSJSONObject({
            code: "130407",
            name: "肥乡区"
          }),
          new UTSJSONObject({
            code: "130408",
            name: "永年区"
          }),
          new UTSJSONObject({
            code: "130423",
            name: "临漳县"
          }),
          new UTSJSONObject({
            code: "130424",
            name: "成安县"
          }),
          new UTSJSONObject({
            code: "130425",
            name: "大名县"
          }),
          new UTSJSONObject({
            code: "130426",
            name: "涉县"
          }),
          new UTSJSONObject({
            code: "130427",
            name: "磁县"
          }),
          new UTSJSONObject({
            code: "130430",
            name: "邱县"
          }),
          new UTSJSONObject({
            code: "130431",
            name: "鸡泽县"
          }),
          new UTSJSONObject({
            code: "130432",
            name: "广平县"
          }),
          new UTSJSONObject({
            code: "130433",
            name: "馆陶县"
          }),
          new UTSJSONObject({
            code: "130434",
            name: "魏县"
          }),
          new UTSJSONObject({
            code: "130435",
            name: "曲周县"
          }),
          new UTSJSONObject({
            code: "130471",
            name: "邯郸经济技术开发区"
          }),
          new UTSJSONObject({
            code: "130473",
            name: "邯郸冀南新区"
          }),
          new UTSJSONObject({
            code: "130481",
            name: "武安市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1305",
        name: "邢台市",
        children: [
          new UTSJSONObject({
            code: "130502",
            name: "襄都区"
          }),
          new UTSJSONObject({
            code: "130503",
            name: "信都区"
          }),
          new UTSJSONObject({
            code: "130505",
            name: "任泽区"
          }),
          new UTSJSONObject({
            code: "130506",
            name: "南和区"
          }),
          new UTSJSONObject({
            code: "130522",
            name: "临城县"
          }),
          new UTSJSONObject({
            code: "130523",
            name: "内丘县"
          }),
          new UTSJSONObject({
            code: "130524",
            name: "柏乡县"
          }),
          new UTSJSONObject({
            code: "130525",
            name: "隆尧县"
          }),
          new UTSJSONObject({
            code: "130528",
            name: "宁晋县"
          }),
          new UTSJSONObject({
            code: "130529",
            name: "巨鹿县"
          }),
          new UTSJSONObject({
            code: "130530",
            name: "新河县"
          }),
          new UTSJSONObject({
            code: "130531",
            name: "广宗县"
          }),
          new UTSJSONObject({
            code: "130532",
            name: "平乡县"
          }),
          new UTSJSONObject({
            code: "130533",
            name: "威县"
          }),
          new UTSJSONObject({
            code: "130534",
            name: "清河县"
          }),
          new UTSJSONObject({
            code: "130535",
            name: "临西县"
          }),
          new UTSJSONObject({
            code: "130571",
            name: "河北邢台经济开发区"
          }),
          new UTSJSONObject({
            code: "130581",
            name: "南宫市"
          }),
          new UTSJSONObject({
            code: "130582",
            name: "沙河市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1306",
        name: "保定市",
        children: [
          new UTSJSONObject({
            code: "130602",
            name: "竞秀区"
          }),
          new UTSJSONObject({
            code: "130606",
            name: "莲池区"
          }),
          new UTSJSONObject({
            code: "130607",
            name: "满城区"
          }),
          new UTSJSONObject({
            code: "130608",
            name: "清苑区"
          }),
          new UTSJSONObject({
            code: "130609",
            name: "徐水区"
          }),
          new UTSJSONObject({
            code: "130623",
            name: "涞水县"
          }),
          new UTSJSONObject({
            code: "130624",
            name: "阜平县"
          }),
          new UTSJSONObject({
            code: "130626",
            name: "定兴县"
          }),
          new UTSJSONObject({
            code: "130627",
            name: "唐县"
          }),
          new UTSJSONObject({
            code: "130628",
            name: "高阳县"
          }),
          new UTSJSONObject({
            code: "130629",
            name: "容城县"
          }),
          new UTSJSONObject({
            code: "130630",
            name: "涞源县"
          }),
          new UTSJSONObject({
            code: "130631",
            name: "望都县"
          }),
          new UTSJSONObject({
            code: "130632",
            name: "安新县"
          }),
          new UTSJSONObject({
            code: "130633",
            name: "易县"
          }),
          new UTSJSONObject({
            code: "130634",
            name: "曲阳县"
          }),
          new UTSJSONObject({
            code: "130635",
            name: "蠡县"
          }),
          new UTSJSONObject({
            code: "130636",
            name: "顺平县"
          }),
          new UTSJSONObject({
            code: "130637",
            name: "博野县"
          }),
          new UTSJSONObject({
            code: "130638",
            name: "雄县"
          }),
          new UTSJSONObject({
            code: "130671",
            name: "保定高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "130672",
            name: "保定白沟新城"
          }),
          new UTSJSONObject({
            code: "130681",
            name: "涿州市"
          }),
          new UTSJSONObject({
            code: "130682",
            name: "定州市"
          }),
          new UTSJSONObject({
            code: "130683",
            name: "安国市"
          }),
          new UTSJSONObject({
            code: "130684",
            name: "高碑店市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1307",
        name: "张家口市",
        children: [
          new UTSJSONObject({
            code: "130702",
            name: "桥东区"
          }),
          new UTSJSONObject({
            code: "130703",
            name: "桥西区"
          }),
          new UTSJSONObject({
            code: "130705",
            name: "宣化区"
          }),
          new UTSJSONObject({
            code: "130706",
            name: "下花园区"
          }),
          new UTSJSONObject({
            code: "130708",
            name: "万全区"
          }),
          new UTSJSONObject({
            code: "130709",
            name: "崇礼区"
          }),
          new UTSJSONObject({
            code: "130722",
            name: "张北县"
          }),
          new UTSJSONObject({
            code: "130723",
            name: "康保县"
          }),
          new UTSJSONObject({
            code: "130724",
            name: "沽源县"
          }),
          new UTSJSONObject({
            code: "130725",
            name: "尚义县"
          }),
          new UTSJSONObject({
            code: "130726",
            name: "蔚县"
          }),
          new UTSJSONObject({
            code: "130727",
            name: "阳原县"
          }),
          new UTSJSONObject({
            code: "130728",
            name: "怀安县"
          }),
          new UTSJSONObject({
            code: "130730",
            name: "怀来县"
          }),
          new UTSJSONObject({
            code: "130731",
            name: "涿鹿县"
          }),
          new UTSJSONObject({
            code: "130732",
            name: "赤城县"
          }),
          new UTSJSONObject({
            code: "130771",
            name: "张家口经济开发区"
          }),
          new UTSJSONObject({
            code: "130772",
            name: "张家口市察北管理区"
          }),
          new UTSJSONObject({
            code: "130773",
            name: "张家口市塞北管理区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1308",
        name: "承德市",
        children: [
          new UTSJSONObject({
            code: "130802",
            name: "双桥区"
          }),
          new UTSJSONObject({
            code: "130803",
            name: "双滦区"
          }),
          new UTSJSONObject({
            code: "130804",
            name: "鹰手营子矿区"
          }),
          new UTSJSONObject({
            code: "130821",
            name: "承德县"
          }),
          new UTSJSONObject({
            code: "130822",
            name: "兴隆县"
          }),
          new UTSJSONObject({
            code: "130824",
            name: "滦平县"
          }),
          new UTSJSONObject({
            code: "130825",
            name: "隆化县"
          }),
          new UTSJSONObject({
            code: "130826",
            name: "丰宁满族自治县"
          }),
          new UTSJSONObject({
            code: "130827",
            name: "宽城满族自治县"
          }),
          new UTSJSONObject({
            code: "130828",
            name: "围场满族蒙古族自治县"
          }),
          new UTSJSONObject({
            code: "130871",
            name: "承德高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "130881",
            name: "平泉市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1309",
        name: "沧州市",
        children: [
          new UTSJSONObject({
            code: "130902",
            name: "新华区"
          }),
          new UTSJSONObject({
            code: "130903",
            name: "运河区"
          }),
          new UTSJSONObject({
            code: "130921",
            name: "沧县"
          }),
          new UTSJSONObject({
            code: "130922",
            name: "青县"
          }),
          new UTSJSONObject({
            code: "130923",
            name: "东光县"
          }),
          new UTSJSONObject({
            code: "130924",
            name: "海兴县"
          }),
          new UTSJSONObject({
            code: "130925",
            name: "盐山县"
          }),
          new UTSJSONObject({
            code: "130926",
            name: "肃宁县"
          }),
          new UTSJSONObject({
            code: "130927",
            name: "南皮县"
          }),
          new UTSJSONObject({
            code: "130928",
            name: "吴桥县"
          }),
          new UTSJSONObject({
            code: "130929",
            name: "献县"
          }),
          new UTSJSONObject({
            code: "130930",
            name: "孟村回族自治县"
          }),
          new UTSJSONObject({
            code: "130971",
            name: "河北沧州经济开发区"
          }),
          new UTSJSONObject({
            code: "130972",
            name: "沧州高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "130973",
            name: "沧州渤海新区"
          }),
          new UTSJSONObject({
            code: "130981",
            name: "泊头市"
          }),
          new UTSJSONObject({
            code: "130982",
            name: "任丘市"
          }),
          new UTSJSONObject({
            code: "130983",
            name: "黄骅市"
          }),
          new UTSJSONObject({
            code: "130984",
            name: "河间市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1310",
        name: "廊坊市",
        children: [
          new UTSJSONObject({
            code: "131002",
            name: "安次区"
          }),
          new UTSJSONObject({
            code: "131003",
            name: "广阳区"
          }),
          new UTSJSONObject({
            code: "131022",
            name: "固安县"
          }),
          new UTSJSONObject({
            code: "131023",
            name: "永清县"
          }),
          new UTSJSONObject({
            code: "131024",
            name: "香河县"
          }),
          new UTSJSONObject({
            code: "131025",
            name: "大城县"
          }),
          new UTSJSONObject({
            code: "131026",
            name: "文安县"
          }),
          new UTSJSONObject({
            code: "131028",
            name: "大厂回族自治县"
          }),
          new UTSJSONObject({
            code: "131071",
            name: "廊坊经济技术开发区"
          }),
          new UTSJSONObject({
            code: "131081",
            name: "霸州市"
          }),
          new UTSJSONObject({
            code: "131082",
            name: "三河市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1311",
        name: "衡水市",
        children: [
          new UTSJSONObject({
            code: "131102",
            name: "桃城区"
          }),
          new UTSJSONObject({
            code: "131103",
            name: "冀州区"
          }),
          new UTSJSONObject({
            code: "131121",
            name: "枣强县"
          }),
          new UTSJSONObject({
            code: "131122",
            name: "武邑县"
          }),
          new UTSJSONObject({
            code: "131123",
            name: "武强县"
          }),
          new UTSJSONObject({
            code: "131124",
            name: "饶阳县"
          }),
          new UTSJSONObject({
            code: "131125",
            name: "安平县"
          }),
          new UTSJSONObject({
            code: "131126",
            name: "故城县"
          }),
          new UTSJSONObject({
            code: "131127",
            name: "景县"
          }),
          new UTSJSONObject({
            code: "131128",
            name: "阜城县"
          }),
          new UTSJSONObject({
            code: "131171",
            name: "河北衡水高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "131172",
            name: "衡水滨湖新区"
          }),
          new UTSJSONObject({
            code: "131182",
            name: "深州市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "14",
    name: "山西省",
    children: [
      new UTSJSONObject({
        code: "1401",
        name: "太原市",
        children: [
          new UTSJSONObject({
            code: "140105",
            name: "小店区"
          }),
          new UTSJSONObject({
            code: "140106",
            name: "迎泽区"
          }),
          new UTSJSONObject({
            code: "140107",
            name: "杏花岭区"
          }),
          new UTSJSONObject({
            code: "140108",
            name: "尖草坪区"
          }),
          new UTSJSONObject({
            code: "140109",
            name: "万柏林区"
          }),
          new UTSJSONObject({
            code: "140110",
            name: "晋源区"
          }),
          new UTSJSONObject({
            code: "140121",
            name: "清徐县"
          }),
          new UTSJSONObject({
            code: "140122",
            name: "阳曲县"
          }),
          new UTSJSONObject({
            code: "140123",
            name: "娄烦县"
          }),
          new UTSJSONObject({
            code: "140171",
            name: "山西转型综合改革示范区"
          }),
          new UTSJSONObject({
            code: "140181",
            name: "古交市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1402",
        name: "大同市",
        children: [
          new UTSJSONObject({
            code: "140212",
            name: "新荣区"
          }),
          new UTSJSONObject({
            code: "140213",
            name: "平城区"
          }),
          new UTSJSONObject({
            code: "140214",
            name: "云冈区"
          }),
          new UTSJSONObject({
            code: "140215",
            name: "云州区"
          }),
          new UTSJSONObject({
            code: "140221",
            name: "阳高县"
          }),
          new UTSJSONObject({
            code: "140222",
            name: "天镇县"
          }),
          new UTSJSONObject({
            code: "140223",
            name: "广灵县"
          }),
          new UTSJSONObject({
            code: "140224",
            name: "灵丘县"
          }),
          new UTSJSONObject({
            code: "140225",
            name: "浑源县"
          }),
          new UTSJSONObject({
            code: "140226",
            name: "左云县"
          }),
          new UTSJSONObject({
            code: "140271",
            name: "山西大同经济开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1403",
        name: "阳泉市",
        children: [
          new UTSJSONObject({
            code: "140302",
            name: "城区"
          }),
          new UTSJSONObject({
            code: "140303",
            name: "矿区"
          }),
          new UTSJSONObject({
            code: "140311",
            name: "郊区"
          }),
          new UTSJSONObject({
            code: "140321",
            name: "平定县"
          }),
          new UTSJSONObject({
            code: "140322",
            name: "盂县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1404",
        name: "长治市",
        children: [
          new UTSJSONObject({
            code: "140403",
            name: "潞州区"
          }),
          new UTSJSONObject({
            code: "140404",
            name: "上党区"
          }),
          new UTSJSONObject({
            code: "140405",
            name: "屯留区"
          }),
          new UTSJSONObject({
            code: "140406",
            name: "潞城区"
          }),
          new UTSJSONObject({
            code: "140423",
            name: "襄垣县"
          }),
          new UTSJSONObject({
            code: "140425",
            name: "平顺县"
          }),
          new UTSJSONObject({
            code: "140426",
            name: "黎城县"
          }),
          new UTSJSONObject({
            code: "140427",
            name: "壶关县"
          }),
          new UTSJSONObject({
            code: "140428",
            name: "长子县"
          }),
          new UTSJSONObject({
            code: "140429",
            name: "武乡县"
          }),
          new UTSJSONObject({
            code: "140430",
            name: "沁县"
          }),
          new UTSJSONObject({
            code: "140431",
            name: "沁源县"
          }),
          new UTSJSONObject({
            code: "140471",
            name: "山西长治高新技术产业园区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1405",
        name: "晋城市",
        children: [
          new UTSJSONObject({
            code: "140502",
            name: "城区"
          }),
          new UTSJSONObject({
            code: "140521",
            name: "沁水县"
          }),
          new UTSJSONObject({
            code: "140522",
            name: "阳城县"
          }),
          new UTSJSONObject({
            code: "140524",
            name: "陵川县"
          }),
          new UTSJSONObject({
            code: "140525",
            name: "泽州县"
          }),
          new UTSJSONObject({
            code: "140581",
            name: "高平市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1406",
        name: "朔州市",
        children: [
          new UTSJSONObject({
            code: "140602",
            name: "朔城区"
          }),
          new UTSJSONObject({
            code: "140603",
            name: "平鲁区"
          }),
          new UTSJSONObject({
            code: "140621",
            name: "山阴县"
          }),
          new UTSJSONObject({
            code: "140622",
            name: "应县"
          }),
          new UTSJSONObject({
            code: "140623",
            name: "右玉县"
          }),
          new UTSJSONObject({
            code: "140671",
            name: "山西朔州经济开发区"
          }),
          new UTSJSONObject({
            code: "140681",
            name: "怀仁市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1407",
        name: "晋中市",
        children: [
          new UTSJSONObject({
            code: "140702",
            name: "榆次区"
          }),
          new UTSJSONObject({
            code: "140703",
            name: "太谷区"
          }),
          new UTSJSONObject({
            code: "140721",
            name: "榆社县"
          }),
          new UTSJSONObject({
            code: "140722",
            name: "左权县"
          }),
          new UTSJSONObject({
            code: "140723",
            name: "和顺县"
          }),
          new UTSJSONObject({
            code: "140724",
            name: "昔阳县"
          }),
          new UTSJSONObject({
            code: "140725",
            name: "寿阳县"
          }),
          new UTSJSONObject({
            code: "140727",
            name: "祁县"
          }),
          new UTSJSONObject({
            code: "140728",
            name: "平遥县"
          }),
          new UTSJSONObject({
            code: "140729",
            name: "灵石县"
          }),
          new UTSJSONObject({
            code: "140781",
            name: "介休市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1408",
        name: "运城市",
        children: [
          new UTSJSONObject({
            code: "140802",
            name: "盐湖区"
          }),
          new UTSJSONObject({
            code: "140821",
            name: "临猗县"
          }),
          new UTSJSONObject({
            code: "140822",
            name: "万荣县"
          }),
          new UTSJSONObject({
            code: "140823",
            name: "闻喜县"
          }),
          new UTSJSONObject({
            code: "140824",
            name: "稷山县"
          }),
          new UTSJSONObject({
            code: "140825",
            name: "新绛县"
          }),
          new UTSJSONObject({
            code: "140826",
            name: "绛县"
          }),
          new UTSJSONObject({
            code: "140827",
            name: "垣曲县"
          }),
          new UTSJSONObject({
            code: "140828",
            name: "夏县"
          }),
          new UTSJSONObject({
            code: "140829",
            name: "平陆县"
          }),
          new UTSJSONObject({
            code: "140830",
            name: "芮城县"
          }),
          new UTSJSONObject({
            code: "140881",
            name: "永济市"
          }),
          new UTSJSONObject({
            code: "140882",
            name: "河津市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1409",
        name: "忻州市",
        children: [
          new UTSJSONObject({
            code: "140902",
            name: "忻府区"
          }),
          new UTSJSONObject({
            code: "140921",
            name: "定襄县"
          }),
          new UTSJSONObject({
            code: "140922",
            name: "五台县"
          }),
          new UTSJSONObject({
            code: "140923",
            name: "代县"
          }),
          new UTSJSONObject({
            code: "140924",
            name: "繁峙县"
          }),
          new UTSJSONObject({
            code: "140925",
            name: "宁武县"
          }),
          new UTSJSONObject({
            code: "140926",
            name: "静乐县"
          }),
          new UTSJSONObject({
            code: "140927",
            name: "神池县"
          }),
          new UTSJSONObject({
            code: "140928",
            name: "五寨县"
          }),
          new UTSJSONObject({
            code: "140929",
            name: "岢岚县"
          }),
          new UTSJSONObject({
            code: "140930",
            name: "河曲县"
          }),
          new UTSJSONObject({
            code: "140931",
            name: "保德县"
          }),
          new UTSJSONObject({
            code: "140932",
            name: "偏关县"
          }),
          new UTSJSONObject({
            code: "140971",
            name: "五台山风景名胜区"
          }),
          new UTSJSONObject({
            code: "140981",
            name: "原平市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1410",
        name: "临汾市",
        children: [
          new UTSJSONObject({
            code: "141002",
            name: "尧都区"
          }),
          new UTSJSONObject({
            code: "141021",
            name: "曲沃县"
          }),
          new UTSJSONObject({
            code: "141022",
            name: "翼城县"
          }),
          new UTSJSONObject({
            code: "141023",
            name: "襄汾县"
          }),
          new UTSJSONObject({
            code: "141024",
            name: "洪洞县"
          }),
          new UTSJSONObject({
            code: "141025",
            name: "古县"
          }),
          new UTSJSONObject({
            code: "141026",
            name: "安泽县"
          }),
          new UTSJSONObject({
            code: "141027",
            name: "浮山县"
          }),
          new UTSJSONObject({
            code: "141028",
            name: "吉县"
          }),
          new UTSJSONObject({
            code: "141029",
            name: "乡宁县"
          }),
          new UTSJSONObject({
            code: "141030",
            name: "大宁县"
          }),
          new UTSJSONObject({
            code: "141031",
            name: "隰县"
          }),
          new UTSJSONObject({
            code: "141032",
            name: "永和县"
          }),
          new UTSJSONObject({
            code: "141033",
            name: "蒲县"
          }),
          new UTSJSONObject({
            code: "141034",
            name: "汾西县"
          }),
          new UTSJSONObject({
            code: "141081",
            name: "侯马市"
          }),
          new UTSJSONObject({
            code: "141082",
            name: "霍州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1411",
        name: "吕梁市",
        children: [
          new UTSJSONObject({
            code: "141102",
            name: "离石区"
          }),
          new UTSJSONObject({
            code: "141121",
            name: "文水县"
          }),
          new UTSJSONObject({
            code: "141122",
            name: "交城县"
          }),
          new UTSJSONObject({
            code: "141123",
            name: "兴县"
          }),
          new UTSJSONObject({
            code: "141124",
            name: "临县"
          }),
          new UTSJSONObject({
            code: "141125",
            name: "柳林县"
          }),
          new UTSJSONObject({
            code: "141126",
            name: "石楼县"
          }),
          new UTSJSONObject({
            code: "141127",
            name: "岚县"
          }),
          new UTSJSONObject({
            code: "141128",
            name: "方山县"
          }),
          new UTSJSONObject({
            code: "141129",
            name: "中阳县"
          }),
          new UTSJSONObject({
            code: "141130",
            name: "交口县"
          }),
          new UTSJSONObject({
            code: "141181",
            name: "孝义市"
          }),
          new UTSJSONObject({
            code: "141182",
            name: "汾阳市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "15",
    name: "内蒙古自治区",
    children: [
      new UTSJSONObject({
        code: "1501",
        name: "呼和浩特市",
        children: [
          new UTSJSONObject({
            code: "150102",
            name: "新城区"
          }),
          new UTSJSONObject({
            code: "150103",
            name: "回民区"
          }),
          new UTSJSONObject({
            code: "150104",
            name: "玉泉区"
          }),
          new UTSJSONObject({
            code: "150105",
            name: "赛罕区"
          }),
          new UTSJSONObject({
            code: "150121",
            name: "土默特左旗"
          }),
          new UTSJSONObject({
            code: "150122",
            name: "托克托县"
          }),
          new UTSJSONObject({
            code: "150123",
            name: "和林格尔县"
          }),
          new UTSJSONObject({
            code: "150124",
            name: "清水河县"
          }),
          new UTSJSONObject({
            code: "150125",
            name: "武川县"
          }),
          new UTSJSONObject({
            code: "150172",
            name: "呼和浩特经济技术开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1502",
        name: "包头市",
        children: [
          new UTSJSONObject({
            code: "150202",
            name: "东河区"
          }),
          new UTSJSONObject({
            code: "150203",
            name: "昆都仑区"
          }),
          new UTSJSONObject({
            code: "150204",
            name: "青山区"
          }),
          new UTSJSONObject({
            code: "150205",
            name: "石拐区"
          }),
          new UTSJSONObject({
            code: "150206",
            name: "白云鄂博矿区"
          }),
          new UTSJSONObject({
            code: "150207",
            name: "九原区"
          }),
          new UTSJSONObject({
            code: "150221",
            name: "土默特右旗"
          }),
          new UTSJSONObject({
            code: "150222",
            name: "固阳县"
          }),
          new UTSJSONObject({
            code: "150223",
            name: "达尔罕茂明安联合旗"
          }),
          new UTSJSONObject({
            code: "150271",
            name: "包头稀土高新技术产业开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1503",
        name: "乌海市",
        children: [
          new UTSJSONObject({
            code: "150302",
            name: "海勃湾区"
          }),
          new UTSJSONObject({
            code: "150303",
            name: "海南区"
          }),
          new UTSJSONObject({
            code: "150304",
            name: "乌达区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1504",
        name: "赤峰市",
        children: [
          new UTSJSONObject({
            code: "150402",
            name: "红山区"
          }),
          new UTSJSONObject({
            code: "150403",
            name: "元宝山区"
          }),
          new UTSJSONObject({
            code: "150404",
            name: "松山区"
          }),
          new UTSJSONObject({
            code: "150421",
            name: "阿鲁科尔沁旗"
          }),
          new UTSJSONObject({
            code: "150422",
            name: "巴林左旗"
          }),
          new UTSJSONObject({
            code: "150423",
            name: "巴林右旗"
          }),
          new UTSJSONObject({
            code: "150424",
            name: "林西县"
          }),
          new UTSJSONObject({
            code: "150425",
            name: "克什克腾旗"
          }),
          new UTSJSONObject({
            code: "150426",
            name: "翁牛特旗"
          }),
          new UTSJSONObject({
            code: "150428",
            name: "喀喇沁旗"
          }),
          new UTSJSONObject({
            code: "150429",
            name: "宁城县"
          }),
          new UTSJSONObject({
            code: "150430",
            name: "敖汉旗"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1505",
        name: "通辽市",
        children: [
          new UTSJSONObject({
            code: "150502",
            name: "科尔沁区"
          }),
          new UTSJSONObject({
            code: "150521",
            name: "科尔沁左翼中旗"
          }),
          new UTSJSONObject({
            code: "150522",
            name: "科尔沁左翼后旗"
          }),
          new UTSJSONObject({
            code: "150523",
            name: "开鲁县"
          }),
          new UTSJSONObject({
            code: "150524",
            name: "库伦旗"
          }),
          new UTSJSONObject({
            code: "150525",
            name: "奈曼旗"
          }),
          new UTSJSONObject({
            code: "150526",
            name: "扎鲁特旗"
          }),
          new UTSJSONObject({
            code: "150571",
            name: "通辽经济技术开发区"
          }),
          new UTSJSONObject({
            code: "150581",
            name: "霍林郭勒市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1506",
        name: "鄂尔多斯市",
        children: [
          new UTSJSONObject({
            code: "150602",
            name: "东胜区"
          }),
          new UTSJSONObject({
            code: "150603",
            name: "康巴什区"
          }),
          new UTSJSONObject({
            code: "150621",
            name: "达拉特旗"
          }),
          new UTSJSONObject({
            code: "150622",
            name: "准格尔旗"
          }),
          new UTSJSONObject({
            code: "150623",
            name: "鄂托克前旗"
          }),
          new UTSJSONObject({
            code: "150624",
            name: "鄂托克旗"
          }),
          new UTSJSONObject({
            code: "150625",
            name: "杭锦旗"
          }),
          new UTSJSONObject({
            code: "150626",
            name: "乌审旗"
          }),
          new UTSJSONObject({
            code: "150627",
            name: "伊金霍洛旗"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1507",
        name: "呼伦贝尔市",
        children: [
          new UTSJSONObject({
            code: "150702",
            name: "海拉尔区"
          }),
          new UTSJSONObject({
            code: "150703",
            name: "扎赉诺尔区"
          }),
          new UTSJSONObject({
            code: "150721",
            name: "阿荣旗"
          }),
          new UTSJSONObject({
            code: "150722",
            name: "莫力达瓦达斡尔族自治旗"
          }),
          new UTSJSONObject({
            code: "150723",
            name: "鄂伦春自治旗"
          }),
          new UTSJSONObject({
            code: "150724",
            name: "鄂温克族自治旗"
          }),
          new UTSJSONObject({
            code: "150725",
            name: "陈巴尔虎旗"
          }),
          new UTSJSONObject({
            code: "150726",
            name: "新巴尔虎左旗"
          }),
          new UTSJSONObject({
            code: "150727",
            name: "新巴尔虎右旗"
          }),
          new UTSJSONObject({
            code: "150781",
            name: "满洲里市"
          }),
          new UTSJSONObject({
            code: "150782",
            name: "牙克石市"
          }),
          new UTSJSONObject({
            code: "150783",
            name: "扎兰屯市"
          }),
          new UTSJSONObject({
            code: "150784",
            name: "额尔古纳市"
          }),
          new UTSJSONObject({
            code: "150785",
            name: "根河市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1508",
        name: "巴彦淖尔市",
        children: [
          new UTSJSONObject({
            code: "150802",
            name: "临河区"
          }),
          new UTSJSONObject({
            code: "150821",
            name: "五原县"
          }),
          new UTSJSONObject({
            code: "150822",
            name: "磴口县"
          }),
          new UTSJSONObject({
            code: "150823",
            name: "乌拉特前旗"
          }),
          new UTSJSONObject({
            code: "150824",
            name: "乌拉特中旗"
          }),
          new UTSJSONObject({
            code: "150825",
            name: "乌拉特后旗"
          }),
          new UTSJSONObject({
            code: "150826",
            name: "杭锦后旗"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1509",
        name: "乌兰察布市",
        children: [
          new UTSJSONObject({
            code: "150902",
            name: "集宁区"
          }),
          new UTSJSONObject({
            code: "150921",
            name: "卓资县"
          }),
          new UTSJSONObject({
            code: "150922",
            name: "化德县"
          }),
          new UTSJSONObject({
            code: "150923",
            name: "商都县"
          }),
          new UTSJSONObject({
            code: "150924",
            name: "兴和县"
          }),
          new UTSJSONObject({
            code: "150925",
            name: "凉城县"
          }),
          new UTSJSONObject({
            code: "150926",
            name: "察哈尔右翼前旗"
          }),
          new UTSJSONObject({
            code: "150927",
            name: "察哈尔右翼中旗"
          }),
          new UTSJSONObject({
            code: "150928",
            name: "察哈尔右翼后旗"
          }),
          new UTSJSONObject({
            code: "150929",
            name: "四子王旗"
          }),
          new UTSJSONObject({
            code: "150981",
            name: "丰镇市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1522",
        name: "兴安盟",
        children: [
          new UTSJSONObject({
            code: "152201",
            name: "乌兰浩特市"
          }),
          new UTSJSONObject({
            code: "152202",
            name: "阿尔山市"
          }),
          new UTSJSONObject({
            code: "152221",
            name: "科尔沁右翼前旗"
          }),
          new UTSJSONObject({
            code: "152222",
            name: "科尔沁右翼中旗"
          }),
          new UTSJSONObject({
            code: "152223",
            name: "扎赉特旗"
          }),
          new UTSJSONObject({
            code: "152224",
            name: "突泉县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1525",
        name: "锡林郭勒盟",
        children: [
          new UTSJSONObject({
            code: "152501",
            name: "二连浩特市"
          }),
          new UTSJSONObject({
            code: "152502",
            name: "锡林浩特市"
          }),
          new UTSJSONObject({
            code: "152522",
            name: "阿巴嘎旗"
          }),
          new UTSJSONObject({
            code: "152523",
            name: "苏尼特左旗"
          }),
          new UTSJSONObject({
            code: "152524",
            name: "苏尼特右旗"
          }),
          new UTSJSONObject({
            code: "152525",
            name: "东乌珠穆沁旗"
          }),
          new UTSJSONObject({
            code: "152526",
            name: "西乌珠穆沁旗"
          }),
          new UTSJSONObject({
            code: "152527",
            name: "太仆寺旗"
          }),
          new UTSJSONObject({
            code: "152528",
            name: "镶黄旗"
          }),
          new UTSJSONObject({
            code: "152529",
            name: "正镶白旗"
          }),
          new UTSJSONObject({
            code: "152530",
            name: "正蓝旗"
          }),
          new UTSJSONObject({
            code: "152531",
            name: "多伦县"
          }),
          new UTSJSONObject({
            code: "152571",
            name: "乌拉盖管委会"
          })
        ]
      }),
      new UTSJSONObject({
        code: "1529",
        name: "阿拉善盟",
        children: [
          new UTSJSONObject({
            code: "152921",
            name: "阿拉善左旗"
          }),
          new UTSJSONObject({
            code: "152922",
            name: "阿拉善右旗"
          }),
          new UTSJSONObject({
            code: "152923",
            name: "额济纳旗"
          }),
          new UTSJSONObject({
            code: "152971",
            name: "内蒙古阿拉善高新技术产业开发区"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "21",
    name: "辽宁省",
    children: [
      new UTSJSONObject({
        code: "2101",
        name: "沈阳市",
        children: [
          new UTSJSONObject({
            code: "210102",
            name: "和平区"
          }),
          new UTSJSONObject({
            code: "210103",
            name: "沈河区"
          }),
          new UTSJSONObject({
            code: "210104",
            name: "大东区"
          }),
          new UTSJSONObject({
            code: "210105",
            name: "皇姑区"
          }),
          new UTSJSONObject({
            code: "210106",
            name: "铁西区"
          }),
          new UTSJSONObject({
            code: "210111",
            name: "苏家屯区"
          }),
          new UTSJSONObject({
            code: "210112",
            name: "浑南区"
          }),
          new UTSJSONObject({
            code: "210113",
            name: "沈北新区"
          }),
          new UTSJSONObject({
            code: "210114",
            name: "于洪区"
          }),
          new UTSJSONObject({
            code: "210115",
            name: "辽中区"
          }),
          new UTSJSONObject({
            code: "210123",
            name: "康平县"
          }),
          new UTSJSONObject({
            code: "210124",
            name: "法库县"
          }),
          new UTSJSONObject({
            code: "210181",
            name: "新民市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2102",
        name: "大连市",
        children: [
          new UTSJSONObject({
            code: "210202",
            name: "中山区"
          }),
          new UTSJSONObject({
            code: "210203",
            name: "西岗区"
          }),
          new UTSJSONObject({
            code: "210204",
            name: "沙河口区"
          }),
          new UTSJSONObject({
            code: "210211",
            name: "甘井子区"
          }),
          new UTSJSONObject({
            code: "210212",
            name: "旅顺口区"
          }),
          new UTSJSONObject({
            code: "210213",
            name: "金州区"
          }),
          new UTSJSONObject({
            code: "210214",
            name: "普兰店区"
          }),
          new UTSJSONObject({
            code: "210224",
            name: "长海县"
          }),
          new UTSJSONObject({
            code: "210281",
            name: "瓦房店市"
          }),
          new UTSJSONObject({
            code: "210283",
            name: "庄河市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2103",
        name: "鞍山市",
        children: [
          new UTSJSONObject({
            code: "210302",
            name: "铁东区"
          }),
          new UTSJSONObject({
            code: "210303",
            name: "铁西区"
          }),
          new UTSJSONObject({
            code: "210304",
            name: "立山区"
          }),
          new UTSJSONObject({
            code: "210311",
            name: "千山区"
          }),
          new UTSJSONObject({
            code: "210321",
            name: "台安县"
          }),
          new UTSJSONObject({
            code: "210323",
            name: "岫岩满族自治县"
          }),
          new UTSJSONObject({
            code: "210381",
            name: "海城市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2104",
        name: "抚顺市",
        children: [
          new UTSJSONObject({
            code: "210402",
            name: "新抚区"
          }),
          new UTSJSONObject({
            code: "210403",
            name: "东洲区"
          }),
          new UTSJSONObject({
            code: "210404",
            name: "望花区"
          }),
          new UTSJSONObject({
            code: "210411",
            name: "顺城区"
          }),
          new UTSJSONObject({
            code: "210421",
            name: "抚顺县"
          }),
          new UTSJSONObject({
            code: "210422",
            name: "新宾满族自治县"
          }),
          new UTSJSONObject({
            code: "210423",
            name: "清原满族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2105",
        name: "本溪市",
        children: [
          new UTSJSONObject({
            code: "210502",
            name: "平山区"
          }),
          new UTSJSONObject({
            code: "210503",
            name: "溪湖区"
          }),
          new UTSJSONObject({
            code: "210504",
            name: "明山区"
          }),
          new UTSJSONObject({
            code: "210505",
            name: "南芬区"
          }),
          new UTSJSONObject({
            code: "210521",
            name: "本溪满族自治县"
          }),
          new UTSJSONObject({
            code: "210522",
            name: "桓仁满族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2106",
        name: "丹东市",
        children: [
          new UTSJSONObject({
            code: "210602",
            name: "元宝区"
          }),
          new UTSJSONObject({
            code: "210603",
            name: "振兴区"
          }),
          new UTSJSONObject({
            code: "210604",
            name: "振安区"
          }),
          new UTSJSONObject({
            code: "210624",
            name: "宽甸满族自治县"
          }),
          new UTSJSONObject({
            code: "210681",
            name: "东港市"
          }),
          new UTSJSONObject({
            code: "210682",
            name: "凤城市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2107",
        name: "锦州市",
        children: [
          new UTSJSONObject({
            code: "210702",
            name: "古塔区"
          }),
          new UTSJSONObject({
            code: "210703",
            name: "凌河区"
          }),
          new UTSJSONObject({
            code: "210711",
            name: "太和区"
          }),
          new UTSJSONObject({
            code: "210726",
            name: "黑山县"
          }),
          new UTSJSONObject({
            code: "210727",
            name: "义县"
          }),
          new UTSJSONObject({
            code: "210781",
            name: "凌海市"
          }),
          new UTSJSONObject({
            code: "210782",
            name: "北镇市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2108",
        name: "营口市",
        children: [
          new UTSJSONObject({
            code: "210802",
            name: "站前区"
          }),
          new UTSJSONObject({
            code: "210803",
            name: "西市区"
          }),
          new UTSJSONObject({
            code: "210804",
            name: "鲅鱼圈区"
          }),
          new UTSJSONObject({
            code: "210811",
            name: "老边区"
          }),
          new UTSJSONObject({
            code: "210881",
            name: "盖州市"
          }),
          new UTSJSONObject({
            code: "210882",
            name: "大石桥市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2109",
        name: "阜新市",
        children: [
          new UTSJSONObject({
            code: "210902",
            name: "海州区"
          }),
          new UTSJSONObject({
            code: "210903",
            name: "新邱区"
          }),
          new UTSJSONObject({
            code: "210904",
            name: "太平区"
          }),
          new UTSJSONObject({
            code: "210905",
            name: "清河门区"
          }),
          new UTSJSONObject({
            code: "210911",
            name: "细河区"
          }),
          new UTSJSONObject({
            code: "210921",
            name: "阜新蒙古族自治县"
          }),
          new UTSJSONObject({
            code: "210922",
            name: "彰武县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2110",
        name: "辽阳市",
        children: [
          new UTSJSONObject({
            code: "211002",
            name: "白塔区"
          }),
          new UTSJSONObject({
            code: "211003",
            name: "文圣区"
          }),
          new UTSJSONObject({
            code: "211004",
            name: "宏伟区"
          }),
          new UTSJSONObject({
            code: "211005",
            name: "弓长岭区"
          }),
          new UTSJSONObject({
            code: "211011",
            name: "太子河区"
          }),
          new UTSJSONObject({
            code: "211021",
            name: "辽阳县"
          }),
          new UTSJSONObject({
            code: "211081",
            name: "灯塔市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2111",
        name: "盘锦市",
        children: [
          new UTSJSONObject({
            code: "211102",
            name: "双台子区"
          }),
          new UTSJSONObject({
            code: "211103",
            name: "兴隆台区"
          }),
          new UTSJSONObject({
            code: "211104",
            name: "大洼区"
          }),
          new UTSJSONObject({
            code: "211122",
            name: "盘山县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2112",
        name: "铁岭市",
        children: [
          new UTSJSONObject({
            code: "211202",
            name: "银州区"
          }),
          new UTSJSONObject({
            code: "211204",
            name: "清河区"
          }),
          new UTSJSONObject({
            code: "211221",
            name: "铁岭县"
          }),
          new UTSJSONObject({
            code: "211223",
            name: "西丰县"
          }),
          new UTSJSONObject({
            code: "211224",
            name: "昌图县"
          }),
          new UTSJSONObject({
            code: "211281",
            name: "调兵山市"
          }),
          new UTSJSONObject({
            code: "211282",
            name: "开原市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2113",
        name: "朝阳市",
        children: [
          new UTSJSONObject({
            code: "211302",
            name: "双塔区"
          }),
          new UTSJSONObject({
            code: "211303",
            name: "龙城区"
          }),
          new UTSJSONObject({
            code: "211321",
            name: "朝阳县"
          }),
          new UTSJSONObject({
            code: "211322",
            name: "建平县"
          }),
          new UTSJSONObject({
            code: "211324",
            name: "喀喇沁左翼蒙古族自治县"
          }),
          new UTSJSONObject({
            code: "211381",
            name: "北票市"
          }),
          new UTSJSONObject({
            code: "211382",
            name: "凌源市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2114",
        name: "葫芦岛市",
        children: [
          new UTSJSONObject({
            code: "211402",
            name: "连山区"
          }),
          new UTSJSONObject({
            code: "211403",
            name: "龙港区"
          }),
          new UTSJSONObject({
            code: "211404",
            name: "南票区"
          }),
          new UTSJSONObject({
            code: "211421",
            name: "绥中县"
          }),
          new UTSJSONObject({
            code: "211422",
            name: "建昌县"
          }),
          new UTSJSONObject({
            code: "211481",
            name: "兴城市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "22",
    name: "吉林省",
    children: [
      new UTSJSONObject({
        code: "2201",
        name: "长春市",
        children: [
          new UTSJSONObject({
            code: "220102",
            name: "南关区"
          }),
          new UTSJSONObject({
            code: "220103",
            name: "宽城区"
          }),
          new UTSJSONObject({
            code: "220104",
            name: "朝阳区"
          }),
          new UTSJSONObject({
            code: "220105",
            name: "二道区"
          }),
          new UTSJSONObject({
            code: "220106",
            name: "绿园区"
          }),
          new UTSJSONObject({
            code: "220112",
            name: "双阳区"
          }),
          new UTSJSONObject({
            code: "220113",
            name: "九台区"
          }),
          new UTSJSONObject({
            code: "220122",
            name: "农安县"
          }),
          new UTSJSONObject({
            code: "220171",
            name: "长春经济技术开发区"
          }),
          new UTSJSONObject({
            code: "220172",
            name: "长春净月高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "220173",
            name: "长春高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "220174",
            name: "长春汽车经济技术开发区"
          }),
          new UTSJSONObject({
            code: "220182",
            name: "榆树市"
          }),
          new UTSJSONObject({
            code: "220183",
            name: "德惠市"
          }),
          new UTSJSONObject({
            code: "220184",
            name: "公主岭市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2202",
        name: "吉林市",
        children: [
          new UTSJSONObject({
            code: "220202",
            name: "昌邑区"
          }),
          new UTSJSONObject({
            code: "220203",
            name: "龙潭区"
          }),
          new UTSJSONObject({
            code: "220204",
            name: "船营区"
          }),
          new UTSJSONObject({
            code: "220211",
            name: "丰满区"
          }),
          new UTSJSONObject({
            code: "220221",
            name: "永吉县"
          }),
          new UTSJSONObject({
            code: "220271",
            name: "吉林经济开发区"
          }),
          new UTSJSONObject({
            code: "220272",
            name: "吉林高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "220273",
            name: "吉林中国新加坡食品区"
          }),
          new UTSJSONObject({
            code: "220281",
            name: "蛟河市"
          }),
          new UTSJSONObject({
            code: "220282",
            name: "桦甸市"
          }),
          new UTSJSONObject({
            code: "220283",
            name: "舒兰市"
          }),
          new UTSJSONObject({
            code: "220284",
            name: "磐石市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2203",
        name: "四平市",
        children: [
          new UTSJSONObject({
            code: "220302",
            name: "铁西区"
          }),
          new UTSJSONObject({
            code: "220303",
            name: "铁东区"
          }),
          new UTSJSONObject({
            code: "220322",
            name: "梨树县"
          }),
          new UTSJSONObject({
            code: "220323",
            name: "伊通满族自治县"
          }),
          new UTSJSONObject({
            code: "220382",
            name: "双辽市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2204",
        name: "辽源市",
        children: [
          new UTSJSONObject({
            code: "220402",
            name: "龙山区"
          }),
          new UTSJSONObject({
            code: "220403",
            name: "西安区"
          }),
          new UTSJSONObject({
            code: "220421",
            name: "东丰县"
          }),
          new UTSJSONObject({
            code: "220422",
            name: "东辽县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2205",
        name: "通化市",
        children: [
          new UTSJSONObject({
            code: "220502",
            name: "东昌区"
          }),
          new UTSJSONObject({
            code: "220503",
            name: "二道江区"
          }),
          new UTSJSONObject({
            code: "220521",
            name: "通化县"
          }),
          new UTSJSONObject({
            code: "220523",
            name: "辉南县"
          }),
          new UTSJSONObject({
            code: "220524",
            name: "柳河县"
          }),
          new UTSJSONObject({
            code: "220581",
            name: "梅河口市"
          }),
          new UTSJSONObject({
            code: "220582",
            name: "集安市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2206",
        name: "白山市",
        children: [
          new UTSJSONObject({
            code: "220602",
            name: "浑江区"
          }),
          new UTSJSONObject({
            code: "220605",
            name: "江源区"
          }),
          new UTSJSONObject({
            code: "220621",
            name: "抚松县"
          }),
          new UTSJSONObject({
            code: "220622",
            name: "靖宇县"
          }),
          new UTSJSONObject({
            code: "220623",
            name: "长白朝鲜族自治县"
          }),
          new UTSJSONObject({
            code: "220681",
            name: "临江市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2207",
        name: "松原市",
        children: [
          new UTSJSONObject({
            code: "220702",
            name: "宁江区"
          }),
          new UTSJSONObject({
            code: "220721",
            name: "前郭尔罗斯蒙古族自治县"
          }),
          new UTSJSONObject({
            code: "220722",
            name: "长岭县"
          }),
          new UTSJSONObject({
            code: "220723",
            name: "乾安县"
          }),
          new UTSJSONObject({
            code: "220771",
            name: "吉林松原经济开发区"
          }),
          new UTSJSONObject({
            code: "220781",
            name: "扶余市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2208",
        name: "白城市",
        children: [
          new UTSJSONObject({
            code: "220802",
            name: "洮北区"
          }),
          new UTSJSONObject({
            code: "220821",
            name: "镇赉县"
          }),
          new UTSJSONObject({
            code: "220822",
            name: "通榆县"
          }),
          new UTSJSONObject({
            code: "220871",
            name: "吉林白城经济开发区"
          }),
          new UTSJSONObject({
            code: "220881",
            name: "洮南市"
          }),
          new UTSJSONObject({
            code: "220882",
            name: "大安市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2224",
        name: "延边朝鲜族自治州",
        children: [
          new UTSJSONObject({
            code: "222401",
            name: "延吉市"
          }),
          new UTSJSONObject({
            code: "222402",
            name: "图们市"
          }),
          new UTSJSONObject({
            code: "222403",
            name: "敦化市"
          }),
          new UTSJSONObject({
            code: "222404",
            name: "珲春市"
          }),
          new UTSJSONObject({
            code: "222405",
            name: "龙井市"
          }),
          new UTSJSONObject({
            code: "222406",
            name: "和龙市"
          }),
          new UTSJSONObject({
            code: "222424",
            name: "汪清县"
          }),
          new UTSJSONObject({
            code: "222426",
            name: "安图县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "23",
    name: "黑龙江省",
    children: [
      new UTSJSONObject({
        code: "2301",
        name: "哈尔滨市",
        children: [
          new UTSJSONObject({
            code: "230102",
            name: "道里区"
          }),
          new UTSJSONObject({
            code: "230103",
            name: "南岗区"
          }),
          new UTSJSONObject({
            code: "230104",
            name: "道外区"
          }),
          new UTSJSONObject({
            code: "230108",
            name: "平房区"
          }),
          new UTSJSONObject({
            code: "230109",
            name: "松北区"
          }),
          new UTSJSONObject({
            code: "230110",
            name: "香坊区"
          }),
          new UTSJSONObject({
            code: "230111",
            name: "呼兰区"
          }),
          new UTSJSONObject({
            code: "230112",
            name: "阿城区"
          }),
          new UTSJSONObject({
            code: "230113",
            name: "双城区"
          }),
          new UTSJSONObject({
            code: "230123",
            name: "依兰县"
          }),
          new UTSJSONObject({
            code: "230124",
            name: "方正县"
          }),
          new UTSJSONObject({
            code: "230125",
            name: "宾县"
          }),
          new UTSJSONObject({
            code: "230126",
            name: "巴彦县"
          }),
          new UTSJSONObject({
            code: "230127",
            name: "木兰县"
          }),
          new UTSJSONObject({
            code: "230128",
            name: "通河县"
          }),
          new UTSJSONObject({
            code: "230129",
            name: "延寿县"
          }),
          new UTSJSONObject({
            code: "230183",
            name: "尚志市"
          }),
          new UTSJSONObject({
            code: "230184",
            name: "五常市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2302",
        name: "齐齐哈尔市",
        children: [
          new UTSJSONObject({
            code: "230202",
            name: "龙沙区"
          }),
          new UTSJSONObject({
            code: "230203",
            name: "建华区"
          }),
          new UTSJSONObject({
            code: "230204",
            name: "铁锋区"
          }),
          new UTSJSONObject({
            code: "230205",
            name: "昂昂溪区"
          }),
          new UTSJSONObject({
            code: "230206",
            name: "富拉尔基区"
          }),
          new UTSJSONObject({
            code: "230207",
            name: "碾子山区"
          }),
          new UTSJSONObject({
            code: "230208",
            name: "梅里斯达斡尔族区"
          }),
          new UTSJSONObject({
            code: "230221",
            name: "龙江县"
          }),
          new UTSJSONObject({
            code: "230223",
            name: "依安县"
          }),
          new UTSJSONObject({
            code: "230224",
            name: "泰来县"
          }),
          new UTSJSONObject({
            code: "230225",
            name: "甘南县"
          }),
          new UTSJSONObject({
            code: "230227",
            name: "富裕县"
          }),
          new UTSJSONObject({
            code: "230229",
            name: "克山县"
          }),
          new UTSJSONObject({
            code: "230230",
            name: "克东县"
          }),
          new UTSJSONObject({
            code: "230231",
            name: "拜泉县"
          }),
          new UTSJSONObject({
            code: "230281",
            name: "讷河市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2303",
        name: "鸡西市",
        children: [
          new UTSJSONObject({
            code: "230302",
            name: "鸡冠区"
          }),
          new UTSJSONObject({
            code: "230303",
            name: "恒山区"
          }),
          new UTSJSONObject({
            code: "230304",
            name: "滴道区"
          }),
          new UTSJSONObject({
            code: "230305",
            name: "梨树区"
          }),
          new UTSJSONObject({
            code: "230306",
            name: "城子河区"
          }),
          new UTSJSONObject({
            code: "230307",
            name: "麻山区"
          }),
          new UTSJSONObject({
            code: "230321",
            name: "鸡东县"
          }),
          new UTSJSONObject({
            code: "230381",
            name: "虎林市"
          }),
          new UTSJSONObject({
            code: "230382",
            name: "密山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2304",
        name: "鹤岗市",
        children: [
          new UTSJSONObject({
            code: "230402",
            name: "向阳区"
          }),
          new UTSJSONObject({
            code: "230403",
            name: "工农区"
          }),
          new UTSJSONObject({
            code: "230404",
            name: "南山区"
          }),
          new UTSJSONObject({
            code: "230405",
            name: "兴安区"
          }),
          new UTSJSONObject({
            code: "230406",
            name: "东山区"
          }),
          new UTSJSONObject({
            code: "230407",
            name: "兴山区"
          }),
          new UTSJSONObject({
            code: "230421",
            name: "萝北县"
          }),
          new UTSJSONObject({
            code: "230422",
            name: "绥滨县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2305",
        name: "双鸭山市",
        children: [
          new UTSJSONObject({
            code: "230502",
            name: "尖山区"
          }),
          new UTSJSONObject({
            code: "230503",
            name: "岭东区"
          }),
          new UTSJSONObject({
            code: "230505",
            name: "四方台区"
          }),
          new UTSJSONObject({
            code: "230506",
            name: "宝山区"
          }),
          new UTSJSONObject({
            code: "230521",
            name: "集贤县"
          }),
          new UTSJSONObject({
            code: "230522",
            name: "友谊县"
          }),
          new UTSJSONObject({
            code: "230523",
            name: "宝清县"
          }),
          new UTSJSONObject({
            code: "230524",
            name: "饶河县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2306",
        name: "大庆市",
        children: [
          new UTSJSONObject({
            code: "230602",
            name: "萨尔图区"
          }),
          new UTSJSONObject({
            code: "230603",
            name: "龙凤区"
          }),
          new UTSJSONObject({
            code: "230604",
            name: "让胡路区"
          }),
          new UTSJSONObject({
            code: "230605",
            name: "红岗区"
          }),
          new UTSJSONObject({
            code: "230606",
            name: "大同区"
          }),
          new UTSJSONObject({
            code: "230621",
            name: "肇州县"
          }),
          new UTSJSONObject({
            code: "230622",
            name: "肇源县"
          }),
          new UTSJSONObject({
            code: "230623",
            name: "林甸县"
          }),
          new UTSJSONObject({
            code: "230624",
            name: "杜尔伯特蒙古族自治县"
          }),
          new UTSJSONObject({
            code: "230671",
            name: "大庆高新技术产业开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2307",
        name: "伊春市",
        children: [
          new UTSJSONObject({
            code: "230717",
            name: "伊美区"
          }),
          new UTSJSONObject({
            code: "230718",
            name: "乌翠区"
          }),
          new UTSJSONObject({
            code: "230719",
            name: "友好区"
          }),
          new UTSJSONObject({
            code: "230722",
            name: "嘉荫县"
          }),
          new UTSJSONObject({
            code: "230723",
            name: "汤旺县"
          }),
          new UTSJSONObject({
            code: "230724",
            name: "丰林县"
          }),
          new UTSJSONObject({
            code: "230725",
            name: "大箐山县"
          }),
          new UTSJSONObject({
            code: "230726",
            name: "南岔县"
          }),
          new UTSJSONObject({
            code: "230751",
            name: "金林区"
          }),
          new UTSJSONObject({
            code: "230781",
            name: "铁力市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2308",
        name: "佳木斯市",
        children: [
          new UTSJSONObject({
            code: "230803",
            name: "向阳区"
          }),
          new UTSJSONObject({
            code: "230804",
            name: "前进区"
          }),
          new UTSJSONObject({
            code: "230805",
            name: "东风区"
          }),
          new UTSJSONObject({
            code: "230811",
            name: "郊区"
          }),
          new UTSJSONObject({
            code: "230822",
            name: "桦南县"
          }),
          new UTSJSONObject({
            code: "230826",
            name: "桦川县"
          }),
          new UTSJSONObject({
            code: "230828",
            name: "汤原县"
          }),
          new UTSJSONObject({
            code: "230881",
            name: "同江市"
          }),
          new UTSJSONObject({
            code: "230882",
            name: "富锦市"
          }),
          new UTSJSONObject({
            code: "230883",
            name: "抚远市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2309",
        name: "七台河市",
        children: [
          new UTSJSONObject({
            code: "230902",
            name: "新兴区"
          }),
          new UTSJSONObject({
            code: "230903",
            name: "桃山区"
          }),
          new UTSJSONObject({
            code: "230904",
            name: "茄子河区"
          }),
          new UTSJSONObject({
            code: "230921",
            name: "勃利县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2310",
        name: "牡丹江市",
        children: [
          new UTSJSONObject({
            code: "231002",
            name: "东安区"
          }),
          new UTSJSONObject({
            code: "231003",
            name: "阳明区"
          }),
          new UTSJSONObject({
            code: "231004",
            name: "爱民区"
          }),
          new UTSJSONObject({
            code: "231005",
            name: "西安区"
          }),
          new UTSJSONObject({
            code: "231025",
            name: "林口县"
          }),
          new UTSJSONObject({
            code: "231071",
            name: "牡丹江经济技术开发区"
          }),
          new UTSJSONObject({
            code: "231081",
            name: "绥芬河市"
          }),
          new UTSJSONObject({
            code: "231083",
            name: "海林市"
          }),
          new UTSJSONObject({
            code: "231084",
            name: "宁安市"
          }),
          new UTSJSONObject({
            code: "231085",
            name: "穆棱市"
          }),
          new UTSJSONObject({
            code: "231086",
            name: "东宁市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2311",
        name: "黑河市",
        children: [
          new UTSJSONObject({
            code: "231102",
            name: "爱辉区"
          }),
          new UTSJSONObject({
            code: "231123",
            name: "逊克县"
          }),
          new UTSJSONObject({
            code: "231124",
            name: "孙吴县"
          }),
          new UTSJSONObject({
            code: "231181",
            name: "北安市"
          }),
          new UTSJSONObject({
            code: "231182",
            name: "五大连池市"
          }),
          new UTSJSONObject({
            code: "231183",
            name: "嫩江市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2312",
        name: "绥化市",
        children: [
          new UTSJSONObject({
            code: "231202",
            name: "北林区"
          }),
          new UTSJSONObject({
            code: "231221",
            name: "望奎县"
          }),
          new UTSJSONObject({
            code: "231222",
            name: "兰西县"
          }),
          new UTSJSONObject({
            code: "231223",
            name: "青冈县"
          }),
          new UTSJSONObject({
            code: "231224",
            name: "庆安县"
          }),
          new UTSJSONObject({
            code: "231225",
            name: "明水县"
          }),
          new UTSJSONObject({
            code: "231226",
            name: "绥棱县"
          }),
          new UTSJSONObject({
            code: "231281",
            name: "安达市"
          }),
          new UTSJSONObject({
            code: "231282",
            name: "肇东市"
          }),
          new UTSJSONObject({
            code: "231283",
            name: "海伦市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "2327",
        name: "大兴安岭地区",
        children: [
          new UTSJSONObject({
            code: "232701",
            name: "漠河市"
          }),
          new UTSJSONObject({
            code: "232721",
            name: "呼玛县"
          }),
          new UTSJSONObject({
            code: "232722",
            name: "塔河县"
          }),
          new UTSJSONObject({
            code: "232761",
            name: "加格达奇区"
          }),
          new UTSJSONObject({
            code: "232762",
            name: "松岭区"
          }),
          new UTSJSONObject({
            code: "232763",
            name: "新林区"
          }),
          new UTSJSONObject({
            code: "232764",
            name: "呼中区"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "31",
    name: "上海市",
    children: [
      new UTSJSONObject({
        code: "3101",
        name: "市辖区",
        children: [
          new UTSJSONObject({
            code: "310101",
            name: "黄浦区"
          }),
          new UTSJSONObject({
            code: "310104",
            name: "徐汇区"
          }),
          new UTSJSONObject({
            code: "310105",
            name: "长宁区"
          }),
          new UTSJSONObject({
            code: "310106",
            name: "静安区"
          }),
          new UTSJSONObject({
            code: "310107",
            name: "普陀区"
          }),
          new UTSJSONObject({
            code: "310109",
            name: "虹口区"
          }),
          new UTSJSONObject({
            code: "310110",
            name: "杨浦区"
          }),
          new UTSJSONObject({
            code: "310112",
            name: "闵行区"
          }),
          new UTSJSONObject({
            code: "310113",
            name: "宝山区"
          }),
          new UTSJSONObject({
            code: "310114",
            name: "嘉定区"
          }),
          new UTSJSONObject({
            code: "310115",
            name: "浦东新区"
          }),
          new UTSJSONObject({
            code: "310116",
            name: "金山区"
          }),
          new UTSJSONObject({
            code: "310117",
            name: "松江区"
          }),
          new UTSJSONObject({
            code: "310118",
            name: "青浦区"
          }),
          new UTSJSONObject({
            code: "310120",
            name: "奉贤区"
          }),
          new UTSJSONObject({
            code: "310151",
            name: "崇明区"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "32",
    name: "江苏省",
    children: [
      new UTSJSONObject({
        code: "3201",
        name: "南京市",
        children: [
          new UTSJSONObject({
            code: "320102",
            name: "玄武区"
          }),
          new UTSJSONObject({
            code: "320104",
            name: "秦淮区"
          }),
          new UTSJSONObject({
            code: "320105",
            name: "建邺区"
          }),
          new UTSJSONObject({
            code: "320106",
            name: "鼓楼区"
          }),
          new UTSJSONObject({
            code: "320111",
            name: "浦口区"
          }),
          new UTSJSONObject({
            code: "320113",
            name: "栖霞区"
          }),
          new UTSJSONObject({
            code: "320114",
            name: "雨花台区"
          }),
          new UTSJSONObject({
            code: "320115",
            name: "江宁区"
          }),
          new UTSJSONObject({
            code: "320116",
            name: "六合区"
          }),
          new UTSJSONObject({
            code: "320117",
            name: "溧水区"
          }),
          new UTSJSONObject({
            code: "320118",
            name: "高淳区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3202",
        name: "无锡市",
        children: [
          new UTSJSONObject({
            code: "320205",
            name: "锡山区"
          }),
          new UTSJSONObject({
            code: "320206",
            name: "惠山区"
          }),
          new UTSJSONObject({
            code: "320211",
            name: "滨湖区"
          }),
          new UTSJSONObject({
            code: "320213",
            name: "梁溪区"
          }),
          new UTSJSONObject({
            code: "320214",
            name: "新吴区"
          }),
          new UTSJSONObject({
            code: "320281",
            name: "江阴市"
          }),
          new UTSJSONObject({
            code: "320282",
            name: "宜兴市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3203",
        name: "徐州市",
        children: [
          new UTSJSONObject({
            code: "320302",
            name: "鼓楼区"
          }),
          new UTSJSONObject({
            code: "320303",
            name: "云龙区"
          }),
          new UTSJSONObject({
            code: "320305",
            name: "贾汪区"
          }),
          new UTSJSONObject({
            code: "320311",
            name: "泉山区"
          }),
          new UTSJSONObject({
            code: "320312",
            name: "铜山区"
          }),
          new UTSJSONObject({
            code: "320321",
            name: "丰县"
          }),
          new UTSJSONObject({
            code: "320322",
            name: "沛县"
          }),
          new UTSJSONObject({
            code: "320324",
            name: "睢宁县"
          }),
          new UTSJSONObject({
            code: "320371",
            name: "徐州经济技术开发区"
          }),
          new UTSJSONObject({
            code: "320381",
            name: "新沂市"
          }),
          new UTSJSONObject({
            code: "320382",
            name: "邳州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3204",
        name: "常州市",
        children: [
          new UTSJSONObject({
            code: "320402",
            name: "天宁区"
          }),
          new UTSJSONObject({
            code: "320404",
            name: "钟楼区"
          }),
          new UTSJSONObject({
            code: "320411",
            name: "新北区"
          }),
          new UTSJSONObject({
            code: "320412",
            name: "武进区"
          }),
          new UTSJSONObject({
            code: "320413",
            name: "金坛区"
          }),
          new UTSJSONObject({
            code: "320481",
            name: "溧阳市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3205",
        name: "苏州市",
        children: [
          new UTSJSONObject({
            code: "320505",
            name: "虎丘区"
          }),
          new UTSJSONObject({
            code: "320506",
            name: "吴中区"
          }),
          new UTSJSONObject({
            code: "320507",
            name: "相城区"
          }),
          new UTSJSONObject({
            code: "320508",
            name: "姑苏区"
          }),
          new UTSJSONObject({
            code: "320509",
            name: "吴江区"
          }),
          new UTSJSONObject({
            code: "320571",
            name: "苏州工业园区"
          }),
          new UTSJSONObject({
            code: "320581",
            name: "常熟市"
          }),
          new UTSJSONObject({
            code: "320582",
            name: "张家港市"
          }),
          new UTSJSONObject({
            code: "320583",
            name: "昆山市"
          }),
          new UTSJSONObject({
            code: "320585",
            name: "太仓市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3206",
        name: "南通市",
        children: [
          new UTSJSONObject({
            code: "320612",
            name: "通州区"
          }),
          new UTSJSONObject({
            code: "320613",
            name: "崇川区"
          }),
          new UTSJSONObject({
            code: "320614",
            name: "海门区"
          }),
          new UTSJSONObject({
            code: "320623",
            name: "如东县"
          }),
          new UTSJSONObject({
            code: "320671",
            name: "南通经济技术开发区"
          }),
          new UTSJSONObject({
            code: "320681",
            name: "启东市"
          }),
          new UTSJSONObject({
            code: "320682",
            name: "如皋市"
          }),
          new UTSJSONObject({
            code: "320685",
            name: "海安市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3207",
        name: "连云港市",
        children: [
          new UTSJSONObject({
            code: "320703",
            name: "连云区"
          }),
          new UTSJSONObject({
            code: "320706",
            name: "海州区"
          }),
          new UTSJSONObject({
            code: "320707",
            name: "赣榆区"
          }),
          new UTSJSONObject({
            code: "320722",
            name: "东海县"
          }),
          new UTSJSONObject({
            code: "320723",
            name: "灌云县"
          }),
          new UTSJSONObject({
            code: "320724",
            name: "灌南县"
          }),
          new UTSJSONObject({
            code: "320771",
            name: "连云港经济技术开发区"
          }),
          new UTSJSONObject({
            code: "320772",
            name: "连云港高新技术产业开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3208",
        name: "淮安市",
        children: [
          new UTSJSONObject({
            code: "320803",
            name: "淮安区"
          }),
          new UTSJSONObject({
            code: "320804",
            name: "淮阴区"
          }),
          new UTSJSONObject({
            code: "320812",
            name: "清江浦区"
          }),
          new UTSJSONObject({
            code: "320813",
            name: "洪泽区"
          }),
          new UTSJSONObject({
            code: "320826",
            name: "涟水县"
          }),
          new UTSJSONObject({
            code: "320830",
            name: "盱眙县"
          }),
          new UTSJSONObject({
            code: "320831",
            name: "金湖县"
          }),
          new UTSJSONObject({
            code: "320871",
            name: "淮安经济技术开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3209",
        name: "盐城市",
        children: [
          new UTSJSONObject({
            code: "320902",
            name: "亭湖区"
          }),
          new UTSJSONObject({
            code: "320903",
            name: "盐都区"
          }),
          new UTSJSONObject({
            code: "320904",
            name: "大丰区"
          }),
          new UTSJSONObject({
            code: "320921",
            name: "响水县"
          }),
          new UTSJSONObject({
            code: "320922",
            name: "滨海县"
          }),
          new UTSJSONObject({
            code: "320923",
            name: "阜宁县"
          }),
          new UTSJSONObject({
            code: "320924",
            name: "射阳县"
          }),
          new UTSJSONObject({
            code: "320925",
            name: "建湖县"
          }),
          new UTSJSONObject({
            code: "320971",
            name: "盐城经济技术开发区"
          }),
          new UTSJSONObject({
            code: "320981",
            name: "东台市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3210",
        name: "扬州市",
        children: [
          new UTSJSONObject({
            code: "321002",
            name: "广陵区"
          }),
          new UTSJSONObject({
            code: "321003",
            name: "邗江区"
          }),
          new UTSJSONObject({
            code: "321012",
            name: "江都区"
          }),
          new UTSJSONObject({
            code: "321023",
            name: "宝应县"
          }),
          new UTSJSONObject({
            code: "321071",
            name: "扬州经济技术开发区"
          }),
          new UTSJSONObject({
            code: "321081",
            name: "仪征市"
          }),
          new UTSJSONObject({
            code: "321084",
            name: "高邮市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3211",
        name: "镇江市",
        children: [
          new UTSJSONObject({
            code: "321102",
            name: "京口区"
          }),
          new UTSJSONObject({
            code: "321111",
            name: "润州区"
          }),
          new UTSJSONObject({
            code: "321112",
            name: "丹徒区"
          }),
          new UTSJSONObject({
            code: "321171",
            name: "镇江新区"
          }),
          new UTSJSONObject({
            code: "321181",
            name: "丹阳市"
          }),
          new UTSJSONObject({
            code: "321182",
            name: "扬中市"
          }),
          new UTSJSONObject({
            code: "321183",
            name: "句容市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3212",
        name: "泰州市",
        children: [
          new UTSJSONObject({
            code: "321202",
            name: "海陵区"
          }),
          new UTSJSONObject({
            code: "321203",
            name: "高港区"
          }),
          new UTSJSONObject({
            code: "321204",
            name: "姜堰区"
          }),
          new UTSJSONObject({
            code: "321271",
            name: "泰州医药高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "321281",
            name: "兴化市"
          }),
          new UTSJSONObject({
            code: "321282",
            name: "靖江市"
          }),
          new UTSJSONObject({
            code: "321283",
            name: "泰兴市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3213",
        name: "宿迁市",
        children: [
          new UTSJSONObject({
            code: "321302",
            name: "宿城区"
          }),
          new UTSJSONObject({
            code: "321311",
            name: "宿豫区"
          }),
          new UTSJSONObject({
            code: "321322",
            name: "沭阳县"
          }),
          new UTSJSONObject({
            code: "321323",
            name: "泗阳县"
          }),
          new UTSJSONObject({
            code: "321324",
            name: "泗洪县"
          }),
          new UTSJSONObject({
            code: "321371",
            name: "宿迁经济技术开发区"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "33",
    name: "浙江省",
    children: [
      new UTSJSONObject({
        code: "3301",
        name: "杭州市",
        children: [
          new UTSJSONObject({
            code: "330102",
            name: "上城区"
          }),
          new UTSJSONObject({
            code: "330105",
            name: "拱墅区"
          }),
          new UTSJSONObject({
            code: "330106",
            name: "西湖区"
          }),
          new UTSJSONObject({
            code: "330108",
            name: "滨江区"
          }),
          new UTSJSONObject({
            code: "330109",
            name: "萧山区"
          }),
          new UTSJSONObject({
            code: "330110",
            name: "余杭区"
          }),
          new UTSJSONObject({
            code: "330111",
            name: "富阳区"
          }),
          new UTSJSONObject({
            code: "330112",
            name: "临安区"
          }),
          new UTSJSONObject({
            code: "330113",
            name: "临平区"
          }),
          new UTSJSONObject({
            code: "330114",
            name: "钱塘区"
          }),
          new UTSJSONObject({
            code: "330122",
            name: "桐庐县"
          }),
          new UTSJSONObject({
            code: "330127",
            name: "淳安县"
          }),
          new UTSJSONObject({
            code: "330182",
            name: "建德市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3302",
        name: "宁波市",
        children: [
          new UTSJSONObject({
            code: "330203",
            name: "海曙区"
          }),
          new UTSJSONObject({
            code: "330205",
            name: "江北区"
          }),
          new UTSJSONObject({
            code: "330206",
            name: "北仑区"
          }),
          new UTSJSONObject({
            code: "330211",
            name: "镇海区"
          }),
          new UTSJSONObject({
            code: "330212",
            name: "鄞州区"
          }),
          new UTSJSONObject({
            code: "330213",
            name: "奉化区"
          }),
          new UTSJSONObject({
            code: "330225",
            name: "象山县"
          }),
          new UTSJSONObject({
            code: "330226",
            name: "宁海县"
          }),
          new UTSJSONObject({
            code: "330281",
            name: "余姚市"
          }),
          new UTSJSONObject({
            code: "330282",
            name: "慈溪市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3303",
        name: "温州市",
        children: [
          new UTSJSONObject({
            code: "330302",
            name: "鹿城区"
          }),
          new UTSJSONObject({
            code: "330303",
            name: "龙湾区"
          }),
          new UTSJSONObject({
            code: "330304",
            name: "瓯海区"
          }),
          new UTSJSONObject({
            code: "330305",
            name: "洞头区"
          }),
          new UTSJSONObject({
            code: "330324",
            name: "永嘉县"
          }),
          new UTSJSONObject({
            code: "330326",
            name: "平阳县"
          }),
          new UTSJSONObject({
            code: "330327",
            name: "苍南县"
          }),
          new UTSJSONObject({
            code: "330328",
            name: "文成县"
          }),
          new UTSJSONObject({
            code: "330329",
            name: "泰顺县"
          }),
          new UTSJSONObject({
            code: "330381",
            name: "瑞安市"
          }),
          new UTSJSONObject({
            code: "330382",
            name: "乐清市"
          }),
          new UTSJSONObject({
            code: "330383",
            name: "龙港市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3304",
        name: "嘉兴市",
        children: [
          new UTSJSONObject({
            code: "330402",
            name: "南湖区"
          }),
          new UTSJSONObject({
            code: "330411",
            name: "秀洲区"
          }),
          new UTSJSONObject({
            code: "330421",
            name: "嘉善县"
          }),
          new UTSJSONObject({
            code: "330424",
            name: "海盐县"
          }),
          new UTSJSONObject({
            code: "330481",
            name: "海宁市"
          }),
          new UTSJSONObject({
            code: "330482",
            name: "平湖市"
          }),
          new UTSJSONObject({
            code: "330483",
            name: "桐乡市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3305",
        name: "湖州市",
        children: [
          new UTSJSONObject({
            code: "330502",
            name: "吴兴区"
          }),
          new UTSJSONObject({
            code: "330503",
            name: "南浔区"
          }),
          new UTSJSONObject({
            code: "330521",
            name: "德清县"
          }),
          new UTSJSONObject({
            code: "330522",
            name: "长兴县"
          }),
          new UTSJSONObject({
            code: "330523",
            name: "安吉县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3306",
        name: "绍兴市",
        children: [
          new UTSJSONObject({
            code: "330602",
            name: "越城区"
          }),
          new UTSJSONObject({
            code: "330603",
            name: "柯桥区"
          }),
          new UTSJSONObject({
            code: "330604",
            name: "上虞区"
          }),
          new UTSJSONObject({
            code: "330624",
            name: "新昌县"
          }),
          new UTSJSONObject({
            code: "330681",
            name: "诸暨市"
          }),
          new UTSJSONObject({
            code: "330683",
            name: "嵊州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3307",
        name: "金华市",
        children: [
          new UTSJSONObject({
            code: "330702",
            name: "婺城区"
          }),
          new UTSJSONObject({
            code: "330703",
            name: "金东区"
          }),
          new UTSJSONObject({
            code: "330723",
            name: "武义县"
          }),
          new UTSJSONObject({
            code: "330726",
            name: "浦江县"
          }),
          new UTSJSONObject({
            code: "330727",
            name: "磐安县"
          }),
          new UTSJSONObject({
            code: "330781",
            name: "兰溪市"
          }),
          new UTSJSONObject({
            code: "330782",
            name: "义乌市"
          }),
          new UTSJSONObject({
            code: "330783",
            name: "东阳市"
          }),
          new UTSJSONObject({
            code: "330784",
            name: "永康市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3308",
        name: "衢州市",
        children: [
          new UTSJSONObject({
            code: "330802",
            name: "柯城区"
          }),
          new UTSJSONObject({
            code: "330803",
            name: "衢江区"
          }),
          new UTSJSONObject({
            code: "330822",
            name: "常山县"
          }),
          new UTSJSONObject({
            code: "330824",
            name: "开化县"
          }),
          new UTSJSONObject({
            code: "330825",
            name: "龙游县"
          }),
          new UTSJSONObject({
            code: "330881",
            name: "江山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3309",
        name: "舟山市",
        children: [
          new UTSJSONObject({
            code: "330902",
            name: "定海区"
          }),
          new UTSJSONObject({
            code: "330903",
            name: "普陀区"
          }),
          new UTSJSONObject({
            code: "330921",
            name: "岱山县"
          }),
          new UTSJSONObject({
            code: "330922",
            name: "嵊泗县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3310",
        name: "台州市",
        children: [
          new UTSJSONObject({
            code: "331002",
            name: "椒江区"
          }),
          new UTSJSONObject({
            code: "331003",
            name: "黄岩区"
          }),
          new UTSJSONObject({
            code: "331004",
            name: "路桥区"
          }),
          new UTSJSONObject({
            code: "331022",
            name: "三门县"
          }),
          new UTSJSONObject({
            code: "331023",
            name: "天台县"
          }),
          new UTSJSONObject({
            code: "331024",
            name: "仙居县"
          }),
          new UTSJSONObject({
            code: "331081",
            name: "温岭市"
          }),
          new UTSJSONObject({
            code: "331082",
            name: "临海市"
          }),
          new UTSJSONObject({
            code: "331083",
            name: "玉环市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3311",
        name: "丽水市",
        children: [
          new UTSJSONObject({
            code: "331102",
            name: "莲都区"
          }),
          new UTSJSONObject({
            code: "331121",
            name: "青田县"
          }),
          new UTSJSONObject({
            code: "331122",
            name: "缙云县"
          }),
          new UTSJSONObject({
            code: "331123",
            name: "遂昌县"
          }),
          new UTSJSONObject({
            code: "331124",
            name: "松阳县"
          }),
          new UTSJSONObject({
            code: "331125",
            name: "云和县"
          }),
          new UTSJSONObject({
            code: "331126",
            name: "庆元县"
          }),
          new UTSJSONObject({
            code: "331127",
            name: "景宁畲族自治县"
          }),
          new UTSJSONObject({
            code: "331181",
            name: "龙泉市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "34",
    name: "安徽省",
    children: [
      new UTSJSONObject({
        code: "3401",
        name: "合肥市",
        children: [
          new UTSJSONObject({
            code: "340102",
            name: "瑶海区"
          }),
          new UTSJSONObject({
            code: "340103",
            name: "庐阳区"
          }),
          new UTSJSONObject({
            code: "340104",
            name: "蜀山区"
          }),
          new UTSJSONObject({
            code: "340111",
            name: "包河区"
          }),
          new UTSJSONObject({
            code: "340121",
            name: "长丰县"
          }),
          new UTSJSONObject({
            code: "340122",
            name: "肥东县"
          }),
          new UTSJSONObject({
            code: "340123",
            name: "肥西县"
          }),
          new UTSJSONObject({
            code: "340124",
            name: "庐江县"
          }),
          new UTSJSONObject({
            code: "340171",
            name: "合肥高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "340172",
            name: "合肥经济技术开发区"
          }),
          new UTSJSONObject({
            code: "340173",
            name: "合肥新站高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "340181",
            name: "巢湖市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3402",
        name: "芜湖市",
        children: [
          new UTSJSONObject({
            code: "340202",
            name: "镜湖区"
          }),
          new UTSJSONObject({
            code: "340207",
            name: "鸠江区"
          }),
          new UTSJSONObject({
            code: "340209",
            name: "弋江区"
          }),
          new UTSJSONObject({
            code: "340210",
            name: "湾沚区"
          }),
          new UTSJSONObject({
            code: "340212",
            name: "繁昌区"
          }),
          new UTSJSONObject({
            code: "340223",
            name: "南陵县"
          }),
          new UTSJSONObject({
            code: "340271",
            name: "芜湖经济技术开发区"
          }),
          new UTSJSONObject({
            code: "340272",
            name: "安徽芜湖三山经济开发区"
          }),
          new UTSJSONObject({
            code: "340281",
            name: "无为市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3403",
        name: "蚌埠市",
        children: [
          new UTSJSONObject({
            code: "340302",
            name: "龙子湖区"
          }),
          new UTSJSONObject({
            code: "340303",
            name: "蚌山区"
          }),
          new UTSJSONObject({
            code: "340304",
            name: "禹会区"
          }),
          new UTSJSONObject({
            code: "340311",
            name: "淮上区"
          }),
          new UTSJSONObject({
            code: "340321",
            name: "怀远县"
          }),
          new UTSJSONObject({
            code: "340322",
            name: "五河县"
          }),
          new UTSJSONObject({
            code: "340323",
            name: "固镇县"
          }),
          new UTSJSONObject({
            code: "340371",
            name: "蚌埠市高新技术开发区"
          }),
          new UTSJSONObject({
            code: "340372",
            name: "蚌埠市经济开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3404",
        name: "淮南市",
        children: [
          new UTSJSONObject({
            code: "340402",
            name: "大通区"
          }),
          new UTSJSONObject({
            code: "340403",
            name: "田家庵区"
          }),
          new UTSJSONObject({
            code: "340404",
            name: "谢家集区"
          }),
          new UTSJSONObject({
            code: "340405",
            name: "八公山区"
          }),
          new UTSJSONObject({
            code: "340406",
            name: "潘集区"
          }),
          new UTSJSONObject({
            code: "340421",
            name: "凤台县"
          }),
          new UTSJSONObject({
            code: "340422",
            name: "寿县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3405",
        name: "马鞍山市",
        children: [
          new UTSJSONObject({
            code: "340503",
            name: "花山区"
          }),
          new UTSJSONObject({
            code: "340504",
            name: "雨山区"
          }),
          new UTSJSONObject({
            code: "340506",
            name: "博望区"
          }),
          new UTSJSONObject({
            code: "340521",
            name: "当涂县"
          }),
          new UTSJSONObject({
            code: "340522",
            name: "含山县"
          }),
          new UTSJSONObject({
            code: "340523",
            name: "和县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3406",
        name: "淮北市",
        children: [
          new UTSJSONObject({
            code: "340602",
            name: "杜集区"
          }),
          new UTSJSONObject({
            code: "340603",
            name: "相山区"
          }),
          new UTSJSONObject({
            code: "340604",
            name: "烈山区"
          }),
          new UTSJSONObject({
            code: "340621",
            name: "濉溪县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3407",
        name: "铜陵市",
        children: [
          new UTSJSONObject({
            code: "340705",
            name: "铜官区"
          }),
          new UTSJSONObject({
            code: "340706",
            name: "义安区"
          }),
          new UTSJSONObject({
            code: "340711",
            name: "郊区"
          }),
          new UTSJSONObject({
            code: "340722",
            name: "枞阳县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3408",
        name: "安庆市",
        children: [
          new UTSJSONObject({
            code: "340802",
            name: "迎江区"
          }),
          new UTSJSONObject({
            code: "340803",
            name: "大观区"
          }),
          new UTSJSONObject({
            code: "340811",
            name: "宜秀区"
          }),
          new UTSJSONObject({
            code: "340822",
            name: "怀宁县"
          }),
          new UTSJSONObject({
            code: "340825",
            name: "太湖县"
          }),
          new UTSJSONObject({
            code: "340826",
            name: "宿松县"
          }),
          new UTSJSONObject({
            code: "340827",
            name: "望江县"
          }),
          new UTSJSONObject({
            code: "340828",
            name: "岳西县"
          }),
          new UTSJSONObject({
            code: "340871",
            name: "安徽安庆经济开发区"
          }),
          new UTSJSONObject({
            code: "340881",
            name: "桐城市"
          }),
          new UTSJSONObject({
            code: "340882",
            name: "潜山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3410",
        name: "黄山市",
        children: [
          new UTSJSONObject({
            code: "341002",
            name: "屯溪区"
          }),
          new UTSJSONObject({
            code: "341003",
            name: "黄山区"
          }),
          new UTSJSONObject({
            code: "341004",
            name: "徽州区"
          }),
          new UTSJSONObject({
            code: "341021",
            name: "歙县"
          }),
          new UTSJSONObject({
            code: "341022",
            name: "休宁县"
          }),
          new UTSJSONObject({
            code: "341023",
            name: "黟县"
          }),
          new UTSJSONObject({
            code: "341024",
            name: "祁门县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3411",
        name: "滁州市",
        children: [
          new UTSJSONObject({
            code: "341102",
            name: "琅琊区"
          }),
          new UTSJSONObject({
            code: "341103",
            name: "南谯区"
          }),
          new UTSJSONObject({
            code: "341122",
            name: "来安县"
          }),
          new UTSJSONObject({
            code: "341124",
            name: "全椒县"
          }),
          new UTSJSONObject({
            code: "341125",
            name: "定远县"
          }),
          new UTSJSONObject({
            code: "341126",
            name: "凤阳县"
          }),
          new UTSJSONObject({
            code: "341171",
            name: "中新苏滁高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "341172",
            name: "滁州经济技术开发区"
          }),
          new UTSJSONObject({
            code: "341181",
            name: "天长市"
          }),
          new UTSJSONObject({
            code: "341182",
            name: "明光市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3412",
        name: "阜阳市",
        children: [
          new UTSJSONObject({
            code: "341202",
            name: "颍州区"
          }),
          new UTSJSONObject({
            code: "341203",
            name: "颍东区"
          }),
          new UTSJSONObject({
            code: "341204",
            name: "颍泉区"
          }),
          new UTSJSONObject({
            code: "341221",
            name: "临泉县"
          }),
          new UTSJSONObject({
            code: "341222",
            name: "太和县"
          }),
          new UTSJSONObject({
            code: "341225",
            name: "阜南县"
          }),
          new UTSJSONObject({
            code: "341226",
            name: "颍上县"
          }),
          new UTSJSONObject({
            code: "341271",
            name: "阜阳合肥现代产业园区"
          }),
          new UTSJSONObject({
            code: "341272",
            name: "阜阳经济技术开发区"
          }),
          new UTSJSONObject({
            code: "341282",
            name: "界首市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3413",
        name: "宿州市",
        children: [
          new UTSJSONObject({
            code: "341302",
            name: "埇桥区"
          }),
          new UTSJSONObject({
            code: "341321",
            name: "砀山县"
          }),
          new UTSJSONObject({
            code: "341322",
            name: "萧县"
          }),
          new UTSJSONObject({
            code: "341323",
            name: "灵璧县"
          }),
          new UTSJSONObject({
            code: "341324",
            name: "泗县"
          }),
          new UTSJSONObject({
            code: "341371",
            name: "宿州马鞍山现代产业园区"
          }),
          new UTSJSONObject({
            code: "341372",
            name: "宿州经济技术开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3415",
        name: "六安市",
        children: [
          new UTSJSONObject({
            code: "341502",
            name: "金安区"
          }),
          new UTSJSONObject({
            code: "341503",
            name: "裕安区"
          }),
          new UTSJSONObject({
            code: "341504",
            name: "叶集区"
          }),
          new UTSJSONObject({
            code: "341522",
            name: "霍邱县"
          }),
          new UTSJSONObject({
            code: "341523",
            name: "舒城县"
          }),
          new UTSJSONObject({
            code: "341524",
            name: "金寨县"
          }),
          new UTSJSONObject({
            code: "341525",
            name: "霍山县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3416",
        name: "亳州市",
        children: [
          new UTSJSONObject({
            code: "341602",
            name: "谯城区"
          }),
          new UTSJSONObject({
            code: "341621",
            name: "涡阳县"
          }),
          new UTSJSONObject({
            code: "341622",
            name: "蒙城县"
          }),
          new UTSJSONObject({
            code: "341623",
            name: "利辛县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3417",
        name: "池州市",
        children: [
          new UTSJSONObject({
            code: "341702",
            name: "贵池区"
          }),
          new UTSJSONObject({
            code: "341721",
            name: "东至县"
          }),
          new UTSJSONObject({
            code: "341722",
            name: "石台县"
          }),
          new UTSJSONObject({
            code: "341723",
            name: "青阳县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3418",
        name: "宣城市",
        children: [
          new UTSJSONObject({
            code: "341802",
            name: "宣州区"
          }),
          new UTSJSONObject({
            code: "341821",
            name: "郎溪县"
          }),
          new UTSJSONObject({
            code: "341823",
            name: "泾县"
          }),
          new UTSJSONObject({
            code: "341824",
            name: "绩溪县"
          }),
          new UTSJSONObject({
            code: "341825",
            name: "旌德县"
          }),
          new UTSJSONObject({
            code: "341871",
            name: "宣城市经济开发区"
          }),
          new UTSJSONObject({
            code: "341881",
            name: "宁国市"
          }),
          new UTSJSONObject({
            code: "341882",
            name: "广德市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "35",
    name: "福建省",
    children: [
      new UTSJSONObject({
        code: "3501",
        name: "福州市",
        children: [
          new UTSJSONObject({
            code: "350102",
            name: "鼓楼区"
          }),
          new UTSJSONObject({
            code: "350103",
            name: "台江区"
          }),
          new UTSJSONObject({
            code: "350104",
            name: "仓山区"
          }),
          new UTSJSONObject({
            code: "350105",
            name: "马尾区"
          }),
          new UTSJSONObject({
            code: "350111",
            name: "晋安区"
          }),
          new UTSJSONObject({
            code: "350112",
            name: "长乐区"
          }),
          new UTSJSONObject({
            code: "350121",
            name: "闽侯县"
          }),
          new UTSJSONObject({
            code: "350122",
            name: "连江县"
          }),
          new UTSJSONObject({
            code: "350123",
            name: "罗源县"
          }),
          new UTSJSONObject({
            code: "350124",
            name: "闽清县"
          }),
          new UTSJSONObject({
            code: "350125",
            name: "永泰县"
          }),
          new UTSJSONObject({
            code: "350128",
            name: "平潭县"
          }),
          new UTSJSONObject({
            code: "350181",
            name: "福清市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3502",
        name: "厦门市",
        children: [
          new UTSJSONObject({
            code: "350203",
            name: "思明区"
          }),
          new UTSJSONObject({
            code: "350205",
            name: "海沧区"
          }),
          new UTSJSONObject({
            code: "350206",
            name: "湖里区"
          }),
          new UTSJSONObject({
            code: "350211",
            name: "集美区"
          }),
          new UTSJSONObject({
            code: "350212",
            name: "同安区"
          }),
          new UTSJSONObject({
            code: "350213",
            name: "翔安区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3503",
        name: "莆田市",
        children: [
          new UTSJSONObject({
            code: "350302",
            name: "城厢区"
          }),
          new UTSJSONObject({
            code: "350303",
            name: "涵江区"
          }),
          new UTSJSONObject({
            code: "350304",
            name: "荔城区"
          }),
          new UTSJSONObject({
            code: "350305",
            name: "秀屿区"
          }),
          new UTSJSONObject({
            code: "350322",
            name: "仙游县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3504",
        name: "三明市",
        children: [
          new UTSJSONObject({
            code: "350404",
            name: "三元区"
          }),
          new UTSJSONObject({
            code: "350405",
            name: "沙县区"
          }),
          new UTSJSONObject({
            code: "350421",
            name: "明溪县"
          }),
          new UTSJSONObject({
            code: "350423",
            name: "清流县"
          }),
          new UTSJSONObject({
            code: "350424",
            name: "宁化县"
          }),
          new UTSJSONObject({
            code: "350425",
            name: "大田县"
          }),
          new UTSJSONObject({
            code: "350426",
            name: "尤溪县"
          }),
          new UTSJSONObject({
            code: "350428",
            name: "将乐县"
          }),
          new UTSJSONObject({
            code: "350429",
            name: "泰宁县"
          }),
          new UTSJSONObject({
            code: "350430",
            name: "建宁县"
          }),
          new UTSJSONObject({
            code: "350481",
            name: "永安市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3505",
        name: "泉州市",
        children: [
          new UTSJSONObject({
            code: "350502",
            name: "鲤城区"
          }),
          new UTSJSONObject({
            code: "350503",
            name: "丰泽区"
          }),
          new UTSJSONObject({
            code: "350504",
            name: "洛江区"
          }),
          new UTSJSONObject({
            code: "350505",
            name: "泉港区"
          }),
          new UTSJSONObject({
            code: "350521",
            name: "惠安县"
          }),
          new UTSJSONObject({
            code: "350524",
            name: "安溪县"
          }),
          new UTSJSONObject({
            code: "350525",
            name: "永春县"
          }),
          new UTSJSONObject({
            code: "350526",
            name: "德化县"
          }),
          new UTSJSONObject({
            code: "350527",
            name: "金门县"
          }),
          new UTSJSONObject({
            code: "350581",
            name: "石狮市"
          }),
          new UTSJSONObject({
            code: "350582",
            name: "晋江市"
          }),
          new UTSJSONObject({
            code: "350583",
            name: "南安市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3506",
        name: "漳州市",
        children: [
          new UTSJSONObject({
            code: "350602",
            name: "芗城区"
          }),
          new UTSJSONObject({
            code: "350603",
            name: "龙文区"
          }),
          new UTSJSONObject({
            code: "350604",
            name: "龙海区"
          }),
          new UTSJSONObject({
            code: "350605",
            name: "长泰区"
          }),
          new UTSJSONObject({
            code: "350622",
            name: "云霄县"
          }),
          new UTSJSONObject({
            code: "350623",
            name: "漳浦县"
          }),
          new UTSJSONObject({
            code: "350624",
            name: "诏安县"
          }),
          new UTSJSONObject({
            code: "350626",
            name: "东山县"
          }),
          new UTSJSONObject({
            code: "350627",
            name: "南靖县"
          }),
          new UTSJSONObject({
            code: "350628",
            name: "平和县"
          }),
          new UTSJSONObject({
            code: "350629",
            name: "华安县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3507",
        name: "南平市",
        children: [
          new UTSJSONObject({
            code: "350702",
            name: "延平区"
          }),
          new UTSJSONObject({
            code: "350703",
            name: "建阳区"
          }),
          new UTSJSONObject({
            code: "350721",
            name: "顺昌县"
          }),
          new UTSJSONObject({
            code: "350722",
            name: "浦城县"
          }),
          new UTSJSONObject({
            code: "350723",
            name: "光泽县"
          }),
          new UTSJSONObject({
            code: "350724",
            name: "松溪县"
          }),
          new UTSJSONObject({
            code: "350725",
            name: "政和县"
          }),
          new UTSJSONObject({
            code: "350781",
            name: "邵武市"
          }),
          new UTSJSONObject({
            code: "350782",
            name: "武夷山市"
          }),
          new UTSJSONObject({
            code: "350783",
            name: "建瓯市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3508",
        name: "龙岩市",
        children: [
          new UTSJSONObject({
            code: "350802",
            name: "新罗区"
          }),
          new UTSJSONObject({
            code: "350803",
            name: "永定区"
          }),
          new UTSJSONObject({
            code: "350821",
            name: "长汀县"
          }),
          new UTSJSONObject({
            code: "350823",
            name: "上杭县"
          }),
          new UTSJSONObject({
            code: "350824",
            name: "武平县"
          }),
          new UTSJSONObject({
            code: "350825",
            name: "连城县"
          }),
          new UTSJSONObject({
            code: "350881",
            name: "漳平市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3509",
        name: "宁德市",
        children: [
          new UTSJSONObject({
            code: "350902",
            name: "蕉城区"
          }),
          new UTSJSONObject({
            code: "350921",
            name: "霞浦县"
          }),
          new UTSJSONObject({
            code: "350922",
            name: "古田县"
          }),
          new UTSJSONObject({
            code: "350923",
            name: "屏南县"
          }),
          new UTSJSONObject({
            code: "350924",
            name: "寿宁县"
          }),
          new UTSJSONObject({
            code: "350925",
            name: "周宁县"
          }),
          new UTSJSONObject({
            code: "350926",
            name: "柘荣县"
          }),
          new UTSJSONObject({
            code: "350981",
            name: "福安市"
          }),
          new UTSJSONObject({
            code: "350982",
            name: "福鼎市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "36",
    name: "江西省",
    children: [
      new UTSJSONObject({
        code: "3601",
        name: "南昌市",
        children: [
          new UTSJSONObject({
            code: "360102",
            name: "东湖区"
          }),
          new UTSJSONObject({
            code: "360103",
            name: "西湖区"
          }),
          new UTSJSONObject({
            code: "360104",
            name: "青云谱区"
          }),
          new UTSJSONObject({
            code: "360111",
            name: "青山湖区"
          }),
          new UTSJSONObject({
            code: "360112",
            name: "新建区"
          }),
          new UTSJSONObject({
            code: "360113",
            name: "红谷滩区"
          }),
          new UTSJSONObject({
            code: "360121",
            name: "南昌县"
          }),
          new UTSJSONObject({
            code: "360123",
            name: "安义县"
          }),
          new UTSJSONObject({
            code: "360124",
            name: "进贤县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3602",
        name: "景德镇市",
        children: [
          new UTSJSONObject({
            code: "360202",
            name: "昌江区"
          }),
          new UTSJSONObject({
            code: "360203",
            name: "珠山区"
          }),
          new UTSJSONObject({
            code: "360222",
            name: "浮梁县"
          }),
          new UTSJSONObject({
            code: "360281",
            name: "乐平市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3603",
        name: "萍乡市",
        children: [
          new UTSJSONObject({
            code: "360302",
            name: "安源区"
          }),
          new UTSJSONObject({
            code: "360313",
            name: "湘东区"
          }),
          new UTSJSONObject({
            code: "360321",
            name: "莲花县"
          }),
          new UTSJSONObject({
            code: "360322",
            name: "上栗县"
          }),
          new UTSJSONObject({
            code: "360323",
            name: "芦溪县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3604",
        name: "九江市",
        children: [
          new UTSJSONObject({
            code: "360402",
            name: "濂溪区"
          }),
          new UTSJSONObject({
            code: "360403",
            name: "浔阳区"
          }),
          new UTSJSONObject({
            code: "360404",
            name: "柴桑区"
          }),
          new UTSJSONObject({
            code: "360423",
            name: "武宁县"
          }),
          new UTSJSONObject({
            code: "360424",
            name: "修水县"
          }),
          new UTSJSONObject({
            code: "360425",
            name: "永修县"
          }),
          new UTSJSONObject({
            code: "360426",
            name: "德安县"
          }),
          new UTSJSONObject({
            code: "360428",
            name: "都昌县"
          }),
          new UTSJSONObject({
            code: "360429",
            name: "湖口县"
          }),
          new UTSJSONObject({
            code: "360430",
            name: "彭泽县"
          }),
          new UTSJSONObject({
            code: "360481",
            name: "瑞昌市"
          }),
          new UTSJSONObject({
            code: "360482",
            name: "共青城市"
          }),
          new UTSJSONObject({
            code: "360483",
            name: "庐山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3605",
        name: "新余市",
        children: [
          new UTSJSONObject({
            code: "360502",
            name: "渝水区"
          }),
          new UTSJSONObject({
            code: "360521",
            name: "分宜县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3606",
        name: "鹰潭市",
        children: [
          new UTSJSONObject({
            code: "360602",
            name: "月湖区"
          }),
          new UTSJSONObject({
            code: "360603",
            name: "余江区"
          }),
          new UTSJSONObject({
            code: "360681",
            name: "贵溪市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3607",
        name: "赣州市",
        children: [
          new UTSJSONObject({
            code: "360702",
            name: "章贡区"
          }),
          new UTSJSONObject({
            code: "360703",
            name: "南康区"
          }),
          new UTSJSONObject({
            code: "360704",
            name: "赣县区"
          }),
          new UTSJSONObject({
            code: "360722",
            name: "信丰县"
          }),
          new UTSJSONObject({
            code: "360723",
            name: "大余县"
          }),
          new UTSJSONObject({
            code: "360724",
            name: "上犹县"
          }),
          new UTSJSONObject({
            code: "360725",
            name: "崇义县"
          }),
          new UTSJSONObject({
            code: "360726",
            name: "安远县"
          }),
          new UTSJSONObject({
            code: "360728",
            name: "定南县"
          }),
          new UTSJSONObject({
            code: "360729",
            name: "全南县"
          }),
          new UTSJSONObject({
            code: "360730",
            name: "宁都县"
          }),
          new UTSJSONObject({
            code: "360731",
            name: "于都县"
          }),
          new UTSJSONObject({
            code: "360732",
            name: "兴国县"
          }),
          new UTSJSONObject({
            code: "360733",
            name: "会昌县"
          }),
          new UTSJSONObject({
            code: "360734",
            name: "寻乌县"
          }),
          new UTSJSONObject({
            code: "360735",
            name: "石城县"
          }),
          new UTSJSONObject({
            code: "360781",
            name: "瑞金市"
          }),
          new UTSJSONObject({
            code: "360783",
            name: "龙南市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3608",
        name: "吉安市",
        children: [
          new UTSJSONObject({
            code: "360802",
            name: "吉州区"
          }),
          new UTSJSONObject({
            code: "360803",
            name: "青原区"
          }),
          new UTSJSONObject({
            code: "360821",
            name: "吉安县"
          }),
          new UTSJSONObject({
            code: "360822",
            name: "吉水县"
          }),
          new UTSJSONObject({
            code: "360823",
            name: "峡江县"
          }),
          new UTSJSONObject({
            code: "360824",
            name: "新干县"
          }),
          new UTSJSONObject({
            code: "360825",
            name: "永丰县"
          }),
          new UTSJSONObject({
            code: "360826",
            name: "泰和县"
          }),
          new UTSJSONObject({
            code: "360827",
            name: "遂川县"
          }),
          new UTSJSONObject({
            code: "360828",
            name: "万安县"
          }),
          new UTSJSONObject({
            code: "360829",
            name: "安福县"
          }),
          new UTSJSONObject({
            code: "360830",
            name: "永新县"
          }),
          new UTSJSONObject({
            code: "360881",
            name: "井冈山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3609",
        name: "宜春市",
        children: [
          new UTSJSONObject({
            code: "360902",
            name: "袁州区"
          }),
          new UTSJSONObject({
            code: "360921",
            name: "奉新县"
          }),
          new UTSJSONObject({
            code: "360922",
            name: "万载县"
          }),
          new UTSJSONObject({
            code: "360923",
            name: "上高县"
          }),
          new UTSJSONObject({
            code: "360924",
            name: "宜丰县"
          }),
          new UTSJSONObject({
            code: "360925",
            name: "靖安县"
          }),
          new UTSJSONObject({
            code: "360926",
            name: "铜鼓县"
          }),
          new UTSJSONObject({
            code: "360981",
            name: "丰城市"
          }),
          new UTSJSONObject({
            code: "360982",
            name: "樟树市"
          }),
          new UTSJSONObject({
            code: "360983",
            name: "高安市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3610",
        name: "抚州市",
        children: [
          new UTSJSONObject({
            code: "361002",
            name: "临川区"
          }),
          new UTSJSONObject({
            code: "361003",
            name: "东乡区"
          }),
          new UTSJSONObject({
            code: "361021",
            name: "南城县"
          }),
          new UTSJSONObject({
            code: "361022",
            name: "黎川县"
          }),
          new UTSJSONObject({
            code: "361023",
            name: "南丰县"
          }),
          new UTSJSONObject({
            code: "361024",
            name: "崇仁县"
          }),
          new UTSJSONObject({
            code: "361025",
            name: "乐安县"
          }),
          new UTSJSONObject({
            code: "361026",
            name: "宜黄县"
          }),
          new UTSJSONObject({
            code: "361027",
            name: "金溪县"
          }),
          new UTSJSONObject({
            code: "361028",
            name: "资溪县"
          }),
          new UTSJSONObject({
            code: "361030",
            name: "广昌县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3611",
        name: "上饶市",
        children: [
          new UTSJSONObject({
            code: "361102",
            name: "信州区"
          }),
          new UTSJSONObject({
            code: "361103",
            name: "广丰区"
          }),
          new UTSJSONObject({
            code: "361104",
            name: "广信区"
          }),
          new UTSJSONObject({
            code: "361123",
            name: "玉山县"
          }),
          new UTSJSONObject({
            code: "361124",
            name: "铅山县"
          }),
          new UTSJSONObject({
            code: "361125",
            name: "横峰县"
          }),
          new UTSJSONObject({
            code: "361126",
            name: "弋阳县"
          }),
          new UTSJSONObject({
            code: "361127",
            name: "余干县"
          }),
          new UTSJSONObject({
            code: "361128",
            name: "鄱阳县"
          }),
          new UTSJSONObject({
            code: "361129",
            name: "万年县"
          }),
          new UTSJSONObject({
            code: "361130",
            name: "婺源县"
          }),
          new UTSJSONObject({
            code: "361181",
            name: "德兴市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "37",
    name: "山东省",
    children: [
      new UTSJSONObject({
        code: "3701",
        name: "济南市",
        children: [
          new UTSJSONObject({
            code: "370102",
            name: "历下区"
          }),
          new UTSJSONObject({
            code: "370103",
            name: "市中区"
          }),
          new UTSJSONObject({
            code: "370104",
            name: "槐荫区"
          }),
          new UTSJSONObject({
            code: "370105",
            name: "天桥区"
          }),
          new UTSJSONObject({
            code: "370112",
            name: "历城区"
          }),
          new UTSJSONObject({
            code: "370113",
            name: "长清区"
          }),
          new UTSJSONObject({
            code: "370114",
            name: "章丘区"
          }),
          new UTSJSONObject({
            code: "370115",
            name: "济阳区"
          }),
          new UTSJSONObject({
            code: "370116",
            name: "莱芜区"
          }),
          new UTSJSONObject({
            code: "370117",
            name: "钢城区"
          }),
          new UTSJSONObject({
            code: "370124",
            name: "平阴县"
          }),
          new UTSJSONObject({
            code: "370126",
            name: "商河县"
          }),
          new UTSJSONObject({
            code: "370171",
            name: "济南高新技术产业开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3702",
        name: "青岛市",
        children: [
          new UTSJSONObject({
            code: "370202",
            name: "市南区"
          }),
          new UTSJSONObject({
            code: "370203",
            name: "市北区"
          }),
          new UTSJSONObject({
            code: "370211",
            name: "黄岛区"
          }),
          new UTSJSONObject({
            code: "370212",
            name: "崂山区"
          }),
          new UTSJSONObject({
            code: "370213",
            name: "李沧区"
          }),
          new UTSJSONObject({
            code: "370214",
            name: "城阳区"
          }),
          new UTSJSONObject({
            code: "370215",
            name: "即墨区"
          }),
          new UTSJSONObject({
            code: "370271",
            name: "青岛高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "370281",
            name: "胶州市"
          }),
          new UTSJSONObject({
            code: "370283",
            name: "平度市"
          }),
          new UTSJSONObject({
            code: "370285",
            name: "莱西市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3703",
        name: "淄博市",
        children: [
          new UTSJSONObject({
            code: "370302",
            name: "淄川区"
          }),
          new UTSJSONObject({
            code: "370303",
            name: "张店区"
          }),
          new UTSJSONObject({
            code: "370304",
            name: "博山区"
          }),
          new UTSJSONObject({
            code: "370305",
            name: "临淄区"
          }),
          new UTSJSONObject({
            code: "370306",
            name: "周村区"
          }),
          new UTSJSONObject({
            code: "370321",
            name: "桓台县"
          }),
          new UTSJSONObject({
            code: "370322",
            name: "高青县"
          }),
          new UTSJSONObject({
            code: "370323",
            name: "沂源县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3704",
        name: "枣庄市",
        children: [
          new UTSJSONObject({
            code: "370402",
            name: "市中区"
          }),
          new UTSJSONObject({
            code: "370403",
            name: "薛城区"
          }),
          new UTSJSONObject({
            code: "370404",
            name: "峄城区"
          }),
          new UTSJSONObject({
            code: "370405",
            name: "台儿庄区"
          }),
          new UTSJSONObject({
            code: "370406",
            name: "山亭区"
          }),
          new UTSJSONObject({
            code: "370481",
            name: "滕州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3705",
        name: "东营市",
        children: [
          new UTSJSONObject({
            code: "370502",
            name: "东营区"
          }),
          new UTSJSONObject({
            code: "370503",
            name: "河口区"
          }),
          new UTSJSONObject({
            code: "370505",
            name: "垦利区"
          }),
          new UTSJSONObject({
            code: "370522",
            name: "利津县"
          }),
          new UTSJSONObject({
            code: "370523",
            name: "广饶县"
          }),
          new UTSJSONObject({
            code: "370571",
            name: "东营经济技术开发区"
          }),
          new UTSJSONObject({
            code: "370572",
            name: "东营港经济开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3706",
        name: "烟台市",
        children: [
          new UTSJSONObject({
            code: "370602",
            name: "芝罘区"
          }),
          new UTSJSONObject({
            code: "370611",
            name: "福山区"
          }),
          new UTSJSONObject({
            code: "370612",
            name: "牟平区"
          }),
          new UTSJSONObject({
            code: "370613",
            name: "莱山区"
          }),
          new UTSJSONObject({
            code: "370614",
            name: "蓬莱区"
          }),
          new UTSJSONObject({
            code: "370671",
            name: "烟台高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "370672",
            name: "烟台经济技术开发区"
          }),
          new UTSJSONObject({
            code: "370681",
            name: "龙口市"
          }),
          new UTSJSONObject({
            code: "370682",
            name: "莱阳市"
          }),
          new UTSJSONObject({
            code: "370683",
            name: "莱州市"
          }),
          new UTSJSONObject({
            code: "370685",
            name: "招远市"
          }),
          new UTSJSONObject({
            code: "370686",
            name: "栖霞市"
          }),
          new UTSJSONObject({
            code: "370687",
            name: "海阳市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3707",
        name: "潍坊市",
        children: [
          new UTSJSONObject({
            code: "370702",
            name: "潍城区"
          }),
          new UTSJSONObject({
            code: "370703",
            name: "寒亭区"
          }),
          new UTSJSONObject({
            code: "370704",
            name: "坊子区"
          }),
          new UTSJSONObject({
            code: "370705",
            name: "奎文区"
          }),
          new UTSJSONObject({
            code: "370724",
            name: "临朐县"
          }),
          new UTSJSONObject({
            code: "370725",
            name: "昌乐县"
          }),
          new UTSJSONObject({
            code: "370772",
            name: "潍坊滨海经济技术开发区"
          }),
          new UTSJSONObject({
            code: "370781",
            name: "青州市"
          }),
          new UTSJSONObject({
            code: "370782",
            name: "诸城市"
          }),
          new UTSJSONObject({
            code: "370783",
            name: "寿光市"
          }),
          new UTSJSONObject({
            code: "370784",
            name: "安丘市"
          }),
          new UTSJSONObject({
            code: "370785",
            name: "高密市"
          }),
          new UTSJSONObject({
            code: "370786",
            name: "昌邑市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3708",
        name: "济宁市",
        children: [
          new UTSJSONObject({
            code: "370811",
            name: "任城区"
          }),
          new UTSJSONObject({
            code: "370812",
            name: "兖州区"
          }),
          new UTSJSONObject({
            code: "370826",
            name: "微山县"
          }),
          new UTSJSONObject({
            code: "370827",
            name: "鱼台县"
          }),
          new UTSJSONObject({
            code: "370828",
            name: "金乡县"
          }),
          new UTSJSONObject({
            code: "370829",
            name: "嘉祥县"
          }),
          new UTSJSONObject({
            code: "370830",
            name: "汶上县"
          }),
          new UTSJSONObject({
            code: "370831",
            name: "泗水县"
          }),
          new UTSJSONObject({
            code: "370832",
            name: "梁山县"
          }),
          new UTSJSONObject({
            code: "370871",
            name: "济宁高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "370881",
            name: "曲阜市"
          }),
          new UTSJSONObject({
            code: "370883",
            name: "邹城市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3709",
        name: "泰安市",
        children: [
          new UTSJSONObject({
            code: "370902",
            name: "泰山区"
          }),
          new UTSJSONObject({
            code: "370911",
            name: "岱岳区"
          }),
          new UTSJSONObject({
            code: "370921",
            name: "宁阳县"
          }),
          new UTSJSONObject({
            code: "370923",
            name: "东平县"
          }),
          new UTSJSONObject({
            code: "370982",
            name: "新泰市"
          }),
          new UTSJSONObject({
            code: "370983",
            name: "肥城市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3710",
        name: "威海市",
        children: [
          new UTSJSONObject({
            code: "371002",
            name: "环翠区"
          }),
          new UTSJSONObject({
            code: "371003",
            name: "文登区"
          }),
          new UTSJSONObject({
            code: "371071",
            name: "威海火炬高技术产业开发区"
          }),
          new UTSJSONObject({
            code: "371072",
            name: "威海经济技术开发区"
          }),
          new UTSJSONObject({
            code: "371073",
            name: "威海临港经济技术开发区"
          }),
          new UTSJSONObject({
            code: "371082",
            name: "荣成市"
          }),
          new UTSJSONObject({
            code: "371083",
            name: "乳山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3711",
        name: "日照市",
        children: [
          new UTSJSONObject({
            code: "371102",
            name: "东港区"
          }),
          new UTSJSONObject({
            code: "371103",
            name: "岚山区"
          }),
          new UTSJSONObject({
            code: "371121",
            name: "五莲县"
          }),
          new UTSJSONObject({
            code: "371122",
            name: "莒县"
          }),
          new UTSJSONObject({
            code: "371171",
            name: "日照经济技术开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3713",
        name: "临沂市",
        children: [
          new UTSJSONObject({
            code: "371302",
            name: "兰山区"
          }),
          new UTSJSONObject({
            code: "371311",
            name: "罗庄区"
          }),
          new UTSJSONObject({
            code: "371312",
            name: "河东区"
          }),
          new UTSJSONObject({
            code: "371321",
            name: "沂南县"
          }),
          new UTSJSONObject({
            code: "371322",
            name: "郯城县"
          }),
          new UTSJSONObject({
            code: "371323",
            name: "沂水县"
          }),
          new UTSJSONObject({
            code: "371324",
            name: "兰陵县"
          }),
          new UTSJSONObject({
            code: "371325",
            name: "费县"
          }),
          new UTSJSONObject({
            code: "371326",
            name: "平邑县"
          }),
          new UTSJSONObject({
            code: "371327",
            name: "莒南县"
          }),
          new UTSJSONObject({
            code: "371328",
            name: "蒙阴县"
          }),
          new UTSJSONObject({
            code: "371329",
            name: "临沭县"
          }),
          new UTSJSONObject({
            code: "371371",
            name: "临沂高新技术产业开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3714",
        name: "德州市",
        children: [
          new UTSJSONObject({
            code: "371402",
            name: "德城区"
          }),
          new UTSJSONObject({
            code: "371403",
            name: "陵城区"
          }),
          new UTSJSONObject({
            code: "371422",
            name: "宁津县"
          }),
          new UTSJSONObject({
            code: "371423",
            name: "庆云县"
          }),
          new UTSJSONObject({
            code: "371424",
            name: "临邑县"
          }),
          new UTSJSONObject({
            code: "371425",
            name: "齐河县"
          }),
          new UTSJSONObject({
            code: "371426",
            name: "平原县"
          }),
          new UTSJSONObject({
            code: "371427",
            name: "夏津县"
          }),
          new UTSJSONObject({
            code: "371428",
            name: "武城县"
          }),
          new UTSJSONObject({
            code: "371471",
            name: "德州天衢新区"
          }),
          new UTSJSONObject({
            code: "371481",
            name: "乐陵市"
          }),
          new UTSJSONObject({
            code: "371482",
            name: "禹城市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3715",
        name: "聊城市",
        children: [
          new UTSJSONObject({
            code: "371502",
            name: "东昌府区"
          }),
          new UTSJSONObject({
            code: "371503",
            name: "茌平区"
          }),
          new UTSJSONObject({
            code: "371521",
            name: "阳谷县"
          }),
          new UTSJSONObject({
            code: "371522",
            name: "莘县"
          }),
          new UTSJSONObject({
            code: "371524",
            name: "东阿县"
          }),
          new UTSJSONObject({
            code: "371525",
            name: "冠县"
          }),
          new UTSJSONObject({
            code: "371526",
            name: "高唐县"
          }),
          new UTSJSONObject({
            code: "371581",
            name: "临清市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3716",
        name: "滨州市",
        children: [
          new UTSJSONObject({
            code: "371602",
            name: "滨城区"
          }),
          new UTSJSONObject({
            code: "371603",
            name: "沾化区"
          }),
          new UTSJSONObject({
            code: "371621",
            name: "惠民县"
          }),
          new UTSJSONObject({
            code: "371622",
            name: "阳信县"
          }),
          new UTSJSONObject({
            code: "371623",
            name: "无棣县"
          }),
          new UTSJSONObject({
            code: "371625",
            name: "博兴县"
          }),
          new UTSJSONObject({
            code: "371681",
            name: "邹平市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "3717",
        name: "菏泽市",
        children: [
          new UTSJSONObject({
            code: "371702",
            name: "牡丹区"
          }),
          new UTSJSONObject({
            code: "371703",
            name: "定陶区"
          }),
          new UTSJSONObject({
            code: "371721",
            name: "曹县"
          }),
          new UTSJSONObject({
            code: "371722",
            name: "单县"
          }),
          new UTSJSONObject({
            code: "371723",
            name: "成武县"
          }),
          new UTSJSONObject({
            code: "371724",
            name: "巨野县"
          }),
          new UTSJSONObject({
            code: "371725",
            name: "郓城县"
          }),
          new UTSJSONObject({
            code: "371726",
            name: "鄄城县"
          }),
          new UTSJSONObject({
            code: "371728",
            name: "东明县"
          }),
          new UTSJSONObject({
            code: "371771",
            name: "菏泽经济技术开发区"
          }),
          new UTSJSONObject({
            code: "371772",
            name: "菏泽高新技术开发区"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "41",
    name: "河南省",
    children: [
      new UTSJSONObject({
        code: "4101",
        name: "郑州市",
        children: [
          new UTSJSONObject({
            code: "410102",
            name: "中原区"
          }),
          new UTSJSONObject({
            code: "410103",
            name: "二七区"
          }),
          new UTSJSONObject({
            code: "410104",
            name: "管城回族区"
          }),
          new UTSJSONObject({
            code: "410105",
            name: "金水区"
          }),
          new UTSJSONObject({
            code: "410106",
            name: "上街区"
          }),
          new UTSJSONObject({
            code: "410108",
            name: "惠济区"
          }),
          new UTSJSONObject({
            code: "410122",
            name: "中牟县"
          }),
          new UTSJSONObject({
            code: "410171",
            name: "郑州经济技术开发区"
          }),
          new UTSJSONObject({
            code: "410172",
            name: "郑州高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "410173",
            name: "郑州航空港经济综合实验区"
          }),
          new UTSJSONObject({
            code: "410181",
            name: "巩义市"
          }),
          new UTSJSONObject({
            code: "410182",
            name: "荥阳市"
          }),
          new UTSJSONObject({
            code: "410183",
            name: "新密市"
          }),
          new UTSJSONObject({
            code: "410184",
            name: "新郑市"
          }),
          new UTSJSONObject({
            code: "410185",
            name: "登封市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4102",
        name: "开封市",
        children: [
          new UTSJSONObject({
            code: "410202",
            name: "龙亭区"
          }),
          new UTSJSONObject({
            code: "410203",
            name: "顺河回族区"
          }),
          new UTSJSONObject({
            code: "410204",
            name: "鼓楼区"
          }),
          new UTSJSONObject({
            code: "410205",
            name: "禹王台区"
          }),
          new UTSJSONObject({
            code: "410212",
            name: "祥符区"
          }),
          new UTSJSONObject({
            code: "410221",
            name: "杞县"
          }),
          new UTSJSONObject({
            code: "410222",
            name: "通许县"
          }),
          new UTSJSONObject({
            code: "410223",
            name: "尉氏县"
          }),
          new UTSJSONObject({
            code: "410225",
            name: "兰考县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4103",
        name: "洛阳市",
        children: [
          new UTSJSONObject({
            code: "410302",
            name: "老城区"
          }),
          new UTSJSONObject({
            code: "410303",
            name: "西工区"
          }),
          new UTSJSONObject({
            code: "410304",
            name: "瀍河回族区"
          }),
          new UTSJSONObject({
            code: "410305",
            name: "涧西区"
          }),
          new UTSJSONObject({
            code: "410307",
            name: "偃师区"
          }),
          new UTSJSONObject({
            code: "410308",
            name: "孟津区"
          }),
          new UTSJSONObject({
            code: "410311",
            name: "洛龙区"
          }),
          new UTSJSONObject({
            code: "410323",
            name: "新安县"
          }),
          new UTSJSONObject({
            code: "410324",
            name: "栾川县"
          }),
          new UTSJSONObject({
            code: "410325",
            name: "嵩县"
          }),
          new UTSJSONObject({
            code: "410326",
            name: "汝阳县"
          }),
          new UTSJSONObject({
            code: "410327",
            name: "宜阳县"
          }),
          new UTSJSONObject({
            code: "410328",
            name: "洛宁县"
          }),
          new UTSJSONObject({
            code: "410329",
            name: "伊川县"
          }),
          new UTSJSONObject({
            code: "410371",
            name: "洛阳高新技术产业开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4104",
        name: "平顶山市",
        children: [
          new UTSJSONObject({
            code: "410402",
            name: "新华区"
          }),
          new UTSJSONObject({
            code: "410403",
            name: "卫东区"
          }),
          new UTSJSONObject({
            code: "410404",
            name: "石龙区"
          }),
          new UTSJSONObject({
            code: "410411",
            name: "湛河区"
          }),
          new UTSJSONObject({
            code: "410421",
            name: "宝丰县"
          }),
          new UTSJSONObject({
            code: "410422",
            name: "叶县"
          }),
          new UTSJSONObject({
            code: "410423",
            name: "鲁山县"
          }),
          new UTSJSONObject({
            code: "410425",
            name: "郏县"
          }),
          new UTSJSONObject({
            code: "410471",
            name: "平顶山高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "410472",
            name: "平顶山市城乡一体化示范区"
          }),
          new UTSJSONObject({
            code: "410481",
            name: "舞钢市"
          }),
          new UTSJSONObject({
            code: "410482",
            name: "汝州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4105",
        name: "安阳市",
        children: [
          new UTSJSONObject({
            code: "410502",
            name: "文峰区"
          }),
          new UTSJSONObject({
            code: "410503",
            name: "北关区"
          }),
          new UTSJSONObject({
            code: "410505",
            name: "殷都区"
          }),
          new UTSJSONObject({
            code: "410506",
            name: "龙安区"
          }),
          new UTSJSONObject({
            code: "410522",
            name: "安阳县"
          }),
          new UTSJSONObject({
            code: "410523",
            name: "汤阴县"
          }),
          new UTSJSONObject({
            code: "410526",
            name: "滑县"
          }),
          new UTSJSONObject({
            code: "410527",
            name: "内黄县"
          }),
          new UTSJSONObject({
            code: "410571",
            name: "安阳高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "410581",
            name: "林州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4106",
        name: "鹤壁市",
        children: [
          new UTSJSONObject({
            code: "410602",
            name: "鹤山区"
          }),
          new UTSJSONObject({
            code: "410603",
            name: "山城区"
          }),
          new UTSJSONObject({
            code: "410611",
            name: "淇滨区"
          }),
          new UTSJSONObject({
            code: "410621",
            name: "浚县"
          }),
          new UTSJSONObject({
            code: "410622",
            name: "淇县"
          }),
          new UTSJSONObject({
            code: "410671",
            name: "鹤壁经济技术开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4107",
        name: "新乡市",
        children: [
          new UTSJSONObject({
            code: "410702",
            name: "红旗区"
          }),
          new UTSJSONObject({
            code: "410703",
            name: "卫滨区"
          }),
          new UTSJSONObject({
            code: "410704",
            name: "凤泉区"
          }),
          new UTSJSONObject({
            code: "410711",
            name: "牧野区"
          }),
          new UTSJSONObject({
            code: "410721",
            name: "新乡县"
          }),
          new UTSJSONObject({
            code: "410724",
            name: "获嘉县"
          }),
          new UTSJSONObject({
            code: "410725",
            name: "原阳县"
          }),
          new UTSJSONObject({
            code: "410726",
            name: "延津县"
          }),
          new UTSJSONObject({
            code: "410727",
            name: "封丘县"
          }),
          new UTSJSONObject({
            code: "410771",
            name: "新乡高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "410772",
            name: "新乡经济技术开发区"
          }),
          new UTSJSONObject({
            code: "410773",
            name: "新乡市平原城乡一体化示范区"
          }),
          new UTSJSONObject({
            code: "410781",
            name: "卫辉市"
          }),
          new UTSJSONObject({
            code: "410782",
            name: "辉县市"
          }),
          new UTSJSONObject({
            code: "410783",
            name: "长垣市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4108",
        name: "焦作市",
        children: [
          new UTSJSONObject({
            code: "410802",
            name: "解放区"
          }),
          new UTSJSONObject({
            code: "410803",
            name: "中站区"
          }),
          new UTSJSONObject({
            code: "410804",
            name: "马村区"
          }),
          new UTSJSONObject({
            code: "410811",
            name: "山阳区"
          }),
          new UTSJSONObject({
            code: "410821",
            name: "修武县"
          }),
          new UTSJSONObject({
            code: "410822",
            name: "博爱县"
          }),
          new UTSJSONObject({
            code: "410823",
            name: "武陟县"
          }),
          new UTSJSONObject({
            code: "410825",
            name: "温县"
          }),
          new UTSJSONObject({
            code: "410871",
            name: "焦作城乡一体化示范区"
          }),
          new UTSJSONObject({
            code: "410882",
            name: "沁阳市"
          }),
          new UTSJSONObject({
            code: "410883",
            name: "孟州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4109",
        name: "濮阳市",
        children: [
          new UTSJSONObject({
            code: "410902",
            name: "华龙区"
          }),
          new UTSJSONObject({
            code: "410922",
            name: "清丰县"
          }),
          new UTSJSONObject({
            code: "410923",
            name: "南乐县"
          }),
          new UTSJSONObject({
            code: "410926",
            name: "范县"
          }),
          new UTSJSONObject({
            code: "410927",
            name: "台前县"
          }),
          new UTSJSONObject({
            code: "410928",
            name: "濮阳县"
          }),
          new UTSJSONObject({
            code: "410971",
            name: "河南濮阳工业园区"
          }),
          new UTSJSONObject({
            code: "410972",
            name: "濮阳经济技术开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4110",
        name: "许昌市",
        children: [
          new UTSJSONObject({
            code: "411002",
            name: "魏都区"
          }),
          new UTSJSONObject({
            code: "411003",
            name: "建安区"
          }),
          new UTSJSONObject({
            code: "411024",
            name: "鄢陵县"
          }),
          new UTSJSONObject({
            code: "411025",
            name: "襄城县"
          }),
          new UTSJSONObject({
            code: "411071",
            name: "许昌经济技术开发区"
          }),
          new UTSJSONObject({
            code: "411081",
            name: "禹州市"
          }),
          new UTSJSONObject({
            code: "411082",
            name: "长葛市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4111",
        name: "漯河市",
        children: [
          new UTSJSONObject({
            code: "411102",
            name: "源汇区"
          }),
          new UTSJSONObject({
            code: "411103",
            name: "郾城区"
          }),
          new UTSJSONObject({
            code: "411104",
            name: "召陵区"
          }),
          new UTSJSONObject({
            code: "411121",
            name: "舞阳县"
          }),
          new UTSJSONObject({
            code: "411122",
            name: "临颍县"
          }),
          new UTSJSONObject({
            code: "411171",
            name: "漯河经济技术开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4112",
        name: "三门峡市",
        children: [
          new UTSJSONObject({
            code: "411202",
            name: "湖滨区"
          }),
          new UTSJSONObject({
            code: "411203",
            name: "陕州区"
          }),
          new UTSJSONObject({
            code: "411221",
            name: "渑池县"
          }),
          new UTSJSONObject({
            code: "411224",
            name: "卢氏县"
          }),
          new UTSJSONObject({
            code: "411271",
            name: "河南三门峡经济开发区"
          }),
          new UTSJSONObject({
            code: "411281",
            name: "义马市"
          }),
          new UTSJSONObject({
            code: "411282",
            name: "灵宝市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4113",
        name: "南阳市",
        children: [
          new UTSJSONObject({
            code: "411302",
            name: "宛城区"
          }),
          new UTSJSONObject({
            code: "411303",
            name: "卧龙区"
          }),
          new UTSJSONObject({
            code: "411321",
            name: "南召县"
          }),
          new UTSJSONObject({
            code: "411322",
            name: "方城县"
          }),
          new UTSJSONObject({
            code: "411323",
            name: "西峡县"
          }),
          new UTSJSONObject({
            code: "411324",
            name: "镇平县"
          }),
          new UTSJSONObject({
            code: "411325",
            name: "内乡县"
          }),
          new UTSJSONObject({
            code: "411326",
            name: "淅川县"
          }),
          new UTSJSONObject({
            code: "411327",
            name: "社旗县"
          }),
          new UTSJSONObject({
            code: "411328",
            name: "唐河县"
          }),
          new UTSJSONObject({
            code: "411329",
            name: "新野县"
          }),
          new UTSJSONObject({
            code: "411330",
            name: "桐柏县"
          }),
          new UTSJSONObject({
            code: "411371",
            name: "南阳高新技术产业开发区"
          }),
          new UTSJSONObject({
            code: "411372",
            name: "南阳市城乡一体化示范区"
          }),
          new UTSJSONObject({
            code: "411381",
            name: "邓州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4114",
        name: "商丘市",
        children: [
          new UTSJSONObject({
            code: "411402",
            name: "梁园区"
          }),
          new UTSJSONObject({
            code: "411403",
            name: "睢阳区"
          }),
          new UTSJSONObject({
            code: "411421",
            name: "民权县"
          }),
          new UTSJSONObject({
            code: "411422",
            name: "睢县"
          }),
          new UTSJSONObject({
            code: "411423",
            name: "宁陵县"
          }),
          new UTSJSONObject({
            code: "411424",
            name: "柘城县"
          }),
          new UTSJSONObject({
            code: "411425",
            name: "虞城县"
          }),
          new UTSJSONObject({
            code: "411426",
            name: "夏邑县"
          }),
          new UTSJSONObject({
            code: "411471",
            name: "豫东综合物流产业聚集区"
          }),
          new UTSJSONObject({
            code: "411472",
            name: "河南商丘经济开发区"
          }),
          new UTSJSONObject({
            code: "411481",
            name: "永城市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4115",
        name: "信阳市",
        children: [
          new UTSJSONObject({
            code: "411502",
            name: "浉河区"
          }),
          new UTSJSONObject({
            code: "411503",
            name: "平桥区"
          }),
          new UTSJSONObject({
            code: "411521",
            name: "罗山县"
          }),
          new UTSJSONObject({
            code: "411522",
            name: "光山县"
          }),
          new UTSJSONObject({
            code: "411523",
            name: "新县"
          }),
          new UTSJSONObject({
            code: "411524",
            name: "商城县"
          }),
          new UTSJSONObject({
            code: "411525",
            name: "固始县"
          }),
          new UTSJSONObject({
            code: "411526",
            name: "潢川县"
          }),
          new UTSJSONObject({
            code: "411527",
            name: "淮滨县"
          }),
          new UTSJSONObject({
            code: "411528",
            name: "息县"
          }),
          new UTSJSONObject({
            code: "411571",
            name: "信阳高新技术产业开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4116",
        name: "周口市",
        children: [
          new UTSJSONObject({
            code: "411602",
            name: "川汇区"
          }),
          new UTSJSONObject({
            code: "411603",
            name: "淮阳区"
          }),
          new UTSJSONObject({
            code: "411621",
            name: "扶沟县"
          }),
          new UTSJSONObject({
            code: "411622",
            name: "西华县"
          }),
          new UTSJSONObject({
            code: "411623",
            name: "商水县"
          }),
          new UTSJSONObject({
            code: "411624",
            name: "沈丘县"
          }),
          new UTSJSONObject({
            code: "411625",
            name: "郸城县"
          }),
          new UTSJSONObject({
            code: "411627",
            name: "太康县"
          }),
          new UTSJSONObject({
            code: "411628",
            name: "鹿邑县"
          }),
          new UTSJSONObject({
            code: "411671",
            name: "河南周口经济开发区"
          }),
          new UTSJSONObject({
            code: "411681",
            name: "项城市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4117",
        name: "驻马店市",
        children: [
          new UTSJSONObject({
            code: "411702",
            name: "驿城区"
          }),
          new UTSJSONObject({
            code: "411721",
            name: "西平县"
          }),
          new UTSJSONObject({
            code: "411722",
            name: "上蔡县"
          }),
          new UTSJSONObject({
            code: "411723",
            name: "平舆县"
          }),
          new UTSJSONObject({
            code: "411724",
            name: "正阳县"
          }),
          new UTSJSONObject({
            code: "411725",
            name: "确山县"
          }),
          new UTSJSONObject({
            code: "411726",
            name: "泌阳县"
          }),
          new UTSJSONObject({
            code: "411727",
            name: "汝南县"
          }),
          new UTSJSONObject({
            code: "411728",
            name: "遂平县"
          }),
          new UTSJSONObject({
            code: "411729",
            name: "新蔡县"
          }),
          new UTSJSONObject({
            code: "411771",
            name: "河南驻马店经济开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4190",
        name: "省直辖县级行政区划",
        children: [
          new UTSJSONObject({
            code: "419001",
            name: "济源市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "42",
    name: "湖北省",
    children: [
      new UTSJSONObject({
        code: "4201",
        name: "武汉市",
        children: [
          new UTSJSONObject({
            code: "420102",
            name: "江岸区"
          }),
          new UTSJSONObject({
            code: "420103",
            name: "江汉区"
          }),
          new UTSJSONObject({
            code: "420104",
            name: "硚口区"
          }),
          new UTSJSONObject({
            code: "420105",
            name: "汉阳区"
          }),
          new UTSJSONObject({
            code: "420106",
            name: "武昌区"
          }),
          new UTSJSONObject({
            code: "420107",
            name: "青山区"
          }),
          new UTSJSONObject({
            code: "420111",
            name: "洪山区"
          }),
          new UTSJSONObject({
            code: "420112",
            name: "东西湖区"
          }),
          new UTSJSONObject({
            code: "420113",
            name: "汉南区"
          }),
          new UTSJSONObject({
            code: "420114",
            name: "蔡甸区"
          }),
          new UTSJSONObject({
            code: "420115",
            name: "江夏区"
          }),
          new UTSJSONObject({
            code: "420116",
            name: "黄陂区"
          }),
          new UTSJSONObject({
            code: "420117",
            name: "新洲区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4202",
        name: "黄石市",
        children: [
          new UTSJSONObject({
            code: "420202",
            name: "黄石港区"
          }),
          new UTSJSONObject({
            code: "420203",
            name: "西塞山区"
          }),
          new UTSJSONObject({
            code: "420204",
            name: "下陆区"
          }),
          new UTSJSONObject({
            code: "420205",
            name: "铁山区"
          }),
          new UTSJSONObject({
            code: "420222",
            name: "阳新县"
          }),
          new UTSJSONObject({
            code: "420281",
            name: "大冶市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4203",
        name: "十堰市",
        children: [
          new UTSJSONObject({
            code: "420302",
            name: "茅箭区"
          }),
          new UTSJSONObject({
            code: "420303",
            name: "张湾区"
          }),
          new UTSJSONObject({
            code: "420304",
            name: "郧阳区"
          }),
          new UTSJSONObject({
            code: "420322",
            name: "郧西县"
          }),
          new UTSJSONObject({
            code: "420323",
            name: "竹山县"
          }),
          new UTSJSONObject({
            code: "420324",
            name: "竹溪县"
          }),
          new UTSJSONObject({
            code: "420325",
            name: "房县"
          }),
          new UTSJSONObject({
            code: "420381",
            name: "丹江口市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4205",
        name: "宜昌市",
        children: [
          new UTSJSONObject({
            code: "420502",
            name: "西陵区"
          }),
          new UTSJSONObject({
            code: "420503",
            name: "伍家岗区"
          }),
          new UTSJSONObject({
            code: "420504",
            name: "点军区"
          }),
          new UTSJSONObject({
            code: "420505",
            name: "猇亭区"
          }),
          new UTSJSONObject({
            code: "420506",
            name: "夷陵区"
          }),
          new UTSJSONObject({
            code: "420525",
            name: "远安县"
          }),
          new UTSJSONObject({
            code: "420526",
            name: "兴山县"
          }),
          new UTSJSONObject({
            code: "420527",
            name: "秭归县"
          }),
          new UTSJSONObject({
            code: "420528",
            name: "长阳土家族自治县"
          }),
          new UTSJSONObject({
            code: "420529",
            name: "五峰土家族自治县"
          }),
          new UTSJSONObject({
            code: "420581",
            name: "宜都市"
          }),
          new UTSJSONObject({
            code: "420582",
            name: "当阳市"
          }),
          new UTSJSONObject({
            code: "420583",
            name: "枝江市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4206",
        name: "襄阳市",
        children: [
          new UTSJSONObject({
            code: "420602",
            name: "襄城区"
          }),
          new UTSJSONObject({
            code: "420606",
            name: "樊城区"
          }),
          new UTSJSONObject({
            code: "420607",
            name: "襄州区"
          }),
          new UTSJSONObject({
            code: "420624",
            name: "南漳县"
          }),
          new UTSJSONObject({
            code: "420625",
            name: "谷城县"
          }),
          new UTSJSONObject({
            code: "420626",
            name: "保康县"
          }),
          new UTSJSONObject({
            code: "420682",
            name: "老河口市"
          }),
          new UTSJSONObject({
            code: "420683",
            name: "枣阳市"
          }),
          new UTSJSONObject({
            code: "420684",
            name: "宜城市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4207",
        name: "鄂州市",
        children: [
          new UTSJSONObject({
            code: "420702",
            name: "梁子湖区"
          }),
          new UTSJSONObject({
            code: "420703",
            name: "华容区"
          }),
          new UTSJSONObject({
            code: "420704",
            name: "鄂城区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4208",
        name: "荆门市",
        children: [
          new UTSJSONObject({
            code: "420802",
            name: "东宝区"
          }),
          new UTSJSONObject({
            code: "420804",
            name: "掇刀区"
          }),
          new UTSJSONObject({
            code: "420822",
            name: "沙洋县"
          }),
          new UTSJSONObject({
            code: "420881",
            name: "钟祥市"
          }),
          new UTSJSONObject({
            code: "420882",
            name: "京山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4209",
        name: "孝感市",
        children: [
          new UTSJSONObject({
            code: "420902",
            name: "孝南区"
          }),
          new UTSJSONObject({
            code: "420921",
            name: "孝昌县"
          }),
          new UTSJSONObject({
            code: "420922",
            name: "大悟县"
          }),
          new UTSJSONObject({
            code: "420923",
            name: "云梦县"
          }),
          new UTSJSONObject({
            code: "420981",
            name: "应城市"
          }),
          new UTSJSONObject({
            code: "420982",
            name: "安陆市"
          }),
          new UTSJSONObject({
            code: "420984",
            name: "汉川市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4210",
        name: "荆州市",
        children: [
          new UTSJSONObject({
            code: "421002",
            name: "沙市区"
          }),
          new UTSJSONObject({
            code: "421003",
            name: "荆州区"
          }),
          new UTSJSONObject({
            code: "421022",
            name: "公安县"
          }),
          new UTSJSONObject({
            code: "421024",
            name: "江陵县"
          }),
          new UTSJSONObject({
            code: "421071",
            name: "荆州经济技术开发区"
          }),
          new UTSJSONObject({
            code: "421081",
            name: "石首市"
          }),
          new UTSJSONObject({
            code: "421083",
            name: "洪湖市"
          }),
          new UTSJSONObject({
            code: "421087",
            name: "松滋市"
          }),
          new UTSJSONObject({
            code: "421088",
            name: "监利市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4211",
        name: "黄冈市",
        children: [
          new UTSJSONObject({
            code: "421102",
            name: "黄州区"
          }),
          new UTSJSONObject({
            code: "421121",
            name: "团风县"
          }),
          new UTSJSONObject({
            code: "421122",
            name: "红安县"
          }),
          new UTSJSONObject({
            code: "421123",
            name: "罗田县"
          }),
          new UTSJSONObject({
            code: "421124",
            name: "英山县"
          }),
          new UTSJSONObject({
            code: "421125",
            name: "浠水县"
          }),
          new UTSJSONObject({
            code: "421126",
            name: "蕲春县"
          }),
          new UTSJSONObject({
            code: "421127",
            name: "黄梅县"
          }),
          new UTSJSONObject({
            code: "421171",
            name: "龙感湖管理区"
          }),
          new UTSJSONObject({
            code: "421181",
            name: "麻城市"
          }),
          new UTSJSONObject({
            code: "421182",
            name: "武穴市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4212",
        name: "咸宁市",
        children: [
          new UTSJSONObject({
            code: "421202",
            name: "咸安区"
          }),
          new UTSJSONObject({
            code: "421221",
            name: "嘉鱼县"
          }),
          new UTSJSONObject({
            code: "421222",
            name: "通城县"
          }),
          new UTSJSONObject({
            code: "421223",
            name: "崇阳县"
          }),
          new UTSJSONObject({
            code: "421224",
            name: "通山县"
          }),
          new UTSJSONObject({
            code: "421281",
            name: "赤壁市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4213",
        name: "随州市",
        children: [
          new UTSJSONObject({
            code: "421303",
            name: "曾都区"
          }),
          new UTSJSONObject({
            code: "421321",
            name: "随县"
          }),
          new UTSJSONObject({
            code: "421381",
            name: "广水市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4228",
        name: "恩施土家族苗族自治州",
        children: [
          new UTSJSONObject({
            code: "422801",
            name: "恩施市"
          }),
          new UTSJSONObject({
            code: "422802",
            name: "利川市"
          }),
          new UTSJSONObject({
            code: "422822",
            name: "建始县"
          }),
          new UTSJSONObject({
            code: "422823",
            name: "巴东县"
          }),
          new UTSJSONObject({
            code: "422825",
            name: "宣恩县"
          }),
          new UTSJSONObject({
            code: "422826",
            name: "咸丰县"
          }),
          new UTSJSONObject({
            code: "422827",
            name: "来凤县"
          }),
          new UTSJSONObject({
            code: "422828",
            name: "鹤峰县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4290",
        name: "省直辖县级行政区划",
        children: [
          new UTSJSONObject({
            code: "429004",
            name: "仙桃市"
          }),
          new UTSJSONObject({
            code: "429005",
            name: "潜江市"
          }),
          new UTSJSONObject({
            code: "429006",
            name: "天门市"
          }),
          new UTSJSONObject({
            code: "429021",
            name: "神农架林区"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "43",
    name: "湖南省",
    children: [
      new UTSJSONObject({
        code: "4301",
        name: "长沙市",
        children: [
          new UTSJSONObject({
            code: "430102",
            name: "芙蓉区"
          }),
          new UTSJSONObject({
            code: "430103",
            name: "天心区"
          }),
          new UTSJSONObject({
            code: "430104",
            name: "岳麓区"
          }),
          new UTSJSONObject({
            code: "430105",
            name: "开福区"
          }),
          new UTSJSONObject({
            code: "430111",
            name: "雨花区"
          }),
          new UTSJSONObject({
            code: "430112",
            name: "望城区"
          }),
          new UTSJSONObject({
            code: "430121",
            name: "长沙县"
          }),
          new UTSJSONObject({
            code: "430181",
            name: "浏阳市"
          }),
          new UTSJSONObject({
            code: "430182",
            name: "宁乡市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4302",
        name: "株洲市",
        children: [
          new UTSJSONObject({
            code: "430202",
            name: "荷塘区"
          }),
          new UTSJSONObject({
            code: "430203",
            name: "芦淞区"
          }),
          new UTSJSONObject({
            code: "430204",
            name: "石峰区"
          }),
          new UTSJSONObject({
            code: "430211",
            name: "天元区"
          }),
          new UTSJSONObject({
            code: "430212",
            name: "渌口区"
          }),
          new UTSJSONObject({
            code: "430223",
            name: "攸县"
          }),
          new UTSJSONObject({
            code: "430224",
            name: "茶陵县"
          }),
          new UTSJSONObject({
            code: "430225",
            name: "炎陵县"
          }),
          new UTSJSONObject({
            code: "430281",
            name: "醴陵市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4303",
        name: "湘潭市",
        children: [
          new UTSJSONObject({
            code: "430302",
            name: "雨湖区"
          }),
          new UTSJSONObject({
            code: "430304",
            name: "岳塘区"
          }),
          new UTSJSONObject({
            code: "430321",
            name: "湘潭县"
          }),
          new UTSJSONObject({
            code: "430371",
            name: "湖南湘潭高新技术产业园区"
          }),
          new UTSJSONObject({
            code: "430372",
            name: "湘潭昭山示范区"
          }),
          new UTSJSONObject({
            code: "430373",
            name: "湘潭九华示范区"
          }),
          new UTSJSONObject({
            code: "430381",
            name: "湘乡市"
          }),
          new UTSJSONObject({
            code: "430382",
            name: "韶山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4304",
        name: "衡阳市",
        children: [
          new UTSJSONObject({
            code: "430405",
            name: "珠晖区"
          }),
          new UTSJSONObject({
            code: "430406",
            name: "雁峰区"
          }),
          new UTSJSONObject({
            code: "430407",
            name: "石鼓区"
          }),
          new UTSJSONObject({
            code: "430408",
            name: "蒸湘区"
          }),
          new UTSJSONObject({
            code: "430412",
            name: "南岳区"
          }),
          new UTSJSONObject({
            code: "430421",
            name: "衡阳县"
          }),
          new UTSJSONObject({
            code: "430422",
            name: "衡南县"
          }),
          new UTSJSONObject({
            code: "430423",
            name: "衡山县"
          }),
          new UTSJSONObject({
            code: "430424",
            name: "衡东县"
          }),
          new UTSJSONObject({
            code: "430426",
            name: "祁东县"
          }),
          new UTSJSONObject({
            code: "430471",
            name: "衡阳综合保税区"
          }),
          new UTSJSONObject({
            code: "430472",
            name: "湖南衡阳高新技术产业园区"
          }),
          new UTSJSONObject({
            code: "430473",
            name: "湖南衡阳松木经济开发区"
          }),
          new UTSJSONObject({
            code: "430481",
            name: "耒阳市"
          }),
          new UTSJSONObject({
            code: "430482",
            name: "常宁市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4305",
        name: "邵阳市",
        children: [
          new UTSJSONObject({
            code: "430502",
            name: "双清区"
          }),
          new UTSJSONObject({
            code: "430503",
            name: "大祥区"
          }),
          new UTSJSONObject({
            code: "430511",
            name: "北塔区"
          }),
          new UTSJSONObject({
            code: "430522",
            name: "新邵县"
          }),
          new UTSJSONObject({
            code: "430523",
            name: "邵阳县"
          }),
          new UTSJSONObject({
            code: "430524",
            name: "隆回县"
          }),
          new UTSJSONObject({
            code: "430525",
            name: "洞口县"
          }),
          new UTSJSONObject({
            code: "430527",
            name: "绥宁县"
          }),
          new UTSJSONObject({
            code: "430528",
            name: "新宁县"
          }),
          new UTSJSONObject({
            code: "430529",
            name: "城步苗族自治县"
          }),
          new UTSJSONObject({
            code: "430581",
            name: "武冈市"
          }),
          new UTSJSONObject({
            code: "430582",
            name: "邵东市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4306",
        name: "岳阳市",
        children: [
          new UTSJSONObject({
            code: "430602",
            name: "岳阳楼区"
          }),
          new UTSJSONObject({
            code: "430603",
            name: "云溪区"
          }),
          new UTSJSONObject({
            code: "430611",
            name: "君山区"
          }),
          new UTSJSONObject({
            code: "430621",
            name: "岳阳县"
          }),
          new UTSJSONObject({
            code: "430623",
            name: "华容县"
          }),
          new UTSJSONObject({
            code: "430624",
            name: "湘阴县"
          }),
          new UTSJSONObject({
            code: "430626",
            name: "平江县"
          }),
          new UTSJSONObject({
            code: "430671",
            name: "岳阳市屈原管理区"
          }),
          new UTSJSONObject({
            code: "430681",
            name: "汨罗市"
          }),
          new UTSJSONObject({
            code: "430682",
            name: "临湘市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4307",
        name: "常德市",
        children: [
          new UTSJSONObject({
            code: "430702",
            name: "武陵区"
          }),
          new UTSJSONObject({
            code: "430703",
            name: "鼎城区"
          }),
          new UTSJSONObject({
            code: "430721",
            name: "安乡县"
          }),
          new UTSJSONObject({
            code: "430722",
            name: "汉寿县"
          }),
          new UTSJSONObject({
            code: "430723",
            name: "澧县"
          }),
          new UTSJSONObject({
            code: "430724",
            name: "临澧县"
          }),
          new UTSJSONObject({
            code: "430725",
            name: "桃源县"
          }),
          new UTSJSONObject({
            code: "430726",
            name: "石门县"
          }),
          new UTSJSONObject({
            code: "430771",
            name: "常德市西洞庭管理区"
          }),
          new UTSJSONObject({
            code: "430781",
            name: "津市市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4308",
        name: "张家界市",
        children: [
          new UTSJSONObject({
            code: "430802",
            name: "永定区"
          }),
          new UTSJSONObject({
            code: "430811",
            name: "武陵源区"
          }),
          new UTSJSONObject({
            code: "430821",
            name: "慈利县"
          }),
          new UTSJSONObject({
            code: "430822",
            name: "桑植县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4309",
        name: "益阳市",
        children: [
          new UTSJSONObject({
            code: "430902",
            name: "资阳区"
          }),
          new UTSJSONObject({
            code: "430903",
            name: "赫山区"
          }),
          new UTSJSONObject({
            code: "430921",
            name: "南县"
          }),
          new UTSJSONObject({
            code: "430922",
            name: "桃江县"
          }),
          new UTSJSONObject({
            code: "430923",
            name: "安化县"
          }),
          new UTSJSONObject({
            code: "430971",
            name: "益阳市大通湖管理区"
          }),
          new UTSJSONObject({
            code: "430972",
            name: "湖南益阳高新技术产业园区"
          }),
          new UTSJSONObject({
            code: "430981",
            name: "沅江市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4310",
        name: "郴州市",
        children: [
          new UTSJSONObject({
            code: "431002",
            name: "北湖区"
          }),
          new UTSJSONObject({
            code: "431003",
            name: "苏仙区"
          }),
          new UTSJSONObject({
            code: "431021",
            name: "桂阳县"
          }),
          new UTSJSONObject({
            code: "431022",
            name: "宜章县"
          }),
          new UTSJSONObject({
            code: "431023",
            name: "永兴县"
          }),
          new UTSJSONObject({
            code: "431024",
            name: "嘉禾县"
          }),
          new UTSJSONObject({
            code: "431025",
            name: "临武县"
          }),
          new UTSJSONObject({
            code: "431026",
            name: "汝城县"
          }),
          new UTSJSONObject({
            code: "431027",
            name: "桂东县"
          }),
          new UTSJSONObject({
            code: "431028",
            name: "安仁县"
          }),
          new UTSJSONObject({
            code: "431081",
            name: "资兴市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4311",
        name: "永州市",
        children: [
          new UTSJSONObject({
            code: "431102",
            name: "零陵区"
          }),
          new UTSJSONObject({
            code: "431103",
            name: "冷水滩区"
          }),
          new UTSJSONObject({
            code: "431122",
            name: "东安县"
          }),
          new UTSJSONObject({
            code: "431123",
            name: "双牌县"
          }),
          new UTSJSONObject({
            code: "431124",
            name: "道县"
          }),
          new UTSJSONObject({
            code: "431125",
            name: "江永县"
          }),
          new UTSJSONObject({
            code: "431126",
            name: "宁远县"
          }),
          new UTSJSONObject({
            code: "431127",
            name: "蓝山县"
          }),
          new UTSJSONObject({
            code: "431128",
            name: "新田县"
          }),
          new UTSJSONObject({
            code: "431129",
            name: "江华瑶族自治县"
          }),
          new UTSJSONObject({
            code: "431171",
            name: "永州经济技术开发区"
          }),
          new UTSJSONObject({
            code: "431173",
            name: "永州市回龙圩管理区"
          }),
          new UTSJSONObject({
            code: "431181",
            name: "祁阳市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4312",
        name: "怀化市",
        children: [
          new UTSJSONObject({
            code: "431202",
            name: "鹤城区"
          }),
          new UTSJSONObject({
            code: "431221",
            name: "中方县"
          }),
          new UTSJSONObject({
            code: "431222",
            name: "沅陵县"
          }),
          new UTSJSONObject({
            code: "431223",
            name: "辰溪县"
          }),
          new UTSJSONObject({
            code: "431224",
            name: "溆浦县"
          }),
          new UTSJSONObject({
            code: "431225",
            name: "会同县"
          }),
          new UTSJSONObject({
            code: "431226",
            name: "麻阳苗族自治县"
          }),
          new UTSJSONObject({
            code: "431227",
            name: "新晃侗族自治县"
          }),
          new UTSJSONObject({
            code: "431228",
            name: "芷江侗族自治县"
          }),
          new UTSJSONObject({
            code: "431229",
            name: "靖州苗族侗族自治县"
          }),
          new UTSJSONObject({
            code: "431230",
            name: "通道侗族自治县"
          }),
          new UTSJSONObject({
            code: "431271",
            name: "怀化市洪江管理区"
          }),
          new UTSJSONObject({
            code: "431281",
            name: "洪江市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4313",
        name: "娄底市",
        children: [
          new UTSJSONObject({
            code: "431302",
            name: "娄星区"
          }),
          new UTSJSONObject({
            code: "431321",
            name: "双峰县"
          }),
          new UTSJSONObject({
            code: "431322",
            name: "新化县"
          }),
          new UTSJSONObject({
            code: "431381",
            name: "冷水江市"
          }),
          new UTSJSONObject({
            code: "431382",
            name: "涟源市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4331",
        name: "湘西土家族苗族自治州",
        children: [
          new UTSJSONObject({
            code: "433101",
            name: "吉首市"
          }),
          new UTSJSONObject({
            code: "433122",
            name: "泸溪县"
          }),
          new UTSJSONObject({
            code: "433123",
            name: "凤凰县"
          }),
          new UTSJSONObject({
            code: "433124",
            name: "花垣县"
          }),
          new UTSJSONObject({
            code: "433125",
            name: "保靖县"
          }),
          new UTSJSONObject({
            code: "433126",
            name: "古丈县"
          }),
          new UTSJSONObject({
            code: "433127",
            name: "永顺县"
          }),
          new UTSJSONObject({
            code: "433130",
            name: "龙山县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "44",
    name: "广东省",
    children: [
      new UTSJSONObject({
        code: "4401",
        name: "广州市",
        children: [
          new UTSJSONObject({
            code: "440103",
            name: "荔湾区"
          }),
          new UTSJSONObject({
            code: "440104",
            name: "越秀区"
          }),
          new UTSJSONObject({
            code: "440105",
            name: "海珠区"
          }),
          new UTSJSONObject({
            code: "440106",
            name: "天河区"
          }),
          new UTSJSONObject({
            code: "440111",
            name: "白云区"
          }),
          new UTSJSONObject({
            code: "440112",
            name: "黄埔区"
          }),
          new UTSJSONObject({
            code: "440113",
            name: "番禺区"
          }),
          new UTSJSONObject({
            code: "440114",
            name: "花都区"
          }),
          new UTSJSONObject({
            code: "440115",
            name: "南沙区"
          }),
          new UTSJSONObject({
            code: "440117",
            name: "从化区"
          }),
          new UTSJSONObject({
            code: "440118",
            name: "增城区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4402",
        name: "韶关市",
        children: [
          new UTSJSONObject({
            code: "440203",
            name: "武江区"
          }),
          new UTSJSONObject({
            code: "440204",
            name: "浈江区"
          }),
          new UTSJSONObject({
            code: "440205",
            name: "曲江区"
          }),
          new UTSJSONObject({
            code: "440222",
            name: "始兴县"
          }),
          new UTSJSONObject({
            code: "440224",
            name: "仁化县"
          }),
          new UTSJSONObject({
            code: "440229",
            name: "翁源县"
          }),
          new UTSJSONObject({
            code: "440232",
            name: "乳源瑶族自治县"
          }),
          new UTSJSONObject({
            code: "440233",
            name: "新丰县"
          }),
          new UTSJSONObject({
            code: "440281",
            name: "乐昌市"
          }),
          new UTSJSONObject({
            code: "440282",
            name: "南雄市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4403",
        name: "深圳市",
        children: [
          new UTSJSONObject({
            code: "440303",
            name: "罗湖区"
          }),
          new UTSJSONObject({
            code: "440304",
            name: "福田区"
          }),
          new UTSJSONObject({
            code: "440305",
            name: "南山区"
          }),
          new UTSJSONObject({
            code: "440306",
            name: "宝安区"
          }),
          new UTSJSONObject({
            code: "440307",
            name: "龙岗区"
          }),
          new UTSJSONObject({
            code: "440308",
            name: "盐田区"
          }),
          new UTSJSONObject({
            code: "440309",
            name: "龙华区"
          }),
          new UTSJSONObject({
            code: "440310",
            name: "坪山区"
          }),
          new UTSJSONObject({
            code: "440311",
            name: "光明区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4404",
        name: "珠海市",
        children: [
          new UTSJSONObject({
            code: "440402",
            name: "香洲区"
          }),
          new UTSJSONObject({
            code: "440403",
            name: "斗门区"
          }),
          new UTSJSONObject({
            code: "440404",
            name: "金湾区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4405",
        name: "汕头市",
        children: [
          new UTSJSONObject({
            code: "440507",
            name: "龙湖区"
          }),
          new UTSJSONObject({
            code: "440511",
            name: "金平区"
          }),
          new UTSJSONObject({
            code: "440512",
            name: "濠江区"
          }),
          new UTSJSONObject({
            code: "440513",
            name: "潮阳区"
          }),
          new UTSJSONObject({
            code: "440514",
            name: "潮南区"
          }),
          new UTSJSONObject({
            code: "440515",
            name: "澄海区"
          }),
          new UTSJSONObject({
            code: "440523",
            name: "南澳县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4406",
        name: "佛山市",
        children: [
          new UTSJSONObject({
            code: "440604",
            name: "禅城区"
          }),
          new UTSJSONObject({
            code: "440605",
            name: "南海区"
          }),
          new UTSJSONObject({
            code: "440606",
            name: "顺德区"
          }),
          new UTSJSONObject({
            code: "440607",
            name: "三水区"
          }),
          new UTSJSONObject({
            code: "440608",
            name: "高明区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4407",
        name: "江门市",
        children: [
          new UTSJSONObject({
            code: "440703",
            name: "蓬江区"
          }),
          new UTSJSONObject({
            code: "440704",
            name: "江海区"
          }),
          new UTSJSONObject({
            code: "440705",
            name: "新会区"
          }),
          new UTSJSONObject({
            code: "440781",
            name: "台山市"
          }),
          new UTSJSONObject({
            code: "440783",
            name: "开平市"
          }),
          new UTSJSONObject({
            code: "440784",
            name: "鹤山市"
          }),
          new UTSJSONObject({
            code: "440785",
            name: "恩平市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4408",
        name: "湛江市",
        children: [
          new UTSJSONObject({
            code: "440802",
            name: "赤坎区"
          }),
          new UTSJSONObject({
            code: "440803",
            name: "霞山区"
          }),
          new UTSJSONObject({
            code: "440804",
            name: "坡头区"
          }),
          new UTSJSONObject({
            code: "440811",
            name: "麻章区"
          }),
          new UTSJSONObject({
            code: "440823",
            name: "遂溪县"
          }),
          new UTSJSONObject({
            code: "440825",
            name: "徐闻县"
          }),
          new UTSJSONObject({
            code: "440881",
            name: "廉江市"
          }),
          new UTSJSONObject({
            code: "440882",
            name: "雷州市"
          }),
          new UTSJSONObject({
            code: "440883",
            name: "吴川市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4409",
        name: "茂名市",
        children: [
          new UTSJSONObject({
            code: "440902",
            name: "茂南区"
          }),
          new UTSJSONObject({
            code: "440904",
            name: "电白区"
          }),
          new UTSJSONObject({
            code: "440981",
            name: "高州市"
          }),
          new UTSJSONObject({
            code: "440982",
            name: "化州市"
          }),
          new UTSJSONObject({
            code: "440983",
            name: "信宜市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4412",
        name: "肇庆市",
        children: [
          new UTSJSONObject({
            code: "441202",
            name: "端州区"
          }),
          new UTSJSONObject({
            code: "441203",
            name: "鼎湖区"
          }),
          new UTSJSONObject({
            code: "441204",
            name: "高要区"
          }),
          new UTSJSONObject({
            code: "441223",
            name: "广宁县"
          }),
          new UTSJSONObject({
            code: "441224",
            name: "怀集县"
          }),
          new UTSJSONObject({
            code: "441225",
            name: "封开县"
          }),
          new UTSJSONObject({
            code: "441226",
            name: "德庆县"
          }),
          new UTSJSONObject({
            code: "441284",
            name: "四会市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4413",
        name: "惠州市",
        children: [
          new UTSJSONObject({
            code: "441302",
            name: "惠城区"
          }),
          new UTSJSONObject({
            code: "441303",
            name: "惠阳区"
          }),
          new UTSJSONObject({
            code: "441322",
            name: "博罗县"
          }),
          new UTSJSONObject({
            code: "441323",
            name: "惠东县"
          }),
          new UTSJSONObject({
            code: "441324",
            name: "龙门县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4414",
        name: "梅州市",
        children: [
          new UTSJSONObject({
            code: "441402",
            name: "梅江区"
          }),
          new UTSJSONObject({
            code: "441403",
            name: "梅县区"
          }),
          new UTSJSONObject({
            code: "441422",
            name: "大埔县"
          }),
          new UTSJSONObject({
            code: "441423",
            name: "丰顺县"
          }),
          new UTSJSONObject({
            code: "441424",
            name: "五华县"
          }),
          new UTSJSONObject({
            code: "441426",
            name: "平远县"
          }),
          new UTSJSONObject({
            code: "441427",
            name: "蕉岭县"
          }),
          new UTSJSONObject({
            code: "441481",
            name: "兴宁市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4415",
        name: "汕尾市",
        children: [
          new UTSJSONObject({
            code: "441502",
            name: "城区"
          }),
          new UTSJSONObject({
            code: "441521",
            name: "海丰县"
          }),
          new UTSJSONObject({
            code: "441523",
            name: "陆河县"
          }),
          new UTSJSONObject({
            code: "441581",
            name: "陆丰市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4416",
        name: "河源市",
        children: [
          new UTSJSONObject({
            code: "441602",
            name: "源城区"
          }),
          new UTSJSONObject({
            code: "441621",
            name: "紫金县"
          }),
          new UTSJSONObject({
            code: "441622",
            name: "龙川县"
          }),
          new UTSJSONObject({
            code: "441623",
            name: "连平县"
          }),
          new UTSJSONObject({
            code: "441624",
            name: "和平县"
          }),
          new UTSJSONObject({
            code: "441625",
            name: "东源县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4417",
        name: "阳江市",
        children: [
          new UTSJSONObject({
            code: "441702",
            name: "江城区"
          }),
          new UTSJSONObject({
            code: "441704",
            name: "阳东区"
          }),
          new UTSJSONObject({
            code: "441721",
            name: "阳西县"
          }),
          new UTSJSONObject({
            code: "441781",
            name: "阳春市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4418",
        name: "清远市",
        children: [
          new UTSJSONObject({
            code: "441802",
            name: "清城区"
          }),
          new UTSJSONObject({
            code: "441803",
            name: "清新区"
          }),
          new UTSJSONObject({
            code: "441821",
            name: "佛冈县"
          }),
          new UTSJSONObject({
            code: "441823",
            name: "阳山县"
          }),
          new UTSJSONObject({
            code: "441825",
            name: "连山壮族瑶族自治县"
          }),
          new UTSJSONObject({
            code: "441826",
            name: "连南瑶族自治县"
          }),
          new UTSJSONObject({
            code: "441881",
            name: "英德市"
          }),
          new UTSJSONObject({
            code: "441882",
            name: "连州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4419",
        name: "东莞市",
        children: [
          new UTSJSONObject({
            code: "441900003",
            name: "东城街道"
          }),
          new UTSJSONObject({
            code: "441900004",
            name: "南城街道"
          }),
          new UTSJSONObject({
            code: "441900005",
            name: "万江街道"
          }),
          new UTSJSONObject({
            code: "441900006",
            name: "莞城街道"
          }),
          new UTSJSONObject({
            code: "441900101",
            name: "石碣镇"
          }),
          new UTSJSONObject({
            code: "441900102",
            name: "石龙镇"
          }),
          new UTSJSONObject({
            code: "441900103",
            name: "茶山镇"
          }),
          new UTSJSONObject({
            code: "441900104",
            name: "石排镇"
          }),
          new UTSJSONObject({
            code: "441900105",
            name: "企石镇"
          }),
          new UTSJSONObject({
            code: "441900106",
            name: "横沥镇"
          }),
          new UTSJSONObject({
            code: "441900107",
            name: "桥头镇"
          }),
          new UTSJSONObject({
            code: "441900108",
            name: "谢岗镇"
          }),
          new UTSJSONObject({
            code: "441900109",
            name: "东坑镇"
          }),
          new UTSJSONObject({
            code: "441900110",
            name: "常平镇"
          }),
          new UTSJSONObject({
            code: "441900111",
            name: "寮步镇"
          }),
          new UTSJSONObject({
            code: "441900112",
            name: "樟木头镇"
          }),
          new UTSJSONObject({
            code: "441900113",
            name: "大朗镇"
          }),
          new UTSJSONObject({
            code: "441900114",
            name: "黄江镇"
          }),
          new UTSJSONObject({
            code: "441900115",
            name: "清溪镇"
          }),
          new UTSJSONObject({
            code: "441900116",
            name: "塘厦镇"
          }),
          new UTSJSONObject({
            code: "441900117",
            name: "凤岗镇"
          }),
          new UTSJSONObject({
            code: "441900118",
            name: "大岭山镇"
          }),
          new UTSJSONObject({
            code: "441900119",
            name: "长安镇"
          }),
          new UTSJSONObject({
            code: "441900121",
            name: "虎门镇"
          }),
          new UTSJSONObject({
            code: "441900122",
            name: "厚街镇"
          }),
          new UTSJSONObject({
            code: "441900123",
            name: "沙田镇"
          }),
          new UTSJSONObject({
            code: "441900124",
            name: "道滘镇"
          }),
          new UTSJSONObject({
            code: "441900125",
            name: "洪梅镇"
          }),
          new UTSJSONObject({
            code: "441900126",
            name: "麻涌镇"
          }),
          new UTSJSONObject({
            code: "441900127",
            name: "望牛墩镇"
          }),
          new UTSJSONObject({
            code: "441900128",
            name: "中堂镇"
          }),
          new UTSJSONObject({
            code: "441900129",
            name: "高埗镇"
          }),
          new UTSJSONObject({
            code: "441900401",
            name: "松山湖"
          }),
          new UTSJSONObject({
            code: "441900402",
            name: "东莞港"
          }),
          new UTSJSONObject({
            code: "441900403",
            name: "东莞生态园"
          }),
          new UTSJSONObject({
            code: "441900404",
            name: "东莞滨海湾新区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4420",
        name: "中山市",
        children: [
          new UTSJSONObject({
            code: "442000001",
            name: "石岐街道"
          }),
          new UTSJSONObject({
            code: "442000002",
            name: "东区街道"
          }),
          new UTSJSONObject({
            code: "442000003",
            name: "中山港街道"
          }),
          new UTSJSONObject({
            code: "442000004",
            name: "西区街道"
          }),
          new UTSJSONObject({
            code: "442000005",
            name: "南区街道"
          }),
          new UTSJSONObject({
            code: "442000006",
            name: "五桂山街道"
          }),
          new UTSJSONObject({
            code: "442000007",
            name: "民众街道"
          }),
          new UTSJSONObject({
            code: "442000008",
            name: "南朗街道"
          }),
          new UTSJSONObject({
            code: "442000101",
            name: "黄圃镇"
          }),
          new UTSJSONObject({
            code: "442000103",
            name: "东凤镇"
          }),
          new UTSJSONObject({
            code: "442000105",
            name: "古镇镇"
          }),
          new UTSJSONObject({
            code: "442000106",
            name: "沙溪镇"
          }),
          new UTSJSONObject({
            code: "442000107",
            name: "坦洲镇"
          }),
          new UTSJSONObject({
            code: "442000108",
            name: "港口镇"
          }),
          new UTSJSONObject({
            code: "442000109",
            name: "三角镇"
          }),
          new UTSJSONObject({
            code: "442000110",
            name: "横栏镇"
          }),
          new UTSJSONObject({
            code: "442000111",
            name: "南头镇"
          }),
          new UTSJSONObject({
            code: "442000112",
            name: "阜沙镇"
          }),
          new UTSJSONObject({
            code: "442000114",
            name: "三乡镇"
          }),
          new UTSJSONObject({
            code: "442000115",
            name: "板芙镇"
          }),
          new UTSJSONObject({
            code: "442000116",
            name: "大涌镇"
          }),
          new UTSJSONObject({
            code: "442000117",
            name: "神湾镇"
          }),
          new UTSJSONObject({
            code: "442000118",
            name: "小榄镇"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4451",
        name: "潮州市",
        children: [
          new UTSJSONObject({
            code: "445102",
            name: "湘桥区"
          }),
          new UTSJSONObject({
            code: "445103",
            name: "潮安区"
          }),
          new UTSJSONObject({
            code: "445122",
            name: "饶平县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4452",
        name: "揭阳市",
        children: [
          new UTSJSONObject({
            code: "445202",
            name: "榕城区"
          }),
          new UTSJSONObject({
            code: "445203",
            name: "揭东区"
          }),
          new UTSJSONObject({
            code: "445222",
            name: "揭西县"
          }),
          new UTSJSONObject({
            code: "445224",
            name: "惠来县"
          }),
          new UTSJSONObject({
            code: "445281",
            name: "普宁市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4453",
        name: "云浮市",
        children: [
          new UTSJSONObject({
            code: "445302",
            name: "云城区"
          }),
          new UTSJSONObject({
            code: "445303",
            name: "云安区"
          }),
          new UTSJSONObject({
            code: "445321",
            name: "新兴县"
          }),
          new UTSJSONObject({
            code: "445322",
            name: "郁南县"
          }),
          new UTSJSONObject({
            code: "445381",
            name: "罗定市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "45",
    name: "广西壮族自治区",
    children: [
      new UTSJSONObject({
        code: "4501",
        name: "南宁市",
        children: [
          new UTSJSONObject({
            code: "450102",
            name: "兴宁区"
          }),
          new UTSJSONObject({
            code: "450103",
            name: "青秀区"
          }),
          new UTSJSONObject({
            code: "450105",
            name: "江南区"
          }),
          new UTSJSONObject({
            code: "450107",
            name: "西乡塘区"
          }),
          new UTSJSONObject({
            code: "450108",
            name: "良庆区"
          }),
          new UTSJSONObject({
            code: "450109",
            name: "邕宁区"
          }),
          new UTSJSONObject({
            code: "450110",
            name: "武鸣区"
          }),
          new UTSJSONObject({
            code: "450123",
            name: "隆安县"
          }),
          new UTSJSONObject({
            code: "450124",
            name: "马山县"
          }),
          new UTSJSONObject({
            code: "450125",
            name: "上林县"
          }),
          new UTSJSONObject({
            code: "450126",
            name: "宾阳县"
          }),
          new UTSJSONObject({
            code: "450181",
            name: "横州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4502",
        name: "柳州市",
        children: [
          new UTSJSONObject({
            code: "450202",
            name: "城中区"
          }),
          new UTSJSONObject({
            code: "450203",
            name: "鱼峰区"
          }),
          new UTSJSONObject({
            code: "450204",
            name: "柳南区"
          }),
          new UTSJSONObject({
            code: "450205",
            name: "柳北区"
          }),
          new UTSJSONObject({
            code: "450206",
            name: "柳江区"
          }),
          new UTSJSONObject({
            code: "450222",
            name: "柳城县"
          }),
          new UTSJSONObject({
            code: "450223",
            name: "鹿寨县"
          }),
          new UTSJSONObject({
            code: "450224",
            name: "融安县"
          }),
          new UTSJSONObject({
            code: "450225",
            name: "融水苗族自治县"
          }),
          new UTSJSONObject({
            code: "450226",
            name: "三江侗族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4503",
        name: "桂林市",
        children: [
          new UTSJSONObject({
            code: "450302",
            name: "秀峰区"
          }),
          new UTSJSONObject({
            code: "450303",
            name: "叠彩区"
          }),
          new UTSJSONObject({
            code: "450304",
            name: "象山区"
          }),
          new UTSJSONObject({
            code: "450305",
            name: "七星区"
          }),
          new UTSJSONObject({
            code: "450311",
            name: "雁山区"
          }),
          new UTSJSONObject({
            code: "450312",
            name: "临桂区"
          }),
          new UTSJSONObject({
            code: "450321",
            name: "阳朔县"
          }),
          new UTSJSONObject({
            code: "450323",
            name: "灵川县"
          }),
          new UTSJSONObject({
            code: "450324",
            name: "全州县"
          }),
          new UTSJSONObject({
            code: "450325",
            name: "兴安县"
          }),
          new UTSJSONObject({
            code: "450326",
            name: "永福县"
          }),
          new UTSJSONObject({
            code: "450327",
            name: "灌阳县"
          }),
          new UTSJSONObject({
            code: "450328",
            name: "龙胜各族自治县"
          }),
          new UTSJSONObject({
            code: "450329",
            name: "资源县"
          }),
          new UTSJSONObject({
            code: "450330",
            name: "平乐县"
          }),
          new UTSJSONObject({
            code: "450332",
            name: "恭城瑶族自治县"
          }),
          new UTSJSONObject({
            code: "450381",
            name: "荔浦市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4504",
        name: "梧州市",
        children: [
          new UTSJSONObject({
            code: "450403",
            name: "万秀区"
          }),
          new UTSJSONObject({
            code: "450405",
            name: "长洲区"
          }),
          new UTSJSONObject({
            code: "450406",
            name: "龙圩区"
          }),
          new UTSJSONObject({
            code: "450421",
            name: "苍梧县"
          }),
          new UTSJSONObject({
            code: "450422",
            name: "藤县"
          }),
          new UTSJSONObject({
            code: "450423",
            name: "蒙山县"
          }),
          new UTSJSONObject({
            code: "450481",
            name: "岑溪市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4505",
        name: "北海市",
        children: [
          new UTSJSONObject({
            code: "450502",
            name: "海城区"
          }),
          new UTSJSONObject({
            code: "450503",
            name: "银海区"
          }),
          new UTSJSONObject({
            code: "450512",
            name: "铁山港区"
          }),
          new UTSJSONObject({
            code: "450521",
            name: "合浦县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4506",
        name: "防城港市",
        children: [
          new UTSJSONObject({
            code: "450602",
            name: "港口区"
          }),
          new UTSJSONObject({
            code: "450603",
            name: "防城区"
          }),
          new UTSJSONObject({
            code: "450621",
            name: "上思县"
          }),
          new UTSJSONObject({
            code: "450681",
            name: "东兴市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4507",
        name: "钦州市",
        children: [
          new UTSJSONObject({
            code: "450702",
            name: "钦南区"
          }),
          new UTSJSONObject({
            code: "450703",
            name: "钦北区"
          }),
          new UTSJSONObject({
            code: "450721",
            name: "灵山县"
          }),
          new UTSJSONObject({
            code: "450722",
            name: "浦北县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4508",
        name: "贵港市",
        children: [
          new UTSJSONObject({
            code: "450802",
            name: "港北区"
          }),
          new UTSJSONObject({
            code: "450803",
            name: "港南区"
          }),
          new UTSJSONObject({
            code: "450804",
            name: "覃塘区"
          }),
          new UTSJSONObject({
            code: "450821",
            name: "平南县"
          }),
          new UTSJSONObject({
            code: "450881",
            name: "桂平市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4509",
        name: "玉林市",
        children: [
          new UTSJSONObject({
            code: "450902",
            name: "玉州区"
          }),
          new UTSJSONObject({
            code: "450903",
            name: "福绵区"
          }),
          new UTSJSONObject({
            code: "450921",
            name: "容县"
          }),
          new UTSJSONObject({
            code: "450922",
            name: "陆川县"
          }),
          new UTSJSONObject({
            code: "450923",
            name: "博白县"
          }),
          new UTSJSONObject({
            code: "450924",
            name: "兴业县"
          }),
          new UTSJSONObject({
            code: "450981",
            name: "北流市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4510",
        name: "百色市",
        children: [
          new UTSJSONObject({
            code: "451002",
            name: "右江区"
          }),
          new UTSJSONObject({
            code: "451003",
            name: "田阳区"
          }),
          new UTSJSONObject({
            code: "451022",
            name: "田东县"
          }),
          new UTSJSONObject({
            code: "451024",
            name: "德保县"
          }),
          new UTSJSONObject({
            code: "451026",
            name: "那坡县"
          }),
          new UTSJSONObject({
            code: "451027",
            name: "凌云县"
          }),
          new UTSJSONObject({
            code: "451028",
            name: "乐业县"
          }),
          new UTSJSONObject({
            code: "451029",
            name: "田林县"
          }),
          new UTSJSONObject({
            code: "451030",
            name: "西林县"
          }),
          new UTSJSONObject({
            code: "451031",
            name: "隆林各族自治县"
          }),
          new UTSJSONObject({
            code: "451081",
            name: "靖西市"
          }),
          new UTSJSONObject({
            code: "451082",
            name: "平果市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4511",
        name: "贺州市",
        children: [
          new UTSJSONObject({
            code: "451102",
            name: "八步区"
          }),
          new UTSJSONObject({
            code: "451103",
            name: "平桂区"
          }),
          new UTSJSONObject({
            code: "451121",
            name: "昭平县"
          }),
          new UTSJSONObject({
            code: "451122",
            name: "钟山县"
          }),
          new UTSJSONObject({
            code: "451123",
            name: "富川瑶族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4512",
        name: "河池市",
        children: [
          new UTSJSONObject({
            code: "451202",
            name: "金城江区"
          }),
          new UTSJSONObject({
            code: "451203",
            name: "宜州区"
          }),
          new UTSJSONObject({
            code: "451221",
            name: "南丹县"
          }),
          new UTSJSONObject({
            code: "451222",
            name: "天峨县"
          }),
          new UTSJSONObject({
            code: "451223",
            name: "凤山县"
          }),
          new UTSJSONObject({
            code: "451224",
            name: "东兰县"
          }),
          new UTSJSONObject({
            code: "451225",
            name: "罗城仫佬族自治县"
          }),
          new UTSJSONObject({
            code: "451226",
            name: "环江毛南族自治县"
          }),
          new UTSJSONObject({
            code: "451227",
            name: "巴马瑶族自治县"
          }),
          new UTSJSONObject({
            code: "451228",
            name: "都安瑶族自治县"
          }),
          new UTSJSONObject({
            code: "451229",
            name: "大化瑶族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4513",
        name: "来宾市",
        children: [
          new UTSJSONObject({
            code: "451302",
            name: "兴宾区"
          }),
          new UTSJSONObject({
            code: "451321",
            name: "忻城县"
          }),
          new UTSJSONObject({
            code: "451322",
            name: "象州县"
          }),
          new UTSJSONObject({
            code: "451323",
            name: "武宣县"
          }),
          new UTSJSONObject({
            code: "451324",
            name: "金秀瑶族自治县"
          }),
          new UTSJSONObject({
            code: "451381",
            name: "合山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4514",
        name: "崇左市",
        children: [
          new UTSJSONObject({
            code: "451402",
            name: "江州区"
          }),
          new UTSJSONObject({
            code: "451421",
            name: "扶绥县"
          }),
          new UTSJSONObject({
            code: "451422",
            name: "宁明县"
          }),
          new UTSJSONObject({
            code: "451423",
            name: "龙州县"
          }),
          new UTSJSONObject({
            code: "451424",
            name: "大新县"
          }),
          new UTSJSONObject({
            code: "451425",
            name: "天等县"
          }),
          new UTSJSONObject({
            code: "451481",
            name: "凭祥市"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "46",
    name: "海南省",
    children: [
      new UTSJSONObject({
        code: "4601",
        name: "海口市",
        children: [
          new UTSJSONObject({
            code: "460105",
            name: "秀英区"
          }),
          new UTSJSONObject({
            code: "460106",
            name: "龙华区"
          }),
          new UTSJSONObject({
            code: "460107",
            name: "琼山区"
          }),
          new UTSJSONObject({
            code: "460108",
            name: "美兰区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4602",
        name: "三亚市",
        children: [
          new UTSJSONObject({
            code: "460202",
            name: "海棠区"
          }),
          new UTSJSONObject({
            code: "460203",
            name: "吉阳区"
          }),
          new UTSJSONObject({
            code: "460204",
            name: "天涯区"
          }),
          new UTSJSONObject({
            code: "460205",
            name: "崖州区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4603",
        name: "三沙市",
        children: [
          new UTSJSONObject({
            code: "460321",
            name: "西沙群岛"
          }),
          new UTSJSONObject({
            code: "460322",
            name: "南沙群岛"
          }),
          new UTSJSONObject({
            code: "460323",
            name: "中沙群岛的岛礁及其海域"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4604",
        name: "儋州市",
        children: [
          new UTSJSONObject({
            code: "460400100",
            name: "那大镇"
          }),
          new UTSJSONObject({
            code: "460400101",
            name: "和庆镇"
          }),
          new UTSJSONObject({
            code: "460400102",
            name: "南丰镇"
          }),
          new UTSJSONObject({
            code: "460400103",
            name: "大成镇"
          }),
          new UTSJSONObject({
            code: "460400104",
            name: "雅星镇"
          }),
          new UTSJSONObject({
            code: "460400105",
            name: "兰洋镇"
          }),
          new UTSJSONObject({
            code: "460400106",
            name: "光村镇"
          }),
          new UTSJSONObject({
            code: "460400107",
            name: "木棠镇"
          }),
          new UTSJSONObject({
            code: "460400108",
            name: "海头镇"
          }),
          new UTSJSONObject({
            code: "460400109",
            name: "峨蔓镇"
          }),
          new UTSJSONObject({
            code: "460400111",
            name: "王五镇"
          }),
          new UTSJSONObject({
            code: "460400112",
            name: "白马井镇"
          }),
          new UTSJSONObject({
            code: "460400113",
            name: "中和镇"
          }),
          new UTSJSONObject({
            code: "460400114",
            name: "排浦镇"
          }),
          new UTSJSONObject({
            code: "460400115",
            name: "东成镇"
          }),
          new UTSJSONObject({
            code: "460400116",
            name: "新州镇"
          }),
          new UTSJSONObject({
            code: "460400499",
            name: "洋浦经济开发区"
          }),
          new UTSJSONObject({
            code: "460400500",
            name: "华南热作学院"
          })
        ]
      }),
      new UTSJSONObject({
        code: "4690",
        name: "省直辖县级行政区划",
        children: [
          new UTSJSONObject({
            code: "469001",
            name: "五指山市"
          }),
          new UTSJSONObject({
            code: "469002",
            name: "琼海市"
          }),
          new UTSJSONObject({
            code: "469005",
            name: "文昌市"
          }),
          new UTSJSONObject({
            code: "469006",
            name: "万宁市"
          }),
          new UTSJSONObject({
            code: "469007",
            name: "东方市"
          }),
          new UTSJSONObject({
            code: "469021",
            name: "定安县"
          }),
          new UTSJSONObject({
            code: "469022",
            name: "屯昌县"
          }),
          new UTSJSONObject({
            code: "469023",
            name: "澄迈县"
          }),
          new UTSJSONObject({
            code: "469024",
            name: "临高县"
          }),
          new UTSJSONObject({
            code: "469025",
            name: "白沙黎族自治县"
          }),
          new UTSJSONObject({
            code: "469026",
            name: "昌江黎族自治县"
          }),
          new UTSJSONObject({
            code: "469027",
            name: "乐东黎族自治县"
          }),
          new UTSJSONObject({
            code: "469028",
            name: "陵水黎族自治县"
          }),
          new UTSJSONObject({
            code: "469029",
            name: "保亭黎族苗族自治县"
          }),
          new UTSJSONObject({
            code: "469030",
            name: "琼中黎族苗族自治县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "50",
    name: "重庆市",
    children: [
      new UTSJSONObject({
        code: "5001",
        name: "市辖区",
        children: [
          new UTSJSONObject({
            code: "500101",
            name: "万州区"
          }),
          new UTSJSONObject({
            code: "500102",
            name: "涪陵区"
          }),
          new UTSJSONObject({
            code: "500103",
            name: "渝中区"
          }),
          new UTSJSONObject({
            code: "500104",
            name: "大渡口区"
          }),
          new UTSJSONObject({
            code: "500105",
            name: "江北区"
          }),
          new UTSJSONObject({
            code: "500106",
            name: "沙坪坝区"
          }),
          new UTSJSONObject({
            code: "500107",
            name: "九龙坡区"
          }),
          new UTSJSONObject({
            code: "500108",
            name: "南岸区"
          }),
          new UTSJSONObject({
            code: "500109",
            name: "北碚区"
          }),
          new UTSJSONObject({
            code: "500110",
            name: "綦江区"
          }),
          new UTSJSONObject({
            code: "500111",
            name: "大足区"
          }),
          new UTSJSONObject({
            code: "500112",
            name: "渝北区"
          }),
          new UTSJSONObject({
            code: "500113",
            name: "巴南区"
          }),
          new UTSJSONObject({
            code: "500114",
            name: "黔江区"
          }),
          new UTSJSONObject({
            code: "500115",
            name: "长寿区"
          }),
          new UTSJSONObject({
            code: "500116",
            name: "江津区"
          }),
          new UTSJSONObject({
            code: "500117",
            name: "合川区"
          }),
          new UTSJSONObject({
            code: "500118",
            name: "永川区"
          }),
          new UTSJSONObject({
            code: "500119",
            name: "南川区"
          }),
          new UTSJSONObject({
            code: "500120",
            name: "璧山区"
          }),
          new UTSJSONObject({
            code: "500151",
            name: "铜梁区"
          }),
          new UTSJSONObject({
            code: "500152",
            name: "潼南区"
          }),
          new UTSJSONObject({
            code: "500153",
            name: "荣昌区"
          }),
          new UTSJSONObject({
            code: "500154",
            name: "开州区"
          }),
          new UTSJSONObject({
            code: "500155",
            name: "梁平区"
          }),
          new UTSJSONObject({
            code: "500156",
            name: "武隆区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5002",
        name: "县",
        children: [
          new UTSJSONObject({
            code: "500229",
            name: "城口县"
          }),
          new UTSJSONObject({
            code: "500230",
            name: "丰都县"
          }),
          new UTSJSONObject({
            code: "500231",
            name: "垫江县"
          }),
          new UTSJSONObject({
            code: "500233",
            name: "忠县"
          }),
          new UTSJSONObject({
            code: "500235",
            name: "云阳县"
          }),
          new UTSJSONObject({
            code: "500236",
            name: "奉节县"
          }),
          new UTSJSONObject({
            code: "500237",
            name: "巫山县"
          }),
          new UTSJSONObject({
            code: "500238",
            name: "巫溪县"
          }),
          new UTSJSONObject({
            code: "500240",
            name: "石柱土家族自治县"
          }),
          new UTSJSONObject({
            code: "500241",
            name: "秀山土家族苗族自治县"
          }),
          new UTSJSONObject({
            code: "500242",
            name: "酉阳土家族苗族自治县"
          }),
          new UTSJSONObject({
            code: "500243",
            name: "彭水苗族土家族自治县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "51",
    name: "四川省",
    children: [
      new UTSJSONObject({
        code: "5101",
        name: "成都市",
        children: [
          new UTSJSONObject({
            code: "510104",
            name: "锦江区"
          }),
          new UTSJSONObject({
            code: "510105",
            name: "青羊区"
          }),
          new UTSJSONObject({
            code: "510106",
            name: "金牛区"
          }),
          new UTSJSONObject({
            code: "510107",
            name: "武侯区"
          }),
          new UTSJSONObject({
            code: "510108",
            name: "成华区"
          }),
          new UTSJSONObject({
            code: "510112",
            name: "龙泉驿区"
          }),
          new UTSJSONObject({
            code: "510113",
            name: "青白江区"
          }),
          new UTSJSONObject({
            code: "510114",
            name: "新都区"
          }),
          new UTSJSONObject({
            code: "510115",
            name: "温江区"
          }),
          new UTSJSONObject({
            code: "510116",
            name: "双流区"
          }),
          new UTSJSONObject({
            code: "510117",
            name: "郫都区"
          }),
          new UTSJSONObject({
            code: "510118",
            name: "新津区"
          }),
          new UTSJSONObject({
            code: "510121",
            name: "金堂县"
          }),
          new UTSJSONObject({
            code: "510129",
            name: "大邑县"
          }),
          new UTSJSONObject({
            code: "510131",
            name: "蒲江县"
          }),
          new UTSJSONObject({
            code: "510181",
            name: "都江堰市"
          }),
          new UTSJSONObject({
            code: "510182",
            name: "彭州市"
          }),
          new UTSJSONObject({
            code: "510183",
            name: "邛崃市"
          }),
          new UTSJSONObject({
            code: "510184",
            name: "崇州市"
          }),
          new UTSJSONObject({
            code: "510185",
            name: "简阳市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5103",
        name: "自贡市",
        children: [
          new UTSJSONObject({
            code: "510302",
            name: "自流井区"
          }),
          new UTSJSONObject({
            code: "510303",
            name: "贡井区"
          }),
          new UTSJSONObject({
            code: "510304",
            name: "大安区"
          }),
          new UTSJSONObject({
            code: "510311",
            name: "沿滩区"
          }),
          new UTSJSONObject({
            code: "510321",
            name: "荣县"
          }),
          new UTSJSONObject({
            code: "510322",
            name: "富顺县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5104",
        name: "攀枝花市",
        children: [
          new UTSJSONObject({
            code: "510402",
            name: "东区"
          }),
          new UTSJSONObject({
            code: "510403",
            name: "西区"
          }),
          new UTSJSONObject({
            code: "510411",
            name: "仁和区"
          }),
          new UTSJSONObject({
            code: "510421",
            name: "米易县"
          }),
          new UTSJSONObject({
            code: "510422",
            name: "盐边县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5105",
        name: "泸州市",
        children: [
          new UTSJSONObject({
            code: "510502",
            name: "江阳区"
          }),
          new UTSJSONObject({
            code: "510503",
            name: "纳溪区"
          }),
          new UTSJSONObject({
            code: "510504",
            name: "龙马潭区"
          }),
          new UTSJSONObject({
            code: "510521",
            name: "泸县"
          }),
          new UTSJSONObject({
            code: "510522",
            name: "合江县"
          }),
          new UTSJSONObject({
            code: "510524",
            name: "叙永县"
          }),
          new UTSJSONObject({
            code: "510525",
            name: "古蔺县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5106",
        name: "德阳市",
        children: [
          new UTSJSONObject({
            code: "510603",
            name: "旌阳区"
          }),
          new UTSJSONObject({
            code: "510604",
            name: "罗江区"
          }),
          new UTSJSONObject({
            code: "510623",
            name: "中江县"
          }),
          new UTSJSONObject({
            code: "510681",
            name: "广汉市"
          }),
          new UTSJSONObject({
            code: "510682",
            name: "什邡市"
          }),
          new UTSJSONObject({
            code: "510683",
            name: "绵竹市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5107",
        name: "绵阳市",
        children: [
          new UTSJSONObject({
            code: "510703",
            name: "涪城区"
          }),
          new UTSJSONObject({
            code: "510704",
            name: "游仙区"
          }),
          new UTSJSONObject({
            code: "510705",
            name: "安州区"
          }),
          new UTSJSONObject({
            code: "510722",
            name: "三台县"
          }),
          new UTSJSONObject({
            code: "510723",
            name: "盐亭县"
          }),
          new UTSJSONObject({
            code: "510725",
            name: "梓潼县"
          }),
          new UTSJSONObject({
            code: "510726",
            name: "北川羌族自治县"
          }),
          new UTSJSONObject({
            code: "510727",
            name: "平武县"
          }),
          new UTSJSONObject({
            code: "510781",
            name: "江油市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5108",
        name: "广元市",
        children: [
          new UTSJSONObject({
            code: "510802",
            name: "利州区"
          }),
          new UTSJSONObject({
            code: "510811",
            name: "昭化区"
          }),
          new UTSJSONObject({
            code: "510812",
            name: "朝天区"
          }),
          new UTSJSONObject({
            code: "510821",
            name: "旺苍县"
          }),
          new UTSJSONObject({
            code: "510822",
            name: "青川县"
          }),
          new UTSJSONObject({
            code: "510823",
            name: "剑阁县"
          }),
          new UTSJSONObject({
            code: "510824",
            name: "苍溪县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5109",
        name: "遂宁市",
        children: [
          new UTSJSONObject({
            code: "510903",
            name: "船山区"
          }),
          new UTSJSONObject({
            code: "510904",
            name: "安居区"
          }),
          new UTSJSONObject({
            code: "510921",
            name: "蓬溪县"
          }),
          new UTSJSONObject({
            code: "510923",
            name: "大英县"
          }),
          new UTSJSONObject({
            code: "510981",
            name: "射洪市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5110",
        name: "内江市",
        children: [
          new UTSJSONObject({
            code: "511002",
            name: "市中区"
          }),
          new UTSJSONObject({
            code: "511011",
            name: "东兴区"
          }),
          new UTSJSONObject({
            code: "511024",
            name: "威远县"
          }),
          new UTSJSONObject({
            code: "511025",
            name: "资中县"
          }),
          new UTSJSONObject({
            code: "511083",
            name: "隆昌市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5111",
        name: "乐山市",
        children: [
          new UTSJSONObject({
            code: "511102",
            name: "市中区"
          }),
          new UTSJSONObject({
            code: "511111",
            name: "沙湾区"
          }),
          new UTSJSONObject({
            code: "511112",
            name: "五通桥区"
          }),
          new UTSJSONObject({
            code: "511113",
            name: "金口河区"
          }),
          new UTSJSONObject({
            code: "511123",
            name: "犍为县"
          }),
          new UTSJSONObject({
            code: "511124",
            name: "井研县"
          }),
          new UTSJSONObject({
            code: "511126",
            name: "夹江县"
          }),
          new UTSJSONObject({
            code: "511129",
            name: "沐川县"
          }),
          new UTSJSONObject({
            code: "511132",
            name: "峨边彝族自治县"
          }),
          new UTSJSONObject({
            code: "511133",
            name: "马边彝族自治县"
          }),
          new UTSJSONObject({
            code: "511181",
            name: "峨眉山市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5113",
        name: "南充市",
        children: [
          new UTSJSONObject({
            code: "511302",
            name: "顺庆区"
          }),
          new UTSJSONObject({
            code: "511303",
            name: "高坪区"
          }),
          new UTSJSONObject({
            code: "511304",
            name: "嘉陵区"
          }),
          new UTSJSONObject({
            code: "511321",
            name: "南部县"
          }),
          new UTSJSONObject({
            code: "511322",
            name: "营山县"
          }),
          new UTSJSONObject({
            code: "511323",
            name: "蓬安县"
          }),
          new UTSJSONObject({
            code: "511324",
            name: "仪陇县"
          }),
          new UTSJSONObject({
            code: "511325",
            name: "西充县"
          }),
          new UTSJSONObject({
            code: "511381",
            name: "阆中市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5114",
        name: "眉山市",
        children: [
          new UTSJSONObject({
            code: "511402",
            name: "东坡区"
          }),
          new UTSJSONObject({
            code: "511403",
            name: "彭山区"
          }),
          new UTSJSONObject({
            code: "511421",
            name: "仁寿县"
          }),
          new UTSJSONObject({
            code: "511423",
            name: "洪雅县"
          }),
          new UTSJSONObject({
            code: "511424",
            name: "丹棱县"
          }),
          new UTSJSONObject({
            code: "511425",
            name: "青神县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5115",
        name: "宜宾市",
        children: [
          new UTSJSONObject({
            code: "511502",
            name: "翠屏区"
          }),
          new UTSJSONObject({
            code: "511503",
            name: "南溪区"
          }),
          new UTSJSONObject({
            code: "511504",
            name: "叙州区"
          }),
          new UTSJSONObject({
            code: "511523",
            name: "江安县"
          }),
          new UTSJSONObject({
            code: "511524",
            name: "长宁县"
          }),
          new UTSJSONObject({
            code: "511525",
            name: "高县"
          }),
          new UTSJSONObject({
            code: "511526",
            name: "珙县"
          }),
          new UTSJSONObject({
            code: "511527",
            name: "筠连县"
          }),
          new UTSJSONObject({
            code: "511528",
            name: "兴文县"
          }),
          new UTSJSONObject({
            code: "511529",
            name: "屏山县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5116",
        name: "广安市",
        children: [
          new UTSJSONObject({
            code: "511602",
            name: "广安区"
          }),
          new UTSJSONObject({
            code: "511603",
            name: "前锋区"
          }),
          new UTSJSONObject({
            code: "511621",
            name: "岳池县"
          }),
          new UTSJSONObject({
            code: "511622",
            name: "武胜县"
          }),
          new UTSJSONObject({
            code: "511623",
            name: "邻水县"
          }),
          new UTSJSONObject({
            code: "511681",
            name: "华蓥市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5117",
        name: "达州市",
        children: [
          new UTSJSONObject({
            code: "511702",
            name: "通川区"
          }),
          new UTSJSONObject({
            code: "511703",
            name: "达川区"
          }),
          new UTSJSONObject({
            code: "511722",
            name: "宣汉县"
          }),
          new UTSJSONObject({
            code: "511723",
            name: "开江县"
          }),
          new UTSJSONObject({
            code: "511724",
            name: "大竹县"
          }),
          new UTSJSONObject({
            code: "511725",
            name: "渠县"
          }),
          new UTSJSONObject({
            code: "511781",
            name: "万源市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5118",
        name: "雅安市",
        children: [
          new UTSJSONObject({
            code: "511802",
            name: "雨城区"
          }),
          new UTSJSONObject({
            code: "511803",
            name: "名山区"
          }),
          new UTSJSONObject({
            code: "511822",
            name: "荥经县"
          }),
          new UTSJSONObject({
            code: "511823",
            name: "汉源县"
          }),
          new UTSJSONObject({
            code: "511824",
            name: "石棉县"
          }),
          new UTSJSONObject({
            code: "511825",
            name: "天全县"
          }),
          new UTSJSONObject({
            code: "511826",
            name: "芦山县"
          }),
          new UTSJSONObject({
            code: "511827",
            name: "宝兴县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5119",
        name: "巴中市",
        children: [
          new UTSJSONObject({
            code: "511902",
            name: "巴州区"
          }),
          new UTSJSONObject({
            code: "511903",
            name: "恩阳区"
          }),
          new UTSJSONObject({
            code: "511921",
            name: "通江县"
          }),
          new UTSJSONObject({
            code: "511922",
            name: "南江县"
          }),
          new UTSJSONObject({
            code: "511923",
            name: "平昌县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5120",
        name: "资阳市",
        children: [
          new UTSJSONObject({
            code: "512002",
            name: "雁江区"
          }),
          new UTSJSONObject({
            code: "512021",
            name: "安岳县"
          }),
          new UTSJSONObject({
            code: "512022",
            name: "乐至县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5132",
        name: "阿坝藏族羌族自治州",
        children: [
          new UTSJSONObject({
            code: "513201",
            name: "马尔康市"
          }),
          new UTSJSONObject({
            code: "513221",
            name: "汶川县"
          }),
          new UTSJSONObject({
            code: "513222",
            name: "理县"
          }),
          new UTSJSONObject({
            code: "513223",
            name: "茂县"
          }),
          new UTSJSONObject({
            code: "513224",
            name: "松潘县"
          }),
          new UTSJSONObject({
            code: "513225",
            name: "九寨沟县"
          }),
          new UTSJSONObject({
            code: "513226",
            name: "金川县"
          }),
          new UTSJSONObject({
            code: "513227",
            name: "小金县"
          }),
          new UTSJSONObject({
            code: "513228",
            name: "黑水县"
          }),
          new UTSJSONObject({
            code: "513230",
            name: "壤塘县"
          }),
          new UTSJSONObject({
            code: "513231",
            name: "阿坝县"
          }),
          new UTSJSONObject({
            code: "513232",
            name: "若尔盖县"
          }),
          new UTSJSONObject({
            code: "513233",
            name: "红原县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5133",
        name: "甘孜藏族自治州",
        children: [
          new UTSJSONObject({
            code: "513301",
            name: "康定市"
          }),
          new UTSJSONObject({
            code: "513322",
            name: "泸定县"
          }),
          new UTSJSONObject({
            code: "513323",
            name: "丹巴县"
          }),
          new UTSJSONObject({
            code: "513324",
            name: "九龙县"
          }),
          new UTSJSONObject({
            code: "513325",
            name: "雅江县"
          }),
          new UTSJSONObject({
            code: "513326",
            name: "道孚县"
          }),
          new UTSJSONObject({
            code: "513327",
            name: "炉霍县"
          }),
          new UTSJSONObject({
            code: "513328",
            name: "甘孜县"
          }),
          new UTSJSONObject({
            code: "513329",
            name: "新龙县"
          }),
          new UTSJSONObject({
            code: "513330",
            name: "德格县"
          }),
          new UTSJSONObject({
            code: "513331",
            name: "白玉县"
          }),
          new UTSJSONObject({
            code: "513332",
            name: "石渠县"
          }),
          new UTSJSONObject({
            code: "513333",
            name: "色达县"
          }),
          new UTSJSONObject({
            code: "513334",
            name: "理塘县"
          }),
          new UTSJSONObject({
            code: "513335",
            name: "巴塘县"
          }),
          new UTSJSONObject({
            code: "513336",
            name: "乡城县"
          }),
          new UTSJSONObject({
            code: "513337",
            name: "稻城县"
          }),
          new UTSJSONObject({
            code: "513338",
            name: "得荣县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5134",
        name: "凉山彝族自治州",
        children: [
          new UTSJSONObject({
            code: "513401",
            name: "西昌市"
          }),
          new UTSJSONObject({
            code: "513402",
            name: "会理市"
          }),
          new UTSJSONObject({
            code: "513422",
            name: "木里藏族自治县"
          }),
          new UTSJSONObject({
            code: "513423",
            name: "盐源县"
          }),
          new UTSJSONObject({
            code: "513424",
            name: "德昌县"
          }),
          new UTSJSONObject({
            code: "513426",
            name: "会东县"
          }),
          new UTSJSONObject({
            code: "513427",
            name: "宁南县"
          }),
          new UTSJSONObject({
            code: "513428",
            name: "普格县"
          }),
          new UTSJSONObject({
            code: "513429",
            name: "布拖县"
          }),
          new UTSJSONObject({
            code: "513430",
            name: "金阳县"
          }),
          new UTSJSONObject({
            code: "513431",
            name: "昭觉县"
          }),
          new UTSJSONObject({
            code: "513432",
            name: "喜德县"
          }),
          new UTSJSONObject({
            code: "513433",
            name: "冕宁县"
          }),
          new UTSJSONObject({
            code: "513434",
            name: "越西县"
          }),
          new UTSJSONObject({
            code: "513435",
            name: "甘洛县"
          }),
          new UTSJSONObject({
            code: "513436",
            name: "美姑县"
          }),
          new UTSJSONObject({
            code: "513437",
            name: "雷波县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "52",
    name: "贵州省",
    children: [
      new UTSJSONObject({
        code: "5201",
        name: "贵阳市",
        children: [
          new UTSJSONObject({
            code: "520102",
            name: "南明区"
          }),
          new UTSJSONObject({
            code: "520103",
            name: "云岩区"
          }),
          new UTSJSONObject({
            code: "520111",
            name: "花溪区"
          }),
          new UTSJSONObject({
            code: "520112",
            name: "乌当区"
          }),
          new UTSJSONObject({
            code: "520113",
            name: "白云区"
          }),
          new UTSJSONObject({
            code: "520115",
            name: "观山湖区"
          }),
          new UTSJSONObject({
            code: "520121",
            name: "开阳县"
          }),
          new UTSJSONObject({
            code: "520122",
            name: "息烽县"
          }),
          new UTSJSONObject({
            code: "520123",
            name: "修文县"
          }),
          new UTSJSONObject({
            code: "520181",
            name: "清镇市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5202",
        name: "六盘水市",
        children: [
          new UTSJSONObject({
            code: "520201",
            name: "钟山区"
          }),
          new UTSJSONObject({
            code: "520203",
            name: "六枝特区"
          }),
          new UTSJSONObject({
            code: "520204",
            name: "水城区"
          }),
          new UTSJSONObject({
            code: "520281",
            name: "盘州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5203",
        name: "遵义市",
        children: [
          new UTSJSONObject({
            code: "520302",
            name: "红花岗区"
          }),
          new UTSJSONObject({
            code: "520303",
            name: "汇川区"
          }),
          new UTSJSONObject({
            code: "520304",
            name: "播州区"
          }),
          new UTSJSONObject({
            code: "520322",
            name: "桐梓县"
          }),
          new UTSJSONObject({
            code: "520323",
            name: "绥阳县"
          }),
          new UTSJSONObject({
            code: "520324",
            name: "正安县"
          }),
          new UTSJSONObject({
            code: "520325",
            name: "道真仡佬族苗族自治县"
          }),
          new UTSJSONObject({
            code: "520326",
            name: "务川仡佬族苗族自治县"
          }),
          new UTSJSONObject({
            code: "520327",
            name: "凤冈县"
          }),
          new UTSJSONObject({
            code: "520328",
            name: "湄潭县"
          }),
          new UTSJSONObject({
            code: "520329",
            name: "余庆县"
          }),
          new UTSJSONObject({
            code: "520330",
            name: "习水县"
          }),
          new UTSJSONObject({
            code: "520381",
            name: "赤水市"
          }),
          new UTSJSONObject({
            code: "520382",
            name: "仁怀市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5204",
        name: "安顺市",
        children: [
          new UTSJSONObject({
            code: "520402",
            name: "西秀区"
          }),
          new UTSJSONObject({
            code: "520403",
            name: "平坝区"
          }),
          new UTSJSONObject({
            code: "520422",
            name: "普定县"
          }),
          new UTSJSONObject({
            code: "520423",
            name: "镇宁布依族苗族自治县"
          }),
          new UTSJSONObject({
            code: "520424",
            name: "关岭布依族苗族自治县"
          }),
          new UTSJSONObject({
            code: "520425",
            name: "紫云苗族布依族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5205",
        name: "毕节市",
        children: [
          new UTSJSONObject({
            code: "520502",
            name: "七星关区"
          }),
          new UTSJSONObject({
            code: "520521",
            name: "大方县"
          }),
          new UTSJSONObject({
            code: "520523",
            name: "金沙县"
          }),
          new UTSJSONObject({
            code: "520524",
            name: "织金县"
          }),
          new UTSJSONObject({
            code: "520525",
            name: "纳雍县"
          }),
          new UTSJSONObject({
            code: "520526",
            name: "威宁彝族回族苗族自治县"
          }),
          new UTSJSONObject({
            code: "520527",
            name: "赫章县"
          }),
          new UTSJSONObject({
            code: "520581",
            name: "黔西市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5206",
        name: "铜仁市",
        children: [
          new UTSJSONObject({
            code: "520602",
            name: "碧江区"
          }),
          new UTSJSONObject({
            code: "520603",
            name: "万山区"
          }),
          new UTSJSONObject({
            code: "520621",
            name: "江口县"
          }),
          new UTSJSONObject({
            code: "520622",
            name: "玉屏侗族自治县"
          }),
          new UTSJSONObject({
            code: "520623",
            name: "石阡县"
          }),
          new UTSJSONObject({
            code: "520624",
            name: "思南县"
          }),
          new UTSJSONObject({
            code: "520625",
            name: "印江土家族苗族自治县"
          }),
          new UTSJSONObject({
            code: "520626",
            name: "德江县"
          }),
          new UTSJSONObject({
            code: "520627",
            name: "沿河土家族自治县"
          }),
          new UTSJSONObject({
            code: "520628",
            name: "松桃苗族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5223",
        name: "黔西南布依族苗族自治州",
        children: [
          new UTSJSONObject({
            code: "522301",
            name: "兴义市"
          }),
          new UTSJSONObject({
            code: "522302",
            name: "兴仁市"
          }),
          new UTSJSONObject({
            code: "522323",
            name: "普安县"
          }),
          new UTSJSONObject({
            code: "522324",
            name: "晴隆县"
          }),
          new UTSJSONObject({
            code: "522325",
            name: "贞丰县"
          }),
          new UTSJSONObject({
            code: "522326",
            name: "望谟县"
          }),
          new UTSJSONObject({
            code: "522327",
            name: "册亨县"
          }),
          new UTSJSONObject({
            code: "522328",
            name: "安龙县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5226",
        name: "黔东南苗族侗族自治州",
        children: [
          new UTSJSONObject({
            code: "522601",
            name: "凯里市"
          }),
          new UTSJSONObject({
            code: "522622",
            name: "黄平县"
          }),
          new UTSJSONObject({
            code: "522623",
            name: "施秉县"
          }),
          new UTSJSONObject({
            code: "522624",
            name: "三穗县"
          }),
          new UTSJSONObject({
            code: "522625",
            name: "镇远县"
          }),
          new UTSJSONObject({
            code: "522626",
            name: "岑巩县"
          }),
          new UTSJSONObject({
            code: "522627",
            name: "天柱县"
          }),
          new UTSJSONObject({
            code: "522628",
            name: "锦屏县"
          }),
          new UTSJSONObject({
            code: "522629",
            name: "剑河县"
          }),
          new UTSJSONObject({
            code: "522630",
            name: "台江县"
          }),
          new UTSJSONObject({
            code: "522631",
            name: "黎平县"
          }),
          new UTSJSONObject({
            code: "522632",
            name: "榕江县"
          }),
          new UTSJSONObject({
            code: "522633",
            name: "从江县"
          }),
          new UTSJSONObject({
            code: "522634",
            name: "雷山县"
          }),
          new UTSJSONObject({
            code: "522635",
            name: "麻江县"
          }),
          new UTSJSONObject({
            code: "522636",
            name: "丹寨县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5227",
        name: "黔南布依族苗族自治州",
        children: [
          new UTSJSONObject({
            code: "522701",
            name: "都匀市"
          }),
          new UTSJSONObject({
            code: "522702",
            name: "福泉市"
          }),
          new UTSJSONObject({
            code: "522722",
            name: "荔波县"
          }),
          new UTSJSONObject({
            code: "522723",
            name: "贵定县"
          }),
          new UTSJSONObject({
            code: "522725",
            name: "瓮安县"
          }),
          new UTSJSONObject({
            code: "522726",
            name: "独山县"
          }),
          new UTSJSONObject({
            code: "522727",
            name: "平塘县"
          }),
          new UTSJSONObject({
            code: "522728",
            name: "罗甸县"
          }),
          new UTSJSONObject({
            code: "522729",
            name: "长顺县"
          }),
          new UTSJSONObject({
            code: "522730",
            name: "龙里县"
          }),
          new UTSJSONObject({
            code: "522731",
            name: "惠水县"
          }),
          new UTSJSONObject({
            code: "522732",
            name: "三都水族自治县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "53",
    name: "云南省",
    children: [
      new UTSJSONObject({
        code: "5301",
        name: "昆明市",
        children: [
          new UTSJSONObject({
            code: "530102",
            name: "五华区"
          }),
          new UTSJSONObject({
            code: "530103",
            name: "盘龙区"
          }),
          new UTSJSONObject({
            code: "530111",
            name: "官渡区"
          }),
          new UTSJSONObject({
            code: "530112",
            name: "西山区"
          }),
          new UTSJSONObject({
            code: "530113",
            name: "东川区"
          }),
          new UTSJSONObject({
            code: "530114",
            name: "呈贡区"
          }),
          new UTSJSONObject({
            code: "530115",
            name: "晋宁区"
          }),
          new UTSJSONObject({
            code: "530124",
            name: "富民县"
          }),
          new UTSJSONObject({
            code: "530125",
            name: "宜良县"
          }),
          new UTSJSONObject({
            code: "530126",
            name: "石林彝族自治县"
          }),
          new UTSJSONObject({
            code: "530127",
            name: "嵩明县"
          }),
          new UTSJSONObject({
            code: "530128",
            name: "禄劝彝族苗族自治县"
          }),
          new UTSJSONObject({
            code: "530129",
            name: "寻甸回族彝族自治县"
          }),
          new UTSJSONObject({
            code: "530181",
            name: "安宁市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5303",
        name: "曲靖市",
        children: [
          new UTSJSONObject({
            code: "530302",
            name: "麒麟区"
          }),
          new UTSJSONObject({
            code: "530303",
            name: "沾益区"
          }),
          new UTSJSONObject({
            code: "530304",
            name: "马龙区"
          }),
          new UTSJSONObject({
            code: "530322",
            name: "陆良县"
          }),
          new UTSJSONObject({
            code: "530323",
            name: "师宗县"
          }),
          new UTSJSONObject({
            code: "530324",
            name: "罗平县"
          }),
          new UTSJSONObject({
            code: "530325",
            name: "富源县"
          }),
          new UTSJSONObject({
            code: "530326",
            name: "会泽县"
          }),
          new UTSJSONObject({
            code: "530381",
            name: "宣威市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5304",
        name: "玉溪市",
        children: [
          new UTSJSONObject({
            code: "530402",
            name: "红塔区"
          }),
          new UTSJSONObject({
            code: "530403",
            name: "江川区"
          }),
          new UTSJSONObject({
            code: "530423",
            name: "通海县"
          }),
          new UTSJSONObject({
            code: "530424",
            name: "华宁县"
          }),
          new UTSJSONObject({
            code: "530425",
            name: "易门县"
          }),
          new UTSJSONObject({
            code: "530426",
            name: "峨山彝族自治县"
          }),
          new UTSJSONObject({
            code: "530427",
            name: "新平彝族傣族自治县"
          }),
          new UTSJSONObject({
            code: "530428",
            name: "元江哈尼族彝族傣族自治县"
          }),
          new UTSJSONObject({
            code: "530481",
            name: "澄江市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5305",
        name: "保山市",
        children: [
          new UTSJSONObject({
            code: "530502",
            name: "隆阳区"
          }),
          new UTSJSONObject({
            code: "530521",
            name: "施甸县"
          }),
          new UTSJSONObject({
            code: "530523",
            name: "龙陵县"
          }),
          new UTSJSONObject({
            code: "530524",
            name: "昌宁县"
          }),
          new UTSJSONObject({
            code: "530581",
            name: "腾冲市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5306",
        name: "昭通市",
        children: [
          new UTSJSONObject({
            code: "530602",
            name: "昭阳区"
          }),
          new UTSJSONObject({
            code: "530621",
            name: "鲁甸县"
          }),
          new UTSJSONObject({
            code: "530622",
            name: "巧家县"
          }),
          new UTSJSONObject({
            code: "530623",
            name: "盐津县"
          }),
          new UTSJSONObject({
            code: "530624",
            name: "大关县"
          }),
          new UTSJSONObject({
            code: "530625",
            name: "永善县"
          }),
          new UTSJSONObject({
            code: "530626",
            name: "绥江县"
          }),
          new UTSJSONObject({
            code: "530627",
            name: "镇雄县"
          }),
          new UTSJSONObject({
            code: "530628",
            name: "彝良县"
          }),
          new UTSJSONObject({
            code: "530629",
            name: "威信县"
          }),
          new UTSJSONObject({
            code: "530681",
            name: "水富市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5307",
        name: "丽江市",
        children: [
          new UTSJSONObject({
            code: "530702",
            name: "古城区"
          }),
          new UTSJSONObject({
            code: "530721",
            name: "玉龙纳西族自治县"
          }),
          new UTSJSONObject({
            code: "530722",
            name: "永胜县"
          }),
          new UTSJSONObject({
            code: "530723",
            name: "华坪县"
          }),
          new UTSJSONObject({
            code: "530724",
            name: "宁蒗彝族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5308",
        name: "普洱市",
        children: [
          new UTSJSONObject({
            code: "530802",
            name: "思茅区"
          }),
          new UTSJSONObject({
            code: "530821",
            name: "宁洱哈尼族彝族自治县"
          }),
          new UTSJSONObject({
            code: "530822",
            name: "墨江哈尼族自治县"
          }),
          new UTSJSONObject({
            code: "530823",
            name: "景东彝族自治县"
          }),
          new UTSJSONObject({
            code: "530824",
            name: "景谷傣族彝族自治县"
          }),
          new UTSJSONObject({
            code: "530825",
            name: "镇沅彝族哈尼族拉祜族自治县"
          }),
          new UTSJSONObject({
            code: "530826",
            name: "江城哈尼族彝族自治县"
          }),
          new UTSJSONObject({
            code: "530827",
            name: "孟连傣族拉祜族佤族自治县"
          }),
          new UTSJSONObject({
            code: "530828",
            name: "澜沧拉祜族自治县"
          }),
          new UTSJSONObject({
            code: "530829",
            name: "西盟佤族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5309",
        name: "临沧市",
        children: [
          new UTSJSONObject({
            code: "530902",
            name: "临翔区"
          }),
          new UTSJSONObject({
            code: "530921",
            name: "凤庆县"
          }),
          new UTSJSONObject({
            code: "530922",
            name: "云县"
          }),
          new UTSJSONObject({
            code: "530923",
            name: "永德县"
          }),
          new UTSJSONObject({
            code: "530924",
            name: "镇康县"
          }),
          new UTSJSONObject({
            code: "530925",
            name: "双江拉祜族佤族布朗族傣族自治县"
          }),
          new UTSJSONObject({
            code: "530926",
            name: "耿马傣族佤族自治县"
          }),
          new UTSJSONObject({
            code: "530927",
            name: "沧源佤族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5323",
        name: "楚雄彝族自治州",
        children: [
          new UTSJSONObject({
            code: "532301",
            name: "楚雄市"
          }),
          new UTSJSONObject({
            code: "532302",
            name: "禄丰市"
          }),
          new UTSJSONObject({
            code: "532322",
            name: "双柏县"
          }),
          new UTSJSONObject({
            code: "532323",
            name: "牟定县"
          }),
          new UTSJSONObject({
            code: "532324",
            name: "南华县"
          }),
          new UTSJSONObject({
            code: "532325",
            name: "姚安县"
          }),
          new UTSJSONObject({
            code: "532326",
            name: "大姚县"
          }),
          new UTSJSONObject({
            code: "532327",
            name: "永仁县"
          }),
          new UTSJSONObject({
            code: "532328",
            name: "元谋县"
          }),
          new UTSJSONObject({
            code: "532329",
            name: "武定县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5325",
        name: "红河哈尼族彝族自治州",
        children: [
          new UTSJSONObject({
            code: "532501",
            name: "个旧市"
          }),
          new UTSJSONObject({
            code: "532502",
            name: "开远市"
          }),
          new UTSJSONObject({
            code: "532503",
            name: "蒙自市"
          }),
          new UTSJSONObject({
            code: "532504",
            name: "弥勒市"
          }),
          new UTSJSONObject({
            code: "532523",
            name: "屏边苗族自治县"
          }),
          new UTSJSONObject({
            code: "532524",
            name: "建水县"
          }),
          new UTSJSONObject({
            code: "532525",
            name: "石屏县"
          }),
          new UTSJSONObject({
            code: "532527",
            name: "泸西县"
          }),
          new UTSJSONObject({
            code: "532528",
            name: "元阳县"
          }),
          new UTSJSONObject({
            code: "532529",
            name: "红河县"
          }),
          new UTSJSONObject({
            code: "532530",
            name: "金平苗族瑶族傣族自治县"
          }),
          new UTSJSONObject({
            code: "532531",
            name: "绿春县"
          }),
          new UTSJSONObject({
            code: "532532",
            name: "河口瑶族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5326",
        name: "文山壮族苗族自治州",
        children: [
          new UTSJSONObject({
            code: "532601",
            name: "文山市"
          }),
          new UTSJSONObject({
            code: "532622",
            name: "砚山县"
          }),
          new UTSJSONObject({
            code: "532623",
            name: "西畴县"
          }),
          new UTSJSONObject({
            code: "532624",
            name: "麻栗坡县"
          }),
          new UTSJSONObject({
            code: "532625",
            name: "马关县"
          }),
          new UTSJSONObject({
            code: "532626",
            name: "丘北县"
          }),
          new UTSJSONObject({
            code: "532627",
            name: "广南县"
          }),
          new UTSJSONObject({
            code: "532628",
            name: "富宁县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5328",
        name: "西双版纳傣族自治州",
        children: [
          new UTSJSONObject({
            code: "532801",
            name: "景洪市"
          }),
          new UTSJSONObject({
            code: "532822",
            name: "勐海县"
          }),
          new UTSJSONObject({
            code: "532823",
            name: "勐腊县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5329",
        name: "大理白族自治州",
        children: [
          new UTSJSONObject({
            code: "532901",
            name: "大理市"
          }),
          new UTSJSONObject({
            code: "532922",
            name: "漾濞彝族自治县"
          }),
          new UTSJSONObject({
            code: "532923",
            name: "祥云县"
          }),
          new UTSJSONObject({
            code: "532924",
            name: "宾川县"
          }),
          new UTSJSONObject({
            code: "532925",
            name: "弥渡县"
          }),
          new UTSJSONObject({
            code: "532926",
            name: "南涧彝族自治县"
          }),
          new UTSJSONObject({
            code: "532927",
            name: "巍山彝族回族自治县"
          }),
          new UTSJSONObject({
            code: "532928",
            name: "永平县"
          }),
          new UTSJSONObject({
            code: "532929",
            name: "云龙县"
          }),
          new UTSJSONObject({
            code: "532930",
            name: "洱源县"
          }),
          new UTSJSONObject({
            code: "532931",
            name: "剑川县"
          }),
          new UTSJSONObject({
            code: "532932",
            name: "鹤庆县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5331",
        name: "德宏傣族景颇族自治州",
        children: [
          new UTSJSONObject({
            code: "533102",
            name: "瑞丽市"
          }),
          new UTSJSONObject({
            code: "533103",
            name: "芒市"
          }),
          new UTSJSONObject({
            code: "533122",
            name: "梁河县"
          }),
          new UTSJSONObject({
            code: "533123",
            name: "盈江县"
          }),
          new UTSJSONObject({
            code: "533124",
            name: "陇川县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5333",
        name: "怒江傈僳族自治州",
        children: [
          new UTSJSONObject({
            code: "533301",
            name: "泸水市"
          }),
          new UTSJSONObject({
            code: "533323",
            name: "福贡县"
          }),
          new UTSJSONObject({
            code: "533324",
            name: "贡山独龙族怒族自治县"
          }),
          new UTSJSONObject({
            code: "533325",
            name: "兰坪白族普米族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5334",
        name: "迪庆藏族自治州",
        children: [
          new UTSJSONObject({
            code: "533401",
            name: "香格里拉市"
          }),
          new UTSJSONObject({
            code: "533422",
            name: "德钦县"
          }),
          new UTSJSONObject({
            code: "533423",
            name: "维西傈僳族自治县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "54",
    name: "西藏自治区",
    children: [
      new UTSJSONObject({
        code: "5401",
        name: "拉萨市",
        children: [
          new UTSJSONObject({
            code: "540102",
            name: "城关区"
          }),
          new UTSJSONObject({
            code: "540103",
            name: "堆龙德庆区"
          }),
          new UTSJSONObject({
            code: "540104",
            name: "达孜区"
          }),
          new UTSJSONObject({
            code: "540121",
            name: "林周县"
          }),
          new UTSJSONObject({
            code: "540122",
            name: "当雄县"
          }),
          new UTSJSONObject({
            code: "540123",
            name: "尼木县"
          }),
          new UTSJSONObject({
            code: "540124",
            name: "曲水县"
          }),
          new UTSJSONObject({
            code: "540127",
            name: "墨竹工卡县"
          }),
          new UTSJSONObject({
            code: "540171",
            name: "格尔木藏青工业园区"
          }),
          new UTSJSONObject({
            code: "540172",
            name: "拉萨经济技术开发区"
          }),
          new UTSJSONObject({
            code: "540173",
            name: "西藏文化旅游创意园区"
          }),
          new UTSJSONObject({
            code: "540174",
            name: "达孜工业园区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5402",
        name: "日喀则市",
        children: [
          new UTSJSONObject({
            code: "540202",
            name: "桑珠孜区"
          }),
          new UTSJSONObject({
            code: "540221",
            name: "南木林县"
          }),
          new UTSJSONObject({
            code: "540222",
            name: "江孜县"
          }),
          new UTSJSONObject({
            code: "540223",
            name: "定日县"
          }),
          new UTSJSONObject({
            code: "540224",
            name: "萨迦县"
          }),
          new UTSJSONObject({
            code: "540225",
            name: "拉孜县"
          }),
          new UTSJSONObject({
            code: "540226",
            name: "昂仁县"
          }),
          new UTSJSONObject({
            code: "540227",
            name: "谢通门县"
          }),
          new UTSJSONObject({
            code: "540228",
            name: "白朗县"
          }),
          new UTSJSONObject({
            code: "540229",
            name: "仁布县"
          }),
          new UTSJSONObject({
            code: "540230",
            name: "康马县"
          }),
          new UTSJSONObject({
            code: "540231",
            name: "定结县"
          }),
          new UTSJSONObject({
            code: "540232",
            name: "仲巴县"
          }),
          new UTSJSONObject({
            code: "540233",
            name: "亚东县"
          }),
          new UTSJSONObject({
            code: "540234",
            name: "吉隆县"
          }),
          new UTSJSONObject({
            code: "540235",
            name: "聂拉木县"
          }),
          new UTSJSONObject({
            code: "540236",
            name: "萨嘎县"
          }),
          new UTSJSONObject({
            code: "540237",
            name: "岗巴县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5403",
        name: "昌都市",
        children: [
          new UTSJSONObject({
            code: "540302",
            name: "卡若区"
          }),
          new UTSJSONObject({
            code: "540321",
            name: "江达县"
          }),
          new UTSJSONObject({
            code: "540322",
            name: "贡觉县"
          }),
          new UTSJSONObject({
            code: "540323",
            name: "类乌齐县"
          }),
          new UTSJSONObject({
            code: "540324",
            name: "丁青县"
          }),
          new UTSJSONObject({
            code: "540325",
            name: "察雅县"
          }),
          new UTSJSONObject({
            code: "540326",
            name: "八宿县"
          }),
          new UTSJSONObject({
            code: "540327",
            name: "左贡县"
          }),
          new UTSJSONObject({
            code: "540328",
            name: "芒康县"
          }),
          new UTSJSONObject({
            code: "540329",
            name: "洛隆县"
          }),
          new UTSJSONObject({
            code: "540330",
            name: "边坝县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5404",
        name: "林芝市",
        children: [
          new UTSJSONObject({
            code: "540402",
            name: "巴宜区"
          }),
          new UTSJSONObject({
            code: "540421",
            name: "工布江达县"
          }),
          new UTSJSONObject({
            code: "540422",
            name: "米林县"
          }),
          new UTSJSONObject({
            code: "540423",
            name: "墨脱县"
          }),
          new UTSJSONObject({
            code: "540424",
            name: "波密县"
          }),
          new UTSJSONObject({
            code: "540425",
            name: "察隅县"
          }),
          new UTSJSONObject({
            code: "540426",
            name: "朗县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5405",
        name: "山南市",
        children: [
          new UTSJSONObject({
            code: "540502",
            name: "乃东区"
          }),
          new UTSJSONObject({
            code: "540521",
            name: "扎囊县"
          }),
          new UTSJSONObject({
            code: "540522",
            name: "贡嘎县"
          }),
          new UTSJSONObject({
            code: "540523",
            name: "桑日县"
          }),
          new UTSJSONObject({
            code: "540524",
            name: "琼结县"
          }),
          new UTSJSONObject({
            code: "540525",
            name: "曲松县"
          }),
          new UTSJSONObject({
            code: "540526",
            name: "措美县"
          }),
          new UTSJSONObject({
            code: "540527",
            name: "洛扎县"
          }),
          new UTSJSONObject({
            code: "540528",
            name: "加查县"
          }),
          new UTSJSONObject({
            code: "540529",
            name: "隆子县"
          }),
          new UTSJSONObject({
            code: "540530",
            name: "错那县"
          }),
          new UTSJSONObject({
            code: "540531",
            name: "浪卡子县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5406",
        name: "那曲市",
        children: [
          new UTSJSONObject({
            code: "540602",
            name: "色尼区"
          }),
          new UTSJSONObject({
            code: "540621",
            name: "嘉黎县"
          }),
          new UTSJSONObject({
            code: "540622",
            name: "比如县"
          }),
          new UTSJSONObject({
            code: "540623",
            name: "聂荣县"
          }),
          new UTSJSONObject({
            code: "540624",
            name: "安多县"
          }),
          new UTSJSONObject({
            code: "540625",
            name: "申扎县"
          }),
          new UTSJSONObject({
            code: "540626",
            name: "索县"
          }),
          new UTSJSONObject({
            code: "540627",
            name: "班戈县"
          }),
          new UTSJSONObject({
            code: "540628",
            name: "巴青县"
          }),
          new UTSJSONObject({
            code: "540629",
            name: "尼玛县"
          }),
          new UTSJSONObject({
            code: "540630",
            name: "双湖县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "5425",
        name: "阿里地区",
        children: [
          new UTSJSONObject({
            code: "542521",
            name: "普兰县"
          }),
          new UTSJSONObject({
            code: "542522",
            name: "札达县"
          }),
          new UTSJSONObject({
            code: "542523",
            name: "噶尔县"
          }),
          new UTSJSONObject({
            code: "542524",
            name: "日土县"
          }),
          new UTSJSONObject({
            code: "542525",
            name: "革吉县"
          }),
          new UTSJSONObject({
            code: "542526",
            name: "改则县"
          }),
          new UTSJSONObject({
            code: "542527",
            name: "措勤县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "61",
    name: "陕西省",
    children: [
      new UTSJSONObject({
        code: "6101",
        name: "西安市",
        children: [
          new UTSJSONObject({
            code: "610102",
            name: "新城区"
          }),
          new UTSJSONObject({
            code: "610103",
            name: "碑林区"
          }),
          new UTSJSONObject({
            code: "610104",
            name: "莲湖区"
          }),
          new UTSJSONObject({
            code: "610111",
            name: "灞桥区"
          }),
          new UTSJSONObject({
            code: "610112",
            name: "未央区"
          }),
          new UTSJSONObject({
            code: "610113",
            name: "雁塔区"
          }),
          new UTSJSONObject({
            code: "610114",
            name: "阎良区"
          }),
          new UTSJSONObject({
            code: "610115",
            name: "临潼区"
          }),
          new UTSJSONObject({
            code: "610116",
            name: "长安区"
          }),
          new UTSJSONObject({
            code: "610117",
            name: "高陵区"
          }),
          new UTSJSONObject({
            code: "610118",
            name: "鄠邑区"
          }),
          new UTSJSONObject({
            code: "610122",
            name: "蓝田县"
          }),
          new UTSJSONObject({
            code: "610124",
            name: "周至县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6102",
        name: "铜川市",
        children: [
          new UTSJSONObject({
            code: "610202",
            name: "王益区"
          }),
          new UTSJSONObject({
            code: "610203",
            name: "印台区"
          }),
          new UTSJSONObject({
            code: "610204",
            name: "耀州区"
          }),
          new UTSJSONObject({
            code: "610222",
            name: "宜君县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6103",
        name: "宝鸡市",
        children: [
          new UTSJSONObject({
            code: "610302",
            name: "渭滨区"
          }),
          new UTSJSONObject({
            code: "610303",
            name: "金台区"
          }),
          new UTSJSONObject({
            code: "610304",
            name: "陈仓区"
          }),
          new UTSJSONObject({
            code: "610305",
            name: "凤翔区"
          }),
          new UTSJSONObject({
            code: "610323",
            name: "岐山县"
          }),
          new UTSJSONObject({
            code: "610324",
            name: "扶风县"
          }),
          new UTSJSONObject({
            code: "610326",
            name: "眉县"
          }),
          new UTSJSONObject({
            code: "610327",
            name: "陇县"
          }),
          new UTSJSONObject({
            code: "610328",
            name: "千阳县"
          }),
          new UTSJSONObject({
            code: "610329",
            name: "麟游县"
          }),
          new UTSJSONObject({
            code: "610330",
            name: "凤县"
          }),
          new UTSJSONObject({
            code: "610331",
            name: "太白县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6104",
        name: "咸阳市",
        children: [
          new UTSJSONObject({
            code: "610402",
            name: "秦都区"
          }),
          new UTSJSONObject({
            code: "610403",
            name: "杨陵区"
          }),
          new UTSJSONObject({
            code: "610404",
            name: "渭城区"
          }),
          new UTSJSONObject({
            code: "610422",
            name: "三原县"
          }),
          new UTSJSONObject({
            code: "610423",
            name: "泾阳县"
          }),
          new UTSJSONObject({
            code: "610424",
            name: "乾县"
          }),
          new UTSJSONObject({
            code: "610425",
            name: "礼泉县"
          }),
          new UTSJSONObject({
            code: "610426",
            name: "永寿县"
          }),
          new UTSJSONObject({
            code: "610428",
            name: "长武县"
          }),
          new UTSJSONObject({
            code: "610429",
            name: "旬邑县"
          }),
          new UTSJSONObject({
            code: "610430",
            name: "淳化县"
          }),
          new UTSJSONObject({
            code: "610431",
            name: "武功县"
          }),
          new UTSJSONObject({
            code: "610481",
            name: "兴平市"
          }),
          new UTSJSONObject({
            code: "610482",
            name: "彬州市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6105",
        name: "渭南市",
        children: [
          new UTSJSONObject({
            code: "610502",
            name: "临渭区"
          }),
          new UTSJSONObject({
            code: "610503",
            name: "华州区"
          }),
          new UTSJSONObject({
            code: "610522",
            name: "潼关县"
          }),
          new UTSJSONObject({
            code: "610523",
            name: "大荔县"
          }),
          new UTSJSONObject({
            code: "610524",
            name: "合阳县"
          }),
          new UTSJSONObject({
            code: "610525",
            name: "澄城县"
          }),
          new UTSJSONObject({
            code: "610526",
            name: "蒲城县"
          }),
          new UTSJSONObject({
            code: "610527",
            name: "白水县"
          }),
          new UTSJSONObject({
            code: "610528",
            name: "富平县"
          }),
          new UTSJSONObject({
            code: "610581",
            name: "韩城市"
          }),
          new UTSJSONObject({
            code: "610582",
            name: "华阴市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6106",
        name: "延安市",
        children: [
          new UTSJSONObject({
            code: "610602",
            name: "宝塔区"
          }),
          new UTSJSONObject({
            code: "610603",
            name: "安塞区"
          }),
          new UTSJSONObject({
            code: "610621",
            name: "延长县"
          }),
          new UTSJSONObject({
            code: "610622",
            name: "延川县"
          }),
          new UTSJSONObject({
            code: "610625",
            name: "志丹县"
          }),
          new UTSJSONObject({
            code: "610626",
            name: "吴起县"
          }),
          new UTSJSONObject({
            code: "610627",
            name: "甘泉县"
          }),
          new UTSJSONObject({
            code: "610628",
            name: "富县"
          }),
          new UTSJSONObject({
            code: "610629",
            name: "洛川县"
          }),
          new UTSJSONObject({
            code: "610630",
            name: "宜川县"
          }),
          new UTSJSONObject({
            code: "610631",
            name: "黄龙县"
          }),
          new UTSJSONObject({
            code: "610632",
            name: "黄陵县"
          }),
          new UTSJSONObject({
            code: "610681",
            name: "子长市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6107",
        name: "汉中市",
        children: [
          new UTSJSONObject({
            code: "610702",
            name: "汉台区"
          }),
          new UTSJSONObject({
            code: "610703",
            name: "南郑区"
          }),
          new UTSJSONObject({
            code: "610722",
            name: "城固县"
          }),
          new UTSJSONObject({
            code: "610723",
            name: "洋县"
          }),
          new UTSJSONObject({
            code: "610724",
            name: "西乡县"
          }),
          new UTSJSONObject({
            code: "610725",
            name: "勉县"
          }),
          new UTSJSONObject({
            code: "610726",
            name: "宁强县"
          }),
          new UTSJSONObject({
            code: "610727",
            name: "略阳县"
          }),
          new UTSJSONObject({
            code: "610728",
            name: "镇巴县"
          }),
          new UTSJSONObject({
            code: "610729",
            name: "留坝县"
          }),
          new UTSJSONObject({
            code: "610730",
            name: "佛坪县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6108",
        name: "榆林市",
        children: [
          new UTSJSONObject({
            code: "610802",
            name: "榆阳区"
          }),
          new UTSJSONObject({
            code: "610803",
            name: "横山区"
          }),
          new UTSJSONObject({
            code: "610822",
            name: "府谷县"
          }),
          new UTSJSONObject({
            code: "610824",
            name: "靖边县"
          }),
          new UTSJSONObject({
            code: "610825",
            name: "定边县"
          }),
          new UTSJSONObject({
            code: "610826",
            name: "绥德县"
          }),
          new UTSJSONObject({
            code: "610827",
            name: "米脂县"
          }),
          new UTSJSONObject({
            code: "610828",
            name: "佳县"
          }),
          new UTSJSONObject({
            code: "610829",
            name: "吴堡县"
          }),
          new UTSJSONObject({
            code: "610830",
            name: "清涧县"
          }),
          new UTSJSONObject({
            code: "610831",
            name: "子洲县"
          }),
          new UTSJSONObject({
            code: "610881",
            name: "神木市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6109",
        name: "安康市",
        children: [
          new UTSJSONObject({
            code: "610902",
            name: "汉滨区"
          }),
          new UTSJSONObject({
            code: "610921",
            name: "汉阴县"
          }),
          new UTSJSONObject({
            code: "610922",
            name: "石泉县"
          }),
          new UTSJSONObject({
            code: "610923",
            name: "宁陕县"
          }),
          new UTSJSONObject({
            code: "610924",
            name: "紫阳县"
          }),
          new UTSJSONObject({
            code: "610925",
            name: "岚皋县"
          }),
          new UTSJSONObject({
            code: "610926",
            name: "平利县"
          }),
          new UTSJSONObject({
            code: "610927",
            name: "镇坪县"
          }),
          new UTSJSONObject({
            code: "610929",
            name: "白河县"
          }),
          new UTSJSONObject({
            code: "610981",
            name: "旬阳市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6110",
        name: "商洛市",
        children: [
          new UTSJSONObject({
            code: "611002",
            name: "商州区"
          }),
          new UTSJSONObject({
            code: "611021",
            name: "洛南县"
          }),
          new UTSJSONObject({
            code: "611022",
            name: "丹凤县"
          }),
          new UTSJSONObject({
            code: "611023",
            name: "商南县"
          }),
          new UTSJSONObject({
            code: "611024",
            name: "山阳县"
          }),
          new UTSJSONObject({
            code: "611025",
            name: "镇安县"
          }),
          new UTSJSONObject({
            code: "611026",
            name: "柞水县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "62",
    name: "甘肃省",
    children: [
      new UTSJSONObject({
        code: "6201",
        name: "兰州市",
        children: [
          new UTSJSONObject({
            code: "620102",
            name: "城关区"
          }),
          new UTSJSONObject({
            code: "620103",
            name: "七里河区"
          }),
          new UTSJSONObject({
            code: "620104",
            name: "西固区"
          }),
          new UTSJSONObject({
            code: "620105",
            name: "安宁区"
          }),
          new UTSJSONObject({
            code: "620111",
            name: "红古区"
          }),
          new UTSJSONObject({
            code: "620121",
            name: "永登县"
          }),
          new UTSJSONObject({
            code: "620122",
            name: "皋兰县"
          }),
          new UTSJSONObject({
            code: "620123",
            name: "榆中县"
          }),
          new UTSJSONObject({
            code: "620171",
            name: "兰州新区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6202",
        name: "嘉峪关市",
        children: [
          new UTSJSONObject({
            code: "620201001",
            name: "雄关街道"
          }),
          new UTSJSONObject({
            code: "620201002",
            name: "钢城街道"
          }),
          new UTSJSONObject({
            code: "620201100",
            name: "新城镇"
          }),
          new UTSJSONObject({
            code: "620201101",
            name: "峪泉镇"
          }),
          new UTSJSONObject({
            code: "620201102",
            name: "文殊镇"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6203",
        name: "金昌市",
        children: [
          new UTSJSONObject({
            code: "620302",
            name: "金川区"
          }),
          new UTSJSONObject({
            code: "620321",
            name: "永昌县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6204",
        name: "白银市",
        children: [
          new UTSJSONObject({
            code: "620402",
            name: "白银区"
          }),
          new UTSJSONObject({
            code: "620403",
            name: "平川区"
          }),
          new UTSJSONObject({
            code: "620421",
            name: "靖远县"
          }),
          new UTSJSONObject({
            code: "620422",
            name: "会宁县"
          }),
          new UTSJSONObject({
            code: "620423",
            name: "景泰县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6205",
        name: "天水市",
        children: [
          new UTSJSONObject({
            code: "620502",
            name: "秦州区"
          }),
          new UTSJSONObject({
            code: "620503",
            name: "麦积区"
          }),
          new UTSJSONObject({
            code: "620521",
            name: "清水县"
          }),
          new UTSJSONObject({
            code: "620522",
            name: "秦安县"
          }),
          new UTSJSONObject({
            code: "620523",
            name: "甘谷县"
          }),
          new UTSJSONObject({
            code: "620524",
            name: "武山县"
          }),
          new UTSJSONObject({
            code: "620525",
            name: "张家川回族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6206",
        name: "武威市",
        children: [
          new UTSJSONObject({
            code: "620602",
            name: "凉州区"
          }),
          new UTSJSONObject({
            code: "620621",
            name: "民勤县"
          }),
          new UTSJSONObject({
            code: "620622",
            name: "古浪县"
          }),
          new UTSJSONObject({
            code: "620623",
            name: "天祝藏族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6207",
        name: "张掖市",
        children: [
          new UTSJSONObject({
            code: "620702",
            name: "甘州区"
          }),
          new UTSJSONObject({
            code: "620721",
            name: "肃南裕固族自治县"
          }),
          new UTSJSONObject({
            code: "620722",
            name: "民乐县"
          }),
          new UTSJSONObject({
            code: "620723",
            name: "临泽县"
          }),
          new UTSJSONObject({
            code: "620724",
            name: "高台县"
          }),
          new UTSJSONObject({
            code: "620725",
            name: "山丹县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6208",
        name: "平凉市",
        children: [
          new UTSJSONObject({
            code: "620802",
            name: "崆峒区"
          }),
          new UTSJSONObject({
            code: "620821",
            name: "泾川县"
          }),
          new UTSJSONObject({
            code: "620822",
            name: "灵台县"
          }),
          new UTSJSONObject({
            code: "620823",
            name: "崇信县"
          }),
          new UTSJSONObject({
            code: "620825",
            name: "庄浪县"
          }),
          new UTSJSONObject({
            code: "620826",
            name: "静宁县"
          }),
          new UTSJSONObject({
            code: "620881",
            name: "华亭市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6209",
        name: "酒泉市",
        children: [
          new UTSJSONObject({
            code: "620902",
            name: "肃州区"
          }),
          new UTSJSONObject({
            code: "620921",
            name: "金塔县"
          }),
          new UTSJSONObject({
            code: "620922",
            name: "瓜州县"
          }),
          new UTSJSONObject({
            code: "620923",
            name: "肃北蒙古族自治县"
          }),
          new UTSJSONObject({
            code: "620924",
            name: "阿克塞哈萨克族自治县"
          }),
          new UTSJSONObject({
            code: "620981",
            name: "玉门市"
          }),
          new UTSJSONObject({
            code: "620982",
            name: "敦煌市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6210",
        name: "庆阳市",
        children: [
          new UTSJSONObject({
            code: "621002",
            name: "西峰区"
          }),
          new UTSJSONObject({
            code: "621021",
            name: "庆城县"
          }),
          new UTSJSONObject({
            code: "621022",
            name: "环县"
          }),
          new UTSJSONObject({
            code: "621023",
            name: "华池县"
          }),
          new UTSJSONObject({
            code: "621024",
            name: "合水县"
          }),
          new UTSJSONObject({
            code: "621025",
            name: "正宁县"
          }),
          new UTSJSONObject({
            code: "621026",
            name: "宁县"
          }),
          new UTSJSONObject({
            code: "621027",
            name: "镇原县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6211",
        name: "定西市",
        children: [
          new UTSJSONObject({
            code: "621102",
            name: "安定区"
          }),
          new UTSJSONObject({
            code: "621121",
            name: "通渭县"
          }),
          new UTSJSONObject({
            code: "621122",
            name: "陇西县"
          }),
          new UTSJSONObject({
            code: "621123",
            name: "渭源县"
          }),
          new UTSJSONObject({
            code: "621124",
            name: "临洮县"
          }),
          new UTSJSONObject({
            code: "621125",
            name: "漳县"
          }),
          new UTSJSONObject({
            code: "621126",
            name: "岷县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6212",
        name: "陇南市",
        children: [
          new UTSJSONObject({
            code: "621202",
            name: "武都区"
          }),
          new UTSJSONObject({
            code: "621221",
            name: "成县"
          }),
          new UTSJSONObject({
            code: "621222",
            name: "文县"
          }),
          new UTSJSONObject({
            code: "621223",
            name: "宕昌县"
          }),
          new UTSJSONObject({
            code: "621224",
            name: "康县"
          }),
          new UTSJSONObject({
            code: "621225",
            name: "西和县"
          }),
          new UTSJSONObject({
            code: "621226",
            name: "礼县"
          }),
          new UTSJSONObject({
            code: "621227",
            name: "徽县"
          }),
          new UTSJSONObject({
            code: "621228",
            name: "两当县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6229",
        name: "临夏回族自治州",
        children: [
          new UTSJSONObject({
            code: "622901",
            name: "临夏市"
          }),
          new UTSJSONObject({
            code: "622921",
            name: "临夏县"
          }),
          new UTSJSONObject({
            code: "622922",
            name: "康乐县"
          }),
          new UTSJSONObject({
            code: "622923",
            name: "永靖县"
          }),
          new UTSJSONObject({
            code: "622924",
            name: "广河县"
          }),
          new UTSJSONObject({
            code: "622925",
            name: "和政县"
          }),
          new UTSJSONObject({
            code: "622926",
            name: "东乡族自治县"
          }),
          new UTSJSONObject({
            code: "622927",
            name: "积石山保安族东乡族撒拉族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6230",
        name: "甘南藏族自治州",
        children: [
          new UTSJSONObject({
            code: "623001",
            name: "合作市"
          }),
          new UTSJSONObject({
            code: "623021",
            name: "临潭县"
          }),
          new UTSJSONObject({
            code: "623022",
            name: "卓尼县"
          }),
          new UTSJSONObject({
            code: "623023",
            name: "舟曲县"
          }),
          new UTSJSONObject({
            code: "623024",
            name: "迭部县"
          }),
          new UTSJSONObject({
            code: "623025",
            name: "玛曲县"
          }),
          new UTSJSONObject({
            code: "623026",
            name: "碌曲县"
          }),
          new UTSJSONObject({
            code: "623027",
            name: "夏河县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "63",
    name: "青海省",
    children: [
      new UTSJSONObject({
        code: "6301",
        name: "西宁市",
        children: [
          new UTSJSONObject({
            code: "630102",
            name: "城东区"
          }),
          new UTSJSONObject({
            code: "630103",
            name: "城中区"
          }),
          new UTSJSONObject({
            code: "630104",
            name: "城西区"
          }),
          new UTSJSONObject({
            code: "630105",
            name: "城北区"
          }),
          new UTSJSONObject({
            code: "630106",
            name: "湟中区"
          }),
          new UTSJSONObject({
            code: "630121",
            name: "大通回族土族自治县"
          }),
          new UTSJSONObject({
            code: "630123",
            name: "湟源县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6302",
        name: "海东市",
        children: [
          new UTSJSONObject({
            code: "630202",
            name: "乐都区"
          }),
          new UTSJSONObject({
            code: "630203",
            name: "平安区"
          }),
          new UTSJSONObject({
            code: "630222",
            name: "民和回族土族自治县"
          }),
          new UTSJSONObject({
            code: "630223",
            name: "互助土族自治县"
          }),
          new UTSJSONObject({
            code: "630224",
            name: "化隆回族自治县"
          }),
          new UTSJSONObject({
            code: "630225",
            name: "循化撒拉族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6322",
        name: "海北藏族自治州",
        children: [
          new UTSJSONObject({
            code: "632221",
            name: "门源回族自治县"
          }),
          new UTSJSONObject({
            code: "632222",
            name: "祁连县"
          }),
          new UTSJSONObject({
            code: "632223",
            name: "海晏县"
          }),
          new UTSJSONObject({
            code: "632224",
            name: "刚察县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6323",
        name: "黄南藏族自治州",
        children: [
          new UTSJSONObject({
            code: "632301",
            name: "同仁市"
          }),
          new UTSJSONObject({
            code: "632322",
            name: "尖扎县"
          }),
          new UTSJSONObject({
            code: "632323",
            name: "泽库县"
          }),
          new UTSJSONObject({
            code: "632324",
            name: "河南蒙古族自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6325",
        name: "海南藏族自治州",
        children: [
          new UTSJSONObject({
            code: "632521",
            name: "共和县"
          }),
          new UTSJSONObject({
            code: "632522",
            name: "同德县"
          }),
          new UTSJSONObject({
            code: "632523",
            name: "贵德县"
          }),
          new UTSJSONObject({
            code: "632524",
            name: "兴海县"
          }),
          new UTSJSONObject({
            code: "632525",
            name: "贵南县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6326",
        name: "果洛藏族自治州",
        children: [
          new UTSJSONObject({
            code: "632621",
            name: "玛沁县"
          }),
          new UTSJSONObject({
            code: "632622",
            name: "班玛县"
          }),
          new UTSJSONObject({
            code: "632623",
            name: "甘德县"
          }),
          new UTSJSONObject({
            code: "632624",
            name: "达日县"
          }),
          new UTSJSONObject({
            code: "632625",
            name: "久治县"
          }),
          new UTSJSONObject({
            code: "632626",
            name: "玛多县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6327",
        name: "玉树藏族自治州",
        children: [
          new UTSJSONObject({
            code: "632701",
            name: "玉树市"
          }),
          new UTSJSONObject({
            code: "632722",
            name: "杂多县"
          }),
          new UTSJSONObject({
            code: "632723",
            name: "称多县"
          }),
          new UTSJSONObject({
            code: "632724",
            name: "治多县"
          }),
          new UTSJSONObject({
            code: "632725",
            name: "囊谦县"
          }),
          new UTSJSONObject({
            code: "632726",
            name: "曲麻莱县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6328",
        name: "海西蒙古族藏族自治州",
        children: [
          new UTSJSONObject({
            code: "632801",
            name: "格尔木市"
          }),
          new UTSJSONObject({
            code: "632802",
            name: "德令哈市"
          }),
          new UTSJSONObject({
            code: "632803",
            name: "茫崖市"
          }),
          new UTSJSONObject({
            code: "632821",
            name: "乌兰县"
          }),
          new UTSJSONObject({
            code: "632822",
            name: "都兰县"
          }),
          new UTSJSONObject({
            code: "632823",
            name: "天峻县"
          }),
          new UTSJSONObject({
            code: "632857",
            name: "大柴旦行政委员会"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "64",
    name: "宁夏回族自治区",
    children: [
      new UTSJSONObject({
        code: "6401",
        name: "银川市",
        children: [
          new UTSJSONObject({
            code: "640104",
            name: "兴庆区"
          }),
          new UTSJSONObject({
            code: "640105",
            name: "西夏区"
          }),
          new UTSJSONObject({
            code: "640106",
            name: "金凤区"
          }),
          new UTSJSONObject({
            code: "640121",
            name: "永宁县"
          }),
          new UTSJSONObject({
            code: "640122",
            name: "贺兰县"
          }),
          new UTSJSONObject({
            code: "640181",
            name: "灵武市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6402",
        name: "石嘴山市",
        children: [
          new UTSJSONObject({
            code: "640202",
            name: "大武口区"
          }),
          new UTSJSONObject({
            code: "640205",
            name: "惠农区"
          }),
          new UTSJSONObject({
            code: "640221",
            name: "平罗县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6403",
        name: "吴忠市",
        children: [
          new UTSJSONObject({
            code: "640302",
            name: "利通区"
          }),
          new UTSJSONObject({
            code: "640303",
            name: "红寺堡区"
          }),
          new UTSJSONObject({
            code: "640323",
            name: "盐池县"
          }),
          new UTSJSONObject({
            code: "640324",
            name: "同心县"
          }),
          new UTSJSONObject({
            code: "640381",
            name: "青铜峡市"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6404",
        name: "固原市",
        children: [
          new UTSJSONObject({
            code: "640402",
            name: "原州区"
          }),
          new UTSJSONObject({
            code: "640422",
            name: "西吉县"
          }),
          new UTSJSONObject({
            code: "640423",
            name: "隆德县"
          }),
          new UTSJSONObject({
            code: "640424",
            name: "泾源县"
          }),
          new UTSJSONObject({
            code: "640425",
            name: "彭阳县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6405",
        name: "中卫市",
        children: [
          new UTSJSONObject({
            code: "640502",
            name: "沙坡头区"
          }),
          new UTSJSONObject({
            code: "640521",
            name: "中宁县"
          }),
          new UTSJSONObject({
            code: "640522",
            name: "海原县"
          })
        ]
      })
    ]
  }),
  new UTSJSONObject({
    code: "65",
    name: "新疆维吾尔自治区",
    children: [
      new UTSJSONObject({
        code: "6501",
        name: "乌鲁木齐市",
        children: [
          new UTSJSONObject({
            code: "650102",
            name: "天山区"
          }),
          new UTSJSONObject({
            code: "650103",
            name: "沙依巴克区"
          }),
          new UTSJSONObject({
            code: "650104",
            name: "新市区"
          }),
          new UTSJSONObject({
            code: "650105",
            name: "水磨沟区"
          }),
          new UTSJSONObject({
            code: "650106",
            name: "头屯河区"
          }),
          new UTSJSONObject({
            code: "650107",
            name: "达坂城区"
          }),
          new UTSJSONObject({
            code: "650109",
            name: "米东区"
          }),
          new UTSJSONObject({
            code: "650121",
            name: "乌鲁木齐县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6502",
        name: "克拉玛依市",
        children: [
          new UTSJSONObject({
            code: "650202",
            name: "独山子区"
          }),
          new UTSJSONObject({
            code: "650203",
            name: "克拉玛依区"
          }),
          new UTSJSONObject({
            code: "650204",
            name: "白碱滩区"
          }),
          new UTSJSONObject({
            code: "650205",
            name: "乌尔禾区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6504",
        name: "吐鲁番市",
        children: [
          new UTSJSONObject({
            code: "650402",
            name: "高昌区"
          }),
          new UTSJSONObject({
            code: "650421",
            name: "鄯善县"
          }),
          new UTSJSONObject({
            code: "650422",
            name: "托克逊县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6505",
        name: "哈密市",
        children: [
          new UTSJSONObject({
            code: "650502",
            name: "伊州区"
          }),
          new UTSJSONObject({
            code: "650521",
            name: "巴里坤哈萨克自治县"
          }),
          new UTSJSONObject({
            code: "650522",
            name: "伊吾县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6523",
        name: "昌吉回族自治州",
        children: [
          new UTSJSONObject({
            code: "652301",
            name: "昌吉市"
          }),
          new UTSJSONObject({
            code: "652302",
            name: "阜康市"
          }),
          new UTSJSONObject({
            code: "652323",
            name: "呼图壁县"
          }),
          new UTSJSONObject({
            code: "652324",
            name: "玛纳斯县"
          }),
          new UTSJSONObject({
            code: "652325",
            name: "奇台县"
          }),
          new UTSJSONObject({
            code: "652327",
            name: "吉木萨尔县"
          }),
          new UTSJSONObject({
            code: "652328",
            name: "木垒哈萨克自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6527",
        name: "博尔塔拉蒙古自治州",
        children: [
          new UTSJSONObject({
            code: "652701",
            name: "博乐市"
          }),
          new UTSJSONObject({
            code: "652702",
            name: "阿拉山口市"
          }),
          new UTSJSONObject({
            code: "652722",
            name: "精河县"
          }),
          new UTSJSONObject({
            code: "652723",
            name: "温泉县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6528",
        name: "巴音郭楞蒙古自治州",
        children: [
          new UTSJSONObject({
            code: "652801",
            name: "库尔勒市"
          }),
          new UTSJSONObject({
            code: "652822",
            name: "轮台县"
          }),
          new UTSJSONObject({
            code: "652823",
            name: "尉犁县"
          }),
          new UTSJSONObject({
            code: "652824",
            name: "若羌县"
          }),
          new UTSJSONObject({
            code: "652825",
            name: "且末县"
          }),
          new UTSJSONObject({
            code: "652826",
            name: "焉耆回族自治县"
          }),
          new UTSJSONObject({
            code: "652827",
            name: "和静县"
          }),
          new UTSJSONObject({
            code: "652828",
            name: "和硕县"
          }),
          new UTSJSONObject({
            code: "652829",
            name: "博湖县"
          }),
          new UTSJSONObject({
            code: "652871",
            name: "库尔勒经济技术开发区"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6529",
        name: "阿克苏地区",
        children: [
          new UTSJSONObject({
            code: "652901",
            name: "阿克苏市"
          }),
          new UTSJSONObject({
            code: "652902",
            name: "库车市"
          }),
          new UTSJSONObject({
            code: "652922",
            name: "温宿县"
          }),
          new UTSJSONObject({
            code: "652924",
            name: "沙雅县"
          }),
          new UTSJSONObject({
            code: "652925",
            name: "新和县"
          }),
          new UTSJSONObject({
            code: "652926",
            name: "拜城县"
          }),
          new UTSJSONObject({
            code: "652927",
            name: "乌什县"
          }),
          new UTSJSONObject({
            code: "652928",
            name: "阿瓦提县"
          }),
          new UTSJSONObject({
            code: "652929",
            name: "柯坪县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6530",
        name: "克孜勒苏柯尔克孜自治州",
        children: [
          new UTSJSONObject({
            code: "653001",
            name: "阿图什市"
          }),
          new UTSJSONObject({
            code: "653022",
            name: "阿克陶县"
          }),
          new UTSJSONObject({
            code: "653023",
            name: "阿合奇县"
          }),
          new UTSJSONObject({
            code: "653024",
            name: "乌恰县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6531",
        name: "喀什地区",
        children: [
          new UTSJSONObject({
            code: "653101",
            name: "喀什市"
          }),
          new UTSJSONObject({
            code: "653121",
            name: "疏附县"
          }),
          new UTSJSONObject({
            code: "653122",
            name: "疏勒县"
          }),
          new UTSJSONObject({
            code: "653123",
            name: "英吉沙县"
          }),
          new UTSJSONObject({
            code: "653124",
            name: "泽普县"
          }),
          new UTSJSONObject({
            code: "653125",
            name: "莎车县"
          }),
          new UTSJSONObject({
            code: "653126",
            name: "叶城县"
          }),
          new UTSJSONObject({
            code: "653127",
            name: "麦盖提县"
          }),
          new UTSJSONObject({
            code: "653128",
            name: "岳普湖县"
          }),
          new UTSJSONObject({
            code: "653129",
            name: "伽师县"
          }),
          new UTSJSONObject({
            code: "653130",
            name: "巴楚县"
          }),
          new UTSJSONObject({
            code: "653131",
            name: "塔什库尔干塔吉克自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6532",
        name: "和田地区",
        children: [
          new UTSJSONObject({
            code: "653201",
            name: "和田市"
          }),
          new UTSJSONObject({
            code: "653221",
            name: "和田县"
          }),
          new UTSJSONObject({
            code: "653222",
            name: "墨玉县"
          }),
          new UTSJSONObject({
            code: "653223",
            name: "皮山县"
          }),
          new UTSJSONObject({
            code: "653224",
            name: "洛浦县"
          }),
          new UTSJSONObject({
            code: "653225",
            name: "策勒县"
          }),
          new UTSJSONObject({
            code: "653226",
            name: "于田县"
          }),
          new UTSJSONObject({
            code: "653227",
            name: "民丰县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6540",
        name: "伊犁哈萨克自治州",
        children: [
          new UTSJSONObject({
            code: "654002",
            name: "伊宁市"
          }),
          new UTSJSONObject({
            code: "654003",
            name: "奎屯市"
          }),
          new UTSJSONObject({
            code: "654004",
            name: "霍尔果斯市"
          }),
          new UTSJSONObject({
            code: "654021",
            name: "伊宁县"
          }),
          new UTSJSONObject({
            code: "654022",
            name: "察布查尔锡伯自治县"
          }),
          new UTSJSONObject({
            code: "654023",
            name: "霍城县"
          }),
          new UTSJSONObject({
            code: "654024",
            name: "巩留县"
          }),
          new UTSJSONObject({
            code: "654025",
            name: "新源县"
          }),
          new UTSJSONObject({
            code: "654026",
            name: "昭苏县"
          }),
          new UTSJSONObject({
            code: "654027",
            name: "特克斯县"
          }),
          new UTSJSONObject({
            code: "654028",
            name: "尼勒克县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6542",
        name: "塔城地区",
        children: [
          new UTSJSONObject({
            code: "654201",
            name: "塔城市"
          }),
          new UTSJSONObject({
            code: "654202",
            name: "乌苏市"
          }),
          new UTSJSONObject({
            code: "654203",
            name: "沙湾市"
          }),
          new UTSJSONObject({
            code: "654221",
            name: "额敏县"
          }),
          new UTSJSONObject({
            code: "654224",
            name: "托里县"
          }),
          new UTSJSONObject({
            code: "654225",
            name: "裕民县"
          }),
          new UTSJSONObject({
            code: "654226",
            name: "和布克赛尔蒙古自治县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6543",
        name: "阿勒泰地区",
        children: [
          new UTSJSONObject({
            code: "654301",
            name: "阿勒泰市"
          }),
          new UTSJSONObject({
            code: "654321",
            name: "布尔津县"
          }),
          new UTSJSONObject({
            code: "654322",
            name: "富蕴县"
          }),
          new UTSJSONObject({
            code: "654323",
            name: "福海县"
          }),
          new UTSJSONObject({
            code: "654324",
            name: "哈巴河县"
          }),
          new UTSJSONObject({
            code: "654325",
            name: "青河县"
          }),
          new UTSJSONObject({
            code: "654326",
            name: "吉木乃县"
          })
        ]
      }),
      new UTSJSONObject({
        code: "6590",
        name: "自治区直辖县级行政区划",
        children: [
          new UTSJSONObject({
            code: "659001",
            name: "石河子市"
          }),
          new UTSJSONObject({
            code: "659002",
            name: "阿拉尔市"
          }),
          new UTSJSONObject({
            code: "659003",
            name: "图木舒克市"
          }),
          new UTSJSONObject({
            code: "659004",
            name: "五家渠市"
          }),
          new UTSJSONObject({
            code: "659005",
            name: "北屯市"
          }),
          new UTSJSONObject({
            code: "659006",
            name: "铁门关市"
          }),
          new UTSJSONObject({
            code: "659007",
            name: "双河市"
          }),
          new UTSJSONObject({
            code: "659008",
            name: "可克达拉市"
          }),
          new UTSJSONObject({
            code: "659009",
            name: "昆玉市"
          }),
          new UTSJSONObject({
            code: "659010",
            name: "胡杨河市"
          }),
          new UTSJSONObject({
            code: "659011",
            name: "新星市"
          })
        ]
      })
    ]
  })
];
const useRegionPicker = (porps, emits) => {
  const pickerSelectData = regionJsonData;
  const showPicker = common_vendor.ref(false);
  common_vendor.watch(() => {
    return porps.open;
  }, (val) => {
    showPicker.value = val;
  });
  const _closePicker = () => {
    emits("update:open", false);
  };
  const handlePickerCloseEvent = () => {
    _closePicker();
    emits("close");
  };
  const currentSelectValue = common_vendor.ref([]);
  let userRegionValueMode = "code";
  const getCodeByNames = (names) => {
    const code = [];
    let data = regionJsonData;
    do {
      const name = names.shift();
      const regionItem = data.find((item) => {
        return item.name === name;
      }) || data[0];
      if (regionItem) {
        code.push(regionItem.code);
      }
      data = (regionItem === null || regionItem === void 0 ? void 0 : regionItem.children) || [];
    } while (data.length);
    return code;
  };
  const getNameByCodes = (codes) => {
    const name = [];
    let data = regionJsonData;
    do {
      const code = codes.shift();
      const regionItem = data.find((item) => {
        return item.code === code;
      }) || data[0];
      if (regionItem) {
        name.push(regionItem.name);
      }
      data = (regionItem === null || regionItem === void 0 ? void 0 : regionItem.children) || [];
    } while (data.length);
    return name;
  };
  const fillCode = (codes) => {
    const result = [];
    let data = regionJsonData;
    do {
      const code = codes.shift();
      const regionItem = data.find((item) => {
        return item.code === code;
      }) || data[0];
      if (regionItem) {
        result.push(regionItem.code);
      }
      data = (regionItem === null || regionItem === void 0 ? void 0 : regionItem.children) || [];
    } while (data.length);
    return result;
  };
  let isInnerUpdate = false;
  common_vendor.watch(() => {
    return porps.modelValue;
  }, (val) => {
    if (isInnerUpdate) {
      isInnerUpdate = false;
      return;
    }
    const chineseReg = /^[\u4E00-\u9FA5]+$/;
    const codeReg = /^\d{2,6}$/;
    if (val.length) {
      const value = uni_modules_tuniaouiVue3_utils_cloneDeep.cloneDeep(val);
      if (chineseReg.test(value[0])) {
        userRegionValueMode = "name";
        currentSelectValue.value = getCodeByNames(value);
        isInnerUpdate = true;
        emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, getNameByCodes(uni_modules_tuniaouiVue3_utils_cloneDeep.cloneDeep(currentSelectValue.value)));
      } else if (codeReg.test(value[0])) {
        userRegionValueMode = "code";
        currentSelectValue.value = fillCode(value);
        isInnerUpdate = true;
        emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, currentSelectValue.value);
      }
    }
  }, {
    immediate: true
  });
  const handlePickerChangeEvent = (value, index, item) => {
    if (userRegionValueMode === "name") {
      value = getNameByCodes(value);
    }
    isInnerUpdate = true;
    emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value, item);
  };
  const handlePickerConfirmEvent = (value, item) => {
    currentSelectValue.value = uni_modules_tuniaouiVue3_utils_cloneDeep.cloneDeep(value);
    if (userRegionValueMode === "name") {
      value = getNameByCodes(value);
    }
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    common_vendor.nextTick$1(() => {
      emits("confirm", value, item);
    });
    _closePicker();
  };
  const handlePickerCancelEvent = () => {
    _closePicker();
    emits("cancel");
  };
  return {
    pickerSelectData,
    showPicker,
    currentSelectValue,
    handlePickerCloseEvent,
    handlePickerChangeEvent,
    handlePickerConfirmEvent,
    handlePickerCancelEvent
  };
};
exports.useRegionPicker = useRegionPicker;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/region-picker/src/composables/use-region-picker.js.map
