"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  TnLazyLoad();
}
const TnLazyLoad = () => "../../../uni_modules/tuniaoui-vue3/components/lazy-load/src/lazy-load.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "LazyLoad",
  props: {
    src: new UTSJSONObject({})
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
        b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/components/LazyLoad.js.map
