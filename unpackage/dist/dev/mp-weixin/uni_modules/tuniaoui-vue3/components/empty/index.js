"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_empty_libs_default = require("./libs/default.js");
const uni_modules_tuniaouiVue3_components_empty_src_empty = require("./src/empty.js");
const uni_modules_tuniaouiVue3_components_empty_src_composables_emptyCustom = require("./src/composables/empty-custom.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "empty",
  props: uni_modules_tuniaouiVue3_components_empty_src_empty.emptyProps,
  setup(__props) {
    const props = __props;
    const slots = common_vendor.useSlots();
    const customIconContent = common_vendor.computed(() => {
      return !!(slots === null || slots === void 0 ? void 0 : slots.icon);
    });
    const customTipsContent = common_vendor.computed(() => {
      return !!(slots === null || slots === void 0 ? void 0 : slots.tips);
    });
    const _a = uni_modules_tuniaouiVue3_components_empty_src_composables_emptyCustom.useEmptyCustomStyle(props, customIconContent, customTipsContent), ns = _a.ns, emptyClass = _a.emptyClass, emptyStyle = _a.emptyStyle, iconTextStyle = _a.iconTextStyle;
    const emptyTips = common_vendor.computed(() => {
      return props.mode ? uni_modules_tuniaouiVue3_components_empty_libs_default.emptyDefaultTips[props.mode] : "";
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.p(new UTSJSONObject({
          name: `empty-${_ctx.mode}`
        })),
        b: common_vendor.n(common_vendor.unref(ns).e("icon")),
        c: common_vendor.n(common_vendor.unref(ns).is("custom", customIconContent.value)),
        d: common_vendor.s(common_vendor.unref(iconTextStyle)("icon")),
        e: _ctx.showTips || _ctx.$slots.tips
      }), _ctx.showTips || _ctx.$slots.tips ? new UTSJSONObject({
        f: common_vendor.t(emptyTips.value),
        g: common_vendor.n(common_vendor.unref(ns).e("tips")),
        h: common_vendor.n(common_vendor.unref(ns).is("custom", customTipsContent.value)),
        i: common_vendor.s(common_vendor.unref(iconTextStyle)("tips"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        k: common_vendor.n(common_vendor.unref(emptyClass)),
        l: common_vendor.s(common_vendor.unref(emptyStyle))
      }));
      return __returned__;
    };
  }
});
const Empty = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-471a2389"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Empty);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/empty/index.js.map
