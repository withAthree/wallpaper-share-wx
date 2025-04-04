"use strict";
const isJsonString = (value) => {
  if (typeof value == "string") {
    try {
      const obj = JSON.parse(value);
      if (typeof obj == "object" && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
};
exports.isJsonString = isJsonString;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/utils/validator/index.js.map
