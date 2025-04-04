"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const weekCalendarProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 绑定月份选中日期的值
   */
  modelValue: Number,
  /**
   * @description 选中时的背景颜色，以tn开头使用图鸟内置的颜色
   */
  activeBgColor: String,
  /**
   * @description 选中时的文字颜色，以tn开头使用图鸟内置的颜色
   */
  activeTextColor: String,
  /**
   * @description 绑定的年份，如果为空则使用当前年份
   */
  year: {
    type: [String, Number]
  },
  /**
   * @description 绑定的月份，如果为空则使用当前月份
   */
  month: {
    type: [String, Number]
  },
  /**
   * @description 最小允许选择月份的日期
   */
  minDate: {
    type: [String, Number]
  },
  /**
   * @description 最大允许选择月份的日期
   */
  maxDate: {
    type: [String, Number]
  },
  /**
   * @description 自定义数据
   */
  customData: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return [];
    }
  }
});
const weekCalendarEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  "week-change": (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  }
};
exports.weekCalendarEmits = weekCalendarEmits;
exports.weekCalendarProps = weekCalendarProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/week-calendar/src/week-calendar.js.map
