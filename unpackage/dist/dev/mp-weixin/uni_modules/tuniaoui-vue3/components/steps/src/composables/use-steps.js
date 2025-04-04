"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_steps = require("../../../../tokens/steps.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index = require("../../../../hooks/use-ordered-children/index.js");
const useSteps = (props) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSteps", "请在 setup 中使用 useSteps");
  }
  const emit = instance.emit;
  const _a = uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index.useOrderedChildren(), items = _a.children, addChild = _a.addChild, removeItem = _a.removeChild;
  const activeUidList = common_vendor.ref([]);
  let innerUpdate = false;
  const setActiveUidList = (uid, changeEmit = false) => {
    if (uid === void 0) {
      activeUidList.value = [];
      return;
    }
    const index = items.value.findIndex((item) => {
      return item.uid === uid;
    });
    if (index === -1)
      return;
    activeUidList.value = items.value.slice(0, index + 1).map((item) => {
      return item.uid;
    });
    emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, index);
    if (changeEmit) {
      emit(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, index);
    }
  };
  const setActiveItem = (uid) => {
    if (props.disabled)
      return;
    innerUpdate = true;
    setActiveUidList(uid, true);
  };
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val) => {
    var _a2, _b;
    if (innerUpdate) {
      innerUpdate = false;
      return;
    }
    if (val !== void 0) {
      const uid = (_b = (_a2 = items.value) === null || _a2 === void 0 ? void 0 : _a2[val]) === null || _b === void 0 ? void 0 : _b.uid;
      setActiveUidList(uid);
    }
  });
  const addItem = (item) => {
    var _a2, _b;
    addChild(item);
    if (!activeUidList.value.length && props.modelValue !== void 0 && props.modelValue >= 0) {
      setActiveUidList((_b = (_a2 = items.value) === null || _a2 === void 0 ? void 0 : _a2[props.modelValue]) === null || _b === void 0 ? void 0 : _b.uid);
    }
  };
  common_vendor.provide(uni_modules_tuniaouiVue3_tokens_steps.stepsContextKey, common_vendor.reactive(Object.assign(Object.assign({}, common_vendor.toRefs(props)), {
    items,
    activeUidList,
    addItem,
    removeItem,
    setActiveItem
  })));
};
exports.useSteps = useSteps;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/steps/src/composables/use-steps.js.map
