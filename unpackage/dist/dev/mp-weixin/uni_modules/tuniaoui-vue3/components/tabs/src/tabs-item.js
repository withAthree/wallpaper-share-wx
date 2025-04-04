"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_tabs_index = require("../../base/common-props/tabs/index.js");
const tabsItemProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_tabs_index.tabsBaseProps), {
  /**
   * @description 唯一标识
   */
  name: {
    type: [String, Number]
  },
  /**
   * @description 标题
   */
  title: {
    type: String,
    required: true
  },
  /**
   * @description 角标配置
   */
  badgeConfig: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Object),
    default: () => {
      return {};
    }
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean
}));
const tabsItemEmits = {
  /**
   * @description 点击事件
   */
  click: () => {
    return true;
  }
};
exports.tabsItemEmits = tabsItemEmits;
exports.tabsItemProps = tabsItemProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabs/src/tabs-item.js.map
