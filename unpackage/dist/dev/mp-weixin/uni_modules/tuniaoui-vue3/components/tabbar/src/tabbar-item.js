"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_tabbar_index = require("../../base/common-props/tabbar/index.js");
const tabbarItemProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_tabbar_index.tabbarBaseProps), {
  /**
   * @description item的唯一标识，与modelValue对应
   */
  name: {
    type: [String, Number]
  },
  /**
   * @description 图标
   */
  icon: String,
  /**
   * @description 选中时的图标
   */
  activeIcon: String,
  /**
   * @description 文字
   */
  text: String,
  /**
   * @description item是否凸起
   */
  bulge: Boolean,
  /**
   * @description 凸起按钮背景颜色
   */
  bulgeBgColor: String,
  /**
   * @description 凸起按钮字体颜色
   */
  bulgeTextColor: String,
  /**
   * @description 角标的值
   */
  badge: {
    type: [String, Number]
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
const tabbatItemEmits = {
  /**
   * @description 点击事件
   */
  click: () => {
    return true;
  }
};
exports.tabbarItemProps = tabbarItemProps;
exports.tabbatItemEmits = tabbatItemEmits;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabbar/src/tabbar-item.js.map
