"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_actionSheet_src_actionSheet = require("./src/action-sheet.js");
const uni_modules_tuniaouiVue3_components_actionSheet_src_composables_useActionSheet = require("./src/composables/use-action-sheet.js");
if (!Math) {
  TnPopup();
}
const TnPopup = () => "../popup/src/popup.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "action-sheet",
  props: uni_modules_tuniaouiVue3_components_actionSheet_src_actionSheet.actionSheetProps,
  setup(__props, _a) {
    var __expose = _a.expose;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("action-sheet");
    const _b = uni_modules_tuniaouiVue3_components_actionSheet_src_composables_useActionSheet.useActionSheet(), data = _b.data, showTitle = _b.showTitle, title = _b.title, showCancel = _b.showCancel, cancelText = _b.cancelText, overlay = _b.overlay, overlayClosable = _b.overlayClosable, openPopup = _b.openPopup, showActionSheet = _b.showActionSheet, popupCloseEvent = _b.popupCloseEvent, actionClickEvent = _b.actionClickEvent;
    __expose(new UTSJSONObject({
      /**
       * @description: 打开/显示 actionSheet 操作菜单
       */
      show: showActionSheet
    }));
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.unref(showTitle)
      }), common_vendor.unref(showTitle) ? new UTSJSONObject({
        b: common_vendor.t(common_vendor.unref(title)),
        c: common_vendor.n(common_vendor.unref(ns).e("title"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        d: common_vendor.f(common_vendor.unref(data), (item = null, index = null, i0 = null) => {
          return common_vendor.e(new UTSJSONObject({
            a: common_vendor.t(item.text),
            b: item.desc
          }), item.desc ? new UTSJSONObject({
            c: common_vendor.t(item.desc)
          }) : new UTSJSONObject({}), new UTSJSONObject({
            d: index,
            e: common_vendor.o(($event = null) => {
              return common_vendor.unref(actionClickEvent)(index);
            }, index)
          }));
        }),
        e: common_vendor.n(common_vendor.unref(ns).e("action")),
        f: common_vendor.n(common_vendor.unref(ns).e("actions")),
        g: common_vendor.unref(showCancel)
      }), common_vendor.unref(showCancel) ? new UTSJSONObject({
        h: common_vendor.t(common_vendor.unref(cancelText)),
        i: common_vendor.n(common_vendor.unref(ns).e("cancel")),
        j: common_vendor.o((...args) => {
          return common_vendor.unref(popupCloseEvent) && common_vendor.unref(popupCloseEvent)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        k: common_vendor.n(common_vendor.unref(ns).b()),
        l: common_vendor.n(common_vendor.unref(ns).is("shadow", !common_vendor.unref(overlay))),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.o(common_vendor.unref(popupCloseEvent)),
        o: common_vendor.p(new UTSJSONObject({
          ["model-value"]: common_vendor.unref(openPopup),
          ["open-direction"]: "bottom",
          overlay: common_vendor.unref(overlay),
          ["z-index"]: _ctx.zIndex,
          ["bg-color"]: "transparent",
          ["safe-area-inset-bottom"]: false,
          ["overlay-closeable"]: common_vendor.unref(overlayClosable),
          id: common_vendor.gei(_ctx, "")
        }))
      }));
      return __returned__;
    };
  }
});
const ActionSheet = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e15c9e19"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(ActionSheet);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/action-sheet/index.js.map
