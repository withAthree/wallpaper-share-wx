"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_dayjs_index = require("../../../../libs/dayjs/index.js");
const uni_modules_tuniaouiVue3_components_dateTimePicker_src_types = require("../types.js");
const nowDayjs = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs();
const generateRangeData = (start, end) => {
  end = end < start ? start : end;
  return Array.from({ length: end - start + 1 }).map((_, index) => {
    return start + index;
  });
};
const useDateTimeData = (props) => {
  const yearColumnData = common_vendor.ref([]);
  const monthColumnData = common_vendor.ref([]);
  const dayColumnData = common_vendor.ref([]);
  const hourColumnData = common_vendor.ref([]);
  const minuteColumnData = common_vendor.ref([]);
  const secondColumnData = common_vendor.ref([]);
  const fillDateTime = (value, format) => {
    if (!format)
      format = uni_modules_tuniaouiVue3_components_dateTimePicker_src_types.innerDefaultDateTimeFormat;
    let dateTime = "";
    if (props.mode === "time" || props.mode === "timeNoSecond") {
      const timeReg = /^(\d{1,2})(?::(\d{1,2}))?(?::(\d{1,2}))?$/;
      dateTime = value.replace(timeReg, (_, hour, minute, second) => {
        return `1970/01/01 ${hour}:${minute || "00"}:${second || "00"}`;
      });
    } else {
      value = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(value, format).format(uni_modules_tuniaouiVue3_components_dateTimePicker_src_types.innerDefaultDateTimeFormat);
      const dateTimeReg = /^(\d{4})(?:[-/](\d{1,2}))?(?:[-/](\d{1,2}))?(?:\s?(\d{1,2}))?(?::(\d{1,2}))?(?::(\d{1,2}))?$/;
      dateTime = value.replace(dateTimeReg, (_, year, month, day, hour, minute, second) => {
        return `${year}/${month || "01"}/${day || "01"} ${hour || "00"}:${minute || "00"}:${second || "00"}`;
      });
    }
    return uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(dateTime, format);
  };
  const minTimeDayjs = common_vendor.computed(() => {
    let time = `${nowDayjs.year() - 10}/01/01 00:00:00`;
    if (props.minTime)
      time = props.minTime;
    return fillDateTime(time);
  });
  const maxTimeDayjs = common_vendor.computed(() => {
    let time = `${nowDayjs.year() + 10}/12/31 23:59:59`;
    if (props.maxTime)
      time = props.maxTime;
    return fillDateTime(time);
  });
  const getTimeMaxMinValue = (currentValue, maxMinValue, defaultValue) => {
    var _a, _b;
    const result = Object.assign({}, defaultValue);
    let currentYear = 0;
    let currentMonth = 0;
    let currentDate = 0;
    let currentHour = 0;
    let currentMinute = 0;
    let maxMinYear = 0;
    let maxMinMonth = 0;
    let maxMinDate = 0;
    let maxMinHour = 0;
    let maxMinMinute = 0;
    let maxMinSecond = 0;
    if (currentValue.toString() === "[object Object]") {
      _a = currentValue, currentYear = _a.year, currentMonth = _a.month, currentDate = _a.date, currentHour = _a.hour, currentMinute = _a.minute;
    } else {
      currentYear = currentValue.year();
      currentMonth = currentValue.month();
      currentDate = currentValue.date();
      currentHour = currentValue.hour();
      currentMinute = currentValue.minute();
    }
    if (maxMinValue.toString() === "[object Object]") {
      _b = maxMinValue, maxMinYear = _b.year, maxMinMonth = _b.month, maxMinDate = _b.date, maxMinHour = _b.hour, maxMinMinute = _b.minute, maxMinSecond = _b.second;
    } else {
      maxMinYear = maxMinValue.year();
      maxMinMonth = maxMinValue.month();
      maxMinDate = maxMinValue.date();
      maxMinHour = maxMinValue.hour();
      maxMinMinute = maxMinValue.minute();
      maxMinSecond = maxMinValue.second();
    }
    if (currentYear === maxMinYear) {
      result.month = maxMinMonth;
      if (currentMonth === maxMinMonth) {
        result.date = maxMinDate;
        if (currentDate === maxMinDate) {
          result.hour = maxMinHour;
          if (currentHour === maxMinHour) {
            result.minute = maxMinMinute;
            if (currentMinute === maxMinMinute) {
              result.second = maxMinSecond;
            }
          }
        }
      }
    }
    return result;
  };
  const generatePickerData = (value) => {
    const sameMinYear = value.year() === minTimeDayjs.value.year();
    const sameMaxYear = value.year() === maxTimeDayjs.value.year();
    const sameMinMonth = value.month() === minTimeDayjs.value.month();
    const sameMaxMonth = value.month() === maxTimeDayjs.value.month();
    const sameMinDate = value.date() === minTimeDayjs.value.date();
    const sameMaxDate = value.date() === maxTimeDayjs.value.date();
    const sameMinHour = value.hour() === minTimeDayjs.value.hour();
    const sameMaxHour = value.hour() === maxTimeDayjs.value.hour();
    const sameMinMinute = value.minute() === minTimeDayjs.value.minute();
    const sameMaxMinute = value.minute() === maxTimeDayjs.value.minute();
    const minYear = minTimeDayjs.value.year();
    const maxYear = maxTimeDayjs.value.year();
    const minMonth = sameMinYear ? minTimeDayjs.value.month() + 1 : 1;
    const maxMonth = sameMaxYear ? maxTimeDayjs.value.month() + 1 : 12;
    const minDay = sameMinYear && sameMinMonth ? minTimeDayjs.value.date() : 1;
    const maxDay = sameMaxYear && sameMaxMonth ? maxTimeDayjs.value.date() : value.daysInMonth();
    const minHour = sameMinYear && sameMinMonth && sameMinDate || props.mode === "time" || props.mode === "timeNoSecond" ? minTimeDayjs.value.hour() : 0;
    const maxHour = sameMaxYear && sameMaxMonth && sameMaxDate || props.mode === "time" || props.mode === "timeNoSecond" ? maxTimeDayjs.value.hour() : 23;
    const minMinute = (sameMinYear && sameMinMonth && sameMinDate || props.mode === "time" || props.mode === "timeNoSecond") && sameMinHour ? minTimeDayjs.value.minute() : 0;
    const maxMinute = (sameMaxYear && sameMaxMonth && sameMaxDate || props.mode === "time" || props.mode === "timeNoSecond") && sameMaxHour ? maxTimeDayjs.value.minute() : 59;
    const minSecond = (sameMinYear && sameMinMonth && sameMinDate || props.mode === "time") && sameMinHour && sameMinMinute ? minTimeDayjs.value.second() : 0;
    const maxSecond = (sameMaxYear && sameMaxMonth && sameMaxDate || props.mode === "time") && sameMaxHour && sameMaxMinute ? maxTimeDayjs.value.second() : 59;
    yearColumnData.value = generateRangeData(minYear, maxYear).map((year) => {
      return {
        label: `${year}年`,
        value: year
      };
    });
    monthColumnData.value = generateRangeData(minMonth, maxMonth).map((month) => {
      return {
        label: `${String(month).padStart(2, "0")}月`,
        value: month
      };
    });
    dayColumnData.value = generateRangeData(minDay, maxDay).map((day) => {
      return {
        label: `${String(day).padStart(2, "0")}日`,
        value: day
      };
    });
    hourColumnData.value = generateRangeData(minHour, maxHour).map((hour) => {
      return {
        label: String(hour).padStart(2, "0"),
        value: hour
      };
    });
    minuteColumnData.value = generateRangeData(minMinute, maxMinute).map((minute) => {
      return {
        label: String(minute).padStart(2, "0"),
        value: minute
      };
    });
    secondColumnData.value = generateRangeData(minSecond, maxSecond).map((second) => {
      return {
        label: String(second).padStart(2, "0"),
        value: second
      };
    });
  };
  const pickerData = common_vendor.computed(() => {
    const result = [];
    if (props.mode === "year")
      result.push(yearColumnData.value);
    if (props.mode === "yearmonth")
      result.push(yearColumnData.value, monthColumnData.value);
    if (props.mode === "date")
      result.push(yearColumnData.value, monthColumnData.value, dayColumnData.value);
    if (props.mode === "time")
      result.push(hourColumnData.value, minuteColumnData.value, secondColumnData.value);
    if (props.mode === "datetime")
      result.push(yearColumnData.value, monthColumnData.value, dayColumnData.value, hourColumnData.value, minuteColumnData.value, secondColumnData.value);
    if (props.mode === "datetimeNoSecond")
      result.push(yearColumnData.value, monthColumnData.value, dayColumnData.value, hourColumnData.value, minuteColumnData.value);
    if (props.mode === "timeNoSecond")
      result.push(hourColumnData.value, minuteColumnData.value);
    return result;
  });
  return {
    pickerData,
    minTimeDayjs,
    maxTimeDayjs,
    generatePickerData,
    fillDateTime,
    getTimeMaxMinValue
  };
};
exports.useDateTimeData = useDateTimeData;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/date-time-picker/src/composables/use-date-time-data.js.map
