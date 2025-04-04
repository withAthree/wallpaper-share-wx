"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_numberBox_src_numberBox = require("./src/number-box.js");
const uni_modules_tuniaouiVue3_components_numberBox_src_composables_numberBoxCustom = require("./src/composables/number-box-custom.js");
const uni_modules_tuniaouiVue3_components_numberBox_src_composables_useNumberBox = require("./src/composables/use-number-box.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "number-box",
  props: uni_modules_tuniaouiVue3_components_numberBox_src_numberBox.numberBoxProps,
  emits: uni_modules_tuniaouiVue3_components_numberBox_src_numberBox.numberBoxEmits,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_numberBox_src_composables_useNumberBox.useNumberBox(props), inputValue = _a.inputValue, handleOperationEvent = _a.handleOperationEvent, clearLongPressTimer = _a.clearLongPressTimer, numberBoxInputEvent = _a.numberBoxInputEvent;
    const _b = uni_modules_tuniaouiVue3_components_numberBox_src_composables_numberBoxCustom.useNumberBoxCustomStyle(props, inputValue), ns = _b.ns, numberBoxClass = _b.numberBoxClass, numberBoxStyle = _b.numberBoxStyle, numberBoxOperationWrapperClass = _b.numberBoxOperationWrapperClass, numberBoxOperationWrapperStyle = _b.numberBoxOperationWrapperStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.p({
          name: "reduce"
        }),
        b: common_vendor.n(common_vendor.unref(ns).e("operation-btn")),
        c: common_vendor.n(common_vendor.unref(ns).em("operation-btn", "minus")),
        d: common_vendor.n(common_vendor.unref(numberBoxOperationWrapperClass)("minus")),
        e: common_vendor.s(common_vendor.unref(numberBoxOperationWrapperStyle)("minus")),
        f: common_vendor.o(($event = null) => {
          return common_vendor.unref(handleOperationEvent)("minus");
        }),
        g: common_vendor.o((...args) => {
          return common_vendor.unref(clearLongPressTimer) && common_vendor.unref(clearLongPressTimer)(...args);
        }),
        h: _ctx.disabled || _ctx.inputDisabled,
        i: common_vendor.o([common_vendor.m(($event = null) => {
          return common_vendor.isRef(inputValue) ? inputValue.value = $event.detail.value : null;
        }, {
          number: true
        }), (...args) => {
          return common_vendor.unref(numberBoxInputEvent) && common_vendor.unref(numberBoxInputEvent)(...args);
        }]),
        j: common_vendor.unref(inputValue),
        k: common_vendor.n(common_vendor.unref(ns).e("input")),
        l: common_vendor.n(common_vendor.unref(numberBoxOperationWrapperClass)("input")),
        m: common_vendor.s(common_vendor.unref(numberBoxOperationWrapperStyle)("input")),
        n: common_vendor.p({
          name: "add"
        }),
        o: common_vendor.n(common_vendor.unref(ns).e("operation-btn")),
        p: common_vendor.n(common_vendor.unref(ns).em("operation-btn", "plus")),
        q: common_vendor.n(common_vendor.unref(numberBoxOperationWrapperClass)("plus")),
        r: common_vendor.s(common_vendor.unref(numberBoxOperationWrapperStyle)("plus")),
        s: common_vendor.o(($event = null) => {
          return common_vendor.unref(handleOperationEvent)("plus");
        }),
        t: common_vendor.o((...args) => {
          return common_vendor.unref(clearLongPressTimer) && common_vendor.unref(clearLongPressTimer)(...args);
        }),
        v: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        w: common_vendor.n(common_vendor.unref(numberBoxClass)),
        x: common_vendor.s(common_vendor.unref(numberBoxStyle))
      };
      return __returned__;
    };
  }
});
const NumberBox = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a2a4466b"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(NumberBox);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/number-box/index.js.map
