"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useCalendarCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("calendar");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "activeBgColor"), "bg"), 2), activeBgColorClass = _a[0], activeBgColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "activeTextColor"), "text"), 2), activeTextColorClass = _b[0], activeTextColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "rangeBgColor"), "bg"), 2), rangeBgColorClass = _c[0], rangeBgColorStyle = _c[1];
  const _d = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "rangeTextColor"), "text"), 2), rangeTextColorClass = _d[0], rangeTextColorStyle = _d[1];
  const itemClass = common_vendor.computed(() => {
    return (status) => {
      const cls = [ns.is(status)];
      if (status === "active") {
        if (activeBgColorClass.value) {
          cls.push(activeBgColorClass.value);
        }
        if (activeTextColorClass.value) {
          cls.push(activeTextColorClass.value);
        }
      } else if (status === "range") {
        if (rangeBgColorClass.value) {
          cls.push(rangeBgColorClass.value);
        }
        if (rangeTextColorClass.value) {
          cls.push(rangeTextColorClass.value);
        }
      }
      return cls.join(" ");
    };
  });
  const itemStyle = common_vendor.computed(() => {
    return (status) => {
      const style = {};
      if (status === "active") {
        if (!activeBgColorClass.value) {
          style.backgroundColor = activeBgColorStyle.value || "var(--tn-color-primary)";
        }
        if (activeTextColorStyle.value) {
          style.color = activeTextColorStyle.value;
        } else if (!activeBgColorClass.value && !activeTextColorClass.value) {
          style.color = "var(--tn-color-white)";
        }
      } else if (status === "range") {
        if (!rangeBgColorClass.value) {
          style.backgroundColor = rangeBgColorStyle.value || "var(--tn-color-primary-light-7)";
        }
        if (rangeTextColorStyle.value) {
          style.color = rangeTextColorStyle.value;
        } else if (!rangeBgColorClass.value && !rangeTextColorClass.value) {
          style.color = "var(--tn-color-primary)";
        }
      }
      return style;
    };
  });
  return {
    ns,
    itemClass,
    itemStyle
  };
};
exports.useCalendarCustomStyle = useCalendarCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/calendar/src/composables/calendar-custom.js.map
