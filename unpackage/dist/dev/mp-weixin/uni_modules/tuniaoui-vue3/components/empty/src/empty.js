"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const emptyMode = [
  "cart",
  "page",
  "search",
  "address",
  "network",
  "order",
  "coupon",
  "favor",
  "permission",
  "history",
  "message",
  "list",
  "data",
  "comment"
];
const emptyProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 空白提示类型
   */
  mode: {
    type: String,
    values: emptyMode,
    required: true
  },
  /**
   * @description 内容颜色，以tn开头使用图鸟内置的颜色
   */
  color: String,
  /**
   * @description 内容尺寸，可以传递尺寸或者`sm` `lg` `xl`
   */
  size: String,
  /**
   * @description 是否显示提示
   */
  showTips: {
    type: Boolean,
    default: true
  }
});
exports.emptyProps = emptyProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/empty/src/empty.js.map
