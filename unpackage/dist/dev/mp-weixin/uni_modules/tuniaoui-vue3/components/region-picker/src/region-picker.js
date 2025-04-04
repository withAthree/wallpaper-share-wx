"use strict";
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_picker_index = require("../../base/common-props/picker/index.js");
const regionPickerProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_picker_index.pickerBaseProps), {
  /**
   * @description 地区选择器绑定的值，可以传递省市区的code和name，["11", "1101", "110101"] || ["广东省", "广州市", "天河区"]
   */
  modelValue: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: []
  },
  /**
   * @description 显示/隐藏地区选择器
   */
  open: Boolean
}));
const regionPickerEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isArray(value);
  },
  "update:open": (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value, item) => {
    return true;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  confirm: (value, item) => {
    return true;
  },
  cancel: () => {
    return true;
  },
  close: () => {
    return true;
  }
};
exports.regionPickerEmits = regionPickerEmits;
exports.regionPickerProps = regionPickerProps;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/region-picker/src/region-picker.js.map
