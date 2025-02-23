"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useObserver_index = require("../../../../hooks/use-observer/index.js");
const useLazyLoad = (props) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnLazyLoad", "请在 setup 中使用 useLazyLoad");
  }
  const emit = instance.emit;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const _a = uni_modules_tuniaouiVue3_hooks_useObserver_index.useObserver(instance), connectObserver = _a.connectObserver, disconnectObserver = _a.disconnectObserver;
  const componentId = `tll-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const threshold = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props.threshold, 100);
  });
  const imageStatus = common_vendor.ref("waiting");
  const showImage = common_vendor.ref(false);
  let initCount = 0;
  const initObserver = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      disconnectObserver();
      try {
        yield getSelectorNodeInfo(`#${componentId}`);
        initCount = 0;
        const bottomThreshold = threshold.value < 0 ? -Math.abs(threshold.value) : Math.abs(threshold.value);
        connectObserver(`#${componentId}`, (res) => {
          if (res.intersectionRatio > 0) {
            showImage.value = true;
            imageStatus.value = "loading";
            disconnectObserver();
          }
        }, {
          type: "relativeToViewport",
          margins: {
            bottom: bottomThreshold
          }
        });
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnLazyLoad", `获取图片节点信息失败：${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          initObserver();
        }, 150);
      }
    });
  };
  const handleImageLoadedSuccess = () => {
    imageStatus.value = "loaded";
    emit("loaded");
  };
  const handleImageLoadedFailed = (err) => {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnLazyLoad", `图片加载失败: ${err}`);
    imageStatus.value = "error";
    emit("error");
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      initObserver();
    });
  });
  common_vendor.onUnmounted(() => {
    disconnectObserver();
  });
  return {
    componentId,
    imageStatus,
    showImage,
    handleImageLoadedSuccess,
    handleImageLoadedFailed
  };
};
exports.useLazyLoad = useLazyLoad;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/lazy-load/src/composables/use-lazy-load.js.map
