"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_lineProgress_src_lineProgress = require("./src/line-progress.js");
const uni_modules_tuniaouiVue3_components_lineProgress_src_composables_lineProgressCustom = require("./src/composables/line-progress-custom.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "line-progress",
  props: uni_modules_tuniaouiVue3_components_lineProgress_src_lineProgress.lineProgressProps,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_lineProgress_src_composables_lineProgressCustom.useLineProgressCustomStyle(props), ns = _a.ns, progressClass = _a.progressClass, progressStyle = _a.progressStyle, activeProgressClass = _a.activeProgressClass, activeProgressStyle = _a.activeProgressStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.showPercent || _ctx.$slots.default
      }), _ctx.showPercent || _ctx.$slots.default ? new UTSJSONObject({
        b: common_vendor.t(_ctx.percent),
        c: common_vendor.n(common_vendor.unref(ns).e("percent-value"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        d: common_vendor.n(common_vendor.unref(activeProgressClass)),
        e: common_vendor.s(common_vendor.unref(activeProgressStyle)),
        f: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        g: common_vendor.n(common_vendor.unref(progressClass)),
        h: common_vendor.s(common_vendor.unref(progressStyle))
      }));
      return __returned__;
    };
  }
});
const lineProgress = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1187ce21"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(lineProgress);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/line-progress/index.js.map
