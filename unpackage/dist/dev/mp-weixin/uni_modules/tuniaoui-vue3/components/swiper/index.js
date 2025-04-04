"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_swiper_src_swiper = require("./src/swiper.js");
const uni_modules_tuniaouiVue3_components_swiper_src_composables_swiperCustom = require("./src/composables/swiper-custom.js");
const uni_modules_tuniaouiVue3_components_swiper_src_composables_useSwiper = require("./src/composables/use-swiper.js");
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "swiper", props: uni_modules_tuniaouiVue3_components_swiper_src_swiper.swiperProps, emits: uni_modules_tuniaouiVue3_components_swiper_src_swiper.swiperEmits, setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emits = __emit;
  const _b = uni_modules_tuniaouiVue3_components_swiper_src_composables_useSwiper.useSwiper(props, emits), swiperData = _b.swiperData, currentSwiperIndex = _b.currentSwiperIndex, swiperCount = _b.swiperCount, swiperChangeHandle = _b.swiperChangeHandle, itemClickHandle = _b.itemClickHandle;
  const _c = uni_modules_tuniaouiVue3_components_swiper_src_composables_swiperCustom.useSwiperCustomStyle(props), ns = _c.ns, swiperStyle = _c.swiperStyle, indicatorColorClass = _c.indicatorColorClass, indicatorColorStyle = _c.indicatorColorStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = common_vendor.e(new UTSJSONObject({
      a: common_vendor.f(common_vendor.unref(swiperData), (item = null, index = null, i0 = null) => {
        return new UTSJSONObject({
          a: "d-" + i0,
          b: common_vendor.r("d", new UTSJSONObject({
            active: index === common_vendor.unref(currentSwiperIndex),
            data: item
          }), i0),
          c: index
        });
      }),
      b: common_vendor.n(common_vendor.unref(ns).e("swiper-item")),
      c: common_vendor.n(common_vendor.unref(ns).e("swiper")),
      d: common_vendor.unref(currentSwiperIndex),
      e: _ctx.autoplay,
      f: _ctx.interval,
      g: _ctx.duration,
      h: _ctx.loop,
      i: _ctx.previousMargin,
      j: _ctx.nextMargin,
      k: common_vendor.o((...args) => {
        return common_vendor.unref(swiperChangeHandle) && common_vendor.unref(swiperChangeHandle)(...args);
      }),
      l: common_vendor.n(common_vendor.unref(ns).e("wrapper")),
      m: _ctx.indicator
    }), _ctx.indicator ? common_vendor.e(new UTSJSONObject({
      n: _ctx.indicatorType === "line"
    }), _ctx.indicatorType === "line" ? new UTSJSONObject({
      o: common_vendor.n(common_vendor.unref(indicatorColorClass)(true)),
      p: common_vendor.s(common_vendor.unref(indicatorColorStyle)(true)),
      q: `${(100 / common_vendor.unref(swiperData).length).toFixed(2)}%`,
      r: `translateX(${100 * common_vendor.unref(currentSwiperIndex)}%)`,
      s: common_vendor.n(common_vendor.unref(indicatorColorClass)(false)),
      t: common_vendor.s(common_vendor.unref(indicatorColorStyle)(false)),
      v: common_vendor.n(common_vendor.unref(ns).e("indicator-line"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      w: _ctx.indicatorType === "dot"
    }), _ctx.indicatorType === "dot" ? new UTSJSONObject({
      x: common_vendor.f(common_vendor.unref(swiperCount), (_ = null, i = null, i0 = null) => {
        return new UTSJSONObject({
          a: i,
          b: common_vendor.n(common_vendor.unref(indicatorColorClass)(i === common_vendor.unref(currentSwiperIndex))),
          c: common_vendor.n(new UTSJSONObject({
            active: i === common_vendor.unref(currentSwiperIndex)
          })),
          d: common_vendor.s(common_vendor.unref(indicatorColorStyle)(i === common_vendor.unref(currentSwiperIndex)))
        });
      }),
      y: common_vendor.n(common_vendor.unref(ns).e("indicator-dot"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      z: _ctx.indicatorType === "number"
    }), _ctx.indicatorType === "number" ? new UTSJSONObject({
      A: common_vendor.t(common_vendor.unref(currentSwiperIndex) + 1),
      B: common_vendor.t(common_vendor.unref(swiperCount)),
      C: common_vendor.n(common_vendor.unref(indicatorColorClass)(false)),
      D: common_vendor.s(common_vendor.unref(indicatorColorStyle)(false)),
      E: common_vendor.n(common_vendor.unref(ns).e("indicator-number"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      F: common_vendor.n(common_vendor.unref(ns).e("indicator")),
      G: common_vendor.n(common_vendor.unref(ns).em("indicator", _ctx.indicatorPosition))
    })) : new UTSJSONObject({}), new UTSJSONObject({
      H: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      I: common_vendor.n(common_vendor.unref(ns).b()),
      J: common_vendor.s(common_vendor.unref(swiperStyle)),
      K: common_vendor.o((...args) => {
        return common_vendor.unref(itemClickHandle) && common_vendor.unref(itemClickHandle)(...args);
      })
    }));
    return __returned__;
  };
} }));
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/swiper/index.js.map
