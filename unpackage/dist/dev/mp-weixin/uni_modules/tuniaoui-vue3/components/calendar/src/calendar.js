"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const calendarModes = ["date", "multi", "range"];
const calendarProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 日期绑定的值，支持的格式为 YYYY/MM/DD 2023/01/01 或者 YYYY-MM-DD 2023-01-01 [2023/01/01, 2023/01/02] [2023-01-01, 2023-01-02]
   */
  modelValue: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType([String, Array]),
    default: ""
  },
  /**
   * @description 选中时的背景颜色，以tn开头使用图鸟内置的颜色
   */
  activeBgColor: String,
  /**
   * @description 选中时的文字颜色，以tn开头使用图鸟内置的颜色
   */
  activeTextColor: String,
  /**
   * @description 在日期范围内的背景颜色，以tn开头使用图鸟内置的颜色
   */
  rangeBgColor: String,
  /**
   * @description 在日期范围内的文字颜色，以tn开头使用图鸟内置的颜色
   */
  rangeTextColor: String,
  /**
   * @description 日期模式
   */
  mode: {
    type: String,
    values: calendarModes,
    default: "date"
  },
  /**
   * @description 日期最小值，支持的格式为 YYYY/MM/DD 或者 YYYY-MM-DD，如果没有设置最小值则以当前日期作为最小值
   */
  minDate: String,
  /**
   * @description 日期最大值，支持的格式为 YYYY/MM/DD 或者 YYYY-MM-DD，如果没有设置最大值则以当前年份最后一天作为最大值
   */
  maxDate: String,
  /**
   * @description 是否允许切换年份
   */
  allowChangeYear: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否允许切换月份
   */
  allowChangeMonth: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否显示农历
   */
  showLunar: Boolean,
  /**
   * @description 当 mode 为 range 时，开始时间的提示信息
   */
  rangeStartDesc: {
    type: String,
    default: "开始"
  },
  /**
   * @description 当 mode 为 range 时，结束时间的提示信息
   */
  rangeEndDesc: {
    type: String,
    default: "结束"
  }
});
const calendarEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isArray(value) || common_vendor.isString(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isArray(value) || common_vendor.isString(value);
  },
  /**
   * @description 年份切换事件
   */
  "change-year": (year) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(year);
  },
  /**
   * @description 月份切换事件
   */
  "change-month": (month) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(month);
  }
};
exports.calendarEmits = calendarEmits;
exports.calendarProps = calendarProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/calendar/src/calendar.js.map
