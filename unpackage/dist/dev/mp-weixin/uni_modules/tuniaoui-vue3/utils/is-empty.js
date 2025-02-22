"use strict";
const isEmptyVariableInDefault = (variable, defaultValue = void 0) => {
  return variable === void 0 || variable === null ? defaultValue : variable;
};
exports.isEmptyVariableInDefault = isEmptyVariableInDefault;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/utils/is-empty.js.map
