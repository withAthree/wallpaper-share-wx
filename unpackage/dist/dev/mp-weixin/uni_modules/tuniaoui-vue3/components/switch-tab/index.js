"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_switchTab_src_switchTab = require("./src/switch-tab.js");
const uni_modules_tuniaouiVue3_components_switchTab_src_composables_switchTabCustom = require("./src/composables/switch-tab-custom.js");
const uni_modules_tuniaouiVue3_components_switchTab_src_composables_useSwitchTab = require("./src/composables/use-switch-tab.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "switch-tab",
  props: uni_modules_tuniaouiVue3_components_switchTab_src_switchTab.switchTabProps,
  emits: uni_modules_tuniaouiVue3_components_switchTab_src_switchTab.switchTabEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const tabClickEvent = uni_modules_tuniaouiVue3_components_switchTab_src_composables_useSwitchTab.useSwitchTab(props, emits).tabClickEvent;
    const _b = uni_modules_tuniaouiVue3_components_switchTab_src_composables_switchTabCustom.useSwitchTabCustomStyle(props), ns = _b.ns, tabClass = _b.tabClass, tabStyle = _b.tabStyle, switchTabClass = _b.switchTabClass, switchTabStyle = _b.switchTabStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.f(_ctx.tabs, (tabItem = null, tabIndex = null, i0 = null) => {
          return {
            a: common_vendor.t(tabItem),
            b: tabIndex,
            c: common_vendor.n(common_vendor.unref(tabClass)(tabIndex)),
            d: common_vendor.s(common_vendor.unref(tabStyle)(tabIndex)),
            e: common_vendor.o(($event = null) => {
              return common_vendor.unref(tabClickEvent)(tabIndex);
            }, tabIndex)
          };
        }),
        b: common_vendor.n(common_vendor.unref(ns).e("tabs")),
        c: common_vendor.n(common_vendor.unref(ns).e("content")),
        d: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        e: common_vendor.n(common_vendor.unref(switchTabClass)),
        f: common_vendor.s(common_vendor.unref(switchTabStyle))
      };
      return __returned__;
    };
  }
});
const SwitchTab = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d709ea0c"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(SwitchTab);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/switch-tab/index.js.map
