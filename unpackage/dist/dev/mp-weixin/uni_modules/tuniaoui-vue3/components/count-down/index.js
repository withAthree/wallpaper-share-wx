"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_countDown_src_countDown = require("./src/count-down.js");
const uni_modules_tuniaouiVue3_components_countDown_src_composables_countDownCustom = require("./src/composables/count-down-custom.js");
const uni_modules_tuniaouiVue3_components_countDown_src_composables_countDownSeparatorData = require("./src/composables/count-down-separator-data.js");
const uni_modules_tuniaouiVue3_components_countDown_src_composables_useCountDown = require("./src/composables/use-count-down.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "count-down",
  props: uni_modules_tuniaouiVue3_components_countDown_src_countDown.countDownProps,
  emits: uni_modules_tuniaouiVue3_components_countDown_src_countDown.countDownEmits,
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_countDown_src_composables_useCountDown.useCountDown(props, emits), day = _b.day, hour = _b.hour, minute = _b.minute, second = _b.second, startCountDown = _b.startCountDown, stopCountDown = _b.stopCountDown, resetCountDown = _b.resetCountDown;
    const _c = uni_modules_tuniaouiVue3_components_countDown_src_composables_countDownCustom.useCountDownCustomStyle(props), countDownClass = _c.countDownClass, countDownStyle = _c.countDownStyle, textClass = _c.textClass, textStyle = _c.textStyle, separatorClass = _c.separatorClass, separatorStyle = _c.separatorStyle;
    const getSeparatorData = uni_modules_tuniaouiVue3_components_countDown_src_composables_countDownSeparatorData.useCountDownSeparatorData().getSeparatorData;
    __expose(new UTSJSONObject({
      /**
       * @description 开始倒计时
       */
      start: startCountDown,
      /**
       * @description 停止倒计时
       */
      stop: stopCountDown,
      /**
       * @description 重置倒计时
       */
      reset: resetCountDown
    }));
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.unref(day)
      }), common_vendor.unref(day) ? new UTSJSONObject({
        b: common_vendor.t(common_vendor.unref(day)),
        c: common_vendor.n(common_vendor.unref(textClass)),
        d: common_vendor.s(common_vendor.unref(textStyle)),
        e: common_vendor.t(common_vendor.unref(getSeparatorData)(_ctx.separatorMode, "day")),
        f: common_vendor.n(common_vendor.unref(separatorClass)),
        g: common_vendor.s(common_vendor.unref(separatorStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        h: common_vendor.unref(hour)
      }), common_vendor.unref(hour) ? new UTSJSONObject({
        i: common_vendor.t(common_vendor.unref(hour)),
        j: common_vendor.n(common_vendor.unref(textClass)),
        k: common_vendor.s(common_vendor.unref(textStyle)),
        l: common_vendor.t(common_vendor.unref(getSeparatorData)(_ctx.separatorMode, "hour")),
        m: common_vendor.n(common_vendor.unref(separatorClass)),
        n: common_vendor.s(common_vendor.unref(separatorStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        o: common_vendor.unref(minute)
      }), common_vendor.unref(minute) ? new UTSJSONObject({
        p: common_vendor.t(common_vendor.unref(minute)),
        q: common_vendor.n(common_vendor.unref(textClass)),
        r: common_vendor.s(common_vendor.unref(textStyle)),
        s: common_vendor.t(common_vendor.unref(getSeparatorData)(_ctx.separatorMode, "minute")),
        t: common_vendor.n(common_vendor.unref(separatorClass)),
        v: common_vendor.s(common_vendor.unref(separatorStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        w: common_vendor.unref(second)
      }), common_vendor.unref(second) ? common_vendor.e(new UTSJSONObject({
        x: common_vendor.t(common_vendor.unref(second)),
        y: common_vendor.n(common_vendor.unref(textClass)),
        z: common_vendor.s(common_vendor.unref(textStyle)),
        A: common_vendor.unref(getSeparatorData)(_ctx.separatorMode, "second")
      }), common_vendor.unref(getSeparatorData)(_ctx.separatorMode, "second") ? new UTSJSONObject({
        B: common_vendor.t(common_vendor.unref(getSeparatorData)(_ctx.separatorMode, "second")),
        C: common_vendor.n(common_vendor.unref(separatorClass)),
        D: common_vendor.s(common_vendor.unref(separatorStyle))
      }) : new UTSJSONObject({})) : new UTSJSONObject({}), new UTSJSONObject({
        E: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        F: common_vendor.n(common_vendor.unref(countDownClass)),
        G: common_vendor.s(common_vendor.unref(countDownStyle))
      }));
      return __returned__;
    };
  }
});
const CountDown = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-25e133aa"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(CountDown);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/count-down/index.js.map
