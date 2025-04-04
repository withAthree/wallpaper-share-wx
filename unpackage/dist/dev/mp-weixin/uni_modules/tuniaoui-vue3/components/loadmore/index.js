"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../utils/is-empty.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_components_loading_index = require("../loading/index.js");
const uni_modules_tuniaouiVue3_components_loadmore_src_composables_loadmoreCustom = require("./src/composables/loadmore-custom.js");
const loadmoreStatus = [
  "loadmore",
  "loading",
  "nomore",
  "empty"
];
const loadmoreProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 加载状态
   */
  status: {
    type: String,
    values: loadmoreStatus,
    default: "loadmore"
  },
  /**
   * @description 尺寸大小，支持`sm`, `md`, `lg` 以及传入指定的尺寸大小
   */
  size: String,
  /**
   * @description 颜色，以tn开头将使用图鸟内置的颜色
   */
  color: String,
  /**
   * @description 加载文案
   */
  text: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Object),
    default: () => {
      return {
        loadmore: "加载更多",
        loading: "加载中...",
        nomore: "没有更多了",
        empty: "暂无数据"
      };
    }
  },
  /**
   * @description 是否显示加载图标
   */
  loadingIcon: {
    type: Boolean,
    default: true
  },
  /**
   * @description 加载图标类型
   */
  loadingIconMode: {
    type: String,
    values: uni_modules_tuniaouiVue3_components_loading_index.loadingModes,
    default: "circle"
  },
  /**
   * @description 是否显示加载文案，如果不显示，在加载状态下，只显示加载图标，在加载完成状态下，不显示任何内容，在没有数据时显示一个点
   */
  loadingText: {
    type: Boolean,
    default: true
  }
});
const loadmoreEmits = {
  /**
   * @description 点击事件
   */
  click: () => {
    return true;
  }
};
if (!Math) {
  TnLoading();
}
const TnLoading = () => "../loading/src/loading.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "loadmore",
  props: loadmoreProps,
  emits: loadmoreEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const _b = uni_modules_tuniaouiVue3_components_loadmore_src_composables_loadmoreCustom.useLoadmoreCustomStyle(props), ns = _b.ns, loadmoreClass = _b.loadmoreClass, loadmoreStyle = _b.loadmoreStyle, dotClass = _b.dotClass, dotStyle = _b.dotStyle;
    const loadMoreClickEvent = () => {
      emits("click");
    };
    return (_ctx = null, _cache = null) => {
      var _a2, _b2, _c, _d, _f, _g, _h, _j;
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: _ctx.status === "loading" && _ctx.loadingIcon
      }), _ctx.status === "loading" && _ctx.loadingIcon ? new UTSJSONObject({
        b: common_vendor.p(new UTSJSONObject({
          show: true,
          animation: true,
          mode: _ctx.loadingIconMode,
          size: _ctx.size,
          color: common_vendor.unref(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault)(_ctx.color, "tn-gray")
        }))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        c: _ctx.loadingText
      }), _ctx.loadingText ? common_vendor.e(new UTSJSONObject({
        d: _ctx.status === "loadmore" && ((_a2 = _ctx.text) === null || _a2 === void 0 ? void 0 : _a2.loadmore)
      }), _ctx.status === "loadmore" && ((_b2 = _ctx.text) === null || _b2 === void 0 ? void 0 : _b2.loadmore) ? new UTSJSONObject({
        e: common_vendor.t(_ctx.text.loadmore),
        f: common_vendor.n(common_vendor.unref(ns).em("text", "loadmore"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        g: _ctx.status === "loading" && ((_c = _ctx.text) === null || _c === void 0 ? void 0 : _c.loading)
      }), _ctx.status === "loading" && ((_d = _ctx.text) === null || _d === void 0 ? void 0 : _d.loading) ? new UTSJSONObject({
        h: common_vendor.t(_ctx.text.loading),
        i: common_vendor.n(common_vendor.unref(ns).em("text", "loading"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        j: _ctx.status === "nomore" && ((_f = _ctx.text) === null || _f === void 0 ? void 0 : _f.nomore)
      }), _ctx.status === "nomore" && ((_g = _ctx.text) === null || _g === void 0 ? void 0 : _g.nomore) ? new UTSJSONObject({
        k: common_vendor.t(_ctx.text.nomore),
        l: common_vendor.n(common_vendor.unref(ns).em("text", "nomore"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        m: _ctx.status === "empty" && ((_h = _ctx.text) === null || _h === void 0 ? void 0 : _h.empty)
      }), _ctx.status === "empty" && ((_j = _ctx.text) === null || _j === void 0 ? void 0 : _j.empty) ? new UTSJSONObject({
        n: common_vendor.t(_ctx.text.empty),
        o: common_vendor.n(common_vendor.unref(ns).em("text", "empty"))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        p: common_vendor.n(common_vendor.unref(ns).e("text"))
      })) : new UTSJSONObject({}), new UTSJSONObject({
        q: !_ctx.loadingText && _ctx.status !== "loading" || _ctx.status === "loading" && !_ctx.loadingIcon && !_ctx.loadingText
      }), !_ctx.loadingText && _ctx.status !== "loading" || _ctx.status === "loading" && !_ctx.loadingIcon && !_ctx.loadingText ? new UTSJSONObject({
        r: common_vendor.n(common_vendor.unref(dotClass)),
        s: common_vendor.s(common_vendor.unref(dotStyle))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        t: common_vendor.n(common_vendor.unref(ns).e("content")),
        v: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        w: common_vendor.n(common_vendor.unref(loadmoreClass)),
        x: common_vendor.s(common_vendor.unref(loadmoreStyle)),
        y: common_vendor.o(loadMoreClickEvent)
      }));
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-000f22d9"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Component);
exports.Component = Component;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/loadmore/index.js.map
