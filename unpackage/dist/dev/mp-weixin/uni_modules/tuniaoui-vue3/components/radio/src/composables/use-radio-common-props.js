"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_radio = require("../../../../tokens/radio.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps = require("../../../form/src/composables/use-form-common-props.js");
const useRadioCommonProps = (props) => {
  const radioGroupContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_radio.radioGroupKey, void 0);
  const size = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormSize(common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyDoubleVariableInDefault(props === null || props === void 0 ? void 0 : props.size, radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.size);
  }));
  const disabled = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormDisabled(common_vendor.computed(() => {
    return (props === null || props === void 0 ? void 0 : props.disabled) || (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.disabled) || false;
  }));
  const labelDisabled = common_vendor.computed(() => {
    return (props === null || props === void 0 ? void 0 : props.labelDisabled) || (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.labelDisabled) || false;
  });
  const border = common_vendor.computed(() => {
    return (props === null || props === void 0 ? void 0 : props.border) || (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.border) || false;
  });
  const activeColor = common_vendor.computed(() => {
    return (props === null || props === void 0 ? void 0 : props.activeColor) || (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.activeColor);
  });
  return {
    radioGroupContext,
    size,
    disabled,
    labelDisabled,
    border,
    activeColor
  };
};
exports.useRadioCommonProps = useRadioCommonProps;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/radio/src/composables/use-radio-common-props.js.map
