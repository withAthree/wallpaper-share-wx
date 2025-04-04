"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
const sliderProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 滑块绑定的值
   */
  modelValue: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType([Number, Array]),
    default: 0
  },
  /**
   * @description 滑动条的尺寸
   */
  size: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useFormSizeProps,
  /**
   * @description 滑块的尺寸
   */
  sliderBarSize: {
    type: [String, Number]
  },
  /**
   * @description 滑动条的高度
   */
  sliderHeight: {
    type: [String, Number]
  },
  /**
   * @description 激活时的颜色，以tn开头则使用图鸟内置的颜色只支持普通颜色
   */
  activeColor: {
    type: String,
    default: ""
  },
  /**
   * @description 非激活时的颜色，以tn开头则使用图鸟内置的颜色只支持普通颜色
   */
  inactiveColor: {
    type: String,
    default: ""
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
  /**
   * @description 滑动条的步进值
   */
  step: {
    type: Number,
    default: 1
  },
  /**
   * @description 滑动条的最小值
   */
  min: {
    type: Number,
    default: 0
  },
  /**
   * @description 滑动条的最大值
   */
  max: {
    type: Number,
    default: 100
  },
  /**
   * @description 值发生修改时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const sliderEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isArray(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isArray(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.INPUT_EVENT]: (value) => {
    return common_vendor.isArray(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  }
};
exports.sliderEmits = sliderEmits;
exports.sliderProps = sliderProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/slider/src/slider.js.map
