"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_footer_src_footer = require("./src/footer.js");
const uni_modules_tuniaouiVue3_components_footer_src_composables_footerCustom = require("./src/composables/footer-custom.js");
const uni_modules_tuniaouiVue3_components_footer_src_composables_useFooter = require("./src/composables/use-footer.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "footer",
  props: uni_modules_tuniaouiVue3_components_footer_src_footer.footerProps,
  emits: uni_modules_tuniaouiVue3_components_footer_src_footer.footerEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_footer_src_composables_useFooter.useFooter(props, emits), navigatorData = _b.navigatorData, footerClickEvent = _b.footerClickEvent, navigatorClickEvent = _b.navigatorClickEvent;
    const _c = uni_modules_tuniaouiVue3_components_footer_src_composables_footerCustom.useFooterCustomStyle(props), ns = _c.ns, footerClass = _c.footerClass, footerStyle = _c.footerStyle, contentClass = _c.contentClass, contentStyle = _c.contentStyle, navigatorClass = _c.navigatorClass, navigatorStyle = _c.navigatorStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.unref(navigatorData).length
      }), common_vendor.unref(navigatorData).length ? new UTSJSONObject({
        b: common_vendor.f(common_vendor.unref(navigatorData), (item = null, index = null, i0 = null) => {
          return new UTSJSONObject({
            a: common_vendor.t(item.title),
            b: index,
            c: common_vendor.n(common_vendor.unref(navigatorClass)(item)),
            d: common_vendor.s(common_vendor.unref(navigatorStyle)(item)),
            e: common_vendor.o(($event = null) => {
              return common_vendor.unref(navigatorClickEvent)(item);
            }, index)
          });
        }),
        c: common_vendor.n(common_vendor.unref(ns).e("navigators"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        d: _ctx.content
      }), _ctx.content ? new UTSJSONObject({
        e: common_vendor.t(_ctx.content),
        f: common_vendor.n(common_vendor.unref(contentClass)),
        g: common_vendor.s(common_vendor.unref(contentStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        h: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        i: common_vendor.n(common_vendor.unref(footerClass)),
        j: common_vendor.s(common_vendor.unref(footerStyle)),
        k: common_vendor.o((...args) => {
          return common_vendor.unref(footerClickEvent) && common_vendor.unref(footerClickEvent)(...args);
        })
      }));
      return __returned__;
    };
  }
});
const Footer = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7d952f2c"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Footer);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/footer/index.js.map
