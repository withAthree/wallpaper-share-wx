"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_tn_lazy_load_1 = common_vendor.resolveComponent("tn-lazy-load");
  _easycom_tn_lazy_load_1();
}
const _easycom_tn_lazy_load = () => "../../../uni_modules/tuniaoui-vue3/components/lazy-load/src/lazy-load.js";
if (!Math) {
  _easycom_tn_lazy_load();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "LazyLoad",
  props: {
    src: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.p({
          src: props.src,
          mode: "widthFix",
          threshold: 300,
          height: "auto"
        }),
        b: common_vendor.sei(_ctx.virtualHostId, "view")
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/components/LazyLoad.js.map
