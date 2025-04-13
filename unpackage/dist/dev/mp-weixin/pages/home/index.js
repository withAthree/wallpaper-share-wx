"use strict";
const common_vendor = require("../../common/vendor.js");
const types_index = require("../../types/index.js");
const store_index = require("../../store/index.js");
require("./config.js");
require("../../uni_modules/tuniaoui-vue3/components/action-sheet/index.js");
require("../../uni_modules/tuniaoui-vue3/components/avatar/index.js");
require("../../uni_modules/tuniaoui-vue3/components/badge/index.js");
require("../../uni_modules/tuniaoui-vue3/components/bubble-box/index.js");
require("../../uni_modules/tuniaoui-vue3/components/button/index.js");
require("../../uni_modules/tuniaoui-vue3/components/calendar/index.js");
require("../../uni_modules/tuniaoui-vue3/components/checkbox/index.js");
require("../../uni_modules/tuniaoui-vue3/components/circle-progress/index.js");
require("../../uni_modules/tuniaoui-vue3/components/collapse/index.js");
require("../../uni_modules/tuniaoui-vue3/components/count-down/index.js");
require("../../uni_modules/tuniaoui-vue3/components/count-scroll/index.js");
require("../../uni_modules/tuniaoui-vue3/components/count-to/index.js");
require("../../uni_modules/tuniaoui-vue3/components/date-time-picker/index.js");
require("../../uni_modules/tuniaoui-vue3/components/empty/index.js");
require("../../uni_modules/tuniaoui-vue3/components/footer/index.js");
require("../../uni_modules/tuniaoui-vue3/components/form/index.js");
require("../../uni_modules/tuniaoui-vue3/components/icon/index.js");
require("../../uni_modules/tuniaoui-vue3/components/image-upload/index.js");
require("../../uni_modules/tuniaoui-vue3/components/index-list/index.js");
require("../../uni_modules/tuniaoui-vue3/components/input/index.js");
require("../../uni_modules/tuniaoui-vue3/components/keyboard/index.js");
require("../../uni_modules/tuniaoui-vue3/components/lazy-load/index.js");
require("../../uni_modules/tuniaoui-vue3/components/line-progress/index.js");
require("../../uni_modules/tuniaoui-vue3/components/list/index.js");
require("../../uni_modules/tuniaoui-vue3/components/loading/index.js");
require("../../uni_modules/tuniaoui-vue3/components/loadmore/index.js");
require("../../uni_modules/tuniaoui-vue3/components/modal/index.js");
require("../../uni_modules/tuniaoui-vue3/components/navbar/index.js");
require("../../uni_modules/tuniaoui-vue3/components/notice-bar/index.js");
require("../../uni_modules/tuniaoui-vue3/components/notify/index.js");
require("../../uni_modules/tuniaoui-vue3/components/number-box/index.js");
require("../../uni_modules/tuniaoui-vue3/components/overlay/index.js");
require("../../uni_modules/tuniaoui-vue3/components/photo-album/index.js");
require("../../uni_modules/tuniaoui-vue3/components/picker/index.js");
require("../../uni_modules/tuniaoui-vue3/components/popup/index.js");
require("../../uni_modules/tuniaoui-vue3/components/radio/index.js");
require("../../uni_modules/tuniaoui-vue3/components/rate/index.js");
require("../../uni_modules/tuniaoui-vue3/components/read-more/index.js");
require("../../uni_modules/tuniaoui-vue3/components/region-picker/index.js");
require("../../uni_modules/tuniaoui-vue3/components/scroll-list/index.js");
require("../../uni_modules/tuniaoui-vue3/components/search-box/index.js");
require("../../uni_modules/tuniaoui-vue3/components/slider/index.js");
require("../../uni_modules/tuniaoui-vue3/components/steps/index.js");
require("../../uni_modules/tuniaoui-vue3/components/sticky/index.js");
require("../../uni_modules/tuniaoui-vue3/components/subsection/index.js");
require("../../uni_modules/tuniaoui-vue3/components/swipe-action/index.js");
require("../../uni_modules/tuniaoui-vue3/components/swiper/index.js");
require("../../uni_modules/tuniaoui-vue3/components/switch/index.js");
require("../../uni_modules/tuniaoui-vue3/components/switch-tab/index.js");
require("../../uni_modules/tuniaoui-vue3/components/tabbar/index.js");
require("../../uni_modules/tuniaoui-vue3/components/tabs/index.js");
require("../../uni_modules/tuniaoui-vue3/components/tag/index.js");
require("../../uni_modules/tuniaoui-vue3/components/title/index.js");
require("../../uni_modules/tuniaoui-vue3/components/water-fall/index.js");
require("../../uni_modules/tuniaoui-vue3/components/week-calendar/index.js");
require("../../uni_modules/tuniaoui-vue3/libs/lodash/_baseToString.js");
require("../../uni_modules/tuniaoui-vue3/hooks/use-z-index/index.js");
const api_index = require("../../api/index.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_tn_loadmore_1 = common_vendor.resolveComponent("tn-loadmore");
  _easycom_tn_loadmore_1();
}
const _easycom_tn_loadmore = () => "../../uni_modules/tuniaoui-vue3/components/loadmore/src/loadmore.js";
if (!Math) {
  (TnLoading + TnOverlay + common_vendor.unref(LazyLoad) + _easycom_tn_loadmore + common_vendor.unref(Filter) + common_vendor.unref(Layouts))();
}
const Layouts = () => "../../layouts/index.js";
const Filter = () => "../../components/Filter.js";
const LazyLoad = () => "./components/LazyLoad.js";
const TnLoading = () => "../../uni_modules/tuniaoui-vue3/components/loading/src/loading.js";
const TnOverlay = () => "../../uni_modules/tuniaoui-vue3/components/overlay/src/overlay.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const imgList = common_vendor.ref([]);
    const filterModalShow = common_vendor.ref(false);
    const currentFilterType = common_vendor.ref("resolution");
    const triggered = common_vendor.ref(false);
    const refresherEnabled = common_vendor.ref(false);
    const loadmoreStatus = common_vendor.ref("loadmore");
    const pageInfo = common_vendor.reactive(new UTSJSONObject({
      current: 1,
      size: 12
    }));
    const baseUrl = api_index.BASE_URL.replace("/api", "");
    let hasMore = true;
    let isLoading = false;
    common_vendor.watch(filterModalShow, (val) => {
      if (!val) {
        pageInfo.current = 1;
        getData("refresh");
      }
    }, {
      immediate: true
    });
    function getData(type, successFn = null) {
      var _a;
      const params = new UTSJSONObject(
        {
          current: pageInfo.current,
          size: pageInfo.size
        }
        // 拿像素
      );
      if (store_index.state.currentResolution) {
        const tempArr = store_index.state.currentResolution.match(/\d+/g);
        params.width = Number(tempArr[0].trim());
        params.height = Number(tempArr[1].trim());
        params.compare = store_index.state.range;
      }
      if ((_a = store_index.state.currentRatios) === null || _a === void 0 ? void 0 : _a.length) {
        params.ratio = store_index.state.currentRatios.map((str) => {
          return str.replace(" × ", "*");
        });
      }
      if (store_index.state.currentSort) {
        params.sort = store_index.state.currentSort;
        if (store_index.state.currentSort === "toplist") {
          params.timeLimit = store_index.state.currentDateRange;
        }
      }
      if (hasMore) {
        isLoading = true;
        api_index.getImageList(params).then((res = null) => {
          if (res.statusCode !== 200)
            return null;
          const data = res.data.records.map((item = null) => {
            return new UTSJSONObject({
              smallImgUrl: utils_index.decryptUrl(item.compressPicUrl),
              bigImgUrl: utils_index.decryptUrl(item.picUrl),
              resolution: `${item.width} × ${item.height}`,
              picName: item.picName,
              width: item.width,
              height: item.height
            });
          });
          common_vendor.index.__f__("log", "at pages/home/index.uvue:134", 123, data);
          if (!data.length) {
            loadmoreStatus.value = "nomore";
            hasMore = false;
            return null;
          }
          if (type === "loadmore") {
            imgList.value = imgList.value.concat(data);
          } else {
            imgList.value = data;
          }
          if (data.length < 12) {
            loadmoreStatus.value = "nomore";
            hasMore = false;
          }
          if (successFn) {
            successFn();
          }
          isLoading = false;
        });
      }
    }
    function handleOpenFilterModal(filterType) {
      currentFilterType.value = filterType;
      filterModalShow.value = true;
    }
    function handleClickImage(small = null, big = null, name = null, id = null) {
      common_vendor.index.navigateTo({
        url: `/subPages/pages/detail/index?data=${UTS.JSON.stringify(new UTSJSONObject({ small, big, name, id }))}`
      });
    }
    function refresherrefresh() {
      common_vendor.index.__f__("log", "at pages/home/index.uvue:175", "refresherrefresh");
      triggered.value = "restore";
      pageInfo.current = 1;
      hasMore = true;
      getData("refresh", () => {
        return triggered.value = false;
      });
    }
    function refresherrestore() {
      common_vendor.index.__f__("log", "at pages/home/index.uvue:183", "refresherrestore");
      triggered.value = "restore";
    }
    function refresherabort() {
      common_vendor.index.__f__("log", "at pages/home/index.uvue:188", "refresherabort");
      triggered.value = false;
    }
    function scrolltolower() {
      common_vendor.index.__f__("log", "at pages/home/index.uvue:194", "scrolltolower");
      if (hasMore && !isLoading) {
        pageInfo.current = pageInfo.current + 1;
        loadmoreStatus.value = "loading";
        getData("loadmore", () => {
          return loadmoreStatus.value = "loadmore";
        });
      }
    }
    const leftList = common_vendor.ref([]);
    const rightList = common_vendor.ref([]);
    const boxWidth = common_vendor.ref(0);
    common_vendor.watch([imgList, boxWidth], (_a) => {
      var _b = common_vendor.__read(_a, 2), data = _b[0], width = _b[1];
      if (!width)
        return null;
      let leftHeight = 0;
      let rightHeight = 0;
      leftList.value = [];
      rightList.value = [];
      for (let i = 0; i < data.length; i += 1) {
        const scale = width / data[i].width;
        const height = data[i].height * scale;
        if (i === 0 || leftHeight <= rightHeight) {
          leftList.value.push(data[i]);
          leftHeight += height;
        } else if (i === 1 || leftHeight > rightHeight) {
          rightList.value.push(data[i]);
          rightHeight += height;
        } else {
          leftList.value.push(data[i]);
          leftHeight += height;
        }
      }
      common_vendor.index.__f__("log", "at pages/home/index.uvue:230", leftList.value.length, rightList.value.length);
    });
    common_vendor.onMounted(() => {
      const instance = common_vendor.getCurrentInstance();
      common_vendor.nextTick$1(() => {
        const query = common_vendor.index.createSelectorQuery().in(instance);
        query.select("#left").boundingClientRect((data = null) => {
          boxWidth.value = data.width;
        }).exec();
      });
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.unref(store_index.state).globalLoading
      }), common_vendor.unref(store_index.state).globalLoading ? new UTSJSONObject({
        b: common_vendor.p(new UTSJSONObject({
          show: true,
          animation: true,
          mode: "circle",
          color: "rgb(239, 244, 255)",
          size: "50px"
        })),
        c: common_vendor.p(new UTSJSONObject({
          show: true
        }))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        d: common_vendor.t(common_vendor.unref(store_index.state).currentResolution || "像素"),
        e: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("resolution");
        }),
        f: common_vendor.t(common_vendor.unref(store_index.state).currentRatios.length ? common_vendor.unref(store_index.state).currentRatios.join(",") : "比例"),
        g: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("ratio");
        }),
        h: common_vendor.t(common_vendor.unref(store_index.state).currentSort ? common_vendor.unref(types_index.FilterModes)[common_vendor.unref(store_index.state).currentSort] : "排序"),
        i: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("model");
        }),
        j: common_vendor.unref(store_index.state).currentSort === "toplist"
      }), common_vendor.unref(store_index.state).currentSort === "toplist" ? new UTSJSONObject({
        k: common_vendor.t(common_vendor.unref(store_index.state).currentDateRange ? common_vendor.unref(types_index.SortDateRanges)[common_vendor.unref(store_index.state).currentDateRange] : "范围"),
        l: common_vendor.o(($event = null) => {
          return handleOpenFilterModal("dateRange");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        m: common_vendor.f(leftList.value, (item = null, k0 = null, i0 = null) => {
          return new UTSJSONObject({
            a: "e6634c2d-3-" + i0 + ",e6634c2d-0",
            b: common_vendor.p(new UTSJSONObject({
              src: `${common_vendor.unref(baseUrl)}${item.smallImgUrl}`
            })),
            c: common_vendor.t(item.resolution),
            d: common_vendor.o(($event = null) => {
              return handleClickImage(item.smallImgUrl, item.bigImgUrl, item.picName, item.id);
            })
          });
        }),
        n: common_vendor.sei("left", "view"),
        o: common_vendor.f(rightList.value, (item = null, k0 = null, i0 = null) => {
          return new UTSJSONObject({
            a: "e6634c2d-4-" + i0 + ",e6634c2d-0",
            b: common_vendor.p(new UTSJSONObject({
              src: `${common_vendor.unref(baseUrl)}${item.smallImgUrl}`
            })),
            c: common_vendor.t(item.resolution),
            d: common_vendor.o(($event = null) => {
              return handleClickImage(item.smallImgUrl, item.bigImgUrl, item.picName, item.id);
            })
          });
        }),
        p: common_vendor.sei("right", "view"),
        q: loadmoreStatus.value === "loading" || loadmoreStatus.value === "nomore"
      }), loadmoreStatus.value === "loading" || loadmoreStatus.value === "nomore" ? new UTSJSONObject({
        r: common_vendor.p(new UTSJSONObject({
          status: loadmoreStatus.value,
          size: "14px",
          color: "rgb(239, 244, 255)"
        }))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        s: refresherEnabled.value,
        t: triggered.value,
        v: common_vendor.o(refresherrefresh),
        w: common_vendor.o(refresherrestore),
        x: common_vendor.o(refresherabort),
        y: common_vendor.o(scrolltolower),
        z: common_vendor.o(($event = null) => {
          return filterModalShow.value = $event;
        }),
        A: common_vendor.p(new UTSJSONObject({
          type: currentFilterType.value,
          modelValue: filterModalShow.value
        })),
        B: common_vendor.gei(_ctx, ""),
        C: common_vendor.p(new UTSJSONObject({
          id: common_vendor.gei(_ctx, "")
        }))
      }));
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e6634c2d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/index.js.map
