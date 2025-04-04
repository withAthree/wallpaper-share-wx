"use strict";
const formatNumber = (value, len = 2, prefixZero = true) => {
  let number = 0;
  if (typeof value === "string") {
    if (value === "")
      return value;
    number = Number(value);
  } else if (typeof value === "number") {
    number = value;
  }
  if (Number.isNaN(number) || number === 0)
    return prefixZero ? "00" : "0";
  const maxNumber = Math.pow(10, len) - 1;
  if (number > maxNumber)
    return `${maxNumber}+`;
  number = String(number);
  return prefixZero ? `00${number}`.slice(Math.max(0, number.length > 2 ? 2 : number.length)) : number;
};
exports.formatNumber = formatNumber;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/utils/format.js.map
