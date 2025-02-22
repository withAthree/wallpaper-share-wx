"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_tn_input_1 = common_vendor.resolveComponent("tn-input");
  _easycom_tn_input_1();
}
const _easycom_tn_input = () => "../uni_modules/tuniaoui-vue3/components/input/src/input.js";
if (!Math) {
  _easycom_tn_input();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Resolution",
  setup(__props) {
    common_vendor.ref(0);
    const resolutions = new UTSJSONObject({
      "16:9": ["1280 × 720", "1600 × 900", "1920 × 1080", "2560 × 1440", "3840 × 2160"],
      "16:10": ["1280 × 800", "1600 × 1000", "1920 × 1200", "2560 × 1600", "3840 × 2400"],
      "4:3": ["1280 × 960", "1600 × 1200", "1920 × 1440", "2560 × 1920", "3840 × 2880"],
      "5:4": ["1280 × 1024", "1600 × 1280", "1920 × 1536", "2560 × 2048", "3840 × 3072"]
    });
    const tabs = common_vendor.computed(() => {
      return Object.keys(resolutions);
    });
    const range = common_vendor.ref("atLeast");
    const currentResolution = common_vendor.ref("");
    function handleClickResolution(res = null) {
      if (res === currentResolution.value) {
        currentResolution.value = "";
      } else {
        currentResolution.value = res;
      }
    }
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.unref(range) === "atLeast" ? 1 : "",
        b: common_vendor.o(($event = null) => {
          return range.value = "atLeast";
        }),
        c: common_vendor.unref(range) === "exactly" ? 1 : "",
        d: common_vendor.o(($event = null) => {
          return range.value = "exactly";
        }),
        e: common_vendor.f(common_vendor.unref(tabs), (tab = null, k0 = null, i0 = null) => {
          return {
            a: common_vendor.t(tab),
            b: tab
          };
        }),
        f: common_vendor.f(common_vendor.unref(tabs), (tab = null, k0 = null, i0 = null) => {
          return {
            a: common_vendor.f(resolutions[tab], (item = null, k1 = null, i1 = null) => {
              return {
                a: common_vendor.t(item),
                b: item,
                c: item === common_vendor.unref(currentResolution) ? 1 : "",
                d: common_vendor.o(($event = null) => {
                  return handleClickResolution(item);
                }, item)
              };
            }),
            b: tab
          };
        }),
        g: common_vendor.p({
          type: "number",
          border: false,
          placeholder: "宽",
          ["text-align"]: "center"
        }),
        h: common_vendor.p({
          type: "number",
          border: false,
          placeholder: "高",
          ["text-align"]: "center"
        }),
        i: common_vendor.sei(_ctx.virtualHostId, "view")
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-977ab378"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/Resolution.js.map
