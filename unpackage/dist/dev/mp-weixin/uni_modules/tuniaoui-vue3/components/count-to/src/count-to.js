"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const countToProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 开始的值
   */
  start: {
    type: [String, Number],
    default: 0
  },
  /**
   * @description 结束的值
   */
  end: {
    type: [String, Number],
    required: true
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
   * @description 显示小数的位数
   */
  decimals: {
    type: Number,
    default: 0
  },
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
  thousandsSeparator: String,
  /**
   * @description 动画执行时间，单位毫秒
   */
  duration: {
    type: Number,
    default: 1500
  }
});
const countToEmits = {
  /**
   * @description 数字变化结束时触发
   */
  end: () => {
    return true;
  }
};
exports.countToEmits = countToEmits;
exports.countToProps = countToProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-to/src/count-to.js.map
