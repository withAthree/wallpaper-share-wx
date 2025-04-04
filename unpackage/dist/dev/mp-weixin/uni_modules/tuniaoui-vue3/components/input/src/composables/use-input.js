"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_libs_lodash_trim = require("../../../../libs/lodash/trim.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
const uni_modules_tuniaouiVue3_utils_vue_icon = require("../../../../utils/vue/icon.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useToggle_index = require("../../../../hooks/use-toggle/index.js");
require("../../../../hooks/use-z-index/index.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps = require("../../../form/src/composables/use-form-common-props.js");
const useInput = (props, emits) => {
  const _a = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem(), form = _a.form, formItem = _a.formItem;
  const inputText = common_vendor.ref(String(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props.modelValue, "")));
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val) => {
    var _a2;
    inputText.value = String(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(val, ""));
    if (props.validateEvent) {
      (_a2 = formItem === null || formItem === void 0 ? void 0 : formItem.validate) === null || _a2 === void 0 ? void 0 : _a2.call(formItem, "change").catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
      });
    }
  });
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useToggle_index.useToggle(false), 2), passwordVisible = _b[0], togglePasswordVisible = _b[1];
  const needStatusIcon = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(form === null || form === void 0 ? void 0 : form.statusIcon, false);
  });
  const validateState = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(formItem === null || formItem === void 0 ? void 0 : formItem.validateState, "");
  });
  const validateIcon = common_vendor.computed(() => {
    return validateState.value && uni_modules_tuniaouiVue3_utils_vue_icon.FormValidateIconsMap[validateState.value];
  });
  const passwordIcon = common_vendor.computed(() => {
    return passwordVisible.value ? "eye-hide" : "eye";
  });
  const showIcon = common_vendor.computed(() => {
    let status = false;
    if (validateState.value && needStatusIcon.value && validateIcon.value)
      status = true;
    if (props.showPassword)
      status = true;
    if (props.rightIcon)
      status = true;
    if (props.clearable)
      status = true;
    return status;
  });
  const disabled = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormDisabled(props.disabled);
  const showWordLimit = common_vendor.computed(() => {
    return props.type === "textarea" && !!(props === null || props === void 0 ? void 0 : props.maxlength) && !!(props === null || props === void 0 ? void 0 : props.showWordLimit);
  });
  const currentWordCount = common_vendor.computed(() => {
    var _a2;
    if (props.showWordLimit && props.type === "textarea") {
      return ((_a2 = inputText.value) === null || _a2 === void 0 ? void 0 : _a2.length) || 0;
    }
    return 0;
  });
  const inputInputEvent = (event) => {
    const value = event.detail.value;
    _updateInputText(value);
  };
  const inputFocusEvent = (event) => {
    emits("focus", event);
  };
  const inputBlurEvent = (event) => {
    var _a2;
    emits("blur", event);
    if (props.validateEvent) {
      (_a2 = formItem === null || formItem === void 0 ? void 0 : formItem.validate) === null || _a2 === void 0 ? void 0 : _a2.call(formItem, "blur").catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
      });
    }
  };
  const confirmEvent = (event) => {
    const value = event.detail.value;
    emits("confirm", _formatInputText(value));
  };
  const clearClickEvent = () => {
    if (disabled.value)
      return;
    _updateInputText("");
    emits("clear");
  };
  const _updateInputText = (value) => {
    value = props.trim ? uni_modules_tuniaouiVue3_libs_lodash_trim.trim(value) : value;
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, _formatInputText(value));
    common_vendor.nextTick$1(() => {
      emits(uni_modules_tuniaouiVue3_constants_event.INPUT_EVENT, _formatInputText(value));
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, _formatInputText(value));
    });
  };
  const inputClickEvent = () => {
    if (props.type === "select") {
      emits("click");
    }
  };
  const _formatInputText = (value) => {
    if (value === "")
      return "";
    if (props.type === "number" || props.type === "digit")
      return Number.parseFloat(value);
    return value;
  };
  return {
    inputText,
    needStatusIcon,
    validateState,
    validateIcon,
    passwordVisible,
    passwordIcon,
    showIcon,
    disabled,
    showWordLimit,
    currentWordCount,
    togglePasswordVisible,
    inputInputEvent,
    inputFocusEvent,
    inputBlurEvent,
    clearClickEvent,
    confirmEvent,
    inputClickEvent
  };
};
exports.useInput = useInput;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/input/src/composables/use-input.js.map
