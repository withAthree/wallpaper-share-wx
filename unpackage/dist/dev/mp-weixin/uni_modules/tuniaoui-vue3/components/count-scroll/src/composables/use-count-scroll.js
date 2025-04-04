"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const defaultNumberList = Array.from({ length: 10 }, (_, i) => {
  return String(i);
});
const useCountScroll = (props) => {
  const columns = common_vendor.ref([]);
  const activeIndex = common_vendor.ref([]);
  const separator = common_vendor.computed(() => {
    const decimalSeparator = props.decimalSeparator, thousandsSeparator = props.thousandsSeparator;
    const separatorList = [
      decimalSeparator,
      uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(thousandsSeparator, "")
    ];
    return separatorList.filter((item) => {
      return item;
    });
  });
  const _generateColumns = () => {
    const value = props.value;
    const valueArr = String(value).split("");
    const _fillDefaultNumber = (item) => {
      if (separator.value.includes(item))
        return [item];
      return defaultNumberList;
    };
    columns.value = valueArr.map(_fillDefaultNumber);
    common_vendor.nextTick$1(() => {
      setTimeout(() => {
        activeIndex.value = valueArr.map((item) => {
          if (separator.value.includes(item))
            return 0;
          return Number(item);
        });
      }, 50);
    });
  };
  common_vendor.watch(() => {
    return props.value;
  }, _generateColumns, { immediate: true });
  return {
    columns,
    activeIndex
  };
};
exports.useCountScroll = useCountScroll;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-scroll/src/composables/use-count-scroll.js.map
