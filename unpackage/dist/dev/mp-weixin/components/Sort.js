"use strict";
const common_vendor = require("../common/vendor.js");
const store_index = require("../store/index.js");
const types_index = require("../types/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject({
  __name: "Sort",
  setup(__props) {
    const checkedSort = common_vendor.ref("dateAdded");
    function handleClickSort(res = null) {
      checkedSort.value = res;
    }
    common_vendor.watch(checkedSort, (val) => {
      return store_index.setCurrentSort(val);
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.f(Object.keys(common_vendor.unref(types_index.FilterModes)), (key = null, k0 = null, i0 = null) => {
          return {
            a: common_vendor.t(common_vendor.unref(types_index.FilterModes)[key]),
            b: key,
            c: common_vendor.unref(checkedSort) === key ? 1 : "",
            d: common_vendor.o(($event = null) => {
              return handleClickSort(key);
            }, key)
          };
        }),
        b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      };
      return __returned__;
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d6e13153"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/Sort.js.map
