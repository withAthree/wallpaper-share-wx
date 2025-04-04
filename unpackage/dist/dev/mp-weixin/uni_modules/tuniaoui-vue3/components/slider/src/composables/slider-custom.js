"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_slider_src_composables_useSliderCommonPorps = require("./use-slider-common-porps.js");
const useSliderCustomStyle = (props, sliderValue, mode) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("slider");
  const _a = uni_modules_tuniaouiVue3_components_slider_src_composables_useSliderCommonPorps.useSliderCommonProps(props), size = _a.size, disabled = _a.disabled;
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "activeColor"), "bg"), 2), activeBgColorClass = _b[0], activeBgColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "inactiveColor"), "bg"), 2), inactiveBgColorClass = _c[0], inactiveBgColorStyle = _c[1];
  const sliderBarPosition = common_vendor.computed(() => {
    if (mode.value === "single") {
      return [
        `${(sliderValue.value - props.min) / (props.max - props.min) * 100}%`,
        "0"
      ];
    } else {
      return [
        `${(sliderValue.value[0] - props.min) / (props.max - props.min) * 100}%`,
        `${(sliderValue.value[1] - props.min) / (props.max - props.min) * 100}%`
      ];
    }
  });
  const sliderClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (size.value)
      cls.push(ns.m(size.value));
    if (disabled.value)
      cls.push(ns.m("disabled"));
    if (inactiveBgColorClass.value)
      cls.push(inactiveBgColorClass.value);
    return cls.join(" ");
  });
  const sliderStyle = common_vendor.computed(() => {
    const style = {};
    if (props.sliderHeight)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.sliderHeight);
    if (!inactiveBgColorClass.value)
      style.backgroundColor = inactiveBgColorStyle.value || "var(--tn-color-grey-light)";
    return style;
  });
  const activeSliderClass = common_vendor.computed(() => {
    const cls = [ns.e("active")];
    if (activeBgColorClass.value)
      cls.push(activeBgColorClass.value);
    return cls.join(" ");
  });
  const activeSliderStyle = common_vendor.computed(() => {
    const style = {};
    if (!activeBgColorClass.value)
      style.backgroundColor = activeBgColorStyle.value || "var(--tn-color-primary)";
    if (mode.value === "single") {
      style.width = sliderBarPosition.value[0];
    } else if (mode.value === "range") {
      style.width = `calc(${sliderBarPosition.value[1]} - ${sliderBarPosition.value[0]})`;
      style.left = sliderBarPosition.value[0];
    }
    return style;
  });
  const sliderBarClass = common_vendor.computed(() => {
    const cls = [ns.e("bar")];
    return cls.join(" ");
  });
  const sliderBarStyle = common_vendor.computed(() => {
    return (type) => {
      const style = {};
      if (props.sliderBarSize)
        style.width = style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.sliderBarSize);
      style.left = type === "min" ? sliderBarPosition.value[0] : sliderBarPosition.value[1];
      return style;
    };
  });
  return {
    ns,
    sliderClass,
    sliderStyle,
    activeSliderClass,
    activeSliderStyle,
    sliderBarClass,
    sliderBarStyle
  };
};
exports.useSliderCustomStyle = useSliderCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/slider/src/composables/slider-custom.js.map
