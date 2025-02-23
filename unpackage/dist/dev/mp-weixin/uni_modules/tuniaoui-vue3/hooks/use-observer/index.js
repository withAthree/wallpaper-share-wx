"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../utils/error.js");
const useObserver = (instance) => {
  if (!instance) {
    instance = common_vendor.getCurrentInstance();
  }
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("useObserver", "请在 setup 中使用 useObserver");
  }
  let observerInstance = null;
  const connectObserver = (selector, fn, fnOptions, options) => {
    disconnectObserver();
    observerInstance = common_vendor.index.createIntersectionObserver(instance, options);
    if (fnOptions.type === "relativeTo")
      observerInstance.relativeTo((fnOptions === null || fnOptions === void 0 ? void 0 : fnOptions.selector) || "", fnOptions.margins);
    else if (fnOptions.type === "relativeToViewport")
      observerInstance.relativeToViewport(fnOptions.margins);
    observerInstance.observe(selector, (res) => {
      fn && fn(res);
    });
  };
  const disconnectObserver = () => {
    if (observerInstance) {
      observerInstance.disconnect();
      observerInstance = null;
    }
  };
  return {
    connectObserver,
    disconnectObserver
  };
};
exports.useObserver = useObserver;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/hooks/use-observer/index.js.map
