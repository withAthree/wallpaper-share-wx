"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const useCalendarSelector = (currentDateCount, mode) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnCalendar", "请在 setup 函数中使用 useCalendarSelector");
  }
  const calendarId = `tc-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance).getSelectorNodeInfo;
  const singleDateItemHeight = common_vendor.ref(0);
  const dateContainerHeight = common_vendor.computed(() => {
    return Math.ceil(currentDateCount.value / 7) * singleDateItemHeight.value;
  });
  let initCount = 0;
  const getDateItemComponentRectInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const rectInfo = yield getSelectorNodeInfo(`#${calendarId} .tn-calendar__data__date`);
        initCount = 0;
        singleDateItemHeight.value = rectInfo.width || 0;
        if (mode === "date" || mode === "multi") {
          singleDateItemHeight.value += common_vendor.index.upx2px(12);
        }
      } catch (err) {
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnCalendar", `获取单个日期容器信息失败: ${err}`);
          return;
        }
        initCount++;
        setTimeout(() => {
          getDateItemComponentRectInfo();
        }, 150);
      }
    });
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      setTimeout(() => {
        getDateItemComponentRectInfo();
      }, 50);
    });
  });
  return {
    calendarId,
    dateContainerHeight
  };
};
exports.useCalendarSelector = useCalendarSelector;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/calendar/src/composables/use-calendar-selector.js.map
