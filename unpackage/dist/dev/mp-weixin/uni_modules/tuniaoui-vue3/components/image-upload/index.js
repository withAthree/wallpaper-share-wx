"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_imageUpload_src_imageUpload = require("./src/image-upload.js");
const uni_modules_tuniaouiVue3_components_imageUpload_src_composables_useImageUpload = require("./src/composables/use-image-upload.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "image-upload",
  props: uni_modules_tuniaouiVue3_components_imageUpload_src_imageUpload.imageUploadProps,
  emits: uni_modules_tuniaouiVue3_components_imageUpload_src_imageUpload.imageUploadEmits,
  setup(__props, _a) {
    var __expose = _a.expose;
    const props = __props;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("image-upload");
    const nsItem = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("image-upload-item");
    const _b = uni_modules_tuniaouiVue3_components_imageUpload_src_composables_useImageUpload.useImageUpload(props), fileList = _b.fileList, isExceedMaxCount = _b.isExceedMaxCount, chooseFile = _b.chooseFile, retryUploadFile = _b.retryUploadFile, retryAllUpload = _b.retryAllUpload, customUploadHandle = _b.customUploadHandle, removeFileEvent = _b.removeFileEvent, clearAllFile = _b.clearAllFile, previewImage = _b.previewImage;
    __expose(new UTSJSONObject({
      /**
       * @description 手动选择文件
       */
      chooseFile,
      /**
       * @description 手动上传图片
       */
      upload: customUploadHandle,
      /**
       * @description 重新上传失败的文件
       */
      retry: retryAllUpload,
      /**
       * @description 清空所有文件
       */
      clear: clearAllFile
    }));
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.f(common_vendor.unref(fileList), (item = null, index = null, i0 = null) => {
          return common_vendor.e(new UTSJSONObject({
            a: item.url,
            b: common_vendor.n(common_vendor.unref(nsItem).is("finish", item.status === "done")),
            c: common_vendor.o(($event = null) => {
              return common_vendor.unref(previewImage)(index);
            }, index)
          }), _ctx.showRemove && !_ctx.disabled ? new UTSJSONObject({
            d: "5d00658a-0-" + i0,
            e: common_vendor.p(new UTSJSONObject({
              name: "close-fill"
            })),
            f: common_vendor.n(common_vendor.unref(nsItem).em("remove", "icon")),
            g: common_vendor.n(common_vendor.unref(nsItem).e("remove")),
            h: common_vendor.o(($event = null) => {
              return common_vendor.unref(removeFileEvent)(index);
            }, index)
          }) : new UTSJSONObject({}), new UTSJSONObject({
            i: item.status === "failed" && !_ctx.disabled
          }), item.status === "failed" && !_ctx.disabled ? new UTSJSONObject({
            j: "5d00658a-1-" + i0,
            k: common_vendor.p(new UTSJSONObject({
              name: "refresh-simple"
            })),
            l: common_vendor.n(common_vendor.unref(nsItem).e("retry")),
            m: common_vendor.o(($event = null) => {
              return common_vendor.unref(retryUploadFile)(index);
            }, index)
          }) : new UTSJSONObject({}), new UTSJSONObject({
            n: _ctx.showUploadProgress && item.progress > 0 && item.progress < 100 && !_ctx.disabled
          }), _ctx.showUploadProgress && item.progress > 0 && item.progress < 100 && !_ctx.disabled ? new UTSJSONObject({
            o: common_vendor.n(common_vendor.unref(nsItem).em("progress", "wave")),
            p: `${-300 - item.progress}%`,
            q: common_vendor.n(common_vendor.unref(nsItem).em("progress", "wave")),
            r: `${-300 - item.progress}%`,
            s: common_vendor.n(common_vendor.unref(nsItem).e("progress")),
            t: common_vendor.n(common_vendor.unref(nsItem).is("finish", item.progress === 100))
          }) : new UTSJSONObject({}), new UTSJSONObject({
            v: "uploadImage-" + i0,
            w: common_vendor.r("uploadImage", new UTSJSONObject({
              data: item
            }), i0),
            x: index
          }));
        }),
        b: common_vendor.n(common_vendor.unref(nsItem).e("image")),
        c: _ctx.showRemove && !_ctx.disabled,
        d: common_vendor.n(common_vendor.unref(nsItem).b()),
        e: common_vendor.n(common_vendor.unref(nsItem).is("custom", !!_ctx.$slots.uploadImage)),
        f: !common_vendor.unref(isExceedMaxCount) && !_ctx.disabled
      }), !common_vendor.unref(isExceedMaxCount) && !_ctx.disabled ? new UTSJSONObject({
        g: common_vendor.p(new UTSJSONObject({
          name: "add-fill"
        })),
        h: common_vendor.n(common_vendor.unref(nsItem).em("add-btn", "icon")),
        i: common_vendor.n(common_vendor.unref(nsItem).e("add-btn")),
        j: common_vendor.n(common_vendor.unref(nsItem).b()),
        k: common_vendor.o((...args) => {
          return common_vendor.unref(chooseFile) && common_vendor.unref(chooseFile)(...args);
        })
      }) : new UTSJSONObject({}), new UTSJSONObject({
        l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        m: common_vendor.n(common_vendor.unref(ns).b())
      }));
      return __returned__;
    };
  }
});
const ImageUpload = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5d00658a"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(ImageUpload);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/image-upload/index.js.map
