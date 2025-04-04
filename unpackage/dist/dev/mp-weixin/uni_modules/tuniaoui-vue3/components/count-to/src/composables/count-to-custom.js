"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useCountToCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("count-to");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "textColor"), "text"), 2), textColorClass = _a[0], textColorStyle = _a[1];
  const countToClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (textColorClass.value)
      cls.push(textColorClass.value);
    return cls.join(" ");
  });
  const countToStyle = common_vendor.computed(() => {
    const style = {};
    if (!textColorClass.value) {
      style.color = textColorStyle.value || "var(--tn-text-color-primary)";
    }
    if (props.fontSize)
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize);
    return style;
  });
  return {
    ns,
    countToClass,
    countToStyle
  };
};
exports.useCountToCustomStyle = useCountToCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-to/src/composables/count-to-custom.js.map
