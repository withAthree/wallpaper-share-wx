"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_dayjs_index = require("../../../../libs/dayjs/index.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_components_calendar_libs_lunarCalendar_index = require("../../libs/lunar-calendar/index.js");
const uni_modules_tuniaouiVue3_components_calendar_src_composables_useCalendarSelector = require("./use-calendar-selector.js");
const DEFAULT_DATE_FORMAT = "YYYY/MM/DD";
const formatDate = (date) => {
  if (!date || !date.length)
    return date;
  if (common_vendor.isString(date)) {
    return date.replace(/-/g, "/");
  }
  return date.map((item) => {
    return item.replace(/-/g, "/");
  });
};
const fillDateZero = (date) => {
  return String(date).padStart(2, "0");
};
const generateDateStr = (date) => {
  return `${date.year}/${fillDateZero(date.month)}/${fillDateZero(date.date)}`;
};
const useCalendar = (props, emits) => {
  const reloadMonthSwiper = common_vendor.ref(false);
  const calendarData = common_vendor.ref([]);
  const weekText = common_vendor.ref(["日", "一", "二", "三", "四", "五", "六"]);
  const minDate = common_vendor.reactive({
    year: 0,
    month: 0,
    date: 0
  });
  const maxDate = common_vendor.reactive({
    year: 0,
    month: 0,
    date: 0
  });
  const currentDate = common_vendor.reactive({
    year: 0,
    month: 0,
    date: 0
  });
  const currentSelectedDate = common_vendor.reactive({
    year: 0,
    month: 0,
    date: 0
  });
  const rangeDate = common_vendor.reactive({});
  let needRenderCalendar = false;
  const updateModelValue = (changeEmit = true) => {
    const modelValue = props.modelValue, mode = props.mode;
    const formatModelValue = formatDate(modelValue);
    let value = "";
    switch (mode) {
      case "date":
        if (modelValue) {
          const dateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(formatModelValue, DEFAULT_DATE_FORMAT);
          updateDateStatus(dateDayjs, "normal");
        }
        updateDateStatus(currentSelectedDate, "active");
        value = generateDateStr(currentSelectedDate);
        break;
      case "multi":
        const activeIndex = formatModelValue.indexOf(generateDateStr(currentSelectedDate));
        if (formatModelValue.length && activeIndex !== -1) {
          updateDateStatus(currentSelectedDate, "normal");
          formatModelValue.splice(activeIndex, 1);
          value = [...formatModelValue];
        } else {
          updateDateStatus(currentSelectedDate, "active");
          value = [
            ...formatModelValue,
            generateDateStr(currentSelectedDate)
          ];
        }
        break;
      case "range":
        if (!formatModelValue || formatModelValue.length === 0 || formatModelValue.length === 2) {
          if (formatModelValue.length === 2) {
            const startDateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(formatModelValue[0], DEFAULT_DATE_FORMAT);
            const endDateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(formatModelValue[1], DEFAULT_DATE_FORMAT);
            updateDateStatus(startDateDayjs, "normal");
            updateDateStatus(endDateDayjs, "normal");
          }
          value = [generateDateStr(currentSelectedDate)];
        } else {
          const currentDate_1 = generateDateStr(currentSelectedDate);
          if (rangeDate.start) {
            if (rangeDate.start.isAfter(generateDateStr(currentSelectedDate))) {
              value = [currentDate_1];
            } else {
              value = [
                ...formatModelValue,
                generateDateStr(currentSelectedDate)
              ];
            }
          }
        }
        needRenderCalendar = true;
        break;
    }
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    if (changeEmit) {
      common_vendor.nextTick$1(() => {
        emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
      });
    }
  };
  const currentMonthIndex = common_vendor.computed(() => {
    return calendarData.value.findIndex((item) => {
      return item.month === currentSelectedDate.month;
    });
  });
  const currentMonthDateLength = common_vendor.computed(() => {
    var _a2, _b;
    return ((_b = (_a2 = calendarData.value[currentMonthIndex.value]) === null || _a2 === void 0 ? void 0 : _a2.data) === null || _b === void 0 ? void 0 : _b.length) || 0;
  });
  const _a = uni_modules_tuniaouiVue3_components_calendar_src_composables_useCalendarSelector.useCalendarSelector(currentMonthDateLength, props.mode), calendarId = _a.calendarId, dateContainerHeight = _a.dateContainerHeight;
  const activeDateValueMap = /* @__PURE__ */ new Map();
  const generateCalendarData = () => {
    const data = [];
    const _fillDateData = (month, minDisabledDate = 0, maxDisabledDate = 0) => {
      var _a2;
      const monthData = {
        month,
        data: []
      };
      const activeDates = (_a2 = activeDateValueMap.get(currentSelectedDate.year)) === null || _a2 === void 0 ? void 0 : _a2.get(month);
      const days = new Date(currentSelectedDate.year, month, 0).getDate();
      const firstDayWeek = (/* @__PURE__ */ new Date(`${currentSelectedDate.year}/${month}/1`)).getDay();
      for (let i = 0; i < firstDayWeek; i++) {
        monthData.data.push({
          date: 0,
          status: "disabled"
        });
      }
      for (let i = 1; i <= days; i++) {
        let status = i < minDisabledDate || maxDisabledDate && i > maxDisabledDate ? "disabled" : "normal";
        if (activeDates === null || activeDates === void 0 ? void 0 : activeDates.includes(i))
          status = "active";
        let desc = "";
        if (props.showLunar) {
          const lunarValue = uni_modules_tuniaouiVue3_components_calendar_libs_lunarCalendar_index.solar2lunar(currentSelectedDate.year, month, i);
          if (lunarValue !== -1) {
            desc = lunarValue.IDayCn === "初一" ? lunarValue.IMonthCn : lunarValue.IDayCn;
          }
        }
        if (props.mode === "range") {
          const start = rangeDate.start, end = rangeDate.end;
          if (start && start.isSame(`${currentSelectedDate.year}/${month}/${i}`)) {
            status = "active";
            desc = props.rangeStartDesc;
          }
          if (end && end.isSame(`${currentSelectedDate.year}/${month}/${i}`)) {
            status = "active";
            desc = props.rangeEndDesc;
          }
          if (start && end) {
            const currentDateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(`${currentSelectedDate.year}/${month}/${i}`, DEFAULT_DATE_FORMAT);
            if (currentDateDayjs.isAfter(start) && currentDateDayjs.isBefore(end)) {
              status = "range";
            }
          }
        }
        monthData.data.push({
          date: i,
          status,
          desc
        });
      }
      return monthData;
    };
    let minMonth = 1;
    let maxMonth = 12;
    if (currentSelectedDate.year === minDate.year) {
      minMonth = minDate.month;
    }
    if (currentSelectedDate.year === maxDate.year) {
      maxMonth = maxDate.month;
    }
    if (minMonth === 0 || maxMonth === 0)
      return;
    for (let i = minMonth; i <= maxMonth; i++) {
      let minDisabledDate = 0;
      let maxDisabledDate = 0;
      if (currentSelectedDate.year === minDate.year && i === minMonth) {
        minDisabledDate = minDate.date;
        maxDisabledDate = 0;
      }
      if (currentSelectedDate.year === maxDate.year && i === maxMonth) {
        minDisabledDate = 0;
        maxDisabledDate = maxDate.date;
      }
      data.push(_fillDateData(i, minDisabledDate, maxDisabledDate));
    }
    calendarData.value = data;
  };
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val) => {
    if (val || val.length) {
      const mode = props.mode;
      let modelValue = [];
      if (mode === "date")
        modelValue = [val];
      else
        modelValue = val;
      activeDateValueMap.clear();
      modelValue.forEach((item) => {
        var _a2, _b;
        const dateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(formatDate(item), DEFAULT_DATE_FORMAT);
        const year = dateDayjs.year();
        const month = dateDayjs.month() + 1;
        const date = dateDayjs.date();
        if (currentSelectedDate.year === 0) {
          currentSelectedDate.year = year;
          currentSelectedDate.month = month;
        }
        if (activeDateValueMap.has(year)) {
          let monthDates = (_a2 = activeDateValueMap.get(year)) === null || _a2 === void 0 ? void 0 : _a2.get(month);
          if (!monthDates)
            monthDates = [date];
          else
            monthDates.push(date);
          (_b = activeDateValueMap.get(year)) === null || _b === void 0 ? void 0 : _b.set(month, monthDates);
        } else {
          activeDateValueMap.set(year, /* @__PURE__ */ new Map([[month, [date]]]));
        }
      });
      if (mode === "range") {
        rangeDate.start = void 0;
        rangeDate.end = void 0;
        if (modelValue === null || modelValue === void 0 ? void 0 : modelValue[0]) {
          rangeDate.start = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(modelValue[0], DEFAULT_DATE_FORMAT);
        }
        if (modelValue === null || modelValue === void 0 ? void 0 : modelValue[1]) {
          rangeDate.end = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(modelValue[1], DEFAULT_DATE_FORMAT);
        }
      }
      if (needRenderCalendar) {
        needRenderCalendar = false;
        common_vendor.nextTick$1(() => {
          generateCalendarData();
        });
      }
    }
  }, {
    immediate: true,
    deep: true
  });
  const updateDateStatus = (dateData, status) => {
    let month = 0;
    let date = 0;
    if (dateData.toString() === "[object Object]") {
      month = dateData.month;
      date = dateData.date;
    } else {
      month = dateData.month() + 1;
      date = dateData.date();
    }
    const monthIndex = calendarData.value.findIndex((item) => {
      return item.month === month;
    });
    if (monthIndex === -1)
      return;
    const dateIndex = calendarData.value[monthIndex].data.findIndex((item) => {
      return item.date === date;
    });
    if (dateIndex === -1)
      return;
    calendarData.value[monthIndex].data[dateIndex].status = status;
  };
  const initDateData = () => {
    let _minDate = props.minDate, _maxDate = props.maxDate, modelValue = props.modelValue, mode = props.mode;
    const currentDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs();
    currentDate.year = currentDayjs.year();
    currentDate.month = currentDayjs.month() + 1;
    currentDate.date = currentDayjs.date();
    if (!_minDate) {
      _minDate = currentDayjs.format(DEFAULT_DATE_FORMAT);
    } else {
      _minDate = formatDate(_minDate);
    }
    const minDateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(_minDate, DEFAULT_DATE_FORMAT);
    minDate.year = minDateDayjs.year();
    minDate.month = minDateDayjs.month() + 1;
    minDate.date = minDateDayjs.date();
    if (!_maxDate) {
      _maxDate = currentDayjs.endOf("year").format(DEFAULT_DATE_FORMAT);
    } else {
      _maxDate = formatDate(_maxDate);
    }
    const maxDateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(_maxDate, DEFAULT_DATE_FORMAT);
    maxDate.year = maxDateDayjs.year();
    maxDate.month = maxDateDayjs.month() + 1;
    maxDate.date = maxDateDayjs.date();
    let noGenerateAfterInit = false;
    if (!modelValue || !(modelValue === null || modelValue === void 0 ? void 0 : modelValue.length)) {
      currentSelectedDate.year = Math.max(currentDate.year, minDate.year);
      currentSelectedDate.month = currentDate.year === minDate.year ? Math.max(currentDate.month, minDate.month) : currentDate.month;
      if (mode === "date" && currentSelectedDate.year === currentDate.year && currentSelectedDate.month === currentDate.month) {
        currentSelectedDate.date = currentDate.date;
        emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, generateDateStr(currentSelectedDate));
      }
    } else {
      let initDefaultDate = "";
      switch (mode) {
        case "date":
          initDefaultDate = formatDate(modelValue);
          if (minDateDayjs.isAfter(initDefaultDate)) {
            initDefaultDate = minDateDayjs.format(DEFAULT_DATE_FORMAT);
            emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, initDefaultDate);
          }
          if (maxDateDayjs.isBefore(initDefaultDate)) {
            initDefaultDate = maxDateDayjs.format(DEFAULT_DATE_FORMAT);
            emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, initDefaultDate);
          }
          break;
        case "multi":
          const multiDefaultModelValue = modelValue.filter((date) => {
            const dateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(date);
            return dateDayjs.isAfter(minDateDayjs) && dateDayjs.isBefore(maxDateDayjs) || dateDayjs.isSame(minDateDayjs) || dateDayjs.isSame(maxDateDayjs);
          });
          if (multiDefaultModelValue.length !== modelValue.length) {
            emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, multiDefaultModelValue);
          }
          initDefaultDate = multiDefaultModelValue[0];
          break;
        case "range":
          if (modelValue.length !== 2) {
            uni_modules_tuniaouiVue3_utils_error.debugWarn("TnCalendar", "在 range 模式下 modelValue 长度必须为 2");
            return;
          }
          const rangeMinDateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(modelValue[0]);
          const rangeMaxDateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(modelValue[1]);
          if (rangeMinDateDayjs.isAfter(maxDateDayjs) || rangeMaxDateDayjs.isBefore(minDateDayjs)) {
            uni_modules_tuniaouiVue3_utils_error.debugWarn("TnCalendar", "在 range 模式下 modelValue 超过最大范围");
            return;
          }
          const rangeDefaultModelValue = modelValue;
          if (rangeMinDateDayjs.isBefore(minDateDayjs)) {
            rangeDefaultModelValue[0] = minDateDayjs.format(DEFAULT_DATE_FORMAT);
            initDefaultDate = rangeDefaultModelValue[0];
          }
          if (rangeMaxDateDayjs.isAfter(maxDateDayjs)) {
            rangeDefaultModelValue[1] = maxDateDayjs.format(DEFAULT_DATE_FORMAT);
          }
          emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, rangeDefaultModelValue);
          noGenerateAfterInit = true;
          break;
      }
      if (initDefaultDate) {
        const initDefaultDateDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(initDefaultDate, DEFAULT_DATE_FORMAT);
        currentSelectedDate.year = initDefaultDateDayjs.year();
        currentSelectedDate.month = initDefaultDateDayjs.month() + 1;
        currentSelectedDate.date = initDefaultDateDayjs.date();
      }
    }
    if (!noGenerateAfterInit || calendarData.value.length === 0) {
      common_vendor.nextTick$1(() => {
        generateCalendarData();
      });
    }
  };
  initDateData();
  common_vendor.watch(() => {
    return [props.minDate, props.maxDate];
  }, () => {
    initDateData();
  });
  const dateItemClickEvent = (date) => {
    if (date.status === "active" && props.mode === "date" || date.status === "disabled" || date.date === 0)
      return;
    currentSelectedDate.date = date.date;
    updateModelValue();
  };
  const swiperSwitchMonthEvent = (event) => {
    const current = event.detail.current;
    currentSelectedDate.month = calendarData.value[current].month;
    clearSwiperAnimationFlagTimer = setTimeout(() => {
      swiperSwitchAnimationFinish = true;
      if (clearSwiperAnimationFlagTimer) {
        clearTimeout(clearSwiperAnimationFlagTimer);
        clearSwiperAnimationFlagTimer = null;
      }
    }, 300);
    emits("change-month", currentSelectedDate.month);
  };
  let swiperSwitchAnimationFinish = true;
  let clearSwiperAnimationFlagTimer = null;
  const swiperSwitchMonthAnimationFinishEvent = () => {
    swiperSwitchAnimationFinish = true;
    if (clearSwiperAnimationFlagTimer) {
      clearTimeout(clearSwiperAnimationFlagTimer);
      clearSwiperAnimationFlagTimer = null;
    }
  };
  const switchMonth = (type) => {
    if (!props.allowChangeMonth || !swiperSwitchAnimationFinish)
      return;
    swiperSwitchAnimationFinish = false;
    if (type === "prev") {
      if (currentSelectedDate.year === minDate.year && currentSelectedDate.month === minDate.month || currentSelectedDate.month === 1)
        return;
      currentSelectedDate.month--;
    } else {
      if (currentSelectedDate.year === maxDate.year && currentSelectedDate.month === maxDate.month || currentSelectedDate.month === 12)
        return;
      currentSelectedDate.month++;
    }
  };
  const switchYear = (type) => {
    if (!props.allowChangeYear)
      return;
    if (type === "prev") {
      if (currentSelectedDate.year === minDate.year)
        return;
      currentSelectedDate.year--;
      currentSelectedDate.month = 12;
      currentSelectedDate.date = 31;
    } else {
      if (currentSelectedDate.year === maxDate.year)
        return;
      currentSelectedDate.year++;
      currentSelectedDate.month = 1;
      currentSelectedDate.date = 1;
    }
    emits("change-year", currentSelectedDate.year);
    reloadMonthSwiper.value = true;
    setTimeout(() => {
      reloadMonthSwiper.value = false;
    }, 0);
    generateCalendarData();
  };
  return {
    reloadMonthSwiper,
    calendarId,
    weekText,
    calendarData,
    currentMonthIndex,
    dateContainerHeight,
    minDate,
    maxDate,
    currentSelectedDate,
    swiperSwitchMonthEvent,
    swiperSwitchMonthAnimationFinishEvent,
    dateItemClickEvent,
    switchMonth,
    switchYear
  };
};
exports.useCalendar = useCalendar;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/calendar/src/composables/use-calendar.js.map
