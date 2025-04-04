"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_collapse_src_collapse = require("./src/collapse.js");
const uni_modules_tuniaouiVue3_components_collapse_src_composables_useCollapse = require("./src/composables/use-collapse.js");
const uni_modules_tuniaouiVue3_components_collapse_src_collapseItem = require("./src/collapse-item.js");
const uni_modules_tuniaouiVue3_components_collapse_src_composables_collapseItemCustom = require("./src/composables/collapse-item-custom.js");
const uni_modules_tuniaouiVue3_components_collapse_src_composables_useCollapseItem = require("./src/composables/use-collapse-item.js");
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "collapse",
  props: uni_modules_tuniaouiVue3_components_collapse_src_collapse.collapseProps,
  emits: uni_modules_tuniaouiVue3_components_collapse_src_collapse.collapseEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("collapse");
    uni_modules_tuniaouiVue3_components_collapse_src_composables_useCollapse.useCollapse(props, emits);
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        b: common_vendor.n(common_vendor.unref(ns).b())
      };
      return __returned__;
    };
  }
});
const Collapse = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-21afde49"]]);
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "collapse-item", props: uni_modules_tuniaouiVue3_components_collapse_src_collapseItem.collapseItemProps, setup(__props) {
  const props = __props;
  const _a = uni_modules_tuniaouiVue3_components_collapse_src_composables_useCollapseItem.useCollapseItem(props), componentContentId = _a.componentContentId, showArrow = _a.showArrow, isActive = _a.isActive, componentHeight = _a.componentHeight, collapseItemClick = _a.collapseItemClick;
  const _b = uni_modules_tuniaouiVue3_components_collapse_src_composables_collapseItemCustom.useCollapseItemCustomStyle(), ns = _b.ns, arrowClass = _b.arrowClass, arrowStyle = _b.arrowStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = common_vendor.e(new UTSJSONObject({
      a: common_vendor.t(_ctx.title),
      b: common_vendor.unref(showArrow)
    }), common_vendor.unref(showArrow) ? new UTSJSONObject({
      c: common_vendor.p(new UTSJSONObject({
        name: "right"
      })),
      d: common_vendor.n(common_vendor.unref(arrowClass)),
      e: common_vendor.s(common_vendor.unref(arrowStyle))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      f: common_vendor.n(common_vendor.unref(ns).e("title")),
      g: common_vendor.o((...args) => {
        return common_vendor.unref(collapseItemClick) && common_vendor.unref(collapseItemClick)(...args);
      }),
      h: common_vendor.sei(common_vendor.unref(componentContentId), "view"),
      i: common_vendor.n(common_vendor.unref(ns).e("content")),
      j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      k: common_vendor.n(common_vendor.unref(ns).b()),
      l: common_vendor.n(common_vendor.unref(ns).is("active", common_vendor.unref(isActive))),
      m: common_vendor.n(common_vendor.unref(ns).is("disabled", _ctx.disabled)),
      n: common_vendor.unref(componentHeight)
    }));
    return __returned__;
  };
} }));
const CollapseItem = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d162cb3c"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Collapse, {
  CollapseItem
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(CollapseItem);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/collapse/index.js.map
