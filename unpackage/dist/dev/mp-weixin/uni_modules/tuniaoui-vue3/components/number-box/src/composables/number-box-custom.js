"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useNumberBoxCustomStyle = (props, inputValue) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("number-box");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "bgColor"), "bg"), 2), bgColorClass = _a[0], bgColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "textColor"), "text"), 2), textColorClass = _b[0], textColorStyle = _b[1];
  const numberBoxClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (props.size)
      cls.push(ns.m(props.size));
    if (props.disabled)
      cls.push(ns.m("disabled"));
    return cls.join(" ");
  });
  const numberBoxStyle = common_vendor.computed(() => {
    const style = {};
    if (props.width)
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.width);
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    if (props.fontSize)
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize);
    return style;
  });
  const numberBoxOperationWrapperClass = common_vendor.computed(() => {
    return (type) => {
      const cls = [];
      if (bgColorClass.value)
        cls.push(bgColorClass.value);
      if (textColorClass.value)
        cls.push(textColorClass.value);
      if (type === "minus" && inputValue.value <= props.min || type === "plus" && inputValue.value >= props.max) {
        cls.push(ns.is("disabled"));
      }
      return cls.join(" ");
    };
  });
  const numberBoxOperationWrapperStyle = common_vendor.computed(() => {
    return (type) => {
      const style = {};
      if (!bgColorClass.value)
        style.backgroundColor = bgColorStyle.value || "var(--tn-color-gray-light)";
      if (textColorStyle.value)
        style.color = textColorStyle.value;
      if (type === "minus" || type === "plus") {
        if (props.height) {
          style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
          style.height = style.width;
        }
        if (props.fontSize) {
          style.fontSize = `calc(${uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize)} * 1.2)`;
        }
      }
      return style;
    };
  });
  return {
    ns,
    numberBoxClass,
    numberBoxStyle,
    numberBoxOperationWrapperClass,
    numberBoxOperationWrapperStyle
  };
};
exports.useNumberBoxCustomStyle = useNumberBoxCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/number-box/src/composables/number-box-custom.js.map
