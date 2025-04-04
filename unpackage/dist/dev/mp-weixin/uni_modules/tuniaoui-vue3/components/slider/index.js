"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_slider_src_slider = require("./src/slider.js");
require("../form/index.js");
const uni_modules_tuniaouiVue3_components_slider_src_composables_useSliderNodeInfo = require("./src/composables/use-slider-node-info.js");
const uni_modules_tuniaouiVue3_components_slider_src_composables_sliderCustom = require("./src/composables/slider-custom.js");
const uni_modules_tuniaouiVue3_components_slider_src_composables_useSlider = require("./src/composables/use-slider.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "slider",
  props: uni_modules_tuniaouiVue3_components_slider_src_slider.sliderProps,
  emits: uni_modules_tuniaouiVue3_components_slider_src_slider.sliderEmits,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_slider_src_composables_useSlider.useSlider(props), isFormItem = _a.isFormItem, sliderValue = _a.sliderValue, mode = _a.mode;
    const _b = uni_modules_tuniaouiVue3_components_slider_src_composables_useSliderNodeInfo.useSliderNodeInfo(props), sliderId = _b.sliderId, initSliderNodeInfo = _b.initSliderNodeInfo, onSliderBarTouchStart = _b.onSliderBarTouchStart, onSliderBarTouchMove = _b.onSliderBarTouchMove, onSliderBarTouchEnd = _b.onSliderBarTouchEnd, sliderClickEvent = _b.sliderClickEvent;
    const _c = uni_modules_tuniaouiVue3_components_slider_src_composables_sliderCustom.useSliderCustomStyle(props, sliderValue, mode), ns = _c.ns, sliderClass = _c.sliderClass, sliderStyle = _c.sliderStyle, activeSliderClass = _c.activeSliderClass, activeSliderStyle = _c.activeSliderStyle, sliderBarClass = _c.sliderBarClass, sliderBarStyle = _c.sliderBarStyle;
    common_vendor.onMounted(() => {
      common_vendor.nextTick$1(() => {
        initSliderNodeInfo();
      });
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.n(common_vendor.unref(activeSliderClass)),
        b: common_vendor.s(common_vendor.unref(activeSliderStyle)),
        c: common_vendor.o((...args) => {
          return common_vendor.unref(sliderClickEvent) && common_vendor.unref(sliderClickEvent)(...args);
        }),
        d: common_vendor.n(common_vendor.unref(sliderBarClass)),
        e: common_vendor.s(common_vendor.unref(sliderBarStyle)("min")),
        f: common_vendor.o((...args) => {
          return common_vendor.unref(onSliderBarTouchStart) && common_vendor.unref(onSliderBarTouchStart)(...args);
        }),
        g: common_vendor.o(($event = null) => {
          return common_vendor.unref(onSliderBarTouchMove)($event, "min");
        }),
        h: common_vendor.o(($event = null) => {
          return common_vendor.unref(onSliderBarTouchEnd)($event, "min");
        }),
        i: common_vendor.unref(mode) === "range"
      }), common_vendor.unref(mode) === "range" ? new UTSJSONObject({
        j: common_vendor.n(common_vendor.unref(sliderBarClass)),
        k: common_vendor.s(common_vendor.unref(sliderBarStyle)("max")),
        l: common_vendor.o((...args) => {
          return common_vendor.unref(onSliderBarTouchStart) && common_vendor.unref(onSliderBarTouchStart)(...args);
        }),
        m: common_vendor.o(($event = null) => {
          return common_vendor.unref(onSliderBarTouchMove)($event, "max");
        }),
        n: common_vendor.o(($event = null) => {
          return common_vendor.unref(onSliderBarTouchEnd)($event, "max");
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        o: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(sliderId)), "view"),
        p: common_vendor.n(common_vendor.unref(sliderClass)),
        q: common_vendor.n(common_vendor.unref(ns).is("form-item", common_vendor.unref(isFormItem))),
        r: common_vendor.s(common_vendor.unref(sliderStyle)),
        s: common_vendor.o((...args) => {
          return common_vendor.unref(sliderClickEvent) && common_vendor.unref(sliderClickEvent)(...args);
        })
      }));
      return __returned__;
    };
  }
});
const Slider = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8bad8082"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Slider);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/slider/index.js.map
