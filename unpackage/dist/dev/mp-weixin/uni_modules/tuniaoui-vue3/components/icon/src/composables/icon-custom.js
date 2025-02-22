"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_types = require("../../../../utils/types.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentSize_index = require("../../../../hooks/use-component-size/index.js");
const useIcon = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("icon");
  const _a = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "color"), "text"), 3), colorClass = _a[0], colorStyle = _a[1], updateColor = _a[2];
  const _b = common_vendor.__read(uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "transparentBg"), "bg"), 1), transparentBgClass = _b[0];
  const sizeType = uni_modules_tuniaouiVue3_hooks_useComponentSize_index.useComponentSize(props.size).sizeType;
  const isImg = common_vendor.computed(() => {
    return !!(props === null || props === void 0 ? void 0 : props.name) && props.name.includes("/");
  });
  const iconClass = common_vendor.computed(() => {
    const cls = [];
    cls.push(ns.b());
    if (isImg.value) {
      cls.push(ns.m("image"));
    } else {
      if (props.type)
        cls.push(`tn-type-${props.type}_text`);
      if (props.transparent) {
        cls.push("tn-text-transparent", transparentBgClass.value);
      } else {
        if (colorClass.value)
          cls.push(colorClass.value);
      }
      if (props.bold)
        cls.push("tn-text-bold");
    }
    if (sizeType.value === "inner")
      cls.push(ns.m(props.size));
    if (props.customClass)
      cls.push(props.customClass);
    return cls.join(" ");
  });
  const iconStyle = common_vendor.computed(() => {
    const style = {};
    if (isImg.value) {
      if (sizeType.value === "custom" && props.size) {
        style.width = style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
      }
    } else {
      if (colorStyle.value)
        style.color = colorStyle.value;
      if (sizeType.value === "custom" && props.size)
        style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
    }
    if (props.offsetTop)
      style.transform = `translateY(${uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.offsetTop)})`;
    if (!uni_modules_tuniaouiVue3_utils_types.isEmpty(props.customStyle))
      Object.assign(style, props.customStyle);
    return style;
  });
  return {
    isImg,
    iconClass,
    iconStyle,
    updateColor
  };
};
exports.useIcon = useIcon;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/icon/src/composables/icon-custom.js.map
