"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_types = require("../../../../utils/types.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps = require("../../../form/src/composables/use-form-common-props.js");
const useInputCustomStyle = (props, validateState, disabled) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("input");
  const inputSize = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormSize(props.size);
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "borderColor"), "border"), 2), borderColorClass = _a[0], borderColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "wordLimitColor"), "text"), 2), wordLimitColorClass = _b[0], wordLimitColorStyle = _b[1];
  const placeholderStyle = common_vendor.computed(() => {
    const style = {
      color: "var(--tn-text-color-secondary)"
    };
    if (!uni_modules_tuniaouiVue3_utils_types.isEmpty(props.placeholderStyle))
      Object.assign(style, props.placeholderStyle);
    return Object.entries(style).map((_a2) => {
      var _b2 = common_vendor.__read(_a2, 2), key = _b2[0], value = _b2[1];
      return `${key}:${value}`;
    }).join(";");
  });
  const inputClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (disabled.value && props.type !== "select")
      cls.push(ns.m("disabled"));
    if (inputSize.value)
      cls.push(ns.m(inputSize.value));
    if (props.textAlign)
      cls.push(ns.m(`text-${props.textAlign}`));
    if (validateState.value === "error")
      cls.push(ns.m("error"));
    if (props.border || props.underline || validateState.value === "error") {
      cls.push(props.underline ? "tn-border-bottom" : "tn-border");
      if (validateState.value === "error")
        cls.push("tn-red_border");
      else if (borderColorClass.value)
        cls.push(borderColorClass.value);
    }
    if (props.underline) {
      cls.push(ns.m("underline"));
    }
    if (props.customClass)
      cls.push(props.customClass);
    return cls.join(" ");
  });
  const inputStyle = common_vendor.computed(() => {
    const style = {};
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    if (props.border && borderColorStyle.value && validateState.value !== "error")
      style.borderColor = borderColorStyle.value;
    if (!uni_modules_tuniaouiVue3_utils_types.isEmpty(props.customStyle))
      Object.assign(style, props.customStyle);
    return style;
  });
  const wordLimitClass = common_vendor.computed(() => {
    const cls = [ns.e("word-limit")];
    if (wordLimitColorClass.value)
      cls.push(wordLimitColorClass.value);
    return cls.join(" ");
  });
  const wordLimitStyle = common_vendor.computed(() => {
    const style = {};
    if (!wordLimitColorClass.value) {
      style.color = wordLimitColorStyle.value || "var(--tn-color-gray)";
    }
    return style;
  });
  return {
    ns,
    inputClass,
    inputStyle,
    placeholderStyle,
    wordLimitClass,
    wordLimitStyle
  };
};
exports.useInputCustomStyle = useInputCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/input/src/composables/input-custom.js.map
