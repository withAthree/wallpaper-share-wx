"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_tn_popup_1 = common_vendor.resolveComponent("tn-popup");
  _easycom_tn_popup_1();
}
const _easycom_tn_popup = () => "../uni_modules/tuniaoui-vue3/components/popup/src/popup.js";
if (!Math) {
  (common_vendor.unref(Resolution) + _easycom_tn_popup)();
}
const Resolution = () => "./Resolution.js";
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
    common_vendor.watch(() => {
      return props.type;
    }, (val = null) => {
      return common_vendor.index.__f__("log", "at components/Filter.uvue:17", 111, val);
    });
    common_vendor.watch(() => {
      return props.modelValue;
    }, (val = null) => {
      return common_vendor.index.__f__("log", "at components/Filter.uvue:18", 222, val);
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: _ctx.virtualHostId,
        b: common_vendor.o(($event = null) => {
          return emits("update:modelValue", false);
        }),
        c: common_vendor.p({
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
