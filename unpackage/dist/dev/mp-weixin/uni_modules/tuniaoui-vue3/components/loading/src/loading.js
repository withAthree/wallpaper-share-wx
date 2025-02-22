"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_types = require("../../../constants/types.js");
const uni_modules_tuniaouiVue3_components_loading_src_composables_loadingCustom = require("./composables/loading-custom.js");
const loadingModes = ["semicircle", "circle", "flower"];
const loadingProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 显示加载状态
   */
  show: Boolean,
  /**
   * @description 加载动画
   */
  animation: Boolean,
  /**
   * @description 加载模式
   */
  mode: {
    type: String,
    values: loadingModes,
    default: "circle"
  },
  /**
   * @description 加载颜色类型
   */
  type: {
    type: String,
    values: uni_modules_tuniaouiVue3_constants_types.componentTypes,
    default: "primary"
  },
  /**
   * @description 颜色，以tn开头则使用图鸟内置的颜色
   */
  color: String,
  /**
   * @description 加载动画大小
   */
  size: {
    type: [String, Number]
  },
  /**
   * @description 加载动画执行时间，单位s
   */
  duration: {
    type: [String, Number]
  },
  /**
   * @description 加载动画执行时间函数，仅mode为circle和semicircle时有效
   */
  timeFunction: String
});
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "loading", props: loadingProps, setup(__props) {
  const props = __props;
  const _a = uni_modules_tuniaouiVue3_components_loading_src_composables_loadingCustom.useLoadingCustomStyle(props), ns = _a.ns, loadingClass = _a.loadingClass, loadingStyle = _a.loadingStyle, loadingContentClass = _a.loadingContentClass, loadingContentStyle = _a.loadingContentStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = common_vendor.e(new UTSJSONObject({
      a: _ctx.show
    }), _ctx.show ? common_vendor.e(new UTSJSONObject({
      b: _ctx.mode === "semicircle"
    }), _ctx.mode === "semicircle" ? new UTSJSONObject({
      c: common_vendor.n(common_vendor.unref(ns).e("semicircle"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      d: _ctx.mode === "circle" || _ctx.mode === "semicircle"
    }), _ctx.mode === "circle" || _ctx.mode === "semicircle" ? new UTSJSONObject({
      e: common_vendor.n(common_vendor.unref(ns).e("circle")),
      f: common_vendor.n(common_vendor.unref(loadingContentClass)),
      g: common_vendor.s(common_vendor.unref(loadingContentStyle))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      h: _ctx.mode === "flower"
    }), _ctx.mode === "flower" ? new UTSJSONObject({
      i: common_vendor.f(12, (i = null, k0 = null, i0 = null) => {
        return new UTSJSONObject({
          a: i
        });
      }),
      j: common_vendor.n(common_vendor.unref(ns).em("flower", "item")),
      k: common_vendor.n(common_vendor.unref(ns).e("flower")),
      l: common_vendor.n(common_vendor.unref(loadingContentClass)),
      m: common_vendor.s(common_vendor.unref(loadingContentStyle))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      n: common_vendor.sei(_ctx.virtualHostId, "view"),
      o: common_vendor.n(common_vendor.unref(loadingClass)),
      p: common_vendor.s(common_vendor.unref(loadingStyle))
    })) : new UTSJSONObject({}));
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9d91df98"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/loading/src/loading.js.map
