"use strict";
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const numberBoxProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 步进器绑定的值
   */
  modelValue: {
    type: Number,
    default: 0
  },
  /**
   * @description 步进器的尺寸
   */
  size: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentSizeProp,
  /**
   * @description 步进器的宽度
   */
  width: String,
  /**
   * @description 步进器的高度
   */
  height: String,
  /**
   * @description 文字大小
   */
  fontSize: String,
  /**
   * @description 步进器背景颜色，以tn开头则使用图鸟内置的颜色只支持普通颜色
   */
  bgColor: String,
  /**
   * @description 步进器字体颜色，以tn开头则使用图鸟内置的颜色只支持普通颜色
   */
  textColor: String,
  /**
   * @description 步进器的最小值
   */
  min: {
    type: Number,
    default: 0
  },
  /**
   * @description 步进器的最大值
   */
  max: {
    type: Number,
    default: 100
  },
  /**
   * @description 步进器的步长
   */
  step: {
    type: Number,
    default: 1
  },
  /**
   * @description 禁止步进器操作
   */
  disabled: Boolean,
  /**
   * @description 禁止步进器输入
   */
  inputDisabled: Boolean,
  /**
   * @description 输入框与键盘的间距，单位px
   */
  inputSpacing: {
    type: Number,
    default: 20
  },
  /**
   * @description 长按递增减
   */
  longPress: {
    type: Boolean,
    default: true
  },
  /**
   * @description 长按递增减的间隔时间，单位ms
   */
  longPressInterval: {
    type: Number,
    default: 250
  },
  /**
   * @description 值发生修改时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const numberBoxEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (val) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (val) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val);
  },
  [uni_modules_tuniaouiVue3_constants_event.INPUT_EVENT]: (val) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val);
  }
};
exports.numberBoxEmits = numberBoxEmits;
exports.numberBoxProps = numberBoxProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/number-box/src/number-box.js.map
