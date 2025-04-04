"use strict";
const common_vendor = require("../common/vendor.js");
const store_index = require("../store/index.js");
if (!Math) {
  TnInput();
}
const TnInput = () => "../uni_modules/tuniaoui-vue3/components/input/src/input.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Resolution",
  setup(__props) {
    const resolutions = new UTSJSONObject({
      "16:9": ["1280 × 720", "1600 × 900", "1920 × 1080", "2560 × 1440", "3840 × 2160"],
      "16:10": ["1280 × 800", "1600 × 1000", "1920 × 1200", "2560 × 1600", "3840 × 2400"],
      "4:3": ["1280 × 960", "1600 × 1200", "1920 × 1440", "2560 × 1920", "3840 × 2880"],
      "5:4": ["1280 × 1024", "1600 × 1280", "1920 × 1536", "2560 × 2048", "3840 × 3072"]
    });
    const tabs = common_vendor.computed(() => {
      return Object.keys(resolutions);
    });
    const range = common_vendor.ref("more");
    const currentResolution = common_vendor.ref("");
    const customWidth = common_vendor.ref("");
    const customHeight = common_vendor.ref("");
    function handleClickResolution(res = null) {
      if (res === currentResolution.value) {
        currentResolution.value = "";
      } else {
        currentResolution.value = res;
      }
    }
    common_vendor.watch([currentResolution, customWidth, customHeight, range], (_a) => {
      var _b = common_vendor.__read(_a, 4), res = _b[0], width = _b[1], height = _b[2], r = _b[3];
      const w = width !== "" ? Number(width) : void 0;
      const h = height !== "" ? Number(height) : void 0;
      const ran = r === "more" ? "≥" : "=";
      const isCustom = w !== void 0 && w !== null && h !== void 0 && h !== null;
      if (isCustom) {
        store_index.setCurrentResolution(`${ran} ${w} × ${h}`, r);
      } else if (!isCustom && res) {
        store_index.setCurrentResolution(`${ran} ${res}`, r);
      } else {
        store_index.setCurrentResolution("", r);
      }
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.unref(range) === "more" ? 1 : "",
        b: common_vendor.o(($event = null) => {
          return range.value = "more";
        }),
        c: common_vendor.unref(range) === "equal" ? 1 : "",
        d: common_vendor.o(($event = null) => {
          return range.value = "equal";
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
        g: common_vendor.o(($event = null) => {
          return common_vendor.isRef(customWidth) ? customWidth.value = $event : null;
        }),
        h: common_vendor.p({
          type: "number",
          border: false,
          placeholder: "宽",
          ["text-align"]: "center",
          modelValue: common_vendor.unref(customWidth)
        }),
        i: common_vendor.o(($event = null) => {
          return common_vendor.isRef(customHeight) ? customHeight.value = $event : null;
        }),
        j: common_vendor.p({
          type: "number",
          border: false,
          placeholder: "高",
          ["text-align"]: "center",
          modelValue: common_vendor.unref(customHeight)
        }),
        k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-977ab378"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/Resolution.js.map
