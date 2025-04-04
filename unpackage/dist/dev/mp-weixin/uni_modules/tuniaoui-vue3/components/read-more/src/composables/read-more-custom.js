"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useReadMoreCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("read-more");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "tipColor"), "text"), 2), tipsColorClass = _a[0], tipsColorStyle = _a[1];
  const operationAreaClass = common_vendor.computed(() => {
    const cls = [ns.e("operation-area")];
    if (tipsColorClass.value)
      cls.push(tipsColorClass.value);
    return cls.join(" ");
  });
  const operationAreaStyle = common_vendor.computed(() => {
    const style = {};
    if (!tipsColorClass.value) {
      style.color = tipsColorStyle.value || "var(--tn-color-primary)";
    }
    return style;
  });
  return {
    ns,
    operationAreaClass,
    operationAreaStyle
  };
};
exports.useReadMoreCustomStyle = useReadMoreCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/read-more/src/composables/read-more-custom.js.map
