"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_progress_index = require("../../base/common-props/progress/index.js");
const circleProgressProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_progress_index.propgressBaseProps), {
  /**
   * @description 圆环的半径，单位 px，只支持传递固定的值
   */
  radius: {
    type: Number,
    default: 50
  },
  /**
   * @description 圆环的宽度，单位 px，只支持传递固定的值
   */
  ringWidth: {
    type: Number,
    default: 7
  }
}));
exports.circleProgressProps = circleProgressProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/circle-progress/src/circle-progress.js.map
