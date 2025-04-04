"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_types = require("../../../../utils/types.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useListCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("list-item");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "bgColor"), "bg"), 2), bgColorClass = _a[0], bgColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "textColor"), "text"), 2), textColorClass = _b[0], textColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "rightIconColor"), "text"), 2), rightIconColorClass = _c[0], rightIconColorStyle = _c[1];
  const listClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (bgColorClass.value)
      cls.push(bgColorClass.value);
    if (textColorClass.value)
      cls.push(textColorClass.value);
    if (props.radius)
      cls.push(ns.m("radius"));
    if (props.customClass)
      cls.push(props.customClass);
    return cls.join(" ");
  });
  const listStyle = common_vendor.computed(() => {
    const style = {};
    if (props.width)
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.width);
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    if (!bgColorClass.value) {
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
      if (!textColorClass.value) {
        style.color = "var(--tn-text-color-primary)";
      }
    }
    if (textColorStyle.value) {
      style.color = textColorStyle.value;
    }
    if (props.fontSize)
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize);
    if (!uni_modules_tuniaouiVue3_utils_types.isEmpty(props.customStyle)) {
      Object.assign(style, props.customStyle);
    }
    return style;
  });
  const rightIconClass = common_vendor.computed(() => {
    const cls = [ns.e("right-icon")];
    if (rightIconColorClass.value)
      cls.push(rightIconColorClass.value);
    return cls.join(" ");
  });
  const rightIconStyle = common_vendor.computed(() => {
    const style = {};
    if (!rightIconColorClass.value) {
      style.color = rightIconColorStyle.value || "var(--tn-color-gray)";
    }
    return style;
  });
  return {
    ns,
    listClass,
    listStyle,
    rightIconClass,
    rightIconStyle
  };
};
exports.useListCustomStyle = useListCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/list/src/composables/list-item-custom.js.map
