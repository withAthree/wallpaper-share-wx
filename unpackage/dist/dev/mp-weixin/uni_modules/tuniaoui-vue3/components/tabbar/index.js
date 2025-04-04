"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_tabbar_src_tabbar = require("./src/tabbar.js");
const uni_modules_tuniaouiVue3_components_tabbar_src_composables_tabbarCustom = require("./src/composables/tabbar-custom.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_tabbar_src_composables_useTabbar = require("./src/composables/use-tabbar.js");
const uni_modules_tuniaouiVue3_components_tabbar_src_tabbarItem = require("./src/tabbar-item.js");
const uni_modules_tuniaouiVue3_components_tabbar_src_composables_tabbarItemCustom = require("./src/composables/tabbar-item-custom.js");
const uni_modules_tuniaouiVue3_components_tabbar_src_composables_useTabbarItem = require("./src/composables/use-tabbar-item.js");
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabbar",
  props: uni_modules_tuniaouiVue3_components_tabbar_src_tabbar.tabbarProps,
  emits: uni_modules_tuniaouiVue3_components_tabbar_src_tabbar.tabbarEmits,
  setup(__props, _a) {
    var __expose = _a.expose;
    const props = __props;
    const _b = uni_modules_tuniaouiVue3_components_tabbar_src_composables_useTabbar.useTabbar(props), rectId = _b.rectId, bulgeRectInfo = _b.bulgeRectInfo, hasBulgeButton = _b.hasBulgeButton, setActiveItemByValue = _b.setActiveItemByValue;
    const _c = uni_modules_tuniaouiVue3_components_tabbar_src_composables_tabbarCustom.useTabbarCustomStyle(props), ns = _c.ns, tabbarClass = _c.tabbarClass, tabbarStyle = _c.tabbarStyle, bgClass = _c.bgClass, bgStyle = _c.bgStyle, placeholderStyle = _c.placeholderStyle, bulgeClass = _c.bulgeClass, bulgeStyle = _c.bulgeStyle;
    __expose(new UTSJSONObject({
      /**
       * @description 手动设置当前激活的item
       */
      setActiveItem: setActiveItemByValue
    }));
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.unref(hasBulgeButton)
      }), common_vendor.unref(hasBulgeButton) ? new UTSJSONObject({
        b: common_vendor.n(common_vendor.unref(bulgeClass)),
        c: `${common_vendor.unref(bulgeRectInfo).width}px`,
        d: `${common_vendor.unref(bulgeRectInfo).height}px`,
        e: `${common_vendor.unref(bulgeRectInfo).left}px`,
        f: `-${common_vendor.unref(bulgeRectInfo).height * 0.35}px`,
        g: common_vendor.s(common_vendor.unref(bulgeStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        h: common_vendor.n(common_vendor.unref(bgClass)),
        i: common_vendor.s(common_vendor.unref(bgStyle)),
        j: common_vendor.n(common_vendor.unref(ns).e("content")),
        k: common_vendor.n(new UTSJSONObject({
          "tn-u-safe-area": _ctx.safeAreaInsetBottom
        })),
        l: common_vendor.sei(common_vendor.unref(rectId), "view"),
        m: common_vendor.n(common_vendor.unref(tabbarClass)),
        n: common_vendor.s(common_vendor.unref(tabbarStyle)),
        o: _ctx.fixed && _ctx.placeholder
      }), _ctx.fixed && _ctx.placeholder ? new UTSJSONObject({
        p: common_vendor.n(common_vendor.unref(ns).e("placeholder")),
        q: common_vendor.n(new UTSJSONObject({
          "tn-u-safe-area": _ctx.safeAreaInsetBottom
        })),
        r: common_vendor.s(common_vendor.unref(placeholderStyle))
      }) : new UTSJSONObject({}));
      return __returned__;
    };
  }
});
const Tabbar = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-ab35bc1b"]]);
if (!Math) {
  (TnIcon + TnBadge)();
}
const TnIcon = () => "../icon/src/icon.js";
const TnBadge = () => "../badge/src/badge.js";
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "tabbar-item", props: uni_modules_tuniaouiVue3_components_tabbar_src_tabbarItem.tabbarItemProps, emits: uni_modules_tuniaouiVue3_components_tabbar_src_tabbarItem.tabbatItemEmits, setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emits = __emit;
  const _b = uni_modules_tuniaouiVue3_components_tabbar_src_composables_useTabbarItem.useTabbarItem(props, emits), itemId = _b.itemId, isActive = _b.isActive, itemRectInfo = _b.itemRectInfo, iconSize = _b.iconSize, hasBadge = _b.hasBadge, itemClick = _b.itemClick;
  const _c = uni_modules_tuniaouiVue3_components_tabbar_src_composables_tabbarItemCustom.useTabbarItemCustomStyle(props, isActive), ns = _c.ns, tabbarItemClass = _c.tabbarItemClass, tabbarItemStyle = _c.tabbarItemStyle, tabbarItemElementStyle = _c.tabbarItemElementStyle, bulgeClass = _c.bulgeClass, bulgeStyle = _c.bulgeStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = common_vendor.e(new UTSJSONObject({
      a: _ctx.bulge
    }), _ctx.bulge ? new UTSJSONObject({
      b: common_vendor.p(new UTSJSONObject({
        name: common_vendor.unref(isActive) ? _ctx.activeIcon : _ctx.icon,
        size: common_vendor.unref(iconSize)
      })),
      c: common_vendor.n(common_vendor.unref(bulgeClass)),
      d: common_vendor.s(common_vendor.unref(bulgeStyle)(common_vendor.unref(itemRectInfo)))
    }) : common_vendor.e(new UTSJSONObject({
      e: _ctx.icon && _ctx.activeIcon
    }), _ctx.icon && _ctx.activeIcon ? common_vendor.e(new UTSJSONObject({
      f: common_vendor.p(new UTSJSONObject({
        name: common_vendor.unref(isActive) ? _ctx.activeIcon : _ctx.icon,
        size: common_vendor.unref(iconSize)
      })),
      g: common_vendor.unref(hasBadge)
    }), common_vendor.unref(hasBadge) ? new UTSJSONObject({
      h: common_vendor.p(new UTSJSONObject({
        value: _ctx.badge,
        dot: _ctx.badgeConfig.dot,
        size: _ctx.badgeConfig.dot ? "16" : "",
        type: "danger"
      }))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      i: common_vendor.n(common_vendor.unref(ns).e("icon")),
      j: common_vendor.s(common_vendor.unref(tabbarItemElementStyle)("icon"))
    })) : new UTSJSONObject({})), new UTSJSONObject({
      k: _ctx.text
    }), _ctx.text ? new UTSJSONObject({
      l: common_vendor.t(_ctx.text),
      m: common_vendor.n(common_vendor.unref(ns).e("text")),
      n: common_vendor.s(common_vendor.unref(tabbarItemElementStyle)("text"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      o: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(itemId)), "view"),
      p: common_vendor.n(common_vendor.unref(tabbarItemClass)),
      q: common_vendor.s(common_vendor.unref(tabbarItemStyle)),
      r: common_vendor.o((...args) => {
        return common_vendor.unref(itemClick) && common_vendor.unref(itemClick)(...args);
      })
    }));
    return __returned__;
  };
} }));
const TabbarItem = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f9c90325"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Tabbar, {
  TabbarItem
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(TabbarItem);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tabbar/index.js.map
