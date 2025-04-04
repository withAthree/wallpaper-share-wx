"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_steps = require("../../../../tokens/steps.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useStepCustomStyle = (props, isActive, stepMode) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("step");
  const stepsContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_steps.stepsContextKey);
  const normalColor = common_vendor.computed(() => {
    return props.color || (stepsContext === null || stepsContext === void 0 ? void 0 : stepsContext.color);
  });
  const activeColor = common_vendor.computed(() => {
    return props.activeColor || (stepsContext === null || stepsContext === void 0 ? void 0 : stepsContext.activeColor);
  });
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(normalColor, "text"), 2), textColorClass = _a[0], textColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "text"), 2), textActiveColorClass = _b[0], textActiveColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(normalColor, "bg"), 2), bgColorClass = _c[0], bgColorStyle = _c[1];
  const _d = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "bg"), 2), bgActiveColorClass = _d[0], bgActiveColorStyle = _d[1];
  const stepClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (isActive.value)
      cls.push(ns.is("active"));
    if (isActive.value) {
      if (textActiveColorClass.value)
        cls.push(textActiveColorClass.value);
    } else {
      if (textColorClass.value)
        cls.push(textColorClass.value);
    }
    return cls.join(" ");
  });
  const stepStyle = common_vendor.computed(() => {
    const style = {};
    if (isActive.value) {
      if (!textActiveColorClass.value)
        style.color = textActiveColorStyle.value || "var(--tn-color-primary)";
    } else {
      if (!textColorClass.value)
        style.color = textColorStyle.value || "var(--tn-color-gray)";
    }
    return style;
  });
  const modeClass = common_vendor.computed(() => {
    return (selector) => {
      const cls = [];
      if (!selector) {
        cls.push(ns.e(`mode-${stepMode.value}`));
      }
      if (stepMode.value === "dot") {
        if (isActive.value) {
          if (bgActiveColorClass.value)
            cls.push(bgActiveColorClass.value);
        } else {
          if (bgColorClass.value)
            cls.push(bgColorClass.value);
        }
      }
      if (stepMode.value === "number") {
        if (isActive.value) {
          if (bgActiveColorClass.value)
            cls.push(bgActiveColorClass.value);
        }
      }
      if (stepMode.value === "dotIcon") {
        if (isActive.value && selector === "icon") {
          if (textActiveColorClass.value)
            cls.push(textActiveColorClass.value);
        }
        if (!isActive.value && selector === "dot") {
          if (bgColorClass.value)
            cls.push(bgColorClass.value);
        }
      }
      return cls.join(" ");
    };
  });
  const modeStyle = common_vendor.computed(() => {
    return (selector) => {
      const style = {};
      if (stepMode.value === "dot") {
        if (isActive.value) {
          if (!bgActiveColorClass.value)
            style.backgroundColor = bgActiveColorStyle.value || "var(--tn-color-primary)";
        } else {
          if (!bgColorClass.value)
            style.backgroundColor = bgColorStyle.value || "var(--tn-color-gray)";
        }
      }
      if (stepMode.value === "number") {
        if (isActive.value) {
          if (!bgActiveColorClass.value) {
            style.backgroundColor = bgActiveColorStyle.value || "var(--tn-color-primary)";
            style.color = "var(--tn-color-white)";
          }
        }
      }
      if (stepMode.value === "dotIcon") {
        if (isActive.value && selector === "icon") {
          if (!textActiveColorClass.value) {
            style.color = textActiveColorStyle.value || "var(--tn-color-primary)";
          }
        }
        if (!isActive.value && selector === "dot") {
          if (!bgColorClass.value)
            style.backgroundColor = bgColorStyle.value || "var(--tn-color-gray)";
        }
      }
      return style;
    };
  });
  const lineClass = common_vendor.computed(() => {
    const cls = [ns.e("line"), ns.is("no-title", !props.title)];
    if (isActive.value) {
      if (bgActiveColorClass.value)
        cls.push(bgActiveColorClass.value);
    } else {
      if (bgColorClass.value)
        cls.push(bgColorClass.value);
    }
    return cls.join(" ");
  });
  const lineStyle = common_vendor.computed(() => {
    const style = {};
    if (isActive.value) {
      if (!bgActiveColorClass.value)
        style.backgroundColor = bgActiveColorStyle.value || "var(--tn-color-primary)";
    } else {
      if (!bgColorClass.value)
        style.backgroundColor = bgColorStyle.value || "var(--tn-color-gray)";
    }
    return style;
  });
  return {
    ns,
    stepClass,
    stepStyle,
    modeClass,
    modeStyle,
    lineClass,
    lineStyle
  };
};
exports.useStepCustomStyle = useStepCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/steps/src/composables/step-custom.js.map
