"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const rateProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 选中的数量
   */
  modelValue: {
    type: Number,
    default: 0
  },
  /**
   * @description 最小值
   */
  min: {
    type: Number,
    default: 0
  },
  /**
   * @description 最大值
   */
  max: {
    type: Number,
    default: 5
  },
  /**
   * @description 是否允许半选
   */
  allowHalf: Boolean,
  /**
   * @description 是否只读
   */
  readonly: Boolean,
  /**
   * @description 尺寸大小，可选值为 `sm`、`lg`、`xl` 或者设置指定的尺寸
   */
  size: String,
  /**
   * @description 未选中时的图标
   */
  inactiveIcon: {
    type: String,
    default: "star"
  },
  /**
   * @description 选中时的图标
   */
  activeIcon: {
    type: String,
    default: "star-fill"
  },
  /**
   * @description 未选中时的颜色，以tn开头使用图鸟内置的颜色
   */
  inactiveColor: String,
  /**
   * @description 选中时的颜色，以tn开头使用图鸟内置的颜色
   */
  activeColor: String,
  /**
   * @description 每个图标的间距，默认单位 `rpx`
   */
  gutter: String,
  /**
   * @description 自定义图标信息
   */
  customData: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Object),
    default: () => {
      return {};
    }
  },
  /**
   * @description 值发生修改时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const rateEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value);
  }
};
exports.rateEmits = rateEmits;
exports.rateProps = rateProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/rate/src/rate.js.map
