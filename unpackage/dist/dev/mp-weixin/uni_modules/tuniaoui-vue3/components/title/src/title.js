"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const titleModes = [
  "normal",
  "vLine",
  "dot",
  "hLine",
  "subTitle",
  "transparent"
];
const titleAlign = ["left", "center", "right"];
const titleProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 标题内容
   */
  title: String,
  /**
   * @description 子标题内容，设置 mode 为 subTitle 时生效
   */
  subTitle: String,
  /**
   * @description 标题模式
   */
  mode: {
    type: String,
    values: titleModes,
    default: "normal"
  },
  /**
   * @description 标题大小，内置`sm`、`lg`、`xl`，同时也可以传递指定的尺寸
   */
  size: String,
  /**
   * @description 标题对齐方式
   */
  align: {
    type: String,
    values: titleAlign,
    default: "left"
  },
  /**
   * @description 标题颜色，以tn开头则使用图鸟内置的颜色
   */
  color: String,
  /**
   * @description 辅助元素颜色，以tn开头则使用图鸟内置的颜色
   */
  assistColor: String
});
const titleEmits = {
  /**
   * @description 点击事件
   */
  click: () => {
    return true;
  }
};
exports.titleEmits = titleEmits;
exports.titleProps = titleProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/title/src/title.js.map
