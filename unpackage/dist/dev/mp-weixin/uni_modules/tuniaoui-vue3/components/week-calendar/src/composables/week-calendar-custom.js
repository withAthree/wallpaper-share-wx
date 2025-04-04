"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useWeekCalendarCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("week-calendar");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "activeBgColor"), "bg"), 2), activeBgColorClass = _a[0], activeBgColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "activeTextColor"), "text"), 2), activeTextColorClass = _b[0], activeTextColorStyle = _b[1];
  const itemClass = common_vendor.computed(() => {
    return (status) => {
      const cls = [ns.is(status)];
      if (status === "active") {
        if (activeBgColorClass.value)
          cls.push(activeBgColorClass.value);
        if (activeTextColorClass.value)
          cls.push(activeTextColorClass.value);
      }
      return cls.join(" ");
    };
  });
  const itemStyle = common_vendor.computed(() => {
    return (status) => {
      const style = {};
      if (status === "active") {
        if (!activeBgColorClass.value)
          style.backgroundColor = activeBgColorStyle.value || "var(--tn-color-primary)";
        if (activeTextColorStyle.value) {
          style.color = activeTextColorStyle.value;
        } else if (!activeBgColorClass.value && !activeTextColorClass.value) {
          style.color = "var(--tn-color-white)";
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
exports.useWeekCalendarCustomStyle = useWeekCalendarCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/week-calendar/src/composables/week-calendar-custom.js.map
