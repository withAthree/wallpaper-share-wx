"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const scrollListProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 是否显示指示器
   */
  indicator: {
    type: Boolean,
    default: true
  },
  /**
   * @description 指示器的宽度，单位 px
   */
  indicatorWidth: {
    type: Number,
    default: 40
  },
  /**
   * @description 指示器滑块的宽度，单位 px
   */
  indicatorBlockWidth: {
    type: Number,
    default: 20
  },
  /**
   * @description 指示器的背景颜色，以tn开头使用图鸟内置的颜色
   */
  indicatorColor: String,
  /**
   * @description 指示器滑块的背景颜色，以tn开头使用图鸟内置的颜色
   */
  indicatorBlockColor: String
});
const scrollListEmits = {
  /**
   * @description 滚动到左边时触发
   */
  "scroll-left": () => {
    return true;
  },
  /**
   * @description 滚动到右边时触发
   */
  "scroll-right": () => {
    return true;
  }
};
exports.scrollListEmits = scrollListEmits;
exports.scrollListProps = scrollListProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/scroll-list/src/scroll-list.js.map
