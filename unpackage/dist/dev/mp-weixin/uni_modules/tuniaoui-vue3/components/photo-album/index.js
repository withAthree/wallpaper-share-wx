"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_photoAlbum_src_photoAlbum = require("./src/photo-album.js");
const uni_modules_tuniaouiVue3_components_photoAlbum_src_composables_usePhotoAlbum = require("./src/composables/use-photo-album.js");
if (!Math) {
  TnLazyLoad();
}
const TnLazyLoad = () => "../lazy-load/src/lazy-load.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "photo-album",
  props: uni_modules_tuniaouiVue3_components_photoAlbum_src_photoAlbum.photoAlbumProps,
  emits: uni_modules_tuniaouiVue3_components_photoAlbum_src_photoAlbum.photoAlbumEmits,
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("photo-album");
    const _b = uni_modules_tuniaouiVue3_components_photoAlbum_src_composables_usePhotoAlbum.usePhotoAlbum(props, emits), imageData = _b.imageData, imageClickEvent = _b.imageClickEvent;
    const containerStyle = common_vendor.computed(() => {
      const style = new UTSJSONObject({});
      let width = `calc(100% / ${props.column} - 20rpx)`;
      style.width = style.paddingBottom = width;
      return style;
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.f(common_vendor.unref(imageData), (item = null, index = null, i0 = null) => {
          return common_vendor.e(_ctx.lazyLoad ? {
            a: "03636d96-0-" + i0,
            b: common_vendor.p({
              src: item,
              mode: props.imgMode
            })
          } : {
            c: common_vendor.n(common_vendor.unref(ns).e("item__image")),
            d: item,
            e: props.imgMode
          }, {
            f: index,
            g: common_vendor.o(($event = null) => {
              return common_vendor.unref(imageClickEvent)(index);
            }, index)
          });
        }),
        b: _ctx.lazyLoad,
        c: common_vendor.n(common_vendor.unref(ns).e("item")),
        d: common_vendor.n(common_vendor.unref(ns).e("container")),
        e: common_vendor.s(containerStyle.value),
        f: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        g: common_vendor.n(common_vendor.unref(ns).b())
      };
      return __returned__;
    };
  }
});
const PhotoAlbum = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-03636d96"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(PhotoAlbum);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/photo-album/index.js.map
