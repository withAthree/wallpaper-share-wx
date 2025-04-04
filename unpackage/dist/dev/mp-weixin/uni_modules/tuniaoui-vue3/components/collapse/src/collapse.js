"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const collapseProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 当前激活的面板，如果是手风琴效果则传递string，否则传递string[]
   */
  modelValue: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType([Number, Array])
  },
  /**
   * @description 是否开启手风琴效果，每次只能打开一个面板
   */
  accordion: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否显示折叠面板的箭头
   */
  showArrow: {
    type: Boolean,
    default: true
  },
  /**
   * @description 折叠面板箭头的颜色，show-arrow为true时生效，以tn开头的颜色使用图鸟内置的颜色
   */
  arrowColor: String
});
const collapseEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isArray(value) || common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isArray(value) || common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  }
};
exports.collapseEmits = collapseEmits;
exports.collapseProps = collapseProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/collapse/src/collapse.js.map
