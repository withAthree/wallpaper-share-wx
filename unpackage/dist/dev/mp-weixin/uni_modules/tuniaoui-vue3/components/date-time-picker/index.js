"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_dateTimePicker_src_dateTimePicker = require("./src/date-time-picker.js");
const uni_modules_tuniaouiVue3_components_dateTimePicker_src_composables_useDateTimePicker = require("./src/composables/use-date-time-picker.js");
if (!Math) {
  TnPicker();
}
const TnPicker = () => "../picker/src/picker.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "date-time-picker",
  props: uni_modules_tuniaouiVue3_components_dateTimePicker_src_dateTimePicker.dateTimePickerProps,
  emits: uni_modules_tuniaouiVue3_components_dateTimePicker_src_dateTimePicker.dateTimePickerEmits,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_dateTimePicker_src_composables_useDateTimePicker.useDateTimePicker(props), pickerRef = _a.pickerRef, showPicker = _a.showPicker, pickerData = _a.pickerData, pickerSelectData = _a.pickerSelectData, handlePickerCloseEvent = _a.handlePickerCloseEvent, initDateTimePicker = _a.initDateTimePicker, pickerValueChangeEvent = _a.pickerValueChangeEvent, handlePickerConfirmEvent = _a.handlePickerConfirmEvent, handlePickerCancelEvent = _a.handlePickerCancelEvent;
    initDateTimePicker(props.initCurrentDateTime);
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sr(pickerRef, "e2e1502a-0", {
          "k": "pickerRef"
        }),
        b: common_vendor.gei(_ctx, ""),
        c: common_vendor.o(common_vendor.unref(pickerValueChangeEvent)),
        d: common_vendor.o(common_vendor.unref(handlePickerConfirmEvent)),
        e: common_vendor.o(common_vendor.unref(handlePickerCancelEvent)),
        f: common_vendor.o(common_vendor.unref(handlePickerCloseEvent)),
        g: common_vendor.o(($event = null) => {
          return common_vendor.isRef(showPicker) ? showPicker.value = $event : null;
        }),
        h: common_vendor.p({
          ["model-value"]: common_vendor.unref(pickerSelectData),
          data: common_vendor.unref(pickerData),
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
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/date-time-picker/index.js.map
