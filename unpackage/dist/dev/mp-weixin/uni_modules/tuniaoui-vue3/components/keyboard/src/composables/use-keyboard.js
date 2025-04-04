"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useLongPress_index = require("../../../../hooks/use-long-press/index.js");
const useKeyboard = (props, emits) => {
  const showKeyboard = common_vendor.ref(false);
  common_vendor.watch(() => {
    return props.show;
  }, (val) => {
    showKeyboard.value = val;
  });
  const popupCloseEvent = () => {
    emits("close");
    emits("update:show", false);
  };
  const inputValue = common_vendor.ref(props.modelValue || "");
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val) => {
    return inputValue.value = val;
  });
  const keyboardClickEvent = (value, disabled) => {
    if (disabled)
      return;
    if (props.vibrate) {
      common_vendor.index.vibrateShort();
    }
    let concatValue = true;
    if (value === "confirm") {
      popupCloseEvent();
      emits("confirm");
      return;
    } else if (value === "cancel") {
      popupCloseEvent();
      return;
    } else {
      if (props.mode === "digit") {
        if (value === ".") {
          if (inputValue.value.includes(".")) {
            return;
          }
          if (inputValue.value === "") {
            inputValue.value = "0.";
            concatValue = false;
          }
        }
        if (value === "0") {
          if (inputValue.value === "0") {
            return;
          }
        }
        if (inputValue.value === "0" && value !== ".") {
          inputValue.value = value;
          concatValue = false;
        }
      }
      if (props.mode === "idcard" && value === "X" && inputValue.value.includes("X")) {
        return;
      }
      if (concatValue) {
        inputValue.value += value;
      }
    }
    emits("update:modelValue", inputValue.value);
    common_vendor.nextTick$1(() => {
      emits("change", inputValue.value);
    });
  };
  const backspaceEvent = () => {
    if (inputValue.value === "") {
      clearBackspaceLongPressEvent();
      return;
    }
    if (props.vibrate) {
      common_vendor.index.vibrateShort();
    }
    inputValue.value = inputValue.value.slice(0, -1);
    emits("backspace");
    emits("update:modelValue", inputValue.value);
    common_vendor.nextTick$1(() => {
      emits("change", inputValue.value);
    });
  };
  const _a = uni_modules_tuniaouiVue3_hooks_useLongPress_index.useLongPress(backspaceEvent, common_vendor.toRef(props, "longPressDelete")), handleBackspaceEvent = _a.handleLongPressEvent, clearBackspaceLongPressEvent = _a.clearLongPressTimer;
  const carKeyboardLang = common_vendor.ref(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props.carLang, "cn"));
  let updateCarLangInner = false;
  common_vendor.watch(() => {
    return props.carLang;
  }, (val) => {
    if (updateCarLangInner) {
      updateCarLangInner = false;
      return;
    }
    carKeyboardLang.value = val;
  });
  const carKeyboardSwitchLang = () => {
    if (carKeyboardLang.value === "cn") {
      carKeyboardLang.value = "en";
    } else {
      carKeyboardLang.value = "cn";
    }
    updateCarLangInner = true;
    emits("update:carLangMode", carKeyboardLang.value);
  };
  return {
    showKeyboard,
    carKeyboardLang,
    popupCloseEvent,
    keyboardClickEvent,
    handleBackspaceEvent,
    clearBackspaceLongPressEvent,
    carKeyboardSwitchLang
  };
};
exports.useKeyboard = useKeyboard;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/keyboard/src/composables/use-keyboard.js.map
