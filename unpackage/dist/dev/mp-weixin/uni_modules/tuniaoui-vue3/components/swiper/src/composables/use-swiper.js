"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const useSwiper = (props, emits) => {
  const currentSwiperIndex = common_vendor.ref(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props === null || props === void 0 ? void 0 : props.modelValue, 0));
  common_vendor.watch(() => {
    return props.modelValue;
  }, (value) => {
    return currentSwiperIndex.value = uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(value, 0);
  });
  const swiperData = common_vendor.computed(() => {
    var _a;
    if ((_a = props.data) === null || _a === void 0 ? void 0 : _a.length)
      return props.data;
    if (props.blankCount)
      return Array.from({ length: props.blankCount }).map((_, i) => {
        return i;
      });
    return [];
  });
  const swiperCount = common_vendor.computed(() => {
    var _a;
    return ((_a = swiperData.value) === null || _a === void 0 ? void 0 : _a.length) || 0;
  });
  const swiperChangeHandle = (event) => {
    const current = event.detail.current;
    if (props.modelValue === void 0 || props.modelValue === 0)
      currentSwiperIndex.value = current;
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, current);
    common_vendor.nextTick$1(() => {
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, current);
    });
  };
  const itemClickHandle = () => {
    emits("item-click", currentSwiperIndex.value);
  };
  return {
    swiperData,
    currentSwiperIndex,
    swiperCount,
    swiperChangeHandle,
    itemClickHandle
  };
};
exports.useSwiper = useSwiper;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/swiper/src/composables/use-swiper.js.map
