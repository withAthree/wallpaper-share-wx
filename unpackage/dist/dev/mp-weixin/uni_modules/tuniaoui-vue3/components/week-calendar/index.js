"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_weekCalendar_src_weekCalendar = require("./src/week-calendar.js");
const uni_modules_tuniaouiVue3_components_weekCalendar_src_composables_weekCalendarCustom = require("./src/composables/week-calendar-custom.js");
const uni_modules_tuniaouiVue3_components_weekCalendar_src_composables_useWeekCalendar = require("./src/composables/use-week-calendar.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "week-calendar",
  props: uni_modules_tuniaouiVue3_components_weekCalendar_src_weekCalendar.weekCalendarProps,
  emits: uni_modules_tuniaouiVue3_components_weekCalendar_src_weekCalendar.weekCalendarEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_weekCalendar_src_composables_useWeekCalendar.useWeekCalendar(props, emits), componentDateItemId = _b.componentDateItemId, dateItemContainerHeight = _b.dateItemContainerHeight, weekCalendarData = _b.weekCalendarData, weekText = _b.weekText, currentSwiperIndex = _b.currentSwiperIndex, dateItemClick = _b.dateItemClick, switchWeek = _b.switchWeek, swiperChangeWeek = _b.swiperChangeWeek;
    const _c = uni_modules_tuniaouiVue3_components_weekCalendar_src_composables_weekCalendarCustom.useWeekCalendarCustomStyle(props), ns = _c.ns, itemClass = _c.itemClass, itemStyle = _c.itemStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.f(common_vendor.unref(weekText), (item = null, index = null, i0 = null) => {
          return new UTSJSONObject({
            a: common_vendor.t(item),
            b: index
          });
        }),
        b: common_vendor.n(common_vendor.unref(ns).e("week")),
        c: common_vendor.n(common_vendor.unref(ns).e("weeks")),
        d: common_vendor.unref(currentSwiperIndex) > 0
      }), common_vendor.unref(currentSwiperIndex) > 0 ? new UTSJSONObject({
        e: common_vendor.p(new UTSJSONObject({
          name: "left"
        })),
        f: common_vendor.n(common_vendor.unref(ns).e("data__week-btn")),
        g: common_vendor.o(($event = null) => {
          return common_vendor.unref(switchWeek)("prev");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        h: common_vendor.unref(currentSwiperIndex) < common_vendor.unref(weekCalendarData).length - 1
      }), common_vendor.unref(currentSwiperIndex) < common_vendor.unref(weekCalendarData).length - 1 ? new UTSJSONObject({
        i: common_vendor.p(new UTSJSONObject({
          name: "right"
        })),
        j: common_vendor.n(common_vendor.unref(ns).e("data__week-btn")),
        k: common_vendor.o(($event = null) => {
          return common_vendor.unref(switchWeek)("next");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        l: common_vendor.f(common_vendor.unref(weekCalendarData), (item = null, index = null, i0 = null) => {
          return new UTSJSONObject({
            a: common_vendor.f(item, (dateItem = null, dateIndex = null, i1 = null) => {
              return common_vendor.e(new UTSJSONObject({
                a: dateItem.date
              }), dateItem.date ? new UTSJSONObject({
                b: common_vendor.t(dateItem.date),
                c: common_vendor.t(dateItem.desc)
              }) : new UTSJSONObject({}), new UTSJSONObject({
                d: common_vendor.n(common_vendor.unref(itemClass)(dateItem.status)),
                e: common_vendor.s(common_vendor.unref(itemStyle)(dateItem.status)),
                f: common_vendor.sei(`${common_vendor.unref(componentDateItemId)}-${index}-${dateIndex}`, "view"),
                g: common_vendor.o(($event = null) => {
                  return common_vendor.unref(dateItemClick)(dateItem);
                }, dateIndex),
                h: dateIndex
              }));
            }),
            b: index
          });
        }),
        m: common_vendor.n(common_vendor.unref(ns).e("data__date")),
        n: common_vendor.n(common_vendor.unref(ns).e("data__dates")),
        o: common_vendor.n(common_vendor.unref(ns).e("data__swiper-item")),
        p: common_vendor.n(common_vendor.unref(ns).e("data__swiper")),
        q: common_vendor.unref(currentSwiperIndex),
        r: common_vendor.o((...args) => {
          return common_vendor.unref(swiperChangeWeek) && common_vendor.unref(swiperChangeWeek)(...args);
        }),
        s: common_vendor.n(common_vendor.unref(ns).e("data")),
        t: `${common_vendor.unref(dateItemContainerHeight) ? `${common_vendor.unref(dateItemContainerHeight)}px` : "auto"}`,
        v: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        w: common_vendor.n(common_vendor.unref(ns).b())
      }));
      return __returned__;
    };
  }
});
const WeekCalendar = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0803097b"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(WeekCalendar);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/week-calendar/index.js.map
