"use strict";
const common_vendor = require("../common/vendor.js");
const SECRET_KEY = "DSB1123456712345222244";
const decryptUrl = (encryptedData = null) => {
  const key = common_vendor.CryptoJS.enc.Base64.parse(SECRET_KEY);
  const decryptedBytes = common_vendor.CryptoJS.AES.decrypt(encryptedData, key, new UTSJSONObject({
    mode: common_vendor.CryptoJS.mode.ECB,
    padding: common_vendor.CryptoJS.pad.Pkcs7
  }));
  return decryptedBytes.toString(common_vendor.CryptoJS.enc.Utf8);
};
exports.decryptUrl = decryptUrl;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/index.js.map
