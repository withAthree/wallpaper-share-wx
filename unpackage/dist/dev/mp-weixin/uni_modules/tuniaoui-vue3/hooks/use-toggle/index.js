"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useToggle = (initState) => {
  const state = common_vendor.ref(initState);
  const toggle = () => {
    state.value = !state.value;
  };
  return [state, toggle];
};
exports.useToggle = useToggle;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/hooks/use-toggle/index.js.map
