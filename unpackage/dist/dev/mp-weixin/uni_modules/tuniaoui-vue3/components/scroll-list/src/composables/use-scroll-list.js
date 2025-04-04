"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const useScrollList = (props, emits) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnScrollList", "请在setup函数中使用useScrollList");
  }
  const componentId = `tsl-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const componentContentId = `${componentId}-content`;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  let componentWidth = 0;
  let comoponentContentWidth = 0;
  const indicatorBlockScrollDistance = common_vendor.ref(0);
  let initCount = 0;
  const getContentRectInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const componentRectInfo = yield getSelectorNodeInfo(`#${componentId}`);
        const contentRectInfo = yield getSelectorNodeInfo(`#${componentContentId}`);
        initCount = 0;
        componentWidth = componentRectInfo.width || 0;
        comoponentContentWidth = contentRectInfo.width || 0;
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnScrollList", `获取内容容器的宽度失败: ${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getContentRectInfo();
        }, 150);
      }
    });
  };
  const scrollViewScrollEvent = (e) => {
    const scrollLeft = e.detail.scrollLeft;
    indicatorBlockScrollDistance.value = scrollLeft * (props.indicatorWidth - props.indicatorBlockWidth) / (comoponentContentWidth - componentWidth);
  };
  const scrollToLeftEvent = () => {
    emits("scroll-left");
  };
  const scrollToRightEvent = () => {
    emits("scroll-right");
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getContentRectInfo();
    });
  });
  return {
    componentId,
    componentContentId,
    indicatorBlockScrollDistance,
    scrollViewScrollEvent,
    scrollToLeftEvent,
    scrollToRightEvent
  };
};
exports.useScrollList = useScrollList;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/scroll-list/src/composables/use-scroll-list.js.map
