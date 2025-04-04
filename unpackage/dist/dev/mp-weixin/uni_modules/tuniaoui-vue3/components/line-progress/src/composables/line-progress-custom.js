"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_base_composables_useProgressProps_index = require("../../../base/composables/use-progress-props/index.js");
const useLineProgressCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("line-progress");
  const _a = uni_modules_tuniaouiVue3_components_base_composables_useProgressProps_index.useProgressProps(props), percent = _a.percent, activeColorClass = _a.activeColorClass, activeColorStyle = _a.activeColorStyle, inactiveColorClass = _a.inactiveColorClass, inactiveColorStyle = _a.inactiveColorStyle;
  const progressClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (inactiveColorClass.value)
      cls.push(inactiveColorClass.value);
    return cls.join(" ");
  });
  const progressStyle = common_vendor.computed(() => {
    const style = {};
    if (!inactiveColorClass.value)
      style.backgroundColor = inactiveColorStyle.value || "var(--tn-color-gray-disabled)";
    if (props.height) {
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
      style.fontSize = style.height;
    }
    return style;
  });
  const activeProgressClass = common_vendor.computed(() => {
    const cls = [ns.e("active")];
    if (activeColorClass.value)
      cls.push(activeColorClass.value);
    if (props.stripe) {
      cls.push(ns.em("active", "stripe"));
      if (props.stripeAnimated)
        cls.push(ns.em("active", "stripe--animation"));
    }
    return cls.join(" ");
  });
  const activeProgressStyle = common_vendor.computed(() => {
    const style = {};
    if (percent.value)
      style.width = `${percent.value}%`;
    if (props.duration)
      style.transitionDuration = `${props.duration}ms`;
    if (!activeColorClass.value)
      style.backgroundColor = activeColorStyle.value || "var(--tn-color-primary)";
    return style;
  });
  return {
    ns,
    progressClass,
    progressStyle,
    activeProgressClass,
    activeProgressStyle
  };
};
exports.useLineProgressCustomStyle = useLineProgressCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/line-progress/src/composables/line-progress-custom.js.map
