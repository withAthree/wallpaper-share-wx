"use strict";
require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../../utils/vue/props/runtime.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../composables/use-component-common-props/index.js");
const uni_modules_tuniaouiVue3_components_base_types_checkbox_index = require("../../types/checkbox/index.js");
const checkboxBaseProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 复选框尺寸
   */
  size: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useFormSizeProps,
  /**
   * @description 复选框的形状
   */
  checkedShape: {
    type: String,
    values: uni_modules_tuniaouiVue3_components_base_types_checkbox_index.checkboxCheckedShapes
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
  /**
   * @description 是否禁用点击标签切换
   */
  labelDisabled: Boolean,
  /**
   * @description 是否显示边框
   */
  border: Boolean,
  /**
   * @description 激活时的颜色，以tn开头则使用图鸟内置的颜色只支持普通颜色
   */
  activeColor: {
    type: String,
    default: ""
  }
});
exports.checkboxBaseProps = checkboxBaseProps;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/base/common-props/checkbox/index.js.map
