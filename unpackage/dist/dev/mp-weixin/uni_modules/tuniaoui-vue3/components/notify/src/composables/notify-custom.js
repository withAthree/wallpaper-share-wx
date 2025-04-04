"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useNotifyCustomStyle = (props, options, isActive) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("notify");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(options.value, "bgColor"), "bg"), 2), bgColorClass = _a[0], bgColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(options.value, "textColor"), "text"), 2), textColorClass = _b[0], textColorStyle = _b[1];
  const notifyClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (options.value.type)
      cls.push(`tn-type-${options.value.type}_bg`);
    if (bgColorClass.value)
      cls.push(bgColorClass.value);
    if (textColorClass.value)
      cls.push(textColorClass.value);
    cls.push(ns.m(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(options === null || options === void 0 ? void 0 : options.value.position, "top")));
    if (isActive.value)
      cls.push(ns.is("active"));
    return cls.join(" ");
  });
  const notifyStyle = common_vendor.computed(() => {
    const style = {};
    if (bgColorStyle.value)
      style.backgroundColor = bgColorStyle.value;
    if (textColorStyle.value) {
      style.color = textColorStyle.value;
    } else if (!bgColorClass.value && !textColorClass.value && !options.value.type) {
      style.color = "var(--tn-color-white)";
    }
    if (options.value.position === "top" && props.offsetTop) {
      style.top = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.offsetTop, "px");
    }
    if (props.zIndex)
      style.zIndex = props.zIndex;
    return style;
  });
  return {
    notifyClass,
    notifyStyle
  };
};
exports.useNotifyCustomStyle = useNotifyCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notify/src/composables/notify-custom.js.map
