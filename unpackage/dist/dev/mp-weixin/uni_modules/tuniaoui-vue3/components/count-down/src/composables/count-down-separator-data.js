"use strict";
const useCountDownSeparatorData = () => {
  const countDownSeparatorData = {
    cn: {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    },
    en: {
      day: ":",
      hour: ":",
      minute: ":",
      second: ""
    }
  };
  const getSeparatorData = (mode, key) => {
    return countDownSeparatorData[mode][key];
  };
  return {
    getSeparatorData
  };
};
exports.useCountDownSeparatorData = useCountDownSeparatorData;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-down/src/composables/count-down-separator-data.js.map
