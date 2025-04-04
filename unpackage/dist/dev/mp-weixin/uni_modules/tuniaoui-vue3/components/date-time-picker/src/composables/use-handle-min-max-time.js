"use strict";
const useHandleMinMaxTime = (minTime, maxTime) => {
  const handlePickerChangeMinMaxTime = (mode, timeValue) => {
    switch (mode) {
      case "yearmonth":
        return handlePickerChangeMinMaxTimeForYearMonth(timeValue);
      case "date":
        return handlePickerChangeMinMaxTimeForDate(timeValue);
      case "datetime":
      case "datetimeNoSecond":
        return handlePickerChangeMinMaxTimeForDateTime(timeValue, mode === "datetime");
      case "time":
      case "timeNoSecond":
        return handlePickerChangeMinMaxTimeForTime(timeValue, mode === "time");
      default:
        return timeValue;
    }
  };
  const handlePickerChangeMinMaxTimeForYearMonth = (timeValue) => {
    if (timeValue.year() === minTime.value.year()) {
      timeValue = timeValue.set("month", Math.max(minTime.value.month(), timeValue.month()));
    }
    if (timeValue.year() === maxTime.value.year()) {
      timeValue = timeValue.set("month", Math.min(maxTime.value.month(), timeValue.month()));
    }
    return timeValue;
  };
  const handlePickerChangeMinMaxTimeForDate = (timeValue) => {
    if (timeValue.year() === minTime.value.year()) {
      timeValue = timeValue.set("month", Math.max(minTime.value.month(), timeValue.month()));
      if (timeValue.month() === minTime.value.month()) {
        timeValue = timeValue.set("date", Math.max(minTime.value.date(), timeValue.date()));
      }
    }
    if (timeValue.year() === maxTime.value.year()) {
      timeValue = timeValue.set("month", Math.min(maxTime.value.month(), timeValue.month()));
      if (timeValue.month() === maxTime.value.month()) {
        timeValue = timeValue.set("date", Math.min(maxTime.value.date(), timeValue.date()));
      }
    }
    return timeValue;
  };
  const handlePickerChangeMinMaxTimeForDateTime = (timeValue, hasSecond = true) => {
    if (timeValue.year() === minTime.value.year()) {
      timeValue = timeValue.set("month", Math.max(minTime.value.month(), timeValue.month()));
      if (timeValue.month() === minTime.value.month()) {
        timeValue = timeValue.set("date", Math.max(minTime.value.date(), timeValue.date()));
        if (timeValue.date() === minTime.value.date()) {
          timeValue = timeValue.set("hour", Math.max(minTime.value.hour(), timeValue.hour()));
          if (timeValue.hour() === minTime.value.hour()) {
            timeValue = timeValue.set("minute", Math.max(minTime.value.minute(), timeValue.minute()));
            if (hasSecond) {
              if (timeValue.minute() === minTime.value.minute()) {
                timeValue = timeValue.set("second", Math.max(minTime.value.second(), timeValue.second()));
              }
            } else {
              timeValue = timeValue.set("second", 0);
            }
          }
        }
      }
    }
    if (timeValue.year() === maxTime.value.year()) {
      timeValue = timeValue.set("month", Math.min(maxTime.value.month(), timeValue.month()));
      if (timeValue.month() === maxTime.value.month()) {
        timeValue = timeValue.set("date", Math.min(maxTime.value.date(), timeValue.date()));
        if (timeValue.date() === maxTime.value.date()) {
          timeValue = timeValue.set("hour", Math.min(maxTime.value.hour(), timeValue.hour()));
          if (timeValue.hour() === maxTime.value.hour()) {
            timeValue = timeValue.set("minute", Math.min(maxTime.value.minute(), timeValue.minute()));
            if (hasSecond) {
              if (timeValue.minute() === maxTime.value.minute()) {
                timeValue = timeValue.set("second", Math.min(maxTime.value.second(), timeValue.second()));
              }
            } else {
              timeValue = timeValue.set("second", 0);
            }
          }
        }
      }
    }
    return timeValue;
  };
  const handlePickerChangeMinMaxTimeForTime = (timeValue, hasSecond = true) => {
    if (timeValue.hour() === minTime.value.hour()) {
      timeValue = timeValue.set("minute", Math.max(minTime.value.minute(), timeValue.minute()));
      if (timeValue.minute() === minTime.value.minute()) {
        timeValue = timeValue.set("second", Math.max(minTime.value.second(), timeValue.second()));
      }
    }
    if (timeValue.hour() === maxTime.value.hour()) {
      timeValue = timeValue.set("minute", Math.min(maxTime.value.minute(), timeValue.minute()));
      if (hasSecond) {
        if (timeValue.minute() === maxTime.value.minute()) {
          timeValue = timeValue.set("second", Math.min(maxTime.value.second(), timeValue.second()));
        }
      } else {
        timeValue = timeValue.set("second", 0);
      }
    }
    return timeValue;
  };
  return {
    handlePickerChangeMinMaxTime
  };
};
exports.useHandleMinMaxTime = useHandleMinMaxTime;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/date-time-picker/src/composables/use-handle-min-max-time.js.map
