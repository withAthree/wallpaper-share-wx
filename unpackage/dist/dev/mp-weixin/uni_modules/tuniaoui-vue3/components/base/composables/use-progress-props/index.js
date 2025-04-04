"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useProgressProps = (props) => {
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "activeColor"), "bg"), 2), activeColorClass = _a[0], activeColorStyle = _a[1];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "inactiveColor"), "bg"), 2), inactiveColorClass = _b[0], inactiveColorStyle = _b[1];
  const percent = common_vendor.ref(0);
  let firstInitPercent = true;
  common_vendor.watch(() => {
    return props.percent;
  }, (val) => {
    if (!firstInitPercent) {
      percent.value = val;
    } else {
      setTimeout(() => {
        percent.value = val;
        firstInitPercent = false;
      }, 50);
    }
  }, {
    immediate: true
  });
  return {
    percent,
    activeColorClass,
    activeColorStyle,
    inactiveColorClass,
    inactiveColorStyle
  };
};
exports.useProgressProps = useProgressProps;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/base/composables/use-progress-props/index.js.map
