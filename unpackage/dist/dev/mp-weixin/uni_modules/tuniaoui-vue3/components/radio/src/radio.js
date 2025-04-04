"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_radio_index = require("../../base/common-props/radio/index.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
const radioProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_radio_index.radioBaseProps), {
  /**
   * @description radio单选框绑定的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  /**
   * @description radio单选框的值，在使用单选组时，radio的值就是label
   */
  label: {
    type: [String, Number, Boolean],
    default: ""
  },
  /**
   * @description 自定义样式
   */
  customStyle: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentCustomStyleProp,
  /**
   * @description 自定义类名
   */
  customClass: String
}));
const radioEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value) || uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value) || uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  }
};
exports.radioEmits = radioEmits;
exports.radioProps = radioProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/radio/src/radio.js.map
