"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_readMore_src_readMore = require("./src/read-more.js");
const uni_modules_tuniaouiVue3_components_readMore_src_composables_readMoreCustom = require("./src/composables/read-more-custom.js");
const uni_modules_tuniaouiVue3_components_readMore_src_composables_useReadMore = require("./src/composables/use-read-more.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "read-more",
  props: uni_modules_tuniaouiVue3_components_readMore_src_readMore.readMoreProps,
  emits: uni_modules_tuniaouiVue3_components_readMore_src_readMore.readMoreEmits,
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_readMore_src_composables_useReadMore.useReadMore(props, emits), componentContentId = _b.componentContentId, showOperationArea = _b.showOperationArea, foldOperationAreaHeight = _b.foldOperationAreaHeight, containerHeight = _b.containerHeight, expandStatus = _b.expandStatus, toggleExpandStatus = _b.toggleExpandStatus, resetContentHeight = _b.resetContentHeight;
    const _c = uni_modules_tuniaouiVue3_components_readMore_src_composables_readMoreCustom.useReadMoreCustomStyle(props), ns = _c.ns, operationAreaClass = _c.operationAreaClass, operationAreaStyle = _c.operationAreaStyle;
    __expose(new UTSJSONObject({
      /**
       * @description 重新设置内容容器的高度
       */
      resetContentHeight
    }));
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.sei(common_vendor.unref(componentContentId), "view"),
        b: common_vendor.n(common_vendor.unref(ns).e("content")),
        c: common_vendor.unref(showOperationArea)
      }), common_vendor.unref(showOperationArea) ? common_vendor.e(new UTSJSONObject({
        d: !common_vendor.unref(expandStatus)
      }), !common_vendor.unref(expandStatus) ? new UTSJSONObject({
        e: common_vendor.t(_ctx.expandText),
        f: common_vendor.p(new UTSJSONObject({
          name: _ctx.expandIcon
        })),
        g: common_vendor.n(common_vendor.unref(ns).e("operation-content"))
      }) : new UTSJSONObject({
        h: common_vendor.t(_ctx.foldText),
        i: common_vendor.p(new UTSJSONObject({
          name: _ctx.foldIcon
        })),
        j: common_vendor.n(common_vendor.unref(ns).e("operation-content")),
        k: `${common_vendor.unref(foldOperationAreaHeight)}rpx`
      }), new UTSJSONObject({
        l: common_vendor.n(common_vendor.unref(operationAreaClass)),
        m: common_vendor.n(common_vendor.unref(expandStatus) ? common_vendor.unref(ns).is("fold") : common_vendor.unref(ns).is("expand")),
        n: common_vendor.s(common_vendor.unref(operationAreaStyle)),
        o: common_vendor.o((...args) => {
          return common_vendor.unref(toggleExpandStatus) && common_vendor.unref(toggleExpandStatus)(...args);
        })
      })) : new UTSJSONObject({}), new UTSJSONObject({
        p: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        q: common_vendor.n(common_vendor.unref(ns).b()),
        r: common_vendor.unref(containerHeight)
      }));
      return __returned__;
    };
  }
});
const ReadMore = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0ccd0609"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(ReadMore);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/read-more/index.js.map
