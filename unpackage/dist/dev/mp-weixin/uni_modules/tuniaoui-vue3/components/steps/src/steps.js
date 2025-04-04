"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_steps_index = require("../../base/common-props/steps/index.js");
const stepModes = ["dot", "number", "dotIcon", "icon"];
const stepsProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_steps_index.stepsBaseProps), {
  /**
   * @description 当前激活步骤绑定的index
   */
  modelValue: Number,
  /**
   * @description 步骤条模式
   */
  mode: {
    type: String,
    values: stepModes,
    default: "dot"
  }
}));
const stepsEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (index) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (index) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index);
  }
};
exports.stepsEmits = stepsEmits;
exports.stepsProps = stepsProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/steps/src/steps.js.map
