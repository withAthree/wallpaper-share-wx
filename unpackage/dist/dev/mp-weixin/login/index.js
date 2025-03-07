"use strict";
const common_vendor = require("../common/vendor.js");
const getLoginCode = () => {
  return new Promise((resolve, reject) => {
    common_vendor.index.login({
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      }
    });
  });
};
exports.getLoginCode = getLoginCode;
//# sourceMappingURL=../../.sourcemap/mp-weixin/login/index.js.map
