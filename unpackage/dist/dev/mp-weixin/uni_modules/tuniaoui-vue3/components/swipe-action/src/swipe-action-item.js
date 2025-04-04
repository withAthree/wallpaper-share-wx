"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_swipeAction_index = require("../../base/common-props/swipe-action/index.js");
const swipeActionItemProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_swipeAction_index.swipeActionBaseProps), {
  /**
   * @description 菜单配置项
   */
  options: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return [];
    }
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
  /**
   * @description 滑动阈值，单位 px，大于该值则滑动动作生效
   */
  threshold: {
    type: Number,
    default: 20
  }
}));
exports.swipeActionItemProps = swipeActionItemProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/swipe-action/src/swipe-action-item.js.map
