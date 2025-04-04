"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_shape = require("../../../constants/shape.js");
const uni_modules_tuniaouiVue3_constants_types = require("../../../constants/types.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
const tagShape = [
  ...uni_modules_tuniaouiVue3_constants_shape.componentShapes,
  "circleLeft",
  "circleRight"
];
const tagProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 按钮颜色类型
   */
  type: {
    type: String,
    values: uni_modules_tuniaouiVue3_constants_types.componentTypes,
    default: "primary"
  },
  /**
   * @description 背景颜色，以tn开头使用图鸟内置的颜色
   */
  bgColor: String,
  /**
   * @description 标签字体颜色，以tn开头使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 字体大小，默认单位 rpx
   */
  fontSize: String,
  /**
   * @description 宽度，默认单位 rpx
   */
  width: String,
  /**
   * @description 高度，默认单位 rpx
   */
  height: String,
  /**
   * @description 标签尺寸，内置`sm`、`lg`、`xl`，同时也可以传递指定的尺寸的值
   */
  size: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentSizeProp,
  /**
   * @description 标签形状
   */
  shape: {
    type: String,
    values: tagShape,
    default: ""
  },
  /**
   * @description 是否显示边框
   */
  border: Boolean,
  /**
   * @description 边框颜色，以tn开头使用图鸟内置的颜色
   */
  borderColor: String,
  /**
   * @description 边框加粗
   */
  borderBold: Boolean,
  /**
   * @description 自定义样式
   */
  customStyle: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentCustomStyleProp,
  /**
   * @description 自定义类
   */
  customClass: String
});
const tagEmits = {
  /**
   * @description 标签点击事件
   */
  click: () => {
    return true;
  }
};
exports.tagEmits = tagEmits;
exports.tagProps = tagProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tag/src/tag.js.map
