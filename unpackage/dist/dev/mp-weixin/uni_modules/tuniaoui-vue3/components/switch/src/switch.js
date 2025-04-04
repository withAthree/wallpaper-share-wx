"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
const switchShapes = ["square", "round"];
const switchProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 状态绑定的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: false
  },
  /**
   * @description 按钮形状
   */
  shape: {
    type: String,
    values: switchShapes,
    default: "round"
  },
  /**
   * @description 按钮尺寸
   */
  size: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useFormSizeProps,
  /**
   * @description 按钮的宽度
   */
  width: {
    type: [String, Number]
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
   * @description 是否禁用
   */
  disabled: Boolean,
  /**
   * @description 是否显示加载动画
   */
  loading: Boolean,
  /**
   * @description 未选中时的颜色，以tn开头则使用图鸟内置的颜色只支持普通颜色
   */
  inactiveColor: String,
  /**
   * @description 选中时的颜色，以tn开头则使用图鸟内置的颜色只支持普通颜色
   */
  activeColor: String,
  /**
   * @description 未选中时显示的文本，如果设置了该值，则不显示图标
   */
  inactiveText: String,
  /**
   * @description 选中时显示的文本，如果设置了该值，则不显示图标
   */
  activeText: String,
  /**
   * @description 未选中时显示的图标
   */
  inactiveIcon: String,
  /**
   * @description 选中时显示的图标
   */
  activeIcon: String,
  /**
   * @description 未选中时的值
   */
  inactiveValue: {
    type: [String, Number, Boolean],
    default: false
  },
  /**
   * @description 选中时的值
   */
  activeValue: {
    type: [String, Number, Boolean],
    default: true
  },
  /**
   * @description 值发生修改时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true
  },
  /**
   * @description 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换
   */
  beforeChange: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Function)
  }
});
const switchEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value) || uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value) || uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  }
};
exports.switchEmits = switchEmits;
exports.switchProps = switchProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/switch/src/switch.js.map
