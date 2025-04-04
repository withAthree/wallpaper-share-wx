"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_steps = require("../../../../tokens/steps.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const useStep = (props) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnStep", "请在 setup 中使用 useStep");
  }
  const _a = instance, emit = _a.emit, uid = _a.uid;
  const stepsContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_steps.stepsContextKey);
  const isActive = common_vendor.computed(() => {
    return (stepsContext === null || stepsContext === void 0 ? void 0 : stepsContext.activeUidList.includes(uid)) || false;
  });
  const stepMode = common_vendor.computed(() => {
    return (stepsContext === null || stepsContext === void 0 ? void 0 : stepsContext.mode) || "dot";
  });
  const itemClickEvent = () => {
    if (props.disabled || (stepsContext === null || stepsContext === void 0 ? void 0 : stepsContext.disabled))
      return;
    stepsContext === null || stepsContext === void 0 ? void 0 : stepsContext.setActiveItem(uid);
    emit("click");
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      stepsContext === null || stepsContext === void 0 ? void 0 : stepsContext.addItem({ uid });
    });
  });
  common_vendor.onUnmounted(() => {
    stepsContext === null || stepsContext === void 0 ? void 0 : stepsContext.removeItem(uid);
  });
  return {
    isActive,
    stepMode,
    itemClickEvent
  };
};
exports.useStep = useStep;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/steps/src/composables/use-step.js.map
