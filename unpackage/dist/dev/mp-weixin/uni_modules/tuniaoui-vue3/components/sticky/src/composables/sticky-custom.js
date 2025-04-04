"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useStickyCustomStyle = (props, suppoerCSSSticky, stickyDistance, stickyStatus, stickyRectInfo) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("sticky");
  const stickyStyle = common_vendor.computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex;
    if (props.enabled) {
      if (suppoerCSSSticky.value) {
        style.position = "sticky";
        style.top = `${stickyDistance.value}px`;
      } else {
        style.height = stickyStatus.value ? uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(stickyRectInfo.value.height, "px") : "auto";
      }
    } else {
      style.position = "static";
    }
    return style;
  });
  const stickyContentStyle = common_vendor.computed(() => {
    const style = {};
    if (!suppoerCSSSticky.value) {
      style.position = stickyStatus.value ? "fixed" : "static";
      style.top = `${stickyDistance.value}px`;
      style.left = `${stickyRectInfo.value.left}px`;
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(stickyRectInfo.value.width, "px");
    }
    if (stickyDistance.value > 0) {
      style.top = `${stickyDistance.value}px`;
    }
    return style;
  });
  return {
    ns,
    stickyStyle,
    stickyContentStyle
  };
};
exports.useStickyCustomStyle = useStickyCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/sticky/src/composables/sticky-custom.js.map
