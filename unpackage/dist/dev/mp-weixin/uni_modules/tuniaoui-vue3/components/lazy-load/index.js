"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_constants_imgMode = require("../../constants/img-mode.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_components_lazyLoad_src_composables_lazyLoadCustom = require("./src/composables/lazy-load-custom.js");
const uni_modules_tuniaouiVue3_components_lazyLoad_src_composables_useLazyLoad = require("./src/composables/use-lazy-load.js");
const lazyLoadProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 图片地址
   */
  src: String,
  /**
   * @description 图片高度
   */
  height: String,
  /**
   * @description 图片宽度
   */
  width: String,
  /**
   * @description 图片裁剪模式
   */
  mode: {
    type: String,
    values: uni_modules_tuniaouiVue3_constants_imgMode.componentImgModes,
    default: "aspectFill"
  },
  /**
   * @description 开始加载图片的位置，单位为 px，如果设置为负数表示距离底部还有多少个像素就开始加载
   */
  threshold: {
    type: Number,
    default: 100
  },
  /**
   * @description 是否开启过度效果
   */
  transition: {
    type: Boolean,
    default: true
  }
});
const lazyLoadEmits = {
  /**
   * @description 图片加载完成
   */
  loaded: () => {
    return true;
  },
  /**
   * @description 图片加载失败
   */
  error: () => {
    return true;
  }
};
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
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "lazy-load", props: lazyLoadProps, emits: lazyLoadEmits, setup(__props) {
  const props = __props;
  const _a = uni_modules_tuniaouiVue3_components_lazyLoad_src_composables_useLazyLoad.useLazyLoad(props), componentId = _a.componentId, imageStatus = _a.imageStatus, showImage = _a.showImage, handleImageLoadedSuccess = _a.handleImageLoadedSuccess, handleImageLoadedFailed = _a.handleImageLoadedFailed;
  const _b = uni_modules_tuniaouiVue3_components_lazyLoad_src_composables_lazyLoadCustom.useLazyLoadCustomStyle(props), ns = _b.ns, lazyLoadStyle = _b.lazyLoadStyle;
  return (_ctx = null, _cache = null) => {
    const __returned__ = common_vendor.e(new UTSJSONObject({
      a: common_vendor.unref(imageStatus) === "loading"
    }), common_vendor.unref(imageStatus) === "loading" ? new UTSJSONObject({
      b: common_vendor.p(new UTSJSONObject({
        name: "loading"
      })),
      c: common_vendor.n(common_vendor.unref(ns).e("loading__icon")),
      d: common_vendor.n(common_vendor.unref(ns).e("loading")),
      e: common_vendor.n(common_vendor.unref(ns).e("container"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      f: common_vendor.unref(showImage) && common_vendor.unref(imageStatus) !== "error"
    }), common_vendor.unref(showImage) && common_vendor.unref(imageStatus) !== "error" ? new UTSJSONObject({
      g: common_vendor.n(common_vendor.unref(ns).e("image")),
      h: common_vendor.n(common_vendor.unref(ns).is("animation", common_vendor.unref(imageStatus) === "loaded" && _ctx.transition)),
      i: common_vendor.n(common_vendor.unref(ns).is("no-animation", common_vendor.unref(imageStatus) === "loaded" && !_ctx.transition)),
      j: _ctx.src,
      k: _ctx.mode,
      l: common_vendor.o((...args) => {
        return common_vendor.unref(handleImageLoadedSuccess) && common_vendor.unref(handleImageLoadedSuccess)(...args);
      }),
      m: common_vendor.o((...args) => {
        return common_vendor.unref(handleImageLoadedFailed) && common_vendor.unref(handleImageLoadedFailed)(...args);
      }),
      n: common_vendor.n(common_vendor.unref(ns).e("container"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      o: common_vendor.unref(imageStatus) === "error"
    }), common_vendor.unref(imageStatus) === "error" ? new UTSJSONObject({
      p: common_vendor.p(new UTSJSONObject({
        name: "image-fill"
      })),
      q: common_vendor.n(common_vendor.unref(ns).e("error")),
      r: common_vendor.n(common_vendor.unref(ns).e("container"))
    }) : new UTSJSONObject({}), new UTSJSONObject({
      s: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(componentId)), "view"),
      t: common_vendor.n(common_vendor.unref(ns).b()),
      v: common_vendor.n(common_vendor.unref(ns).is("show-image", common_vendor.unref(showImage) && common_vendor.unref(imageStatus) === "loaded")),
      w: common_vendor.s(common_vendor.unref(lazyLoadStyle))
    }));
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-284a230a"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(Component);
exports.Component = Component;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/lazy-load/index.js.map
