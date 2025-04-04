"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useLongPress_index = require("../../../../hooks/use-long-press/index.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const useNumberBox = (props) => {
  const emit = common_vendor.getCurrentInstance().emit;
  const formItem = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem().formItem;
  const inputValue = common_vendor.ref(0);
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val) => {
    const value = uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(val, 0);
    inputValue.value = Math.max(props.min, Math.min(value, props.max));
  }, {
    immediate: true
  });
  const step = common_vendor.computed(() => {
    return props.step || 1;
  });
  const operationEvent = (type) => {
    if (props.disabled)
      return;
    let value = inputValue.value;
    if (type === "minus")
      value -= step.value;
    else if (type === "plus")
      value += step.value;
    if (value < props.min) {
      value = props.min;
      props.longPress && clearLongPressTimer();
    }
    if (value > props.max) {
      value = props.max;
      props.longPress && clearLongPressTimer();
    }
    updateNumberBoxValue(value);
  };
  const _a = uni_modules_tuniaouiVue3_hooks_useLongPress_index.useLongPress(operationEvent, common_vendor.toRef(props, "longPress"), props.longPressInterval), clearLongPressTimer = _a.clearLongPressTimer, handleOperationEvent = _a.handleLongPressEvent;
  const numberBoxInputEvent = (e) => {
    const inputEventValue = e.detail.value || 0;
    let value = Number(inputEventValue);
    if (value < props.min) {
      value = props.min;
    }
    if (value > props.max) {
      value = props.max;
    }
    emit(uni_modules_tuniaouiVue3_constants_event.INPUT_EVENT, inputEventValue);
    if (props.validateEvent) {
      formItem === null || formItem === void 0 ? void 0 : formItem.validate("input").catch(() => {
      });
    }
    updateNumberBoxValue(value);
  };
  const updateNumberBoxValue = (value) => {
    const stepValueArray = step.value.toString().split(".");
    const decimalCount = stepValueArray.length > 1 ? stepValueArray[1].length : 0;
    value = Number(value.toFixed(decimalCount));
    common_vendor.nextTick$1(() => {
      setTimeout(() => {
        inputValue.value = value;
      }, 0);
    });
    emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    common_vendor.nextTick$1(() => {
      var _a2;
      emit(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
      if (props.validateEvent) {
        (_a2 = formItem === null || formItem === void 0 ? void 0 : formItem.validate) === null || _a2 === void 0 ? void 0 : _a2.call(formItem, "change").catch((err) => {
          uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
        });
      }
    });
  };
  return {
    inputValue,
    handleOperationEvent,
    clearLongPressTimer,
    numberBoxInputEvent
  };
};
exports.useNumberBox = useNumberBox;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/number-box/src/composables/use-number-box.js.map
