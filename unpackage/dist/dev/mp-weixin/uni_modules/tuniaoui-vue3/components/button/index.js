"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_button_src_button = require("./src/button.js");
const uni_modules_tuniaouiVue3_components_button_src_composables_buttonCustom = require("./src/composables/button-custom.js");
const uni_modules_tuniaouiVue3_components_button_src_composables_useButton = require("./src/composables/use-button.js");
if (!Math) {
  (TnLoading + TnIcon)();
}
const TnIcon = () => "../icon/src/icon.js";
const TnLoading = () => "../loading/src/loading.js";
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "button", props: uni_modules_tuniaouiVue3_components_button_src_button.buttonProps, emits: uni_modules_tuniaouiVue3_components_button_src_button.buttonEmits, setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emits = __emit;
  const _b = uni_modules_tuniaouiVue3_components_button_src_composables_useButton.useButton(props, emits), buttonClick = _b.buttonClick, getPhoneNumber = _b.getPhoneNumber, getRealTimePhoneNumber = _b.getRealTimePhoneNumber, openSetting = _b.openSetting, launchApp = _b.launchApp, getUserInfo = _b.getUserInfo, chooseAvatar = _b.chooseAvatar, agreePrivacyAuthorization = _b.agreePrivacyAuthorization, contact = _b.contact, openTypeError = _b.openTypeError;
  const _c = uni_modules_tuniaouiVue3_components_button_src_composables_buttonCustom.useButtonCustomStyle(props), ns = _c.ns, buttonClass = _c.buttonClass, buttonStyle = _c.buttonStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = common_vendor.e(new UTSJSONObject({
      a: props.clickModifiers === "stop"
    }), props.clickModifiers === "stop" ? common_vendor.e(new UTSJSONObject({
      b: _ctx.loading
    }), _ctx.loading ? new UTSJSONObject({
      c: common_vendor.p(new UTSJSONObject({
        show: true,
        animation: true,
        mode: "flower",
        color: "tn-gray"
      })),
      d: common_vendor.n(common_vendor.unref(ns).m("loading"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      e: _ctx.icon
    }), _ctx.icon ? new UTSJSONObject({
      f: common_vendor.p(new UTSJSONObject({
        name: _ctx.icon
      })),
      g: common_vendor.n(common_vendor.unref(ns).e("icon"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      h: common_vendor.n(common_vendor.unref(buttonClass)),
      i: common_vendor.s(common_vendor.unref(buttonStyle)),
      j: props.disabled || props.loading || props.onlyButton ? "" : _ctx.hoverClass,
      k: _ctx.disabled,
      l: _ctx.formType,
      m: _ctx.openType,
      n: _ctx.appParameter,
      o: _ctx.sessionFrom,
      p: _ctx.sendMessageTitle,
      q: _ctx.sendMessagePath,
      r: _ctx.sendMessageImg,
      s: _ctx.showMessageCard,
      t: _ctx.phoneNumberNoQuotaToast,
      v: common_vendor.o((...args) => {
        return common_vendor.unref(buttonClick) && common_vendor.unref(buttonClick)(...args);
      }),
      w: common_vendor.o((...args) => {
        return common_vendor.unref(getPhoneNumber) && common_vendor.unref(getPhoneNumber)(...args);
      }),
      x: common_vendor.o((...args) => {
        return common_vendor.unref(getRealTimePhoneNumber) && common_vendor.unref(getRealTimePhoneNumber)(...args);
      }),
      y: common_vendor.o((...args) => {
        return common_vendor.unref(openSetting) && common_vendor.unref(openSetting)(...args);
      }),
      z: common_vendor.o((...args) => {
        return common_vendor.unref(launchApp) && common_vendor.unref(launchApp)(...args);
      }),
      A: common_vendor.o((...args) => {
        return common_vendor.unref(getUserInfo) && common_vendor.unref(getUserInfo)(...args);
      }),
      B: common_vendor.o((...args) => {
        return common_vendor.unref(chooseAvatar) && common_vendor.unref(chooseAvatar)(...args);
      }),
      C: common_vendor.o((...args) => {
        return common_vendor.unref(agreePrivacyAuthorization) && common_vendor.unref(agreePrivacyAuthorization)(...args);
      }),
      D: common_vendor.o((...args) => {
        return common_vendor.unref(contact) && common_vendor.unref(contact)(...args);
      }),
      E: common_vendor.o((...args) => {
        return common_vendor.unref(openTypeError) && common_vendor.unref(openTypeError)(...args);
      })
    })) : common_vendor.e(new UTSJSONObject({
      F: _ctx.loading
    }), _ctx.loading ? new UTSJSONObject({
      G: common_vendor.p(new UTSJSONObject({
        show: true,
        animation: true,
        mode: "flower",
        color: "tn-gray"
      })),
      H: common_vendor.n(common_vendor.unref(ns).m("loading"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      I: _ctx.icon
    }), _ctx.icon ? new UTSJSONObject({
      J: common_vendor.p(new UTSJSONObject({
        name: _ctx.icon
      })),
      K: common_vendor.n(common_vendor.unref(ns).e("icon"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      L: common_vendor.n(common_vendor.unref(buttonClass)),
      M: common_vendor.s(common_vendor.unref(buttonStyle)),
      N: props.disabled || props.loading || props.onlyButton ? "" : _ctx.hoverClass,
      O: _ctx.disabled,
      P: _ctx.formType,
      Q: _ctx.openType,
      R: _ctx.appParameter,
      S: _ctx.sessionFrom,
      T: _ctx.sendMessageTitle,
      U: _ctx.sendMessagePath,
      V: _ctx.sendMessageImg,
      W: _ctx.showMessageCard,
      X: _ctx.phoneNumberNoQuotaToast,
      Y: common_vendor.o((...args) => {
        return common_vendor.unref(buttonClick) && common_vendor.unref(buttonClick)(...args);
      }),
      Z: common_vendor.o((...args) => {
        return common_vendor.unref(getPhoneNumber) && common_vendor.unref(getPhoneNumber)(...args);
      }),
      aa: common_vendor.o((...args) => {
        return common_vendor.unref(getRealTimePhoneNumber) && common_vendor.unref(getRealTimePhoneNumber)(...args);
      }),
      ab: common_vendor.o((...args) => {
        return common_vendor.unref(openSetting) && common_vendor.unref(openSetting)(...args);
      }),
      ac: common_vendor.o((...args) => {
        return common_vendor.unref(launchApp) && common_vendor.unref(launchApp)(...args);
      }),
      ad: common_vendor.o((...args) => {
        return common_vendor.unref(getUserInfo) && common_vendor.unref(getUserInfo)(...args);
      }),
      ae: common_vendor.o((...args) => {
        return common_vendor.unref(chooseAvatar) && common_vendor.unref(chooseAvatar)(...args);
      }),
      af: common_vendor.o((...args) => {
        return common_vendor.unref(agreePrivacyAuthorization) && common_vendor.unref(agreePrivacyAuthorization)(...args);
      }),
      ag: common_vendor.o((...args) => {
        return common_vendor.unref(contact) && common_vendor.unref(contact)(...args);
      }),
      ah: common_vendor.o((...args) => {
        return common_vendor.unref(openTypeError) && common_vendor.unref(openTypeError)(...args);
      })
    })));
    return __returned__;
  };
} }));
const Button = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-055d4a7b"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Button);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/button/index.js.map
