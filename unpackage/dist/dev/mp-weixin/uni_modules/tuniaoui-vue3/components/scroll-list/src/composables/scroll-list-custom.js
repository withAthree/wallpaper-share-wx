"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useScrollListCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("scroll-list");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "indicatorColor"), "bg"), 2), indicatorColorClass = _a[0], indicatorColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "indicatorBlockColor"), "bg"), 2), indicatorBlockColorClass = _b[0], indicatorBlockColorStyle = _b[1];
  const indicatorClass = common_vendor.computed(() => {
    const cls = [ns.e("indicator")];
    if (indicatorColorClass.value)
      cls.push(indicatorColorClass.value);
    return cls.join(" ");
  });
  const indicatorStyle = common_vendor.computed(() => {
    const style = {};
    if (props.indicatorWidth)
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.indicatorWidth, "px");
    if (!indicatorColorClass.value) {
      style.backgroundColor = indicatorColorStyle.value || "var(--tn-color-gray-disabled)";
    }
    return style;
  });
  const indicatorBlockClass = common_vendor.computed(() => {
    const cls = [ns.e("indicator-block")];
    if (indicatorBlockColorClass.value)
      cls.push(indicatorBlockColorClass.value);
    return cls.join(" ");
  });
  const indicatorBlockStyle = common_vendor.computed(() => {
    return (distance) => {
      const style = {};
      if (props.indicatorBlockWidth)
        style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.indicatorBlockWidth, "px");
      style.left = `${distance}px`;
      if (!indicatorBlockColorClass.value) {
        style.backgroundColor = indicatorBlockColorStyle.value || "var(--tn-color-primary)";
      }
      return style;
    };
  });
  return {
    ns,
    indicatorClass,
    indicatorStyle,
    indicatorBlockClass,
    indicatorBlockStyle
  };
};
exports.useScrollListCustomStyle = useScrollListCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/scroll-list/src/composables/scroll-list-custom.js.map
