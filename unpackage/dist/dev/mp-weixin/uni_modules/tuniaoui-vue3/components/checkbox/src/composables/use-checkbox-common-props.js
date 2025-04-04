"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_checkbox = require("../../../../tokens/checkbox.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps = require("../../../form/src/composables/use-form-common-props.js");
const useCheckboxCommonProps = (props) => {
  const checkboxGroup = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_checkbox.checkboxGroupKey, void 0);
  const size = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormSize(common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyDoubleVariableInDefault(props === null || props === void 0 ? void 0 : props.size, checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.size);
  }));
  const checkedShape = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyDoubleVariableInDefault(props === null || props === void 0 ? void 0 : props.checkedShape, checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.checkedShape, "square");
  });
  const disabled = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormDisabled(common_vendor.computed(() => {
    return (props === null || props === void 0 ? void 0 : props.disabled) || (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || false;
  }));
  const maxDisabled = common_vendor.computed(() => {
    return (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.modelValue) && (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.max) && (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.modelValue.length) >= (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.max) && !(checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.modelValue.includes(props.label));
  });
  const labelDisabled = common_vendor.computed(() => {
    return (props === null || props === void 0 ? void 0 : props.labelDisabled) || (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.labelDisabled) || false;
  });
  const border = common_vendor.computed(() => {
    return (props === null || props === void 0 ? void 0 : props.border) || (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.border) || false;
  });
  const activeColor = common_vendor.computed(() => {
    return (props === null || props === void 0 ? void 0 : props.activeColor) || (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.activeColor);
  });
  return {
    checkboxGroup,
    size,
    checkedShape,
    disabled,
    maxDisabled,
    labelDisabled,
    border,
    activeColor
  };
};
exports.useCheckboxCommonProps = useCheckboxCommonProps;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/checkbox/src/composables/use-checkbox-common-props.js.map
