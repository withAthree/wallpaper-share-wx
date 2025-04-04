"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useRateItemData = (props) => {
  const rateItemData = common_vendor.ref([]);
  const generateRateItemData = () => {
    const max = props.max, inactiveIcon = props.inactiveIcon, activeIcon = props.activeIcon, inactiveColor = props.inactiveColor, activeColor = props.activeColor, customData = props.customData;
    const defaultConfig = {
      inactiveIcon,
      activeIcon,
      inactiveColor,
      activeColor
    };
    const data = [];
    for (let i = 0; i < max; i++) {
      const configData = Object.assign(Object.assign({}, defaultConfig), uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(customData === null || customData === void 0 ? void 0 : customData[i], {}));
      const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(configData, "inactiveColor"), "text"), 2), inactiveColorClass = _a[0], inactiveColorStyle = _a[1];
      const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(configData, "activeColor"), "text"), 2), activeColorClass = _b[0], activeColorStyle = _b[1];
      data.push({
        active: {
          icon: configData.activeIcon,
          color: {
            class: activeColorClass.value,
            style: activeColorStyle.value
          }
        },
        inactive: {
          icon: configData.inactiveIcon,
          color: {
            class: inactiveColorClass.value,
            style: inactiveColorStyle.value
          }
        }
      });
    }
    rateItemData.value = data;
  };
  generateRateItemData();
  return {
    rateItemData
  };
};
exports.useRateItemData = useRateItemData;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/rate/src/composables/use-rate-item-data.js.map
