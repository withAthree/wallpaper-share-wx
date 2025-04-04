"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_keyboard_src_keyboard = require("./src/keyboard.js");
const uni_modules_tuniaouiVue3_components_keyboard_src_composables_useKeyboardData = require("./src/composables/use-keyboard-data.js");
const uni_modules_tuniaouiVue3_components_keyboard_src_composables_useKeyboard = require("./src/composables/use-keyboard.js");
if (!Math) {
  (TnIcon + TnPopup)();
}
const TnPopup = () => "../popup/src/popup.js";
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "keyboard",
  props: uni_modules_tuniaouiVue3_components_keyboard_src_keyboard.keyboardProps,
  emits: uni_modules_tuniaouiVue3_components_keyboard_src_keyboard.keyboardEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("keyboard");
    const _b = uni_modules_tuniaouiVue3_components_keyboard_src_composables_useKeyboard.useKeyboard(props, emits), showKeyboard = _b.showKeyboard, carKeyboardLang = _b.carKeyboardLang, popupCloseEvent = _b.popupCloseEvent, keyboardClickEvent = _b.keyboardClickEvent, handleBackspaceEvent = _b.handleBackspaceEvent, clearBackspaceLongPressEvent = _b.clearBackspaceLongPressEvent, carKeyboardSwitchLang = _b.carKeyboardSwitchLang;
    const _c = uni_modules_tuniaouiVue3_components_keyboard_src_composables_useKeyboardData.useKeyboardData(props, carKeyboardLang), keyboardData = _c.keyboardData, carKeyboardData = _c.carKeyboardData;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.mode !== "car"
      }), _ctx.mode !== "car" ? new UTSJSONObject({
        b: common_vendor.f(common_vendor.unref(keyboardData), (item = null, index = null, i0 = null) => {
          return new UTSJSONObject({
            a: common_vendor.t(item.value),
            b: index,
            c: common_vendor.n(new UTSJSONObject({
              full: common_vendor.unref(keyboardData).length === 10 && index === 9,
              fill: common_vendor.unref(keyboardData).length === 11 && index === 9,
              disabled: item.disabled
            })),
            d: item.disabled ? "" : "keyboard-btn-hover",
            e: common_vendor.o(($event = null) => {
              return common_vendor.unref(keyboardClickEvent)(item.value, item.disabled);
            }, index)
          });
        }),
        c: common_vendor.n(common_vendor.unref(ns).e("normal-container")),
        d: common_vendor.p(new UTSJSONObject({
          name: "backspace-fill"
        })),
        e: common_vendor.o((...args) => {
          return common_vendor.unref(handleBackspaceEvent) && common_vendor.unref(handleBackspaceEvent)(...args);
        }),
        f: common_vendor.o((...args) => {
          return common_vendor.unref(clearBackspaceLongPressEvent) && common_vendor.unref(clearBackspaceLongPressEvent)(...args);
        }),
        g: common_vendor.o(($event = null) => {
          return common_vendor.unref(keyboardClickEvent)("confirm", false);
        }),
        h: common_vendor.n(common_vendor.unref(ns).e("normal-container"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        i: _ctx.mode === "car"
      }), _ctx.mode === "car" ? new UTSJSONObject({
        j: common_vendor.o(($event = null) => {
          return common_vendor.unref(keyboardClickEvent)("cancel", false);
        }),
        k: common_vendor.o(($event = null) => {
          return common_vendor.unref(keyboardClickEvent)("confirm", false);
        }),
        l: common_vendor.n(common_vendor.unref(ns).e("car-top-operation-bar")),
        m: common_vendor.f(common_vendor.unref(carKeyboardData), (item = null, index = null, i0 = null) => {
          return common_vendor.e(new UTSJSONObject({
            a: index === 3
          }), index === 3 ? new UTSJSONObject({
            b: common_vendor.t(common_vendor.unref(carKeyboardLang) === "cn" ? "ABC" : "返回"),
            c: common_vendor.o((...args) => {
              return common_vendor.unref(carKeyboardSwitchLang) && common_vendor.unref(carKeyboardSwitchLang)(...args);
            }, index)
          }) : new UTSJSONObject({}), new UTSJSONObject({
            d: common_vendor.f(item, (rowData = null, rowIndex = null, i1 = null) => {
              return new UTSJSONObject({
                a: common_vendor.t(rowData.value),
                b: rowIndex,
                c: common_vendor.n(new UTSJSONObject({
                  disabled: rowData.disabled
                })),
                d: rowData.disabled ? "" : "keyboard-btn-hover",
                e: common_vendor.o(($event = null) => {
                  return common_vendor.unref(keyboardClickEvent)(rowData.value, rowData.disabled);
                }, rowIndex)
              });
            }),
            e: index === 3
          }), index === 3 ? new UTSJSONObject({
            f: "7147567f-2-" + i0 + ",7147567f-0",
            g: common_vendor.p(new UTSJSONObject({
              name: "backspace-fill"
            })),
            h: common_vendor.o((...args) => {
              return common_vendor.unref(handleBackspaceEvent) && common_vendor.unref(handleBackspaceEvent)(...args);
            }, index),
            i: common_vendor.o((...args) => {
              return common_vendor.unref(clearBackspaceLongPressEvent) && common_vendor.unref(clearBackspaceLongPressEvent)(...args);
            }, index)
          }) : new UTSJSONObject({}), new UTSJSONObject({
            j: index
          }));
        }),
        n: common_vendor.n(common_vendor.unref(ns).e("car-container"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        o: common_vendor.n(common_vendor.unref(ns).b()),
        p: common_vendor.n(common_vendor.unref(ns).e(_ctx.mode)),
        q: common_vendor.gei(_ctx, ""),
        r: common_vendor.o(common_vendor.unref(popupCloseEvent)),
        s: common_vendor.o(($event = null) => {
          return common_vendor.isRef(showKeyboard) ? showKeyboard.value = $event : null;
        }),
        t: common_vendor.p(new UTSJSONObject({
          ["open-direction"]: "bottom",
          ["bg-color"]: "transparent",
          radius: "",
          overlay: true,
          ["overlay-opacity"]: 0,
          ["overlay-closeable"]: _ctx.overlayCloseable,
          ["safe-area-inset-bottom"]: false,
          ["z-index"]: _ctx.zIndex,
          modelValue: common_vendor.unref(showKeyboard),
          id: common_vendor.gei(_ctx, "")
        }))
      }));
      return __returned__;
    };
  }
});
const keyboard = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7147567f"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(keyboard);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/keyboard/index.js.map
