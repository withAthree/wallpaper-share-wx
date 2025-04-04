"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentSize_index = require("../../../../hooks/use-component-size/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useIndexListCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("index-list");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "titleBgColor"), "bg"), 2), titleBgColorClass = _a[0], titleBgColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "titleColor"), "text"), 2), titleTextColorClass = _b[0], titleTextColorStyle = _b[1];
  const sizeType = uni_modules_tuniaouiVue3_hooks_useComponentSize_index.useComponentSize(props.titleSize).sizeType;
  const titleClass = common_vendor.computed(() => {
    const cls = [ns.e("title")];
    if (props.titleSize && sizeType.value === "inner")
      cls.push(ns.em("title", props.titleSize));
    if (titleBgColorClass.value)
      cls.push(titleBgColorClass.value);
    if (titleTextColorClass.value)
      cls.push(titleTextColorClass.value);
    return cls.join(" ");
  });
  const titleStyle = common_vendor.computed(() => {
    const style = {};
    if (!titleBgColorClass.value)
      style.backgroundColor = titleBgColorStyle.value || "var(--tn-color-gray-disabled)";
    if (titleTextColorStyle.value) {
      style.color = titleTextColorStyle.value;
    } else if (!titleBgColorClass.value && !titleTextColorClass.value) {
      style.color = "var(--tn-color-gray)";
    }
    if (props.titleSize && sizeType.value === "custom")
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.titleSize);
    return style;
  });
  return {
    ns,
    titleClass,
    titleStyle
  };
};
exports.useIndexListCustomStyle = useIndexListCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/index-list/src/composables/index-list-custom.js.map
