"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_scrollList_src_scrollList = require("./src/scroll-list.js");
const uni_modules_tuniaouiVue3_components_scrollList_src_composables_scrollListCustom = require("./src/composables/scroll-list-custom.js");
const uni_modules_tuniaouiVue3_components_scrollList_src_composables_useScrollList = require("./src/composables/use-scroll-list.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "scroll-list",
  props: uni_modules_tuniaouiVue3_components_scrollList_src_scrollList.scrollListProps,
  emits: uni_modules_tuniaouiVue3_components_scrollList_src_scrollList.scrollListEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_scrollList_src_composables_useScrollList.useScrollList(props, emits), componentId = _b.componentId, componentContentId = _b.componentContentId, indicatorBlockScrollDistance = _b.indicatorBlockScrollDistance, scrollViewScrollEvent = _b.scrollViewScrollEvent, scrollToLeftEvent = _b.scrollToLeftEvent, scrollToRightEvent = _b.scrollToRightEvent;
    const _c = uni_modules_tuniaouiVue3_components_scrollList_src_composables_scrollListCustom.useScrollListCustomStyle(props), ns = _c.ns, indicatorClass = _c.indicatorClass, indicatorStyle = _c.indicatorStyle, indicatorBlockClass = _c.indicatorBlockClass, indicatorBlockStyle = _c.indicatorBlockStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.sei(common_vendor.unref(componentContentId), "view"),
        b: common_vendor.n(common_vendor.unref(ns).e("scroll-view")),
        c: common_vendor.o((...args) => {
          return common_vendor.unref(scrollViewScrollEvent) && common_vendor.unref(scrollViewScrollEvent)(...args);
        }),
        d: common_vendor.o((...args) => {
          return common_vendor.unref(scrollToLeftEvent) && common_vendor.unref(scrollToLeftEvent)(...args);
        }),
        e: common_vendor.o((...args) => {
          return common_vendor.unref(scrollToRightEvent) && common_vendor.unref(scrollToRightEvent)(...args);
        }),
        f: common_vendor.n(common_vendor.unref(ns).e("content")),
        g: _ctx.indicator
      }), _ctx.indicator ? new UTSJSONObject({
        h: common_vendor.n(common_vendor.unref(indicatorBlockClass)),
        i: common_vendor.s(common_vendor.unref(indicatorBlockStyle)(common_vendor.unref(indicatorBlockScrollDistance))),
        j: common_vendor.n(common_vendor.unref(indicatorClass)),
        k: common_vendor.s(common_vendor.unref(indicatorStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        l: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
        m: common_vendor.n(common_vendor.unref(ns).b()),
        n: common_vendor.n(common_vendor.unref(ns).is("indicator", _ctx.indicator))
      }));
      return __returned__;
    };
  }
});
const ScrollList = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6d58ff71"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(ScrollList);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/scroll-list/index.js.map
