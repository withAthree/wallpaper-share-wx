"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
const uni_modules_tuniaouiVue3_hooks_useTouch_index = require("../../../../hooks/use-touch/index.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_slider_src_composables_useSliderCommonPorps = require("./use-slider-common-porps.js");
const uni_modules_tuniaouiVue3_components_slider_src_composables_useSlider = require("./use-slider.js");
const useSliderNodeInfo = (props) => {
  const sliderId = `slider-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const getSelectorNodeInfo = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery().getSelectorNodeInfo;
  const disabled = uni_modules_tuniaouiVue3_components_slider_src_composables_useSliderCommonPorps.useSliderCommonProps(props).disabled;
  const _a = uni_modules_tuniaouiVue3_components_slider_src_composables_useSlider.useSlider(props), mode = _a.mode, sliderValue = _a.sliderValue, precision = _a.precision, updateSliderValue = _a.updateSliderValue, changeSliderValue = _a.changeSliderValue;
  const sliderNodeInfo = common_vendor.reactive({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  });
  const _b = uni_modules_tuniaouiVue3_hooks_useTouch_index.useTouch(), sliderBarCurrentX = _b.currentX, sliderTouchUpdateOptions = _b.updateOptions, sliderTouchStart = _b.onTouchStart, sliderTouchMove = _b.onTouchMove, sliderTouchEnd = _b.onTouchEnd;
  common_vendor.watch(() => {
    return disabled;
  }, (val) => {
    sliderTouchUpdateOptions({
      disabled: val.value
    });
  });
  let initCount = 0;
  const initSliderNodeInfo = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      try {
        const sliderRectInfo = yield getSelectorNodeInfo(`#${sliderId}`);
        if (!sliderRectInfo) {
          throw new Error("获取滑动条的布局信息失败");
        }
        initCount = 0;
        sliderNodeInfo.left = sliderRectInfo.left || 0;
        sliderNodeInfo.top = sliderRectInfo.top || 0;
        sliderNodeInfo.right = sliderRectInfo.right || 0;
        sliderNodeInfo.bottom = sliderRectInfo.bottom || 0;
        sliderNodeInfo.width = sliderRectInfo.width || 0;
        sliderNodeInfo.height = sliderRectInfo.height || 0;
        sliderTouchUpdateOptions({
          left: sliderNodeInfo.left,
          right: sliderNodeInfo.right,
          top: sliderNodeInfo.top,
          bottom: sliderNodeInfo.bottom
        });
      } catch (err) {
        initCount++;
        if (initCount > 10) {
          initCount = 0;
          uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSilider", `获取滑动条的布局信息失败: ${err}`);
          return;
        }
        setTimeout(() => {
          initSliderNodeInfo();
        }, 150);
      }
    });
  };
  const onSliderBarTouchMove = (event, type) => {
    sliderTouchMove(event);
    const sliderBarPosition = sliderBarCurrentX.value / sliderNodeInfo.width * 100;
    const value = setPosiiton(sliderBarPosition);
    updateSliderValue(value, type);
  };
  const onSliderBarTouchEnd = (event, type) => {
    sliderTouchEnd(event);
    const sliderBarPosition = sliderBarCurrentX.value / sliderNodeInfo.width * 100;
    const value = setPosiiton(sliderBarPosition);
    changeSliderValue(value, type);
  };
  const sliderClickEvent = (event) => {
    if (disabled.value)
      return;
    let touchX = 0;
    touchX = event.detail.x;
    const sliderBarPosition = (touchX - sliderNodeInfo.left) / sliderNodeInfo.width * 100;
    const value = setPosiiton(sliderBarPosition);
    if (mode.value === "single") {
      updateSliderValue(value);
      changeSliderValue(value);
    } else if (mode.value === "range") {
      const minValue = sliderValue.value[0];
      const maxValue = sliderValue.value[1];
      const minDistance = Math.abs(minValue - value);
      const maxDistance = Math.abs(maxValue - value);
      if (minDistance < maxDistance) {
        updateSliderValue(value, "min");
        changeSliderValue(value, "min");
      } else {
        updateSliderValue(value, "max");
        changeSliderValue(value, "max");
      }
    }
  };
  const setPosiiton = (position) => {
    if (position === null || Number.isNaN(+position))
      return 0;
    if (position < 0)
      position = 0;
    else if (position > 100)
      position = 100;
    const lengthPerStep = 100 / ((props.max - props.min) / props.step);
    const steps = Math.round(position / lengthPerStep);
    let value = steps * lengthPerStep * (props.max - props.min) * 0.01 + props.min;
    value = Number.parseFloat(value.toFixed(precision.value));
    return value;
  };
  return {
    sliderId,
    initSliderNodeInfo,
    onSliderBarTouchStart: sliderTouchStart,
    onSliderBarTouchMove,
    onSliderBarTouchEnd,
    sliderClickEvent
  };
};
exports.useSliderNodeInfo = useSliderNodeInfo;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/slider/src/composables/use-slider-node-info.js.map
