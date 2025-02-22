"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_zIndex = require("../../constants/z-index.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../libs/lodash/is-boolean.js");
const uni_modules_tuniaouiVue3_components_overlay_src_composables_useOverlay = require("./src/composables/use-overlay.js");
const overlayProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 是否显示遮罩层
   */
  show: {
    type: Boolean,
    default: false
  },
  /**
   * @description 动画时间，单位毫秒
   */
  duration: {
    type: Number,
    default: 300
  },
  /**
   * @description 遮罩层透明度，有效值0-1
   */
  opacity: {
    type: Number,
    default: 0.5
  },
  /**
   * @description zIndex
   */
  zIndex: {
    type: Number,
    default: uni_modules_tuniaouiVue3_constants_zIndex.ZIndex.mask
  }
});
const overlayEmits = {
  "update:show": (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  click: () => {
    return true;
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "overlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_overlay_src_composables_useOverlay.useOverlay(props, emits), overlayClass = _b.overlayClass, overlayStyle = _b.overlayStyle, overlayClick = _b.overlayClick;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sei(_ctx.virtualHostId, "view"),
        b: common_vendor.n(common_vendor.unref(overlayClass)),
        c: common_vendor.s(common_vendor.unref(overlayStyle)),
        d: common_vendor.o((...args) => {
          return common_vendor.unref(overlayClick) && common_vendor.unref(overlayClick)(...args);
        }),
        e: common_vendor.o(() => {
        })
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2319383f"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Component);
exports.Component = Component;
exports.overlayProps = overlayProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/overlay/index.js.map
