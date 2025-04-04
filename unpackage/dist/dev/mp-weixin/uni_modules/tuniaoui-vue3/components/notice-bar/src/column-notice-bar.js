"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../hooks/use-namespace/index.js");
require("../../../libs/lodash/_baseToString.js");
require("../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_noticeBar_src_composables_useColumnNoticeBar = require("./composables/use-column-notice-bar.js");
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject(Object.assign(Object.assign({}, __default__), { __name: "column-notice-bar", setup(__props) {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("column-notice-bar");
  const _a = uni_modules_tuniaouiVue3_components_noticeBar_src_composables_useColumnNoticeBar.useColumnNoticeBar(), data = _a.data, interval = _a.interval, play = _a.play, vertical = _a.vertical, noticeClickEvent = _a.noticeClickEvent;
  return (_ctx = null, _cache = null) => {
    const __returned__ = {
      a: common_vendor.f(common_vendor.unref(data), (item = null, index = null, i0 = null) => {
        return {
          a: common_vendor.t(item),
          b: index,
          c: common_vendor.o(($event = null) => {
            return common_vendor.unref(noticeClickEvent)(index);
          }, index)
        };
      }),
      b: common_vendor.n(common_vendor.unref(ns).e("swiper-item")),
      c: common_vendor.n(common_vendor.unref(ns).e("swiper")),
      d: common_vendor.unref(play),
      e: common_vendor.unref(interval),
      f: common_vendor.unref(vertical),
      g: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      h: common_vendor.n(common_vendor.unref(ns).b())
    };
    return __returned__;
  };
} })));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4cda29c8"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notice-bar/src/column-notice-bar.js.map
