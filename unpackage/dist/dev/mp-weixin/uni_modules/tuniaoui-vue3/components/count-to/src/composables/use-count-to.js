"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const useCountTo = (props, emits) => {
  const startValue = common_vendor.computed(() => {
    return Number(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props.start, 0));
  });
  const endValue = common_vendor.computed(() => {
    return Number(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props.end, 0));
  });
  const countDown = common_vendor.computed(() => {
    return startValue.value > endValue.value;
  });
  const duration = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props.duration, 1500);
  });
  const content = common_vendor.ref("");
  const _formatContent = (value) => {
    const throusandNumberReg = /(\d+)(\d{3})/;
    const valueStr = value.toFixed(props.decimals);
    const valueArr = valueStr.split(".");
    let firestValue = valueArr[0];
    let secondValue = "";
    if (valueArr.length > 1) {
      secondValue = `${uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props.decimalSeparator, ".")}${valueArr[1]}`;
    }
    if (props === null || props === void 0 ? void 0 : props.thousandsSeparator) {
      while (throusandNumberReg.test(firestValue)) {
        firestValue = firestValue.replace(throusandNumberReg, `$1${props.thousandsSeparator}$2`);
      }
    }
    return `${firestValue}${secondValue}`;
  };
  function _easeOutCubic(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
  }
  let startTime = null;
  const countToAnimation = () => {
    if (!startTime)
      startTime = Date.now();
    const elapsed = Date.now() - startTime;
    let currentValue = 0;
    if (countDown.value) {
      currentValue = startValue.value - _easeOutCubic(elapsed, 0, startValue.value - endValue.value, duration.value);
      currentValue = currentValue < endValue.value ? endValue.value : currentValue;
    } else {
      currentValue = _easeOutCubic(elapsed, startValue.value, endValue.value - startValue.value, duration.value);
      currentValue = currentValue > endValue.value ? endValue.value : currentValue;
    }
    content.value = _formatContent(currentValue);
    if (elapsed < duration.value) {
      setTimeout(countToAnimation, 16);
    } else {
      emits("end");
    }
  };
  common_vendor.watch([endValue, startValue], () => {
    startTime = null;
    countToAnimation();
  }, {
    immediate: true
  });
  return {
    content
  };
};
exports.useCountTo = useCountTo;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-to/src/composables/use-count-to.js.map
