"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_tabbar = require("../../../../tokens/tabbar.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useTabbarItemCustomStyle = (props, isActive) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("tabbar-item");
  const tabbarContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_tabbar.tabbarContextKey);
  const activeColor = common_vendor.computed(() => {
    return props.activeColor || (tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.activeColor);
  });
  const inactiveColor = common_vendor.computed(() => {
    return props.inactiveColor || (tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.inactiveColor);
  });
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(inactiveColor, "text"), 2), inactiveColorClass = _a[0], inactiveColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "text"), 2), activeColorClass = _b[0], activeColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(inactiveColor, "bg"), 2), inactiveBgClass = _c[0], inactiveBgStyle = _c[1];
  const _d = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "bg"), 2), activebgClass = _d[0], activebgStyle = _d[1];
  const _e = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "bulgeBgColor"), "bg"), 2), bulgeBgClass = _e[0], bulgeBgStyle = _e[1];
  const _f = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "bulgeTextColor"), "text"), 2), bulgeTextColorClass = _f[0], bulgeTextColorStyle = _f[1];
  const fontSize = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize || (tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.fontSize) || "");
  });
  const tabbarItemClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (isActive.value) {
      if (activeColorClass.value)
        cls.push(activeColorClass.value);
    } else {
      if (inactiveColorClass.value)
        cls.push(inactiveColorClass.value);
    }
    if (props.icon && props.activeIcon && !props.text || props.text && !props.icon && !props.activeIcon)
      cls.push(ns.is("only-element"));
    if (isActive.value)
      cls.push(ns.is("active"));
    if (tabbarContext === null || tabbarContext === void 0 ? void 0 : tabbarContext.switchAnimation)
      cls.push(ns.is("animation"));
    return cls.join(" ");
  });
  const tabbarItemStyle = common_vendor.computed(() => {
    const style = {};
    if (isActive.value) {
      if (!activeColorClass.value)
        style.color = activeColorStyle.value || "var(--tn-color-primary)";
    } else {
      if (!inactiveColorClass.value)
        style.color = inactiveColorStyle.value || "var(--tn-color-gray)";
    }
    return style;
  });
  const tabbarItemElementStyle = common_vendor.computed(() => {
    return (type) => {
      const style = {};
      if (type === "text") {
        if (fontSize.value)
          style.fontSize = fontSize.value;
      }
      return style;
    };
  });
  const bulgeClass = common_vendor.computed(() => {
    const cls = [ns.e("bulge")];
    if (props.bulgeBgColor) {
      if (bulgeBgClass.value)
        cls.push(bulgeBgClass.value);
    } else {
      if (isActive.value) {
        if (activebgClass.value)
          cls.push(activebgClass.value);
      } else {
        if (inactiveBgClass.value)
          cls.push(inactiveBgClass.value);
      }
    }
    if (bulgeTextColorClass.value)
      cls.push(bulgeTextColorClass.value);
    return cls.join(" ");
  });
  const bulgeStyle = common_vendor.computed(() => {
    return (rectInfo) => {
      const style = {};
      let width = rectInfo.width;
      if (rectInfo === null || rectInfo === void 0 ? void 0 : rectInfo.maxWidth) {
        width = rectInfo.maxWidth;
      }
      style.width = `${width * 0.5}px`;
      style.height = style.width;
      style.top = `-${width * 0.16}px`;
      if (props.bulgeBgColor) {
        if (!bulgeBgClass.value)
          style.backgroundColor = bulgeBgStyle.value;
      } else {
        if (isActive.value) {
          if (!activebgClass.value) {
            style.backgroundColor = activebgStyle.value || "var(--tn-color-primary)";
          }
        } else {
          if (!inactiveBgClass.value) {
            style.backgroundColor = inactiveBgStyle.value || "var(--tn-color-gray)";
          }
        }
      }
      if (bulgeTextColorStyle.value)
        style.color = bulgeTextColorStyle.value;
      return style;
    };
  });
  return {
    ns,
    tabbarItemClass,
    tabbarItemStyle,
    tabbarItemElementStyle,
    bulgeClass,
    bulgeStyle
  };
};
exports.useTabbarItemCustomStyle = useTabbarItemCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabbar/src/composables/tabbar-item-custom.js.map
