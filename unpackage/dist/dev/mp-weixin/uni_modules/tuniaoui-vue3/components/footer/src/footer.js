"use strict";
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const footerFixedMode = ["page", "container"];
const footerProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 页脚内容
   */
  content: String,
  /**
   * @description 页脚导航信息
   */
  navigator: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => {
      return [];
    }
  },
  /**
   * @description 内容字体颜色，以tn开头使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 页脚字体尺寸大小，内置了 `sm` 、 `lg` 、 `xl` 三种尺寸，可以传递指定的尺寸设置
   */
  size: String,
  /**
   * @description 导航信息字体颜色，以tn开头使用图鸟内置的颜色
   */
  navigatorTextColor: String,
  /**
   * @description 页脚距离底部的距离，默认单位 rpx
   */
  offsetBottom: String,
  /**
   * @description 是否固定在底部
   */
  fixed: {
    type: Boolean,
    default: true
  },
  /**
   * @description 固定在底部的方式，`page`  固定在页面底部，`container`  固定在容器底部
   */
  fixedMode: {
    type: String,
    values: footerFixedMode,
    default: "container"
  },
  /**
   * @description 是否开启底部安全边距
   */
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  }
});
const footerEmits = {
  /**
   * @description 点击页脚内容
   */
  click: () => {
    return true;
  },
  /**
   * @description 点击页脚导航
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigatorClick: (navigator) => {
    return true;
  }
};
exports.footerEmits = footerEmits;
exports.footerProps = footerProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/footer/src/footer.js.map
