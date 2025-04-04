"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const countScrollProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 显示的值
   */
  value: {
    type: [String, Number],
    default: ""
  },
  /**
   * @description 文字颜色，以tn开头则使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 字体大小，默认单位 rpx
   */
  fontSize: String,
  /**
   * @description 小数点的分隔符
   */
  decimalSeparator: {
    type: String,
    default: "."
  },
  /**
   * @description 千分位的分隔符，如果不填写则为没有千分位
   */
  thousandsSeparator: {
    type: String,
    default: ","
  },
  /**
   * @description 动画执行时间，单位毫秒
   */
  duration: {
    type: Number,
    default: 1500
  }
});
exports.countScrollProps = countScrollProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-scroll/src/count-scroll.js.map
