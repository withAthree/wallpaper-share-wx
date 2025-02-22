"use strict";
function baseFindIndex(array, predicate, fromIndex, fromRight = false) {
  const length = array.length;
  let index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
exports.baseFindIndex = baseFindIndex;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/libs/lodash/_baseFindIndex.js.map
