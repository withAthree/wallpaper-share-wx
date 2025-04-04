"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_picker_index = require("../../base/common-props/picker/index.js");
const dateTimePickerModes = [
  "year",
  "yearmonth",
  "date",
  "datetime",
  "time",
  "datetimeNoSecond",
  "timeNoSecond"
];
const dateTimePickerProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_picker_index.pickerBaseProps), {
  /**
   * @description 日期时间选择器绑定的值，支持的格式2019/12/27 12:00:00 2019-12-27 12:00:00
   */
  modelValue: {
    type: String,
    default: ""
  },
  /**
   * @description 显示隐藏日期时间选择器
   */
  open: Boolean,
  /**
   * @description 日期时间选择器类型
   */
  mode: {
    type: String,
    values: dateTimePickerModes,
    default: "date"
  },
  /**
   * @description 最小可选时间，格式为 YYYY/MM/DD HH:mm:ss 例如 2023/01/04 12:00:00
   */
  minTime: String,
  /**
   * @description 最大可选时间，格式为 YYYY/MM/DD HH:mm:ss 例如 2023/10/01 23:30:00
   */
  maxTime: String,
  /**
   * @description 是否初始化空值为当前时间
   */
  initCurrentDateTime: {
    type: Boolean,
    default: true
  },
  /**
   * @description 日期时间格式化
   */
  format: String
}));
const dateTimePickerEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isString(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isString(value);
  },
  "update:open": (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  confirm: (value) => {
    return common_vendor.isString(value);
  },
  cancel: () => {
    return true;
  },
  close: () => {
    return true;
  }
};
exports.dateTimePickerEmits = dateTimePickerEmits;
exports.dateTimePickerProps = dateTimePickerProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/date-time-picker/src/date-time-picker.js.map
