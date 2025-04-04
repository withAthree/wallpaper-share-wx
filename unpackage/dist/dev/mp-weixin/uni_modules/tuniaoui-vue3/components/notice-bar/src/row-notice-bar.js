"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../hooks/use-namespace/index.js");
require("../../../libs/lodash/_baseToString.js");
require("../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_noticeBar_src_composables_useRowNoticeBar = require("./composables/use-row-notice-bar.js");
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject(Object.assign(Object.assign({}, __default__), { __name: "row-notice-bar", setup(__props) {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("row-notice-bar");
  const _a = uni_modules_tuniaouiVue3_components_noticeBar_src_composables_useRowNoticeBar.useRowNoticeBar(), componentId = _a.componentId, componentTextId = _a.componentTextId, data = _a.data, animationData = _a.animationData, noticeClickEvent = _a.noticeClickEvent;
  return (_ctx = null, _cache = null) => {
    const __returned__ = {
      a: common_vendor.t(common_vendor.unref(data)),
      b: common_vendor.sei(common_vendor.unref(componentTextId), "view"),
      c: common_vendor.n(common_vendor.unref(ns).e("value")),
      d: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
      e: common_vendor.n(common_vendor.unref(ns).b()),
      f: common_vendor.unref(animationData),
      g: common_vendor.o((...args) => {
        return common_vendor.unref(noticeClickEvent) && common_vendor.unref(noticeClickEvent)(...args);
      })
    };
    return __returned__;
  };
} })));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-539d2288"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notice-bar/src/row-notice-bar.js.map
