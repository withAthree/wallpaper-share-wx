"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_constants_zIndex = require("../../../constants/z-index.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
const uni_modules_tuniaouiVue3_components_overlay_index = require("../../overlay/index.js");
const uni_modules_tuniaouiVue3_components_popup_src_composables_popupCustom = require("./composables/popup-custom.js");
const uni_modules_tuniaouiVue3_components_popup_src_composables_usePopup = require("./composables/use-popup.js");
const popupOpenDirection = [
  "top",
  "bottom",
  "left",
  "right",
  "center"
];
const popupCloseBtnPosition = [
  "left-top",
  "right-top",
  "left-bottom",
  "right-bottom"
];
const popupProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 控制弹框是否显示
   */
  modelValue: Boolean,
  /**
   * @description 弹框打开的方向
   */
  openDirection: {
    type: String,
    values: popupOpenDirection,
    default: "center"
  },
  /**
   * @description 弹窗的宽度，在 openDirection 为 left 或 right 或 center 时生效
   */
  width: {
    type: [String, Number]
  },
  /**
   * @description 弹窗的高度，在 openDirection 为 top 或 bottom 或 center 时生效
   */
  height: {
    type: [String, Number]
  },
  /**
   * @description 弹框的内容的背景颜色
   */
  bgColor: {
    type: String,
    default: "#fff"
  },
  /**
   * @description 弹框的内容的圆角
   */
  radius: {
    type: [String, Number],
    default: 15
  },
  /**
   * @description 是否显示overlay遮罩层
   */
  overlay: {
    type: Boolean,
    default: true
  },
  /**
   * @description overlay遮罩层的透明度
   */
  overlayOpacity: uni_modules_tuniaouiVue3_components_overlay_index.overlayProps["opacity"],
  /**
   * @description 点击overlay关闭弹框
   */
  overlayCloseable: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否显示关闭按钮
   */
  closeBtn: Boolean,
  /**
   * @description 关闭按钮的位置
   */
  closeBtnPosition: {
    type: String,
    values: popupCloseBtnPosition,
    default: "right-top"
  },
  /**
   * @description 底部是否开启安全区域
   */
  safeAreaInsetBottom: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentSafeAreaInsetBottomProp,
  /**
   * @description zIndex
   */
  zIndex: {
    type: Number,
    default: uni_modules_tuniaouiVue3_constants_zIndex.ZIndex.popup
  },
  /**
   * @description 距离顶部的距离，在 openDirection 为 top 或 left 或 right 时生效，默认单位为`px`
   */
  top: {
    type: [String, Number]
  }
});
const popupEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  open: () => {
    return true;
  },
  close: () => {
    return true;
  },
  ["overlay-click"]: () => {
    return true;
  }
};
if (!Math) {
  (TnOverlay + TnIcon)();
}
const TnOverlay = () => "../../overlay/src/overlay.js";
const TnIcon = () => "../../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "popup",
  props: popupProps,
  emits: popupEmits,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_popup_src_composables_usePopup.usePopup(props), iosDevice = _a.iosDevice, showOverlay = _a.showOverlay, showPopup = _a.showPopup, visiblePopup = _a.visiblePopup, onClickCloseBtn = _a.onClickCloseBtn, onClickOverlay = _a.onClickOverlay;
    const _b = uni_modules_tuniaouiVue3_components_popup_src_composables_popupCustom.usePopupCustomStyle(props), ns = _b.ns, overlayZIndex = _b.overlayZIndex, zIndex = _b.zIndex, popupContentClass = _b.popupContentClass, popupContentStyle = _b.popupContentStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: !common_vendor.unref(iosDevice) || common_vendor.unref(iosDevice) && common_vendor.unref(visiblePopup)
      }), !common_vendor.unref(iosDevice) || common_vendor.unref(iosDevice) && common_vendor.unref(visiblePopup) ? common_vendor.e(new UTSJSONObject({
        b: common_vendor.o(common_vendor.unref(onClickOverlay)),
        c: common_vendor.p(new UTSJSONObject({
          show: common_vendor.unref(showOverlay),
          ["z-index"]: common_vendor.unref(overlayZIndex),
          opacity: _ctx.overlayOpacity
        })),
        d: _ctx.closeBtn
      }), _ctx.closeBtn ? new UTSJSONObject({
        e: common_vendor.p(new UTSJSONObject({
          name: "close"
        })),
        f: common_vendor.n(common_vendor.unref(ns).e("close-btn")),
        g: common_vendor.n(common_vendor.unref(ns).em("close-btn", _ctx.closeBtnPosition)),
        h: common_vendor.o((...args) => {
          return common_vendor.unref(onClickCloseBtn) && common_vendor.unref(onClickCloseBtn)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        i: common_vendor.n(common_vendor.unref(popupContentClass)),
        j: common_vendor.s(common_vendor.unref(popupContentStyle)),
        k: common_vendor.sei(_ctx.virtualHostId, "view"),
        l: common_vendor.n(common_vendor.unref(ns).b()),
        m: common_vendor.n(common_vendor.unref(ns).is("show", common_vendor.unref(showPopup))),
        n: common_vendor.n(common_vendor.unref(ns).is("visible", common_vendor.unref(visiblePopup))),
        o: common_vendor.unref(zIndex)
      })) : new UTSJSONObject({}));
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a600c819"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/popup/src/popup.js.map
