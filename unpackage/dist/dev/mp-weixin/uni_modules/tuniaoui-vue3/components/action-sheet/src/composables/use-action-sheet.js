"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../../libs/lodash/is-boolean.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const useActionSheet = () => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnActionSheet", "请在 setup 中使用 useActionSheet");
  }
  const slots = instance.slots;
  const defaultOptions = {
    actions: [],
    title: "",
    cancelText: "取 消",
    mask: true,
    maskClosable: false,
    cancel: void 0,
    select: void 0
  };
  const options = common_vendor.reactive({
    actions: [],
    title: "",
    cancelText: "取 消",
    mask: true,
    cancel: void 0,
    select: void 0
  });
  const data = common_vendor.computed(() => {
    return options.actions;
  });
  const showTitle = common_vendor.computed(() => {
    return !!(slots === null || slots === void 0 ? void 0 : slots.title) || !!options.title;
  });
  const title = common_vendor.computed(() => {
    return options.title;
  });
  const showCancel = common_vendor.computed(() => {
    return !!(slots === null || slots === void 0 ? void 0 : slots.cancel) || !!options.cancelText;
  });
  const cancelText = common_vendor.computed(() => {
    return options.cancelText;
  });
  const overlay = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(options.mask, true);
  });
  const overlayClosable = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(options.maskClosable, false);
  });
  const openPopup = common_vendor.ref(false);
  const popupCloseEvent = () => {
    if (!options.cancel || overlayClosable.value) {
      openPopup.value = false;
      return;
    }
    const shouldCancel = options.cancel();
    const isPromiseOrBoolean = [
      common_vendor.isPromise(shouldCancel),
      uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldCancel)
    ].includes(true);
    if (!isPromiseOrBoolean) {
      uni_modules_tuniaouiVue3_utils_error.debugWarn("TnActionSheet", "cancel 函数返回值必须是 Promise 或者 Boolean 类型");
      return;
    }
    if (common_vendor.isPromise(shouldCancel)) {
      shouldCancel.then((res) => {
        if (res) {
          openPopup.value = false;
        }
      });
    } else {
      if (shouldCancel) {
        openPopup.value = false;
      }
    }
  };
  const actionClickEvent = (index) => {
    if (!options.select) {
      openPopup.value = false;
      return;
    }
    const shouldSelect = options.select(index, options.actions[index].value);
    const isPromiseOrBoolean = [
      common_vendor.isPromise(shouldSelect),
      uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldSelect)
    ].includes(true);
    if (!isPromiseOrBoolean) {
      uni_modules_tuniaouiVue3_utils_error.debugWarn("TnActionSheet", "select 函数返回值必须是 Promise 或者 Boolean 类型");
      return;
    }
    if (common_vendor.isPromise(shouldSelect)) {
      shouldSelect.then((res) => {
        if (res) {
          openPopup.value = false;
        }
      });
    } else {
      if (shouldSelect) {
        openPopup.value = false;
      }
    }
  };
  const showActionSheet = (_options) => {
    Object.assign(options, defaultOptions, _options);
    openPopup.value = true;
  };
  return {
    data,
    showTitle,
    title,
    showCancel,
    cancelText,
    overlay,
    overlayClosable,
    openPopup,
    showActionSheet,
    popupCloseEvent,
    actionClickEvent
  };
};
exports.useActionSheet = useActionSheet;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/action-sheet/src/composables/use-action-sheet.js.map
