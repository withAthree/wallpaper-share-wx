"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_list_src_listItem = require("./src/list-item.js");
const uni_modules_tuniaouiVue3_components_list_src_composables_listItemCustom = require("./src/composables/list-item-custom.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list-item",
  props: uni_modules_tuniaouiVue3_components_list_src_listItem.listProps,
  emits: uni_modules_tuniaouiVue3_components_list_src_listItem.listEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_list_src_composables_listItemCustom.useListCustomStyle(props), ns = _b.ns, listClass = _b.listClass, listStyle = _b.listStyle, rightIconClass = _b.rightIconClass, rightIconStyle = _b.rightIconStyle;
    const listClickEvent = () => {
      emits("click");
    };
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.n(common_vendor.unref(ns).e("content")),
        b: _ctx.rightIcon
      }), _ctx.rightIcon ? new UTSJSONObject({
        c: common_vendor.p(new UTSJSONObject({
          name: _ctx.rightIcon
        })),
        d: common_vendor.n(common_vendor.unref(rightIconClass)),
        e: common_vendor.s(common_vendor.unref(rightIconStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        f: _ctx.bottomBorder
      }), _ctx.bottomBorder ? new UTSJSONObject({
        g: common_vendor.n(common_vendor.unref(ns).e("bottom-border")),
        h: common_vendor.n(common_vendor.unref(ns).is("indent", _ctx.bottomBorderIndent))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        j: common_vendor.n(common_vendor.unref(listClass)),
        k: common_vendor.s(common_vendor.unref(listStyle)),
        l: _ctx.hoverClass,
        m: common_vendor.o(listClickEvent)
      }));
      return __returned__;
    };
  }
});
const ListItem = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9c8662bf"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(ListItem);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/list/index.js.map
