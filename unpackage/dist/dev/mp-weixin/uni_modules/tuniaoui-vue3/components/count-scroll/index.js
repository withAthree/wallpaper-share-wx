"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_countScroll_src_countScroll = require("./src/count-scroll.js");
const uni_modules_tuniaouiVue3_components_countScroll_src_composables_countScrollCustom = require("./src/composables/count-scroll-custom.js");
const uni_modules_tuniaouiVue3_components_countScroll_src_composables_useCountScroll = require("./src/composables/use-count-scroll.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "count-scroll",
  props: uni_modules_tuniaouiVue3_components_countScroll_src_countScroll.countScrollProps,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_countScroll_src_composables_countScrollCustom.useCountScrollCustomStyle(props), ns = _a.ns, countScrollClass = _a.countScrollClass, countScrollStyle = _a.countScrollStyle, countScrollColumnStyle = _a.countScrollColumnStyle;
    const _b = uni_modules_tuniaouiVue3_components_countScroll_src_composables_useCountScroll.useCountScroll(props), columns = _b.columns, activeIndex = _b.activeIndex;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.f(common_vendor.unref(columns), (item = null, index = null, i0 = null) => {
          return {
            a: common_vendor.f(item, (listItem = null, listIndex = null, i1 = null) => {
              return {
                a: common_vendor.t(listItem),
                b: listIndex
              };
            }),
            b: index,
            c: common_vendor.s(common_vendor.unref(countScrollColumnStyle)(common_vendor.unref(activeIndex)[index]))
          };
        }),
        b: common_vendor.n(common_vendor.unref(ns).em("column", "item")),
        c: common_vendor.n(common_vendor.unref(ns).e("column")),
        d: common_vendor.n(common_vendor.unref(ns).e("wrapper")),
        e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        f: common_vendor.n(common_vendor.unref(countScrollClass)),
        g: common_vendor.s(common_vendor.unref(countScrollStyle))
      };
      return __returned__;
    };
  }
});
const CountScroll = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-781ff58d"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(CountScroll);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-scroll/index.js.map
