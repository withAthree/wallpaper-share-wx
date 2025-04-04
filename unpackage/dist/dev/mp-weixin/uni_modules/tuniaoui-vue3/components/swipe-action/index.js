"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_swipeAction_src_swipeAction = require("./src/swipe-action.js");
const uni_modules_tuniaouiVue3_components_swipeAction_src_composables_useSwipeAction = require("./src/composables/use-swipe-action.js");
const uni_modules_tuniaouiVue3_components_swipeAction_src_swipeActionItem = require("./src/swipe-action-item.js");
const uni_modules_tuniaouiVue3_components_swipeAction_src_composables_swipeActionOptions = require("./src/composables/swipe-action-options.js");
const uni_modules_tuniaouiVue3_components_swipeAction_src_composables_useSwipeActionItem = require("./src/composables/use-swipe-action-item.js");
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "swipe-action",
  props: uni_modules_tuniaouiVue3_components_swipeAction_src_swipeAction.swipeActionProps,
  emits: uni_modules_tuniaouiVue3_components_swipeAction_src_swipeAction.swipeActionEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("swipe-action");
    uni_modules_tuniaouiVue3_components_swipeAction_src_composables_useSwipeAction.useSwipeAction(props, emits);
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        b: common_vendor.n(common_vendor.unref(ns).b())
      };
      return __returned__;
    };
  }
});
const SwipeAction = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-83e5f16d"]]);
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
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "swipe-action-item", props: uni_modules_tuniaouiVue3_components_swipeAction_src_swipeActionItem.swipeActionItemProps, setup(__props) {
  const props = __props;
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("swipe-action-item");
  const _a = uni_modules_tuniaouiVue3_components_swipeAction_src_composables_useSwipeActionItem.useSwipeActionItem(props), componentId = _a.componentId, optionComponentClass = _a.optionComponentClass, optionsMenuWidth = _a.optionsMenuWidth, contentRightDistance = _a.contentRightDistance, isSwipe = _a.isSwipe, onTouchStart = _a.onTouchStart, onTouchMove = _a.onTouchMove, onTouchEnd = _a.onTouchEnd, optionClickEvent = _a.optionClickEvent;
  const _b = uni_modules_tuniaouiVue3_components_swipeAction_src_composables_swipeActionOptions.useSwipeActionOptions(props), options = _b.options, optionColorClass = _b.optionColorClass, optionColorStyle = _b.optionColorStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = {
      a: common_vendor.f(common_vendor.unref(options), (item = null, index = null, i0 = null) => {
        return common_vendor.e({
          a: item.icon
        }, item.icon ? {
          b: "d5c7ffb7-0-" + i0,
          c: common_vendor.p({
            name: item.icon
          })
        } : {}, {
          d: item.text && !item.round
        }, item.text && !item.round ? {
          e: common_vendor.t(item.text)
        } : {}, {
          f: common_vendor.n(common_vendor.unref(optionColorClass)(index)),
          g: common_vendor.s(common_vendor.unref(optionColorStyle)(index)),
          h: index,
          i: common_vendor.n(common_vendor.unref(ns).is("disabled", item.disabled)),
          j: common_vendor.n(common_vendor.unref(ns).is("round", item.round)),
          k: common_vendor.o(($event = null) => {
            return common_vendor.unref(optionClickEvent)(index);
          }, index)
        });
      }),
      b: common_vendor.n(common_vendor.unref(ns).e("option-item-content")),
      c: common_vendor.n(common_vendor.unref(optionComponentClass)),
      d: common_vendor.n(common_vendor.unref(ns).e("option-item")),
      e: `-${common_vendor.unref(optionsMenuWidth) - common_vendor.unref(contentRightDistance)}px`,
      f: `${common_vendor.unref(isSwipe) ? 0 : 300}ms`,
      g: common_vendor.n(common_vendor.unref(ns).e("options")),
      h: common_vendor.n(common_vendor.unref(ns).e("content")),
      i: `${common_vendor.unref(contentRightDistance)}px`,
      j: `${common_vendor.unref(isSwipe) ? 0 : 300}ms`,
      k: common_vendor.o((...args) => {
        return common_vendor.unref(onTouchStart) && common_vendor.unref(onTouchStart)(...args);
      }),
      l: common_vendor.o((...args) => {
        return common_vendor.unref(onTouchMove) && common_vendor.unref(onTouchMove)(...args);
      }),
      m: common_vendor.o((...args) => {
        return common_vendor.unref(onTouchEnd) && common_vendor.unref(onTouchEnd)(...args);
      }),
      n: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
      o: common_vendor.n(common_vendor.unref(ns).b())
    };
    return __returned__;
  };
} }));
const SwipeActionItem = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d5c7ffb7"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(SwipeAction, {
  SwipeActionItem
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(SwipeActionItem);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/swipe-action/index.js.map
