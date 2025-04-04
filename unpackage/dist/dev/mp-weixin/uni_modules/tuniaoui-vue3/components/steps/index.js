"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_steps_src_steps = require("./src/steps.js");
const uni_modules_tuniaouiVue3_components_steps_src_composables_stepsCustom = require("./src/composables/steps-custom.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_steps_src_composables_useSteps = require("./src/composables/use-steps.js");
const uni_modules_tuniaouiVue3_components_steps_src_stepsItem = require("./src/steps-item.js");
const uni_modules_tuniaouiVue3_components_steps_src_composables_stepCustom = require("./src/composables/step-custom.js");
const uni_modules_tuniaouiVue3_components_steps_src_composables_useStep = require("./src/composables/use-step.js");
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "steps",
  props: uni_modules_tuniaouiVue3_components_steps_src_steps.stepsProps,
  emits: uni_modules_tuniaouiVue3_components_steps_src_steps.stepsEmits,
  setup(__props) {
    const props = __props;
    uni_modules_tuniaouiVue3_components_steps_src_composables_useSteps.useSteps(props);
    const ns = uni_modules_tuniaouiVue3_components_steps_src_composables_stepsCustom.useStepsCustomStyle().ns;
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        b: common_vendor.n(common_vendor.unref(ns).b())
      };
      return __returned__;
    };
  }
});
const Steps = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-3be1e264"]]);
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "steps-item", props: uni_modules_tuniaouiVue3_components_steps_src_stepsItem.stepProps, emits: uni_modules_tuniaouiVue3_components_steps_src_stepsItem.stepEmits, setup(__props) {
  const props = __props;
  const _a = uni_modules_tuniaouiVue3_components_steps_src_composables_useStep.useStep(props), isActive = _a.isActive, stepMode = _a.stepMode, itemClickEvent = _a.itemClickEvent;
  const _b = uni_modules_tuniaouiVue3_components_steps_src_composables_stepCustom.useStepCustomStyle(props, isActive, stepMode), ns = _b.ns, stepClass = _b.stepClass, stepStyle = _b.stepStyle, modeClass = _b.modeClass, modeStyle = _b.modeStyle, lineClass = _b.lineClass, lineStyle = _b.lineStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = common_vendor.e(new UTSJSONObject({
      a: common_vendor.unref(stepMode) === "dot"
    }), common_vendor.unref(stepMode) === "dot" ? new UTSJSONObject({
      b: common_vendor.n(common_vendor.unref(modeClass)()),
      c: common_vendor.s(common_vendor.unref(modeStyle)())
    }) : new UTSJSONObject({}), new UTSJSONObject({
      d: common_vendor.unref(stepMode) === "number"
    }), common_vendor.unref(stepMode) === "number" ? new UTSJSONObject({
      e: common_vendor.p(new UTSJSONObject({
        name: "check"
      })),
      f: common_vendor.n(common_vendor.unref(modeClass)()),
      g: common_vendor.s(common_vendor.unref(modeStyle)())
    }) : new UTSJSONObject({}), new UTSJSONObject({
      h: common_vendor.unref(stepMode) === "dotIcon"
    }), common_vendor.unref(stepMode) === "dotIcon" ? new UTSJSONObject({
      i: common_vendor.n(common_vendor.unref(modeClass)("dot")),
      j: common_vendor.s(common_vendor.unref(modeStyle)("dot")),
      k: common_vendor.p(new UTSJSONObject({
        name: _ctx.activeIcon
      })),
      l: common_vendor.n(common_vendor.unref(modeClass)("icon")),
      m: common_vendor.s(common_vendor.unref(modeStyle)("icon")),
      n: common_vendor.n(common_vendor.unref(modeClass)()),
      o: common_vendor.s(common_vendor.unref(modeStyle)())
    }) : new UTSJSONObject({}), new UTSJSONObject({
      p: common_vendor.unref(stepMode) === "icon"
    }), common_vendor.unref(stepMode) === "icon" ? new UTSJSONObject({
      q: common_vendor.p(new UTSJSONObject({
        name: common_vendor.unref(isActive) ? _ctx.activeIcon : _ctx.icon
      })),
      r: common_vendor.n(common_vendor.unref(modeClass)()),
      s: common_vendor.s(common_vendor.unref(modeStyle)())
    }) : new UTSJSONObject({}), new UTSJSONObject({
      t: common_vendor.n(common_vendor.unref(ns).e("mode-item")),
      v: _ctx.title
    }), _ctx.title ? new UTSJSONObject({
      w: common_vendor.t(_ctx.title),
      x: common_vendor.n(common_vendor.unref(ns).e("mode-title"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      y: common_vendor.n(common_vendor.unref(ns).e("container")),
      z: common_vendor.o((...args) => {
        return common_vendor.unref(itemClickEvent) && common_vendor.unref(itemClickEvent)(...args);
      }),
      A: common_vendor.n(common_vendor.unref(lineClass)),
      B: common_vendor.s(common_vendor.unref(lineStyle)),
      C: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      D: common_vendor.n(common_vendor.unref(stepClass)),
      E: common_vendor.s(common_vendor.unref(stepStyle))
    }));
    return __returned__;
  };
} }));
const StepsItem = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fda3a1cd"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Steps, {
  StepsItem
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(StepsItem);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/steps/index.js.map
