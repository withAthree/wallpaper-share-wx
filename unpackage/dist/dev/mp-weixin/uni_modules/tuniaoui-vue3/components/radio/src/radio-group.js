"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_radio_index = require("../../base/common-props/radio/index.js");
const radioGroupProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_radio_index.radioBaseProps), {
  /**
   * @description radio单选组绑定的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  /**
   * @description 每个选项独占一行
   */
  wrap: {
    type: Boolean,
    default: false
  },
  /**
   * @description 值发生修改时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
}));
const radioGroupEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value) || uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value) || uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  }
};
exports.radioGroupEmits = radioGroupEmits;
exports.radioGroupProps = radioGroupProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/radio/src/radio-group.js.map
