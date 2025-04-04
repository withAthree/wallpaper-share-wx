"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_bubbleBox_src_bubbleBox = require("./src/bubble-box.js");
const uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_bubbleBoxCustom = require("./src/composables/bubble-box-custom.js");
const uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_useBubbleOptions = require("./src/composables/use-bubble-options.js");
const uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_useBubbleBox = require("./src/composables/use-bubble-box.js");
if (!Math) {
  (TnOverlay + TnIcon)();
}
const TnOverlay = () => "../overlay/src/overlay.js";
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "bubble-box",
  props: uni_modules_tuniaouiVue3_components_bubbleBox_src_bubbleBox.bubbleBoxProps,
  emits: uni_modules_tuniaouiVue3_components_bubbleBox_src_bubbleBox.bubbleBoxEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_useBubbleBox.useBubbleBox(props, emits), showBubble = _b.showBubble, openBubbleOptions = _b.openBubbleOptions, closeBubbleOptions = _b.closeBubbleOptions, bubbleOptionClickEvent = _b.bubbleOptionClickEvent;
    const _c = uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_bubbleBoxCustom.useBubbleBoxCustomStyle(props, showBubble), ns = _c.ns, optionsClass = _c.optionsClass, optionsStyle = _c.optionsStyle, optionsAuxiliaryElementClass = _c.optionsAuxiliaryElementClass, optionsAuxiliaryElementStyle = _c.optionsAuxiliaryElementStyle, optionItemClass = _c.optionItemClass, optionItemStyle = _c.optionItemStyle;
    const bubbleOptions = uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_useBubbleOptions.useBubbleOptions(props).bubbleOptions;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.o(common_vendor.unref(closeBubbleOptions)),
        b: common_vendor.p({
          show: common_vendor.unref(showBubble),
          opacity: 0,
          ["z-index"]: _ctx.zIndex - 1
        }),
        c: common_vendor.n(common_vendor.unref(optionsAuxiliaryElementClass)),
        d: common_vendor.s(common_vendor.unref(optionsAuxiliaryElementStyle)),
        e: common_vendor.f(common_vendor.unref(bubbleOptions), (item = null, index = null, i0 = null) => {
          return common_vendor.e({
            a: item.icon
          }, item.icon ? {
            b: "abd23250-1-" + i0,
            c: common_vendor.p({
              name: item.icon
            })
          } : {}, {
            d: common_vendor.t(item.text),
            e: index,
            f: common_vendor.n(common_vendor.unref(optionItemClass)(item)),
            g: common_vendor.s(common_vendor.unref(optionItemStyle)(item)),
            h: common_vendor.o(($event = null) => {
              return common_vendor.unref(bubbleOptionClickEvent)(item, index);
            }, index)
          });
        }),
        f: common_vendor.n(common_vendor.unref(optionsClass)),
        g: common_vendor.s(common_vendor.unref(optionsStyle)),
        h: common_vendor.n(common_vendor.unref(ns).e("content")),
        i: common_vendor.o((...args) => {
          return common_vendor.unref(openBubbleOptions) && common_vendor.unref(openBubbleOptions)(...args);
        }),
        j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        k: common_vendor.n(common_vendor.unref(ns).b())
      };
      return __returned__;
    };
  }
});
const BubbleBox = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-abd23250"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(BubbleBox);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/bubble-box/index.js.map
