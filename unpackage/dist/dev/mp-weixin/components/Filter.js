"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_tn_popup_1 = common_vendor.resolveComponent("tn-popup");
  _easycom_tn_popup_1();
}
const _easycom_tn_popup = () => "../uni_modules/tuniaoui-vue3/components/popup/src/popup.js";
if (!Math) {
  (common_vendor.unref(Resolution) + common_vendor.unref(Ratio) + common_vendor.unref(Sort) + common_vendor.unref(SortDateRange) + _easycom_tn_popup)();
}
const Resolution = () => "./Resolution.js";
const Ratio = () => "./Ratio.js";
const Sort = () => "./Sort.js";
const SortDateRange = () => "./SortDateRange.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Filter",
  props: {
    modelValue: { type: Boolean },
    type: {}
  },
  emits: ["update:modelValue"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: props.type === "resolution",
        b: props.type === "ratio",
        c: props.type === "model",
        d: props.type === "dateRange",
        e: _ctx.virtualHostId,
        f: common_vendor.o(($event = null) => {
          return emits("update:modelValue", false);
        }),
        g: common_vendor.p({
          ["model-value"]: props.modelValue,
          ["open-direction"]: "top",
          ["bg-color"]: "transparent",
          ["overlay-opacity"]: 0,
          id: _ctx.virtualHostId
        })
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/Filter.js.map
