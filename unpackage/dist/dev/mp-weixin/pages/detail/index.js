"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Layouts)();
}
const Layouts = () => "../../layouts/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.onBeforeMount(() => {
      common_vendor.index.setNavigationBarTitle({
        title: "1920 × 1080"
      });
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: _ctx.virtualHostId,
        b: common_vendor.p({
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
