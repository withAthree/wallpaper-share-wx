"use strict";
require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../../utils/vue/props/runtime.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_constants_size = require("../../../../constants/size.js");
const useComponentBoolean = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProp({
  type: [Boolean, void 0],
  default: void 0
});
const useComponentSizeProp = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProp({
  type: String,
  values: uni_modules_tuniaouiVue3_constants_size.componentSizes,
  required: false
});
const useFormSizeProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProp({
  type: String,
  values: uni_modules_tuniaouiVue3_constants_size.formComponentSizes,
  required: false
});
const useComponentCustomStyleProp = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProp({
  type: Object,
  default: () => {
    return {};
  }
});
const useComponentIndexProp = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProp({
  type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType([String, Number]),
  default: () => {
    return uni_modules_tuniaouiVue3_utils_rand.generateId();
  }
});
const useComponentSafeAreaInsetBottomProp = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProp({
  type: Boolean,
  default: true
});
exports.useComponentBoolean = useComponentBoolean;
exports.useComponentCustomStyleProp = useComponentCustomStyleProp;
exports.useComponentIndexProp = useComponentIndexProp;
exports.useComponentSafeAreaInsetBottomProp = useComponentSafeAreaInsetBottomProp;
exports.useComponentSizeProp = useComponentSizeProp;
exports.useFormSizeProps = useFormSizeProps;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/base/composables/use-component-common-props/index.js.map
