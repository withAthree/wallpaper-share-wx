"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const switchTabProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 当前激活的标签索引
   */
  modelValue: {
    type: Number,
    default: 0
  },
  /**
   * @description 标签列表
   */
  tabs: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return [];
    }
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
  /**
   * @description 未选中时标签的背景颜色，以tn开头使用图鸟内置的颜色
   */
  inactiveBgColor: String,
  /**
   * @description 选中时标签的背景颜色，以tn开头使用图鸟内置的颜色
   */
  activeBgColor: String,
  /**
   * @description 未选中时标签的字体颜色，以tn开头使用图鸟内置的颜色
   */
  inactiveTextColor: String,
  /**
   * @description 选中时标签的字体颜色，以tn开头使用图鸟内置的颜色
   */
  activeTextColor: String
});
const switchTabEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  }
};
exports.switchTabEmits = switchTabEmits;
exports.switchTabProps = switchTabProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.js.map
