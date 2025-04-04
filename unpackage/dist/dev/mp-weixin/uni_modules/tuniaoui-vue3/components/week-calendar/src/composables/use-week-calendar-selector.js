"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const useWeekCalendarSelector = () => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnWeekCalendar", "请在 setup 中使用 useWeekCalendarSelector");
  }
  const componentDateItemId = `twcdi-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const dateItemContainerHeight = common_vendor.ref(0);
  let initCount = 0;
  const getDateItemNodeInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const nodeInfo = yield getSelectorNodeInfo(`#${componentDateItemId}-0-0`);
        dateItemContainerHeight.value = nodeInfo.height || 0;
        dateItemContainerHeight.value += common_vendor.index.upx2px(16);
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnWeekCalendar", `获取日期节点信息失败：${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getDateItemNodeInfo();
        }, 150);
      }
    });
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getDateItemNodeInfo();
    });
  });
  return {
    componentDateItemId,
    dateItemContainerHeight
  };
};
exports.useWeekCalendarSelector = useWeekCalendarSelector;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/week-calendar/src/composables/use-week-calendar-selector.js.map
