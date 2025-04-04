"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_tabs_index = require("../../base/common-props/tabs/index.js");
const tabsProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_tabs_index.tabsBaseProps), {
  /**
   * @description tabs绑定的值，与tabsItem name属性对应值，如果tabsItem没有设置name，则默认为索引值
   */
  modelValue: {
    type: [String, Number],
    default: 0
  },
  /**
   * @description tabs高度
   */
  height: {
    type: String,
    default: "80rpx"
  },
  /**
   * @description 滑块的宽度
   */
  barWidth: {
    type: String,
    default: "40rpx"
  },
  /**
   * @description 背景颜色，以tn开头时使用图鸟内置的颜色
   */
  bgColor: String,
  /**
   * @description bar滑块颜色，以tn开头时使用图鸟内置的颜色
   */
  barColor: String,
  /**
   * @description 显示底部阴影
   */
  bottomShadow: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否可以滚动
   */
  scroll: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否显示滑块
   */
  bar: {
    type: Boolean,
    default: true
  },
  /**
   * @description 选中后的字体是否加粗
   */
  activeBold: {
    type: Boolean,
    default: true
  },
  /**
   * @description 距离顶部的距离，默认单位 px
   */
  offsetTop: {
    type: Number,
    default: 0
  },
  /**
   * @description 切换前回调
   */
  beforeSwitch: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Function)
  }
}));
const tabsEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (val) => {
    return common_vendor.isString(val) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (val) => {
    return common_vendor.isString(val) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val);
  }
};
exports.tabsEmits = tabsEmits;
exports.tabsProps = tabsProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabs/src/tabs.js.map
