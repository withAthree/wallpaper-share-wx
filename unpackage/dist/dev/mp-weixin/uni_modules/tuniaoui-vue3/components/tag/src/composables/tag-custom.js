"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_types = require("../../../../utils/types.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useTagCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("tag");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "bgColor"), "bg"), 2), bgColorClass = _a[0], bgColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "textColor"), "text"), 2), textColorClass = _b[0], textColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "borderColor"), "border"), 2), borderColorClass = _c[0], borderColorStyle = _c[1];
  const tagClass = common_vendor.computed(() => {
    const cls = [];
    cls.push(ns.b());
    if (props.size)
      cls.push(ns.m(props.size));
    if (props.shape)
      cls.push(ns.m(props.shape));
    if (props.type)
      cls.push(`tn-type-${props.type}_bg`);
    if (bgColorClass.value)
      cls.push(bgColorClass.value);
    if (textColorClass.value)
      cls.push(textColorClass.value);
    if (props.border) {
      cls.push("tn-border");
      if (borderColorClass.value)
        cls.push(borderColorClass.value);
    }
    if (props.borderBold)
      cls.push("tn-border-bold");
    if (props.customClass)
      cls.push(props.customClass);
    return cls.join(" ");
  });
  const tagStyle = common_vendor.computed(() => {
    const style = {};
    if (props.fontSize)
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize);
    if (props.width)
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.width);
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    if (bgColorStyle.value)
      style.backgroundColor = bgColorStyle.value;
    if (textColorStyle.value)
      style.color = textColorStyle.value;
    if (borderColorStyle.value)
      style.borderColor = borderColorStyle.value;
    if (!uni_modules_tuniaouiVue3_utils_types.isEmpty(props.customStyle)) {
      Object.assign(style, props.customStyle);
    }
    return style;
  });
  return {
    tagStyle,
    tagClass
  };
};
exports.useTagCustomStyle = useTagCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tag/src/composables/tag-custom.js.map
