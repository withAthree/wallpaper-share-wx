"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const useNotify = () => {
  const defaultOptions = {
    msg: "",
    type: "primary",
    position: "top",
    bgColor: "",
    textColor: "",
    duration: 3e3
  };
  const options = common_vendor.ref({
    msg: "",
    type: "primary",
    position: "",
    bgColor: "",
    textColor: "",
    duration: 3e3
  });
  const isActive = common_vendor.ref(false);
  const showNotify = (_options) => {
    Object.assign(options.value, defaultOptions, _options);
    isActive.value = true;
    autoCloseNotify();
  };
  let autoCloseTimer = null;
  const autoCloseNotify = () => {
    if (autoCloseTimer)
      clearTimeout(autoCloseTimer);
    autoCloseTimer = setTimeout(() => {
      isActive.value = false;
    }, options.value.duration);
  };
  return {
    options,
    isActive,
    showNotify
  };
};
exports.useNotify = useNotify;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notify/src/composables/use-notify.js.map
