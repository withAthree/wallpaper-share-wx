"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_dayjs_index = require("../../../../libs/dayjs/index.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_weekCalendar_src_composables_useWeekCalendarSelector = require("./use-week-calendar-selector.js");
const useWeekCalendar = (props, emits) => {
  const currentDateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs();
  const _a = uni_modules_tuniaouiVue3_components_weekCalendar_src_composables_useWeekCalendarSelector.useWeekCalendarSelector(), componentDateItemId = _a.componentDateItemId, dateItemContainerHeight = _a.dateItemContainerHeight;
  const currentYear = common_vendor.computed(() => {
    return props.year ? Number(props.year) : currentDateDayjs.year();
  });
  const currentMonth = common_vendor.computed(() => {
    return props.month ? Number(props.month) : currentDateDayjs.month() + 1;
  });
  const minDate = common_vendor.computed(() => {
    return props.minDate ? Number(props.minDate) : currentDateDayjs.year() === currentYear.value && currentDateDayjs.month() + 1 === currentMonth.value ? currentDateDayjs.date() : 1;
  });
  const maxDate = common_vendor.computed(() => {
    return props.maxDate ? Number(props.maxDate) : currentDateDayjs.daysInMonth();
  });
  const customDescData = common_vendor.computed(() => {
    const map = /* @__PURE__ */ new Map();
    props.customData.forEach((item) => {
      map.set(item.date, item.desc);
    });
    return map;
  });
  const weekText = common_vendor.ref(["日", "一", "二", "三", "四", "五", "六"]);
  const weekCalendarData = common_vendor.ref([]);
  const activeDate = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props.modelValue, 0);
  });
  const currentSwiperIndex = common_vendor.ref(0);
  const updateActiveDate = (date) => {
    weekCalendarData.value.forEach((week) => {
      week.forEach((item) => {
        if (item.status !== "disabled") {
          if (item.date === date) {
            item.status = "active";
          } else {
            item.status = "normal";
          }
        }
      });
    });
  };
  const updateModelValue = (value, changeEmits = true) => {
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    if (changeEmits) {
      updateActiveDate(value);
      common_vendor.nextTick$1(() => {
        emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
      });
    }
  };
  const generateWeekCalendarData = () => {
    const data = [];
    const generateMonthDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(`${currentYear.value}/${currentMonth.value}/01`);
    const dates = generateMonthDayjs.daysInMonth();
    const firstDayWeek = generateMonthDayjs.day();
    for (let i = 0; i < firstDayWeek; i++) {
      data.push({
        date: 0,
        status: "disabled"
      });
    }
    for (let i = 1; i <= dates; i++) {
      let status = i >= minDate.value && i <= maxDate.value ? "normal" : "disabled";
      if (i === activeDate.value) {
        status = "active";
        currentSwiperIndex.value = Math.floor((i + firstDayWeek - 1) / 7);
      }
      const desc = customDescData.value.get(i);
      data.push({
        date: i,
        status,
        desc
      });
    }
    const result = [];
    for (let i = 0; i < data.length; i += 7) {
      result.push(data.slice(i, i + 7));
    }
    weekCalendarData.value = result;
  };
  const initWeekCalendarData = () => {
    let updateModelValueDate = false;
    let modelValue = props.modelValue;
    if (!modelValue) {
      modelValue = currentDateDayjs.date();
      updateModelValueDate = true;
    }
    if (modelValue < minDate.value) {
      modelValue = minDate.value;
      updateModelValueDate = true;
    }
    if (modelValue > maxDate.value) {
      modelValue = maxDate.value;
      updateModelValueDate = true;
    }
    if (updateModelValueDate) {
      updateModelValue(modelValue);
    }
    common_vendor.nextTick$1(() => {
      generateWeekCalendarData();
    });
  };
  initWeekCalendarData();
  const dateItemClick = (item) => {
    if (item.status === "active" || item.status === "disabled" || item.date === 0)
      return;
    updateModelValue(item.date);
  };
  const switchWeek = (type) => {
    if (type === "prev") {
      if (currentSwiperIndex.value === 0)
        return;
      currentSwiperIndex.value--;
    }
    if (type === "next") {
      if (currentSwiperIndex.value === weekCalendarData.value.length - 1)
        return;
      currentSwiperIndex.value++;
    }
    emits("week-change", currentSwiperIndex.value);
  };
  const swiperChangeWeek = (event) => {
    currentSwiperIndex.value = event.detail.current;
    emits("week-change", currentSwiperIndex.value);
  };
  common_vendor.watch(() => {
    return props.customData;
  }, () => {
    generateWeekCalendarData();
  }, {
    deep: true
  });
  return {
    componentDateItemId,
    dateItemContainerHeight,
    weekCalendarData,
    weekText,
    currentSwiperIndex,
    dateItemClick,
    switchWeek,
    swiperChangeWeek
  };
};
exports.useWeekCalendar = useWeekCalendar;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/week-calendar/src/composables/use-week-calendar.js.map
