"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const usePickerCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("picker");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "cancelColor"), "text"), 2), cancelColorClass = _a[0], cancelColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "confirmColor"), "text"), 2), confirmColorClass = _b[0], confirmColorStyle = _b[1];
  const overlayOpacity = common_vendor.computed(() => {
    return props.mask ? 0.5 : 0;
  });
  const operationBtnClass = common_vendor.computed(() => {
    return (type) => {
      const cls = [
        ns.e("operation-btn"),
        ns.em("operation-btn", type)
      ];
      if (type === "cancel") {
        if (cancelColorClass.value)
          cls.push(cancelColorClass.value);
      } else if (type === "confirm") {
        if (confirmColorClass.value)
          cls.push(confirmColorClass.value);
      }
      return cls.join(" ");
    };
  });
  const operationBtnStyle = common_vendor.computed(() => {
    return (type) => {
      const style = {};
      if (type === "cancel") {
        if (!cancelColorClass.value)
          style.color = cancelColorStyle.value || "var(--tn-color-danger)";
      } else if (type === "confirm") {
        if (!confirmColorClass.value)
          style.color = confirmColorStyle.value || "var(--tn-color-primary)";
      }
      return style;
    };
  });
  return {
    ns,
    overlayOpacity,
    operationBtnClass,
    operationBtnStyle
  };
};
exports.usePickerCustomStyle = usePickerCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/picker/src/composables/picker-custom.js.map
