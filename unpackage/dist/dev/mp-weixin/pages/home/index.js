"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Math) {
  (common_vendor.unref(Filter) + common_vendor.unref(Layouts))();
}
const Layouts = () => "../../layouts/index.js";
const Filter = () => "../../components/Filter.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const filterModalShow = common_vendor.ref(false);
    const currentFilterType = common_vendor.ref("resolution");
    function handleOpenFilterModal(filterType) {
      currentFilterType.value = filterType;
      filterModalShow.value = true;
    }
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("resolution");
        }),
        b: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("ratio");
        }),
        c: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("model");
        }),
        d: common_vendor.unref(store_index.state).currentFilterMode === "toplist"
      }), common_vendor.unref(store_index.state).currentFilterMode === "toplist" ? new UTSJSONObject({
        e: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("resolution");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        f: common_vendor.o(($event = null) => {
          return filterModalShow.value = $event;
        }),
        g: common_vendor.p(new UTSJSONObject({
          type: currentFilterType.value,
          modelValue: filterModalShow.value
        })),
        h: _ctx.virtualHostId,
        i: common_vendor.p(new UTSJSONObject({
          id: _ctx.virtualHostId
        }))
      }));
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e6634c2d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/index.js.map
