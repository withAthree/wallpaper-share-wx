"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_title_src_title = require("./src/title.js");
const uni_modules_tuniaouiVue3_components_title_src_composables_titleCustom = require("./src/composables/title-custom.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "title",
  props: uni_modules_tuniaouiVue3_components_title_src_title.titleProps,
  emits: uni_modules_tuniaouiVue3_components_title_src_title.titleEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_title_src_composables_titleCustom.useTitleCustomStyle(props), ns = _b.ns, titleClass = _b.titleClass, titleStyle = _b.titleStyle, assistColorClass = _b.assistColorClass, assistColorStyle = _b.assistColorStyle;
    const titleClickEvent = () => {
      emits("click");
    };
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.t(_ctx.title),
        b: _ctx.mode !== "normal" && _ctx.mode !== "transparent"
      }), _ctx.mode !== "normal" && _ctx.mode !== "transparent" ? common_vendor.e(new UTSJSONObject({
        c: _ctx.mode === "subTitle" && _ctx.subTitle
      }), _ctx.mode === "subTitle" && _ctx.subTitle ? new UTSJSONObject({
        d: common_vendor.t(_ctx.subTitle)
      }) : new UTSJSONObject({}), new UTSJSONObject({
        e: common_vendor.n(common_vendor.unref(ns).e(_ctx.mode)),
        f: common_vendor.n(common_vendor.unref(assistColorClass)),
        g: common_vendor.s(common_vendor.unref(assistColorStyle))
      })) : new UTSJSONObject({}), new UTSJSONObject({
        h: common_vendor.n(common_vendor.unref(titleClass)),
        i: common_vendor.s(common_vendor.unref(titleStyle)),
        j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        k: common_vendor.n(common_vendor.unref(ns).b()),
        l: common_vendor.o(titleClickEvent)
      }));
      return __returned__;
    };
  }
});
const Title = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c94efcf4"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Title);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/title/index.js.map
