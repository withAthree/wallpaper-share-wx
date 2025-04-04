"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_rate_src_rate = require("./src/rate.js");
const uni_modules_tuniaouiVue3_components_rate_src_composables_rateCustom = require("./src/composables/rate-custom.js");
const uni_modules_tuniaouiVue3_components_rate_src_composables_useRate = require("./src/composables/use-rate.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "rate",
  props: uni_modules_tuniaouiVue3_components_rate_src_rate.rateProps,
  emits: uni_modules_tuniaouiVue3_components_rate_src_rate.rateEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_rate_src_composables_useRate.useRate(props, emits), componentId = _b.componentId, rateItemData = _b.rateItemData, activeItemWidth = _b.activeItemWidth, onTouchStart = _b.onTouchStart, onTouchMove = _b.onTouchMove, onTouchEnd = _b.onTouchEnd;
    const _c = uni_modules_tuniaouiVue3_components_rate_src_composables_rateCustom.useRateCustomStyle(props), ns = _c.ns, rateClass = _c.rateClass, itemClass = _c.itemClass, itemStyle = _c.itemStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.f(common_vendor.unref(rateItemData), (item = null, index = null, i0 = null) => {
          return {
            a: "4acb80ea-0-" + i0,
            b: common_vendor.p({
              name: item.inactive.icon
            }),
            c: index,
            d: common_vendor.n(common_vendor.unref(itemClass)("inactive", item.inactive)),
            e: common_vendor.s(common_vendor.unref(itemStyle)("inactive", item.inactive))
          };
        }),
        b: common_vendor.n(common_vendor.unref(ns).e("container")),
        c: common_vendor.n(common_vendor.unref(ns).e("inactive-container")),
        d: common_vendor.f(common_vendor.unref(rateItemData), (item = null, index = null, i0 = null) => {
          return {
            a: "4acb80ea-1-" + i0,
            b: common_vendor.p({
              name: item.active.icon
            }),
            c: index,
            d: common_vendor.n(common_vendor.unref(itemClass)("active", item.active)),
            e: common_vendor.s(common_vendor.unref(itemStyle)("active", item.active))
          };
        }),
        e: common_vendor.n(common_vendor.unref(ns).e("container")),
        f: common_vendor.n(common_vendor.unref(ns).e("active-container")),
        g: `${common_vendor.unref(activeItemWidth)}px`,
        h: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
        i: common_vendor.n(common_vendor.unref(rateClass)),
        j: common_vendor.o((...args) => {
          return common_vendor.unref(onTouchStart) && common_vendor.unref(onTouchStart)(...args);
        }),
        k: common_vendor.o((...args) => {
          return common_vendor.unref(onTouchMove) && common_vendor.unref(onTouchMove)(...args);
        }),
        l: common_vendor.o((...args) => {
          return common_vendor.unref(onTouchEnd) && common_vendor.unref(onTouchEnd)(...args);
        })
      };
      return __returned__;
    };
  }
});
const Rate = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4acb80ea"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Rate);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/rate/index.js.map
