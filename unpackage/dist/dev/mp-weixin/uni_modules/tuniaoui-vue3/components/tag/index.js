"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_tag_src_tag = require("./src/tag.js");
const uni_modules_tuniaouiVue3_components_tag_src_composables_tagCustom = require("./src/composables/tag-custom.js");
const uni_modules_tuniaouiVue3_components_tag_src_composables_useTag = require("./src/composables/use-tag.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tag",
  props: uni_modules_tuniaouiVue3_components_tag_src_tag.tagProps,
  emits: uni_modules_tuniaouiVue3_components_tag_src_tag.tagEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const tagClickHandle = uni_modules_tuniaouiVue3_components_tag_src_composables_useTag.useTag(props, emits).tagClickHandle;
    const _b = uni_modules_tuniaouiVue3_components_tag_src_composables_tagCustom.useTagCustomStyle(props), tagClass = _b.tagClass, tagStyle = _b.tagStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.n(common_vendor.unref(tagClass)),
        b: common_vendor.s(common_vendor.unref(tagStyle)),
        c: common_vendor.o((...args) => {
          return common_vendor.unref(tagClickHandle) && common_vendor.unref(tagClickHandle)(...args);
        }),
        d: common_vendor.sei(common_vendor.gei(_ctx, ""), "label")
      };
      return __returned__;
    };
  }
});
const Tag = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-09079301"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Tag);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/tag/index.js.map
