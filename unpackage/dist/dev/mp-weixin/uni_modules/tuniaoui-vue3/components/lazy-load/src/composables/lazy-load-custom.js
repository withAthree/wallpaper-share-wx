"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useLazyLoadCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("lazy-load");
  const lazyLoadStyle = common_vendor.computed(() => {
    const style = {};
    if (props.width)
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.width);
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    return style;
  });
  return {
    ns,
    lazyLoadStyle
  };
};
exports.useLazyLoadCustomStyle = useLazyLoadCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/lazy-load/src/composables/lazy-load-custom.js.map
