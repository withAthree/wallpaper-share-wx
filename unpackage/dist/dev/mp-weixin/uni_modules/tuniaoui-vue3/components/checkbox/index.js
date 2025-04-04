"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_checkbox_src_checkbox = require("./src/checkbox.js");
require("../form/index.js");
const uni_modules_tuniaouiVue3_components_checkbox_src_composables_useCheckbox = require("./src/composables/use-checkbox.js");
const uni_modules_tuniaouiVue3_components_checkbox_src_composables_checkboxCustom = require("./src/composables/checkbox-custom.js");
const uni_modules_tuniaouiVue3_tokens_checkbox = require("../../tokens/checkbox.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_checkbox_src_checkboxGroup = require("./src/checkbox-group.js");
const uni_modules_tuniaouiVue3_components_checkbox_src_composables_useCheckboxGroup = require("./src/composables/use-checkbox-group.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "checkbox",
  props: uni_modules_tuniaouiVue3_components_checkbox_src_checkbox.checkboxProps,
  emits: uni_modules_tuniaouiVue3_components_checkbox_src_checkbox.checkboxEmits,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_checkbox_src_composables_useCheckbox.useCheckbox(props), isGroup = _a.isGroup, selected = _a.selected, handleCheckboxClick = _a.handleCheckboxClick;
    const _b = uni_modules_tuniaouiVue3_components_checkbox_src_composables_checkboxCustom.useCheckboxCustomStyle(Object.assign(props)), ns = _b.ns, checkboxClass = _b.checkboxClass, checkboxStyle = _b.checkboxStyle, checkboxCheckedBoxClass = _b.checkboxCheckedBoxClass, checkboxCheckedBoxStyle = _b.checkboxCheckedBoxStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.$slots.left && !_ctx.$slots.default
      }), _ctx.$slots.left && !_ctx.$slots.default ? new UTSJSONObject({
        b: common_vendor.n(common_vendor.unref(ns).em("content", "left"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        c: common_vendor.unref(selected)
      }), common_vendor.unref(selected) ? new UTSJSONObject({
        d: common_vendor.p(new UTSJSONObject({
          name: "check"
        }))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        e: common_vendor.n(common_vendor.unref(checkboxCheckedBoxClass)(common_vendor.unref(selected))),
        f: common_vendor.n(new UTSJSONObject({
          [common_vendor.unref(ns).em("checked-box", "indeterminate")]: !common_vendor.unref(selected) && _ctx.indeterminate
        })),
        g: common_vendor.s(common_vendor.unref(checkboxCheckedBoxStyle)(common_vendor.unref(selected))),
        h: common_vendor.o(($event = null) => {
          return common_vendor.unref(handleCheckboxClick)("checkbox");
        }),
        i: _ctx.$slots.default
      }), _ctx.$slots.default ? new UTSJSONObject({
        j: common_vendor.n(common_vendor.unref(ns).em("content", "right"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        l: common_vendor.n(common_vendor.unref(checkboxClass)(common_vendor.unref(selected))),
        m: common_vendor.n(new UTSJSONObject({
          [common_vendor.unref(ns).m("group")]: common_vendor.unref(isGroup)
        })),
        n: common_vendor.s(common_vendor.unref(checkboxStyle)(common_vendor.unref(selected))),
        o: common_vendor.o(($event = null) => {
          return common_vendor.unref(handleCheckboxClick)("label");
        })
      }));
      return __returned__;
    };
  }
});
const Checkbox = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-efc516e4"]]);
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "checkbox-group",
  props: uni_modules_tuniaouiVue3_components_checkbox_src_checkboxGroup.checkboxGroupProps,
  emits: uni_modules_tuniaouiVue3_components_checkbox_src_checkboxGroup.checkboxGroupEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("checkbox-group");
    const changeEvent = uni_modules_tuniaouiVue3_components_checkbox_src_composables_useCheckboxGroup.useCheckboxGroup(props, emits).changeEvent;
    common_vendor.provide(uni_modules_tuniaouiVue3_tokens_checkbox.checkboxGroupKey, common_vendor.reactive(new UTSJSONObject(Object.assign(Object.assign({}, common_vendor.toRefs(props)), { changeEvent }))));
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
const CheckboxGroup = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-73c07ce0"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Checkbox, {
  CheckboxGroup
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(CheckboxGroup);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/checkbox/index.js.map
