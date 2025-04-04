"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_validator_index = require("../../../../utils/validator/index.js");
function useUploadHandleFunction(props) {
  const chooseImage = (count) => {
    return new Promise((resolve, reject) => {
      common_vendor.index.chooseImage({
        count,
        sizeType: props.sizeType,
        // extension: props.extensions,
        sourceType: props.sourceType,
        success: (res) => {
          resolve(common_vendor.isArray(res.tempFiles) ? res.tempFiles : [res.tempFiles]);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const uploading = common_vendor.ref(false);
  common_vendor.watch(() => {
    return uploading.value;
  }, (val) => {
    if (props.showErrorTips) {
      if (val)
        common_vendor.index.showLoading({ title: "上传中" });
      else
        common_vendor.index.hideLoading();
    }
  });
  const uploadProcess = (item) => {
    const customUploadHandler = props.customUploadHandler, customUploadCallback = props.customUploadCallback;
    if (uploading.value)
      return Promise.reject("有文件正在上传");
    return new Promise((resolve, reject) => {
      if (customUploadHandler) {
        const uploadHandlerResult = customUploadHandler(item.file);
        const isUploadHandlePromiseOrString = [
          common_vendor.isPromise(uploadHandlerResult),
          common_vendor.isString(uploadHandlerResult)
        ].includes(true);
        if (!isUploadHandlePromiseOrString) {
          common_vendor.index.__f__("error", "at uni_modules/tuniaoui-vue3/components/image-upload/src/composables/use-upload-handle-function.ts:57", "[TnImageUpload]自定义上传处理函数必须返回Promise和String");
          reject("自定义上传处理函数必须返回Promise和String");
          return;
        }
        uploading.value = true;
        item.status = "uploading";
        if (common_vendor.isPromise(uploadHandlerResult)) {
          uploadHandlerResult.then((res) => {
            if (res) {
              item.url = res;
              resolve(true);
            } else {
              resolve(false);
            }
          }).catch((err) => {
            common_vendor.index.__f__("error", "at uni_modules/tuniaoui-vue3/components/image-upload/src/composables/use-upload-handle-function.ts:77", "[TnImageUpload]上传文件发生错误", err);
            reject((err === null || err === void 0 ? void 0 : err.errMsg) || "上传文件发生错误");
          }).finally(() => {
            uploading.value = false;
          });
        } else {
          if (uploadHandlerResult) {
            item.url = uploadHandlerResult;
            resolve(true);
          } else {
            resolve(false);
          }
          uploading.value = false;
        }
      } else {
        uploading.value = true;
        item.status = "uploading";
        const task = common_vendor.index.uploadFile({
          url: props.action,
          filePath: item.url,
          name: props.name,
          formData: props.formData,
          header: props.header,
          success: (res) => {
            if (customUploadCallback) {
              const customUploadCallbackResult = customUploadCallback(res);
              const isCustomUploadCallbackPromiseOrString = [
                common_vendor.isPromise(customUploadCallbackResult),
                common_vendor.isString(customUploadCallbackResult)
              ].includes(true);
              if (!isCustomUploadCallbackPromiseOrString) {
                common_vendor.index.__f__("error", "at uni_modules/tuniaoui-vue3/components/image-upload/src/composables/use-upload-handle-function.ts:113", "[TnImageUpload]自定义上传回调函数必须返回Promise和String");
                reject("自定义上传回调函数必须返回Promise和String");
                return;
              }
              if (common_vendor.isPromise(customUploadCallbackResult)) {
                customUploadCallbackResult.then((res2) => {
                  if (res2) {
                    item.url = res2;
                    resolve(true);
                  } else {
                    resolve(false);
                  }
                }).catch((err) => {
                  common_vendor.index.__f__("error", "at uni_modules/tuniaoui-vue3/components/image-upload/src/composables/use-upload-handle-function.ts:131", "[TnImageUpload]上传文件发生错误", err);
                  reject((err === null || err === void 0 ? void 0 : err.errMsg) || "上传文件发生错误");
                });
              } else {
                if (customUploadCallbackResult) {
                  item.url = customUploadCallbackResult;
                  resolve(true);
                } else {
                  resolve(false);
                }
              }
            } else {
              const statusCode = res.statusCode, resData = res.data;
              if (![200, 201, 204].includes(statusCode)) {
                common_vendor.index.__f__("error", "at uni_modules/tuniaoui-vue3/components/image-upload/src/composables/use-upload-handle-function.ts:146", "[TnImageUpload]上传文件发生错误", res);
                reject((res === null || res === void 0 ? void 0 : res.errMsg) || "上传文件发生错误");
                return;
              } else {
                const data = uni_modules_tuniaouiVue3_utils_validator_index.isJsonString(resData) ? JSON.parse(resData) : resData;
                if (data.code === 200 && data.data.errCode === 0) {
                  item.url = data.data.url;
                  resolve(true);
                } else {
                  common_vendor.index.__f__("error", "at uni_modules/tuniaoui-vue3/components/image-upload/src/composables/use-upload-handle-function.ts:158", "[TnImageUpload]上传文件发生错误", res);
                  reject(uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(data === null || data === void 0 ? void 0 : data.message, (data === null || data === void 0 ? void 0 : data.msg) || "上传文件发生错误"));
                }
              }
            }
          },
          fail: (err) => {
            common_vendor.index.__f__("error", "at uni_modules/tuniaoui-vue3/components/image-upload/src/composables/use-upload-handle-function.ts:170", "[TnImageUpload]上传文件发生错误", err);
            reject((err === null || err === void 0 ? void 0 : err.errMsg) || "上传文件发生错误");
          },
          complete: () => {
            uploading.value = false;
            resolve(true);
          }
        });
        item.uploadTask = task;
        task.onProgressUpdate((res) => {
          if (res.progress > 0) {
            item.progress = res.progress;
          }
        });
      }
    });
  };
  const checkFileSizeAndExtension = (files) => {
    const extensions = props.extensions, maxSize = props.maxSize;
    const extReg = /.+\./;
    return files.filter((item) => {
      let fileExt = "";
      fileExt = item.path.replace(extReg, "").toLowerCase();
      return !extensions.some((ext) => {
        return ext.toLowerCase() === fileExt;
      }) || item.size > maxSize;
    });
  };
  const showErrorTips = (msg) => {
    if (!props.showErrorTips)
      return;
    common_vendor.index.showToast({
      icon: "none",
      title: msg
    });
  };
  return {
    chooseImage,
    uploadProcess,
    checkFileSizeAndExtension,
    showErrorTips
  };
}
exports.useUploadHandleFunction = useUploadHandleFunction;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/image-upload/src/composables/use-upload-handle-function.js.map
