"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_radio_src_radio = require("./src/radio.js");
require("../form/index.js");
const uni_modules_tuniaouiVue3_components_radio_src_composables_radioCustom = require("./src/composables/radio-custom.js");
const uni_modules_tuniaouiVue3_components_radio_src_composables_useRadio = require("./src/composables/use-radio.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_tokens_radio = require("../../tokens/radio.js");
const uni_modules_tuniaouiVue3_components_radio_src_radioGroup = require("./src/radio-group.js");
const uni_modules_tuniaouiVue3_components_radio_src_composables_useRadioGroup = require("./src/composables/use-radio-group.js");
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "radio",
  props: uni_modules_tuniaouiVue3_components_radio_src_radio.radioProps,
  emits: uni_modules_tuniaouiVue3_components_radio_src_radio.radioEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_radio_src_composables_useRadio.useRadio(props, emits), isGroup = _b.isGroup, modelValue = _b.modelValue, radioClickEvent = _b.radioClickEvent;
    const _c = uni_modules_tuniaouiVue3_components_radio_src_composables_radioCustom.useRadioCustomStyle(props), ns = _c.ns, radioClass = _c.radioClass, radioDotClass = _c.radioDotClass, radioStyle = _c.radioStyle, radioDotStyle = _c.radioDotStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.$slots.left && !_ctx.$slots.default
      }), _ctx.$slots.left && !_ctx.$slots.default ? new UTSJSONObject({
        b: common_vendor.n(common_vendor.unref(ns).em("content", "left"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        c: common_vendor.n(common_vendor.unref(radioDotClass)(common_vendor.unref(modelValue) === _ctx.label)),
        d: common_vendor.s(common_vendor.unref(radioDotStyle)(common_vendor.unref(modelValue) === _ctx.label)),
        e: common_vendor.o(($event = null) => {
          return common_vendor.unref(radioClickEvent)("radio");
        }),
        f: _ctx.$slots.default
      }), _ctx.$slots.default ? new UTSJSONObject({
        g: common_vendor.n(common_vendor.unref(ns).em("content", "right"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        h: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        i: common_vendor.n(common_vendor.unref(radioClass)(common_vendor.unref(modelValue) === _ctx.label)),
        j: common_vendor.n(new UTSJSONObject({
          [common_vendor.unref(ns).m("group")]: common_vendor.unref(isGroup)
        })),
        k: common_vendor.s(common_vendor.unref(radioStyle)(common_vendor.unref(modelValue) === _ctx.label)),
        l: common_vendor.o(($event = null) => {
          return common_vendor.unref(radioClickEvent)("label");
        })
      }));
      return __returned__;
    };
  }
});
const Radio = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-03587b0b"]]);
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "radio-group",
  props: uni_modules_tuniaouiVue3_components_radio_src_radioGroup.radioGroupProps,
  emits: uni_modules_tuniaouiVue3_components_radio_src_radioGroup.radioGroupEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("radio-group");
    const changeEvent = uni_modules_tuniaouiVue3_components_radio_src_composables_useRadioGroup.useRadioGroup(props, emits).changeEvent;
    common_vendor.provide(uni_modules_tuniaouiVue3_tokens_radio.radioGroupKey, common_vendor.reactive(new UTSJSONObject(Object.assign(Object.assign({}, common_vendor.toRefs(props)), { changeEvent }))));
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        b: common_vendor.n(common_vendor.unref(ns).b()),
        c: common_vendor.n(common_vendor.unref(ns).is("wrap", props.wrap))
      };
      return __returned__;
    };
  }
});
const RadioGroup = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ef3ac0b"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Radio, {
  RadioGroup
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(RadioGroup);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/radio/index.js.map
