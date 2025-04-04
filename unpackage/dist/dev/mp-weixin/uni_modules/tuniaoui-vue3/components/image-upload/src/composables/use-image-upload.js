"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../../libs/lodash/is-boolean.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_components_imageUpload_src_composables_useUploadHandleFunction = require("./use-upload-handle-function.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const useImageUpload = (props) => {
  const emit = common_vendor.getCurrentInstance().emit;
  const _a = uni_modules_tuniaouiVue3_components_imageUpload_src_composables_useUploadHandleFunction.useUploadHandleFunction(props), chooseImage = _a.chooseImage, uploadProcess = _a.uploadProcess, checkFileSizeAndExtension = _a.checkFileSizeAndExtension, showErrorTips = _a.showErrorTips;
  const formItem = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem().formItem;
  const fileList = common_vendor.ref([]);
  let isInnerUpdate = false;
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val) => {
    if (isInnerUpdate) {
      isInnerUpdate = false;
      return;
    }
    fileList.value = val.map((item) => {
      return {
        url: item,
        status: "done",
        progress: 100
      };
    });
  }, {
    immediate: true
  });
  const isExceedMaxCount = common_vendor.computed(() => {
    return fileList.value.length >= props.limit;
  });
  const currentRemainFileCount = common_vendor.computed(() => {
    if (props.multiple) {
      return props.limit - fileList.value.length;
    } else {
      return props.limit - fileList.value.length > 0 ? 1 : 0;
    }
  });
  const chooseFile = () => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      const disabled = props.disabled, action = props.action, customUploadHandler = props.customUploadHandler;
      if (disabled)
        return;
      if (!action && !customUploadHandler) {
        showErrorTips("请设置action或者自定义图片上传处理函数");
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnImageUpload", "请设置action或者自定义图片上传处理函数");
        return;
      }
      const prevUploadedFileCount = fileList.value.length;
      chooseImage(currentRemainFileCount.value).then((res) => {
        let selectFile = res;
        const checkFailFiles = checkFileSizeAndExtension(selectFile);
        if (checkFailFiles.length) {
          showErrorTips("文件格式或大小不符合要求");
          emit("oversizeOrNoSupport", checkFailFiles);
          selectFile = selectFile.filter((item) => {
            return !checkFailFiles.includes(item);
          });
        }
        fileList.value.push(...selectFile.map((item) => {
          const url = item.path;
          return {
            url,
            status: "ready",
            progress: 0,
            file: item
          };
        }));
        if (props.autoUpload && selectFile.length)
          uploadFile(prevUploadedFileCount);
      }).catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnImageUpload", `选择图片失败: ${err}`);
        showErrorTips((err === null || err === void 0 ? void 0 : err.errMsg) || "选择图片失败");
      });
    });
  };
  const handleUploadEvent = (item, index, uploadSingle = false) => {
    uploadProcess(item).then((res) => {
      if (res) {
        handleUploadSuccess(item);
      } else {
        handleUploadError(item, "上传失败");
      }
    }).catch((err) => {
      handleUploadError(item, err);
    }).finally(() => {
      if (!uploadSingle)
        uploadFile(index + 1);
    });
  };
  const uploadFile = (startIndex, uploadSingle = false) => {
    const autoUpload = props.autoUpload, beforeUpload = props.beforeUpload;
    const autoNextUpload = autoUpload && !uploadSingle;
    if (startIndex >= fileList.value.length) {
      if (props.autoRemoveFaildFile)
        handleUploadCompleteFailFile();
      return;
    }
    const fileItem = fileList.value[startIndex];
    if (fileItem.progress === 100) {
      fileItem.status = "done";
      fileItem.uploadTask = void 0;
      if (autoNextUpload)
        uploadFile(startIndex + 1);
      return;
    }
    if (!beforeUpload) {
      handleUploadEvent(fileItem, startIndex, uploadSingle);
      return;
    }
    const shouldUpload = beforeUpload(fileItem.file);
    const isBeforeUploadPromiseOrBoolean = [
      common_vendor.isPromise(shouldUpload),
      uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldUpload)
    ].includes(true);
    if (!isBeforeUploadPromiseOrBoolean) {
      uni_modules_tuniaouiVue3_utils_error.throwError("[TnImageUpload]", "beforeUpload返回值必须是Promise或者Boolean");
    }
    if (common_vendor.isPromise(shouldUpload)) {
      shouldUpload.then((res) => {
        if (res)
          handleUploadEvent(fileItem, startIndex, uploadSingle);
        else {
          removeFile(startIndex);
          if (autoNextUpload)
            uploadFile(startIndex);
        }
      }).catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnImageUpload", `beforeUpload出错: ${err}`);
        fileItem.status = "failed";
      });
    } else {
      if (shouldUpload)
        handleUploadEvent(fileItem, startIndex, uploadSingle);
      else {
        removeFile(startIndex);
        if (autoNextUpload)
          uploadFile(startIndex);
      }
    }
  };
  const getUploadSuceesFileUrlValue = () => {
    return fileList.value.filter((item) => {
      return item.status === "done";
    }).map((item) => {
      return item.url;
    });
  };
  const uploadSuccessFileListChange = () => {
    isInnerUpdate = true;
    const value = getUploadSuceesFileUrlValue();
    emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    common_vendor.nextTick$1(() => {
      var _a2;
      emit(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
      if (props.validateEvent) {
        (_a2 = formItem === null || formItem === void 0 ? void 0 : formItem.validate) === null || _a2 === void 0 ? void 0 : _a2.call(formItem, "change").catch((err) => {
          uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
        });
      }
    });
  };
  const handleUploadSuccess = (item) => {
    item.status = "done";
    item.progress = 100;
    item.uploadTask = void 0;
    item.file = void 0;
    emit("success", item);
    uploadSuccessFileListChange();
  };
  const handleUploadError = (item, errorMsg) => {
    item.status = "failed";
    item.progress = 0;
    item.uploadTask = void 0;
    item.file = void 0;
    showErrorTips(errorMsg);
    emit("fail", new Error(errorMsg), item);
  };
  const handleUploadCompleteFailFile = () => {
    const tempFileList = [...fileList.value];
    tempFileList.forEach((item, index) => {
      if (item.status === "failed") {
        removeFile(index);
      }
    });
  };
  const retryUploadFile = (index) => {
    const fileItem = fileList.value[index];
    fileItem.status = "ready";
    fileItem.progress = 0;
    uploadFile(index, true);
  };
  const retryAllUpload = () => {
    const firstFailedFileIndex = fileList.value.findIndex((item) => {
      return item.status === "failed";
    });
    uploadFile(firstFailedFileIndex);
  };
  const customUploadHandle = () => {
    if (!fileList.value.length)
      return;
    uploadFile(0);
  };
  const removeFile = (index) => {
    const fileItem = fileList.value[index];
    if (fileItem.status === "uploading" && fileItem.uploadTask && fileItem.progress > 0 && fileItem.progress < 100) {
      fileItem.uploadTask.abort();
    }
    fileList.value.splice(index, 1);
    if (fileItem.status === "done") {
      emit("remove", fileItem.url);
      uploadSuccessFileListChange();
    }
  };
  const removeFileEvent = (index) => {
    const disabled = props.disabled, beforeRemove = props.beforeRemove;
    if (disabled)
      return;
    const fileItem = fileList.value[index];
    if (!fileItem)
      return;
    common_vendor.index.showModal({
      title: "操作提示",
      content: "确认需要移除该图片吗?",
      showCancel: true,
      cancelText: "取 消",
      confirmText: "确 认",
      success: (res) => {
        if (res.confirm) {
          if (!beforeRemove) {
            removeFile(index);
            return;
          }
          const shouldRemove = beforeRemove(fileItem);
          const isShouldRemovePromiseOrBoolean = [
            common_vendor.isPromise(shouldRemove),
            uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldRemove)
          ].includes(true);
          if (!isShouldRemovePromiseOrBoolean) {
            uni_modules_tuniaouiVue3_utils_error.throwError("[TnImageUpload]", "beforeRemove返回值必须是Promise或者Boolean");
          }
          if (common_vendor.isPromise(shouldRemove)) {
            shouldRemove.then((res2) => {
              if (res2)
                removeFile(index);
            }).catch((err) => {
              uni_modules_tuniaouiVue3_utils_error.debugWarn("TnImageUpload", `beforeRemove出错: ${err}`);
            });
          } else {
            if (shouldRemove)
              removeFile(index);
          }
        }
      }
    });
  };
  const clearAllFile = () => {
    fileList.value.forEach((item) => {
      if (item.status === "uploading" && item.uploadTask && item.progress > 0 && item.progress < 100) {
        item.uploadTask.abort();
      }
    });
    fileList.value = [];
    uploadSuccessFileListChange();
  };
  const previewImage = (index) => {
    const previewImageList = fileList.value.filter((item) => {
      return item.status === "done";
    }).map((item) => {
      return item.url;
    });
    common_vendor.index.previewImage({
      current: index,
      urls: previewImageList
    });
    emit("preview", previewImageList[index]);
  };
  return {
    fileList,
    isExceedMaxCount,
    chooseFile,
    retryUploadFile,
    retryAllUpload,
    customUploadHandle,
    removeFileEvent,
    clearAllFile,
    previewImage
  };
};
exports.useImageUpload = useImageUpload;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/image-upload/src/composables/use-image-upload.js.map
