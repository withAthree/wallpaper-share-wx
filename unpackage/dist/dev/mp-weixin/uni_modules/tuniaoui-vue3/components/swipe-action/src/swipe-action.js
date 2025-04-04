"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_swipeAction_index = require("../../base/common-props/swipe-action/index.js");
const swipeActionProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_swipeAction_index.swipeActionBaseProps), {
  /**
   * @description 只允许一个item处于打开状态
   */
  exclusive: {
    type: Boolean,
    default: true
  }
}));
const swipeActionEmits = {
  /**
   * @description 打开时触发
   */
  open: (index) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index);
  },
  /**
   * @description 点击选项时触发
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  select: (index, optionIndex) => {
    return true;
  }
};
exports.swipeActionEmits = swipeActionEmits;
exports.swipeActionProps = swipeActionProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/swipe-action/src/swipe-action.js.map
