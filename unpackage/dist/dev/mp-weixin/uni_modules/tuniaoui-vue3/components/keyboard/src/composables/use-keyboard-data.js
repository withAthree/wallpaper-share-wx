"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_components_keyboard_libs_carKeyboardData = require("../../libs/car-keyboard-data.js");
const useKeyboardData = (props, carLang) => {
  const generateNormalKeyboardData = (digit = false, idcard = false, random = false) => {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (digit)
      numbers.push(".");
    if (idcard)
      numbers.push("X");
    if (random)
      numbers.sort(() => {
        return Math.random() - 0.5;
      });
    return numbers.map((item) => {
      return {
        value: item,
        disabled: props.disabled
      };
    });
  };
  const keyboardData = common_vendor.computed(() => {
    let data = [];
    switch (props.mode) {
      case "number":
        data = generateNormalKeyboardData();
        break;
      case "digit":
        data = generateNormalKeyboardData(true);
        break;
      case "idcard":
        data = generateNormalKeyboardData(false, true);
        break;
      case "random":
        data = generateNormalKeyboardData(false, false, props.show);
        break;
    }
    return data;
  });
  const carKeyboardData = common_vendor.computed(() => {
    const data = [];
    const _fillCarKeyboardData = (rawData) => {
      return rawData.map((item) => {
        return {
          value: item,
          disabled: uni_modules_tuniaouiVue3_components_keyboard_libs_carKeyboardData.carKeyboardSpecialData.includes(item) || props.disabled
        };
      });
    };
    if (props.mode === "car") {
      if (carLang.value === "cn") {
        const fillCnData = _fillCarKeyboardData(uni_modules_tuniaouiVue3_components_keyboard_libs_carKeyboardData.carKeyboardCnData);
        data.push(fillCnData.slice(0, 10), fillCnData.slice(10, 20), fillCnData.slice(20, 30), fillCnData.slice(30, 37));
      } else {
        const fillEnData = _fillCarKeyboardData(uni_modules_tuniaouiVue3_components_keyboard_libs_carKeyboardData.carKeyboardEnData);
        data.push(fillEnData.slice(0, 10), fillEnData.slice(10, 20), fillEnData.slice(20, 29), fillEnData.slice(29, 36));
      }
    }
    return data;
  });
  return {
    keyboardData,
    carKeyboardData
  };
};
exports.useKeyboardData = useKeyboardData;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/keyboard/src/composables/use-keyboard-data.js.map
