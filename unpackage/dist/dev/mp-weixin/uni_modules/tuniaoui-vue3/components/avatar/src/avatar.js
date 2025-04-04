"use strict";
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_imgMode = require("../../../constants/img-mode.js");
const uni_modules_tuniaouiVue3_constants_types = require("../../../constants/types.js");
const avatarShape = ["circle", "square"];
const avatarProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 头像地址(url地址和绝对地址)
   */
  url: String,
  /**
   * @descripttion 头像图标
   */
  icon: String,
  /**
   * @description 头像图标配置
   */
  iconConfig: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Object),
    default: () => {
      return {};
    }
  },
  /**
   * @description 头像颜色类型
   */
  type: {
    type: String,
    values: uni_modules_tuniaouiVue3_constants_types.componentTypes,
    default: ""
  },
  /**
   * @description 头像大小
   */
  size: {
    type: [String, Number]
  },
  /**
   * @description 头像形状
   */
  shape: {
    type: String,
    values: avatarShape,
    default: "circle"
  },
  /**
   * @description 头像图片模式
   */
  imgMode: {
    type: String,
    values: uni_modules_tuniaouiVue3_constants_imgMode.componentImgModes,
    default: "aspectFill"
  },
  /**
   * @description 背景颜色
   */
  bgColor: String,
  /**
   * @description 显示边框
   */
  border: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentBoolean,
  /**
   * @description 边框颜色
   */
  borderColor: String,
  /**
   * @description 是否加粗边框
   */
  borderBold: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentBoolean,
  /**
   * @description 显示阴影
   */
  shadow: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentBoolean,
  /**
   * @description 阴影颜色
   */
  shadowColor: String,
  /**
   * @description 角标内容
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
  }
});
const avatarEmits = {
  /**
   * @description 点击事件
   */
  click: () => {
    return true;
  }
};
exports.avatarEmits = avatarEmits;
exports.avatarProps = avatarProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/avatar/src/avatar.js.map
