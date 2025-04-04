"use strict";
const uni_modules_tuniaouiVue3_constants_zIndex = require("../../../constants/z-index.js");
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const bubbleBoxPosition = ["top", "bottom", "left", "right"];
const bubbleBoxProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 气泡弹出框选项数据
   */
  options: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return [];
    }
  },
  /**
   * @description 气泡弹出框位置
   */
  position: {
    type: String,
    values: bubbleBoxPosition,
    default: "top"
  },
  /**
   * @description 气泡弹出框宽度，默认单位 rpx
   */
  width: String,
  /**
   * @description 气泡弹出框高度，默认单位 rpx
   */
  height: String,
  /**
   * @description 气泡弹出框背景颜色，以tn开头使用图鸟内置的颜色
   */
  bgColor: String,
  /**
   * @description 气泡弹出框文字颜色，以tn开头使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 选项的内边距
   */
  optionItemPadding: String,
  /**
   * @description 是否禁止点击气泡弹出框选项
   */
  disabled: Boolean,
  /**
   * @description 点击选项后自动关闭气泡弹出框
   */
  autoClose: {
    type: Boolean,
    default: true
  },
  /**
   * @description ZIndex
   */
  zIndex: {
    type: Number,
    default: uni_modules_tuniaouiVue3_constants_zIndex.ZIndex.bubble
  }
});
const bubbleBoxEmits = {
  /**
   * @description 气泡框打开事件
   */
  open: () => {
    return true;
  },
  /**
   * @description 气泡框关闭事件
   */
  close: () => {
    return true;
  },
  /**
   * @description 气泡框选项点击事件
   */
  click: (index) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index);
  }
};
exports.bubbleBoxEmits = bubbleBoxEmits;
exports.bubbleBoxProps = bubbleBoxProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/bubble-box/src/bubble-box.js.map
