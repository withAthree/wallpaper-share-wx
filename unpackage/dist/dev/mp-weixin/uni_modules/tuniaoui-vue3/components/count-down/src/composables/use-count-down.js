"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_format = require("../../../../utils/format.js");
const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const useCountDown = (props, emits) => {
  let time = 0;
  const day = common_vendor.ref("");
  const hour = common_vendor.ref("");
  const minute = common_vendor.ref("");
  const second = common_vendor.ref("");
  const splitCountDownData = () => {
    const showDay = props.showDay, showHour = props.showHour, showMinute = props.showMinute, showSecond = props.showSecond, autoHideDay = props.autoHideDay;
    const _day = Math.floor(time / DAY);
    const _hour = showDay ? Math.floor(time % DAY / HOUR) : Math.floor(time / HOUR);
    const _minute = Math.floor(time % HOUR / MINUTE);
    const _second = Math.floor(time % MINUTE);
    if (!showDay || autoHideDay && _day === 0)
      day.value = "";
    else
      day.value = uni_modules_tuniaouiVue3_utils_format.formatNumber(_day, 4);
    hour.value = showHour ? uni_modules_tuniaouiVue3_utils_format.formatNumber(_hour, 4) : "";
    minute.value = showMinute ? uni_modules_tuniaouiVue3_utils_format.formatNumber(_minute) : "";
    second.value = showSecond ? uni_modules_tuniaouiVue3_utils_format.formatNumber(_second) : "";
  };
  let countDownTimer = null;
  const startCountDown = () => {
    if (time <= 0)
      time = props.time;
    else {
      time--;
    }
    stopCountDown();
    emits("start");
    countDownTimer = setInterval(() => {
      if (time < 0) {
        stopCountDown();
        emits("end");
        return;
      }
      splitCountDownData();
      time--;
    }, 1e3);
  };
  const stopCountDown = () => {
    if (countDownTimer) {
      clearInterval(countDownTimer);
      countDownTimer = null;
    }
  };
  const resetCountDown = () => {
    stopCountDown();
    time = props.time;
    splitCountDownData();
  };
  common_vendor.watch(() => {
    return props.time;
  }, (_time) => {
    resetCountDown();
    if (props.autoStart && _time > 0) {
      startCountDown();
    }
  }, {
    immediate: true
  });
  return {
    day,
    hour,
    minute,
    second,
    startCountDown,
    stopCountDown,
    resetCountDown
  };
};
exports.useCountDown = useCountDown;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-down/src/composables/use-count-down.js.map
