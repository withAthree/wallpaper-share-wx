"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_checkbox_index = require("../../base/common-props/checkbox/index.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
const checkboxProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_checkbox_index.checkboxBaseProps), {
  /**
   * @description 绑定的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  /**
   * @description 用于标记多个复选框时的唯一标识
   */
  label: {
    type: [String, Number]
  },
  /**
   * @description 用于标记当前复选框是否为不确定状态，一般用于全选
   */
  indeterminate: Boolean,
  /**
   * @description 复选框选中时的值
   */
  activeValue: {
    type: [String, Number, Boolean],
    default: true
  },
  /**
   * @description 复选框未选中时的值
   */
  inactiveValue: {
    type: [String, Number, Boolean],
    default: false
  },
  /**
   * @description 自定义样式
   */
  customStyle: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentCustomStyleProp,
  /**
   * @description 自定义类名
   */
  customClass: String,
  /**
   * @description 值发生修改时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
}));
const checkboxEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value) || uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value) || uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  }
};
exports.checkboxEmits = checkboxEmits;
exports.checkboxProps = checkboxProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/checkbox/src/checkbox.js.map
