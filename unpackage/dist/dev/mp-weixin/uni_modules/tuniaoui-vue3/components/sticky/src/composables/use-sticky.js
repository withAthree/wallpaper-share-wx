"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useObserver_index = require("../../../../hooks/use-observer/index.js");
const uni_modules_tuniaouiVue3_components_sticky_src_composables_useStickySupport = require("./use-sticky-support.js");
const useSticky = (props) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSticky", "useSticky 必须在 setup 中使用");
  }
  const emit = instance.emit;
  const componentId = `ts-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const _a = uni_modules_tuniaouiVue3_components_sticky_src_composables_useStickySupport.useStickySupport(), supportCSSSticky = _a.supportCSSSticky, checkCSSStickySupport = _a.checkCSSStickySupport;
  const _b = uni_modules_tuniaouiVue3_hooks_useObserver_index.useObserver(instance), connectObserver = _b.connectObserver, disconnectObserver = _b.disconnectObserver;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const stickyDistance = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props === null || props === void 0 ? void 0 : props.offsetTop, 0);
  });
  const stickyStatus = common_vendor.ref(false);
  const setStickyStatus = (status) => {
    if (status) {
      emit("change", true);
    } else if (stickyStatus.value) {
      emit("change", false);
    }
    stickyStatus.value = status;
  };
  let initCount = 0;
  const stickyContainerRect = common_vendor.ref({
    width: "auto",
    height: "auto",
    left: 0
  });
  const monitorNodeInfo = () => {
    connectObserver(`#${componentId}`, (observerRes) => {
      if (!props.enabled)
        return;
      setStickyStatus(observerRes.boundingClientRect.top <= stickyDistance.value);
    }, {
      type: "relativeToViewport",
      margins: {
        top: -stickyDistance.value
      }
    }, {
      thresholds: [0.95, 0.98, 1]
    });
  };
  const initObserver = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      disconnectObserver();
      try {
        const rectInfo = yield getSelectorNodeInfo(`#${componentId}`);
        initCount = 0;
        stickyContainerRect.value.width = rectInfo.width || 0;
        stickyContainerRect.value.height = rectInfo.height || 0;
        stickyContainerRect.value.left = rectInfo.left || 0;
        common_vendor.nextTick$1(() => {
          monitorNodeInfo();
        });
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSticky", `获取sticky节点信息失败: ${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          initObserver();
        }, 150);
      }
    });
  };
  common_vendor.watch(() => {
    return supportCSSSticky.value;
  }, (val) => {
    if (val === false && props.enabled) {
      initObserver();
    }
  });
  common_vendor.watch(() => {
    return props.offsetTop;
  }, () => {
    common_vendor.nextTick$1(() => {
      initSticky();
    });
  });
  common_vendor.watch(() => {
    return props.enabled;
  }, (val) => {
    if (!val) {
      setStickyStatus(false);
      disconnectObserver();
    } else {
      disconnectObserver();
      monitorNodeInfo();
    }
  });
  const initSticky = () => {
    checkCSSStickySupport(`#${componentId}`);
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      initSticky();
    });
  });
  common_vendor.onUnmounted(() => {
    disconnectObserver();
  });
  return {
    componentId,
    supportCSSSticky,
    stickyStatus,
    stickyContainerRect,
    stickyDistance
  };
};
exports.useSticky = useSticky;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/sticky/src/composables/use-sticky.js.map
