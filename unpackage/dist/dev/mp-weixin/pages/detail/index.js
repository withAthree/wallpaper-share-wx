"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _easycom_tn_notify_1 = common_vendor.resolveComponent("tn-notify");
  const _easycom_tn_modal_1 = common_vendor.resolveComponent("tn-modal");
  const _easycom_tn_loading_1 = common_vendor.resolveComponent("tn-loading");
  const _easycom_tn_icon_1 = common_vendor.resolveComponent("tn-icon");
  (_easycom_tn_notify_1 + _easycom_tn_modal_1 + _easycom_tn_loading_1 + _easycom_tn_icon_1)();
}
const _easycom_tn_notify = () => "../../uni_modules/tuniaoui-vue3/components/notify/src/notify.js";
const _easycom_tn_modal = () => "../../uni_modules/tuniaoui-vue3/components/modal/src/modal.js";
const _easycom_tn_loading = () => "../../uni_modules/tuniaoui-vue3/components/loading/src/loading.js";
const _easycom_tn_icon = () => "../../uni_modules/tuniaoui-vue3/components/icon/src/icon.js";
if (!Math) {
  (_easycom_tn_notify + _easycom_tn_modal + _easycom_tn_loading + _easycom_tn_icon + common_vendor.unref(Layouts))();
}
const Layouts = () => "../../layouts/index.js";
const smallFileUrl = "https://th.wallhaven.cc/small/ex/exqg9w.jpg";
const bigFileUrl = "https://w.wallhaven.cc/full/3l/wallhaven-3lxkd6.jpg";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const downTouch = common_vendor.ref(false);
    const shareTouch = common_vendor.ref(false);
    const downloadLoading = common_vendor.ref(false);
    const notifyRef = common_vendor.ref(null);
    const modalRef = common_vendor.ref(null);
    const smallFileName = common_vendor.ref("exqg9w.jpg");
    const smallImgPath = common_vendor.computed(() => {
      return `${store_index.state.tempDir}/${smallFileName.value}`;
    });
    let smallFileDownloadSuccess = false;
    let smallDownloadPath = "";
    const bigFileName = common_vendor.ref("wallhaven-3lxkd6.jpg");
    const bigImgPath = common_vendor.computed(() => {
      return `${store_index.state.tempDir}/${bigFileName.value}`;
    });
    const bigFileDownloadSuccess = common_vendor.ref(false);
    const bigDownloadPath = common_vendor.ref("");
    common_vendor.onBeforeMount(() => {
      common_vendor.index.setNavigationBarTitle({
        title: "1920 × 1080"
      });
      const fileMgr = common_vendor.index.getFileSystemManager();
      try {
        fileMgr.accessSync(`${store_index.state.tempDir}/${bigFileName.value}`);
        common_vendor.index.__f__("log", "at pages/detail/index.uvue:70", "图片存在");
        bigFileDownloadSuccess.value = true;
      } catch (err) {
        preDownloadImg();
        common_vendor.index.__f__("error", "at pages/detail/index.uvue:74", "图片不存在", err);
      }
    });
    function preDownloadImg() {
      common_vendor.index.downloadFile({
        url: smallFileUrl,
        filePath: smallImgPath.value,
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/detail/index.uvue:84", "小图下载成功");
          smallFileDownloadSuccess = true;
          smallDownloadPath = res.filePath;
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/detail/index.uvue:88", "小图下载失败: ", err);
        }
      });
      common_vendor.index.downloadFile({
        url: bigFileUrl,
        filePath: bigImgPath.value,
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/detail/index.uvue:94", "大图下载成功");
          bigFileDownloadSuccess.value = true;
          bigDownloadPath.value = res.filePath;
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/detail/index.uvue:99", "大图下载失败: ", err);
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
    function downloadImg(filePath = null) {
      var _a;
      const albumAuthorized = common_vendor.index.getAppAuthorizeSetting().albumAuthorized;
      common_vendor.index.__f__("log", "at pages/detail/index.uvue:114", 123, albumAuthorized);
      if (albumAuthorized === "authorized") {
        downloadLoading.value = true;
        common_vendor.index.saveImageToPhotosAlbum({
          filePath,
          success: () => {
            var _a2;
            (_a2 = notifyRef.value) === null || _a2 === void 0 ? void 0 : _a2.show(new UTSJSONObject({
              msg: "保存成功",
              type: "success",
              position: "center"
            }));
          },
          fail: () => {
            downloadFailMsg();
          },
          complete: () => {
            downloadLoading.value = false;
          }
        });
      } else if (albumAuthorized === "denied") {
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
      }
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
            downloadImg(bigDownloadPath.value);
          } else {
            downloadFailMsg();
          }
        },
        cancel: () => {
          if (smallFileDownloadSuccess) {
            downloadImg(smallDownloadPath);
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
        a: common_vendor.sr(notifyRef, "e8100d2a-1,e8100d2a-0", new UTSJSONObject({
          "k": "notifyRef"
        })),
        b: common_vendor.sr(modalRef, "e8100d2a-2,e8100d2a-0", new UTSJSONObject({
          "k": "modalRef"
        })),
        c: common_vendor.unref(bigFileDownloadSuccess)
      }), common_vendor.unref(bigFileDownloadSuccess) ? new UTSJSONObject({
        d: `${_ctx.uni.env.USER_DATA_PATH}/temp/${common_vendor.unref(bigFileName)}`
      }) : new UTSJSONObject({
        e: common_vendor.p(new UTSJSONObject({
          show: true,
          animation: true,
          mode: "circle",
          color: "#fff",
          size: "50px"
        }))
      }), new UTSJSONObject({
        f: common_vendor.p(new UTSJSONObject({
          name: "folder-download-fill",
          color: "#fff",
          size: "24px"
        })),
        g: !common_vendor.unref(downloadLoading)
      }), !common_vendor.unref(downloadLoading) ? new UTSJSONObject({}) : new UTSJSONObject({
        h: common_vendor.p(new UTSJSONObject({
          show: true,
          animation: true,
          mode: "circle",
          color: "#fff"
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
          color: "#fff",
          size: "24px"
        })),
        n: common_vendor.o(($event = null) => {
          return shareTouch.value = true;
        }),
        o: common_vendor.o(($event = null) => {
          return shareTouch.value = false;
        }),
        p: common_vendor.unref(shareTouch) ? 1 : "",
        q: _ctx.virtualHostId,
        r: common_vendor.p(new UTSJSONObject({
          page: "detail",
          id: _ctx.virtualHostId
        }))
      }));
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e8100d2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/index.js.map
