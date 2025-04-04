"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const useStickySupport = () => {
  const supportCSSSticky = common_vendor.ref(null);
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSticky", "请在 setup 中使用 useStickySupport");
  }
  const checkCSSStickySupportForAPPAndMPWX = (selector) => {
    common_vendor.index.createSelectorQuery().in(instance).select(selector).fields(
      {
        computedStyle: ["position"]
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {
      }
    ).exec((res) => {
      if ("sticky" === res[0].position) {
        supportCSSSticky.value = true;
      } else {
        supportCSSSticky.value = false;
      }
    });
  };
  const checkCSSStickySupportForDevice = () => {
    const _a = common_vendor.index.getSystemInfoSync(), platform = _a.platform, system = _a.system;
    const os = platform.toLowerCase();
    const osVersion = system;
    if (os === "android" && Number(osVersion.replace("Android", "")) > 8 || os === "ios") {
      supportCSSSticky.value = true;
    } else {
      supportCSSSticky.value = false;
    }
  };
  const checkCSSStickySupport = (selector) => {
    return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
      if (!supportCSSSticky.value) {
        checkCSSStickySupportForDevice();
      }
      if (!supportCSSSticky.value) {
        checkCSSStickySupportForAPPAndMPWX(selector);
      }
    });
  };
  return {
    supportCSSSticky,
    checkCSSStickySupport
  };
};
exports.useStickySupport = useStickySupport;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/sticky/src/composables/use-sticky-support.js.map
