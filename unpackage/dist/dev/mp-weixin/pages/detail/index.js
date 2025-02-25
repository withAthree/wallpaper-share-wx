"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_tn_icon_1 = common_vendor.resolveComponent("tn-icon");
  _easycom_tn_icon_1();
}
const _easycom_tn_icon = () => "../../uni_modules/tuniaoui-vue3/components/icon/src/icon.js";
if (!Math) {
  (_easycom_tn_icon + common_vendor.unref(Layouts))();
}
const Layouts = () => "../../layouts/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const downTouch = common_vendor.ref(false);
    const shareTouch = common_vendor.ref(false);
    common_vendor.onBeforeMount(() => {
      common_vendor.index.setNavigationBarTitle({
        title: "1920 × 1080"
      });
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.p({
          name: "folder-download-fill",
          color: "#fff",
          size: "24px"
        }),
        b: common_vendor.o(($event = null) => {
          return downTouch.value = true;
        }),
        c: common_vendor.o(($event = null) => {
          return downTouch.value = false;
        }),
        d: common_vendor.unref(downTouch) ? 1 : "",
        e: common_vendor.p({
          name: "send-fill",
          color: "#fff",
          size: "24px"
        }),
        f: common_vendor.o(($event = null) => {
          return shareTouch.value = true;
        }),
        g: common_vendor.o(($event = null) => {
          return shareTouch.value = false;
        }),
        h: common_vendor.unref(shareTouch) ? 1 : "",
        i: _ctx.virtualHostId,
        j: common_vendor.p({
          page: "detail",
          id: _ctx.virtualHostId
        })
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e8100d2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/index.js.map
