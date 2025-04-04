"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentSize_index = require("../../../../hooks/use-component-size/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useLoadmoreCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("loadmore");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "color"), "text"), 2), textColorClass = _a[0], textColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "color"), "bg"), 2), bgColorClass = _b[0], bgColorStyle = _b[1];
  const sizeType = uni_modules_tuniaouiVue3_hooks_useComponentSize_index.useComponentSize(props.size).sizeType;
  const loadmoreClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    cls.push(ns.is(props.status));
    if (props.loadingIcon)
      cls.push(ns.is("loading-icon"));
    if (textColorClass.value)
      cls.push(textColorClass.value);
    if (props.size && sizeType.value === "inner")
      cls.push(ns.m(props.size));
    return cls.join(" ");
  });
  const loadmoreStyle = common_vendor.computed(() => {
    const style = {};
    if (!textColorClass.value) {
      style.color = textColorStyle.value || "var(--tn-text-color-primary)";
    }
    if (props.size && sizeType.value === "custom") {
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
    }
    return style;
  });
  const dotClass = common_vendor.computed(() => {
    const cls = [ns.e("dot")];
    if (bgColorClass.value)
      cls.push(bgColorClass.value);
    return cls.join(" ");
  });
  const dotStyle = common_vendor.computed(() => {
    const style = {};
    if (!bgColorClass.value) {
      style.backgroundColor = bgColorStyle.value || "var(--tn-text-color-primary)";
    }
    if (props.size && sizeType.value === "custom") {
      style.width = style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
    }
    return style;
  });
  return {
    ns,
    loadmoreClass,
    loadmoreStyle,
    dotClass,
    dotStyle
  };
};
exports.useLoadmoreCustomStyle = useLoadmoreCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/loadmore/src/composables/loadmore-custom.js.map
