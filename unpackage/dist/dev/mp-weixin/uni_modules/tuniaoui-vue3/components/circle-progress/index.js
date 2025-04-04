"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_circleProgress_src_circleProgress = require("./src/circle-progress.js");
const uni_modules_tuniaouiVue3_components_circleProgress_src_composables_useCircleProgress = require("./src/composables/use-circle-progress.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "circle-progress",
  props: uni_modules_tuniaouiVue3_components_circleProgress_src_circleProgress.circleProgressProps,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_circleProgress_src_composables_useCircleProgress.useCircleProgress(props), ns = _a.ns, canvasId = _a.canvasId, radius = _a.radius, activeCircleColor = _a.activeCircleColor;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.sei(common_vendor.unref(canvasId), "canvas"),
        b: common_vendor.n(common_vendor.unref(ns).e("canvas")),
        c: common_vendor.unref(canvasId),
        d: _ctx.showPercent || _ctx.$slots.default
      }), _ctx.showPercent || _ctx.$slots.default ? new UTSJSONObject({
        e: common_vendor.t(_ctx.percent),
        f: common_vendor.n(common_vendor.unref(ns).e("precent-value"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        g: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        h: common_vendor.n(common_vendor.unref(ns).b()),
        i: `${common_vendor.unref(radius) * 2}px`,
        j: `${common_vendor.unref(radius) * 2}px`,
        k: common_vendor.unref(activeCircleColor)
      }));
      return __returned__;
    };
  }
});
const circleProgress = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d97cdf0a"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(circleProgress);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/circle-progress/index.js.map
