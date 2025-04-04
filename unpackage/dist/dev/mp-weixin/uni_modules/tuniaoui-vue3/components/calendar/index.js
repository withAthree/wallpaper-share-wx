"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_calendar_src_calendar = require("./src/calendar.js");
const uni_modules_tuniaouiVue3_components_calendar_src_composables_calendarCustom = require("./src/composables/calendar-custom.js");
const uni_modules_tuniaouiVue3_components_calendar_src_composables_useCalendar = require("./src/composables/use-calendar.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "calendar",
  props: uni_modules_tuniaouiVue3_components_calendar_src_calendar.calendarProps,
  emits: uni_modules_tuniaouiVue3_components_calendar_src_calendar.calendarEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const _b = uni_modules_tuniaouiVue3_components_calendar_src_composables_useCalendar.useCalendar(props, emit), reloadMonthSwiper = _b.reloadMonthSwiper, calendarId = _b.calendarId, dateContainerHeight = _b.dateContainerHeight, calendarData = _b.calendarData, weekText = _b.weekText, currentMonthIndex = _b.currentMonthIndex, currentSelectedDate = _b.currentSelectedDate, minDate = _b.minDate, maxDate = _b.maxDate, swiperSwitchMonthEvent = _b.swiperSwitchMonthEvent, swiperSwitchMonthAnimationFinishEvent = _b.swiperSwitchMonthAnimationFinishEvent, dateItemClickEvent = _b.dateItemClickEvent, switchMonth = _b.switchMonth, switchYear = _b.switchYear;
    const _c = uni_modules_tuniaouiVue3_components_calendar_src_composables_calendarCustom.useCalendarCustomStyle(props), ns = _c.ns, itemClass = _c.itemClass, itemStyle = _c.itemStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.allowChangeYear && common_vendor.unref(currentSelectedDate).year !== common_vendor.unref(minDate).year
      }), _ctx.allowChangeYear && common_vendor.unref(currentSelectedDate).year !== common_vendor.unref(minDate).year ? new UTSJSONObject({
        b: common_vendor.p(new UTSJSONObject({
          name: "left-triangle"
        })),
        c: common_vendor.n(common_vendor.unref(ns).e("operation__year-btn")),
        d: common_vendor.o(($event = null) => {
          return common_vendor.unref(switchYear)("prev");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        e: common_vendor.t(common_vendor.unref(currentSelectedDate).year),
        f: common_vendor.n(common_vendor.unref(ns).e("operation__value")),
        g: _ctx.allowChangeYear && common_vendor.unref(currentSelectedDate).year !== common_vendor.unref(maxDate).year
      }), _ctx.allowChangeYear && common_vendor.unref(currentSelectedDate).year !== common_vendor.unref(maxDate).year ? new UTSJSONObject({
        h: common_vendor.p(new UTSJSONObject({
          name: "right-triangle"
        })),
        i: common_vendor.n(common_vendor.unref(ns).e("operation__year-btn")),
        j: common_vendor.o(($event = null) => {
          return common_vendor.unref(switchYear)("next");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        k: common_vendor.n(common_vendor.unref(ns).e("operation")),
        l: common_vendor.f(common_vendor.unref(weekText), (item = null, index = null, i0 = null) => {
          return new UTSJSONObject({
            a: common_vendor.t(item),
            b: index
          });
        }),
        m: common_vendor.n(common_vendor.unref(ns).e("week-text__item")),
        n: common_vendor.n(common_vendor.unref(ns).e("week-text")),
        o: common_vendor.t(common_vendor.unref(currentSelectedDate).month),
        p: common_vendor.n(common_vendor.unref(ns).e("data__month-bg")),
        q: _ctx.allowChangeMonth && !(common_vendor.unref(currentSelectedDate).year === common_vendor.unref(minDate).year && common_vendor.unref(currentSelectedDate).month === common_vendor.unref(minDate).month || common_vendor.unref(currentSelectedDate).month === 1)
      }), _ctx.allowChangeMonth && !(common_vendor.unref(currentSelectedDate).year === common_vendor.unref(minDate).year && common_vendor.unref(currentSelectedDate).month === common_vendor.unref(minDate).month || common_vendor.unref(currentSelectedDate).month === 1) ? new UTSJSONObject({
        r: common_vendor.p(new UTSJSONObject({
          name: "left"
        })),
        s: common_vendor.n(common_vendor.unref(ns).e("data__month-btn")),
        t: common_vendor.o(($event = null) => {
          return common_vendor.unref(switchMonth)("prev");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        v: _ctx.allowChangeMonth && !(common_vendor.unref(currentSelectedDate).year === common_vendor.unref(maxDate).year && common_vendor.unref(currentSelectedDate).month === common_vendor.unref(maxDate).month || common_vendor.unref(currentSelectedDate).month === 12)
      }), _ctx.allowChangeMonth && !(common_vendor.unref(currentSelectedDate).year === common_vendor.unref(maxDate).year && common_vendor.unref(currentSelectedDate).month === common_vendor.unref(maxDate).month || common_vendor.unref(currentSelectedDate).month === 12) ? new UTSJSONObject({
        w: common_vendor.p(new UTSJSONObject({
          name: "right"
        })),
        x: common_vendor.n(common_vendor.unref(ns).e("data__month-btn")),
        y: common_vendor.o(($event = null) => {
          return common_vendor.unref(switchMonth)("next");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        z: !common_vendor.unref(reloadMonthSwiper)
      }), !common_vendor.unref(reloadMonthSwiper) ? new UTSJSONObject({
        A: common_vendor.f(common_vendor.unref(calendarData), (item = null, index = null, i0 = null) => {
          return new UTSJSONObject({
            a: common_vendor.f(item.data, (dateItem = null, dateIndex = null, i1 = null) => {
              return common_vendor.e(new UTSJSONObject({
                a: dateItem.date != 0
              }), dateItem.date != 0 ? common_vendor.e(new UTSJSONObject({
                b: common_vendor.t(dateItem.date),
                c: dateItem.desc
              }), dateItem.desc ? new UTSJSONObject({
                d: common_vendor.t(dateItem.desc)
              }) : new UTSJSONObject({}), new UTSJSONObject({
                e: common_vendor.n(common_vendor.unref(ns).e("data__date__content")),
                f: common_vendor.o(($event = null) => {
                  return common_vendor.unref(dateItemClickEvent)(dateItem);
                }, dateIndex)
              })) : new UTSJSONObject({}), new UTSJSONObject({
                g: dateIndex,
                h: common_vendor.n(common_vendor.unref(itemClass)(dateItem.status)),
                i: common_vendor.s(common_vendor.unref(itemStyle)(dateItem.status))
              }));
            }),
            b: index
          });
        }),
        B: common_vendor.n(common_vendor.unref(ns).e("data__date")),
        C: common_vendor.n(common_vendor.unref(ns).e("data__dates")),
        D: common_vendor.n(common_vendor.unref(ns).e("data__swiper-item")),
        E: common_vendor.n(common_vendor.unref(ns).e("data__swiper")),
        F: common_vendor.unref(currentMonthIndex),
        G: common_vendor.o((...args) => {
          return common_vendor.unref(swiperSwitchMonthEvent) && common_vendor.unref(swiperSwitchMonthEvent)(...args);
        }),
        H: common_vendor.o((...args) => {
          return common_vendor.unref(swiperSwitchMonthAnimationFinishEvent) && common_vendor.unref(swiperSwitchMonthAnimationFinishEvent)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        I: common_vendor.n(common_vendor.unref(ns).e("data")),
        J: `${common_vendor.unref(dateContainerHeight) ? `${common_vendor.unref(dateContainerHeight)}px` : "auto"}`,
        K: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(calendarId)), "view"),
        L: common_vendor.n(common_vendor.unref(ns).b()),
        M: common_vendor.n(common_vendor.unref(ns).m(_ctx.mode))
      }));
      return __returned__;
    };
  }
});
const Calendar = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ac0c6f6b"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Calendar);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/calendar/index.js.map
