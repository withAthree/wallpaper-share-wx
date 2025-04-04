"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_navbar_src_navbar = require("./src/navbar.js");
const uni_modules_tuniaouiVue3_components_navbar_src_composables_navbarCustom = require("./src/composables/navbar-custom.js");
const uni_modules_tuniaouiVue3_components_navbar_src_composables_useNavbar = require("./src/composables/use-navbar.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "navbar",
  props: uni_modules_tuniaouiVue3_components_navbar_src_navbar.navBarProps,
  emits: uni_modules_tuniaouiVue3_components_navbar_src_navbar.navbarEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_navbar_src_composables_useNavbar.useNavbar(props), navbackButtonType = _b.navbackButtonType, hasRightOperation = _b.hasRightOperation, clickBackEvent = _b.clickBackEvent, clickHomeEvent = _b.clickHomeEvent;
    const _c = uni_modules_tuniaouiVue3_components_navbar_src_composables_navbarCustom.useNavbarCustomStyle(props, navbackButtonType, hasRightOperation), ns = _c.ns, backNs = _c.backNs, navBarInfo = _c.navBarInfo, navbarClass = _c.navbarClass, navbarStyle = _c.navbarStyle, navbarBgClass = _c.navbarBgClass, navbarBgStyle = _c.navbarBgStyle, navbarPlaceholderStyle = _c.navbarPlaceholderStyle, navbarWrapperStyle = _c.navbarWrapperStyle, backStyle = _c.backStyle, contentStyle = _c.contentStyle, rightOperationStyle = _c.rightOperationStyle;
    const backEvent = (type) => {
      if (type === "back") {
        clickBackEvent();
      } else {
        clickHomeEvent();
      }
    };
    common_vendor.onMounted(() => {
      common_vendor.nextTick$1(() => {
        emits("initFinish", navBarInfo);
      });
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.n(common_vendor.unref(navbarBgClass)),
        b: common_vendor.s(common_vendor.unref(navbarBgStyle)),
        c: common_vendor.unref(navbackButtonType) !== "none"
      }), common_vendor.unref(navbackButtonType) !== "none" ? common_vendor.e(new UTSJSONObject({
        d: common_vendor.unref(navbackButtonType) === "multi"
      }), common_vendor.unref(navbackButtonType) === "multi" ? new UTSJSONObject({
        e: common_vendor.p(new UTSJSONObject({
          name: props.backIcon
        })),
        f: common_vendor.n(common_vendor.unref(backNs).e("multi__item")),
        g: common_vendor.o((...args) => {
          return common_vendor.unref(clickBackEvent) && common_vendor.unref(clickBackEvent)(...args);
        }),
        h: common_vendor.p(new UTSJSONObject({
          name: props.homeIcon
        })),
        i: common_vendor.n(common_vendor.unref(backNs).e("multi__item")),
        j: common_vendor.o((...args) => {
          return common_vendor.unref(clickHomeEvent) && common_vendor.unref(clickHomeEvent)(...args);
        }),
        k: common_vendor.n(common_vendor.unref(backNs).e("multi"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        l: common_vendor.unref(navbackButtonType) === "single"
      }), common_vendor.unref(navbackButtonType) === "single" ? common_vendor.e(new UTSJSONObject({
        m: props.backIcon
      }), props.backIcon ? new UTSJSONObject({
        n: common_vendor.p(new UTSJSONObject({
          name: props.backIcon
        }))
      }) : props.homeIcon ? new UTSJSONObject({
        p: common_vendor.p(new UTSJSONObject({
          name: props.homeIcon
        }))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        o: props.homeIcon,
        q: common_vendor.n(common_vendor.unref(backNs).e("single")),
        r: common_vendor.o(($event = null) => {
          return backEvent(props.backIcon ? "back" : "home");
        })
      })) : new UTSJSONObject({}), new UTSJSONObject({
        s: common_vendor.unref(navbackButtonType) === "text"
      }), common_vendor.unref(navbackButtonType) === "text" ? new UTSJSONObject({
        t: common_vendor.p(new UTSJSONObject({
          name: _ctx.backIcon || "left"
        })),
        v: common_vendor.n(common_vendor.unref(backNs).e("text__icon")),
        w: common_vendor.t(_ctx.backText || "返回"),
        x: common_vendor.n(common_vendor.unref(backNs).e("text__value")),
        y: common_vendor.n(common_vendor.unref(backNs).e("text")),
        z: common_vendor.o((...args) => {
          return common_vendor.unref(clickBackEvent) && common_vendor.unref(clickBackEvent)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        A: common_vendor.n(common_vendor.unref(backNs).b()),
        B: common_vendor.s(common_vendor.unref(backStyle))
      })) : new UTSJSONObject({}), new UTSJSONObject({
        C: _ctx.$slots.default
      }), _ctx.$slots.default ? new UTSJSONObject({
        D: common_vendor.n(common_vendor.unref(ns).e("content")),
        E: common_vendor.n(new UTSJSONObject({
          [common_vendor.unref(ns).em("content", "center")]: props.center
        })),
        F: common_vendor.s(common_vendor.unref(contentStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        G: _ctx.$slots.right
      }), _ctx.$slots.right ? new UTSJSONObject({
        H: common_vendor.n(common_vendor.unref(ns).e("right-operation")),
        I: common_vendor.s(common_vendor.unref(rightOperationStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        J: common_vendor.n(common_vendor.unref(ns).e("wrapper")),
        K: common_vendor.s(common_vendor.unref(navbarWrapperStyle)),
        L: common_vendor.n(common_vendor.unref(navbarClass)),
        M: common_vendor.s(common_vendor.unref(navbarStyle)),
        N: _ctx.fixed && _ctx.placeholder
      }), _ctx.fixed && _ctx.placeholder ? new UTSJSONObject({
        O: common_vendor.n(common_vendor.unref(ns).e("placeholder")),
        P: common_vendor.s(common_vendor.unref(navbarPlaceholderStyle))
      }) : new UTSJSONObject({}));
      return __returned__;
    };
  }
});
const Navbar = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7afddd81"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Navbar);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/navbar/index.js.map
