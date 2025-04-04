"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_error = require("../error.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../is-empty.js");
function tnNavBack(indexUrl, delta = 1) {
  const indexPageUrl = uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(indexUrl, "/pages/index/index");
  const pages = getCurrentPages();
  if (pages === null || pages === void 0 ? void 0 : pages.length) {
    const firstPage = pages[0];
    if (pages.length === 1 && (!firstPage.route || (firstPage === null || firstPage === void 0 ? void 0 : firstPage.route) != indexPageUrl)) {
      return tnNavPage(indexPageUrl, "reLaunch");
    } else {
      common_vendor.index.navigateBack({
        delta
      });
      return Promise.resolve();
    }
  } else {
    return tnNavPage(indexPageUrl, "reLaunch");
  }
}
function tnNavPage(url, type = "navigateTo") {
  function handelNavFail(err) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("tnNavPage", `跳转页面失败: ${err}`);
  }
  return new Promise((resolve, reject) => {
    switch (type) {
      case "navigateTo":
        common_vendor.index.navigateTo({
          url,
          success: () => {
            resolve();
          },
          fail: (err) => {
            handelNavFail(err);
            reject(err);
          }
        });
        break;
      case "redirectTo":
        common_vendor.index.redirectTo({
          url,
          success: () => {
            resolve();
          },
          fail: (err) => {
            handelNavFail(err);
            reject(err);
          }
        });
        break;
      case "reLaunch":
        common_vendor.index.reLaunch({
          url,
          success: () => {
            resolve();
          },
          fail: (err) => {
            handelNavFail(err);
            reject(err);
          }
        });
        break;
      case "switchTab":
        common_vendor.index.switchTab({
          url,
          success: () => {
            resolve();
          },
          fail: (err) => {
            handelNavFail(err);
            reject(err);
          }
        });
    }
  });
}
exports.tnNavBack = tnNavBack;
exports.tnNavPage = tnNavPage;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/utils/uniapp/router.js.map
