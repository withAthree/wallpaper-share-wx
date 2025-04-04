"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_progress_index = require("../../base/common-props/progress/index.js");
const lineProgressProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_progress_index.propgressBaseProps), {
  /**
   * @description 进度条高度
   */
  height: {
    type: [String, Number],
    default: 20
  },
  /**
   * @description 是否显示条纹
   */
  stripe: Boolean,
  /**
   * @description 条纹是否有动画
   */
  stripeAnimated: {
    type: Boolean,
    default: true
  }
}));
exports.lineProgressProps = lineProgressProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/line-progress/src/line-progress.js.map
