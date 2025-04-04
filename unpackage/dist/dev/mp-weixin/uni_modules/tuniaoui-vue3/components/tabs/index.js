"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../utils/dom/unit.js");
const uni_modules_tuniaouiVue3_components_tabs_src_tabs = require("./src/tabs.js");
const uni_modules_tuniaouiVue3_components_tabs_src_composables_tabsCustom = require("./src/composables/tabs-custom.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_tabs_src_composables_useTabs = require("./src/composables/use-tabs.js");
const uni_modules_tuniaouiVue3_components_tabs_src_tabsItem = require("./src/tabs-item.js");
const uni_modules_tuniaouiVue3_components_tabs_src_composables_tabsItemCustom = require("./src/composables/tabs-item-custom.js");
const uni_modules_tuniaouiVue3_components_tabs_src_composables_useTabsItem = require("./src/composables/use-tabs-item.js");
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabs",
  props: uni_modules_tuniaouiVue3_components_tabs_src_tabs.tabsProps,
  emits: uni_modules_tuniaouiVue3_components_tabs_src_tabs.tabsEmits,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_tabs_src_composables_useTabs.useTabs(props), tabItems = _a.tabItems, componentId = _a.componentId, barComponentId = _a.barComponentId, barOffsetLeft = _a.barOffsetLeft, scrollLeft = _a.scrollLeft, showBar = _a.showBar;
    const _b = uni_modules_tuniaouiVue3_components_tabs_src_composables_tabsCustom.useTabsCustomStyle(props), ns = _b.ns, tabsClass = _b.tabsClass, tabsStyle = _b.tabsStyle, barClass = _b.barClass, barStyle = _b.barStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.offsetTop
      }), _ctx.offsetTop ? new UTSJSONObject({
        b: common_vendor.n(common_vendor.unref(ns).e("top-placeholder")),
        c: `${_ctx.offsetTop}px`
      }) : new UTSJSONObject({}), new UTSJSONObject({
        d: _ctx.bar || _ctx.$slots.bar
      }), _ctx.bar || _ctx.$slots.bar ? new UTSJSONObject({
        e: common_vendor.n(common_vendor.unref(barClass)),
        f: common_vendor.s(common_vendor.unref(barStyle)),
        g: common_vendor.sei(common_vendor.unref(barComponentId), "view"),
        h: common_vendor.n(common_vendor.unref(ns).e("bar-container")),
        i: `${common_vendor.unref(barOffsetLeft)}px`,
        j: `${common_vendor.unref(barOffsetLeft) && common_vendor.unref(tabItems).length ? 1 : 0}`
      }) : new UTSJSONObject({}), new UTSJSONObject({
        k: common_vendor.n(common_vendor.unref(ns).e("container")),
        l: common_vendor.n(common_vendor.unref(ns).is("scroll", _ctx.scroll)),
        m: common_vendor.n(common_vendor.unref(ns).is("no-bar", !common_vendor.unref(showBar))),
        n: common_vendor.n(common_vendor.unref(ns).e("scroll-view")),
        o: common_vendor.unref(uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue)(_ctx.height || "100%"),
        p: _ctx.scroll,
        q: common_vendor.unref(scrollLeft),
        r: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
        s: common_vendor.n(common_vendor.unref(tabsClass)),
        t: common_vendor.s(common_vendor.unref(tabsStyle))
      }));
      return __returned__;
    };
  }
});
const Tabs = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-a893780c"]]);
if (!Math) {
  TnBadge();
}
const TnBadge = () => "../badge/src/badge.js";
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "tabs-item", props: uni_modules_tuniaouiVue3_components_tabs_src_tabsItem.tabsItemProps, emits: uni_modules_tuniaouiVue3_components_tabs_src_tabsItem.tabsItemEmits, setup(__props) {
  const props = __props;
  const _a = uni_modules_tuniaouiVue3_components_tabs_src_composables_useTabsItem.useTabsItem(props), componentId = _a.componentId, isActive = _a.isActive, hasBadge = _a.hasBadge, itemClickEvent = _a.itemClickEvent;
  const _b = uni_modules_tuniaouiVue3_components_tabs_src_composables_tabsItemCustom.useTabsItemCustomStyle(props, isActive), ns = _b.ns, tabsItemClass = _b.tabsItemClass, tabsItemStyle = _b.tabsItemStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = common_vendor.e(new UTSJSONObject({
      a: common_vendor.unref(hasBadge)
    }), common_vendor.unref(hasBadge) ? new UTSJSONObject({
      b: common_vendor.o(common_vendor.unref(itemClickEvent)),
      c: common_vendor.p(new UTSJSONObject({
        value: _ctx.badgeConfig.value,
        dot: _ctx.badgeConfig.dot,
        size: _ctx.badgeConfig.dot ? "16" : "",
        type: "danger"
      }))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      d: common_vendor.t(_ctx.title),
      e: common_vendor.n(common_vendor.unref(ns).e("content__value")),
      f: common_vendor.n(common_vendor.unref(ns).e("content")),
      g: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
      h: common_vendor.n(common_vendor.unref(tabsItemClass)),
      i: common_vendor.s(common_vendor.unref(tabsItemStyle)),
      j: common_vendor.o((...args) => {
        return common_vendor.unref(itemClickEvent) && common_vendor.unref(itemClickEvent)(...args);
      })
    }));
    return __returned__;
  };
} }));
const TabsItem = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2b0541ae"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Tabs, {
  TabsItem
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(TabsItem);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabs/index.js.map
