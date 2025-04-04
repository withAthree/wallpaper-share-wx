"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useSwipeActionOptions = (props) => {
  const options = common_vendor.computed(() => {
    return props.options.map((item) => {
      const textColor = common_vendor.ref(item.textColor);
      const bgColor = common_vendor.ref(item.bgColor);
      const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(textColor, "text"), 2), textColorClass = _a[0], textColoeStyle = _a[1];
      const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(bgColor, "bg"), 2), bgColorClass = _b[0], bgColorStyle = _b[1];
      return {
        icon: uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(item.icon, ""),
        text: uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(item.text, ""),
        textColor: {
          class: textColorClass.value,
          style: textColoeStyle.value
        },
        bgColor: {
          class: bgColorClass.value,
          style: bgColorStyle.value
        },
        round: uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(item.round, false),
        disabled: uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(item.disabled, false)
      };
    });
  });
  const optionColorClass = common_vendor.computed(() => {
    return (index) => {
      const cls = [];
      const option = options.value[index];
      if (option) {
        if (option.textColor.class)
          cls.push(option.textColor.class);
        if (option.bgColor.class)
          cls.push(option.bgColor.class);
      }
      return cls.join(" ");
    };
  });
  const optionColorStyle = common_vendor.computed(() => {
    return (index) => {
      const style = {};
      const option = options.value[index];
      if (option) {
        if (!option.textColor.class)
          style.color = option.textColor.style || "var(--tn-color-white)";
        if (!option.bgColor.class)
          style.backgroundColor = option.bgColor.style || "var(--tn-color-primary)";
      }
      return style;
    };
  });
  return {
    options,
    optionColorClass,
    optionColorStyle
  };
};
exports.useSwipeActionOptions = useSwipeActionOptions;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/swipe-action/src/composables/swipe-action-options.js.map
