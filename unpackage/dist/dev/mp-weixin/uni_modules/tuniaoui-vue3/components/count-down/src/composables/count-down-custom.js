"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentSize_index = require("../../../../hooks/use-component-size/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useCountDownCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("count-down");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "textColor"), "text"), 2), textColorClass = _a[0], textColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "separatorColor"), "text"), 2), separatorColorClass = _b[0], separatorColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "borderColor"), "border"), 2), borderColorClass = _c[0], borderColorStyle = _c[1];
  const sizeType = uni_modules_tuniaouiVue3_hooks_useComponentSize_index.useComponentSize(props.size).sizeType;
  const countDownClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (props.size && sizeType.value === "inner")
      cls.push(ns.m(props.size));
    return cls.join(" ");
  });
  const countDownStyle = common_vendor.computed(() => {
    const style = {};
    if (props.size && sizeType.value === "custom")
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
    return style;
  });
  const textClass = common_vendor.computed(() => {
    const cls = [ns.e("text")];
    if (textColorClass.value)
      cls.push(textColorClass.value);
    if (props.border) {
      cls.push(ns.is("border"));
      if (borderColorClass.value)
        cls.push(borderColorClass.value);
    }
    return cls.join(" ");
  });
  const textStyle = common_vendor.computed(() => {
    const style = {};
    if (!textColorClass.value)
      style.color = textColorStyle.value || "var(--tn-text-color-primary)";
    if (props.border) {
      if (!borderColorClass.value)
        style.borderColor = borderColorStyle.value || "var(--tn-color-gray-disabled)";
    }
    return style;
  });
  const separatorClass = common_vendor.computed(() => {
    const cls = [
      ns.e("separator"),
      ns.em("separator", props.separatorMode)
    ];
    if (separatorColorClass.value)
      cls.push(separatorColorClass.value);
    return cls.join(" ");
  });
  const separatorStyle = common_vendor.computed(() => {
    const style = {};
    if (!separatorColorClass.value)
      style.color = separatorColorStyle.value || "var(--tn-text-color-secondary)";
    return style;
  });
  return {
    ns,
    countDownClass,
    countDownStyle,
    textClass,
    textStyle,
    separatorClass,
    separatorStyle
  };
};
exports.useCountDownCustomStyle = useCountDownCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-down/src/composables/count-down-custom.js.map
