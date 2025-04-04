"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../../libs/lodash/is-boolean.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
const uni_modules_tuniaouiVue3_hooks_useToggle_index = require("../../../../hooks/use-toggle/index.js");
require("../../../../hooks/use-z-index/index.js");
const useReadMore = (props, emits) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnReadMore", "请在 setup 中使用 useReadMore");
  }
  const componentId = `trm-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const componentContentId = `${componentId}-content`;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useToggle_index.useToggle(props.expand || false), 2), expandStatus = _a[0], toggleExpand = _a[1];
  common_vendor.watch(() => {
    return props.expand;
  }, (val) => {
    expandStatus.value = val;
  });
  const showOperationArea = common_vendor.computed(() => {
    return !expandStatus.value || expandStatus.value && props.showFold;
  });
  const foldOperationAreaHeight = 40;
  const containerHeight = common_vendor.computed(() => {
    if (!expandStatus.value) {
      return uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    } else {
      return `calc(${uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(contentHeight.value, "px")} + ${foldOperationAreaHeight}rpx)`;
    }
  });
  let contentHeight = common_vendor.ref(0);
  let initCount = 0;
  const getContentRectInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const rectInfo = yield getSelectorNodeInfo(`#${componentContentId}`);
        initCount = 0;
        contentHeight.value = rectInfo.height || 0;
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnReadMore", `获取内容容器信息失败: ${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getContentRectInfo();
        }, 150);
      }
    });
  };
  const resetContentHeight = () => {
    common_vendor.nextTick$1(() => {
      getContentRectInfo();
    });
  };
  const setExpand = () => {
    emits("expand");
    toggleExpand();
  };
  const setFold = () => {
    emits("fold");
    toggleExpand();
  };
  const toggleExpandStatus = () => {
    if (expandStatus.value) {
      setFold();
    } else {
      const beforeExpand = props.beforeExpand;
      if (!beforeExpand) {
        setExpand();
        return;
      }
      const shouldExpand = beforeExpand();
      const isPromiseOrBoolean = [
        common_vendor.isPromise(shouldExpand),
        uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldExpand)
      ].includes(true);
      if (!isPromiseOrBoolean) {
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnReadMore", "beforeExpand 必须返回 Promise 或者 boolean 类型");
        return;
      }
      if (common_vendor.isPromise(shouldExpand)) {
        shouldExpand.then((res) => {
          if (res) {
            setExpand();
          }
        });
      } else {
        if (shouldExpand) {
          setExpand();
        }
      }
    }
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getContentRectInfo();
    });
  });
  return {
    componentContentId,
    showOperationArea,
    foldOperationAreaHeight,
    containerHeight,
    expandStatus,
    toggleExpandStatus,
    resetContentHeight
  };
};
exports.useReadMore = useReadMore;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/read-more/src/composables/use-read-more.js.map
