"use strict";
const common_vendor = require("../common/vendor.js");
const TIMEOUT = 10 * 1e3;
function newHttp() {
  return new UTSJSONObject({
    post: (url = null, params = null) => {
      return new Promise((resolve, reject) => {
        common_vendor.index.request({
          url,
          method: "POST",
          data: params,
          header: new UTSJSONObject({
            token: common_vendor.index.getStorageSync("token"),
            "Content-Type": "application/json;charset=UTF-8"
          }),
          timeout: TIMEOUT,
          success: (res) => {
            resolve(res);
          },
          fail: (err) => {
            reject(err);
          }
        });
      });
    },
    get: (url = null, params = null) => {
      return new Promise((resolve, reject) => {
        common_vendor.index.request({
          url,
          method: "GET",
          data: params,
          header: new UTSJSONObject({
            token: common_vendor.index.getStorageSync("token"),
            "Content-Type": "application/json;charset=UTF-8"
          }),
          timeout: TIMEOUT,
          success: (res) => {
            resolve(res);
          },
          fail: (err) => {
            reject(err);
          }
        });
      });
    }
  });
}
const http = newHttp();
exports.http = http;
//# sourceMappingURL=../../.sourcemap/mp-weixin/request/index.js.map
