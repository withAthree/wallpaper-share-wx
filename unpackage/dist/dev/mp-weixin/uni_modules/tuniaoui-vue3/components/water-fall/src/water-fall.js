"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../hooks/use-namespace/index.js");
require("../../../libs/lodash/_baseToString.js");
require("../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_components_waterFall_src_composables_useWaterFall = require("./composables/use-water-fall.js");
const waterFallModes = ["normal", "calc"];
const waterFallProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 列表数据
   */
  data: {
    type: Array,
    default: () => {
      return [];
    }
  },
  /**
   * @description 瀑布流模式
   */
  mode: {
    type: String,
    values: waterFallModes,
    default: "normal"
  }
});
const __default__ = new UTSJSONObject({
  options: new UTSJSONObject({
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  })
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "water-fall", props: waterFallProps, setup(__props, _a) {
  var __expose = _a.expose;
  const props = __props;
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("water-fall");
  const _b = uni_modules_tuniaouiVue3_components_waterFall_src_composables_useWaterFall.useWaterFall(props), componentId = _b.componentId, leftData = _b.leftData, rightData = _b.rightData, resetWaterFall = _b.resetWaterFall;
  __expose({
    /**
     * @description 重置瀑布流
     */
    reset: resetWaterFall
  });
  return (_ctx = null, _cache = null) => {
    const __returned__ = {
      a: common_vendor.f(common_vendor.unref(leftData), (item = null, index = null, i0 = null) => {
        return {
          a: "left-" + i0,
          b: common_vendor.r("left", {
            item,
            index
          }, i0),
          c: index
        };
      }),
      b: common_vendor.n(common_vendor.unref(ns).e("item")),
      c: common_vendor.sei(`${common_vendor.unref(componentId)}-left`, "view"),
      d: common_vendor.n(common_vendor.unref(ns).e("container")),
      e: common_vendor.f(common_vendor.unref(rightData), (item = null, index = null, i0 = null) => {
        return {
          a: "right-" + i0,
          b: common_vendor.r("right", {
            item,
            index
          }, i0),
          c: index
        };
      }),
      f: common_vendor.n(common_vendor.unref(ns).e("item")),
      g: common_vendor.sei(`${common_vendor.unref(componentId)}-right`, "view"),
      h: common_vendor.n(common_vendor.unref(ns).e("container")),
      i: common_vendor.sei(_ctx.virtualHostId, "view"),
      j: common_vendor.n(common_vendor.unref(ns).b())
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2768054b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/water-fall/src/water-fall.js.map
