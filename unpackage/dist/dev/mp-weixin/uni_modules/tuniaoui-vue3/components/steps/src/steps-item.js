"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_steps_index = require("../../base/common-props/steps/index.js");
const stepProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_steps_index.stepsBaseProps), {
  /**
   * @description 标题
   */
  title: String,
  /**
   * @description 默认的图标
   */
  icon: String,
  /**
   * @description 激活时的图标
   */
  activeIcon: String
}));
const stepEmits = {
  /**
   * @description 点击事件
   */
  click: () => {
    return true;
  }
};
exports.stepEmits = stepEmits;
exports.stepProps = stepProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/steps/src/steps-item.js.map
