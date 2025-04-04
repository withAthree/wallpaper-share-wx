"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    page: new UTSJSONObject({})
  },
  setup(__props) {
    const props = __props;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: !props.page
      }), !props.page ? new UTSJSONObject({
        b: common_assets._imports_0
      }) : new UTSJSONObject({}), new UTSJSONObject({
        c: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        d: !!props.page ? 1 : ""
      }));
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9ab60a64"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/layouts/index.js.map
