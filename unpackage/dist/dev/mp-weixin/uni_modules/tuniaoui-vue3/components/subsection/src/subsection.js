"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_subsection_index = require("../../base/common-props/subsection/index.js");
const subsectionMode = ["default", "button"];
const subsectionProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_subsection_index.subsectionBaseProps), {
  /**
   * @description 当前选中item索引的绑定值
   */
  modelValue: {
    type: Number,
    default: 0
  },
  /**
   * @description 模式，`default`为默认模式，`button`为按钮模式
   */
  mode: {
    type: String,
    values: subsectionMode,
    default: "default"
  },
  /**
   * @description 尺寸，默认可以设置 `sm`、`lg`、`xl`，也可以传入指定的尺寸设置字体的尺寸大小
   */
  size: String,
  /**
   * @description 圆角的值，只作用在最外层的两个选择器上，默认单位 `rpx`
   */
  radius: {
    type: String,
    default: "8"
  }
}));
const subsectionEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (index) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index);
  },
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (index) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index);
  }
};
exports.subsectionEmits = subsectionEmits;
exports.subsectionProps = subsectionProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/subsection/src/subsection.js.map
