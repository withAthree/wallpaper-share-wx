"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../../libs/lodash/is-boolean.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_uniapp_router = require("../../../../utils/uniapp/router.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const useNavbar = (props) => {
  const slots = common_vendor.getCurrentInstance().slots;
  const navbackButtonType = common_vendor.computed(() => {
    if (slots === null || slots === void 0 ? void 0 : slots.back)
      return "custom";
    if (props === null || props === void 0 ? void 0 : props.backText)
      return "text";
    if (!!(props === null || props === void 0 ? void 0 : props.backIcon) && !!(props === null || props === void 0 ? void 0 : props.homeIcon))
      return "multi";
    else if (!!(props === null || props === void 0 ? void 0 : props.backIcon) || !!(props === null || props === void 0 ? void 0 : props.homeIcon))
      return "single";
    return "none";
  });
  const hasRightOperation = common_vendor.computed(() => {
    return !!(slots === null || slots === void 0 ? void 0 : slots.right);
  });
  const clickBackEvent = () => {
    const beforeBack = props.beforeBack;
    if (!beforeBack) {
      uni_modules_tuniaouiVue3_utils_uniapp_router.tnNavBack(props.indexUrl);
      return;
    }
    const shouldBack = beforeBack();
    const isPromiseOrBool = [
      common_vendor.isPromise(shouldBack),
      uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldBack)
    ].includes(true);
    if (!isPromiseOrBool) {
      uni_modules_tuniaouiVue3_utils_error.throwError("TnNavbar", "beforeBack 返回值必须是 Promise 或者 Boolean 类型");
    }
    if (common_vendor.isPromise(shouldBack)) {
      shouldBack.then((res) => {
        if (res)
          uni_modules_tuniaouiVue3_utils_uniapp_router.tnNavBack(props.indexUrl);
      }).catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnNavbar", `beforeBack 函数执行出错: ${err}`);
      });
    } else {
      if (shouldBack)
        uni_modules_tuniaouiVue3_utils_uniapp_router.tnNavBack(props.indexUrl);
    }
  };
  const clickHomeEvent = () => {
    const beforeHome = props.beforeHome;
    if (!beforeHome) {
      uni_modules_tuniaouiVue3_utils_uniapp_router.tnNavPage(props.indexUrl, "reLaunch");
      return;
    }
    const shouldBack = beforeHome();
    const isPromiseOrBool = [
      common_vendor.isPromise(shouldBack),
      uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldBack)
    ].includes(true);
    if (!isPromiseOrBool) {
      uni_modules_tuniaouiVue3_utils_error.throwError("TnNavbar", "beforeHome 返回值必须是 Promise 或者 Boolean 类型");
    }
    if (common_vendor.isPromise(shouldBack)) {
      shouldBack.then((res) => {
        if (res)
          uni_modules_tuniaouiVue3_utils_uniapp_router.tnNavPage(props.indexUrl, "reLaunch");
      }).catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnNavbar", `beforeHome 函数执行出错: ${err}`);
      });
    } else {
      if (shouldBack)
        uni_modules_tuniaouiVue3_utils_uniapp_router.tnNavPage(props.indexUrl, "reLaunch");
    }
  };
  return {
    navbackButtonType,
    hasRightOperation,
    clickBackEvent,
    clickHomeEvent
  };
};
exports.useNavbar = useNavbar;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/navbar/src/composables/use-navbar.js.map
