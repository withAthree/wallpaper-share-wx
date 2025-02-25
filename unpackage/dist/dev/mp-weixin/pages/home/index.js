"use strict";
const common_vendor = require("../../common/vendor.js");
const types_index = require("../../types/index.js");
const store_index = require("../../store/index.js");
const pages_home_config = require("./config.js");
if (!Array) {
  const _easycom_tn_water_fall_1 = common_vendor.resolveComponent("tn-water-fall");
  _easycom_tn_water_fall_1();
}
const _easycom_tn_water_fall = () => "../../uni_modules/tuniaoui-vue3/components/water-fall/src/water-fall.js";
if (!Math) {
  (common_vendor.unref(LazyLoad) + _easycom_tn_water_fall + common_vendor.unref(Filter) + common_vendor.unref(Layouts))();
}
const Layouts = () => "../../layouts/index.js";
const Filter = () => "../../components/Filter.js";
const LazyLoad = () => "./components/LazyLoad.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const filterModalShow = common_vendor.ref(false);
    const currentFilterType = common_vendor.ref("resolution");
    function handleOpenFilterModal(filterType) {
      currentFilterType.value = filterType;
      filterModalShow.value = true;
    }
    function handleClickImage(src = null) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/index"
      });
    }
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.t(common_vendor.unref(store_index.state).currentResolution || "像素"),
        b: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("resolution");
        }),
        c: common_vendor.t(common_vendor.unref(store_index.state).currentRatios.length ? common_vendor.unref(store_index.state).currentRatios.join(",") : "比例"),
        d: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("ratio");
        }),
        e: common_vendor.t(common_vendor.unref(store_index.state).currentSort ? common_vendor.unref(types_index.FilterModes)[common_vendor.unref(store_index.state).currentSort] : "排序"),
        f: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("model");
        }),
        g: common_vendor.unref(store_index.state).currentSort === "toplist"
      }), common_vendor.unref(store_index.state).currentSort === "toplist" ? new UTSJSONObject({
        h: common_vendor.t(common_vendor.unref(store_index.state).currentDateRange ? common_vendor.unref(types_index.SortDateRanges)[common_vendor.unref(store_index.state).currentDateRange] : "范围"),
        i: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("dateRange");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        j: common_vendor.w((_a, s0 = null, i0 = null) => {
          var item = _a.item;
          return new UTSJSONObject({
            a: "e6634c2d-2-" + i0 + ",e6634c2d-1",
            b: common_vendor.p(new UTSJSONObject({
              src: item.src
            })),
            c: common_vendor.o(($event = null) => {
              return handleClickImage(item.src);
            }),
            d: i0,
            e: s0
          });
        }, new UTSJSONObject({
          name: "left",
          path: "j",
          vueId: "e6634c2d-1,e6634c2d-0"
        })),
        k: common_vendor.w((_a, s0 = null, i0 = null) => {
          var item = _a.item;
          return new UTSJSONObject({
            a: "e6634c2d-3-" + i0 + ",e6634c2d-1",
            b: common_vendor.p(new UTSJSONObject({
              src: item.src
            })),
            c: common_vendor.o(($event = null) => {
              return handleClickImage(item.src);
            }),
            d: i0,
            e: s0
          });
        }, new UTSJSONObject({
          name: "right",
          path: "k",
          vueId: "e6634c2d-1,e6634c2d-0"
        })),
        l: common_vendor.p(new UTSJSONObject({
          data: common_vendor.unref(pages_home_config.imgs),
          mode: "calc"
        })),
        m: common_vendor.o(($event = null) => {
          return filterModalShow.value = $event;
        }),
        n: common_vendor.p(new UTSJSONObject({
          type: currentFilterType.value,
          modelValue: filterModalShow.value
        })),
        o: _ctx.virtualHostId,
        p: common_vendor.p(new UTSJSONObject({
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
