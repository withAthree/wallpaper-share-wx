"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useTabsCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("tabs");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "bgColor"), "bg"), 2), bgColorClass = _a[0], bgColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "barColor"), "bg"), 2), barColorClass = _b[0], barColorStyle = _b[1];
  const tabsClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (props.bottomShadow)
      cls.push(ns.m("bottom-shadow"));
    if (bgColorClass.value)
      cls.push(bgColorClass.value);
    return cls.join(" ");
  });
  const tabsStyle = common_vendor.computed(() => {
    const style = {};
    if (!bgColorClass.value) {
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
    }
    if (props.height) {
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
      if (props.offsetTop) {
        style.height = `calc(${style.height} + ${props.offsetTop}px)`;
      }
    }
    return style;
  });
  const barClass = common_vendor.computed(() => {
    const cls = [ns.e("bar")];
    if (barColorClass.value)
      cls.push(barColorClass.value);
    return cls.join(" ");
  });
  const barStyle = common_vendor.computed(() => {
    const style = {};
    if (!barColorClass.value) {
      style.backgroundColor = barColorStyle.value || "var(--tn-color-primary)";
    }
    if (props.barWidth)
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.barWidth);
    return style;
  });
  return {
    ns,
    tabsClass,
    tabsStyle,
    barClass,
    barStyle
  };
};
exports.useTabsCustomStyle = useTabsCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabs/src/composables/tabs-custom.js.map
