"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_switch_src_switch = require("./src/switch.js");
const uni_modules_tuniaouiVue3_components_switch_src_composables_switchCustom = require("./src/composables/switch-custom.js");
require("../form/index.js");
const uni_modules_tuniaouiVue3_components_switch_src_composables_useSwitch = require("./src/composables/use-switch.js");
if (!Math) {
  (TnLoading + TnIcon)();
}
const TnIcon = () => "../icon/src/icon.js";
const TnLoading = () => "../loading/src/loading.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "switch",
  props: uni_modules_tuniaouiVue3_components_switch_src_switch.switchProps,
  emits: uni_modules_tuniaouiVue3_components_switch_src_switch.switchEmits,
  setup(__props) {
    const props = __props;
    const _a = uni_modules_tuniaouiVue3_components_switch_src_composables_useSwitch.useSwitch(props), selected = _a.selected, switchClickEvent = _a.switchClickEvent;
    const _b = uni_modules_tuniaouiVue3_components_switch_src_composables_switchCustom.useSwitchCustomStyle(props, selected), ns = _b.ns, switchClass = _b.switchClass, switchStyle = _b.switchStyle;
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.p(new UTSJSONObject({
          show: _ctx.loading,
          animation: true,
          type: "info",
          mode: "flower"
        })),
        b: common_vendor.n(common_vendor.unref(ns).e("dot")),
        c: common_vendor.n(new UTSJSONObject({
          [common_vendor.unref(ns).em("dot", "checked")]: common_vendor.unref(selected)
        })),
        d: common_vendor.unref(selected)
      }), common_vendor.unref(selected) ? common_vendor.e(new UTSJSONObject({
        e: props.activeText && !props.activeIcon
      }), props.activeText && !props.activeIcon ? new UTSJSONObject({
        f: common_vendor.t(props.activeText),
        g: common_vendor.n(common_vendor.unref(ns).em("active-content", "text"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        h: props.activeIcon
      }), props.activeIcon ? new UTSJSONObject({
        i: common_vendor.p(new UTSJSONObject({
          name: props.activeIcon
        })),
        j: common_vendor.n(common_vendor.unref(ns).em("active-content", "icon"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        k: common_vendor.n(common_vendor.unref(ns).e("active-content"))
      })) : common_vendor.e(new UTSJSONObject({
        l: props.inactiveText && !props.inactiveIcon
      }), props.inactiveText && !props.inactiveIcon ? new UTSJSONObject({
        m: common_vendor.t(props.inactiveText),
        n: common_vendor.n(common_vendor.unref(ns).em("inactive-content", "text"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        o: props.inactiveIcon
      }), props.inactiveIcon ? new UTSJSONObject({
        p: common_vendor.p(new UTSJSONObject({
          name: props.inactiveIcon
        })),
        q: common_vendor.n(common_vendor.unref(ns).em("inactive-content", "icon"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        r: common_vendor.n(common_vendor.unref(ns).e("inactive-content"))
      })), new UTSJSONObject({
        s: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        t: common_vendor.n(common_vendor.unref(switchClass)),
        v: common_vendor.n(new UTSJSONObject({
          [common_vendor.unref(ns).is("content")]: props.activeText || props.activeIcon || props.inactiveText || props.inactiveIcon
        })),
        w: common_vendor.s(common_vendor.unref(switchStyle)),
        x: common_vendor.o((...args) => {
          return common_vendor.unref(switchClickEvent) && common_vendor.unref(switchClickEvent)(...args);
        })
      }));
      return __returned__;
    };
  }
});
const Switch = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-159f993a"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Switch);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/switch/index.js.map
