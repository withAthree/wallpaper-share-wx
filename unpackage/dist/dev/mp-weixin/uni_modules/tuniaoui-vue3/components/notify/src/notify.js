"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_zIndex = require("../../../constants/z-index.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_notify_src_composables_notifyCustom = require("./composables/notify-custom.js");
const uni_modules_tuniaouiVue3_components_notify_src_composables_useNotify = require("./composables/use-notify.js");
const notifyProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 距离顶部的距离，防止使用了自定义顶部导航栏后，notify 被遮挡，单位为 px
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
    default: uni_modules_tuniaouiVue3_constants_zIndex.ZIndex.notify
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "notify",
  props: notifyProps,
  setup(__props, _a) {
    var __expose = _a.expose;
    const props = __props;
    const _b = uni_modules_tuniaouiVue3_components_notify_src_composables_useNotify.useNotify(), options = _b.options, isActive = _b.isActive, showNotify = _b.showNotify;
    const _c = uni_modules_tuniaouiVue3_components_notify_src_composables_notifyCustom.useNotifyCustomStyle(props, options, isActive), notifyClass = _c.notifyClass, notifyStyle = _c.notifyStyle;
    __expose({
      /**
       * @description: 显示通知
       */
      show: showNotify
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.t(common_vendor.unref(options).msg),
        b: common_vendor.sei(_ctx.virtualHostId, "view"),
        c: common_vendor.n(common_vendor.unref(notifyClass)),
        d: common_vendor.s(common_vendor.unref(notifyStyle))
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7721a54f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notify/src/notify.js.map
