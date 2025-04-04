"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
const uni_modules_tuniaouiVue3_hooks_useUniappSystemRectInfo_index = require("../../../../hooks/use-uniapp-system-rect-info/index.js");
require("../../../../hooks/use-z-index/index.js");
const useNavbarCustomStyle = (props, backButtonType, hasRightOperation) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("navbar");
  const backNs = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("navbar-back");
  const _a = uni_modules_tuniaouiVue3_hooks_useUniappSystemRectInfo_index.useUniAppSystemRectInfo(), navBarInfo = _a.navBarInfo, navBarBoundingInfo = _a.navBarBoundingInfo;
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "bgColor"), "bg"), 2), bgColorClass = _b[0], bgColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "textColor"), "text"), 2), textColorClass = _c[0], textColorStyle = _c[1];
  const navbarHeight = common_vendor.computed(() => {
    return props.height ? uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height) : `${navBarInfo.height}px`;
  });
  const navbarClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (props.fixed)
      cls.push(ns.m("fixed"));
    if (props.bottomShadow)
      cls.push("tn-shadow");
    if (textColorClass.value)
      cls.push(textColorClass.value);
    return cls.join(" ");
  });
  const navbarStyle = common_vendor.computed(() => {
    const style = {};
    style.height = navbarHeight.value;
    if (props.zIndex)
      style.zIndex = props.zIndex;
    if ((props === null || props === void 0 ? void 0 : props.opacity) !== void 0)
      style.opacity = props.opacity;
    if (textColorStyle.value) {
      style.color = textColorStyle.value;
    } else if (!bgColorClass.value && !textColorClass.value) {
      style.color = "var(--tn-text-color-primary)";
    }
    return style;
  });
  const navbarBgClass = common_vendor.computed(() => {
    const cls = [ns.e("bg")];
    if (bgColorClass.value && !props.frosted)
      cls.push(bgColorClass.value);
    if (props.frosted)
      cls.push(ns.em("bg", "frosted"));
    return cls.join(" ");
  });
  const navbarBgStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 2;
    if (!bgColorClass.value)
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
    if (props.frosted) {
      style.backgroundColor = bgColorStyle.value || "rgba(255, 255, 255, 0.5)";
    }
    return style;
  });
  const navbarPlaceholderStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 2;
    style.height = navbarHeight.value;
    return style;
  });
  const navbarWrapperStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex;
    if (!props.height) {
      style.top = `${navBarInfo.statusHeight}px`;
      style.height = `${navBarInfo.height - navBarInfo.statusHeight}px`;
    }
    return style;
  });
  const backStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex;
    style.width = `${navBarBoundingInfo.width}px`;
    style.height = `${navBarBoundingInfo.height}px`;
    style.left = `${navBarBoundingInfo.marginRight}px`;
    return style;
  });
  const contentStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 1;
    style.height = `${navBarInfo.height - navBarInfo.statusHeight}px`;
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    if (backButtonType.value !== "none") {
      style.paddingLeft = `${navBarBoundingInfo.width + navBarBoundingInfo.marginRight}px`;
    }
    if (hasRightOperation.value && props.rightOperationWidth) {
      style.paddingRight = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.rightOperationWidth);
    } else if (props.safeAreaInsetRight || hasRightOperation.value) {
      style.paddingRight = `${navBarBoundingInfo.width + navBarBoundingInfo.marginRight}px`;
    }
    return style;
  });
  const rightOperationStyle = common_vendor.computed(() => {
    const style = {};
    style.maxWidth = `${navBarBoundingInfo.width}px`;
    if (props.zIndex)
      style.zIndex = props.zIndex;
    style.height = `${navBarInfo.height - navBarInfo.statusHeight}px`;
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    if (props.rightOperationWidth)
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.rightOperationWidth);
    return style;
  });
  return {
    ns,
    backNs,
    navBarInfo,
    navbarClass,
    navbarStyle,
    navbarBgClass,
    navbarBgStyle,
    navbarPlaceholderStyle,
    navbarWrapperStyle,
    backStyle,
    contentStyle,
    rightOperationStyle
  };
};
exports.useNavbarCustomStyle = useNavbarCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/navbar/src/composables/navbar-custom.js.map
