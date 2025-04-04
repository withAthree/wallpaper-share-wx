"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useTabbarCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("tabbar");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "bgColor"), "bg"), 2), bgColorClass = _a[0], bgColorStyle = _a[1];
  const tabbarClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (props.fixed)
      cls.push(ns.m("fixed"));
    if (props.safeAreaInsetBottom)
      cls.push("tn-u-safe-area");
    if (props.topShadow)
      cls.push(ns.m("top-shadow"));
    return cls.join(" ");
  });
  const tabbarStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex;
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    return style;
  });
  const bgClass = common_vendor.computed(() => {
    const cls = [ns.e("bg")];
    if (bgColorClass.value && !props.frosted)
      cls.push(bgColorClass.value);
    if (props.frosted)
      cls.push(ns.em("bg", "frosted"));
    return cls.join(" ");
  });
  const bgStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 1;
    if (!bgColorClass.value)
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
    if (props.frosted)
      style.backgroundColor = bgColorStyle.value || "rgba(255, 255, 255, 0.5)";
    return style;
  });
  const placeholderStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 2;
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    return style;
  });
  const bulgeClass = common_vendor.computed(() => {
    const cls = [ns.e("bulge")];
    if (props.topShadow) {
      cls.push(ns.em("bulge", "top-shadow"));
    }
    if (bgColorClass.value && !props.frosted)
      cls.push(bgColorClass.value);
    if (props.frosted)
      cls.push(ns.em("bulge", "frosted"));
    return cls.join(" ");
  });
  const bulgeStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 1;
    else
      style.zIndex = "inherit";
    if (!bgColorClass.value)
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
    if (props.frosted)
      style.backgroundColor = bgColorStyle.value || "rgba(255, 255, 255, 0.5)";
    return style;
  });
  return {
    ns,
    tabbarClass,
    tabbarStyle,
    bgClass,
    bgStyle,
    placeholderStyle,
    bulgeClass,
    bulgeStyle
  };
};
exports.useTabbarCustomStyle = useTabbarCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabbar/src/composables/tabbar-custom.js.map
