"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_tabs = require("../../../../tokens/tabs.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useTabsItemCustomStyle = (props, isActive) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("tabs-item");
  const tabsContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_tabs.tabsContextKey);
  const normalColor = common_vendor.computed(() => {
    return props.color || (tabsContext === null || tabsContext === void 0 ? void 0 : tabsContext.color);
  });
  const activeColor = common_vendor.computed(() => {
    return props.activeColor || (tabsContext === null || tabsContext === void 0 ? void 0 : tabsContext.activeColor);
  });
  const activeBold = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(tabsContext === null || tabsContext === void 0 ? void 0 : tabsContext.activeBold, true);
  });
  const activeFontSize = common_vendor.computed(() => {
    return props.activeFontSize || (tabsContext === null || tabsContext === void 0 ? void 0 : tabsContext.activeFontSize);
  });
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(normalColor, "text"), 2), textColorClass = _a[0], textColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "text"), 2), activeTextColorClass = _b[0], activeTextColorStyle = _b[1];
  const tabsItemClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (isActive.value) {
      if (activeTextColorClass.value) {
        cls.push(activeTextColorClass.value);
      }
      if (activeBold.value) {
        cls.push(ns.m("bold"));
      }
    } else {
      if (textColorClass.value) {
        cls.push(textColorClass.value);
      }
    }
    if (tabsContext === null || tabsContext === void 0 ? void 0 : tabsContext.scroll)
      cls.push(ns.m("scroll"));
    if (!(tabsContext === null || tabsContext === void 0 ? void 0 : tabsContext.showBar))
      cls.push(ns.is("no-bar"));
    return cls.join(" ");
  });
  const tabsItemStyle = common_vendor.computed(() => {
    const style = {};
    if (props.fontSize || (tabsContext === null || tabsContext === void 0 ? void 0 : tabsContext.fontSize)) {
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize || (tabsContext === null || tabsContext === void 0 ? void 0 : tabsContext.fontSize) || "");
    }
    if (isActive.value) {
      if (!activeTextColorClass.value) {
        style.color = activeTextColorStyle.value || "var(--tn-color-primary)";
      }
      if (activeFontSize.value) {
        style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(activeFontSize.value);
      }
    } else {
      if (!textColorClass.value) {
        style.color = textColorStyle.value || "var(--tn-text-color-primary)";
      }
    }
    return style;
  });
  return {
    ns,
    tabsItemClass,
    tabsItemStyle
  };
};
exports.useTabsItemCustomStyle = useTabsItemCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabs/src/composables/tabs-item-custom.js.map
