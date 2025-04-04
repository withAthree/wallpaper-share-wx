"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useNoticeBarCommonProps = (props) => {
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "bgColor"), "bg"), 2), bgColorClass = _a[0], bgColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "textColor"), "text"), 2), textColorClass = _b[0], textColorStyle = _b[1];
  const _c = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "leftIconColor"), "text"), 2), leftIconColorClass = _c[0], leftIconColorStyle = _c[1];
  const _d = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "rightIconColor"), "text"), 2), rightIconColorClass = _d[0], rightIconColorStyle = _d[1];
  const commonClass = common_vendor.computed(() => {
    return (type = "normal") => {
      const cls = [];
      if (type === "normal") {
        if (bgColorClass.value)
          cls.push(bgColorClass.value);
        if (textColorClass.value)
          cls.push(textColorClass.value);
      } else if (type === "leftIcon") {
        if (leftIconColorClass.value)
          cls.push(leftIconColorClass.value);
      } else if (type === "rightIcon") {
        if (rightIconColorClass.value)
          cls.push(rightIconColorClass.value);
      }
      return cls.join(" ");
    };
  });
  const commonStyle = common_vendor.computed(() => {
    return (type = "normal") => {
      const style = {};
      if (type === "normal") {
        if (!bgColorClass.value) {
          style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
        }
        if (textColorStyle.value) {
          style.color = textColorStyle.value;
        } else if (!bgColorClass.value && !textColorClass.value) {
          style.color = "var(--tn-text-color-primary)";
        }
        if (props.fontSize)
          style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize);
      } else if (type === "leftIcon") {
        if (!leftIconColorClass.value) {
          style.color = leftIconColorStyle.value || "var(--tn-text-color-primary)";
        }
        if (props.fontSize)
          style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize);
        if (props.leftIconSize)
          style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.leftIconSize);
      } else if (type === "rightIcon") {
        if (!rightIconColorClass.value) {
          style.color = rightIconColorStyle.value || "var(--tn-text-color-secondary)";
        }
        if (props.fontSize)
          style.fontSize = `calc(${uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize)} * 1.2)`;
        if (props.rightIconSize)
          style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.rightIconSize);
      }
      return style;
    };
  });
  return {
    commonClass,
    commonStyle
  };
};
exports.useNoticeBarCommonProps = useNoticeBarCommonProps;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notice-bar/src/composables/notice-bar-common-props.js.map
