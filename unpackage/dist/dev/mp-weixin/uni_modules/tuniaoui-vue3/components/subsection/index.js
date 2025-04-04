"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_subsection_src_subsection = require("./src/subsection.js");
const uni_modules_tuniaouiVue3_components_subsection_src_composables_subsectionCustom = require("./src/composables/subsection-custom.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_subsection_src_composables_useSubsection = require("./src/composables/use-subsection.js");
const uni_modules_tuniaouiVue3_components_subsection_src_subsectionItem = require("./src/subsection-item.js");
const uni_modules_tuniaouiVue3_components_subsection_src_composables_subsectionItemCustom = require("./src/composables/subsection-item-custom.js");
const uni_modules_tuniaouiVue3_components_subsection_src_composables_useSubsectionItem = require("./src/composables/use-subsection-item.js");
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "subsection",
  props: uni_modules_tuniaouiVue3_components_subsection_src_subsection.subsectionProps,
  emits: uni_modules_tuniaouiVue3_components_subsection_src_subsection.subsectionEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_subsection_src_composables_useSubsection.useSubsection(props, emits), componentId = _b.componentId, activeColor = _b.activeColor, sliderRectInfo = _b.sliderRectInfo;
    const _c = uni_modules_tuniaouiVue3_components_subsection_src_composables_subsectionCustom.useSubsectionCustomStyle(props, activeColor, sliderRectInfo), ns = _c.ns, subsectionClass = _c.subsectionClass, subsectionStyle = _c.subsectionStyle, subsectionSliderClass = _c.subsectionSliderClass, subsectionSliderStyle = _c.subsectionSliderStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.n(common_vendor.unref(subsectionSliderClass)),
        b: common_vendor.s(common_vendor.unref(subsectionSliderStyle)),
        c: common_vendor.n(common_vendor.unref(ns).e("content")),
        d: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
        e: common_vendor.n(common_vendor.unref(subsectionClass)),
        f: common_vendor.s(common_vendor.unref(subsectionStyle))
      };
      return __returned__;
    };
  }
});
const Subsection = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-4288fe58"]]);
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "subsection-item", props: uni_modules_tuniaouiVue3_components_subsection_src_subsectionItem.subsectionItemProps, emits: uni_modules_tuniaouiVue3_components_subsection_src_subsectionItem.subsectionItemEmits, setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emits = __emit;
  const _b = uni_modules_tuniaouiVue3_components_subsection_src_composables_useSubsectionItem.useSubsectionItem(props, emits), componentId = _b.componentId, active = _b.active, itemClickEvent = _b.itemClickEvent;
  const _c = uni_modules_tuniaouiVue3_components_subsection_src_composables_subsectionItemCustom.useSubsectionItemCustomStyle(props, active), subsectionItemClass = _c.subsectionItemClass, subsectionItemStyle = _c.subsectionItemStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = {
      a: common_vendor.t(_ctx.title),
      b: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
      c: common_vendor.n(common_vendor.unref(subsectionItemClass)),
      d: common_vendor.s(common_vendor.unref(subsectionItemStyle)),
      e: common_vendor.o((...args) => {
        return common_vendor.unref(itemClickEvent) && common_vendor.unref(itemClickEvent)(...args);
      })
    };
    return __returned__;
  };
} }));
const SubsectionItem = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f682932"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Subsection, {
  SubsectionItem
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(SubsectionItem);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/subsection/index.js.map
