"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_subsection_index = require("../../base/common-props/subsection/index.js");
const subsectionItemProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_subsection_index.subsectionBaseProps), {
  /**
   * @description 标题
   */
  title: String
}));
const subsectionItemEmits = {
  /**
   * @description 点击事件
   */
  click: (title) => {
    return common_vendor.isString(title);
  }
};
exports.subsectionItemEmits = subsectionItemEmits;
exports.subsectionItemProps = subsectionItemProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/subsection/src/subsection-item.js.map
