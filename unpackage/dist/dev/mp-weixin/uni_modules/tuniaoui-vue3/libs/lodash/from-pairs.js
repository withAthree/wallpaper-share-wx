"use strict";
const common_vendor = require("../../../../common/vendor.js");
function fromPairs(pairs) {
  var e_1, _a;
  const result = {};
  if (pairs == null) {
    return result;
  }
  try {
    for (var pairs_1 = common_vendor.__values(pairs), pairs_1_1 = pairs_1.next(); !pairs_1_1.done; pairs_1_1 = pairs_1.next()) {
      var pair = pairs_1_1.value;
      result[pair[0]] = pair[1];
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (pairs_1_1 && !pairs_1_1.done && (_a = pairs_1.return))
        _a.call(pairs_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return result;
}
exports.fromPairs = fromPairs;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/libs/lodash/from-pairs.js.map
