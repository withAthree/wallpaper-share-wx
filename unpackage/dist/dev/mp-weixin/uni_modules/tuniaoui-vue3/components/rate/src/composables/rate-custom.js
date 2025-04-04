"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentSize_index = require("../../../../hooks/use-component-size/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useRateCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("rate");
  const sizeType = uni_modules_tuniaouiVue3_hooks_useComponentSize_index.useComponentSize(props.size).sizeType;
  const rateClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (props.size && sizeType.value === "inner")
      cls.push(ns.m(props.size));
    if (props.readonly)
      cls.push(ns.is("readonly"));
    return cls.join(" ");
  });
  const itemClass = common_vendor.computed(() => {
    return (type, item) => {
      const cls = [ns.e("item"), ns.is(type)];
      if (item.color.class)
        cls.push(item.color.class);
      return cls.join(" ");
    };
  });
  const itemStyle = common_vendor.computed(() => {
    return (type, item) => {
      const style = {};
      if (props.size && sizeType.value === "custom")
        style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
      if (props.gutter)
        style.padding = `0rpx calc(${uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.gutter)} / 2)`;
      if (type === "active") {
        if (!item.color.class)
          style.color = item.color.style || "var(--tn-color-primary)";
      }
      if (type === "inactive") {
        if (!item.color.class)
          style.color = item.color.style || "var(--tn-color-gray)";
      }
      return style;
    };
  });
  return {
    ns,
    rateClass,
    itemStyle,
    itemClass
  };
};
exports.useRateCustomStyle = useRateCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/rate/src/composables/rate-custom.js.map
