"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_constants_zIndex = require("../../../constants/z-index.js");
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
require("../../../libs/lodash/_baseToString.js");
const keyboardMode = ["number", "digit", "idcard", "random", "car"];
const carKeyboardLang = ["cn", "en"];
const keyboardProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 键盘输入绑定的值
   */
  modelValue: {
    type: String,
    default: ""
  },
  /**
   * @description 是否显示键盘
   */
  show: {
    type: Boolean,
    default: false
  },
  /**
   * @description 键盘类型
   */
  mode: {
    type: String,
    values: keyboardMode,
    default: "number"
  },
  /**
   * @description 车牌键盘中/英文模式，在 `mode` 为 `car` 时生效
   */
  carLang: {
    type: String,
    values: carKeyboardLang,
    default: "cn"
  },
  /**
   * @description 点击按钮是否有震动效果
   */
  vibrate: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否允许长按删除删除内容
   */
  longPressDelete: {
    type: Boolean,
    default: true
  },
  /**
   * @description 禁止键盘输入
   */
  disabled: Boolean,
  /**
   * @description 点击遮罩关闭键盘
   */
  overlayCloseable: {
    type: Boolean,
    default: true
  },
  /**
   * @description ZIndex
   */
  zIndex: {
    type: Number,
    default: uni_modules_tuniaouiVue3_constants_zIndex.ZIndex.popup
  }
});
const keyboardEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isString(value);
  },
  "update:show": (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  "update:carLangMode": (value) => {
    return value === "cn" || value === "en";
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => {
    return common_vendor.isString(value);
  },
  /**
   * @description 键盘关闭事件
   */
  close: () => {
    return true;
  },
  /**
   * @description 退格事件
   */
  backspace: () => {
    return true;
  },
  /**
   * @description 确认事件
   */
  confirm: () => {
    return true;
  }
};
exports.keyboardEmits = keyboardEmits;
exports.keyboardProps = keyboardProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/keyboard/src/keyboard.js.map
