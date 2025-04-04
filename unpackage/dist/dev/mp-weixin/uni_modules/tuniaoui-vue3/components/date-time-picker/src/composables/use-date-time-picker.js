"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_dayjs_index = require("../../../../libs/dayjs/index.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_components_dateTimePicker_src_types = require("../types.js");
const uni_modules_tuniaouiVue3_components_dateTimePicker_src_composables_useDateTimeData = require("./use-date-time-data.js");
const uni_modules_tuniaouiVue3_components_dateTimePicker_src_composables_useHandleMinMaxTime = require("./use-handle-min-max-time.js");
const MIN_MAX_VALUE = (minValue, maxValue, currentValue) => {
  return Math.min(Math.max(minValue, currentValue), maxValue);
};
const useDateTimePicker = (props) => {
  const emit = common_vendor.getCurrentInstance().emit;
  const _a = uni_modules_tuniaouiVue3_components_dateTimePicker_src_composables_useDateTimeData.useDateTimeData(props), pickerData = _a.pickerData, minTimeDayjs = _a.minTimeDayjs, maxTimeDayjs = _a.maxTimeDayjs, generatePickerData = _a.generatePickerData, fillDateTime = _a.fillDateTime;
  const handlePickerChangeMinMaxTime = uni_modules_tuniaouiVue3_components_dateTimePicker_src_composables_useHandleMinMaxTime.useHandleMinMaxTime(minTimeDayjs, maxTimeDayjs).handlePickerChangeMinMaxTime;
  const pickerRef = common_vendor.ref();
  const showPicker = common_vendor.ref(false);
  common_vendor.watch(() => {
    return props.open;
  }, (val) => {
    showPicker.value = val;
  });
  const _closePicker = () => {
    emit("update:open", false);
  };
  const handlePickerCloseEvent = () => {
    _closePicker();
    initDateTimePicker(false);
    emit("close");
  };
  common_vendor.watch(() => {
    return [props.minTime, props.maxTime, props.modelValue];
  }, () => {
    initDateTimePicker(false);
  });
  const pickerSelectData = common_vendor.ref([]);
  const getDateTimeValue = (dateTime) => {
    const year = dateTime.year();
    const month = String(dateTime.month() + 1).padStart(2, "0");
    const date = String(dateTime.date()).padStart(2, "0");
    const hour = String(dateTime.hour()).padStart(2, "0");
    const minute = String(dateTime.minute()).padStart(2, "0");
    const second = String(dateTime.second()).padStart(2, "0");
    if (props.mode === "year")
      return `${year}`;
    if (props.mode === "yearmonth")
      return uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(`${year}/${month}`).format(props.format || "YYYY/MM");
    if (props.mode === "date")
      return uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(`${year}/${month}/${date}`).format(props.format || "YYYY/MM/DD");
    if (props.mode === "datetimeNoSecond")
      return uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(`${year}/${month}/${date} ${hour}:${minute}`).format(props.format || "YYYY/MM/DD HH:mm");
    if (props.mode === "time")
      return `${hour}:${minute}:${second}`;
    if (props.mode === "timeNoSecond")
      return `${hour}:${minute}`;
    return uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs(`${year}/${month}/${date} ${hour}:${minute}:${second}`).format(props.format || uni_modules_tuniaouiVue3_components_dateTimePicker_src_types.innerDefaultDateTimeFormat);
  };
  const setDefaultPickerSelectValue = (dateTime) => {
    const year = dateTime.year();
    const month = dateTime.month() + 1;
    const date = dateTime.date();
    const hour = dateTime.hour();
    const minute = dateTime.minute();
    const second = dateTime.second();
    if (props.mode === "year")
      pickerSelectData.value = [year];
    if (props.mode === "yearmonth")
      pickerSelectData.value = [year, month];
    if (props.mode === "date")
      pickerSelectData.value = [year, month, date];
    if (props.mode === "time")
      pickerSelectData.value = [hour, minute, second];
    if (props.mode === "datetime")
      pickerSelectData.value = [year, month, date, hour, minute, second];
    if (props.mode === "timeNoSecond")
      pickerSelectData.value = [hour, minute];
    if (props.mode === "datetimeNoSecond")
      pickerSelectData.value = [year, month, date, hour, minute];
  };
  const initDateTimePicker = (updateModelValue = true) => {
    let defaultTime = uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs();
    if (props.modelValue) {
      defaultTime = fillDateTime(props.modelValue, props.format);
    }
    if (props.mode !== "time" && props.mode !== "timeNoSecond") {
      defaultTime = defaultTime.year(MIN_MAX_VALUE(minTimeDayjs.value.year(), maxTimeDayjs.value.year(), defaultTime.year()));
      if (defaultTime.year() === minTimeDayjs.value.year()) {
        if (defaultTime.month() < minTimeDayjs.value.month()) {
          defaultTime = defaultTime.month(minTimeDayjs.value.month()).date(minTimeDayjs.value.date()).hour(minTimeDayjs.value.hour()).minute(minTimeDayjs.value.minute()).second(minTimeDayjs.value.second());
        } else if (defaultTime.month() === minTimeDayjs.value.month()) {
          if (defaultTime.date() < minTimeDayjs.value.date()) {
            defaultTime = defaultTime.date(minTimeDayjs.value.date()).hour(minTimeDayjs.value.hour()).minute(minTimeDayjs.value.minute()).second(minTimeDayjs.value.second());
          } else if (defaultTime.date() === minTimeDayjs.value.date()) {
            defaultTime = defaultTime.hour(minTimeDayjs.value.hour()).minute(minTimeDayjs.value.minute()).second(minTimeDayjs.value.second());
            if (defaultTime.hour() === minTimeDayjs.value.hour()) {
              defaultTime = defaultTime.minute(Math.max(minTimeDayjs.value.minute(), defaultTime.minute()));
              if (defaultTime.minute() === minTimeDayjs.value.minute()) {
                defaultTime = defaultTime.second(Math.max(minTimeDayjs.value.second(), defaultTime.second()));
              }
            }
          }
        }
      }
      if (defaultTime.year() === maxTimeDayjs.value.year()) {
        if (defaultTime.month() > maxTimeDayjs.value.month()) {
          defaultTime = defaultTime.month(maxTimeDayjs.value.month()).date(1).hour(0).minute(0).second(0);
        } else if (defaultTime.month() === maxTimeDayjs.value.month()) {
          if (defaultTime.date() > maxTimeDayjs.value.date()) {
            defaultTime = defaultTime.date(maxTimeDayjs.value.date()).hour(maxTimeDayjs.value.hour()).minute(maxTimeDayjs.value.minute()).second(maxTimeDayjs.value.second());
          } else if (defaultTime.date() === maxTimeDayjs.value.date()) {
            defaultTime = defaultTime.hour(maxTimeDayjs.value.hour()).minute(maxTimeDayjs.value.minute()).second(maxTimeDayjs.value.second());
            if (defaultTime.hour() === maxTimeDayjs.value.hour()) {
              defaultTime = defaultTime.minute(Math.min(maxTimeDayjs.value.minute(), defaultTime.minute()));
              if (defaultTime.minute() === maxTimeDayjs.value.minute()) {
                defaultTime = defaultTime.second(0);
              }
            }
          }
        }
      }
      if (props.mode === "datetimeNoSecond") {
        defaultTime = defaultTime.second(0);
      }
    } else {
      defaultTime = defaultTime.hour(MIN_MAX_VALUE(minTimeDayjs.value.hour(), maxTimeDayjs.value.hour(), defaultTime.hour()));
      if (defaultTime.hour() === minTimeDayjs.value.hour()) {
        defaultTime = defaultTime.minute(Math.max(minTimeDayjs.value.minute(), defaultTime.minute()));
        if (defaultTime.minute() === minTimeDayjs.value.minute()) {
          defaultTime = defaultTime.second(Math.max(minTimeDayjs.value.second(), defaultTime.second()));
        }
      }
      if (defaultTime.hour() === maxTimeDayjs.value.hour()) {
        defaultTime = defaultTime.minute(Math.min(maxTimeDayjs.value.minute(), defaultTime.minute()));
        if (defaultTime.minute() === maxTimeDayjs.value.minute()) {
          defaultTime = defaultTime.second(0);
        }
      }
      if (props.mode === "timeNoSecond") {
        defaultTime = defaultTime.second(0);
      }
    }
    generatePickerData(defaultTime);
    setDefaultPickerSelectValue(defaultTime);
    if (updateModelValue) {
      emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, getDateTimeValue(defaultTime));
    }
  };
  const getFillDateTimeDayjs = (value) => {
    let dateTimeValue = "";
    if (props.mode === "year") {
      dateTimeValue = `${value[0]}`;
    }
    if (props.mode === "yearmonth") {
      dateTimeValue = `${value[0]}/${value[1]}`;
    }
    if (props.mode === "date") {
      const year = Number(value[0]);
      const month = Number(value[1]);
      const date = Math.min(uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs().year(year).month(month - 1).daysInMonth(), Number(value[2]));
      dateTimeValue = `${value[0]}/${month}/${date}`;
    }
    if (props.mode === "time" || props.mode === "timeNoSecond") {
      dateTimeValue = `${value[0]}:${value[1]}:${props.mode === "time" ? value[2] : "00"}`;
    }
    if (props.mode === "datetime" || props.mode === "datetimeNoSecond") {
      const year = Number(value[0]);
      const month = Number(value[1]);
      const date = Math.min(uni_modules_tuniaouiVue3_libs_dayjs_index.dayjs().year(year).month(month - 1).daysInMonth(), Number(value[2]));
      dateTimeValue = `${value[0]}/${month}/${date} ${value[3]}:${value[4]}:${props.mode === "datetime" ? value[5] : "00"}`;
    }
    return fillDateTime(dateTimeValue);
  };
  const pickerValueChangeEvent = (value) => {
    let timeValue = getFillDateTimeDayjs(value);
    timeValue = handlePickerChangeMinMaxTime(props.mode, timeValue);
    if (props.mode === "year") {
      pickerSelectData.value = [timeValue.year()];
    }
    if (props.mode === "yearmonth") {
      pickerSelectData.value = [timeValue.year(), timeValue.month() + 1];
    }
    if (props.mode === "date") {
      pickerSelectData.value = [
        timeValue.year(),
        timeValue.month() + 1,
        timeValue.date()
      ];
    }
    if (props.mode === "time") {
      pickerSelectData.value = [
        timeValue.hour(),
        timeValue.minute(),
        timeValue.second()
      ];
    }
    if (props.mode === "datetime") {
      pickerSelectData.value = [
        timeValue.year(),
        timeValue.month() + 1,
        timeValue.date(),
        timeValue.hour(),
        timeValue.minute(),
        timeValue.second()
      ];
    }
    if (props.mode === "timeNoSecond") {
      pickerSelectData.value = [timeValue.hour(), timeValue.minute()];
    }
    if (props.mode === "datetimeNoSecond") {
      pickerSelectData.value = [
        timeValue.year(),
        timeValue.month() + 1,
        timeValue.date(),
        timeValue.hour(),
        timeValue.minute()
      ];
    }
    common_vendor.nextTick$1(() => {
      generatePickerData(timeValue);
    });
    const dateTimeValue = getDateTimeValue(timeValue);
    emit(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, dateTimeValue);
  };
  const handlePickerConfirmEvent = (value) => {
    const timeValue = getFillDateTimeDayjs(value);
    const dateTimeValue = getDateTimeValue(timeValue);
    emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, dateTimeValue);
    common_vendor.nextTick$1(() => {
      emit("confirm", dateTimeValue);
    });
    _closePicker();
  };
  const handlePickerCancelEvent = () => {
    initDateTimePicker(false);
    emit("cancel");
    _closePicker();
  };
  return {
    pickerRef,
    showPicker,
    pickerData,
    pickerSelectData,
    handlePickerCloseEvent,
    initDateTimePicker,
    pickerValueChangeEvent,
    handlePickerConfirmEvent,
    handlePickerCancelEvent
  };
};
exports.useDateTimePicker = useDateTimePicker;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/date-time-picker/src/composables/use-date-time-picker.js.map
