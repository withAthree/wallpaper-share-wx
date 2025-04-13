"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_index = require("../../../store/index.js");
const api_index = require("../../../api/index.js");
const subPages_pages_detail_utils = require("./utils.js");
if (!Math) {
  (TnNotify + TnModal + TnLoading + TnIcon + common_vendor.unref(Layouts))();
}
const Layouts = () => "../../../layouts/index.js";
const TnLoading = () => "../../../uni_modules/tuniaoui-vue3/components/loading/src/loading.js";
const TnNotify = () => "../../../uni_modules/tuniaoui-vue3/components/notify/src/notify.js";
const TnModal = () => "../../../uni_modules/tuniaoui-vue3/components/modal/src/modal.js";
const TnIcon = () => "../../../uni_modules/tuniaoui-vue3/components/icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject({
  __name: "index",
  setup(__props) {
    const downTouch = common_vendor.ref(false);
    const shareTouch = common_vendor.ref(false);
    const downloadLoading = common_vendor.ref(false);
    const notifyRef = common_vendor.ref(null);
    const modalRef = common_vendor.ref(null);
    const baseUrl = api_index.BASE_URL.replace("/api", "");
    const smallImgName = common_vendor.ref("");
    const bigImgName = common_vendor.ref("");
    let smallImgUrl = "";
    const smallImgPath = common_vendor.computed(() => {
      return `${store_index.state.tempDir}/small_${smallImgName.value}`;
    });
    let smallFileDownloadSuccess = false;
    let bigImgUrl = "";
    const bigImgPath = common_vendor.computed(() => {
      return `${store_index.state.tempDir}/big_${bigImgName.value}`;
    });
    const bigFileDownloadSuccess = common_vendor.ref(false);
    const downloadBigImage = (fileMgr = null) => {
      try {
        fileMgr.accessSync(bigImgPath.value);
        common_vendor.index.__f__("log", "at subPages/pages/detail/index.uvue:71", "大图片存在");
        bigFileDownloadSuccess.value = true;
      } catch (err) {
        common_vendor.index.__f__("error", "at subPages/pages/detail/index.uvue:74", "大图片不存在: ", err);
        return preDownloadBigImg();
      }
    };
    const downloadSmallImage = (fileMgr = null) => {
      try {
        fileMgr.accessSync(smallImgPath.value);
        common_vendor.index.__f__("log", "at subPages/pages/detail/index.uvue:82", "小图片存在");
        smallFileDownloadSuccess = true;
      } catch (err) {
        common_vendor.index.__f__("error", "at subPages/pages/detail/index.uvue:85", "小图片不存在: ", err);
        preDownloadSmallImg();
      }
    };
    common_vendor.onLoad((param) => {
      const data = UTS.JSON.parse(param.data);
      smallImgUrl = `${baseUrl}${data.small}`;
      bigImgUrl = `${baseUrl}${data.big}`;
      smallImgName.value = subPages_pages_detail_utils.getName(data.small);
      bigImgName.value = subPages_pages_detail_utils.getName(data.big);
      const fileMgr = common_vendor.index.getFileSystemManager();
      downloadSmallImage(fileMgr);
      downloadBigImage(fileMgr);
    });
    function preDownloadSmallImg() {
      common_vendor.index.downloadFile({
        url: smallImgUrl,
        filePath: smallImgPath.value,
        header: new UTSJSONObject({
          token: common_vendor.index.getStorageSync("token"),
          "Content-Type": smallImgName.value.endsWith(".png") ? "image/png" : "image/jpeg"
        }),
        success: (res) => {
          common_vendor.index.__f__("log", "at subPages/pages/detail/index.uvue:114", "小图下载成功");
          smallFileDownloadSuccess = true;
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at subPages/pages/detail/index.uvue:117", "小图下载失败: ", err);
        }
      });
    }
    function preDownloadBigImg() {
      common_vendor.index.downloadFile({
        url: bigImgUrl,
        header: new UTSJSONObject({
          token: common_vendor.index.getStorageSync("token"),
          "Content-Type": bigImgName.value.endsWith(".png") ? "image/png" : "image/jpeg"
        }),
        filePath: bigImgPath.value,
        success: (res) => {
          common_vendor.index.__f__("log", "at subPages/pages/detail/index.uvue:129", "大图下载成功");
          bigFileDownloadSuccess.value = true;
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at subPages/pages/detail/index.uvue:133", "大图下载失败: ", err);
        }
      });
    }
    const downloadFailMsg = () => {
      var _a;
      (_a = notifyRef.value) === null || _a === void 0 ? void 0 : _a.show(new UTSJSONObject({
        msg: "保存失败",
        type: "danger",
        position: "center"
      }));
    };
    function downloadImg(filePath) {
      downloadLoading.value = true;
      common_vendor.index.saveImageToPhotosAlbum({
        filePath,
        success: () => {
          var _a;
          (_a = notifyRef.value) === null || _a === void 0 ? void 0 : _a.show(new UTSJSONObject({
            msg: "保存成功",
            type: "success",
            position: "center"
          }));
        },
        fail: () => {
          var _a;
          downloadFailMsg();
          (_a = modalRef.value) === null || _a === void 0 ? void 0 : _a.showModal(new UTSJSONObject({
            title: "未授权",
            content: "是否去设置相册授权",
            showCancel: true,
            confirmText: "授权",
            cancelText: "取消",
            mask: true,
            maskClosable: false,
            confirm: () => {
              common_vendor.index.openAppAuthorizeSetting();
            }
          }));
        },
        complete: () => {
          downloadLoading.value = false;
        }
      });
    }
    function handleClick() {
      var _a;
      (_a = modalRef.value) === null || _a === void 0 ? void 0 : _a.showModal(new UTSJSONObject({
        title: "下载",
        content: "观看激励视频广告获取原图",
        showCancel: true,
        confirmText: "获取原图",
        cancelText: "直接下载",
        mask: true,
        maskClosable: false,
        confirm: () => {
          if (bigFileDownloadSuccess.value) {
            downloadImg(bigImgPath.value);
          } else {
            downloadFailMsg();
          }
        },
        cancel: () => {
          if (smallFileDownloadSuccess) {
            downloadImg(smallImgPath.value);
          } else {
            downloadFailMsg();
          }
        }
      }));
    }
    common_vendor.onBeforeUnmount(() => {
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.sr(notifyRef, "03d25fa5-1,03d25fa5-0", new UTSJSONObject({
          "k": "notifyRef"
        })),
        b: common_vendor.sr(modalRef, "03d25fa5-2,03d25fa5-0", new UTSJSONObject({
          "k": "modalRef"
        })),
        c: common_vendor.unref(bigFileDownloadSuccess)
      }), common_vendor.unref(bigFileDownloadSuccess) ? new UTSJSONObject({
        d: `${common_vendor.unref(bigImgPath)}`
      }) : new UTSJSONObject({
        e: common_vendor.p(new UTSJSONObject({
          show: true,
          animation: true,
          mode: "circle",
          color: "rgb(239, 244, 255)",
          size: "50px"
        }))
      }), new UTSJSONObject({
        f: common_vendor.p(new UTSJSONObject({
          name: "folder-download-fill",
          color: "rgb(239, 244, 255)",
          size: "24px"
        })),
        g: !common_vendor.unref(downloadLoading)
      }), !common_vendor.unref(downloadLoading) ? new UTSJSONObject({}) : new UTSJSONObject({
        h: common_vendor.p(new UTSJSONObject({
          show: true,
          animation: true,
          mode: "circle",
          color: "rgb(239, 244, 255)"
        }))
      }), new UTSJSONObject({
        i: common_vendor.o(($event = null) => {
          return downTouch.value = true;
        }),
        j: common_vendor.o(($event = null) => {
          return downTouch.value = false;
        }),
        k: common_vendor.unref(downTouch) ? 1 : "",
        l: common_vendor.o(handleClick),
        m: common_vendor.p(new UTSJSONObject({
          name: "send-fill",
          color: "rgb(239, 244, 255)",
          size: "24px"
        })),
        n: common_vendor.o(($event = null) => {
          return shareTouch.value = true;
        }),
        o: common_vendor.o(($event = null) => {
          return shareTouch.value = false;
        }),
        p: common_vendor.unref(shareTouch) ? 1 : "",
        q: common_vendor.gei(_ctx, ""),
        r: common_vendor.p(new UTSJSONObject({
          page: "detail",
          id: common_vendor.gei(_ctx, "")
        }))
      }));
      return __returned__;
    };
  }
}));
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-03d25fa5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/subPages/pages/detail/index.js.map
