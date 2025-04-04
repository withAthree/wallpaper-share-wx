"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../libs/lodash/is-boolean.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../libs/lodash/is-number.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_picker_index = require("../base/common-props/picker/index.js");
const uni_modules_tuniaouiVue3_components_picker_src_composables_pickerCustom = require("./src/composables/picker-custom.js");
const uni_modules_tuniaouiVue3_components_picker_src_composables_usePicker = require("./src/composables/use-picker.js");
const pickerProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps(Object.assign(Object.assign({}, uni_modules_tuniaouiVue3_components_base_commonProps_picker_index.pickerBaseProps), {
  /**
   * @description picker绑定的值
   */
  modelValue: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType([String, Number, Array]),
    default: ""
  },
  /**
   * @description 显示picker选项弹框
   */
  open: Boolean,
  /**
   * @description picker选项的数据
   */
  data: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType([Array]),
    default: () => {
      return [];
    }
  },
  /**
   * @description picker选项的数据label属性名
   */
  labelKey: {
    type: String,
    default: "label"
  },
  /**
   * @description picker选项的数据value属性名
   */
  valueKey: {
    type: String,
    default: "value"
  },
  /**
   * @description picker选项的数据children属性名, 在级联选择器模式下生效
   */
  childrenKey: {
    type: String,
    default: "children"
  }
}));
const pickerEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => {
    return common_vendor.isString(value) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value) || common_vendor.isArray(value);
  },
  "update:open": (value) => {
    return uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value, index, item) => {
    return true;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  confirm: (value, item) => {
    return true;
  },
  cancel: () => {
    return true;
  },
  close: () => {
    return true;
  }
};
if (!Math) {
  TnPopup();
}
const TnPopup = () => "../popup/src/popup.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "picker",
  props: pickerProps,
  emits: pickerEmits,
  setup(__props, _a) {
    var __expose = _a.expose;
    const props = __props;
    const _b = uni_modules_tuniaouiVue3_components_picker_src_composables_usePicker.usePicker(props), openPopup = _b.openPopup, showPicker = _b.showPicker, pickerData = _b.pickerData, currentPickerIndex = _b.currentPickerIndex, closePopupEvent = _b.closePopupEvent, pickerViewChangeEvent = _b.pickerViewChangeEvent, confirmEvent = _b.confirmEvent, cancelEvent = _b.cancelEvent, initDefaultPickerIndex = _b.initDefaultPickerIndex, resetPickerIndexWithPosition = _b.resetPickerIndexWithPosition;
    const _c = uni_modules_tuniaouiVue3_components_picker_src_composables_pickerCustom.usePickerCustomStyle(props), ns = _c.ns, overlayOpacity = _c.overlayOpacity, operationBtnClass = _c.operationBtnClass, operationBtnStyle = _c.operationBtnStyle;
    const resetPickerViewIndex = () => {
      initDefaultPickerIndex();
    };
    __expose(new UTSJSONObject({
      /**
       * @description: 重置选择器的值
       */
      resetPickerViewIndex,
      /**
       * @description: 重置指定位置选择器的值
       */
      resetPickerIndexWithPosition
    }));
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.showCancel
      }), _ctx.showCancel ? new UTSJSONObject({
        b: common_vendor.t(props.cancelText),
        c: common_vendor.n(common_vendor.unref(operationBtnClass)("cancel")),
        d: common_vendor.s(common_vendor.unref(operationBtnStyle)("cancel")),
        e: common_vendor.o((...args) => {
          return common_vendor.unref(cancelEvent) && common_vendor.unref(cancelEvent)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        f: common_vendor.t(props.confirmText),
        g: common_vendor.n(common_vendor.unref(operationBtnClass)("confirm")),
        h: common_vendor.s(common_vendor.unref(operationBtnStyle)("confirm")),
        i: common_vendor.o((...args) => {
          return common_vendor.unref(confirmEvent) && common_vendor.unref(confirmEvent)(...args);
        }),
        j: common_vendor.n(common_vendor.unref(ns).e("operation")),
        k: common_vendor.n(common_vendor.unref(ns).is("only-confirm", !_ctx.showCancel)),
        l: common_vendor.unref(showPicker)
      }), common_vendor.unref(showPicker) ? new UTSJSONObject({
        m: common_vendor.f(common_vendor.unref(pickerData), (item = null, index = null, i0 = null) => {
          return new UTSJSONObject({
            a: common_vendor.f(item, (dItem = null, dIndex = null, i1 = null) => {
              return new UTSJSONObject({
                a: common_vendor.t(dItem["label"]),
                b: dIndex
              });
            }),
            b: index
          });
        }),
        n: common_vendor.n(common_vendor.unref(ns).em("content-item", "data")),
        o: common_vendor.n(common_vendor.unref(ns).e("content-item")),
        p: common_vendor.n(common_vendor.unref(ns).e("picker-view-column")),
        q: common_vendor.n(common_vendor.unref(ns).e("picker-view")),
        r: common_vendor.unref(currentPickerIndex),
        s: common_vendor.o((...args) => {
          return common_vendor.unref(pickerViewChangeEvent) && common_vendor.unref(pickerViewChangeEvent)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        t: common_vendor.n(common_vendor.unref(ns).e("content")),
        v: common_vendor.n(common_vendor.unref(ns).b()),
        w: common_vendor.gei(_ctx, ""),
        x: common_vendor.o(common_vendor.unref(closePopupEvent)),
        y: common_vendor.o(($event = null) => {
          return common_vendor.isRef(openPopup) ? openPopup.value = $event : null;
        }),
        z: common_vendor.p(new UTSJSONObject({
          ["open-direction"]: "bottom",
          overlay: true,
          ["overlay-opacity"]: common_vendor.unref(overlayOpacity),
          radius: 0,
          ["safe-area-inset-bottom"]: false,
          ["z-index"]: _ctx.zIndex,
          modelValue: common_vendor.unref(openPopup),
          id: common_vendor.gei(_ctx, "")
        }))
      }));
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-39b2bba5"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Component);
exports.Component = Component;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/picker/index.js.map
