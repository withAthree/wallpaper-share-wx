"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_types = require("../../../../utils/types.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_switch_src_composables_useSwitchCommonProps = require("./use-switch-common-props.js");
const useSwitchCustomStyle = (props, selected) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("switch");
  const _a = uni_modules_tuniaouiVue3_components_switch_src_composables_useSwitchCommonProps.useSwitchCommonProps(props), size = _a.size, disabled = _a.disabled;
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "activeColor"), "bg"), 2), activeBgColorClass = _b[0], activeBgColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "inactiveColor"), "bg"), 2), inactiveBgColorClass = _c[0], inactiveBgColorStyle = _c[1];
  const _d = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "activeColor"), "text"), 2), activeTextColorClass = _d[0], activeTextColorStyle = _d[1];
  const _e = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "inactiveColor"), "text"), 2), inactiveTextColorClass = _e[0], inactiveTextColorStyle = _e[1];
  const switchClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (props.shape)
      cls.push(ns.m(props.shape));
    if (size.value)
      cls.push(ns.m(size.value));
    if (disabled.value)
      cls.push(ns.m("disabled"));
    if (selected.value) {
      if (activeBgColorClass.value)
        cls.push(activeBgColorClass.value);
      if (activeTextColorClass.value)
        cls.push(activeTextColorClass.value);
    } else {
      if (inactiveBgColorClass.value)
        cls.push(inactiveBgColorClass.value);
      if (inactiveTextColorClass.value)
        cls.push(inactiveTextColorClass.value);
    }
    if (props.customClass)
      cls.push(props.customClass);
    return cls.join(" ");
  });
  const switchStyle = common_vendor.computed(() => {
    const style = {};
    if (props.width)
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.width);
    if (selected.value) {
      if (activeBgColorStyle.value || !activeBgColorClass.value) {
        style.backgroundColor = activeBgColorStyle.value || "var(--tn-color-primary)";
      }
      if (activeTextColorStyle.value) {
        style.color = activeTextColorStyle.value;
      }
    } else {
      if (inactiveBgColorStyle.value || !inactiveBgColorClass.value) {
        style.backgroundColor = inactiveBgColorStyle.value || "var(--tn-color-gray-disabled)";
      }
      if (inactiveTextColorStyle.value) {
        style.color = inactiveTextColorStyle.value;
      }
    }
    if (!uni_modules_tuniaouiVue3_utils_types.isEmpty(props.customStyle))
      Object.assign(style, props.customStyle);
    return style;
  });
  return {
    ns,
    switchClass,
    switchStyle
  };
};
exports.useSwitchCustomStyle = useSwitchCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/switch/src/composables/switch-custom.js.map
