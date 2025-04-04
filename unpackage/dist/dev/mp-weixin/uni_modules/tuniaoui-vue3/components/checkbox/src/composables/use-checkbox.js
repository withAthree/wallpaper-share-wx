"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
require("../../../form/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_components_checkbox_src_composables_useCheckboxCommonProps = require("./use-checkbox-common-props.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const hasLabelInGroup = (groupValue, label) => {
  return groupValue.includes(label);
};
const useCheckbox = (props) => {
  const emit = common_vendor.getCurrentInstance().emit;
  const _a = uni_modules_tuniaouiVue3_components_checkbox_src_composables_useCheckboxCommonProps.useCheckboxCommonProps(props), checkboxGroup = _a.checkboxGroup, disabled = _a.disabled, maxDisabled = _a.maxDisabled, labelDisabled = _a.labelDisabled;
  const formItem = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem().formItem;
  const isGroup = common_vendor.computed(() => {
    return !!checkboxGroup;
  });
  const selected = common_vendor.computed(() => {
    if (isGroup.value) {
      return hasLabelInGroup(checkboxGroup.modelValue, props.label);
    } else {
      return props.modelValue === props.activeValue;
    }
  });
  const handleCheckboxClick = (type) => {
    var _a2;
    if (disabled.value || maxDisabled.value)
      return;
    if (type === "label" && labelDisabled.value)
      return;
    if (isGroup.value) {
      checkboxGroup.changeEvent(props.label);
    } else {
      const modelValue = selected.value ? props.inactiveValue : props.activeValue;
      emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, modelValue);
      common_vendor.nextTick$1(() => {
        emit(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, modelValue);
      });
      if (props.validateEvent) {
        (_a2 = formItem === null || formItem === void 0 ? void 0 : formItem.validate) === null || _a2 === void 0 ? void 0 : _a2.call(formItem, "change").catch((err) => {
          uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
        });
      }
    }
  };
  return {
    isGroup,
    selected,
    handleCheckboxClick
  };
};
exports.useCheckbox = useCheckbox;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/checkbox/src/composables/use-checkbox.js.map
