"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_countTo_src_countTo = require("./src/count-to.js");
const uni_modules_tuniaouiVue3_components_countTo_src_composables_countToCustom = require("./src/composables/count-to-custom.js");
const uni_modules_tuniaouiVue3_components_countTo_src_composables_useCountTo = require("./src/composables/use-count-to.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "count-to",
  props: uni_modules_tuniaouiVue3_components_countTo_src_countTo.countToProps,
  emits: uni_modules_tuniaouiVue3_components_countTo_src_countTo.countToEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_countTo_src_composables_countToCustom.useCountToCustomStyle(props), countToClass = _b.countToClass, countToStyle = _b.countToStyle;
    const content = uni_modules_tuniaouiVue3_components_countTo_src_composables_useCountTo.useCountTo(props, emits).content;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.t(common_vendor.unref(content)),
        b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        c: common_vendor.n(common_vendor.unref(countToClass)),
        d: common_vendor.s(common_vendor.unref(countToStyle))
      };
      return __returned__;
    };
  }
});
const CountTo = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d4ca0b2f"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(CountTo);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-to/index.js.map
