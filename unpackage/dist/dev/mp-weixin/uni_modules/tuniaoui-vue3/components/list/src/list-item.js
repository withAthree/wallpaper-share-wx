"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
const listProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 列表宽度
   */
  width: {
    type: String
  },
  /**
   * @description 列表高度
   */
  height: {
    type: String
  },
  /**
   * @description 列表文字大小
   */
  fontSize: String,
  /**
   * @description 背景颜色，以tn开头则使用图鸟内置的颜色
   */
  bgColor: String,
  /**
   * @description 文字颜色，以tn开头则使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 显示右侧图标的名称，不填写则不显示
   */
  rightIcon: String,
  /**
   * @description 显示右侧图标的颜色，以tn开头则使用图鸟内置的颜色
   */
  rightIconColor: String,
  /**
   * @description 是否显示圆角
   */
  radius: Boolean,
  /**
   * @description 是否显示底部边框
   */
  bottomBorder: Boolean,
  /**
   * @description 底部边框是否有缩进
   */
  bottomBorderIndent: Boolean,
  /**
   * @description 点击时加载的类名
   */
  hoverClass: {
    type: String,
    default: ""
  },
  /**
   * @description 自定义样式
   */
  customStyle: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentCustomStyleProp,
  /**
   * @description 自定义类
   */
  customClass: String
});
const listEmits = {
  /**
   * @description 点击事件
   */
  click: () => {
    return true;
  }
};
exports.listEmits = listEmits;
exports.listProps = listProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/list/src/list-item.js.map
