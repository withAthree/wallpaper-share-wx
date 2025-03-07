"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useModalCustomStyle = (cancelBtnStyle, confirmBtnStyle) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("modal");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(cancelBtnStyle.value, "bgColor"), "bg"), 3), cancelBtnBgClass = _a[0], cancelBtnBgStyle = _a[1], updateCancelBtnBg = _a[2];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(cancelBtnStyle.value, "color"), "text"), 3), cancelBtnColorClass = _b[0], cancelBtnColorStyle = _b[1], updateCancelBtnColor = _b[2];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(confirmBtnStyle.value, "bgColor"), "bg"), 3), confirmBtnBgClass = _c[0], confirmBtnBgStyle = _c[1], updateConfirmBtnBg = _c[2];
  const _d = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(confirmBtnStyle.value, "color"), "text"), 3), confirmBtnColorClass = _d[0], confirmBtnColorStyle = _d[1], updateConfirmBtnColor = _d[2];
  common_vendor.watch(() => {
    return confirmBtnStyle;
  }, (value) => {
    updateConfirmBtnBg(value.value.bgColor);
    updateConfirmBtnColor(value.value.color);
  }, {
    deep: true
  });
  common_vendor.watch(() => {
    return cancelBtnStyle;
  }, (value) => {
    updateCancelBtnBg(value.value.bgColor);
    updateCancelBtnColor(value.value.color);
  }, {
    deep: true
  });
  const operationBtnClass = common_vendor.computed(() => {
    return (type) => {
      const cls = [
        ns.e("operation-btn"),
        ns.em("operation-btn", type)
      ];
      if (type === "cancel") {
        if (cancelBtnBgClass.value)
          cls.push(cancelBtnBgClass.value);
        if (cancelBtnColorClass.value)
          cls.push(cancelBtnColorClass.value);
      }
      if (type === "confirm") {
        if (confirmBtnBgClass.value)
          cls.push(confirmBtnBgClass.value);
        if (confirmBtnColorClass.value)
          cls.push(confirmBtnColorClass.value);
      }
      return cls.join(" ");
    };
  });
  const operationBtnStyle = common_vendor.computed(() => {
    return (type) => {
      const style = {};
      if (type === "cancel") {
        if (cancelBtnBgStyle.value)
          style.backgroundColor = cancelBtnBgStyle.value;
        if (cancelBtnColorStyle.value) {
          style.color = cancelBtnColorStyle.value;
        } else if (!cancelBtnBgClass.value && !cancelBtnColorClass.value) {
          style.color = "var(--tn-color-danger)";
        }
      }
      if (type === "confirm") {
        if (confirmBtnBgStyle.value)
          style.backgroundColor = confirmBtnBgStyle.value;
        if (confirmBtnColorStyle.value) {
          style.color = confirmBtnColorStyle.value;
        } else if (!confirmBtnBgClass.value && !confirmBtnColorClass.value) {
          style.color = "var(--tn-color-primary)";
        }
      }
      return style;
    };
  });
  return {
    ns,
    operationBtnClass,
    operationBtnStyle
  };
};
exports.useModalCustomStyle = useModalCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/modal/src/composables/modal-custom.js.map
