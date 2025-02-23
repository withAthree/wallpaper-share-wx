"use strict";
const common_vendor = require("../common/vendor.js");
const store_index = require("../store/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Ratio",
  setup(__props) {
    const ratios = new UTSJSONObject({
      "宽屏": ["16 × 9", "16 × 10"],
      "超宽屏": ["21 × 9", "32 × 9", "48 × 9"],
      "竖屏": ["9 × 16", "10 × 16", "9 × 18"],
      "其他": ["1 × 1", "3 × 2", "4 × 3", "5 × 4"]
    });
    const tabs = common_vendor.computed(() => {
      return Object.keys(ratios);
    });
    const checkedRatios = common_vendor.ref([]);
    function handleClickRatio(res = null) {
      if (checkedRatios.value.includes(res)) {
        const index = checkedRatios.value.indexOf(res);
        checkedRatios.value.splice(index, 1);
      } else {
        checkedRatios.value.push(res);
      }
    }
    common_vendor.watch(checkedRatios, (val) => {
      return store_index.setCurrentRatios(val);
    }, { deep: true });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.f(common_vendor.unref(tabs), (tab = null, k0 = null, i0 = null) => {
          return {
            a: common_vendor.t(tab),
            b: tab
          };
        }),
        b: common_vendor.f(common_vendor.unref(tabs), (tab = null, k0 = null, i0 = null) => {
          return {
            a: common_vendor.f(ratios[tab], (item = null, k1 = null, i1 = null) => {
              return {
                a: common_vendor.t(item),
                b: item,
                c: common_vendor.unref(checkedRatios).includes(item) ? 1 : "",
                d: common_vendor.o(($event = null) => {
                  return handleClickRatio(item);
                }, item)
              };
            }),
            b: tab
          };
        }),
        c: common_vendor.sei(_ctx.virtualHostId, "view")
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9df1b516"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/Ratio.js.map
