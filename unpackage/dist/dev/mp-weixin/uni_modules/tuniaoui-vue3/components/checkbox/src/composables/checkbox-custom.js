"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_types = require("../../../../utils/types.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_checkbox_src_composables_useCheckboxCommonProps = require("./use-checkbox-common-props.js");
const useCheckboxCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("checkbox");
  const _a = uni_modules_tuniaouiVue3_components_checkbox_src_composables_useCheckboxCommonProps.useCheckboxCommonProps(props), activeColor = _a.activeColor, disabled = _a.disabled, maxDisabled = _a.maxDisabled, size = _a.size, border = _a.border, checkedShape = _a.checkedShape;
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "bg"), 2), bgColorClass = _b[0], bgColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "text"), 2), textColorClass = _c[0], textColorStyle = _c[1];
  const _d = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "border"), 2), borderColorClass = _d[0], borderColorStyle = _d[1];
  const checkboxClass = common_vendor.computed(() => {
    return (selected) => {
      const cls = [ns.b()];
      if (disabled.value || maxDisabled.value)
        cls.push(ns.m("disabled"));
      if (size.value)
        cls.push(ns.m(size.value));
      if (selected) {
        cls.push(ns.m("selected"));
        if (textColorClass.value)
          cls.push(textColorClass.value);
      }
      if (border.value) {
        cls.push("tn-border");
        if (selected && borderColorClass.value)
          cls.push(borderColorClass.value);
        else
          cls.push("tn-gray-disabled_border");
      } else {
        cls.push(ns.m("no-border"));
      }
      if (props.customClass)
        cls.push(props.customClass);
      return cls.join(" ");
    };
  });
  const checkboxStyle = common_vendor.computed(() => {
    return (selected) => {
      const style = {};
      if (selected) {
        if (border.value && !borderColorClass.value)
          style.borderColor = borderColorStyle.value || "var(--tn-color-primary)";
        if (!textColorClass.value) {
          style.color = textColorStyle.value || "var(--tn-color-primary)";
        }
      }
      if (!uni_modules_tuniaouiVue3_utils_types.isEmpty(props.customStyle))
        Object.assign(style, props.customStyle);
      return style;
    };
  });
  const checkboxCheckedBoxClass = common_vendor.computed(() => {
    return (selected) => {
      const cls = [ns.e("checked-box")];
      if (checkedShape.value)
        cls.push(ns.em("checked-box", checkedShape.value));
      if (selected || props.indeterminate) {
        cls.push(ns.em("checked-box", "selected"));
        if (bgColorClass.value)
          cls.push(bgColorClass.value);
      } else {
        cls.push("tn-border tn-gray-disabled_border");
      }
      return cls.join(" ");
    };
  });
  const checkboxCheckedBoxStyle = common_vendor.computed(() => {
    return (selected) => {
      const style = {};
      if ((selected || props.indeterminate) && !bgColorClass.value) {
        style.backgroundColor = bgColorStyle.value || "var(--tn-color-primary)";
      }
      return style;
    };
  });
  return {
    ns,
    checkboxClass,
    checkboxStyle,
    checkboxCheckedBoxClass,
    checkboxCheckedBoxStyle
  };
};
exports.useCheckboxCustomStyle = useCheckboxCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/checkbox/src/composables/checkbox-custom.js.map
