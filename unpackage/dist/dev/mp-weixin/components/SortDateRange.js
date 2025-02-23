"use strict";
const common_vendor = require("../common/vendor.js");
const store_index = require("../store/index.js");
const types_index = require("../types/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SortDateRange",
  setup(__props) {
    const checkedDateRange = common_vendor.ref("last_month");
    function handleClickDateRange(res = null) {
      checkedDateRange.value = res;
    }
    common_vendor.watch(checkedDateRange, (val) => {
      return store_index.setCurrentDateRange(val);
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.f(Object.keys(common_vendor.unref(types_index.SortDateRanges)), (key = null, k0 = null, i0 = null) => {
          return {
            a: common_vendor.t(common_vendor.unref(types_index.SortDateRanges)[key]),
            b: key,
            c: common_vendor.unref(checkedDateRange) === key ? 1 : "",
            d: common_vendor.o(($event = null) => {
              return handleClickDateRange(key);
            }, key)
          };
        }),
        b: common_vendor.sei(_ctx.virtualHostId, "view")
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e862c49d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/SortDateRange.js.map
