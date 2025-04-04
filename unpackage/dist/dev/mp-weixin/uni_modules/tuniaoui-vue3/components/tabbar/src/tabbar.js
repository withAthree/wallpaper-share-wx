"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_constants_zIndex = require("../../../constants/z-index.js");
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_tabbar_index = require("../../base/common-props/tabbar/index.js");
const tabbarProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_tabbar_index.tabbarBaseProps), {
  /**
   * @description tabbar选中绑定的值
   */
  modelValue: {
    type: [String, Number],
    default: 0
  },
  /**
   * @description tabbar高度
   */
  height: {
    type: String,
    default: "100rpx"
  },
  /**
   * @description tabbar背景颜色，如果需要设置毛玻璃的背景颜色，只能传递rgba的颜色值
   */
  bgColor: String,
  /**
   * @description 开启毛玻璃效果
   */
  frosted: Boolean,
  /**
   * @description 显示顶部阴影
   */
  topShadow: {
    type: Boolean,
    default: true
  },
  /**
   * @description 切换时是否显示动画
   */
  switchAnimation: Boolean,
  /**
   * @description 是否固定在底部
   */
  fixed: Boolean,
  /**
   * @description 在固定之后是否开启占位空间
   */
  placeholder: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否开启底部安全边距
   */
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  /**
   * @description 切换前回调
   */
  beforeSwitch: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Function)
  },
  /**
   * @description zIndex
   */
  zIndex: {
    type: Number,
    default: uni_modules_tuniaouiVue3_constants_zIndex.ZIndex.tabbar
  }
}));
const tabbarEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (val) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val) || common_vendor.isString(val);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (val) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val) || common_vendor.isString(val);
  }
};
exports.tabbarEmits = tabbarEmits;
exports.tabbarProps = tabbarProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabbar/src/tabbar.js.map
