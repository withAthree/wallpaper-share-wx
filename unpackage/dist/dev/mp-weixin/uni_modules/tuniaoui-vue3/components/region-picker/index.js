"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_regionPicker_src_regionPicker = require("./src/region-picker.js");
const uni_modules_tuniaouiVue3_components_regionPicker_src_composables_useRegionPicker = require("./src/composables/use-region-picker.js");
if (!Math) {
  TnPicker();
}
const TnPicker = () => "../picker/src/picker.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "region-picker",
  props: uni_modules_tuniaouiVue3_components_regionPicker_src_regionPicker.regionPickerProps,
  emits: uni_modules_tuniaouiVue3_components_regionPicker_src_regionPicker.regionPickerEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_regionPicker_src_composables_useRegionPicker.useRegionPicker(props, emits), pickerSelectData = _b.pickerSelectData, showPicker = _b.showPicker, currentSelectValue = _b.currentSelectValue, handlePickerCloseEvent = _b.handlePickerCloseEvent, handlePickerChangeEvent = _b.handlePickerChangeEvent, handlePickerConfirmEvent = _b.handlePickerConfirmEvent, handlePickerCancelEvent = _b.handlePickerCancelEvent;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.gei(_ctx, ""),
        b: common_vendor.o(common_vendor.unref(handlePickerCloseEvent)),
        c: common_vendor.o(common_vendor.unref(handlePickerChangeEvent)),
        d: common_vendor.o(common_vendor.unref(handlePickerConfirmEvent)),
        e: common_vendor.o(common_vendor.unref(handlePickerCancelEvent)),
        f: common_vendor.o(($event = null) => {
          return common_vendor.isRef(showPicker) ? showPicker.value = $event : null;
        }),
        g: common_vendor.p({
          ["model-value"]: common_vendor.unref(currentSelectValue),
          data: common_vendor.unref(pickerSelectData),
          ["label-key"]: "name",
          ["value-key"]: "code",
          ["show-cancel"]: _ctx.showCancel,
          ["show-confirm"]: _ctx.showConfirm,
          mask: _ctx.mask,
          ["cancel-text"]: _ctx.cancelText,
          ["cancel-color"]: _ctx.cancelColor,
          ["confirm-text"]: _ctx.confirmText,
          ["confirm-color"]: _ctx.confirmColor,
          ["z-index"]: _ctx.zIndex,
          open: common_vendor.unref(showPicker),
          id: common_vendor.gei(_ctx, "")
        })
      };
      return __returned__;
    };
  }
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/region-picker/index.js.map
