"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_zIndex = require("../../constants/z-index.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../libs/lodash/is-boolean.js");
const uni_modules_tuniaouiVue3_components_sticky_src_composables_stickyCustom = require("./src/composables/sticky-custom.js");
const uni_modules_tuniaouiVue3_components_sticky_src_composables_useSticky = require("./src/composables/use-sticky.js");
const stickyProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 是否开启粘性布局
   */
  enabled: {
    type: Boolean,
    default: true
  },
  /**
   * @description 粘性布局的距离顶部的距离
   */
  offsetTop: {
    type: Number,
    default: 0
  },
  /**
   * @description ZIndex
   */
  zIndex: {
    type: Number,
    default: uni_modules_tuniaouiVue3_constants_zIndex.ZIndex.sticky
  }
});
const stickyEmits = {
  /**
   * @description 粘性布局状态变化时触发
   */
  change: (fixed) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(fixed);
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "sticky",
  props: stickyProps,
  emits: stickyEmits,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_sticky_src_composables_useSticky.useSticky(props), componentId = _a.componentId, supportCSSSticky = _a.supportCSSSticky, stickyStatus = _a.stickyStatus, stickyDistance = _a.stickyDistance, stickyContainerRect = _a.stickyContainerRect;
    const _b = uni_modules_tuniaouiVue3_components_sticky_src_composables_stickyCustom.useStickyCustomStyle(props, supportCSSSticky, stickyDistance, stickyStatus, stickyContainerRect), ns = _b.ns, stickyStyle = _b.stickyStyle, stickyContentStyle = _b.stickyContentStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.n(common_vendor.unref(ns).e("content")),
        b: common_vendor.s(common_vendor.unref(stickyContentStyle)),
        c: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
        d: common_vendor.n(common_vendor.unref(ns).b()),
        e: common_vendor.s(common_vendor.unref(stickyStyle))
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f01e859b"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Component);
exports.Component = Component;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/sticky/index.js.map
