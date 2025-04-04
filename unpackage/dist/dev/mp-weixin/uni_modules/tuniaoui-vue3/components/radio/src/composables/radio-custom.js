"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_types = require("../../../../utils/types.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_radio_src_composables_useRadioCommonProps = require("./use-radio-common-props.js");
const useRadioCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("radio");
  const _a = uni_modules_tuniaouiVue3_components_radio_src_composables_useRadioCommonProps.useRadioCommonProps(props), size = _a.size, disabled = _a.disabled, border = _a.border, activeColor = _a.activeColor;
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "bg"), 2), bgColorClass = _b[0], bgColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "text"), 2), textColorClass = _c[0], textColorStyle = _c[1];
  const _d = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "border"), 2), borderColorClass = _d[0], borderColorStyle = _d[1];
  const radioClass = common_vendor.computed(() => {
    return (selected) => {
      const cls = [ns.b()];
      if (disabled.value)
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
  const radioStyle = common_vendor.computed(() => {
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
  const radioDotClass = common_vendor.computed(() => {
    return (selected) => {
      const cls = [ns.e("dot")];
      if (selected) {
        cls.push(ns.em("dot", "selected"));
        if (bgColorClass.value)
          cls.push(bgColorClass.value);
      } else {
        cls.push("tn-border tn-gray-disabled_border");
      }
      return cls.join(" ");
    };
  });
  const radioDotStyle = common_vendor.computed(() => {
    return (selected) => {
      const style = {};
      if (selected && !bgColorClass.value) {
        style.backgroundColor = bgColorStyle.value || "var(--tn-color-primary)";
      }
      return style;
    };
  });
  return {
    ns,
    radioClass,
    radioStyle,
    radioDotClass,
    radioDotStyle
  };
};
exports.useRadioCustomStyle = useRadioCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/radio/src/composables/radio-custom.js.map
