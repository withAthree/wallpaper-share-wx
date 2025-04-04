"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentSize_index = require("../../../../hooks/use-component-size/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useEmptyCustomStyle = (props, customIconContent, customTipsContent) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("empty");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "color"), "text"), 2), textColorClass = _a[0], textColorStyle = _a[1];
  const sizeType = uni_modules_tuniaouiVue3_hooks_useComponentSize_index.useComponentSize(props.size).sizeType;
  const emptyClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (textColorClass.value)
      cls.push(textColorClass.value);
    if (props.size && sizeType.value === "inner")
      cls.push(ns.m(props.size));
    return cls.join(" ");
  });
  const emptyStyle = common_vendor.computed(() => {
    const style = {};
    if (!textColorClass.value) {
      style.color = textColorStyle.value || "var(--tn-color-gray-disbaled)";
    }
    return style;
  });
  const iconTextStyle = common_vendor.computed(() => {
    return (type) => {
      const style = {};
      if (props.size && sizeType.value === "custom") {
        if (type === "icon" && !customIconContent.value) {
          style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
          style.width = style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
        }
        if (type === "tips" && !customTipsContent.value) {
          style.fontSize = `calc(${uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size)} * 0.35)`;
        }
      }
      return style;
    };
  });
  return {
    ns,
    emptyClass,
    emptyStyle,
    iconTextStyle
  };
};
exports.useEmptyCustomStyle = useEmptyCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/empty/src/composables/empty-custom.js.map
