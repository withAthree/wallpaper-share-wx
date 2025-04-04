"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const indexListProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 数据源
   */
  data: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Object),
    default: () => {
      return {};
    }
  },
  /**
   * @description 索引列表的高度，单位 `px`，不传值则以当前窗口的高度为准
   */
  height: Number,
  /**
   * @description 标题吸顶距离，单位 `px`
   */
  stickyOffsetTop: {
    type: Number,
    default: 0
  },
  /**
   * @description 标题背景颜色，以tn开头使用图鸟内置的颜色
   */
  titleBgColor: String,
  /**
   * @description 标题文字颜色，以tn开头使用图鸟内置的颜色
   */
  titleColor: String,
  /**
   * @description 标题尺寸，内置 `sm`、`lg`、`xl`，同时也可以传递指定的尺寸的值
   */
  titleSize: String,
  /**
   * @description 是否显示右侧索引列表
   */
  showKeysList: {
    type: Boolean,
    default: true
  }
});
const indexListEmits = {
  /**
   * @description 点击索引列表时触发
   */
  click: (key) => {
    return common_vendor.isString(key);
  }
};
exports.indexListEmits = indexListEmits;
exports.indexListProps = indexListProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/index-list/src/index-list.js.map
