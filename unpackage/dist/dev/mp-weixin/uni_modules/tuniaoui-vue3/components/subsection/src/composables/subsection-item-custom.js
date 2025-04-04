"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_subsection = require("../../../../tokens/subsection.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useSubsectionItemCustomStyle = (props, active) => {
  const subsectionContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_subsection.subsectionContextKey);
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("subsection-item");
  const activeColor = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyDoubleVariableInDefault(props.activeColor, subsectionContext === null || subsectionContext === void 0 ? void 0 : subsectionContext.activeColor, "");
  });
  const subsectionMode = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(subsectionContext === null || subsectionContext === void 0 ? void 0 : subsectionContext.mode, "default");
  });
  const disabled = common_vendor.computed(() => {
    return (subsectionContext === null || subsectionContext === void 0 ? void 0 : subsectionContext.disabled) || props.disabled || false;
  });
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "text"), 2), activeTextColorClass = _a[0], activeTextColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(subsectionContext, "activeColor"), "border"), 2), activeBorderColorClass = _b[0], activeBorderColorStyle = _b[1];
  const subsectionItemClass = common_vendor.computed(() => {
    const cls = [
      ns.b(),
      ns.m(subsectionMode.value),
      ns.is("active", active.value),
      ns.is("disabled", disabled.value)
    ];
    if (subsectionMode.value === "default") {
      if (activeBorderColorClass.value)
        cls.push(activeBorderColorClass.value);
    }
    if (subsectionMode.value === "button") {
      if (active.value) {
        if (activeTextColorClass.value)
          cls.push(activeTextColorClass.value);
      }
    }
    return cls.join(" ");
  });
  const subsectionItemStyle = common_vendor.computed(() => {
    const style = {};
    if (subsectionMode.value === "default") {
      if (!activeBorderColorClass.value)
        style.borderColor = activeBorderColorStyle.value || "var(--tn-color-primary)";
      if (active.value) {
        style.color = "var(--tn-color-white)";
      }
    }
    if (subsectionMode.value === "button") {
      if (active.value) {
        if (!activeTextColorClass.value)
          style.color = activeTextColorStyle.value || "var(--tn-color-primary)";
      }
    }
    return style;
  });
  return {
    ns,
    subsectionItemClass,
    subsectionItemStyle
  };
};
exports.useSubsectionItemCustomStyle = useSubsectionItemCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/subsection/src/composables/subsection-item-custom.js.map
