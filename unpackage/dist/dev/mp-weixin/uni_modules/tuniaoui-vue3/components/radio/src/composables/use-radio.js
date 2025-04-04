"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_components_radio_src_composables_useRadioCommonProps = require("./use-radio-common-props.js");
const useRadio = (props, emits) => {
  const _a = uni_modules_tuniaouiVue3_components_radio_src_composables_useRadioCommonProps.useRadioCommonProps(props), radioGroup = _a.radioGroupContext, disabled = _a.disabled, labelDisabled = _a.labelDisabled;
  const isGroup = common_vendor.computed(() => {
    return !!radioGroup;
  });
  const modelValue = common_vendor.computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, val);
      }
    }
  });
  const radioClickEvent = (type) => {
    if (disabled.value)
      return;
    if (type === "label" && labelDisabled.value)
      return;
    modelValue.value = props.label;
    common_vendor.nextTick$1(() => {
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, props.label);
    });
  };
  return {
    isGroup,
    modelValue,
    radioClickEvent
  };
};
exports.useRadio = useRadio;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/radio/src/composables/use-radio.js.map
