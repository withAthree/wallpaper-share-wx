"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_avatar_src_avatar = require("./avatar.js");
const avatarGroupProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 头像图标配置
   */
  iconConfig: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.iconConfig,
  /**
   * @description 头像颜色类型
   */
  type: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.type,
  /**
   * @description 头像大小
   */
  size: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.size,
  /**
   * @description 头像形状
   */
  shape: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.shape,
  /**
   * @description 头像图片模式
   */
  imgMode: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.imgMode,
  /**
   * @description 背景颜色
   */
  bgColor: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.bgColor,
  /**
   * @description 显示边框
   */
  border: {
    type: Boolean,
    default: true
  },
  /**
   * @description 边框颜色
   */
  borderColor: {
    type: String,
    default: "tn-white"
  },
  /**
   * @description 是否加粗边框
   */
  borderBold: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.borderBold,
  /**
   * @description 显示阴影
   */
  shadow: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.shadow,
  /**
   * @description 阴影颜色
   */
  shadowColor: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.shadowColor,
  /**
   * @description 头像角标配置
   */
  badgeConfig: uni_modules_tuniaouiVue3_components_avatar_src_avatar.avatarProps.badgeConfig,
  /**
   * @description 头像之间遮挡比例
   */
  gap: {
    type: [String, Number],
    default: 0.4
  }
});
const avatarGroupEmits = {
  /**
   * @description 点击头像
   */
  click: (index) => {
    return typeof index === "number";
  }
};
exports.avatarGroupEmits = avatarGroupEmits;
exports.avatarGroupProps = avatarGroupProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/avatar/src/avatar-group.js.map
